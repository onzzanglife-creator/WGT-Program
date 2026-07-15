// WGT 공통 엔진 모듈 — 5형식 processRawRows 함수 및 ADV 상수 (CDN 방식)

// ══════════════════════════════════════════════
// ADV 상수 (1~5형식 전체 파일 키 통합)
// ══════════════════════════════════════════════
const ADV = {
  TODAY_EN: { 현재: "today",        과거: "yesterday",    미래: "tomorrow"       },
  TODAY_KR: { 현재: "오늘",          과거: "어제",          미래: "내일"            },
  NOW_EN:   { 현재: "now",           과거: "at that time", 미래: "later"          },
  NOW_KR:   { 현재: "지금",          과거: "그 당시에",     미래: "나중에"          },
  NOW_KR1:  { 현재: "지금",          과거: "그때",          미래: "나중에"          },
  NOW_KR2:  { 현재: "이제",          과거: "그때",          미래: "나중에"          },
  RN_EN:    { 현재: "right now",     과거: "then",         미래: "soon"           },
  RN_KR:    { 현재: "지금 당장",     과거: "그때",          미래: "곧"             },
  RN_KR1:   { 현재: "지금 당장",     과거: "그 당시에",     미래: "곧"             },
  RN_KR2:   { 현재: "지금 당장은",   과거: "그때는",        미래: "조만간"          },
  RN_KR3:   { 현재: "당장은",        과거: "그 당시에",     미래: "조만간"          },
  TD_EN:    { 현재: "these days",    과거: "in those days", 미래: "in the future" },
  TD_KR:    { 현재: "요즘",          과거: "그 당시에",     미래: "앞으로는"        },
  TN_EN:    { 현재: "tonight",       과거: "last night",   미래: "tomorrow night" },
  TN_KR:    { 현재: "오늘 밤",       과거: "어젯밤",        미래: "내일 밤"         },
  TN_KR2:   { 현재: "오늘 밤에",     과거: "어젯밤에",      미래: "내일 밤에"       },
  TY_EN:    { 현재: "this year",     과거: "last year",    미래: "next year"      },
  TY_KR:    { 현재: "올해에",        과거: "작년에",        미래: "내년에"          },
  TW_EN:    { 현재: "this week",     과거: "last week",    미래: "next week"      },
  TW_KR:    { 현재: "이번 주에",     과거: "지난주에",      미래: "다음 주에"       },
  UN_EN:    { 현재: "until now",     과거: "until then",   미래: "until the end"  },
  UN_KR:    { 현재: "지금까지",      과거: "그때까지",      미래: "끝까지"          },
};

// ══════════════════════════════════════════════
// 공통 헬퍼
// ══════════════════════════════════════════════
function resolveAdv(adv, tense) {
  if (typeof adv === 'object' && adv !== null) return adv[tense];
  return adv;
}

// ══════════════════════════════════════════════
// 한국어 어순 자동 정렬
// 규칙: S → 이유 → 시간 → 방법 → 장소 → 목적어(O/IO/DO/OC) → 양태·정도 → V
// 부사 유형은 대응 영어 청크(전치사 등)로 판별. 판별 불가 시 기존 위치 유지.
// ══════════════════════════════════════════════
function timeRank(s) {
  let g = 1; // 사건 단위(during the lecture 등)·시각
  if (/(year|season|winter|summer|spring|fall|autumn|these days|those days|past|future|annually|december|january|november)/.test(s)) g = 5;
  else if (/(week|weekend|weekday|month|sundays|mondays|saturdays|fridays)/.test(s)) g = 4;
  else if (/(today|yesterday|tomorrow|every day|days|birthday|holiday)/.test(s)) g = 3;
  else if (/(morning|afternoon|evening|night|tonight|noon|midnight|dawn|sunrise|sunset)/.test(s)) g = 2;
  return 2 - g * 0.01; // 큰 단위일수록 앞으로
}

