// WGT 5형식 마스터 프로그램 — 동사 메타데이터 및 rawRows 데이터
// 구조: VERB_DATA[패턴번호][동사키] = { standard, advanced, master }
// standard  → 기초/기본/도전용 (표준 어휘)
// advanced  → 실력용 (고급 어휘, 추후 추가)
// master    → 완성용 (최고급 어휘, 추후 추가)

// ══════════════════════════════════════════════
// 동사 메타데이터 (형식별 전체 동사 목록)
// ══════════════════════════════════════════════
const VERB_CONFIG = {
  1: {
    label: "1형식 (S + V + A)",
    verbs: {
      go:       { title: "go - went - gone",               options: {} },
      come:     { title: "come - came - come",             options: {} },
      run:      { title: "run - ran - run",                options: {} },
      walk:     { title: "walk - walked - walked",         options: {} },
      live:     { title: "live - lived - lived",           options: {} },
      work:     { title: "work - worked - worked",         options: {} },
      sleep:    { title: "sleep - slept - slept",          options: {} },
      smile:    { title: "smile - smiled - smiled",        options: {} },
      stay:     { title: "stay - stayed - stayed",         options: {} },
      arrive:   { title: "arrive - arrived - arrived",     options: {} },
      happen:   { title: "happen - happened - happened",   options: {} },
      there_be: { title: "There is/are (유도부사 구문)",   options: { isThereBe: true } },
    }
  },
  2: {
    label: "2형식 (S + V + C)",
    verbs: {
      be:     { title: "be - was/were - been",             options: { isBeVerb: true } },
      become: { title: "become - became - become",         options: {} },
      seem:   { title: "seem - seemed - seemed",           options: {} },
      look:   { title: "look - looked - looked",           options: {} },
      feel:   { title: "feel - felt - felt",               options: {} },
      sound:  { title: "sound - sounded - sounded",        options: {} },
      smell:  { title: "smell - smelled - smelled",        options: {} },
      taste:  { title: "taste - tasted - tasted",          options: {} },
      get:    { title: "get - got - gotten",               options: {} },
      turn:   { title: "turn - turned - turned",           options: {} },
      remain: { title: "remain - remained - remained",     options: {} },
      stay:   { title: "stay - stayed - stayed",           options: {} },
    }
  },
  3: {
    label: "3형식 (S + V + O)",
    verbs: {
      have:  { title: "have - had - had",                  options: {} },
      need:  { title: "need - needed - needed",            options: {} },
      make:  { title: "make - made - made",                options: {} },
      hate:  { title: "hate - hated - hated",              options: {} },
      do:    { title: "do - did - done",                   options: {} },
      enjoy: { title: "enjoy - enjoyed - enjoyed",         options: {} },
      wear:  { title: "wear - wore - worn",                options: {} },
      buy:   { title: "buy - bought - bought",             options: {} },
      want:  { title: "want - wanted - wanted",            options: {} },
      know:  { title: "know - knew - known",               options: {} },
      take:  { title: "take - took - taken",               options: {} },
      see:   { title: "see - saw - seen",                  options: {} },
    }
  },
  4: {
    label: "4형식 (S + V + IO + DO)",
    verbs: {
      give:    { title: "give - gave - given",             options: {} },
      send:    { title: "send - sent - sent",              options: {} },
      tell:    { title: "tell - told - told",              options: {} },
      ask:     { title: "ask - asked - asked",             options: {} },
      buy:     { title: "buy - bought - bought",           options: {} },
      bring:   { title: "bring - brought - brought",       options: {} },
      teach:   { title: "teach - taught - taught",         options: {} },
      show:    { title: "show - showed - shown",           options: {} },
      make:    { title: "make - made - made",              options: {} },
      offer:   { title: "offer - offered - offered",       options: {} },
      lend:    { title: "lend - lent - lent",              options: {} },
      promise: { title: "promise - promised - promised",   options: {} },
    }
  },
  5: {
    label: "5형식 (S + V + O + OC)",
    verbs: {
      see:   { title: "see - saw - seen",                  options: {} },
      hear:  { title: "hear - heard - heard",              options: {} },
      watch: { title: "watch - watched - watched",         options: {} },
      want:  { title: "want - wanted - wanted",            options: {} },
      ask:   { title: "ask - asked - asked",               options: {} },
      tell:  { title: "tell - told - told",                options: {} },
      make:  { title: "make - made - made",                options: {} },
      let:   { title: "let - let - let",                   options: {} },
      have:  { title: "have - had - had",                  options: {} },
      help:  { title: "help - helped - helped",            options: {} },
      get:   { title: "get - got - gotten",                options: {} },
      find:  { title: "find - found - found",              options: {} },
    }
  }
};

