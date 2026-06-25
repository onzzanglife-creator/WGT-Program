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
      const predKorStr = r.kor[tense];
      const bEnStr  = resolveAdv(r.b_en,    tense);
      const bKorStr = resolveAdv(r.b_kor,   tense);
      const cEn0    = resolveAdv(r.c_en[0], tense);
      const cEn1    = resolveAdv(r.c_en[1], tense);
      const cKor0   = resolveAdv(r.c_kor[0], tense);
      const cKor1   = resolveAdv(r.c_kor[1], tense);

      function makeObj(chEn, chKor) {
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

      const korA = [[sKorStr, "S"], [bKorStr, "A"], [predKorStr, "V"]];
      result["기초"][tense].push(makeObj(enChunksA, korA));

      const enChunksB = [...enChunksA.map(x => [...x]), [cEn0, "A"]];
      const korB = [[sKorStr, "S"], [bKorStr, "A"], [cKor0, "A"], [predKorStr, "V"]];
      result["기본"][tense].push(makeObj(enChunksB, korB));

      const enChunksC = [...enChunksB.map(x => [...x]), [cEn1, "A"]];
      const korC = [[sKorStr, "S"], [bKorStr, "A"], [cKor0, "A"], [cKor1, "A"], [predKorStr, "V"]];
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
      const predKorStr = r.kor[tense];
      const bEnStr     = resolveAdv(r.b_en,    tense);
      const bKorStr    = resolveAdv(r.b_kor,   tense);
      const cEn0       = resolveAdv(r.c_en[0], tense);
      const cEn1       = resolveAdv(r.c_en[1], tense);
      const cKor0      = resolveAdv(r.c_kor[0], tense);
      const cKor1      = resolveAdv(r.c_kor[1], tense);

      function makeObj(chEn, chKor) {
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
      const korB = [[sKorStr, "S"], [bKorStr, "A"], [predKorStr, "V"]];
      result["기본"][tense].push(makeObj(enChunksB, korB));

      const enChunksC = [...enChunksA.map(x => [...x]), [cEn0, "A"], [cEn1, "A"]];
      const korC = [[sKorStr, "S"], [cKor0, "A"], [cKor1, "A"], [predKorStr, "V"]];
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
      const predKorStr = r.kor[tense];
      const bEnStr     = resolveAdv(r.b_en,    tense);
      const bKorStr    = resolveAdv(r.b_kor,   tense);
      const cEn0       = resolveAdv(r.c_en[0], tense);
      const cKor0      = resolveAdv(r.c_kor[0], tense);

      function makeObj(chEn, chKor) {
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
      const korB = [[sKorStr, "S"], [bKorStr, "A"], [r.o_kor, "O"], [predKorStr, "V"]];
      result["기본"][tense].push(makeObj(enChunksB, korB));

      const enChunksC = [...enChunksB.map(x => [...x]), [cEn0, "A"]];
      const korC = [[sKorStr, "S"], [bKorStr, "A"], [r.o_kor, "O"], [cKor0, "A"], [predKorStr, "V"]];
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
      const predKorStr = r.kor[tense];
      const bEnStr     = resolveAdv(r.b_en,    tense);
      const bKorStr    = resolveAdv(r.b_kor,   tense);
      const cEn0       = resolveAdv(r.c_en[0], tense);
      const cKor0      = resolveAdv(r.c_kor[0], tense);

      function makeObj(chEn, chKor) {
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
      const korB = [[sKorStr, "S"], [bKorStr, "A"], [r.io_kor, "IO"], [r.do_kor, "DO"], [predKorStr, "V"]];
      result["기본"][tense].push(makeObj(enChunksB, korB));

      const enChunksC = [...enChunksB.map(x => [...x]), [cEn0, "A"]];
      const korC = [[sKorStr, "S"], [bKorStr, "A"], [r.io_kor, "IO"], [r.do_kor, "DO"], [cKor0, "A"], [predKorStr, "V"]];
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
      const predKorStr = r.kor[tense];
      const bEnStr     = resolveAdv(r.b_en,    tense);
      const bKorStr    = resolveAdv(r.b_kor,   tense);
      const cEn0       = resolveAdv(r.c_en[0], tense);
      const cKor0      = resolveAdv(r.c_kor[0], tense);

      function makeObj(chEn, chKor) {
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
      const korB = [[sKorStr, "S"], [bKorStr, "A"], [r.o_kor, "O"], [r.oc_kor, "OC"], [predKorStr, "V"]];
      result["기본"][tense].push(makeObj(enChunksB, korB));

      const enChunksC = [...enChunksB.map(x => [...x]), [cEn0, "A"]];
      const korC = [[sKorStr, "S"], [bKorStr, "A"], [r.o_kor, "O"], [r.oc_kor, "OC"], [cKor0, "A"], [predKorStr, "V"]];
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
