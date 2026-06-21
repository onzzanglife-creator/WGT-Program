// WGT 2형식 데이터 — 원본 HTML에서 자동 추출
// VERB_DATA[2] 를 초기화한다.
(function() {
  if (!window.VERB_DATA) window.VERB_DATA = {};
  window.VERB_DATA[2] = {
    be: {
      standard: (() => {
        const subjPlurals = ["The boxes", "The children", "The students", "The books", "The apples"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "be", s: "My dad", p: "긍정", c: "busy", kor: { 현재:"바쁘시다.", 과거:"바쁘셨다.", 미래:"바쁘실 것이다." }, s_kor: "나의 아빠는", b_en: "at the office", b_kor: "사무실에서", c_en: ["at the office", "all the time"], c_kor: ["사무실에서", "내내"] },
    { vBase: "be", s: "The boxes", p: "부정", c: "heavy", kor: { 현재:"무겁지 않다.", 과거:"무겁지 않았다.", 미래:"무겁지 않을 것이다." }, s_kor: "그 상자들은", b_en: "to you", b_kor: "너에게", c_en: ["to you", "at all"], c_kor: ["너에게", "전혀"] },
    { vBase: "be", s: "The baby", p: "의문", c: "awake", kor: { 현재:"깨어 있니?", 과거:"깨어 있었니?", 미래:"깨어 있을까?" }, s_kor: "그 아기는", b_en: "in the crib", b_kor: "침대 안에서", c_en: ["in the crib", ADV.RN_EN], c_kor: ["침대 안에서", ADV.RN_KR1] },
    { vBase: "be", s: "We", p: "긍정", c: "hungry", kor: { 현재:"배가 고프다.", 과거:"배가 고팠다.", 미래:"배가 고플 것이다." }, s_kor: "우리는", b_en: "after the game", b_kor: "게임 후에", c_en: ["after the game", ADV.TODAY_EN], c_kor: ["게임 후에", ADV.TODAY_KR] },
    { vBase: "be", s: "My mom", p: "부정", c: "tired", kor: { 현재:"피곤하지 않으시다.", 과거:"피곤하지 않으셨다.", 미래:"피곤하지 않으실 것이다." }, s_kor: "나의 엄마는", b_en: "after work", b_kor: "퇴근 후에", c_en: ["after work", ADV.TODAY_EN], c_kor: ["퇴근 후에", ADV.TODAY_KR] },
    { vBase: "be", s: "The children", p: "의문", c: "safe", kor: { 현재:"안전한가요?", 과거:"안전했나요?", 미래:"안전할까요?" }, s_kor: "그 아이들은", b_en: "outside", b_kor: "바깥에서", c_en: ["outside", "at night"], c_kor: ["바깥에서", "밤에"] },
    { vBase: "be", s: "The library", p: "긍정", c: "quiet", kor: { 현재:"조용하다.", 과거:"조용했다.", 미래:"조용할 것이다." }, s_kor: "도서관은", b_en: "in the morning", b_kor: "아침에", c_en: ["in the morning", "every day"], c_kor: ["아침에", "매일"] },
    { vBase: "be", s: "The room", p: "부정", c: "cold", kor: { 현재:"춥지 않다.", 과거:"춥지 않았다.", 미래:"춥지 않을 것이다." }, s_kor: "방은", b_en: "inside", b_kor: "안쪽이", c_en: ["inside", "in winter"], c_kor: ["안쪽이", "겨울에"] },
    { vBase: "be", s: "You", p: "의문", c: "late", kor: { 현재:"늦었니?", 과거:"늦었었니?", 미래:"늦을까?" }, s_kor: "너는", b_en: "for school", b_kor: "학교에", c_en: ["for school", "every day"], c_kor: ["학교에", "매일"] },
    { vBase: "be", s: "The bus", p: "긍정", c: "early", kor: { 현재:"일찍 왔다.", 과거:"일찍 왔었다.", 미래:"일찍 올 것이다." }, s_kor: "그 버스는", b_en: ADV.TODAY_EN, b_kor: ADV.TODAY_KR, c_en: ["at the station", ADV.TODAY_EN], c_kor: ["역에", ADV.TODAY_KR] },
    { vBase: "be", s: "The students", p: "부정", c: "sleepy", kor: { 현재:"졸리지 않다.", 과거:"졸리지 않았다.", 미래:"졸리지 않을 것이다." }, s_kor: "그 학생들은", b_en: "in class", b_kor: "수업 시간에", c_en: ["in class", ADV.TODAY_EN], c_kor: ["수업 시간에", ADV.TODAY_KR] },
    { vBase: "be", s: "The dog", p: "의문", c: "dirty", kor: { 현재:"더럽니?", 과거:"더러웠니?", 미래:"더러울까?" }, s_kor: "그 개는", b_en: "after the walk", b_kor: "산책 후에", c_en: ["after the walk", ADV.RN_EN], c_kor: ["산책 후에", ADV.RN_KR1] },
    { vBase: "be", s: "He", p: "의문", c: "ready", kor: { 현재:"준비가 되었니?", 과거:"준비가 되었었니?", 미래:"준비가 될까?" }, s_kor: "그는", b_en: "for the test", b_kor: "시험 준비가", c_en: ["for the test", ADV.TODAY_EN], c_kor: ["시험 준비가", ADV.TODAY_KR] },
    { vBase: "be", s: "The soup", p: "부정", c: "hot", kor: { 현재:"뜨겁지 않다.", 과거:"뜨겁지 않았다.", 미래:"뜨겁지 않을 것이다." }, s_kor: "그 수프는", b_en: "for the baby", b_kor: "아기에게", c_en: ["for the baby", "at all"], c_kor: ["아기에게", "전혀"] },
    { vBase: "be", s: "She", p: "긍정", c: "kind", kor: { 현재:"친절하다.", 과거:"친절했다.", 미래:"친절할 것이다." }, s_kor: "그녀는", b_en: "to everyone", b_kor: "모든 사람에게", c_en: ["to everyone", "all the time"], c_kor: ["모든 사람에게", "항상"] },
    { vBase: "be", s: "They", p: "부정", c: "famous", kor: { 현재:"유명하지 않다.", 과거:"유명하지 않았다.", 미래:"유명하지 않을 것이다." }, s_kor: "그들은", b_en: "in this country", b_kor: "이 나라에서", c_en: ["in this country", "for any reason"], c_kor: ["이 나라에서", "이제는"] },
    { vBase: "be", s: "It", p: "의문", c: "dark", kor: { 현재:"어둡니?", 과거:"어두웠니?", 미래:"어두울까?" }, s_kor: "바깥은", b_en: "outside", b_kor: "바깥이", c_en: ["outside", "at night"], c_kor: ["바깥이", "밤에"] },
    { vBase: "be", s: "The store", p: "긍정", c: "open", kor: { 현재:"문을 열었다.", 과거:"문을 열었었다.", 미래:"문을 열 것이다." }, s_kor: "그 가게는", b_en: "on Sundays", b_kor: "일요일마다", c_en: ["on Sundays", ADV.NOW_EN], c_kor: ["일요일마다", ADV.NOW_KR2] },
    { vBase: "be", s: "The taxi", p: "부정", c: "late", kor: { 현재:"늦지 않는다.", 과거:"늦지 않았다.", 미래:"늦지 않을 것이다." }, s_kor: "그 택시는", b_en: "for us", b_kor: "우리에게", c_en: ["for us", ADV.TODAY_EN], c_kor: ["우리에게", ADV.TODAY_KR] },
    { vBase: "be", s: "The books", p: "부정", c: "expensive", kor: { 현재:"비싸지 않다.", 과거:"비싸지 않았다.", 미래:"비싸지 않을 것이다." }, s_kor: "그 책들은", b_en: "at this store", b_kor: "이 가게에서", c_en: ["at this store", "at all"], c_kor: ["이 가게에서", "전혀"] },
    { vBase: "be", s: "The water", p: "의문", c: "cold", kor: { 현재:"차갑니?", 과거:"차가웠니?", 미래:"차가울까?" }, s_kor: "그 물은", b_en: "in the pool", b_kor: "수영장에서", c_en: ["in the pool", ADV.TODAY_EN], c_kor: ["수영장에서", ADV.TODAY_KR] },
    { vBase: "be", s: "My friend", p: "긍정", c: "helpful", kor: { 현재:"도움이 된다.", 과거:"도움이 됐다.", 미래:"도움이 될 것이다." }, s_kor: "나의 친구는", b_en: "to me", b_kor: "나에게", c_en: ["to me", "at school"], c_kor: ["나에게", "학교에서"] },
    { vBase: "be", s: "The classroom", p: "부정", c: "noisy", kor: { 현재:"시끄럽지 않다.", 과거:"시끄럽지 않았다.", 미래:"시끄럽지 않을 것이다." }, s_kor: "교실은", b_en: "during the test", b_kor: "시험 기간 동안", c_en: ["during the test", ADV.TODAY_EN], c_kor: ["시험 기간 동안", ADV.TODAY_KR] },
    { vBase: "be", s: "The apples", p: "긍정", c: "fresh", kor: { 현재:"신선하다.", 과거:"신선했었다.", 미래:"신선할 것이다." }, s_kor: "그 사과들은", b_en: "at the market", b_kor: "시장에서", c_en: ["at the market", ADV.TODAY_EN], c_kor: ["시장에서", ADV.TODAY_KR] },
    { vBase: "be", s: "The cat", p: "부정", c: "afraid", kor: { 현재:"두려워하지 않는다.", 과거:"두려워하지 않았다.", 미래:"두려워하지 않을 것이다." }, s_kor: "그 고양이는", b_en: "of dogs", b_kor: "개들을", c_en: ["of dogs", "at all"], c_kor: ["개들을", "전혀"] },
    { vBase: "be", s: "The park", p: "긍정", c: "beautiful", kor: { 현재:"아름답다.", 과거:"아름다웠다.", 미래:"아름다울 것이다." }, s_kor: "공원은", b_en: "in spring", b_kor: "봄에", c_en: ["in spring", "every year"], c_kor: ["봄에", "매년"] },
    { vBase: "be", s: "I", p: "긍정", c: "sure", kor: { 현재:"확신한다.", 과거:"확신했다.", 미래:"확신할 것이다." }, s_kor: "나는", b_en: "about the plan", b_kor: "그 계획에 대해", c_en: ["about the plan", ADV.NOW_EN], c_kor: ["그 계획에 대해", ADV.NOW_KR2] }
  ];
        return processRawRows2(subjPlurals, TENSES, rawRows, { isBeVerb: true });
      })()
      ,
      advanced: null,
      master:   null,
    },
    become: {
      standard: (() => {
        const subjPlurals = ["The boys", "The leaves", "People", "My parents", "The prices", "The rules"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "become", s: "The weather", p: "긍정", c: "warm", kor: { 현재:"따뜻해진다.", 과거:"따뜻해졌다.", 미래:"따뜻해질 것이다." }, s_kor: "날씨가", b_en: "in spring", b_kor: "봄에", c_en: ["in spring", "every year"], c_kor: ["봄에", "매년"] },
    { vBase: "become", s: "The milk", p: "부정", c: "sour", kor: { 현재:"상하지 않는다.", 과거:"상하지 않았다.", 미래:"상하지 않을 것이다." }, s_kor: "우유가", b_en: "in the fridge", b_kor: "냉장고에서", c_en: ["in the fridge", "most of the time"], c_kor: ["냉장고에서", "대부분"] },
    { vBase: "become", s: "The boys", p: "의문", c: "quiet", kor: { 현재:"조용해지니?", 과거:"조용해졌니?", 미래:"조용해질까?" }, s_kor: "소년들이", b_en: "during class", b_kor: "수업 중에", c_en: ["during class", ADV.TODAY_EN], c_kor: ["수업 중에", ADV.TODAY_KR] },
    { vBase: "become", s: "My dream", p: "긍정", c: "reality", kor: { 현재:"현실이 된다.", 과거:"현실이 되었다.", 미래:"현실이 될 것이다." }, s_kor: "내 꿈이", b_en: "at last", b_kor: "마침내", c_en: ["at last", ADV.TODAY_EN], c_kor: ["마침내", ADV.TODAY_KR] },
    { vBase: "become", s: "The sky", p: "부정", c: "dark", kor: { 현재:"어두워지지 않는다.", 과거:"어두워지지 않았다.", 미래:"어두워지지 않을 것이다." }, s_kor: "하늘이", b_en: "in the morning", b_kor: "아침에", c_en: ["in the morning", "here"], c_kor: ["아침에", "여기서는"] },
    { vBase: "become", s: "You", p: "의문", c: "tired", kor: { 현재:"피곤해지니?", 과거:"피곤해졌니?", 미래:"피곤해질까?" }, s_kor: "너는", b_en: "after work", b_kor: "퇴근 후에", c_en: ["after work", "every day"], c_kor: ["퇴근 후에", "매일"] },
    { vBase: "become", s: "The leaves", p: "긍정", c: "red", kor: { 현재:"붉어진다.", 과거:"붉어졌다.", 미래:"붉어질 것이다." }, s_kor: "나뭇잎들이", b_en: "in fall", b_kor: "가을에", c_en: ["in fall", "in a beautiful way"], c_kor: ["가을에", "아름답게"] },
    { vBase: "become", s: "The water", p: "부정", c: "cold", kor: { 현재:"차가워지지 않는다.", 과거:"차가워지지 않았다.", 미래:"차가워지지 않을 것이다." }, s_kor: "물이", b_en: "in the pot", b_kor: "냄비 안에서", c_en: ["in the pot", "in no time"], c_kor: ["냄비 안에서", "순식간에"] },
    { vBase: "become", s: "The puppy", p: "의문", c: "big", kor: { 현재:"커지니?", 과거:"커졌니?", 미래:"커질까?" }, s_kor: "강아지가", b_en: "in a short time", b_kor: "단기간에", c_en: ["in a short time", ADV.TD_EN], c_kor: ["단기간에", ADV.TD_KR] },
    { vBase: "become", s: "His voice", p: "긍정", c: "loud", kor: { 현재:"커진다.", 과거:"커졌다.", 미래:"커질 것이다." }, s_kor: "그의 목소리가", b_en: "all of a sudden", b_kor: "갑자기", c_en: ["all of a sudden", "in the room"], c_kor: ["갑자기", "방 안에서"] },
    { vBase: "become", s: "The game", p: "부정", c: "boring", kor: { 현재:"지루해지지 않는다.", 과거:"지루해지지 않았다.", 미래:"지루해지지 않을 것이다." }, s_kor: "게임이", b_en: "to me", b_kor: "나에게", c_en: ["to me", "at all"], c_kor: ["나에게", "전혀"] },
    { vBase: "become", s: "People", p: "의문", c: "angry", kor: { 현재:"화가 나니?", 과거:"화가 났니?", 미래:"화가 날까?" }, s_kor: "사람들이", b_en: "with ease", b_kor: "쉽게", c_en: ["with ease", "on the internet"], c_kor: ["쉽게", "인터넷에서"] },
    { vBase: "become", s: "The room", p: "긍정", c: "clean", kor: { 현재:"깨끗해진다.", 과거:"깨끗해졌다.", 미래:"깨끗해질 것이다." }, s_kor: "방이", b_en: "after cleaning", b_kor: "청소 후에", c_en: ["after cleaning", "all the time"], c_kor: ["청소 후에", "항상"] },
    { vBase: "become", s: "The problem", p: "부정", c: "serious", kor: { 현재:"심각해지지 않는다.", 과거:"심각해지지 않았다.", 미래:"심각해지지 않을 것이다." }, s_kor: "문제가", b_en: ADV.RN_EN, b_kor: ADV.RN_KR3, c_en: [ADV.RN_EN, "luckily"], c_kor: [ADV.RN_KR3, "다행히도"] },
    { vBase: "become", s: "She", p: "의문", c: "a teacher", kor: { 현재:"선생님이 되니?", 과거:"선생님이 되었니?", 미래:"선생님이 될까?" }, s_kor: "그녀는", b_en: "at the school", b_kor: "그 학교에서", c_en: ["at the school", "in the end"], c_kor: ["그 학교에서", "결국에"] },
    { vBase: "become", s: "He", p: "긍정", c: "famous", kor: { 현재:"유명해진다.", 과거:"유명해졌다.", 미래:"유명해질 것이다." }, s_kor: "그는", b_en: "in his country", b_kor: "그의 나라에서", c_en: ["in his country", "soon"], c_kor: ["그의 나라에서", "곧"] },
    { vBase: "become", s: "The bread", p: "부정", c: "hard", kor: { 현재:"딱딱해지지 않는다.", 과거:"딱딱해지지 않았다.", 미래:"딱딱해지지 않을 것이다." }, s_kor: "빵이", b_en: "in the bag", b_kor: "봉투 안에서", c_en: ["in the bag", "at all"], c_kor: ["봉투 안에서", "전혀"] },
    { vBase: "become", s: "The concert", p: "의문", c: "exciting", kor: { 현재:"신나지니?", 과거:"신나졌니?", 미래:"신나질까?" }, s_kor: "콘서트가", b_en: "at night", b_kor: "밤에", c_en: ["at night", "most of the time"], c_kor: ["밤에", "대부분"] },
    { vBase: "become", s: "The prices", p: "긍정", c: "high", kor: { 현재:"높아진다.", 과거:"높아졌다.", 미래:"높아질 것이다." }, s_kor: "물가가", b_en: "in winter", b_kor: "겨울에", c_en: ["in winter", "every year"], c_kor: ["겨울에", "매년"] },
    { vBase: "become", s: "My parents", p: "부정", c: "old", kor: { 현재:"늙지 않으신다.", 과거:"늙지 않으셨다.", 미래:"늙지 않으실 것이다." }, s_kor: "부모님이", b_en: "in my eyes", b_kor: "내 눈에는", c_en: ["in my eyes", "forever"], c_kor: ["내 눈에는", "영원히"] },
    { vBase: "become", s: "The movie", p: "의문", c: "interesting", kor: { 현재:"재미있어지니?", 과거:"재미있어졌니?", 미래:"재미있어질까?" }, s_kor: "영화가", b_en: "at the end", b_kor: "결말에", c_en: ["at the end", "all of a sudden"], c_kor: ["결말에", "갑자기"] },
    { vBase: "become", s: "The child", p: "긍정", c: "sleepy", kor: { 현재:"졸려진다.", 과거:"졸려졌다.", 미래:"졸려질 것이다." }, s_kor: "아이가", b_en: "after lunch", b_kor: "점심 식사 후에", c_en: ["after lunch", "on normal days"], c_kor: ["점심 식사 후에", "평소에"] },
    { vBase: "become", s: "The rules", p: "부정", c: "strict", kor: { 현재:"엄격해지지 않는다.", 과거:"엄격해지지 않았다.", 미래:"엄격해지지 않을 것이다." }, s_kor: "규칙이", b_en: "here", b_kor: "여기서는", c_en: ["here", "most of the time"], c_kor: ["여기서는", "대부분의 경우에"] },
    { vBase: "become", s: "We", p: "의문", c: "ready", kor: { 현재:"준비가 되니?", 과거:"준비가 되었니?", 미래:"준비가 될까?" }, s_kor: "우리는", b_en: "for the trip", b_kor: "여행 준비가", c_en: ["for the trip", ADV.NOW_EN], c_kor: ["여행 준비가", ADV.NOW_KR2] },
    { vBase: "become", s: "The robot", p: "긍정", c: "smart", kor: { 현재:"똑똑해진다.", 과거:"똑똑해졌다.", 미래:"똑똑해질 것이다." }, s_kor: "로봇이", b_en: "over time", b_kor: "시간이 지나면서", c_en: ["over time", "in the end"], c_kor: ["시간이 지나면서", "결국엔"] },
    { vBase: "become", s: "The coffee", p: "부정", c: "cold", kor: { 현재:"식지 않는다.", 과거:"식지 않았다.", 미래:"식지 않을 것이다." }, s_kor: "커피가", b_en: "in the cup", b_kor: "컵 안에서", c_en: ["in the cup", "in no time"], c_kor: ["컵 안에서", "순식간에"] },
    { vBase: "become", s: "They", p: "의문", c: "good friends", kor: { 현재:"좋은 친구가 되니?", 과거:"좋은 친구가 되었니?", 미래:"좋은 친구가 될까?" }, s_kor: "그들은", b_en: "at school", b_kor: "학교에서", c_en: ["at school", "in the end"], c_kor: ["학교에서", "결국에"] }
  ];
        return processRawRows2(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    seem: {
      standard: (() => {
        const subjPlurals = ["The results", "The children", "The shoes", "The rules"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "seem", s: "The plan", p: "긍정", c: "perfect", kor: { 현재:"계획이 완벽해 보인다.", 과거:"계획이 완벽해 보였다.", 미래:"계획이 완벽해 보일 것이다." }, s_kor: "계획이", b_en: "at first", b_kor: "처음에는", c_en: ["at first", "to us"], c_kor: ["처음에는", "우리에게"] },
    { vBase: "seem", s: "The idea", p: "부정", c: "strange", kor: { 현재:"아이디어가 이상해 보이지 않는다.", 과거:"아이디어가 이상해 보이지 않았다.", 미래:"아이디어가 이상해 보이지 않을 것이다." }, s_kor: "아이디어가", b_en: "to me", b_kor: "나에게는", c_en: ["to me", "at all"], c_kor: ["나에게는", "전혀"] },
    { vBase: "seem", s: "The man", p: "의문", c: "kind", kor: { 현재:"그 남자는 친절해 보이니?", 과거:"그 남자는 친절해 보였니?", 미래:"그 남자는 친절해 보일까?" }, s_kor: "그 남자는", b_en: "in the picture", b_kor: "사진 속에서", c_en: ["in the picture", ADV.TODAY_EN], c_kor: ["사진 속에서", ADV.TODAY_KR] },
    { vBase: "seem", s: "The results", p: "긍정", c: "good", kor: { 현재:"결과가 좋아 보인다.", 과거:"결과가 좋아 보였다.", 미래:"결과가 좋아 보일 것이다." }, s_kor: "결과가", b_en: "on the paper", b_kor: "종이 위에서", c_en: ["on the paper", ADV.NOW_EN], c_kor: ["종이 위에서", ADV.NOW_KR1] },
    { vBase: "seem", s: "The box", p: "부정", c: "heavy", kor: { 현재:"상자가 무거워 보이지 않는다.", 과거:"상자가 무거워 보이지 않았다.", 미래:"상자가 무거워 보이지 않을 것이다." }, s_kor: "상자가", b_en: "from here", b_kor: "여기서는", c_en: ["from here", "at all"], c_kor: ["여기서는", "전혀"] },
    { vBase: "seem", s: "The problem", p: "의문", c: "difficult", kor: { 현재:"문제가 어려워 보이니?", 과거:"문제가 어려워 보였니?", 미래:"문제가 어려워 보일까?" }, s_kor: "문제가", b_en: "at a glance", b_kor: "한눈에", c_en: ["at a glance", "to you"], c_kor: ["한눈에", "너에게"] },
    { vBase: "seem", s: "The house", p: "긍정", c: "empty", kor: { 현재:"집이 비어 있는 것 같다.", 과거:"집이 비어 있는 것 같았다.", 미래:"집이 비어 있는 것 같을 것이다." }, s_kor: "집이", b_en: "at night", b_kor: "밤에", c_en: ["at night", "all the time"], c_kor: ["밤에", "내내"] },
    { vBase: "seem", s: "The food", p: "부정", c: "delicious", kor: { 현재:"음식이 맛있어 보이지 않는다.", 과거:"음식이 맛있어 보이지 않았다.", 미래:"음식이 맛있어 보이지 않을 것이다." }, s_kor: "음식이", b_en: "on the table", b_kor: "테이블 위에서", c_en: ["on the table", ADV.TODAY_EN], c_kor: ["테이블 위에서", ADV.TODAY_KR] },
    { vBase: "seem", s: "The dog", p: "의문", c: "sick", kor: { 현재:"개가 아파 보이니?", 과거:"개가 아파 보였니?", 미래:"개가 아파 보일까?" }, s_kor: "개가", b_en: ADV.TODAY_EN, b_kor: ADV.TODAY_KR, c_en: [ADV.TODAY_EN, "a little bit"], c_kor: [ADV.TODAY_KR, "조금"] },
    { vBase: "seem", s: "The children", p: "긍정", c: "happy", kor: { 현재:"아이들이 행복해 보인다.", 과거:"아이들이 행복해 보였다.", 미래:"아이들이 행복해 보일 것이다." }, s_kor: "아이들이", b_en: "on the playground", b_kor: "놀이터에서", c_en: ["on the playground", ADV.RN_EN], c_kor: ["놀이터에서", ADV.RN_KR1] },
    { vBase: "seem", s: "The story", p: "부정", c: "true", kor: { 현재:"이야기가 사실인 것 같지 않다.", 과거:"이야기가 사실인 것 같지 않았다.", 미래:"이야기가 사실인 것 같지 않을 것이다." }, s_kor: "이야기가", b_en: "to us", b_kor: "우리에게는", c_en: ["to us", "all the time"], c_kor: ["우리에게는", "항상"] },
    { vBase: "seem", s: "The price", p: "의문", c: "reasonable", kor: { 현재:"가격이 합리적인 것 같니?", 과거:"가격이 합리적인 것 같았니?", 미래:"가격이 합리적인 것 같을까?" }, s_kor: "가격이", b_en: "for this car", b_kor: "이 차에 대해", c_en: ["for this car", ADV.NOW_EN], c_kor: ["이 차에 대해", ADV.NOW_KR1] },
    { vBase: "seem", s: "The test", p: "긍정", c: "easy", kor: { 현재:"시험이 쉬워 보인다.", 과거:"시험이 쉬워 보였다.", 미래:"시험이 쉬워 보일 것이다." }, s_kor: "시험이", b_en: "at first", b_kor: "처음에는", c_en: ["at first", "to the students"], c_kor: ["처음에는", "학생들에게"] },
    { vBase: "seem", s: "The building", p: "부정", c: "safe", kor: { 현재:"건물이 안전해 보이지 않는다.", 과거:"건물이 안전해 보이지 않았다.", 미래:"건물이 안전해 보이지 않을 것이다." }, s_kor: "건물이", b_en: "from the outside", b_kor: "밖에서 볼 때", c_en: ["from the outside", "for any reason"], c_kor: ["밖에서 볼 때", "어떤 이유에서든"] },
    { vBase: "seem", s: "The weather", p: "의문", c: "nice", kor: { 현재:"날씨가 좋아 보이니?", 과거:"날씨가 좋아 보였니?", 미래:"날씨가 좋아 보일까?" }, s_kor: "날씨가", b_en: "outside", b_kor: "바깥", c_en: ["outside", ADV.TODAY_EN], c_kor: ["바깥", ADV.TODAY_KR] },
    { vBase: "seem", s: "The solution", p: "긍정", c: "clear", kor: { 현재:"해결책이 분명해 보인다.", 과거:"해결책이 분명해 보였다.", 미래:"해결책이 분명해 보일 것이다." }, s_kor: "해결책이", b_en: "to everyone", b_kor: "모두에게", c_en: ["to everyone", ADV.NOW_EN], c_kor: ["모두에게", ADV.NOW_KR1] },
    { vBase: "seem", s: "The woman", p: "부정", c: "busy", kor: { 현재:"여자가 바빠 보이지 않는다.", 과거:"여자가 바빠 보이지 않았다.", 미래:"여자가 바빠 보이지 않을 것이다." }, s_kor: "여자가", b_en: "at the office", b_kor: "사무실에서", c_en: ["at the office", ADV.TODAY_EN], c_kor: ["사무실에서", ADV.TODAY_KR] },
    { vBase: "seem", s: "The shoes", p: "의문", c: "comfortable", kor: { 현재:"신발이 편안해 보이니?", 과거:"신발이 편안해 보였니?", 미래:"신발이 편안해 보일까?" }, s_kor: "신발이", b_en: "for walking", b_kor: "걷기에", c_en: ["for walking", "all the time"], c_kor: ["걷기에", "항상"] },
    { vBase: "seem", s: "The task", p: "긍정", c: "impossible", kor: { 현재:"그 일은 불가능해 보인다.", 과거:"그 일은 불가능해 보였다.", 미래:"그 일은 불가능해 보일 것이다." }, s_kor: "그 일은", b_en: "without help", b_kor: "도움 없이는", c_en: ["without help", "to us"], c_kor: ["도움 없이는", "우리에게"] },
    { vBase: "seem", s: "The student", p: "부정", c: "nervous", kor: { 현재:"그 학생은 긴장해 보이지 않는다.", 과거:"그 학생은 긴장해 보이지 않았다.", 미래:"그 학생은 긴장해 보이지 않을 것이다." }, s_kor: "그 학생은", b_en: "before the exam", b_kor: "시험 전에", c_en: ["before the exam", "at all"], c_kor: ["시험 전에", "전혀"] },
    { vBase: "seem", s: "The situation", p: "의문", c: "bad", kor: { 현재:"상황이 나빠 보이니?", 과거:"상황이 나빠 보였니?", 미래:"상황이 나빠 보일까?" }, s_kor: "상황이", b_en: ADV.RN_EN, b_kor: ADV.RN_KR2, c_en: [ADV.RN_EN, "to you"], c_kor: [ADV.RN_KR2, "너에게"] },
    { vBase: "seem", s: "The river", p: "긍정", c: "deep", kor: { 현재:"강이 깊어 보인다.", 과거:"강이 깊어 보였다.", 미래:"강이 깊어 보일 것이다." }, s_kor: "강이", b_en: "from the bridge", b_kor: "다리 위에서", c_en: ["from the bridge", ADV.TODAY_EN], c_kor: ["다리 위에서", ADV.TODAY_KR] },
    { vBase: "seem", s: "The cake", p: "부정", c: "sweet", kor: { 현재:"케이크가 달아 보이지 않는다.", 과거:"케이크가 달아 보이지 않았다.", 미래:"케이크가 달아 보이지 않을 것이다." }, s_kor: "케이크가", b_en: "to me", b_kor: "나에게는", c_en: ["to me", "at all"], c_kor: ["나에게는", "전혀"] },
    { vBase: "seem", s: "The rules", p: "의문", c: "fair", kor: { 현재:"규칙이 공정해 보이니?", 과거:"규칙이 공정해 보였니?", 미래:"규칙이 공정해 보일까?" }, s_kor: "규칙이", b_en: "to everyone", b_kor: "모두에게", c_en: ["to everyone", "here"], c_kor: ["모두에게", "여기서는"] },
    { vBase: "seem", s: "The car", p: "긍정", c: "fast", kor: { 현재:"차가 빨라 보인다.", 과거:"차가 빨라 보였다.", 미래:"차가 빨라 보일 것이다." }, s_kor: "차가", b_en: "on the road", b_kor: "도로 위에서", c_en: ["on the road", ADV.TODAY_EN], c_kor: ["도로 위에서", ADV.TODAY_KR] },
    { vBase: "seem", s: "The movie", p: "부정", c: "interesting", kor: { 현재:"영화가 재미있어 보이지 않는다.", 과거:"영화가 재미있어 보이지 않았다.", 미래:"영화가 재미있어 보이지 않을 것이다." }, s_kor: "영화가", b_en: "from the trailer", b_kor: "예고편을 보면", c_en: ["from the trailer", "to me"], c_kor: ["예고편을 보면", "나에게는"] },
    { vBase: "seem", s: "The bag", p: "의문", c: "expensive", kor: { 현재:"가방이 비싸 보이니?", 과거:"가방이 비싸 보였니?", 미래:"가방이 비싸 보일까?" }, s_kor: "가방이", b_en: "in the store", b_kor: "가게 안에서", c_en: ["in the store", "for sure"], c_kor: ["가게 안에서", "확실히"] }
  ];
        return processRawRows2(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    look: {
      standard: (() => {
        const subjPlurals = ["The stars", "The children", "The shoes", "The questions", "The toys", "The actors"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "look", s: "The cake", p: "긍정", c: "delicious", kor: { 현재:"맛있어 보인다.", 과거:"맛있어 보였다.", 미래:"맛있어 보일 것이다." }, s_kor: "케이크가", b_en: "in the bakery", b_kor: "빵집에서", c_en: ["in the bakery", ADV.TODAY_EN], c_kor: ["빵집에서", ADV.TODAY_KR] },
    { vBase: "look", s: "The man", p: "부정", c: "young", kor: { 현재:"젊어 보이지 않는다.", 과거:"젊어 보이지 않았다.", 미래:"젊어 보이지 않을 것이다." }, s_kor: "그 남자는", b_en: "in that suit", b_kor: "그 정장을 입으니", c_en: ["in that suit", "to me"], c_kor: ["그 정장을 입으니", "나에게는"] },
    { vBase: "look", s: "The stars", p: "의문", c: "bright", kor: { 현재:"밝아 보이니?", 과거:"밝아 보였니?", 미래:"밝아 보일까?" }, s_kor: "별들이", b_en: "in the sky", b_kor: "하늘에서", c_en: ["in the sky", ADV.TN_EN], c_kor: ["하늘에서", ADV.TN_KR] },
    { vBase: "look", s: "The dog", p: "긍정", c: "cute", kor: { 현재:"귀여워 보인다.", 과거:"귀여워 보였다.", 미래:"귀여워 보일 것이다." }, s_kor: "강아지가", b_en: "in the picture", b_kor: "사진 속에서", c_en: ["in the picture", "for sure"], c_kor: ["사진 속에서", "확실히"] },
    { vBase: "look", s: "The house", p: "부정", c: "old", kor: { 현재:"낡아 보이지 않는다.", 과거:"낡아 보이지 않았다.", 미래:"낡아 보이지 않을 것이다." }, s_kor: "집이", b_en: "from here", b_kor: "여기서는", c_en: ["from here", "at all"], c_kor: ["여기서는", "전혀"] },
    { vBase: "look", s: "You", p: "의문", c: "pale", kor: { 현재:"창백해 보이니?", 과거:"창백해 보였니?", 미래:"창백해 보일까?" }, s_kor: "너는", b_en: ADV.RN_EN, b_kor: ADV.RN_KR1, c_en: [ADV.RN_EN, "a little bit"], c_kor: [ADV.RN_KR1, "약간"] },
    { vBase: "look", s: "The dress", p: "긍정", c: "beautiful", kor: { 현재:"아름다워 보인다.", 과거:"아름다워 보였다.", 미래:"아름다워 보일 것이다." }, s_kor: "드레스가", b_en: "on you", b_kor: "너에게", c_en: ["on you", ADV.TODAY_EN], c_kor: ["너에게", ADV.TODAY_KR] },
    { vBase: "look", s: "The food", p: "부정", c: "fresh", kor: { 현재:"신선해 보이지 않는다.", 과거:"신선해 보이지 않았다.", 미래:"신선해 보이지 않을 것이다." }, s_kor: "음식이", b_en: "on the table", b_kor: "테이블 위에서", c_en: ["on the table", "most of the time"], c_kor: ["테이블 위에서", "대부분의 경우에"] },
    { vBase: "look", s: "The children", p: "의문", c: "happy", kor: { 현재:"행복해 보이니?", 과거:"행복해 보였니?", 미래:"행복해 보일까?" }, s_kor: "아이들이", b_en: "at the park", b_kor: "공원에서", c_en: ["at the park", ADV.NOW_EN], c_kor: ["공원에서", ADV.NOW_KR1] },
    { vBase: "look", s: "The room", p: "긍정", c: "cozy", kor: { 현재:"아늑해 보인다.", 과거:"아늑해 보였다.", 미래:"아늑해 보일 것이다." }, s_kor: "방이", b_en: "with the light", b_kor: "조명을 켜니", c_en: ["with the light", "at night"], c_kor: ["조명을 켜니", "밤에"] },
    { vBase: "look", s: "The idea", p: "부정", c: "bad", kor: { 현재:"나빠 보이지 않는다.", 과거:"나빠 보이지 않았다.", 미래:"나빠 보이지 않을 것이다." }, s_kor: "아이디어가", b_en: "to us", b_kor: "우리에게는", c_en: ["to us", "at first"], c_kor: ["우리에게는", "처음에는"] },
    { vBase: "look", s: "The shoes", p: "의문", c: "comfortable", kor: { 현재:"편안해 보이니?", 과거:"편안해 보였니?", 미래:"편안해 보일까?" }, s_kor: "신발이", b_en: "for running", b_kor: "달리기에", c_en: ["for running", "to you"], c_kor: ["달리기에", "너에게"] },
    { vBase: "look", s: "The sky", p: "긍정", c: "clear", kor: { 현재:"맑아 보인다.", 과거:"맑아 보였다.", 미래:"맑아 보일 것이다." }, s_kor: "하늘이", b_en: "after the rain", b_kor: "비 온 뒤에", c_en: ["after the rain", ADV.TODAY_EN], c_kor: ["비 온 뒤에", ADV.TODAY_KR] },
    { vBase: "look", s: "The bridge", p: "부정", c: "safe", kor: { 현재:"안전해 보이지 않는다.", 과거:"안전해 보이지 않았다.", 미래:"안전해 보이지 않을 것이다." }, s_kor: "다리가", b_en: "from a distance", b_kor: "멀리서는", c_en: ["from a distance", "to me"], c_kor: ["멀리서는", "나에게"] },
    { vBase: "look", s: "The plan", p: "의문", c: "perfect", kor: { 현재:"완벽해 보이니?", 과거:"완벽해 보였니?", 미래:"완벽해 보일까?" }, s_kor: "계획이", b_en: "on paper", b_kor: "서류상으로는", c_en: ["on paper", ADV.NOW_EN], c_kor: ["서류상으로는", ADV.NOW_KR1] },
    { vBase: "look", s: "The soup", p: "긍정", c: "hot", kor: { 현재:"뜨거워 보인다.", 과거:"뜨거워 보였다.", 미래:"뜨거워 보일 것이다." }, s_kor: "수프가", b_en: "in the bowl", b_kor: "그릇 안에서", c_en: ["in the bowl", "for sure"], c_kor: ["그릇 안에서", "확실히"] },
    { vBase: "look", s: "The book", p: "부정", c: "interesting", kor: { 현재:"흥미로워 보이지 않는다.", 과거:"흥미로워 보이지 않았다.", 미래:"흥미로워 보이지 않을 것이다." }, s_kor: "책이", b_en: "from the cover", b_kor: "표지로 볼 때", c_en: ["from the cover", "at all"], c_kor: ["표지로 볼 때", "전혀"] },
    { vBase: "look", s: "The questions", p: "의문", c: "easy", kor: { 현재:"쉬워 보이니?", 과거:"쉬워 보였니?", 미래:"쉬워 보일까?" }, s_kor: "질문들이", b_en: "on the test", b_kor: "시험지에서", c_en: ["on the test", "to you"], c_kor: ["시험지에서", "너에게"] },
    { vBase: "look", s: "The garden", p: "긍정", c: "pretty", kor: { 현재:"예뻐 보인다.", 과거:"예뻐 보였다.", 미래:"예뻐 보일 것이다." }, s_kor: "정원이", b_en: "in spring", b_kor: "봄에", c_en: ["in spring", "all the time"], c_kor: ["봄에", "항상"] },
    { vBase: "look", s: "The car", p: "부정", c: "expensive", kor: { 현재:"비싸 보이지 않는다.", 과거:"비싸 보이지 않았다.", 미래:"비싸 보이지 않을 것이다." }, s_kor: "차가", b_en: "from the outside", b_kor: "밖에서 볼 때", c_en: ["from the outside", "all the time"], c_kor: ["밖에서 볼 때", "항상"] },
    { vBase: "look", s: "The weather", p: "의문", c: "terrible", kor: { 현재:"끔찍해 보이니?", 과거:"끔찍해 보였니?", 미래:"끔찍해 보일까?" }, s_kor: "날씨가", b_en: "outside", b_kor: "바깥이", c_en: ["outside", ADV.RN_EN], c_kor: ["바깥이", ADV.RN_KR1] },
    { vBase: "look", s: "The teacher", p: "긍정", c: "strict", kor: { 현재:"엄격해 보인다.", 과거:"엄격해 보였다.", 미래:"엄격해 보일 것이다." }, s_kor: "선생님이", b_en: "in the classroom", b_kor: "교실에서", c_en: ["in the classroom", "most of the time"], c_kor: ["교실에서", "보통"] },
    { vBase: "look", s: "The toys", p: "부정", c: "fun", kor: { 현재:"재미있어 보이지 않는다.", 과거:"재미있어 보이지 않았다.", 미래:"재미있어 보이지 않을 것이다." }, s_kor: "장난감이", b_en: "to the kids", b_kor: "아이들에게", c_en: ["to the kids", "for any reason"], c_kor: ["아이들에게", "어떤 이유에서든"] },
    { vBase: "look", s: "The situation", p: "의문", c: "serious", kor: { 현재:"심각해 보이니?", 과거:"심각해 보였니?", 미래:"심각해 보일까?" }, s_kor: "상황이", b_en: "to everyone", b_kor: "모두에게", c_en: ["to everyone", "here"], c_kor: ["모두에게", "여기서는"] },
    { vBase: "look", s: "The actors", p: "긍정", c: "tired", kor: { 현재:"피곤해 보인다.", 과거:"피곤해 보였다.", 미래:"피곤해 보일 것이다." }, s_kor: "배우들이", b_en: "after the show", b_kor: "공연 후에", c_en: ["after the show", ADV.TODAY_EN], c_kor: ["공연 후에", ADV.TODAY_KR] },
    { vBase: "look", s: "The solution", p: "부정", c: "simple", kor: { 현재:"간단해 보이지 않는다.", 과거:"간단해 보이지 않았다.", 미래:"간단해 보이지 않을 것이다." }, s_kor: "해결책이", b_en: "at first", b_kor: "처음에는", c_en: ["at first", "to me"], c_kor: ["처음에는", "나에게"] },
    { vBase: "look", s: "The mountain", p: "의문", c: "high", kor: { 현재:"높아 보이니?", 과거:"높아 보였니?", 미래:"높아 보일까?" }, s_kor: "산이", b_en: "from the town", b_kor: "마을에서 볼 때", c_en: ["from the town", "for sure"], c_kor: ["마을에서 볼 때", "확실히"] }
  ];
        return processRawRows2(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    feel: {
      standard: (() => {
        const subjPlurals = ["My legs", "His hands", "The results"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "feel", s: "The blanket", p: "긍정", c: "soft", kor: { 현재:"부드럽게 느껴진다.", 과거:"부드럽게 느껴졌다.", 미래:"부드럽게 느껴질 것이다." }, s_kor: "담요가", b_en: "in winter", b_kor: "겨울에", c_en: ["in winter", "for sure"], c_kor: ["겨울에", "확실히"] },
    { vBase: "feel", s: "The water", p: "부정", c: "hot", kor: { 현재:"뜨겁게 느껴지지 않는다.", 과거:"뜨겁게 느껴지지 않았다.", 미래:"뜨겁게 느껴지지 않을 것이다." }, s_kor: "물이", b_en: "in the pool", b_kor: "수영장에서", c_en: ["in the pool", "at all"], c_kor: ["수영장에서", "전혀"] },
    { vBase: "feel", s: "The air", p: "의문", c: "fresh", kor: { 현재:"신선하게 느껴지니?", 과거:"신선하게 느껴졌니?", 미래:"신선하게 느껴질까?" }, s_kor: "공기가", b_en: "in the morning", b_kor: "아침에", c_en: ["in the morning", "here"], c_kor: ["아침에", "여기서는"] },
    { vBase: "feel", s: "I", p: "긍정", c: "happy", kor: { 현재:"행복하게 느껴진다.", 과거:"행복하게 느껴졌다.", 미래:"행복하게 느껴질 것이다." }, s_kor: "나는", b_en: ADV.RN_EN, b_kor: ADV.RN_KR1, c_en: [ADV.RN_EN, "with you"], c_kor: [ADV.RN_KR1, "너와 함께"] },
    { vBase: "feel", s: "The fabric", p: "부정", c: "rough", kor: { 현재:"거칠게 느껴지지 않는다.", 과거:"거칠게 느껴지지 않았다.", 미래:"거칠게 느껴지지 않을 것이다." }, s_kor: "천이", b_en: "to the touch", b_kor: "만져보았을 때", c_en: ["to the touch", "most of the time"], c_kor: ["만져보았을 때", "대부분의 경우에"] },
    { vBase: "feel", s: "He", p: "의문", c: "sick", kor: { 현재:"아프게 느껴지니?", 과거:"아프게 느껴졌니?", 미래:"아프게 느껴질까?" }, s_kor: "그는", b_en: ADV.TODAY_EN, b_kor: ADV.TODAY_KR, c_en: [ADV.TODAY_EN, "a little bit"], c_kor: [ADV.TODAY_KR, "조금"] },
    { vBase: "feel", s: "The atmosphere", p: "긍정", c: "tense", kor: { 현재:"긴장되게 느껴진다.", 과거:"긴장되게 느껴졌다.", 미래:"긴장되게 느껴질 것이다." }, s_kor: "분위기가", b_en: "in the room", b_kor: "방 안에서", c_en: ["in the room", "all of a sudden"], c_kor: ["방 안에서", "갑자기"] },
    { vBase: "feel", s: "The floor", p: "부정", c: "slippery", kor: { 현재:"미끄럽게 느껴지지 않는다.", 과거:"미끄럽게 느껴지지 않았다.", 미래:"미끄럽게 느껴지지 않을 것이다." }, s_kor: "바닥이", b_en: "after cleaning", b_kor: "청소 후에", c_en: ["after cleaning", "at all"], c_kor: ["청소 후에", "전혀"] },
    { vBase: "feel", s: "The weather", p: "의문", c: "humid", kor: { 현재:"습하게 느껴지니?", 과거:"습하게 느껴졌니?", 미래:"습하게 느껴질까?" }, s_kor: "날씨가", b_en: "outside", b_kor: "바깥이", c_en: ["outside", ADV.TODAY_EN], c_kor: ["바깥이", ADV.TODAY_KR] },
    { vBase: "feel", s: "My legs", p: "긍정", c: "heavy", kor: { 현재:"무겁게 느껴진다.", 과거:"무겁게 느껴졌다.", 미래:"무겁게 느껴질 것이다." }, s_kor: "내 다리가", b_en: "after the run", b_kor: "달리기 후에", c_en: ["after the run", ADV.NOW_EN], c_kor: ["달리기 후에", ADV.NOW_KR1] },
    { vBase: "feel", s: "The bed", p: "부정", c: "comfortable", kor: { 현재:"편안하게 느껴지지 않는다.", 과거:"편안하게 느껴지지 않았다.", 미래:"편안하게 느껴지지 않을 것이다." }, s_kor: "침대가", b_en: "to me", b_kor: "나에게", c_en: ["to me", "all the time"], c_kor: ["나에게", "항상"] },
    { vBase: "feel", s: "You", p: "의문", c: "sad", kor: { 현재:"슬프게 느껴지니?", 과거:"슬프게 느껴졌니?", 미래:"슬프게 느껴질까?" }, s_kor: "너는", b_en: "about the news", b_kor: "그 소식에 대해", c_en: ["about the news", ADV.TODAY_EN], c_kor: ["그 소식에 대해", ADV.TODAY_KR] },
    { vBase: "feel", s: "The room", p: "긍정", c: "warm", kor: { 현재:"따뜻하게 느껴진다.", 과거:"따뜻하게 느껴졌다.", 미래:"따뜻하게 느껴질 것이다." }, s_kor: "방이", b_en: "with the heater", b_kor: "히터를 켜서", c_en: ["with the heater", ADV.NOW_EN], c_kor: ["히터를 켜서", ADV.NOW_KR1] },
    { vBase: "feel", s: "The material", p: "부정", c: "cheap", kor: { 현재:"싸구려로 느껴지지 않는다.", 과거:"싸구려로 느껴지지 않았다.", 미래:"싸구려로 느껴지지 않을 것이다." }, s_kor: "재질이", b_en: "to us", b_kor: "우리에게는", c_en: ["to us", "at all"], c_kor: ["우리에게는", "전혀"] },
    { vBase: "feel", s: "The pain", p: "의문", c: "bad", kor: { 현재:"심하게 느껴지니?", 과거:"심하게 느껴졌니?", 미래:"심하게 느껴질까?" }, s_kor: "통증이", b_en: ADV.RN_EN, b_kor: ADV.RN_KR1, c_en: [ADV.RN_EN, "to you"], c_kor: [ADV.RN_KR1, "너에게"] },
    { vBase: "feel", s: "She", p: "긍정", c: "confident", kor: { 현재:"자신감 있게 느껴진다.", 과거:"자신감 있게 느껴졌다.", 미래:"자신감 있게 느껴질 것이다." }, s_kor: "그녀는", b_en: "before the test", b_kor: "시험 전에", c_en: ["before the test", "most of the time"], c_kor: ["시험 전에", "보통"] },
    { vBase: "feel", s: "The silence", p: "부정", c: "awkward", kor: { 현재:"어색하게 느껴지지 않는다.", 과거:"어색하게 느껴지지 않았다.", 미래:"어색하게 느껴지지 않을 것이다." }, s_kor: "침묵이", b_en: "between us", b_kor: "우리 사이에", c_en: ["between us", "for any reason"], c_kor: ["우리 사이에", "어떤 이유에서든"] },
    { vBase: "feel", s: "The situation", p: "의문", c: "dangerous", kor: { 현재:"위험하게 느껴지니?", 과거:"위험하게 느껴졌니?", 미래:"위험하게 느껴질까?" }, s_kor: "상황이", b_en: "to you", b_kor: "너에게는", c_en: ["to you", "here"], c_kor: ["너에게는", "여기서는"] },
    { vBase: "feel", s: "His hands", p: "긍정", c: "cold", kor: { 현재:"차갑게 느껴진다.", 과거:"차갑게 느껴졌다.", 미래:"차갑게 느껴질 것이다." }, s_kor: "그의 손이", b_en: "in winter", b_kor: "겨울에", c_en: ["in winter", "all the time"], c_kor: ["겨울에", "항상"] },
    { vBase: "feel", s: "The mattress", p: "부정", c: "hard", kor: { 현재:"딱딱하게 느껴지지 않는다.", 과거:"딱딱하게 느껴지지 않았다.", 미래:"딱딱하게 느껴지지 않을 것이다." }, s_kor: "매트리스가", b_en: "to me", b_kor: "나에게는", c_en: ["to me", "at all"], c_kor: ["나에게는", "전혀"] },
    { vBase: "feel", s: "The results", p: "의문", c: "disappointing", kor: { 현재:"실망스럽게 느껴지니?", 과거:"실망스럽게 느껴졌니?", 미래:"실망스럽게 느껴질까?" }, s_kor: "결과가", b_en: "to them", b_kor: "그들에게", c_en: ["to them", ADV.NOW_EN], c_kor: ["그들에게", ADV.NOW_KR1] },
    { vBase: "feel", s: "We", p: "긍정", c: "proud", kor: { 현재:"자랑스럽게 느껴진다.", 과거:"자랑스럽게 느껴졌다.", 미래:"자랑스럽게 느껴질 것이다." }, s_kor: "우리는", b_en: "of the team", b_kor: "팀이", c_en: ["of the team", ADV.TODAY_EN], c_kor: ["팀이", ADV.TODAY_KR] },
    { vBase: "feel", s: "The burden", p: "부정", c: "heavy", kor: { 현재:"무겁게 느껴지지 않는다.", 과거:"무겁게 느껴지지 않았다.", 미래:"무겁게 느껴지지 않을 것이다." }, s_kor: "부담이", b_en: "to me", b_kor: "나에게는", c_en: ["to me", "most of the time"], c_kor: ["나에게는", "대부분의 경우에"] },
    { vBase: "feel", s: "They", p: "의문", c: "angry", kor: { 현재:"화가 난 것처럼 느껴지니?", 과거:"화가 난 것처럼 느껴졌니?", 미래:"화가 난 것처럼 느껴질까?" }, s_kor: "그들은", b_en: "about the mistake", b_kor: "실수에 대해", c_en: ["about the mistake", ADV.TODAY_EN], c_kor: ["실수에 대해", ADV.TODAY_KR] },
    { vBase: "feel", s: "The towel", p: "긍정", c: "dry", kor: { 현재:"마른 것처럼 느껴진다.", 과거:"마른 것처럼 느껴졌다.", 미래:"마른 것처럼 느껴질 것이다." }, s_kor: "수건이", b_en: "in the sun", b_kor: "햇볕에서", c_en: ["in the sun", "until the end"], c_kor: ["햇볕에서", "끝까지"] },
    { vBase: "feel", s: "The music", p: "부정", c: "loud", kor: { 현재:"시끄럽게 느껴지지 않는다.", 과거:"시끄럽게 느껴지지 않았다.", 미래:"시끄럽게 느껴지지 않을 것이다." }, s_kor: "음악이", b_en: "in this room", b_kor: "이 방에서는", c_en: ["in this room", "at all"], c_kor: ["이 방에서는", "전혀"] },
    { vBase: "feel", s: "The sun", p: "의문", c: "strong", kor: { 현재:"강하게 느껴지니?", 과거:"강하게 느껴졌니?", 미래:"강하게 느껴질까?" }, s_kor: "햇살이", b_en: "at noon", b_kor: "정오에", c_en: ["at noon", ADV.TODAY_EN], c_kor: ["정오에", ADV.TODAY_KR] }
  ];
        return processRawRows2(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    sound: {
      standard: (() => {
        const subjPlurals = ["The steps", "The instructions"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "sound", s: "The music", p: "긍정", c: "loud", kor: { 현재:"시끄럽게 들린다.", 과거:"시끄럽게 들렸다.", 미래:"시끄럽게 들릴 것이다." }, s_kor: "음악이", b_en: "in the room", b_kor: "방 안에서", c_en: ["in the room", ADV.TODAY_EN], c_kor: ["방 안에서", ADV.TODAY_KR] },
    { vBase: "sound", s: "The story", p: "부정", c: "true", kor: { 현재:"사실처럼 들리지 않는다.", 과거:"사실처럼 들리지 않았다.", 미래:"사실처럼 들리지 않을 것이다." }, s_kor: "이야기가", b_en: "to me", b_kor: "나에게는", c_en: ["to me", "at all"], c_kor: ["나에게는", "전혀"] },
    { vBase: "sound", s: "His voice", p: "의문", c: "angry", kor: { 현재:"화난 것처럼 들리니?", 과거:"화난 것처럼 들렸니?", 미래:"화난 것처럼 들릴까?" }, s_kor: "그의 목소리가", b_en: "on the phone", b_kor: "전화상으로", c_en: ["on the phone", ADV.NOW_EN], c_kor: ["전화상으로", ADV.NOW_KR1] },
    { vBase: "sound", s: "The idea", p: "긍정", c: "great", kor: { 현재:"훌륭하게 들린다.", 과거:"훌륭하게 들렸다.", 미래:"훌륭하게 들릴 것이다." }, s_kor: "아이디어가", b_en: "to us", b_kor: "우리에게는", c_en: ["to us", ADV.RN_EN], c_kor: ["우리에게는", ADV.RN_KR1] },
    { vBase: "sound", s: "The alarm", p: "부정", c: "clear", kor: { 현재:"선명하게 들리지 않는다.", 과거:"선명하게 들리지 않았다.", 미래:"선명하게 들리지 않을 것이다." }, s_kor: "알람이", b_en: "from here", b_kor: "여기서는", c_en: ["from here", "all the time"], c_kor: ["여기서는", "항상"] },
    { vBase: "sound", s: "The plan", p: "의문", c: "perfect", kor: { 현재:"완벽하게 들리니?", 과거:"완벽하게 들렸니?", 미래:"완벽하게 들릴까?" }, s_kor: "계획이", b_en: "to you", b_kor: "너에게는", c_en: ["to you", "at first"], c_kor: ["너에게는", "처음에는"] },
    { vBase: "sound", s: "The song", p: "긍정", c: "sad", kor: { 현재:"슬프게 들린다.", 과거:"슬프게 들렸다.", 미래:"슬프게 들릴 것이다." }, s_kor: "노래가", b_en: ADV.TN_EN, b_kor: ADV.TN_KR2, c_en: [ADV.TN_EN, "for sure"], c_kor: [ADV.TN_KR2, "확실히"] },
    { vBase: "sound", s: "The noise", p: "부정", c: "annoying", kor: { 현재:"짜증 나게 들리지 않는다.", 과거:"짜증 나게 들리지 않았다.", 미래:"짜증 나게 들리지 않을 것이다." }, s_kor: "소음이", b_en: "to me", b_kor: "나에게는", c_en: ["to me", "at all"], c_kor: ["나에게는", "전혀"] },
    { vBase: "sound", s: "The engine", p: "의문", c: "strange", kor: { 현재:"이상하게 들리니?", 과거:"이상하게 들렸니?", 미래:"이상하게 들릴까?" }, s_kor: "엔진이", b_en: ADV.TODAY_EN, b_kor: ADV.TODAY_KR, c_en: [ADV.TODAY_EN, "a little bit"], c_kor: [ADV.TODAY_KR, "조금"] },
    { vBase: "sound", s: "Her excuse", p: "긍정", c: "weak", kor: { 현재:"빈약하게 들린다.", 과거:"빈약하게 들렸다.", 미래:"빈약하게 들릴 것이다." }, s_kor: "그녀의 변명이", b_en: "to everyone", b_kor: "모두에게", c_en: ["to everyone", ADV.NOW_EN], c_kor: ["모두에게", ADV.NOW_KR1] },
    { vBase: "sound", s: "The news", p: "부정", c: "surprising", kor: { 현재:"놀랍게 들리지 않는다.", 과거:"놀랍게 들리지 않았다.", 미래:"놀랍게 들리지 않을 것이다." }, s_kor: "뉴스가", b_en: "to us", b_kor: "우리에게는", c_en: ["to us", "for any reason"], c_kor: ["우리에게는", "어떤 이유에서든"] },
    { vBase: "sound", s: "The joke", p: "의문", c: "funny", kor: { 현재:"재미있게 들리니?", 과거:"재미있게 들렸니?", 미래:"재미있게 들릴까?" }, s_kor: "농담이", b_en: "to them", b_kor: "그들에게", c_en: ["to them", ADV.TODAY_EN], c_kor: ["그들에게", ADV.TODAY_KR] },
    { vBase: "sound", s: "The proposal", p: "긍정", c: "interesting", kor: { 현재:"흥미롭게 들린다.", 과거:"흥미롭게 들렸다.", 미래:"흥미롭게 들릴 것이다." }, s_kor: "제안이", b_en: "at first", b_kor: "처음에는", c_en: ["at first", "to me"], c_kor: ["처음에는", "나에게"] },
    { vBase: "sound", s: "The steps", p: "부정", c: "heavy", kor: { 현재:"무겁게 들리지 않는다.", 과거:"무겁게 들리지 않았다.", 미래:"무겁게 들리지 않을 것이다." }, s_kor: "발소리가", b_en: "in the hall", b_kor: "복도에서", c_en: ["in the hall", "at all"], c_kor: ["복도에서", "전혀"] },
    { vBase: "sound", s: "The bird", p: "의문", c: "sweet", kor: { 현재:"달콤하게 들리니?", 과거:"달콤하게 들렸니?", 미래:"달콤하게 들릴까?" }, s_kor: "새소리가", b_en: "in the morning", b_kor: "아침에", c_en: ["in the morning", "all the time"], c_kor: ["아침에", "항상"] },
    { vBase: "sound", s: "The suggestion", p: "긍정", c: "helpful", kor: { 현재:"도움이 되는 것처럼 들린다.", 과거:"도움이 되는 것처럼 들렸다.", 미래:"도움이 되는 것처럼 들릴 것이다." }, s_kor: "제안이", b_en: "to us", b_kor: "우리에게", c_en: ["to us", ADV.NOW_EN], c_kor: ["우리에게", ADV.NOW_KR1] },
    { vBase: "sound", s: "The answer", p: "부정", c: "correct", kor: { 현재:"정확하게 들리지 않는다.", 과거:"정확하게 들리지 않았다.", 미래:"정확하게 들리지 않을 것이다." }, s_kor: "대답이", b_en: "to the teacher", b_kor: "선생님에게는", c_en: ["to the teacher", "at all"], c_kor: ["선생님에게는", "전혀"] },
    { vBase: "sound", s: "The explanation", p: "의문", c: "logical", kor: { 현재:"논리적으로 들리니?", 과거:"논리적으로 들렸니?", 미래:"논리적으로 들릴까?" }, s_kor: "설명이", b_en: "to you", b_kor: "너에게", c_en: ["to you", ADV.RN_EN], c_kor: ["너에게", ADV.RN_KR1] },
    { vBase: "sound", s: "The thunder", p: "긍정", c: "scary", kor: { 현재:"무섭게 들린다.", 과거:"무섭게 들렸다.", 미래:"무섭게 들릴 것이다." }, s_kor: "천둥소리가", b_en: "at night", b_kor: "밤에", c_en: ["at night", "all the time"], c_kor: ["밤에", "항상"] },
    { vBase: "sound", s: "The speech", p: "부정", c: "boring", kor: { 현재:"지루하게 들리지 않는다.", 과거:"지루하게 들리지 않았다.", 미래:"지루하게 들리지 않을 것이다." }, s_kor: "연설이", b_en: "to the students", b_kor: "학생들에게는", c_en: ["to the students", "most of the time"], c_kor: ["학생들에게는", "대부분의 경우에"] },
    { vBase: "sound", s: "The rumor", p: "의문", c: "false", kor: { 현재:"거짓으로 들리니?", 과거:"거짓으로 들렸니?", 미래:"거짓으로 들릴까?" }, s_kor: "소문이", b_en: "to everyone", b_kor: "모두에게", c_en: ["to everyone", ADV.TODAY_EN], c_kor: ["모두에게", ADV.TODAY_KR] },
    { vBase: "sound", s: "The guitar", p: "긍정", c: "beautiful", kor: { 현재:"아름답게 들린다.", 과거:"아름답게 들렸다.", 미래:"아름답게 들릴 것이다." }, s_kor: "기타 소리가", b_en: "in the cafe", b_kor: "카페에서", c_en: ["in the cafe", "all the time"], c_kor: ["카페에서", "항상"] },
    { vBase: "sound", s: "The instructions", p: "부정", c: "clear", kor: { 현재:"명확하게 들리지 않는다.", 과거:"명확하게 들리지 않았다.", 미래:"명확하게 들리지 않을 것이다." }, s_kor: "지시사항이", b_en: "over the radio", b_kor: "무전기로는", c_en: ["over the radio", "at all"], c_kor: ["무전기로는", "전혀"] },
    { vBase: "sound", s: "The excuse", p: "의문", c: "reasonable", kor: { 현재:"합리적으로 들리니?", 과거:"합리적으로 들렸니?", 미래:"합리적으로 들릴까?" }, s_kor: "변명이", b_en: "to the boss", b_kor: "사장님에게", c_en: ["to the boss", ADV.NOW_EN], c_kor: ["사장님에게", ADV.NOW_KR1] },
    { vBase: "sound", s: "The laugh", p: "긍정", c: "fake", kor: { 현재:"가짜처럼 들린다.", 과거:"가짜처럼 들렸다.", 미래:"가짜처럼 들릴 것이다." }, s_kor: "웃음소리가", b_en: "to me", b_kor: "나에게는", c_en: ["to me", "all of a sudden"], c_kor: ["나에게는", "갑자기"] },
    { vBase: "sound", s: "The warning", p: "부정", c: "serious", kor: { 현재:"심각하게 들리지 않는다.", 과거:"심각하게 들리지 않았다.", 미래:"심각하게 들리지 않을 것이다." }, s_kor: "경고가", b_en: "to them", b_kor: "그들에게는", c_en: ["to them", "at all"], c_kor: ["그들에게는", "전혀"] },
    { vBase: "sound", s: "The project", p: "의문", c: "difficult", kor: { 현재:"어렵게 들리니?", 과거:"어렵게 들렸니?", 미래:"어렵게 들릴까?" }, s_kor: "프로젝트가", b_en: "at first", b_kor: "처음에는", c_en: ["at first", "to you"], c_kor: ["처음에는", "너에게"] }
  ];
        return processRawRows2(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    smell: {
      standard: (() => {
        const subjPlurals = ["The shoes"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "smell", s: "The flower", p: "긍정", c: "sweet", kor: { 현재:"달콤한 냄새가 난다.", 과거:"달콤한 냄새가 났다.", 미래:"달콤한 냄새가 날 것이다." }, s_kor: "꽃이", b_en: "in the garden", b_kor: "정원에서", c_en: ["in the garden", "all the time"], c_kor: ["정원에서", "항상"] },
    { vBase: "smell", s: "The milk", p: "부정", c: "sour", kor: { 현재:"상한 냄새가 나지 않는다.", 과거:"상한 냄새가 나지 않았다.", 미래:"상한 냄새가 나지 않을 것이다." }, s_kor: "우유가", b_en: "in the fridge", b_kor: "냉장고에서", c_en: ["in the fridge", "at all"], c_kor: ["냉장고에서", "전혀"] },
    { vBase: "smell", s: "The food", p: "의문", c: "delicious", kor: { 현재:"맛있는 냄새가 나니?", 과거:"맛있는 냄새가 났니?", 미래:"맛있는 냄새가 날까?" }, s_kor: "음식이", b_en: "in the kitchen", b_kor: "부엌에서", c_en: ["in the kitchen", ADV.NOW_EN], c_kor: ["부엌에서", ADV.NOW_KR1] },
    { vBase: "smell", s: "The bread", p: "긍정", c: "fresh", kor: { 현재:"신선한 냄새가 난다.", 과거:"신선한 냄새가 났다.", 미래:"신선한 냄새가 날 것이다." }, s_kor: "빵이", b_en: "in the bakery", b_kor: "빵집에서", c_en: ["in the bakery", "every morning"], c_kor: ["빵집에서", "매일 아침"] },
    { vBase: "smell", s: "The room", p: "부정", c: "bad", kor: { 현재:"나쁜 냄새가 나지 않는다.", 과거:"나쁜 냄새가 나지 않았다.", 미래:"나쁜 냄새가 나지 않을 것이다." }, s_kor: "방이", b_en: "after cleaning", b_kor: "청소 후에", c_en: ["after cleaning", "all the time"], c_kor: ["청소 후에", "항상"] },
    { vBase: "smell", s: "The soup", p: "의문", c: "spicy", kor: { 현재:"매운 냄새가 나니?", 과거:"매운 냄새가 났니?", 미래:"매운 냄새가 날까?" }, s_kor: "수프가", b_en: "in the pot", b_kor: "냄비 안에서", c_en: ["in the pot", "for sure"], c_kor: ["냄비 안에서", "확실히"] },
    { vBase: "smell", s: "The cheese", p: "긍정", c: "strong", kor: { 현재:"강한 냄새가 난다.", 과거:"강한 냄새가 났다.", 미래:"강한 냄새가 날 것이다." }, s_kor: "치즈가", b_en: "on the plate", b_kor: "접시 위에서", c_en: ["on the plate", "most of the time"], c_kor: ["접시 위에서", "보통"] },
    { vBase: "smell", s: "The air", p: "부정", c: "fresh", kor: { 현재:"신선한 냄새가 나지 않는다.", 과거:"신선한 냄새가 나지 않았다.", 미래:"신선한 냄새가 나지 않을 것이다." }, s_kor: "공기가", b_en: "in the city", b_kor: "도시에서는", c_en: ["in the city", ADV.TODAY_EN], c_kor: ["도시에서는", ADV.TODAY_KR] },
    { vBase: "smell", s: "The coffee", p: "의문", c: "good", kor: { 현재:"좋은 냄새가 나니?", 과거:"좋은 냄새가 났니?", 미래:"좋은 냄새가 날까?" }, s_kor: "커피가", b_en: "in the morning", b_kor: "아침에", c_en: ["in the morning", "all the time"], c_kor: ["아침에", "항상"] },
    { vBase: "smell", s: "The perfume", p: "긍정", c: "nice", kor: { 현재:"좋은 냄새가 난다.", 과거:"좋은 냄새가 났다.", 미래:"좋은 냄새가 날 것이다." }, s_kor: "향수가", b_en: "on her", b_kor: "그녀에게서", c_en: ["on her", ADV.TODAY_EN], c_kor: ["그녀에게서", ADV.TODAY_KR] },
    { vBase: "smell", s: "The garbage", p: "부정", c: "terrible", kor: { 현재:"끔찍한 냄새가 나지 않는다.", 과거:"끔찍한 냄새가 나지 않았다.", 미래:"끔찍한 냄새가 나지 않을 것이다." }, s_kor: "쓰레기가", b_en: "in winter", b_kor: "겨울에는", c_en: ["in winter", "most of the time"], c_kor: ["겨울에는", "보통"] },
    { vBase: "smell", s: "The meat", p: "의문", c: "strange", kor: { 현재:"이상한 냄새가 나니?", 과거:"이상한 냄새가 났니?", 미래:"이상한 냄새가 날까?" }, s_kor: "고기가", b_en: ADV.RN_EN, b_kor: ADV.RN_KR1, c_en: [ADV.RN_EN, "to you"], c_kor: [ADV.RN_KR1, "너에게"] },
    { vBase: "smell", s: "The soap", p: "긍정", c: "clean", kor: { 현재:"깨끗한 냄새가 난다.", 과거:"깨끗한 냄새가 났다.", 미래:"깨끗한 냄새가 날 것이다." }, s_kor: "비누가", b_en: "in the bathroom", b_kor: "욕실에서", c_en: ["in the bathroom", "all the time"], c_kor: ["욕실에서", "항상"] },
    { vBase: "smell", s: "The smoke", p: "부정", c: "heavy", kor: { 현재:"독한 냄새가 나지 않는다.", 과거:"독한 냄새가 나지 않았다.", 미래:"독한 냄새가 나지 않을 것이다." }, s_kor: "연기가", b_en: "from here", b_kor: "여기서는", c_en: ["from here", "at all"], c_kor: ["여기서는", "전혀"] },
    { vBase: "smell", s: "The fish", p: "의문", c: "fresh", kor: { 현재:"신선한 냄새가 나니?", 과거:"신선한 냄새가 났니?", 미래:"신선한 냄새가 날까?" }, s_kor: "생선이", b_en: "at the market", b_kor: "시장에서", c_en: ["at the market", ADV.TODAY_EN], c_kor: ["시장에서", ADV.TODAY_KR] },
    { vBase: "smell", s: "The lotion", p: "긍정", c: "soft", kor: { 현재:"부드러운 냄새가 난다.", 과거:"부드러운 냄새가 났다.", 미래:"부드러운 냄새가 날 것이다." }, s_kor: "로션이", b_en: "on the skin", b_kor: "피부에서", c_en: ["on the skin", "for sure"], c_kor: ["피부에서", "확실히"] },
    { vBase: "smell", s: "The car", p: "부정", c: "new", kor: { 현재:"새것 냄새가 나지 않는다.", 과거:"새것 냄새가 나지 않았다.", 미래:"새것 냄새가 나지 않을 것이다." }, s_kor: "차가", b_en: "for any reason", b_kor: "어떤 이유에서든", c_en: ["for any reason", "inside"], c_kor: ["어떤 이유에서든", "안에서"] },
    { vBase: "smell", s: "The blanket", p: "의문", c: "musty", kor: { 현재:"곰팡내가 나니?", 과거:"곰팡내가 났니?", 미래:"곰팡내가 날까?" }, s_kor: "담요가", b_en: "from the closet", b_kor: "옷장에서", c_en: ["from the closet", ADV.TODAY_EN], c_kor: ["옷장에서", ADV.TODAY_KR] },
    { vBase: "smell", s: "The candle", p: "긍정", c: "pleasant", kor: { 현재:"기분 좋은 냄새가 난다.", 과거:"기분 좋은 냄새가 났다.", 미래:"기분 좋은 냄새가 날 것이다." }, s_kor: "양초가", b_en: "in the evening", b_kor: "저녁에", c_en: ["in the evening", "all the time"], c_kor: ["저녁에", "항상"] },
    { vBase: "smell", s: "The shoes", p: "부정", c: "smelly", kor: { 현재:"악취가 나지 않는다.", 과거:"악취가 나지 않았다.", 미래:"악취가 나지 않을 것이다." }, s_kor: "신발이", b_en: "after washing", b_kor: "세탁 후에", c_en: ["after washing", "at all"], c_kor: ["세탁 후에", "전혀"] },
    { vBase: "smell", s: "The sauce", p: "의문", c: "sweet", kor: { 현재:"달콤한 냄새가 나니?", 과거:"달콤한 냄새가 났니?", 미래:"달콤한 냄새가 날까?" }, s_kor: "소스가", b_en: "in the bowl", b_kor: "그릇 안에서", c_en: ["in the bowl", ADV.NOW_EN], c_kor: ["그릇 안에서", ADV.NOW_KR1] },
    { vBase: "smell", s: "The house", p: "긍정", c: "wonderful", kor: { 현재:"훌륭한 냄새가 난다.", 과거:"훌륭한 냄새가 났다.", 미래:"훌륭한 냄새가 날 것이다." }, s_kor: "집이", b_en: "on holidays", b_kor: "명절에", c_en: ["on holidays", "most of the time"], c_kor: ["명절에", "대부분"] },
    { vBase: "smell", s: "The breath", p: "부정", c: "bad", kor: { 현재:"입냄새가 나쁘지 않다.", 과거:"입냄새가 나쁘지 않았다.", 미래:"입냄새가 나쁘지 않을 것이다." }, s_kor: "입냄새가", b_en: "after brushing", b_kor: "양치 후에", c_en: ["after brushing", "at all"], c_kor: ["양치 후에", "전혀"] },
    { vBase: "smell", s: "The pizza", p: "의문", c: "cheesy", kor: { 현재:"치즈 냄새가 많이 나니?", 과거:"치즈 냄새가 많이 났니?", 미래:"치즈 냄새가 많이 날까?" }, s_kor: "피자가", b_en: ADV.RN_EN, b_kor: ADV.RN_KR1, c_en: [ADV.RN_EN, "for sure"], c_kor: [ADV.RN_KR1, "확실히"] },
    { vBase: "smell", s: "The wood", p: "긍정", c: "earthy", kor: { 현재:"흙(자연) 냄새가 난다.", 과거:"흙(자연) 냄새가 났다.", 미래:"흙(자연) 냄새가 날 것이다." }, s_kor: "나무가", b_en: "after the rain", b_kor: "비 온 뒤에", c_en: ["after the rain", "in a natural way"], c_kor: ["비 온 뒤에", "자연스럽게"] },
    { vBase: "smell", s: "The paint", p: "부정", c: "strong", kor: { 현재:"독한 냄새가 나지 않는다.", 과거:"독한 냄새가 나지 않았다.", 미래:"독한 냄새가 나지 않을 것이다." }, s_kor: "페인트가", b_en: "in this room", b_kor: "이 방에서는", c_en: ["in this room", "most of the time"], c_kor: ["이 방에서는", "대부분의 경우에"] },
    { vBase: "smell", s: "The tea", p: "의문", c: "herbal", kor: { 현재:"허브 냄새가 나니?", 과거:"허브 냄새가 났니?", 미래:"허브 냄새가 날까?" }, s_kor: "차가", b_en: "in the cup", b_kor: "컵 안에서", c_en: ["in the cup", "in a mild way"], c_kor: ["컵 안에서", "은은하게"] }
  ];
        return processRawRows2(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    taste: {
      standard: (() => {
        const subjPlurals = ["The apples", "The cookies", "The drinks"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "taste", s: "The soup", p: "긍정", c: "delicious", kor: { 현재:"맛있는 맛이 난다.", 과거:"맛있는 맛이 났다.", 미래:"맛있는 맛이 날 것이다." }, s_kor: "수프가", b_en: "in the pot", b_kor: "냄비 안에서", c_en: ["in the pot", "all the time"], c_kor: ["냄비 안에서", "항상"] },
    { vBase: "taste", s: "The medicine", p: "부정", c: "bitter", kor: { 현재:"쓴맛이 나지 않는다.", 과거:"쓴맛이 나지 않았다.", 미래:"쓴맛이 나지 않을 것이다." }, s_kor: "약이", b_en: "to me", b_kor: "나에게는", c_en: ["to me", "at all"], c_kor: ["나에게는", "전혀"] },
    { vBase: "taste", s: "The coffee", p: "의문", c: "sweet", kor: { 현재:"단맛이 나니?", 과거:"단맛이 났니?", 미래:"단맛이 날까?" }, s_kor: "커피가", b_en: "with sugar", b_kor: "설탕을 넣으니", c_en: ["with sugar", ADV.TODAY_EN], c_kor: ["설탕을 넣으니", ADV.TODAY_KR] },
    { vBase: "taste", s: "The apples", p: "긍정", c: "sour", kor: { 현재:"신맛이 난다.", 과거:"신맛이 났다.", 미래:"신맛이 날 것이다." }, s_kor: "사과들이", b_en: "from the tree", b_kor: "그 나무에서 딴", c_en: ["from the tree", "for sure"], c_kor: ["그 나무에서 딴", "확실히"] },
    { vBase: "taste", s: "The cake", p: "부정", c: "dry", kor: { 현재:"퍽퍽한 맛이 나지 않는다.", 과거:"퍽퍽한 맛이 나지 않았다.", 미래:"퍽퍽한 맛이 나지 않을 것이다." }, s_kor: "케이크가", b_en: "after a day", b_kor: "하루가 지나도", c_en: ["after a day", "at all"], c_kor: ["하루가 지나도", "전혀"] },
    { vBase: "taste", s: "The water", p: "의문", c: "strange", kor: { 현재:"이상한 맛이 나니?", 과거:"이상한 맛이 났니?", 미래:"이상한 맛이 날까?" }, s_kor: "물이", b_en: "in this bottle", b_kor: "이 병 안에서", c_en: ["in this bottle", ADV.NOW_EN], c_kor: ["이 병 안에서", ADV.NOW_KR1] },
    { vBase: "taste", s: "The milk", p: "긍정", c: "bad", kor: { 현재:"상한 맛이 난다.", 과거:"상한 맛이 났다.", 미래:"상한 맛이 날 것이다." }, s_kor: "우유가", b_en: "out of the fridge", b_kor: "냉장고 밖에 두니", c_en: ["out of the fridge", "in no time"], c_kor: ["냉장고 밖에 두니", "순식간에"] },
    { vBase: "taste", s: "The cookies", p: "부정", c: "salty", kor: { 현재:"짠맛이 나지 않는다.", 과거:"짠맛이 나지 않았다.", 미래:"짠맛이 나지 않을 것이다." }, s_kor: "쿠키가", b_en: "without salt", b_kor: "소금을 넣지 않아", c_en: ["without salt", "at all"], c_kor: ["소금을 넣지 않아", "전혀"] },
    { vBase: "taste", s: "The meat", p: "의문", c: "spicy", kor: { 현재:"매운 맛이 나니?", 과거:"매운 맛이 났니?", 미래:"매운 맛이 날까?" }, s_kor: "고기가", b_en: "with this sauce", b_kor: "이 소스와 함께", c_en: ["with this sauce", "to you"], c_kor: ["이 소스와 함께", "너에게"] },
    { vBase: "taste", s: "The tea", p: "긍정", c: "strong", kor: { 현재:"진한 맛이 난다.", 과거:"진한 맛이 났다.", 미래:"진한 맛이 날 것이다." }, s_kor: "차가", b_en: "in the morning", b_kor: "아침에는", c_en: ["in the morning", "most of the time"], c_kor: ["아침에는", "보통"] },
    { vBase: "taste", s: "The sauce", p: "부정", c: "hot", kor: { 현재:"매운 맛이 나지 않는다.", 과거:"매운 맛이 나지 않았다.", 미래:"매운 맛이 나지 않을 것이다." }, s_kor: "소스가", b_en: "to me", b_kor: "나에게는", c_en: ["to me", "all the time"], c_kor: ["나에게는", "항상"] },
    { vBase: "taste", s: "The bread", p: "의문", c: "fresh", kor: { 현재:"신선한 맛이 나니?", 과거:"신선한 맛이 났니?", 미래:"신선한 맛이 날까?" }, s_kor: "빵이", b_en: "from the oven", b_kor: "오븐에서 막 나와서", c_en: ["from the oven", ADV.RN_EN], c_kor: ["오븐에서 막 나와서", ADV.RN_KR1] },
    { vBase: "taste", s: "The juice", p: "긍정", c: "sweet", kor: { 현재:"단맛이 난다.", 과거:"단맛이 났다.", 미래:"단맛이 날 것이다." }, s_kor: "주스가", b_en: "with ice", b_kor: "얼음을 넣으니", c_en: ["with ice", "all the time"], c_kor: ["얼음을 넣으니", "항상"] },
    { vBase: "taste", s: "The fish", p: "부정", c: "fishy", kor: { 현재:"비린 맛이 나지 않는다.", 과거:"비린 맛이 나지 않았다.", 미래:"비린 맛이 나지 않을 것이다." }, s_kor: "생선이", b_en: "with lemon", b_kor: "레몬과 함께", c_en: ["with lemon", "at all"], c_kor: ["레몬과 함께", "전혀"] },
    { vBase: "taste", s: "The drinks", p: "의문", c: "good", kor: { 현재:"좋은 맛이 나니?", 과거:"좋은 맛이 났니?", 미래:"좋은 맛이 날까?" }, s_kor: "음료수들이", b_en: "at this party", b_kor: "이 파티에서", c_en: ["at this party", "to you"], c_kor: ["이 파티에서", "너에게"] },
    { vBase: "taste", s: "The pizza", p: "긍정", c: "salty", kor: { 현재:"짠맛이 난다.", 과거:"짠맛이 났다.", 미래:"짠맛이 날 것이다." }, s_kor: "피자가", b_en: "with extra cheese", b_kor: "치즈를 추가하니", c_en: ["with extra cheese", "for sure"], c_kor: ["치즈를 추가하니", "확실히"] },
    { vBase: "taste", s: "The candy", p: "부정", c: "sour", kor: { 현재:"신맛이 나지 않는다.", 과거:"신맛이 나지 않았다.", 미래:"신맛이 나지 않을 것이다." }, s_kor: "사탕이", b_en: "in my mouth", b_kor: "내 입에서는", c_en: ["in my mouth", "for any reason"], c_kor: ["내 입에서는", "어떤 이유에서든"] },
    { vBase: "taste", s: "The sandwich", p: "의문", c: "dry", kor: { 현재:"퍽퍽한 맛이 나니?", 과거:"퍽퍽한 맛이 났니?", 미래:"퍽퍽한 맛이 날까?" }, s_kor: "샌드위치가", b_en: "without sauce", b_kor: "소스 없이", c_en: ["without sauce", ADV.NOW_EN], c_kor: ["소스 없이", ADV.NOW_KR1] },
    { vBase: "taste", s: "The cheese", p: "긍정", c: "rich", kor: { 현재:"풍부한 맛이 난다.", 과거:"풍부한 맛이 났다.", 미래:"풍부한 맛이 날 것이다." }, s_kor: "치즈가", b_en: "on the cracker", b_kor: "크래커 위에서", c_en: ["on the cracker", "all the time"], c_kor: ["크래커 위에서", "항상"] },
    { vBase: "taste", s: "The soup", p: "부정", c: "salty", kor: { 현재:"짠맛이 나지 않는다.", 과거:"짠맛이 나지 않았다.", 미래:"짠맛이 나지 않을 것이다." }, s_kor: "수프가", b_en: "after adding water", b_kor: "물을 넣은 후에", c_en: ["after adding water", "at all"], c_kor: ["물을 넣은 후에", "전혀"] },
    { vBase: "taste", s: "The chicken", p: "의문", c: "spicy", kor: { 현재:"매운 맛이 나니?", 과거:"매운 맛이 났니?", 미래:"매운 맛이 날까?" }, s_kor: "치킨이", b_en: "at this restaurant", b_kor: "이 식당에서", c_en: ["at this restaurant", "to you"], c_kor: ["이 식당에서", "너에게"] },
    { vBase: "taste", s: "The dessert", p: "긍정", c: "sweet", kor: { 현재:"단맛이 난다.", 과거:"단맛이 났다.", 미래:"단맛이 날 것이다." }, s_kor: "디저트가", b_en: "after dinner", b_kor: "저녁 식사 후에", c_en: ["after dinner", "for sure"], c_kor: ["저녁 식사 후에", "확실히"] },
    { vBase: "taste", s: "The lemon", p: "부정", c: "sweet", kor: { 현재:"단맛이 나지 않는다.", 과거:"단맛이 나지 않았다.", 미래:"단맛이 나지 않을 것이다." }, s_kor: "레몬이", b_en: "to anyone", b_kor: "누구에게도", c_en: ["to anyone", "at all"], c_kor: ["누구에게도", "전혀"] },
    { vBase: "taste", s: "The water", p: "의문", c: "clean", kor: { 현재:"깨끗한 맛이 나니?", 과거:"깨끗한 맛이 났니?", 미래:"깨끗한 맛이 날까?" }, s_kor: "물이", b_en: "from the spring", b_kor: "샘물에서 떠서", c_en: ["from the spring", ADV.TODAY_EN], c_kor: ["샘물에서 떠서", ADV.TODAY_KR] },
    { vBase: "taste", s: "The stew", p: "긍정", c: "rich", kor: { 현재:"풍부한 맛이 난다.", 과거:"풍부한 맛이 났다.", 미래:"풍부한 맛이 날 것이다." }, s_kor: "스튜가", b_en: "in winter", b_kor: "겨울에", c_en: ["in winter", "most of the time"], c_kor: ["겨울에", "대부분"] },
    { vBase: "taste", s: "The pie", p: "부정", c: "burnt", kor: { 현재:"탄 맛이 나지 않는다.", 과거:"탄 맛이 나지 않았다.", 미래:"탄 맛이 나지 않을 것이다." }, s_kor: "파이가", b_en: "from the oven", b_kor: "오븐에서 꺼내도", c_en: ["from the oven", "at all"], c_kor: ["오븐에서 꺼내도", "전혀"] },
    { vBase: "taste", s: "The drink", p: "의문", c: "sour", kor: { 현재:"신맛이 나니?", 과거:"신맛이 났니?", 미래:"신맛이 날까?" }, s_kor: "음료수가", b_en: "with lemon", b_kor: "레몬을 넣으니", c_en: ["with lemon", ADV.NOW_EN], c_kor: ["레몬을 넣으니", ADV.NOW_KR1] }
  ];
        return processRawRows2(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    get: {
      standard: (() => {
        const subjPlurals = ["The children", "The players", "The days"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "get", s: "The weather", p: "긍정", c: "cold", kor: { 현재:"추워진다.", 과거:"추워졌다.", 미래:"추워질 것이다." }, s_kor: "날씨가", b_en: "in winter", b_kor: "겨울에", c_en: ["in winter", "every year"], c_kor: ["겨울에", "매년"] },
    { vBase: "get", s: "The children", p: "부정", c: "bored", kor: { 현재:"지루해하지 않는다.", 과거:"지루해하지 않았다.", 미래:"지루해하지 않을 것이다." }, s_kor: "아이들이", b_en: "in class", b_kor: "수업 중에", c_en: ["in class", "most of the time"], c_kor: ["수업 중에", "대부분의 경우에"] },
    { vBase: "get", s: "You", p: "의문", c: "tired", kor: { 현재:"피곤해지니?", 과거:"피곤해졌니?", 미래:"피곤해질까?" }, s_kor: "너는", b_en: "after work", b_kor: "퇴근 후에", c_en: ["after work", "every day"], c_kor: ["퇴근 후에", "매일"] },
    { vBase: "get", s: "The room", p: "긍정", c: "dark", kor: { 현재:"어두워진다.", 과거:"어두워졌다.", 미래:"어두워질 것이다." }, s_kor: "방이", b_en: "at night", b_kor: "밤에", c_en: ["at night", "in no time"], c_kor: ["밤에", "순식간에"] },
    { vBase: "get", s: "The situation", p: "부정", c: "better", kor: { 현재:"나아지지 않는다.", 과거:"나아지지 않았다.", 미래:"나아지지 않을 것이다." }, s_kor: "상황이", b_en: ADV.RN_EN, b_kor: ADV.RN_KR3, c_en: [ADV.RN_EN, "at all"], c_kor: [ADV.RN_KR3, "전혀"] },
    { vBase: "get", s: "The game", p: "의문", c: "exciting", kor: { 현재:"흥미진진해지니?", 과거:"흥미진진해졌니?", 미래:"흥미진진해질까?" }, s_kor: "게임이", b_en: "in the second half", b_kor: "후반전에", c_en: ["in the second half", "most of the time"], c_kor: ["후반전에", "대부분"] },
    { vBase: "get", s: "I", p: "긍정", c: "hungry", kor: { 현재:"배가 고파진다.", 과거:"배가 고파졌다.", 미래:"배가 고파질 것이다." }, s_kor: "나는", b_en: "before lunch", b_kor: "점심시간 전에", c_en: ["before lunch", "all the time"], c_kor: ["점심시간 전에", "항상"] },
    { vBase: "get", s: "The test", p: "부정", c: "easy", kor: { 현재:"쉬워지지 않는다.", 과거:"쉬워지지 않았다.", 미래:"쉬워지지 않을 것이다." }, s_kor: "시험이", b_en: "for the students", b_kor: "학생들에게", c_en: ["for the students", "all the time"], c_kor: ["학생들에게", "항상"] },
    { vBase: "get", s: "The crowd", p: "의문", c: "loud", kor: { 현재:"시끄러워지니?", 과거:"시끄러워졌니?", 미래:"시끄러워질까?" }, s_kor: "군중이", b_en: "at the concert", b_kor: "콘서트에서", c_en: ["at the concert", ADV.NOW_EN], c_kor: ["콘서트에서", ADV.NOW_KR1] },
    { vBase: "get", s: "The players", p: "긍정", c: "ready", kor: { 현재:"준비가 된다.", 과거:"준비가 되었다.", 미래:"준비가 될 것이다." }, s_kor: "선수들이", b_en: "in the locker room", b_kor: "라커룸에서", c_en: ["in the locker room", "in the end"], c_kor: ["라커룸에서", "결국에"] },
    { vBase: "get", s: "The problem", p: "부정", c: "worse", kor: { 현재:"악화되지 않는다.", 과거:"악화되지 않았다.", 미래:"악화되지 않을 것이다." }, s_kor: "문제가", b_en: "with help", b_kor: "도움 덕분에", c_en: ["with help", "at all"], c_kor: ["도움 덕분에", "전혀"] },
    { vBase: "get", s: "The days", p: "의문", c: "short", kor: { 현재:"짧아지니?", 과거:"짧아졌니?", 미래:"짧아질까?" }, s_kor: "낮이", b_en: "in winter", b_kor: "겨울에", c_en: ["in winter", "every year"], c_kor: ["겨울에", "매년"] },
    { vBase: "get", s: "The tea", p: "긍정", c: "cold", kor: { 현재:"식어버린다.", 과거:"식어버렸다.", 미래:"식어버릴 것이다." }, s_kor: "차가", b_en: "on the table", b_kor: "테이블 위에서", c_en: ["on the table", "in a short time"], c_kor: ["테이블 위에서", "단숨에"] },
    { vBase: "get", s: "The movie", p: "부정", c: "interesting", kor: { 현재:"재미있어지지 않는다.", 과거:"재미있어지지 않았다.", 미래:"재미있어지지 않을 것이다." }, s_kor: "영화가", b_en: "in the middle", b_kor: "중반부에도", c_en: ["in the middle", "at all"], c_kor: ["중반부에도", "전혀"] },
    { vBase: "get", s: "He", p: "의문", c: "angry", kor: { 현재:"화를 내니?", 과거:"화를 냈니?", 미래:"화를 낼까?" }, s_kor: "그가", b_en: "about the mistake", b_kor: "그 실수에 대해", c_en: ["about the mistake", ADV.TODAY_EN], c_kor: ["그 실수에 대해", ADV.TODAY_KR] },
    { vBase: "get", s: "The water", p: "긍정", c: "warm", kor: { 현재:"따뜻해진다.", 과거:"따뜻해졌다.", 미래:"따뜻해질 것이다." }, s_kor: "물이", b_en: "in the sun", b_kor: "햇볕 아래에서", c_en: ["in the sun", "for sure"], c_kor: ["햇볕 아래에서", "확실히"] },
    { vBase: "get", s: "The job", p: "부정", c: "hard", kor: { 현재:"어려워지지 않는다.", 과거:"어려워지지 않았다.", 미래:"어려워지지 않을 것이다." }, s_kor: "그 일이", b_en: "with practice", b_kor: "연습하면", c_en: ["with practice", "for any reason"], c_kor: ["연습하면", "어떤 이유에서든"] },
    { vBase: "get", s: "The dog", p: "의문", c: "dirty", kor: { 현재:"더러워지니?", 과거:"더러워졌니?", 미래:"더러워질까?" }, s_kor: "개가", b_en: "in the park", b_kor: "공원에서", c_en: ["in the park", "all the time"], c_kor: ["공원에서", "항상"] },
    { vBase: "get", s: "The soup", p: "긍정", c: "thick", kor: { 현재:"걸쭉해진다.", 과거:"걸쭉해졌다.", 미래:"걸쭉해질 것이다." }, s_kor: "수프가", b_en: "on the stove", b_kor: "가스레인지 위에서", c_en: ["on the stove", "in the end"], c_kor: ["가스레인지 위에서", "결국에"] },
    { vBase: "get", s: "The clothes", p: "부정", c: "dry", kor: { 현재:"마르지 않는다.", 과거:"마르지 않았다.", 미래:"마르지 않을 것이다." }, s_kor: "옷이", b_en: "in this weather", b_kor: "이 날씨에는", c_en: ["in this weather", "at all"], c_kor: ["이 날씨에는", "전혀"] },
    { vBase: "get", s: "The house", p: "의문", c: "messy", kor: { 현재:"지저분해지니?", 과거:"지저분해졌니?", 미래:"지저분해질까?" }, s_kor: "집이", b_en: "with the kids", b_kor: "아이들이 있으면", c_en: ["with the kids", "most of the time"], c_kor: ["아이들이 있으면", "대부분"] },
    { vBase: "get", s: "She", p: "긍정", c: "nervous", kor: { 현재:"긴장한다.", 과거:"긴장했다.", 미래:"긴장할 것이다." }, s_kor: "그녀는", b_en: "before the test", b_kor: "시험 전에", c_en: ["before the test", "all the time"], c_kor: ["시험 전에", "항상"] },
    { vBase: "get", s: "The phone", p: "부정", c: "hot", kor: { 현재:"뜨거워지지 않는다.", 과거:"뜨거워지지 않았다.", 미래:"뜨거워지지 않을 것이다." }, s_kor: "전화기가", b_en: "during the call", b_kor: "통화 중에", c_en: ["during the call", "most of the time"], c_kor: ["통화 중에", "대부분의 경우에"] },
    { vBase: "get", s: "The sky", p: "의문", c: "clear", kor: { 현재:"맑아지니?", 과거:"맑아졌니?", 미래:"맑아질까?" }, s_kor: "하늘이", b_en: "after the rain", b_kor: "비 온 뒤에", c_en: ["after the rain", ADV.TODAY_EN], c_kor: ["비 온 뒤에", ADV.TODAY_KR] },
    { vBase: "get", s: "The story", p: "긍정", c: "complicated", kor: { 현재:"복잡해진다.", 과거:"복잡해졌다.", 미래:"복잡해질 것이다." }, s_kor: "이야기가", b_en: "at the end", b_kor: "결말에 가서", c_en: ["at the end", "for sure"], c_kor: ["결말에 가서", "확실히"] },
    { vBase: "get", s: "The plan", p: "부정", c: "confusing", kor: { 현재:"혼란스러워지지 않는다.", 과거:"혼란스러워지지 않았다.", 미래:"혼란스러워지지 않을 것이다." }, s_kor: "계획이", b_en: "with the guide", b_kor: "가이드와 함께라면", c_en: ["with the guide", "at all"], c_kor: ["가이드와 함께라면", "전혀"] },
    { vBase: "get", s: "The price", p: "의문", c: "high", kor: { 현재:"높아지니?", 과거:"높아졌니?", 미래:"높아질까?" }, s_kor: "가격이", b_en: "in summer", b_kor: "여름에", c_en: ["in summer", "every year"], c_kor: ["여름에", "매년"] }
  ];
        return processRawRows2(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    turn: {
      standard: (() => {
        const subjPlurals = ["The leaves", "The apples"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "turn", s: "The leaves", p: "긍정", c: "red", kor: { 현재:"붉게 변한다.", 과거:"붉게 변했다.", 미래:"붉게 변할 것이다." }, s_kor: "나뭇잎들이", b_en: "in fall", b_kor: "가을에", c_en: ["in fall", "in the end"], c_kor: ["가을에", "결국에"] },
    { vBase: "turn", s: "His face", p: "부정", c: "pale", kor: { 현재:"창백해지지 않는다.", 과거:"창백해지지 않았다.", 미래:"창백해지지 않을 것이다." }, s_kor: "그의 얼굴이", b_en: "in the dark", b_kor: "어둠 속에서", c_en: ["in the dark", "at all"], c_kor: ["어둠 속에서", "전혀"] },
    { vBase: "turn", s: "The sky", p: "의문", c: "dark", kor: { 현재:"어두워지니?", 과거:"어두워졌니?", 미래:"어두워질까?" }, s_kor: "하늘이", b_en: "at night", b_kor: "밤에", c_en: ["at night", "all of a sudden"], c_kor: ["밤에", "갑자기"] },
    { vBase: "turn", s: "The milk", p: "긍정", c: "sour", kor: { 현재:"상해버린다.", 과거:"상해버렸다.", 미래:"상해버릴 것이다." }, s_kor: "우유가", b_en: "in the sun", b_kor: "햇볕 아래에서", c_en: ["in the sun", "in no time"], c_kor: ["햇볕 아래에서", "순식간에"] },
    { vBase: "turn", s: "The traffic light", p: "부정", c: "green", kor: { 현재:"초록색으로 바뀌지 않는다.", 과거:"초록색으로 바뀌지 않았다.", 미래:"초록색으로 바뀌지 않을 것이다." }, s_kor: "신호등이", b_en: "for a long time", b_kor: "오랫동안", c_en: ["for a long time", "at all"], c_kor: ["오랫동안", "전혀"] },
    { vBase: "turn", s: "The weather", p: "의문", c: "cold", kor: { 현재:"추워지니?", 과거:"추워졌니?", 미래:"추워질까?" }, s_kor: "날씨가", b_en: "in November", b_kor: "11월에", c_en: ["in November", "every year"], c_kor: ["11월에", "매년"] },
    { vBase: "turn", s: "The conversation", p: "긍정", c: "serious", kor: { 현재:"심각해진다.", 과거:"심각해졌다.", 미래:"심각해질 것이다." }, s_kor: "대화가", b_en: "after dinner", b_kor: "저녁 식사 후에", c_en: ["after dinner", "for sure"], c_kor: ["저녁 식사 후에", "확실히"] },
    { vBase: "turn", s: "The water", p: "부정", c: "brown", kor: { 현재:"갈색으로 변하지 않는다.", 과거:"갈색으로 변하지 않았다.", 미래:"갈색으로 변하지 않을 것이다." }, s_kor: "물이", b_en: "with the filter", b_kor: "필터를 쓰면", c_en: ["with the filter", "all the time"], c_kor: ["필터를 쓰면", "항상"] },
    { vBase: "turn", s: "The situation", p: "의문", c: "bad", kor: { 현재:"나빠지니?", 과거:"나빠졌니?", 미래:"나빠질까?" }, s_kor: "상황이", b_en: "without help", b_kor: "도움이 없으면", c_en: ["without help", "all of a sudden"], c_kor: ["도움이 없으면", "갑자기"] },
    { vBase: "turn", s: "The project", p: "긍정", c: "impossible", kor: { 현재:"불가능해진다.", 과거:"불가능해졌다.", 미래:"불가능해질 것이다." }, s_kor: "프로젝트가", b_en: "without money", b_kor: "돈이 없으면", c_en: ["without money", "in the end"], c_kor: ["돈이 없으면", "결국에"] },
    { vBase: "turn", s: "The apples", p: "부정", c: "brown", kor: { 현재:"갈색으로 변하지 않는다.", 과거:"갈색으로 변하지 않았다.", 미래:"갈색으로 변하지 않을 것이다." }, s_kor: "사과들이", b_en: "in the fridge", b_kor: "냉장고에서는", c_en: ["in the fridge", "at all"], c_kor: ["냉장고에서는", "전혀"] },
    { vBase: "turn", s: "His hair", p: "의문", c: "gray", kor: { 현재:"희끗희끗해지니?", 과거:"희끗희끗해졌니?", 미래:"희끗희끗해질까?" }, s_kor: "그의 머리가", b_en: "with age", b_kor: "나이가 들면서", c_en: ["with age", "in a natural way"], c_kor: ["나이가 들면서", "자연스럽게"] },
    { vBase: "turn", s: "The dream", p: "긍정", c: "real", kor: { 현재:"현실이 된다.", 과거:"현실이 되었다.", 미래:"현실이 될 것이다." }, s_kor: "꿈이", b_en: "with hard work", b_kor: "열심히 노력하면", c_en: ["with hard work", "in the end"], c_kor: ["열심히 노력하면", "결국에"] },
    { vBase: "turn", s: "The joke", p: "부정", c: "funny", kor: { 현재:"재미있어지지 않는다.", 과거:"재미있어지지 않았다.", 미래:"재미있어지지 않을 것이다." }, s_kor: "농담이", b_en: "to everyone", b_kor: "모두에게", c_en: ["to everyone", "at all"], c_kor: ["모두에게", "전혀"] },
    { vBase: "turn", s: "The crowd", p: "의문", c: "violent", kor: { 현재:"폭력적으로 변하니?", 과거:"폭력적으로 변했니?", 미래:"폭력적으로 변할까?" }, s_kor: "군중이", b_en: "after the match", b_kor: "경기 후에", c_en: ["after the match", "suddenly"], c_kor: ["경기 후에", "갑자기"] },
    { vBase: "turn", s: "The weather", p: "긍정", c: "warm", kor: { 현재:"따뜻해진다.", 과거:"따뜻해졌다.", 미래:"따뜻해질 것이다." }, s_kor: "날씨가", b_en: "in spring", b_kor: "봄에", c_en: ["in spring", "every year"], c_kor: ["봄에", "매년"] },
    { vBase: "turn", s: "The metal", p: "부정", c: "rusty", kor: { 현재:"녹슬지 않는다.", 과거:"녹슬지 않았다.", 미래:"녹슬지 않을 것이다." }, s_kor: "금속이", b_en: "with the coating", b_kor: "코팅을 하면", c_en: ["with the coating", "for any reason"], c_kor: ["코팅을 하면", "어떤 이유에서든"] },
    { vBase: "turn", s: "The debate", p: "의문", c: "angry", kor: { 현재:"격렬해지니?", 과거:"격렬해졌니?", 미래:"격렬해질까?" }, s_kor: "토론이", b_en: "at the end", b_kor: "마지막에", c_en: ["at the end", "most of the time"], c_kor: ["마지막에", "보통"] },
    { vBase: "turn", s: "The paper", p: "긍정", c: "yellow", kor: { 현재:"누렇게 변한다.", 과거:"누렇게 변했다.", 미래:"누렇게 변할 것이다." }, s_kor: "종이가", b_en: "in the sun", b_kor: "햇볕에서", c_en: ["in the sun", "over time"], c_kor: ["햇볕에서", "시간이 지나며"] },
    { vBase: "turn", s: "The food", p: "부정", c: "bad", kor: { 현재:"상하지 않는다.", 과거:"상하지 않았다.", 미래:"상하지 않을 것이다." }, s_kor: "음식이", b_en: "in the freezer", b_kor: "냉동실에서는", c_en: ["in the freezer", "at all"], c_kor: ["냉동실에서는", "전혀"] },
    { vBase: "turn", s: "The story", p: "의문", c: "interesting", kor: { 현재:"흥미로워지니?", 과거:"흥미로워졌니?", 미래:"흥미로워질까?" }, s_kor: "이야기가", b_en: "in chapter two", b_kor: "2장에서", c_en: ["in chapter two", "for sure"], c_kor: ["2장에서", "확실히"] },
    { vBase: "turn", s: "The lake", p: "긍정", c: "solid", kor: { 현재:"단단하게 얼어붙는다.", 과거:"단단하게 얼어붙었다.", 미래:"단단하게 얼어붙을 것이다." }, s_kor: "호수가", b_en: "in winter", b_kor: "겨울에", c_en: ["in winter", "every year"], c_kor: ["겨울에", "매년"] },
    { vBase: "turn", s: "The mood", p: "부정", c: "happy", kor: { 현재:"행복해지지 않는다.", 과거:"행복해지지 않았다.", 미래:"행복해지지 않을 것이다." }, s_kor: "분위기가", b_en: "with that music", b_kor: "그 음악으로는", c_en: ["with that music", "at all"], c_kor: ["그 음악으로는", "전혀"] },
    { vBase: "turn", s: "The leaves", p: "의문", c: "brown", kor: { 현재:"갈색으로 변하니?", 과거:"갈색으로 변했니?", 미래:"갈색으로 변할까?" }, s_kor: "나뭇잎들이", b_en: "in late fall", b_kor: "늦가을에", c_en: ["in late fall", "in a natural way"], c_kor: ["늦가을에", "자연스럽게"] },
    { vBase: "turn", s: "The sky", p: "긍정", c: "blue", kor: { 현재:"푸르게 변한다.", 과거:"푸르게 변했다.", 미래:"푸르게 변할 것이다." }, s_kor: "하늘이", b_en: "after the storm", b_kor: "폭풍우 후에", c_en: ["after the storm", "all of a sudden"], c_kor: ["폭풍우 후에", "갑자기"] },
    { vBase: "turn", s: "The problem", p: "부정", c: "easy", kor: { 현재:"쉬워지지 않는다.", 과거:"쉬워지지 않았다.", 미래:"쉬워지지 않을 것이다." }, s_kor: "문제가", b_en: "with time", b_kor: "시간이 지나도", c_en: ["with time", "at all"], c_kor: ["시간이 지나도", "전혀"] },
    { vBase: "turn", s: "The conversation", p: "의문", c: "awkward", kor: { 현재:"어색해지니?", 과거:"어색해졌니?", 미래:"어색해질까?" }, s_kor: "대화가", b_en: "without her", b_kor: "그녀가 없으면", c_en: ["without her", ADV.NOW_EN], c_kor: ["그녀가 없으면", ADV.NOW_KR1] }
  ];
        return processRawRows2(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    remain: {
      standard: (() => {
        const subjPlurals = ["The seats", "The doors", "The problems"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "remain", s: "The truth", p: "긍정", c: "hidden", kor: { 현재:"숨겨진 상태로 남는다.", 과거:"숨겨진 상태로 남았다.", 미래:"숨겨진 상태로 남을 것이다." }, s_kor: "진실이", b_en: "in the book", b_kor: "책 속에", c_en: ["in the book", ADV.UN_EN], c_kor: ["책 속에", ADV.UN_KR] },
    { vBase: "remain", s: "The building", p: "부정", c: "safe", kor: { 현재:"안전하게 남아있지 않다.", 과거:"안전하게 남아있지 않았다.", 미래:"안전하게 남아있지 않을 것이다." }, s_kor: "건물이", b_en: "after the storm", b_kor: "폭풍우 후에", c_en: ["after the storm", "most of the time"], c_kor: ["폭풍우 후에", "대부분의 경우에"] },
    { vBase: "remain", s: "The seats", p: "의문", c: "empty", kor: { 현재:"비어 있니?", 과거:"비어 있었니?", 미래:"비어 있을까?" }, s_kor: "좌석들이", b_en: "in the front", b_kor: "앞쪽에", c_en: ["in the front", ADV.TODAY_EN], c_kor: ["앞쪽에", ADV.TODAY_KR] },
    { vBase: "remain", s: "The weather", p: "긍정", c: "cold", kor: { 현재:"추운 상태를 유지한다.", 과거:"추운 상태를 유지했다.", 미래:"추운 상태를 유지할 것이다." }, s_kor: "날씨가", b_en: "in the north", b_kor: "북부 지방에서는", c_en: ["in the north", "all the time"], c_kor: ["북부 지방에서는", "내내"] },
    { vBase: "remain", s: "The problem", p: "부정", c: "unsolved", kor: { 현재:"미해결 상태로 남지 않는다.", 과거:"미해결 상태로 남지 않았다.", 미래:"미해결 상태로 남지 않을 것이다." }, s_kor: "문제가", b_en: "with our help", b_kor: "우리의 도움으로", c_en: ["with our help", "at all"], c_kor: ["우리의 도움으로", "전혀"] },
    { vBase: "remain", s: "The door", p: "의문", c: "open", kor: { 현재:"열려 있니?", 과거:"열려 있었니?", 미래:"열려 있을까?" }, s_kor: "문이", b_en: "at night", b_kor: "밤에", c_en: ["at night", "every day"], c_kor: ["밤에", "매일"] },
    { vBase: "remain", s: "The mystery", p: "긍정", c: "unsolved", kor: { 현재:"풀리지 않은 채 남는다.", 과거:"풀리지 않은 채 남았다.", 미래:"풀리지 않은 채 남을 것이다." }, s_kor: "미스터리가", b_en: "for years", b_kor: "수년 동안", c_en: ["for years", ADV.UN_EN], c_kor: ["수년 동안", ADV.UN_KR] },
    { vBase: "remain", s: "The food", p: "부정", c: "fresh", kor: { 현재:"신선하게 유지되지 않는다.", 과거:"신선하게 유지되지 않았다.", 미래:"신선하게 유지되지 않을 것이다." }, s_kor: "음식이", b_en: "on the table", b_kor: "테이블 위에서는", c_en: ["on the table", "all the time"], c_kor: ["테이블 위에서는", "항상"] },
    { vBase: "remain", s: "The rules", p: "의문", c: "strict", kor: { 현재:"엄격하게 유지되니?", 과거:"엄격하게 유지되었니?", 미래:"엄격하게 유지될까?" }, s_kor: "규칙이", b_en: "in this school", b_kor: "이 학교에서", c_en: ["in this school", ADV.TODAY_EN], c_kor: ["이 학교에서", ADV.TODAY_KR] },
    { vBase: "remain", s: "The shop", p: "긍정", c: "closed", kor: { 현재:"닫힌 상태로 남는다.", 과거:"닫힌 상태로 남았다.", 미래:"닫힌 상태로 남을 것이다." }, s_kor: "가게가", b_en: "on Sundays", b_kor: "일요일에는", c_en: ["on Sundays", "every week"], c_kor: ["일요일에는", "매주"] },
    { vBase: "remain", s: "The machine", p: "부정", c: "broken", kor: { 현재:"고장 난 상태로 남지 않는다.", 과거:"고장 난 상태로 남지 않았다.", 미래:"고장 난 상태로 남지 않을 것이다." }, s_kor: "기계가", b_en: "after repair", b_kor: "수리 후에", c_en: ["after repair", "at all"], c_kor: ["수리 후에", "전혀"] },
    { vBase: "remain", s: "The memory", p: "의문", c: "clear", kor: { 현재:"선명하게 남아있니?", 과거:"선명하게 남아있었니?", 미래:"선명하게 남아있을까?" }, s_kor: "기억이", b_en: "in your mind", b_kor: "네 마음속에", c_en: ["in your mind", "for sure"], c_kor: ["네 마음속에", "확실히"] },
    { vBase: "remain", s: "The task", p: "긍정", c: "unfinished", kor: { 현재:"미완성으로 남는다.", 과거:"미완성으로 남았다.", 미래:"미완성으로 남을 것이다." }, s_kor: "그 일이", b_en: "on the desk", b_kor: "책상 위에", c_en: ["on the desk", ADV.UN_EN], c_kor: ["책상 위에", ADV.UN_KR] },
    { vBase: "remain", s: "The room", p: "부정", c: "dirty", kor: { 현재:"더럽게 남아있지 않는다.", 과거:"더럽게 남아있지 않았다.", 미래:"더럽게 남아있지 않을 것이다." }, s_kor: "방이", b_en: "after cleaning", b_kor: "청소 후에", c_en: ["after cleaning", "for any reason"], c_kor: ["청소 후에", "어떤 이유에서든"] },
    { vBase: "remain", s: "The questions", p: "의문", c: "unanswered", kor: { 현재:"대답 없는 상태로 남아있니?", 과거:"대답 없는 상태로 남아있었니?", 미래:"대답 없는 상태로 남아있을까?" }, s_kor: "질문들이", b_en: "on the paper", b_kor: "종이 위에", c_en: ["on the paper", ADV.TODAY_EN], c_kor: ["종이 위에", ADV.TODAY_KR] },
    { vBase: "remain", s: "The secret", p: "긍정", c: "safe", kor: { 현재:"안전하게 남는다.", 과거:"안전하게 남았다.", 미래:"안전하게 남을 것이다." }, s_kor: "비밀이", b_en: "with me", b_kor: "나와 함께", c_en: ["with me", "all the time"], c_kor: ["나와 함께", "내내"] },
    { vBase: "remain", s: "The price", p: "부정", c: "high", kor: { 현재:"높게 유지되지 않는다.", 과거:"높게 유지되지 않았다.", 미래:"높게 유지되지 않을 것이다." }, s_kor: "가격이", b_en: "in winter", b_kor: "겨울에는", c_en: ["in winter", "at all"], c_kor: ["겨울에는", "전혀"] },
    { vBase: "remain", s: "The result", p: "의문", c: "unknown", kor: { 현재:"알려지지 않은 상태로 남아있니?", 과거:"알려지지 않은 상태로 남아있었니?", 미래:"알려지지 않은 상태로 남아있을까?" }, s_kor: "결과가", b_en: "until the end", b_kor: "마지막까지", c_en: ["until the end", "for sure"], c_kor: ["마지막까지", "확실히"] },
    { vBase: "remain", s: "The forest", p: "긍정", c: "quiet", kor: { 현재:"조용한 상태로 남는다.", 과거:"조용한 상태로 남았다.", 미래:"조용한 상태로 남을 것이다." }, s_kor: "숲이", b_en: "at night", b_kor: "밤에", c_en: ["at night", "all the time"], c_kor: ["밤에", "항상"] },
    { vBase: "remain", s: "The child", p: "부정", c: "awake", kor: { 현재:"깨어 있는 상태로 남지 않는다.", 과거:"깨어 있는 상태로 남지 않았다.", 미래:"깨어 있는 상태로 남지 않을 것이다." }, s_kor: "아이가", b_en: "after midnight", b_kor: "자정 이후에", c_en: ["after midnight", "most of the time"], c_kor: ["자정 이후에", "대부분의 경우에"] },
    { vBase: "remain", s: "The house", p: "의문", c: "empty", kor: { 현재:"비어 있니?", 과거:"비어 있었니?", 미래:"비어 있을까?" }, s_kor: "집이", b_en: "in winter", b_kor: "겨울에", c_en: ["in winter", "every year"], c_kor: ["겨울에", "매년"] },
    { vBase: "remain", s: "The box", p: "긍정", c: "unopened", kor: { 현재:"열리지 않은 채 남는다.", 과거:"열리지 않은 채 남았다.", 미래:"열리지 않은 채 남을 것이다." }, s_kor: "상자가", b_en: "in the corner", b_kor: "구석에", c_en: ["in the corner", ADV.UN_EN], c_kor: ["구석에", ADV.UN_KR] },
    { vBase: "remain", s: "The bridge", p: "부정", c: "closed", kor: { 현재:"닫힌 채로 남아있지 않는다.", 과거:"닫힌 채로 남아있지 않았다.", 미래:"닫힌 채로 남아있지 않을 것이다." }, s_kor: "다리가", b_en: "after the repair", b_kor: "수리 후에", c_en: ["after the repair", "at all"], c_kor: ["수리 후에", "전혀"] },
    { vBase: "remain", s: "The books", p: "의문", c: "unread", kor: { 현재:"읽히지 않은 채 남아있니?", 과거:"읽히지 않은 채 남아있었니?", 미래:"읽히지 않은 채 남아있을까?" }, s_kor: "책들이", b_en: "on the shelf", b_kor: "선반 위에", c_en: ["on the shelf", ADV.TODAY_EN], c_kor: ["선반 위에", ADV.TODAY_KR] },
    { vBase: "remain", s: "The village", p: "긍정", c: "peaceful", kor: { 현재:"평화롭게 남아있다.", 과거:"평화롭게 남아있었다.", 미래:"평화롭게 남아있을 것이다." }, s_kor: "마 마을이", b_en: "in the valley", b_kor: "계곡에서", c_en: ["in the valley", "most of the time"], c_kor: ["계곡에서", "대부분"] },
    { vBase: "remain", s: "The coffee", p: "부정", c: "hot", kor: { 현재:"뜨겁게 유지되지 않는다.", 과거:"뜨겁게 유지되지 않았다.", 미래:"뜨겁게 유지되지 않을 것이다." }, s_kor: "커피가", b_en: "in the cup", b_kor: "컵 안에서는", c_en: ["in the cup", "all the time"], c_kor: ["컵 안에서는", "항상"] },
    { vBase: "remain", s: "The letters", p: "의문", c: "unsigned", kor: { 현재:"서명되지 않은 채 남아있니?", 과거:"서명되지 않은 채 남아있었니?", 미래:"서명되지 않은 채 남아있을까?" }, s_kor: "편지들이", b_en: "on the desk", b_kor: "책상 위에", c_en: ["on the desk", ADV.NOW_EN], c_kor: ["책상 위에", ADV.NOW_KR1] }
  ];
        return processRawRows2(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    stay: {
      standard: (() => {
        const subjPlurals = ["The children", "The stores", "The animals"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "stay", s: "The baby", p: "긍정", c: "awake", kor: { 현재:"깨어 있다.", 과거:"깨어 있었다.", 미래:"깨어 있을 것이다." }, s_kor: "아기가", b_en: "at night", b_kor: "밤에", c_en: ["at night", "all the time"], c_kor: ["밤에", "내내"] },
    { vBase: "stay", s: "The room", p: "부정", c: "warm", kor: { 현재:"따뜻하게 유지되지 않는다.", 과거:"따뜻하게 유지되지 않았다.", 미래:"따뜻하게 유지되지 않을 것이다." }, s_kor: "방이", b_en: "in winter", b_kor: "겨울에", c_en: ["in winter", "without a heater"], c_kor: ["겨울에", "히터 없이"] },
    { vBase: "stay", s: "You", p: "의문", c: "healthy", kor: { 현재:"건강을 유지하니?", 과거:"건강을 유지했니?", 미래:"건강을 유지할까?" }, s_kor: "너는", b_en: ADV.TD_EN, b_kor: ADV.TD_KR, c_en: [ADV.TD_EN, "in a natural way"], c_kor: [ADV.TD_KR, "자연스럽게"] },
    { vBase: "stay", s: "The store", p: "긍정", c: "open", kor: { 현재:"열려 있다.", 과거:"열려 있었다.", 미래:"열려 있을 것이다." }, s_kor: "가게가", b_en: "until midnight", b_kor: "자정까지", c_en: ["until midnight", "every day"], c_kor: ["자정까지", "매일"] },
    { vBase: "stay", s: "The water", p: "부정", c: "clean", kor: { 현재:"깨끗하게 유지되지 않는다.", 과거:"깨끗하게 유지되지 않았다.", 미래:"깨끗하게 유지되지 않을 것이다." }, s_kor: "물이", b_en: "in the pool", b_kor: "수영장에서는", c_en: ["in the pool", "for any reason"], c_kor: ["수영장에서는", "어떤 이유에서든"] },
    { vBase: "stay", s: "The children", p: "의문", c: "quiet", kor: { 현재:"조용히 있니?", 과거:"조용히 있었니?", 미래:"조용히 있을까?" }, s_kor: "아이들이", b_en: "in the library", b_kor: "도서관에서", c_en: ["in the library", ADV.TODAY_EN], c_kor: ["도서관에서", ADV.TODAY_KR] },
    { vBase: "stay", s: "The weather", p: "긍정", c: "cool", kor: { 현재:"시원하게 유지된다.", 과거:"시원하게 유지되었다.", 미래:"시원하게 유지될 것이다." }, s_kor: "날씨가", b_en: "in the morning", b_kor: "아침에는", c_en: ["in the morning", "most of the time"], c_kor: ["아침에는", "대부분"] },
    { vBase: "stay", s: "The food", p: "부정", c: "fresh", kor: { 현재:"신선하게 유지되지 않는다.", 과거:"신선하게 유지되지 않았다.", 미래:"신선하게 유지되지 않을 것이다." }, s_kor: "음식이", b_en: "in the car", b_kor: "차 안에서는", c_en: ["in the car", "at all"], c_kor: ["차 안에서는", "전혀"] },
    { vBase: "stay", s: "The dog", p: "의문", c: "calm", kor: { 현재:"얌전히 있니?", 과거:"얌전히 있었니?", 미래:"얌전히 있을까?" }, s_kor: "개가", b_en: "in the house", b_kor: "집 안에서", c_en: ["in the house", ADV.NOW_EN], c_kor: ["집 안에서", ADV.NOW_KR1] },
    { vBase: "stay", s: "She", p: "긍정", c: "focused", kor: { 현재:"집중을 유지한다.", 과거:"집중을 유지했다.", 미래:"집중을 유지할 것이다." }, s_kor: "그녀는", b_en: "during the test", b_kor: "시험 동안", c_en: ["during the test", "all the time"], c_kor: ["시험 동안", "내내"] },
    { vBase: "stay", s: "The milk", p: "부정", c: "good", kor: { 현재:"좋은 상태로 유지되지 않는다.", 과거:"좋은 상태로 유지되지 않았다.", 미래:"좋은 상태로 유지되지 않을 것이다." }, s_kor: "우유가", b_en: "on the table", b_kor: "테이블 위에서는", c_en: ["on the table", "most of the time"], c_kor: ["테이블 위에서는", "대부분의 경우에"] },
    { vBase: "stay", s: "The prices", p: "의문", c: "stable", kor: { 현재:"안정적으로 유지되니?", 과거:"안정적으로 유지되었니?", 미래:"안정적으로 유지될까?" }, s_kor: "물가가", b_en: ADV.TY_EN, b_kor: ADV.TY_KR, c_en: [ADV.TY_EN, "in the market"], c_kor: [ADV.TY_KR, "시장에서"] },
    { vBase: "stay", s: "He", p: "긍정", c: "positive", kor: { 현재:"긍정적인 상태를 유지한다.", 과거:"긍정적인 상태를 유지했다.", 미래:"긍정적인 상태를 유지할 것이다." }, s_kor: "그는", b_en: "in hard times", b_kor: "힘든 시기에도", c_en: ["in hard times", "for sure"], c_kor: ["힘든 시기에도", "확실히"] },
    { vBase: "stay", s: "The road", p: "부정", c: "safe", kor: { 현재:"안전하게 유지되지 않는다.", 과거:"안전하게 유지되지 않았다.", 미래:"안전하게 유지되지 않을 것이다." }, s_kor: "도로가", b_en: "in winter", b_kor: "겨울에는", c_en: ["in winter", "at all"], c_kor: ["겨울에는", "전혀"] },
    { vBase: "stay", s: "The door", p: "의문", c: "locked", kor: { 현재:"잠겨 있니?", 과거:"잠겨 있었니?", 미래:"잠겨 있을까?" }, s_kor: "문이", b_en: "at night", b_kor: "밤에", c_en: ["at night", "every day"], c_kor: ["밤에", "매일"] },
    { vBase: "stay", s: "The lake", p: "긍정", c: "frozen", kor: { 현재:"얼어붙어 있다.", 과거:"얼어붙어 있었다.", 미래:"얼어붙어 있을 것이다." }, s_kor: "호수가", b_en: "in January", b_kor: "1월에는", c_en: ["in January", "most of the time"], c_kor: ["1월에는", "대부분"] },
    { vBase: "stay", s: "The secret", p: "부정", c: "hidden", kor: { 현재:"숨겨진 채 유지되지 않는다.", 과거:"숨겨진 채 유지되지 않았다.", 미래:"숨겨진 채 유지되지 않을 것이다." }, s_kor: "비밀이", b_en: "in this town", b_kor: "이 마을에서는", c_en: ["in this town", "all the time"], c_kor: ["이 마을에서는", "항상"] },
    { vBase: "stay", s: "The animals", p: "의문", c: "warm", kor: { 현재:"따뜻하게 지내니?", 과거:"따뜻하게 지냈니?", 미래:"따뜻하게 지낼까?" }, s_kor: "동물들이", b_en: "in the barn", b_kor: "헛간에서", c_en: ["in the barn", "in winter"], c_kor: ["헛간에서", "겨울에"] },
    { vBase: "stay", s: "The air", p: "긍정", c: "dry", kor: { 현재:"건조하게 유지된다.", 과거:"건조하게 유지되었다.", 미래:"건조하게 유지될 것이다." }, s_kor: "공기가", b_en: "in the desert", b_kor: "사막에서는", c_en: ["in the desert", "all the time"], c_kor: ["사막에서는", "내내"] },
    { vBase: "stay", s: "The engine", p: "부정", c: "cool", kor: { 현재:"시원하게 유지되지 않는다.", 과거:"시원하게 유지되지 않았다.", 미래:"시원하게 유지되지 않을 것이다." }, s_kor: "엔진이", b_en: "during the race", b_kor: "경주 중에는", c_en: ["during the race", "at all"], c_kor: ["경주 중에는", "전혀"] },
    { vBase: "stay", s: "The team", p: "의문", c: "strong", kor: { 현재:"강하게 유지되니?", 과거:"강하게 유지되었니?", 미래:"강하게 유지될까?" }, s_kor: "팀이", b_en: ADV.TY_EN, b_kor: ADV.TY_KR, c_en: [ADV.TY_EN, "for sure"], c_kor: [ADV.TY_KR, "확실히"] },
    { vBase: "stay", s: "The building", p: "긍정", c: "empty", kor: { 현재:"비어 있다.", 과거:"비어 있었다.", 미래:"비어 있을 것이다." }, s_kor: "건물이", b_en: "on weekends", b_kor: "주말에는", c_en: ["on weekends", "most of the time"], c_kor: ["주말에는", "대부분"] },
    { vBase: "stay", s: "The flowers", p: "부정", c: "beautiful", kor: { 현재:"아름답게 유지되지 않는다.", 과거:"아름답게 유지되지 않았다.", 미래:"아름답게 유지되지 않을 것이다." }, s_kor: "꽃들이", b_en: "without water", b_kor: "물이 없으면", c_en: ["without water", "for any reason"], c_kor: ["물이 없으면", "어떤 이유에서든"] },
    { vBase: "stay", s: "The market", p: "의문", c: "busy", kor: { 현재:"붐비니?", 과거:"붐볐니?", 미래:"붐빌까?" }, s_kor: "시장이", b_en: "in the morning", b_kor: "아침에", c_en: ["in the morning", "every day"], c_kor: ["아침에", "매일"] },
    { vBase: "stay", s: "The bridge", p: "긍정", c: "strong", kor: { 현재:"튼튼하게 유지된다.", 과거:"튼튼하게 유지되었다.", 미래:"튼튼하게 유지될 것이다." }, s_kor: "다리가", b_en: "in the wind", b_kor: "바람 속에서도", c_en: ["in the wind", "with ease"], c_kor: ["바람 속에서도", "수월하게"] },
    { vBase: "stay", s: "The fire", p: "부정", c: "alive", kor: { 현재:"살아있지(타오르지) 않는다.", 과거:"살아있지(타오르지) 않았다.", 미래:"살아있지(타오르지) 않을 것이다." }, s_kor: "불이", b_en: "in the rain", b_kor: "빗속에서는", c_en: ["in the rain", "at all"], c_kor: ["빗속에서는", "전혀"] },
    { vBase: "stay", s: "The problem", p: "의문", c: "simple", kor: { 현재:"간단하게 유지되니?", 과거:"간단하게 유지되었니?", 미래:"간단하게 유지될까?" }, s_kor: "문제가", b_en: "at this level", b_kor: "이 단계에서는", c_en: ["at this level", ADV.NOW_EN], c_kor: ["이 단계에서는", ADV.NOW_KR1] }
  ];
        return processRawRows2(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
  };
})();