// ══════════════════════════════════════════════
// VERB_DATA 초기화 (모든 동사 null로 시작)
// ══════════════════════════════════════════════
const VERB_DATA = {};
for (let p = 1; p <= 5; p++) {
  VERB_DATA[p] = {};
  for (const vk of Object.keys(VERB_CONFIG[p].verbs)) {
    VERB_DATA[p][vk] = { standard: null, advanced: null, master: null };
  }
}

// ══════════════════════════════════════════════
// 1형식 데이터
// ══════════════════════════════════════════════

// ── go ──────────────────────────────────────
(function() {
  const plurals = ["The students","The teachers","They","The children","The birds","We"];
  const rawRows = [
    { vBase:"go", s:"I",            p:"긍정", kor:{현재:"간다.",         과거:"갔다.",          미래:"갈 것이다."},         s_kor:"나는",         b_en:"to school",          b_kor:"학교에",       c_en:["by bus",            ADV.TODAY_EN], c_kor:["버스를 타고",       ADV.TODAY_KR] },
    { vBase:"go", s:"The boy",      p:"부정", kor:{현재:"가지 않는다.",   과거:"가지 않았다.",   미래:"가지 않을 것이다."},   s_kor:"그 소년은",    b_en:"home",               b_kor:"집으로",       c_en:["alone",             "at night"],   c_kor:["혼자서",           "밤에"] },
    { vBase:"go", s:"They",         p:"의문", kor:{현재:"가니?",          과거:"갔니?",          미래:"갈까?"},              s_kor:"그들은",       b_en:"to the park",        b_kor:"공원에",       c_en:["together",          ADV.TODAY_EN], c_kor:["함께",             ADV.TODAY_KR] },
    { vBase:"go", s:"The students", p:"긍정", kor:{현재:"간다.",         과거:"갔다.",          미래:"갈 것이다."},         s_kor:"그 학생들은",  b_en:"to the library",     b_kor:"도서관에",     c_en:["to study",          "after school"],c_kor:["공부하러",          "방과 후에"] },
    { vBase:"go", s:"She",          p:"부정", kor:{현재:"가지 않는다.",   과거:"가지 않았다.",   미래:"가지 않을 것이다."},   s_kor:"그녀는",       b_en:"to the hospital",    b_kor:"병원에",       c_en:["by taxi",           "most of the time"], c_kor:["택시를 타고",  "대부분의 경우에"] },
    { vBase:"go", s:"My dad",       p:"의문", kor:{현재:"가시니?",        과거:"가셨니?",        미래:"가실까?"},            s_kor:"나의 아빠는",  b_en:"to work",            b_kor:"직장에",       c_en:["early",             ADV.TODAY_EN], c_kor:["일찍",             ADV.TODAY_KR] },
    { vBase:"go", s:"We",           p:"긍정", kor:{현재:"간다.",         과거:"갔다.",          미래:"갈 것이다."},         s_kor:"우리는",       b_en:"to the movies",      b_kor:"영화관에",     c_en:["with friends",      "on weekends"], c_kor:["친구들과 함께",    "주말마다"] },
    { vBase:"go", s:"The train",    p:"부정", kor:{현재:"가지 않는다.",   과거:"가지 않았다.",   미래:"가지 않을 것이다."},   s_kor:"그 기차는",    b_en:"to Busan",           b_kor:"부산으로",     c_en:["directly",          "this time"],  c_kor:["직행으로",         "이번에는"] },
    { vBase:"go", s:"You",          p:"의문", kor:{현재:"가니?",          과거:"갔니?",          미래:"갈까?"},              s_kor:"너는",         b_en:"to bed",             b_kor:"자러",         c_en:["late",              "every night"], c_kor:["늦게",             "매일 밤"] },
    { vBase:"go", s:"The dog",      p:"긍정", kor:{현재:"나간다.",        과거:"나갔다.",        미래:"나갈 것이다."},        s_kor:"그 개는",      b_en:"out",                b_kor:"바깥으로",     c_en:["for a walk",        "in the morning"], c_kor:["산책하러",       "아침에"] },
    { vBase:"go", s:"I",            p:"부정", kor:{현재:"가지 않는다.",   과거:"가지 않았다.",   미래:"가지 않을 것이다."},   s_kor:"나는",         b_en:"to the gym",         b_kor:"체육관에",     c_en:["on foot",           "on most days"],c_kor:["걸어서",           "대부분의 날에"] },
    { vBase:"go", s:"The teachers", p:"의문", kor:{현재:"들어가시니?",    과거:"들어가셨니?",    미래:"들어가실까?"},         s_kor:"선생님들은",   b_en:"into the classroom", b_kor:"교실로",       c_en:["with textbooks",    ADV.RN_EN],    c_kor:["교과서를 들고",    ADV.RN_KR1] },
    { vBase:"go", s:"My friend",    p:"긍정", kor:{현재:"간다.",         과거:"갔다.",          미래:"갈 것이다."},         s_kor:"내 친구는",    b_en:"abroad",             b_kor:"해외로",       c_en:["for studying",      ADV.TY_EN],    c_kor:["유학을 위해",      ADV.TY_KR] },
    { vBase:"go", s:"They",         p:"부정", kor:{현재:"가지 않는다.",   과거:"가지 않았다.",   미래:"가지 않을 것이다."},   s_kor:"그들은",       b_en:"camping",            b_kor:"캠핑을",       c_en:["in winter",         "due to the cold"], c_kor:["겨울에는",       "추위 때문에"] },
    { vBase:"go", s:"The bus",      p:"의문", kor:{현재:"가니?",          과거:"갔니?",          미래:"갈까?"},              s_kor:"그 버스는",    b_en:"to the airport",     b_kor:"공항으로",     c_en:["via the highway",   ADV.NOW_EN],   c_kor:["고속도로를 거쳐",  ADV.NOW_KR1] },
    { vBase:"go", s:"She",          p:"긍정", kor:{현재:"간다.",         과거:"갔다.",          미래:"갈 것이다."},         s_kor:"그녀는",       b_en:"shopping",           b_kor:"쇼핑하러",     c_en:["at the mall",       "on Sundays"],  c_kor:["쇼핑몰에",         "일요일마다"] },
    { vBase:"go", s:"The children", p:"부정", kor:{현재:"나가지 않는다.", 과거:"나가지 않았다.", 미래:"나가지 않을 것이다."}, s_kor:"아이들은",     b_en:"outside",            b_kor:"바깥으로",     c_en:["without coats",     "in this weather"], c_kor:["코트도 없이",    "이 날씨에"] },
    { vBase:"go", s:"He",           p:"의문", kor:{현재:"가니?",          과거:"갔니?",          미래:"갈까?"},              s_kor:"그는",         b_en:"on a trip",          b_kor:"여행을",       c_en:["with his family",   ADV.TD_EN],    c_kor:["가족과 함께",      ADV.TD_KR] },
    { vBase:"go", s:"We",           p:"긍정", kor:{현재:"돌아간다.",      과거:"돌아갔다.",      미래:"돌아갈 것이다."},      s_kor:"우리는",       b_en:"back",               b_kor:"다시",         c_en:["to our hometown",   "for the holidays"], c_kor:["고향으로",       "명절을 맞아"] },
    { vBase:"go", s:"The water",    p:"부정", kor:{현재:"내려가지 않는다.",과거:"내려가지 않았다.",미래:"내려가지 않을 것이다."},s_kor:"물이",        b_en:"down the drain",     b_kor:"배수구로",     c_en:["smoothly",          "at all"],     c_kor:["원활하게",         "전혀"] },
    { vBase:"go", s:"You",          p:"의문", kor:{현재:"가니?",          과거:"갔니?",          미래:"갈까?"},              s_kor:"너는",         b_en:"to the concert",     b_kor:"콘서트에",     c_en:["by subway",         ADV.TN_EN],    c_kor:["지하철로",         ADV.TN_KR] },
    { vBase:"go", s:"I",            p:"긍정", kor:{현재:"나간다.",        과거:"나갔다.",        미래:"나갈 것이다."},        s_kor:"나는",         b_en:"for a drive",        b_kor:"드라이브하러", c_en:["along the coast",   "when I have time"], c_kor:["해안을 따라",    "시간이 날 때"] },
    { vBase:"go", s:"The cat",      p:"부정", kor:{현재:"가지 않는다.",   과거:"가지 않았다.",   미래:"가지 않을 것이다."},   s_kor:"그 고양이는",  b_en:"near the water",     b_kor:"물 근처에",    c_en:["at all",            "out of fear"], c_kor:["전혀",             "두려움 때문에"] },
    { vBase:"go", s:"They",         p:"의문", kor:{현재:"가니?",          과거:"갔니?",          미래:"갈까?"},              s_kor:"그들은",       b_en:"fishing",            b_kor:"낚시하러",     c_en:["at the lake",       "every weekend"],c_kor:["호수로",           "주말마다"] },
    { vBase:"go", s:"The machine",  p:"긍정", kor:{현재:"들어간다.",      과거:"들어갔다.",      미래:"들어갈 것이다."},      s_kor:"기계가",       b_en:"into standby mode",  b_kor:"대기 모드로",  c_en:["automatically",     "after 5 minutes"], c_kor:["자동으로",       "5분 후에"] },
    { vBase:"go", s:"My sister",    p:"부정", kor:{현재:"가지 않는다.",   과거:"가지 않았다.",   미래:"가지 않을 것이다."},   s_kor:"내 여동생은",  b_en:"to the dentist",     b_kor:"치과에",       c_en:["willingly",         "at all"],     c_kor:["자발적으로는",     "전혀"] },
    { vBase:"go", s:"The birds",    p:"의문", kor:{현재:"가니?",          과거:"갔니?",          미래:"갈까?"},              s_kor:"새들이",       b_en:"south",              b_kor:"남쪽으로",     c_en:["for the winter",    "every year"],  c_kor:["겨울을 나러",      "매년"] },
  ];
  VERB_DATA[1].go.standard = processRawRows1(plurals, ["현재","과거","미래"], rawRows);
  // VERB_DATA[1].go.advanced  = processRawRows1(plurals, ["현재","과거","미래"], rawRowsAdv);  // 실력 — 추후 추가
  // VERB_DATA[1].go.master    = processRawRows1(plurals, ["현재","과거","미래"], rawRowsMaster); // 완성 — 추후 추가
})();

// ── come / run / walk / live / work / sleep / smile / stay / arrive / happen / there_be
// TODO: 나머지 1형식 동사 데이터 추가 예정

// ── 2~5형식 데이터
// TODO: 2~5형식 전체 동사 데이터 추가 예정
