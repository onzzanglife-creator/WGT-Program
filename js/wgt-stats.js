// Firestore 학습 기록(user_progress/{uid}/p1)을 읽어 홈·마이페이지의 성장/통계/진도/배지를 실제값으로 갱신하는 스크립트
(function () {
  'use strict';

  // ── 성장 단계 구간 (XP = 누적 정답 문항 수) ──
  var STAGES = [
    { name: '씨앗', min: 0 },
    { name: '새싹', min: 100 },
    { name: '잎',   min: 300 },
    { name: '나무', min: 600 },
    { name: '숲',   min: 1000 }
  ];

  function fmtDate(d) {
    return d.getFullYear() + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0');
  }

  // 가장 최근 학습일 기준으로 연속 학습일 계산
  function streakFrom(dateStrings) {
    if (!dateStrings.length) return 0;
    var set = {};
    dateStrings.forEach(function (d) { set[d] = true; });
    var uniq = Object.keys(set).sort();
    var cursor = new Date(uniq[uniq.length - 1] + 'T00:00:00');
    var count = 0;
    while (set[fmtDate(cursor)]) {
      count++;
      cursor.setDate(cursor.getDate() - 1);
    }
    return count;
  }

  function computeGrowth(xp) {
    var idx = 0;
    for (var i = 0; i < STAGES.length; i++) {
      if (xp >= STAGES[i].min) idx = i;
    }
    var cur = STAGES[idx];
    var next = STAGES[idx + 1];
    var pct, xpToNext;
    if (next) {
      pct = Math.round(((xp - cur.min) / (next.min - cur.min)) * 100);
      xpToNext = next.min - xp;
    } else {
      pct = 100;
      xpToNext = 0;
    }
    return {
      stageName: cur.name,
      stageIndex: idx,
      pct: Math.max(0, Math.min(100, pct)),
      xpToNext: xpToNext,
      level: Math.floor(xp / 50) + 1, // 정답 50문항당 1레벨
      isMax: !next
    };
  }

  function aggregate(docs) {
    var sentences = 0, correct = 0, perPattern = {}, perLevel = {}, dates = [];
    docs.forEach(function (d) {
      var t = parseInt(d.total, 10) || 0;
      var s = parseInt(d.score, 10) || 0;
      sentences += t;
      correct += s;
      var p = d.pattern;
      if (p) {
        perPattern[p] = perPattern[p] || { s: 0, t: 0 };
        perPattern[p].s += s;
        perPattern[p].t += t;
      }
      // 직독직해 레벨별 완료 지문 수 (문서 1개 = 완료 지문 1개)
      if (d.level != null) {
        perLevel[d.level] = (perLevel[d.level] || 0) + 1;
      }
      if (d.completedAt && typeof d.completedAt.toDate === 'function') {
        dates.push(fmtDate(d.completedAt.toDate()));
      }
    });
    return {
      sessions: docs.length,
      sentences: sentences,
      correct: correct,
      accuracy: sentences ? Math.round((correct / sentences) * 100) : 0,
      xp: correct,
      streak: streakFrom(dates),
      perPattern: perPattern,
      perLevel: perLevel
    };
  }

  function patternPct(perPattern, p) {
    var x = perPattern[p];
    if (!x || !x.t) return 0;
    return Math.round((x.s / x.t) * 100);
  }

  function setText(el, text) { if (el) el.textContent = text; }

  function render(stats, five, reader) {
    var g = computeGrowth(stats.xp);

    // ── 성장 카드 (홈·마이 공통) ──
    setText(document.querySelector('.lv-badge b'), g.level);
    setText(document.querySelector('.growth-stage-name'), g.stageName + ' 단계');
    var xpEl = document.querySelector('.growth-xp');
    if (xpEl) xpEl.textContent = g.isMax ? '최고 단계 달성!' : ('다음 단계까지 ' + g.xpToNext + ' XP');
    var pctEl = document.querySelector('.growth-pct');
    if (pctEl) pctEl.innerHTML = g.pct + '<span>%</span>';
    var barEl = document.querySelector('.growth-bar > i');
    if (barEl) barEl.style.width = g.pct + '%';
    var gsEls = document.querySelectorAll('.growth-stages .gs');
    gsEls.forEach(function (el, i) {
      el.classList.remove('done', 'cur');
      if (i < g.stageIndex) el.classList.add('done');
      else if (i === g.stageIndex) el.classList.add('cur');
    });
    var pmEl = document.querySelector('[data-profile-meta]');
    if (pmEl) pmEl.textContent = 'Lv.' + g.level + ' · ' + g.stageName + ' 단계';

    // ── 통계 타일 (마이) ──
    setText(document.querySelector('[data-stat="sentences"]'), stats.sentences);
    var accEl = document.querySelector('[data-stat="accuracy"]');
    if (accEl) accEl.innerHTML = stats.accuracy + '<span>%</span>';
    setText(document.querySelector('[data-stat="streak"]'), stats.streak);

    // ── 형식별 진도 (마이) ──
    document.querySelectorAll('.prog-row[data-pattern]').forEach(function (row) {
      var p = row.getAttribute('data-pattern');
      var pct = patternPct(stats.perPattern, p);
      var fill = row.querySelector('.bar > i');
      var label = row.querySelector('em');
      if (fill) fill.style.width = pct + '%';
      if (label) label.textContent = pct + '%';
    });

    // ── 배지 (마이) ──
    var earned = {
      first: stats.sessions >= 1,
      streak: stats.streak >= 7,
      p1: patternPct(stats.perPattern, '1') >= 90,
      review: stats.sentences >= 200
    };
    document.querySelectorAll('.badge-item[data-badge]').forEach(function (el) {
      var key = el.getAttribute('data-badge');
      if (earned[key]) el.classList.remove('locked');
      else el.classList.add('locked');
    });

    // ── 학습별 통계 (마이) ──
    if (five) {
      setText(document.querySelector('[data-prog-five="sentences"]'), five.sentences);
      var fAcc = document.querySelector('[data-prog-five="accuracy"]');
      if (fAcc) fAcc.innerHTML = five.accuracy + '<span>%</span>';
      setText(document.querySelector('[data-prog-five="sessions"]'), five.sessions);
    }
    if (reader) {
      setText(document.querySelector('[data-prog-reader="passages"]'), reader.sessions);
      var rAcc = document.querySelector('[data-prog-reader="accuracy"]');
      if (rAcc) rAcc.innerHTML = reader.accuracy + '<span>%</span>';
      setText(document.querySelector('[data-prog-reader="sentences"]'), reader.sentences);

      // ── 직독직해 레벨별 진도 (완료 지문 수 / 목표 5) ──
      var READER_TARGET = 5;
      document.querySelectorAll('.prog-row[data-reader-level]').forEach(function (row) {
        var lv = row.getAttribute('data-reader-level');
        var done = (reader.perLevel && reader.perLevel[lv]) || 0;
        var pct = Math.min(100, Math.round((done / READER_TARGET) * 100));
        var fill = row.querySelector('.bar > i');
        var label = row.querySelector('em');
        if (fill) fill.style.width = pct + '%';
        if (label) label.textContent = done + '/' + READER_TARGET;
      });
    }
  }

  function load(uid) {
    var base = firebase.firestore().collection('user_progress').doc(uid);
    Promise.all([
      base.collection('p1').get(),
      base.collection('reader').get()
    ])
      .then(function (snaps) {
        var p1 = [], rd = [];
        snaps[0].forEach(function (doc) { p1.push(doc.data()); });
        snaps[1].forEach(function (doc) { rd.push(doc.data()); });
        // 누적(전체) = 5형식 + 직독직해 합산 / 학습별 = 각각 집계
        render(aggregate(p1.concat(rd)), aggregate(p1), aggregate(rd));
      })
      .catch(function (e) {
        console.error('학습 통계 로드 오류:', e);
      });
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (typeof firebase === 'undefined' || !firebase.auth) return;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) load(user.uid);
    });
  });
})();