function advRank(en) {
  const s = (en || "").toLowerCase().trim();
  if (!s) return 4.5;
  const words = s.split(/\s+/);
  const last = words[words.length - 1];

  // 문장 부사 (다행히도/불행히도 등) → 문두 근처
  if (/^(unfortunately|fortunately|luckily|thankfully|sadly|by any chance)$/.test(s)) return 1;

  // 날씨·상황 (in the rain, in cold weather 등) → 시간 뒤, 장소 앞
  if (/^(in|under)\b/.test(s) && /(rain|snow|weather|storm|breeze|fog|heat|cold|dark|sun|sunlight|wind)$/.test(last)) return 2.5;

  // 이유·목적·양보
  if (/^(because of|due to|out of|thanks to|despite|in case of|against)\b/.test(s)) return 1;
  if (/^(in general|in reality|in theory|in fact|on paper|as a rule|as expected|as planned|to be honest|quite naturally|quite obviously)$/.test(s)) return 1;
  if (/^to\b/.test(s)) {
    if (/^to (a|an|the|my|his|her|your|our|their|its|this|that|these|those)\b/.test(s) || /^to [a-z']+$/.test(s)) return 4; // 장소 (to the park, to school)
    return 3.5; // to부정사 목적 (to buy the ticket 등) — 방법과 장소 사이
  }
  if (/^for\b/.test(s)) {
    // 기간 표현이면 시간
    if (/^for (a while|a long time|long|ever|the (first|second|third) time|(a|an|the )?\d|(a few|few|some|many) )/.test(s) ||
        /(hours?|minutes?|weeks?|months?|years?|days?|seconds?|moments?|a while|long)$/.test(last + (s.endsWith("a while") ? " a while" : ""))) return timeRank(s);
    return 1; // 목적
  }

  // 시간 (전치사·한정사 기반)
  if (/^(every|during|after|before|until|till|since|while|when)\b/.test(s)) return timeRank(s);
  if (/^(today|yesterday|tomorrow|tonight|now|later|soon|then|recently|already|finally|at last|at first|first|suddenly|all of a sudden|immediately|in advance|over time|in no time|these days|in those days|right now|at that time|at any time|day and night|around the clock|overtime|part-time)$/.test(s)) return timeRank(s);
  if (/^(this|last|next) (year|week|month|morning|night|evening|summer|winter|spring|fall|weekend)/.test(s)) return timeRank(s);
  if (/^all (day|night|morning|year|week)/.test(s)) return timeRank(s);

  // 방법 특수 표현 (at/in/on으로 시작하지만 방법인 것들)
  if (/^(on foot|on purpose|on his own|on her own|on their own|on your own|on my own|in a hurry|in person|in shifts|in secret|in silence|hand in hand|one by one|barefoot|empty-handed|out of breath)$/.test(s)) return 3;
  // 시간 특수 (on time 등)
  if (/^(on time|in time|exactly on time|too early|too late)$/.test(s)) return timeRank(s);

  // at/in/on: 마지막 단어가 시간 명사면 시간, 아니면 장소
  if (/^(at|in|on)\b/.test(s)) {
    if (/^(night|nights|noon|midnight|dawn|sunrise|sunset|morning|mornings|afternoon|evening|evenings|weekend|weekends|weekday|weekdays|holiday|holidays|day|days|hour|hours|time|moment|past|future|end|beginning|first|spring|summer|fall|autumn|winter|january|february|march|april|may|june|july|august|september|october|november|december|monday|tuesday|wednesday|thursday|friday|saturday|sunday|mondays|tuesdays|wednesdays|thursdays|fridays|saturdays|sundays|birthday|christmas|occasions|rush|recess|break|breaks|class|lesson|lecture|test|exam|exams|meeting|meetings|interview|interviews|shift|shifts|season|seasons|vacation|vacations|trip|match|matches|game|games|conversation|dinner|lunch|lunchtime|dinnertime|breakfast|life)$/.test(last) ||
        /\d/.test(last) || /o'clock|a\.m\.|p\.m\./.test(s)) return timeRank(s);
    return 4; // 장소
  }

  // 방법·도구·동반·비유
  if (/^by (the|his|her|my|your|its|our|their)\b/.test(s)) return 4; // by the window = 장소
  if (/^(by|with|without|through|via|like|as)\b/.test(s)) return 3;
  if (/^(together|alone|all alone)$/.test(s)) return 3;

  // 양태·정도 (마지막 단어가 -ly 이거나 양태 단어)
  if (/ly$/.test(last) ||
      /^(well|hard|fast|slow|slowly|late|early|enough|much|more|longer|better|straight|wide|deep|deeply|back|away|a lot|a little|a little bit|too fast|too long|at all|even once|twice|a wink|forever)$/.test(s)) return 6;

  // 장소
  if (/^(to|at|in|on|into|near|under|over|around|along|from|inside|outside|behind|above|beside|between|among|across|past|up|down|toward|towards|out|abroad|home|here|there|upstairs|downstairs|south|north|east|west|somewhere|anywhere|everywhere|next door|backstage|underground|behind)\b/.test(s)) return 4;

  return 4.5; // 미분류: 기존 위치(목적어 앞) 유지
}

// 관형형(뒤 명사를 꾸미는 수식어: "프로젝트를 위한", "회의에 대한", "문을 여는" 등) 감지
// → 목적어 바로 앞에 붙어야 자연스러움
function isAdnominalKor(kor) {
  if (!kor) return false;
  const k = kor.trim();
  if (/의$/.test(k)) return true;                                     // 고객들과의, 방의
  if (/는$/.test(k) && !/(없이|에게|한테|다시|로|에|서|과|와|지|고|까|이|게|도|만|때)는$/.test(k)) return true; // 여는, 가는 (단, ~없이는/에게는/로는 등 보조사 제외)
  if (/(위한|대한|받은|딴|이길|말할|고칠)$/.test(k)) return true;
  const m = k.match(/[을를] ([가-힣]+)$/);                             // "표를 살" 등: 목적격 + ㄹ받침 동사
  if (m) {
    const code = m[1].charCodeAt(m[1].length - 1) - 0xAC00;
    if (code >= 0 && code % 28 === 8) return true;
  }
  return false;
}

const KOR_ROLE_RANK = { S: 0, IO: 5.0, O: 5.02, DO: 5.02, C: 5.02, OC: 5.1, V: 7 };
function advRankKor(kor, en) {
  if (isAdnominalKor(kor)) return 5.01;            // 목적어(DO) 바로 앞
  if (/러$/.test((kor || "").trim())) return 3.5;  // 공부하러, 산책하러 — 장소 앞
  return advRank(en);
}
// 지각·희망 동사는 양태 부사가 보어의 행위를 수식 ("비행기가 안전하게 착륙하는 것을 본다")
const PERCEPTION_VERBS = /^(see|hear|watch|listen|feel|notice|smell|want)$/;
function orderKorChunks(chunks, vBase) {
  const shiftManner = PERCEPTION_VERBS.test(vBase || "");
  return chunks
    .map((c, i) => {
      let r = c[1] === "A" ? advRankKor(c[0], c[2]) : (KOR_ROLE_RANK[c[1]] !== undefined ? KOR_ROLE_RANK[c[1]] : 4.5);
      if (r === 6 && shiftManner) r = 5.05; // 목적어 뒤·보어 앞
      return { c, i, r };
    })
    .sort((a, b) => (a.r - b.r) || (a.i - b.i))
    .map(x => [x.c[0], x.c[1]]);
}

// 미래 의문 "~까?"는 제안으로 오해될 수 있어 "~ㄹ 거니?"로 통일
function fixKorQuestion(kor) {
  if (typeof kor !== "string") return kor;
  return kor.replace(/까\?$/, " 거니?");
}


// 통합 불규칙 동사 맵
const IRREGULARS = {
  // 1형식
  go: 'went', come: 'came', run: 'ran', sleep: 'slept', arrive: 'arrived',
  // 2형식 linking
  become: 'became', feel: 'felt', get: 'got', turn: 'turned',
  remain: 'remained', stay: 'stayed', seem: 'seemed', look: 'looked',
  sound: 'sounded', smell: 'smelled', taste: 'tasted',
  // 3형식
  have: 'had', make: 'made', do: 'did', buy: 'bought', know: 'knew',
  take: 'took', see: 'saw', wear: 'wore',
  // 4형식
  give: 'gave', send: 'sent', tell: 'told', bring: 'brought',
  teach: 'taught', lend: 'lent',
  // 5형식
  hear: 'heard', let: 'let', find: 'found',
};

// ══════════════════════════════════════════════
// 1형식: S + V + A  (isThereBe 옵션 포함)
// ══════════════════════════════════════════════
function processRawRows1(subjPlurals, TENSES, rawRows, isThereBe = false) {
  const result = { 기초: { 현재:[], 과거:[], 미래:[] }, 기본: { 현재:[], 과거:[], 미래:[] }, 도전: { 현재:[], 과거:[], 미래:[] } };

  function getVerbChunks(subj, tense, pol, vBase) {
    const isPlural = subjPlurals.includes(subj) || subj === "We" || subj === "You" || subj === "They";
    const isI = (subj === "I");
    let vEs = vBase + (vBase.endsWith('s') || vBase.endsWith('ch') || vBase.endsWith('o') || vBase === 'go' ? "es" : "s");
    let vPast = IRREGULARS[vBase] || (vBase + "ed");

    if (tense === "현재") {
      if (pol === "긍정") return { v: isPlural || isI ? vBase : vEs, q: null };
      if (pol === "부정") return { v: isPlural || isI ? `do not ${vBase}` : `does not ${vBase}`, q: null };
      return { v: vBase, q: isPlural || isI ? "Do" : "Does" };
    }
    if (tense === "과거") {
      if (pol === "긍정") return { v: vPast, q: null };
      if (pol === "부정") return { v: `did not ${vBase}`, q: null };
      return { v: vBase, q: "Did" };
    }
    // 미래
    if (pol === "긍정") return { v: `will ${vBase}`, q: null };
    if (pol === "부정") return { v: `won't ${vBase}`, q: null };
    return { v: vBase, q: "Will" };
  }

  TENSES.forEach(tense => {
    rawRows.forEach(r => {
      const isQ = r.p === "의문";
      const sKorStr = r.s_kor;
      let sEnStr = r.s;
      if ((isQ || isThereBe) && sEnStr !== "I") {
        sEnStr = sEnStr.charAt(0).toLowerCase() + sEnStr.slice(1);
      }
      const predKorStr = fixKorQuestion(r.kor[tense]);
      const bEnStr  = resolveAdv(r.b_en,    tense);
      const bKorStr = resolveAdv(r.b_kor,   tense);
      const cEn0    = resolveAdv(r.c_en[0], tense);
      const cEn1    = resolveAdv(r.c_en[1], tense);
      const cKor0   = resolveAdv(r.c_kor[0], tense);
      const cKor1   = resolveAdv(r.c_kor[1], tense);

      function makeObj(chEn, chKor) {
        chKor = orderKorChunks(chKor, r.vBase);
        const finalChEn = chEn.map((x, i) => i === chEn.length - 1 ? [x[0] + (isQ ? "?" : "."), x[1]] : [x[0], x[1]]);
        return { full: finalChEn.map(x => x[0]).join(' '), kor: chKor, chunks: finalChEn };
      }

      let enChunksA = [];
      if (isThereBe) {
        const isPlural = subjPlurals.includes(r.s) || r.s.includes('Many') || r.s.includes('People') || r.s.includes('Some') || r.s.includes('Two') || r.s.includes('lot of') || r.s.includes('Any') || r.s.endsWith('s');
        let vThere, vThereNeg, qThere;
        if (tense === "현재")      { vThere = isPlural ? "There are" : "There is";   vThereNeg = isPlural ? "There are not" : "There is not";   qThere = isPlural ? "Are there" : "Is there"; }
        else if (tense === "과거") { vThere = isPlural ? "There were" : "There was"; vThereNeg = isPlural ? "There were not" : "There was not"; qThere = isPlural ? "Were there" : "Was there"; }
        else                       { vThere = "There will be"; vThereNeg = "There won't be"; qThere = "Will there be"; }

        if (isQ)           enChunksA.push([qThere, "V"], [sEnStr, "S"]);
        else if (r.p === "부정") enChunksA.push([vThereNeg, "V"], [sEnStr, "S"]);
        else               enChunksA.push([vThere, "V"], [sEnStr, "S"]);
      } else {
        const vInfo = getVerbChunks(r.s, tense, r.p, r.vBase);
        if (isQ) {
          if (vInfo.q) enChunksA.push([vInfo.q, "V"]);
          enChunksA.push([sEnStr, "S"]);
          if (vInfo.v) enChunksA.push([vInfo.v, "V"]);
        } else {
          enChunksA.push([sEnStr, "S"], [vInfo.v, "V"]);
        }
      }
      enChunksA.push([bEnStr, "A"]);

      const korA = [[sKorStr, "S"], [bKorStr, "A", bEnStr], [predKorStr, "V"]];
      result["기초"][tense].push(makeObj(enChunksA, korA));

      const enChunksB = [...enChunksA.map(x => [...x]), [cEn0, "A"]];
      const korB = [[sKorStr, "S"], [bKorStr, "A", bEnStr], [cKor0, "A", cEn0], [predKorStr, "V"]];
      result["기본"][tense].push(makeObj(enChunksB, korB));

      const enChunksC = [...enChunksB.map(x => [...x]), [cEn1, "A"]];
      const korC = [[sKorStr, "S"], [bKorStr, "A", bEnStr], [cKor0, "A", cEn0], [cKor1, "A", cEn1], [predKorStr, "V"]];
      result["도전"][tense].push(makeObj(enChunksC, korC));
    });
  });
  return result;
}

// ══════════════════════════════════════════════
// 2형식: S + V + C  (isBeVerb 옵션 포함)
// ══════════════════════════════════════════════
function processRawRows2(subjPlurals, TENSES, rawRows, isBeVerb = false) {
  const result = { 기초: { 현재:[], 과거:[], 미래:[] }, 기본: { 현재:[], 과거:[], 미래:[] }, 도전: { 현재:[], 과거:[], 미래:[] } };

  function getVerbChunks(subj, tense, pol, vBase) {
    const isPlural = subjPlurals.includes(subj) || subj === "We" || subj === "You" || subj === "They";
    const isI = (subj === "I");

    if (isBeVerb) {
      if (tense === "현재") {
        if (pol === "긍정") return { v: isI ? "am" : (isPlural ? "are" : "is"), q: null };
        if (pol === "부정") return { v: isI ? "am not" : (isPlural ? "are not" : "is not"), q: null };
        return { v: null, q: isI ? "Am" : (isPlural ? "Are" : "Is") };
      }
      if (tense === "과거") {
        if (pol === "긍정") return { v: isPlural || isI ? "were" : "was", q: null };
        if (pol === "부정") return { v: isPlural || isI ? "were not" : "was not", q: null };
        return { v: null, q: isPlural || isI ? "Were" : "Was" };
      }
      if (pol === "긍정") return { v: "will be", q: null };
      if (pol === "부정") return { v: "won't be", q: null };
      return { v: "be", q: "Will" };
    }

    // 일반 연결동사
    let vEs = vBase + (vBase.endsWith('s') || vBase.endsWith('ch') ? "es" : "s");
    let vPast = IRREGULARS[vBase] || (vBase + "ed");
    if (tense === "현재") {
      if (pol === "긍정") return { v: isPlural ? vBase : vEs, q: null };
      if (pol === "부정") return { v: isPlural ? `do not ${vBase}` : `does not ${vBase}`, q: null };
      return { v: vBase, q: isPlural ? "Do" : "Does" };
    }
    if (tense === "과거") {
      if (pol === "긍정") return { v: vPast, q: null };
      if (pol === "부정") return { v: `did not ${vBase}`, q: null };
      return { v: vBase, q: "Did" };
    }
    if (pol === "긍정") return { v: `will ${vBase}`, q: null };
    if (pol === "부정") return { v: `won't ${vBase}`, q: null };
    return { v: vBase, q: "Will" };
  }

  TENSES.forEach(tense => {
    rawRows.forEach(r => {
      const isQ = r.p === "의문";
      const sKorStr = r.s_kor;
      let sEnStr = r.s;
      if (isQ && !["I","You","We","They","He","She","It"].includes(sEnStr)) {
        if      (sEnStr.startsWith("The ")) sEnStr = "the " + sEnStr.slice(4);
        else if (sEnStr.startsWith("My "))  sEnStr = "my "  + sEnStr.slice(3);
        else if (sEnStr.startsWith("His ")) sEnStr = "his " + sEnStr.slice(4);
        else if (sEnStr.startsWith("Her ")) sEnStr = "her " + sEnStr.slice(4);
        else sEnStr = sEnStr.toLowerCase();
      }
      const vInfo      = getVerbChunks(r.s, tense, r.p, r.vBase);
      const predKorStr = fixKorQuestion(r.kor[tense]);
      const bEnStr     = resolveAdv(r.b_en,    tense);
      const bKorStr    = resolveAdv(r.b_kor,   tense);
      const cEn0       = resolveAdv(r.c_en[0], tense);
      const cEn1       = resolveAdv(r.c_en[1], tense);
      const cKor0      = resolveAdv(r.c_kor[0], tense);
      const cKor1      = resolveAdv(r.c_kor[1], tense);

      function makeObj(chEn, chKor) {
        chKor = orderKorChunks(chKor, r.vBase);
        const finalChEn = chEn.map((x, i) => i === chEn.length - 1 ? [x[0] + (isQ ? "?" : "."), x[1]] : [x[0], x[1]]);
        return { full: finalChEn.map(x => x[0]).join(' '), kor: chKor, chunks: finalChEn };
      }

      let enChunksA = [];
      if (isQ) {
        if (vInfo.q) enChunksA.push([vInfo.q, "V"]);
        enChunksA.push([sEnStr, "S"]);
        if (vInfo.v) enChunksA.push([vInfo.v, "V"]);
        enChunksA.push([r.c, "C"]);
      } else {
        enChunksA.push([sEnStr, "S"], [vInfo.v, "V"], [r.c, "C"]);
      }
      const korA = [[sKorStr, "S"], [predKorStr, "V"]];
      result["기초"][tense].push(makeObj(enChunksA, korA));

      const enChunksB = [...enChunksA.map(x => [...x]), [bEnStr, "A"]];
      const korB = [[sKorStr, "S"], [bKorStr, "A", bEnStr], [predKorStr, "V"]];
      result["기본"][tense].push(makeObj(enChunksB, korB));

      const enChunksC = [...enChunksA.map(x => [...x]), [cEn0, "A"], [cEn1, "A"]];
      const korC = [[sKorStr, "S"], [cKor0, "A", cEn0], [cKor1, "A", cEn1], [predKorStr, "V"]];
      result["도전"][tense].push(makeObj(enChunksC, korC));
    });
  });
  return result;
}

// ══════════════════════════════════════════════
// 3형식: S + V + O
// ══════════════════════════════════════════════
function processRawRows3(subjPlurals, TENSES, rawRows) {
  const result = { 기초: { 현재:[], 과거:[], 미래:[] }, 기본: { 현재:[], 과거:[], 미래:[] }, 도전: { 현재:[], 과거:[], 미래:[] } };

  function getVerbChunks(subj, tense, pol, vBase) {
    const isPlural = subjPlurals.includes(subj) || subj === "We" || subj === "You" || subj === "They" || subj === "I";
    const is3rd = !isPlural;
    let vEs = vBase === "have" ? "has" : vBase === "do" ? "does" : vBase + "s";
    let vPast = IRREGULARS[vBase] || (vBase + "ed");

    if (tense === "현재") {
      if (pol === "긍정") return { v: is3rd ? vEs : vBase, q: null };
      if (pol === "부정") return { v: is3rd ? `does not ${vBase}` : `do not ${vBase}`, q: null };
      return { v: vBase, q: is3rd ? "Does" : "Do" };
    }
    if (tense === "과거") {
      if (pol === "긍정") return { v: vPast, q: null };
      if (pol === "부정") return { v: `did not ${vBase}`, q: null };
      return { v: vBase, q: "Did" };
    }
    if (pol === "긍정") return { v: `will ${vBase}`, q: null };
    if (pol === "부정") return { v: `won't ${vBase}`, q: null };
    return { v: vBase, q: "Will" };
  }

  TENSES.forEach(tense => {
    rawRows.forEach(r => {
      const isQ = r.p === "의문";
      const sKorStr = r.s_kor;
      let sEnStr = r.s;
      if (isQ && sEnStr !== "I") {
        if      (sEnStr.startsWith("The ")) sEnStr = "the " + sEnStr.slice(4);
        else if (sEnStr.startsWith("My "))  sEnStr = "my "  + sEnStr.slice(3);
        else sEnStr = sEnStr.charAt(0).toLowerCase() + sEnStr.slice(1);
      }
      const vInfo      = getVerbChunks(r.s, tense, r.p, r.vBase);
      const predKorStr = fixKorQuestion(r.kor[tense]);
      const bEnStr     = resolveAdv(r.b_en,    tense);
      const bKorStr    = resolveAdv(r.b_kor,   tense);
      const cEn0       = resolveAdv(r.c_en[0], tense);
      const cKor0      = resolveAdv(r.c_kor[0], tense);

      function makeObj(chEn, chKor) {
        chKor = orderKorChunks(chKor, r.vBase);
        const finalChEn = chEn.map((x, i) => i === chEn.length - 1 ? [x[0] + (isQ ? "?" : "."), x[1]] : [x[0], x[1]]);
        return { full: finalChEn.map(x => x[0]).join(' '), kor: chKor, chunks: finalChEn };
      }

      let enChunksA = [];
      if (isQ) {
        if (vInfo.q) enChunksA.push([vInfo.q, "V"]);
        enChunksA.push([sEnStr, "S"]);
        if (vInfo.v) enChunksA.push([vInfo.v, "V"]);
      } else {
        enChunksA.push([sEnStr, "S"], [vInfo.v, "V"]);
      }
      enChunksA.push([r.o, "O"]);

      const korA = [[sKorStr, "S"], [r.o_kor, "O"], [predKorStr, "V"]];
      result["기초"][tense].push(makeObj(enChunksA, korA));

      const enChunksB = [...enChunksA.map(x => [...x]), [bEnStr, "A"]];
      const korB = [[sKorStr, "S"], [bKorStr, "A", bEnStr], [r.o_kor, "O"], [predKorStr, "V"]];
      result["기본"][tense].push(makeObj(enChunksB, korB));

      const enChunksC = [...enChunksB.map(x => [...x]), [cEn0, "A"]];
      const korC = [[sKorStr, "S"], [bKorStr, "A", bEnStr], [r.o_kor, "O"], [cKor0, "A", cEn0], [predKorStr, "V"]];
      result["도전"][tense].push(makeObj(enChunksC, korC));
    });
  });
  return result;
}

// ══════════════════════════════════════════════
// 4형식: S + V + IO + DO
// ══════════════════════════════════════════════
function processRawRows4(subjPlurals, TENSES, rawRows) {
  const result = { 기초: { 현재:[], 과거:[], 미래:[] }, 기본: { 현재:[], 과거:[], 미래:[] }, 도전: { 현재:[], 과거:[], 미래:[] } };

  function getVerbChunks(subj, tense, pol, vBase) {
    const isPlural = subjPlurals.includes(subj) || subj === "We" || subj === "You" || subj === "They" || subj === "I";
    const is3rd = !isPlural;
    let vEs = vBase === "teach" ? "teaches" : vBase + "s";
    let vPast = IRREGULARS[vBase] || (vBase + "ed");

    if (tense === "현재") {
      if (pol === "긍정") return { v: is3rd ? vEs : vBase, q: null };
      if (pol === "부정") return { v: is3rd ? `does not ${vBase}` : `do not ${vBase}`, q: null };
      return { v: vBase, q: is3rd ? "Does" : "Do" };
    }
    if (tense === "과거") {
      if (pol === "긍정") return { v: vPast, q: null };
      if (pol === "부정") return { v: `did not ${vBase}`, q: null };
      return { v: vBase, q: "Did" };
    }
    if (pol === "긍정") return { v: `will ${vBase}`, q: null };
    if (pol === "부정") return { v: `won't ${vBase}`, q: null };
    return { v: vBase, q: "Will" };
  }

  TENSES.forEach(tense => {
    rawRows.forEach(r => {
      const isQ = r.p === "의문";
      const sKorStr = r.s_kor;
      let sEnStr = r.s;
      if (isQ && sEnStr !== "I") {
        if      (sEnStr.startsWith("The ")) sEnStr = "the " + sEnStr.slice(4);
        else if (sEnStr.startsWith("My "))  sEnStr = "my "  + sEnStr.slice(3);
        else sEnStr = sEnStr.charAt(0).toLowerCase() + sEnStr.slice(1);
      }
      const vInfo      = getVerbChunks(r.s, tense, r.p, r.vBase);
      const predKorStr = fixKorQuestion(r.kor[tense]);
      const bEnStr     = resolveAdv(r.b_en,    tense);
      const bKorStr    = resolveAdv(r.b_kor,   tense);
      const cEn0       = resolveAdv(r.c_en[0], tense);
      const cKor0      = resolveAdv(r.c_kor[0], tense);

      function makeObj(chEn, chKor) {
        chKor = orderKorChunks(chKor, r.vBase);
        const finalChEn = chEn.map((x, i) => i === chEn.length - 1 ? [x[0] + (isQ ? "?" : "."), x[1]] : [x[0], x[1]]);
        return { full: finalChEn.map(x => x[0]).join(' '), kor: chKor, chunks: finalChEn };
      }

      let enChunksA = [];
      if (isQ) {
        if (vInfo.q) enChunksA.push([vInfo.q, "V"]);
        enChunksA.push([sEnStr, "S"]);
        if (vInfo.v) enChunksA.push([vInfo.v, "V"]);
      } else {
        enChunksA.push([sEnStr, "S"], [vInfo.v, "V"]);
      }
      enChunksA.push([r.io, "IO"], [r.do, "DO"]);

      const korA = [[sKorStr, "S"], [r.io_kor, "IO"], [r.do_kor, "DO"], [predKorStr, "V"]];
      result["기초"][tense].push(makeObj(enChunksA, korA));

      const enChunksB = [...enChunksA.map(x => [...x]), [bEnStr, "A"]];
      const korB = [[sKorStr, "S"], [bKorStr, "A", bEnStr], [r.io_kor, "IO"], [r.do_kor, "DO"], [predKorStr, "V"]];
      result["기본"][tense].push(makeObj(enChunksB, korB));

      const enChunksC = [...enChunksB.map(x => [...x]), [cEn0, "A"]];
      const korC = [[sKorStr, "S"], [bKorStr, "A", bEnStr], [r.io_kor, "IO"], [r.do_kor, "DO"], [cKor0, "A", cEn0], [predKorStr, "V"]];
      result["도전"][tense].push(makeObj(enChunksC, korC));
    });
  });
  return result;
}

// ══════════════════════════════════════════════
// 5형식: S + V + O + OC
// ══════════════════════════════════════════════
function processRawRows5(subjPlurals, TENSES, rawRows) {
  const result = { 기초: { 현재:[], 과거:[], 미래:[] }, 기본: { 현재:[], 과거:[], 미래:[] }, 도전: { 현재:[], 과거:[], 미래:[] } };

  function getVerbChunks(subj, tense, pol, vBase) {
    const isPlural = subjPlurals.includes(subj) || subj === "We" || subj === "You" || subj === "They" || subj === "I";
    const is3rd = !isPlural;
    let vEs = vBase === "watch" ? "watches" : vBase === "have" ? "has" : vBase + "s";
    let vPast = IRREGULARS[vBase] || (vBase + "ed");

    if (tense === "현재") {
      if (pol === "긍정") return { v: is3rd ? vEs : vBase, q: null };
      if (pol === "부정") return { v: is3rd ? `does not ${vBase}` : `do not ${vBase}`, q: null };
      return { v: vBase, q: is3rd ? "Does" : "Do" };
    }
    if (tense === "과거") {
      if (pol === "긍정") return { v: vPast, q: null };
      if (pol === "부정") return { v: `did not ${vBase}`, q: null };
      return { v: vBase, q: "Did" };
    }
    if (pol === "긍정") return { v: `will ${vBase}`, q: null };
    if (pol === "부정") return { v: `won't ${vBase}`, q: null };
    return { v: vBase, q: "Will" };
  }

  TENSES.forEach(tense => {
    rawRows.forEach(r => {
      const isQ = r.p === "의문";
      const sKorStr = r.s_kor;
      let sEnStr = r.s;
      if (isQ && sEnStr !== "I") {
        if      (sEnStr.startsWith("The ")) sEnStr = "the " + sEnStr.slice(4);
        else if (sEnStr.startsWith("My "))  sEnStr = "my "  + sEnStr.slice(3);
        else sEnStr = sEnStr.charAt(0).toLowerCase() + sEnStr.slice(1);
      }
      const vInfo      = getVerbChunks(r.s, tense, r.p, r.vBase);
      const predKorStr = fixKorQuestion(r.kor[tense]);
      const bEnStr     = resolveAdv(r.b_en,    tense);
      const bKorStr    = resolveAdv(r.b_kor,   tense);
      const cEn0       = resolveAdv(r.c_en[0], tense);
      const cKor0      = resolveAdv(r.c_kor[0], tense);

      function makeObj(chEn, chKor) {
        chKor = orderKorChunks(chKor, r.vBase);
        const finalChEn = chEn.map((x, i) => i === chEn.length - 1 ? [x[0] + (isQ ? "?" : "."), x[1]] : [x[0], x[1]]);
        return { full: finalChEn.map(x => x[0]).join(' '), kor: chKor, chunks: finalChEn };
      }

      let enChunksA = [];
      if (isQ) {
        if (vInfo.q) enChunksA.push([vInfo.q, "V"]);
        enChunksA.push([sEnStr, "S"]);
        if (vInfo.v) enChunksA.push([vInfo.v, "V"]);
      } else {
        enChunksA.push([sEnStr, "S"], [vInfo.v, "V"]);
      }
      enChunksA.push([r.o, "O"], [r.oc, "OC"]);

      const korA = [[sKorStr, "S"], [r.o_kor, "O"], [r.oc_kor, "OC"], [predKorStr, "V"]];
      result["기초"][tense].push(makeObj(enChunksA, korA));

      const enChunksB = [...enChunksA.map(x => [...x]), [bEnStr, "A"]];
      const korB = [[sKorStr, "S"], [bKorStr, "A", bEnStr], [r.o_kor, "O"], [r.oc_kor, "OC"], [predKorStr, "V"]];
      result["기본"][tense].push(makeObj(enChunksB, korB));

      const enChunksC = [...enChunksB.map(x => [...x]), [cEn0, "A"]];
      const korC = [[sKorStr, "S"], [bKorStr, "A", bEnStr], [r.o_kor, "O"], [r.oc_kor, "OC"], [cKor0, "A", cEn0], [predKorStr, "V"]];
      result["도전"][tense].push(makeObj(enChunksC, korC));
    });
  });
  return result;
}

// ══════════════════════════════════════════════
// 패턴 번호로 라우팅하는 디스패처
// ══════════════════════════════════════════════
function processRawRowsByPattern(pattern, subjPlurals, TENSES, rawRows, options = {}) {
  if (pattern === 1) return processRawRows1(subjPlurals, TENSES, rawRows, options.isThereBe);
  if (pattern === 2) return processRawRows2(subjPlurals, TENSES, rawRows, options.isBeVerb);
  if (pattern === 3) return processRawRows3(subjPlurals, TENSES, rawRows);
  if (pattern === 4) return processRawRows4(subjPlurals, TENSES, rawRows);
  if (pattern === 5) return processRawRows5(subjPlurals, TENSES, rawRows);
  throw new Error(`알 수 없는 패턴: ${pattern}`);
}
