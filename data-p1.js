// WGT 1형식 데이터 — 정제 및 30문항 확장 완료 (수일치 수정 반영)
(function() {
  if (!window.VERB_DATA) window.VERB_DATA = {};
  window.VERB_DATA[1] = {
go: {
      standard: (() => {
        const subjPlurals = ["The students", "The teachers", "They", "The children", "The birds", "We", "Your parents"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "go", s: "I", p: "긍정", kor: { 현재:"간다.", 과거:"갔다.", 미래:"갈 것이다." }, s_kor: "나는", b_en: "to school", b_kor: "학교에", c_en: ["by bus", "in the morning"], c_kor: ["버스를 타고", "아침에"] },
    { vBase: "go", s: "The boy", p: "부정", kor: { 현재:"가지 않는다.", 과거:"가지 않았다.", 미래:"가지 않을 것이다." }, s_kor: "그 소년은", b_en: "home", b_kor: "집으로", c_en: ["alone", "at night"], c_kor: ["혼자서", "밤에"] },
    { vBase: "go", s: "They", p: "의문", kor: { 현재:"가니?", 과거:"갔니?", 미래:"갈까?" }, s_kor: "그들은", b_en: "to the park", b_kor: "공원에", c_en: ["together", "on sunny days"], c_kor: ["함께", "화창한 날에"] },
    { vBase: "go", s: "The students", p: "긍정", kor: { 현재:"간다.", 과거:"갔다.", 미래:"갈 것이다." }, s_kor: "그 학생들은", b_en: "to the library", b_kor: "도서관에", c_en: ["to study", "after school"], c_kor: ["공부하러", "방과 후에"] },
    { vBase: "go", s: "She", p: "부정", kor: { 현재:"가지 않는다.", 과거:"가지 않았다.", 미래:"가지 않을 것이다." }, s_kor: "그녀는", b_en: "to the hospital", b_kor: "병원에", c_en: ["by taxi", "during rush hour"], c_kor: ["택시를 타고", "혼잡한 시간대에"] },
    { vBase: "go", s: "My dad", p: "의문", kor: { 현재:"가시니?", 과거:"가셨니?", 미래:"가실까?" }, s_kor: "나의 아빠는", b_en: "to work", b_kor: "직장에", c_en: ["early", "before traffic builds up"], c_kor: ["일찍", "교통 체증이 시작되기 전에"] },
    { vBase: "go", s: "We", p: "긍정", kor: { 현재:"간다.", 과거:"갔다.", 미래:"갈 것이다." }, s_kor: "우리는", b_en: "to the movies", b_kor: "영화관에", c_en: ["with friends", "on weekends"], c_kor: ["친구들과 함께", "주말마다"] },
    { vBase: "go", s: "The train", p: "부정", kor: { 현재:"가지 않는다.", 과거:"가지 않았다.", 미래:"가지 않을 것이다." }, s_kor: "그 기차는", b_en: "to Busan", b_kor: "부산으로", c_en: ["directly", "without any stops"], c_kor: ["직행으로", "아무런 정차 없이"] },
    { vBase: "go", s: "You", p: "의문", kor: { 현재:"가니?", 과거:"갔니?", 미래:"갈까?" }, s_kor: "너는", b_en: "to bed", b_kor: "자러", c_en: ["late", "every night"], c_kor: ["늦게", "매일 밤"] },
    { vBase: "go", s: "The dog", p: "긍정", kor: { 현재:"나간다.", 과거:"나갔다.", 미래:"나갈 것이다." }, s_kor: "그 개는", b_en: "out", b_kor: "바깥으로", c_en: ["for a walk", "in the morning"], c_kor: ["산책하러", "아침에"] },
    { vBase: "go", s: "I", p: "부정", kor: { 현재:"가지 않는다.", 과거:"가지 않았다.", 미래:"가지 않을 것이다." }, s_kor: "나는", b_en: "to the gym", b_kor: "체육관에", c_en: ["on foot", "in cold weather"], c_kor: ["걸어서", "추운 날씨에"] },
    { vBase: "go", s: "The teachers", p: "의문", kor: { 현재:"들어가시니?", 과거:"들어가셨니?", 미래:"들어가실까?" }, s_kor: "선생님들은", b_en: "into the classroom", b_kor: "교실로", c_en: ["with textbooks", "before the bell rings"], c_kor: ["교과서를 들고", "종이 울리기 전에"] },
    { vBase: "go", s: "My friend", p: "긍정", kor: { 현재:"간다.", 과거:"갔다.", 미래:"갈 것이다." }, s_kor: "내 친구는", b_en: "abroad", b_kor: "해외로", c_en: ["for studying", "through the program"], c_kor: ["유학을 위해", "그 프로그램을 통해"] },
    { vBase: "go", s: "They", p: "부정", kor: { 현재:"가지 않는다.", 과거:"가지 않았다.", 미래:"가지 않을 것이다." }, s_kor: "그들은", b_en: "camping", b_kor: "캠핑을", c_en: ["in winter", "due to the cold"], c_kor: ["겨울에는", "추위 때문에"] },
    { vBase: "go", s: "The bus", p: "의문", kor: { 현재:"가니?", 과거:"갔니?", 미래:"갈까?" }, s_kor: "그 버스는", b_en: "to the airport", b_kor: "공항으로", c_en: ["via the highway", "during the holiday season"], c_kor: ["고속도로를 거쳐", "휴가철 동안"] },
    { vBase: "go", s: "She", p: "긍정", kor: { 현재:"간다.", 과거:"갔다.", 미래:"갈 것이다." }, s_kor: "그녀는", b_en: "shopping", b_kor: "쇼핑하러", c_en: ["at the mall", "on Sundays"], c_kor: ["쇼핑몰에", "일요일마다"] },
    { vBase: "go", s: "The children", p: "부정", kor: { 현재:"나가지 않는다.", 과거:"나가지 않았다.", 미래:"나가지 않을 것이다." }, s_kor: "아이들은", b_en: "outside", b_kor: "바깥으로", c_en: ["without coats", "in freezing weather"], c_kor: ["코트도 없이", "영하의 날씨에"] },
    { vBase: "go", s: "He", p: "의문", kor: { 현재:"가니?", 과거:"갔니?", 미래:"갈까?" }, s_kor: "그는", b_en: "on a trip", b_kor: "여행을", c_en: ["with his family", "during the long weekend"], c_kor: ["가족과 함께", "긴 주말 연휴 동안"] },
    { vBase: "go", s: "We", p: "긍정", kor: { 현재:"돌아간다.", 과거:"돌아갔다.", 미래:"돌아갈 것이다." }, s_kor: "우리는", b_en: "back", b_kor: "다시", c_en: ["to our hometown", "for the holidays"], c_kor: ["고향으로", "명절을 맞아"] },
    { vBase: "go", s: "The water", p: "부정", kor: { 현재:"내려가지 않는다.", 과거:"내려가지 않았다.", 미래:"내려가지 않을 것이다." }, s_kor: "물이", b_en: "down the drain", b_kor: "배수구로", c_en: ["smoothly", "due to the blockage"], c_kor: ["원활하게", "막힘 때문에"] },
    { vBase: "go", s: "You", p: "의문", kor: { 현재:"가니?", 과거:"갔니?", 미래:"갈까?" }, s_kor: "너는", b_en: "to the concert", b_kor: "콘서트에", c_en: ["by subway", "on event days"], c_kor: ["지하철로", "행사가 있는 날에"] },
    { vBase: "go", s: "I", p: "긍정", kor: { 현재:"나간다.", 과거:"나갔다.", 미래:"나갈 것이다." }, s_kor: "나는", b_en: "for a drive", b_kor: "드라이브하러", c_en: ["along the coast", "when I have time"], c_kor: ["해안을 따라", "시간이 날 때"] },
    { vBase: "go", s: "The cat", p: "부정", kor: { 현재:"가지 않는다.", 과거:"가지 않았다.", 미래:"가지 않을 것이다." }, s_kor: "그 고양이는", b_en: "near the water", b_kor: "물 근처에", c_en: ["willingly", "out of fear"], c_kor: ["자발적으로", "두려움 때문에"] },
    { vBase: "go", s: "They", p: "의문", kor: { 현재:"가니?", 과거:"갔니?", 미래:"갈까?" }, s_kor: "그들은", b_en: "fishing", b_kor: "낚시하러", c_en: ["at the lake", "every weekend"], c_kor: ["호수로", "주말마다"] },
    { vBase: "go", s: "The machine", p: "긍정", kor: { 현재:"들어간다.", 과거:"들어갔다.", 미래:"들어갈 것이다." }, s_kor: "기계가", b_en: "into standby mode", b_kor: "대기 모드로", c_en: ["automatically", "after 5 minutes"], c_kor: ["자동으로", "5분 후에"] },
    { vBase: "go", s: "My sister", p: "부정", kor: { 현재:"가지 않는다.", 과거:"가지 않았다.", 미래:"가지 않을 것이다." }, s_kor: "내 여동생은", b_en: "to the dentist", b_kor: "치과에", c_en: ["willingly", "without a parent"], c_kor: ["자발적으로는", "부모님 없이는"] },
    { vBase: "go", s: "The birds", p: "의문", kor: { 현재:"가니?", 과거:"갔니?", 미래:"갈까?" }, s_kor: "새들이", b_en: "south", b_kor: "남쪽으로", c_en: ["for the winter", "every year"], c_kor: ["겨울을 나러", "매년"] },
    { vBase: "go", s: "The couple", p: "긍정", kor: { 현재:"간다.", 과거:"갔다.", 미래:"갈 것이다." }, s_kor: "그 커플은", b_en: "to the farmers' market", b_kor: "파머스 마켓에", c_en: ["every Saturday", "for fresh produce"], c_kor: ["매주 토요일마다", "신선한 농산물을 사러"] },
    { vBase: "go", s: "My brother", p: "부정", kor: { 현재:"가지 않는다.", 과거:"가지 않았다.", 미래:"가지 않을 것이다." }, s_kor: "내 남동생은", b_en: "to the mall", b_kor: "쇼핑몰에", c_en: ["on weeknights", "in the winter"], c_kor: ["평일 밤에", "겨울에는"] },
    { vBase: "go", s: "Your parents", p: "의문", kor: { 현재:"가시니?", 과거:"가셨니?", 미래:"가실까?" }, s_kor: "너의 부모님은", b_en: "on vacation", b_kor: "휴가를", c_en: ["every summer", "without fail"], c_kor: ["매년 여름", "어김없이"] }
  ];
        return processRawRows1(subjPlurals, TENSES, rawRows);
      })(),
      advanced: null,
      master:   null,
    },
come: {
      standard: (() => {
        const subjPlurals = ["The guests", "The teachers", "They", "The children", "The birds", "We"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "come", s: "I", p: "긍정", kor: { 현재:"온다.", 과거:"왔다.", 미래:"올 것이다." }, s_kor: "나는", b_en: "to the office", b_kor: "사무실로", c_en: ["by subway", "in the morning"], c_kor: ["지하철을 타고", "아침에"] },
    { vBase: "come", s: "The boy", p: "부정", kor: { 현재:"오지 않는다.", 과거:"오지 않았다.", 미래:"오지 않을 것이다." }, s_kor: "그 소년은", b_en: "here", b_kor: "여기로", c_en: ["alone", "at night"], c_kor: ["혼자서", "밤에"] },
    { vBase: "come", s: "They", p: "의문", kor: { 현재:"오니?", 과거:"왔니?", 미래:"올까?" }, s_kor: "그들은", b_en: "to the party", b_kor: "파티에", c_en: ["together", "on special occasions"], c_kor: ["함께", "특별한 날에"] },
    { vBase: "come", s: "The guests", p: "긍정", kor: { 현재:"온다.", 과거:"왔다.", 미래:"올 것이다." }, s_kor: "손님들은", b_en: "to the living room", b_kor: "거실로", c_en: ["with gifts", "on holidays"], c_kor: ["선물을 들고", "명절에"] },
    { vBase: "come", s: "She", p: "부정", kor: { 현재:"오지 않는다.", 과거:"오지 않았다.", 미래:"오지 않을 것이다." }, s_kor: "그녀는", b_en: "to the meeting", b_kor: "회의에", c_en: ["on time", "for regular sessions"], c_kor: ["제시간에", "정기 세션에"] },
    { vBase: "come", s: "My mom", p: "의문", kor: { 현재:"오시니?", 과거:"오셨니?", 미래:"오실까?" }, s_kor: "나의 엄마는", b_en: "home", b_kor: "집에", c_en: ["early", "after work"], c_kor: ["일찍", "퇴근 후에"] },
    { vBase: "come", s: "We", p: "긍정", kor: { 현재:"온다.", 과거:"왔다.", 미래:"올 것이다." }, s_kor: "우리는", b_en: "to the restaurant", b_kor: "식당으로", c_en: ["for dinner", "on weekends"], c_kor: ["저녁을 먹으러", "주말마다"] },
    { vBase: "come", s: "The bus", p: "부정", kor: { 현재:"오지 않는다.", 과거:"오지 않았다.", 미래:"오지 않을 것이다." }, s_kor: "그 버스는", b_en: "to the stop", b_kor: "정류장으로", c_en: ["exactly on time", "during rush hour"], c_kor: ["정확히 제시간에", "혼잡한 시간대에"] },
    { vBase: "come", s: "You", p: "의문", kor: { 현재:"오니?", 과거:"왔니?", 미래:"올까?" }, s_kor: "너는", b_en: "to the gym", b_kor: "체육관에", c_en: ["late", "every night"], c_kor: ["늦게", "매일 밤"] },
    { vBase: "come", s: "The dog", p: "긍정", kor: { 현재:"들어온다.", 과거:"들어왔다.", 미래:"들어올 것이다." }, s_kor: "그 개는", b_en: "inside", b_kor: "안으로", c_en: ["quickly", "in the morning"], c_kor: ["빠르게", "아침에"] },
    { vBase: "come", s: "I", p: "부정", kor: { 현재:"오지 않는다.", 과거:"오지 않았다.", 미래:"오지 않을 것이다." }, s_kor: "나는", b_en: "to the class", b_kor: "수업에", c_en: ["on foot", "in bad weather"], c_kor: ["걸어서는", "궂은 날씨에"] },
    { vBase: "come", s: "The teachers", p: "의문", kor: { 현재:"오시니?", 과거:"오셨니?", 미래:"오실까?" }, s_kor: "선생님들은", b_en: "into the hall", b_kor: "강당으로", c_en: ["with papers", "before the class"], c_kor: ["서류를 들고", "수업 전에"] },
    { vBase: "come", s: "My friend", p: "긍정", kor: { 현재:"온다.", 과거:"왔다.", 미래:"올 것이다." }, s_kor: "내 친구는", b_en: "over", b_kor: "여기로", c_en: ["for a visit", "during vacations"], c_kor: ["방문하러", "방학 동안"] },
    { vBase: "come", s: "They", p: "부정", kor: { 현재:"오지 않는다.", 과거:"오지 않았다.", 미래:"오지 않을 것이다." }, s_kor: "그들은", b_en: "to the park", b_kor: "공원에", c_en: ["in winter", "due to the cold"], c_kor: ["겨울에는", "추위 때문에"] },
    { vBase: "come", s: "The taxi", p: "의문", kor: { 현재:"오니?", 과거:"왔니?", 미래:"올까?" }, s_kor: "그 택시는", b_en: "to the airport", b_kor: "공항으로", c_en: ["via the highway", "during holidays"], c_kor: ["고속도로를 거쳐", "휴가철 동안"] },
    { vBase: "come", s: "She", p: "긍정", kor: { 현재:"온다.", 과거:"왔다.", 미래:"올 것이다." }, s_kor: "그녀는", b_en: "to the store", b_kor: "가게에", c_en: ["for shopping", "on Sundays"], c_kor: ["쇼핑하러", "일요일마다"] },
    { vBase: "come", s: "The children", p: "부정", kor: { 현재:"나오지 않는다.", 과거:"나오지 않았다.", 미래:"나오지 않을 것이다." }, s_kor: "아이들은", b_en: "out", b_kor: "바깥으로", c_en: ["without coats", "in freezing weather"], c_kor: ["코트도 없이", "영하의 날씨에"] },
    { vBase: "come", s: "He", p: "의문", kor: { 현재:"오니?", 과거:"왔니?", 미래:"올까?" }, s_kor: "그는", b_en: "to my house", b_kor: "우리 집에", c_en: ["with his family", "on weekends"], c_kor: ["가족과 함께", "주말마다"] },
    { vBase: "come", s: "We", p: "긍정", kor: { 현재:"돌아온다.", 과거:"돌아왔다.", 미래:"돌아올 것이다." }, s_kor: "우리는", b_en: "back", b_kor: "다시", c_en: ["to our hometown", "for the holidays"], c_kor: ["고향으로", "명절을 맞아"] },
    { vBase: "come", s: "The water", p: "부정", kor: { 현재:"나오지 않는다.", 과거:"나오지 않았다.", 미래:"나오지 않을 것이다." }, s_kor: "물이", b_en: "out of the pipe", b_kor: "파이프에서", c_en: ["smoothly", "due to the rust"], c_kor: ["원활하게는", "녹 때문에"] },
    { vBase: "come", s: "You", p: "의문", kor: { 현재:"오니?", 과거:"왔니?", 미래:"올까?" }, s_kor: "너는", b_en: "to the concert", b_kor: "콘서트에", c_en: ["by subway", "on event days"], c_kor: ["지하철로", "행사가 있는 날에"] },
    { vBase: "come", s: "I", p: "긍정", kor: { 현재:"온다.", 과거:"왔다.", 미래:"올 것이다." }, s_kor: "나는", b_en: "to the beach", b_kor: "해변에", c_en: ["for a walk", "when I have time"], c_kor: ["산책하러", "시간이 날 때"] },
    { vBase: "come", s: "The cat", p: "부정", kor: { 현재:"오지 않는다.", 과거:"오지 않았다.", 미래:"오지 않을 것이다." }, s_kor: "그 고양이는", b_en: "near the water", b_kor: "물 근처에", c_en: ["willingly", "out of fear"], c_kor: ["자발적으로는", "두려움 때문에"] },
    { vBase: "come", s: "They", p: "의문", kor: { 현재:"오니?", 과거:"왔니?", 미래:"올까?" }, s_kor: "그들은", b_en: "to the lake", b_kor: "호수에", c_en: ["for fishing", "every weekend"], c_kor: ["낚시하러", "주말마다"] },
    { vBase: "come", s: "The package", p: "긍정", kor: { 현재:"온다.", 과거:"왔다.", 미래:"올 것이다." }, s_kor: "소포가", b_en: "to the door", b_kor: "문 앞으로", c_en: ["safely", "without any damage"], c_kor: ["안전하게", "아무런 파손 없이"] },
    { vBase: "come", s: "My sister", p: "부정", kor: { 현재:"오지 않는다.", 과거:"오지 않았다.", 미래:"오지 않을 것이다." }, s_kor: "내 여동생은", b_en: "to the dentist", b_kor: "치과에", c_en: ["willingly", "without a parent"], c_kor: ["자발적으로는", "부모님 없이는"] },
    { vBase: "come", s: "The birds", p: "의문", kor: { 현재:"오니?", 과거:"왔니?", 미래:"올까?" }, s_kor: "새들이", b_en: "south", b_kor: "남쪽으로", c_en: ["for the winter", "every year"], c_kor: ["겨울을 나러", "매년"] },
    { vBase: "come", s: "The delivery driver", p: "긍정", kor: { 현재:"온다.", 과거:"왔다.", 미래:"올 것이다." }, s_kor: "배달 기사는", b_en: "to our door", b_kor: "우리 집 문 앞으로", c_en: ["before noon", "on weekdays"], c_kor: ["정오 전에", "평일에"] },
    { vBase: "come", s: "My cousin", p: "부정", kor: { 현재:"오지 않는다.", 과거:"오지 않았다.", 미래:"오지 않을 것이다." }, s_kor: "내 사촌은", b_en: "to family gatherings", b_kor: "가족 모임에", c_en: ["at our house", "on holidays"], c_kor: ["우리 집에서 열리는", "명절마다"] },
    { vBase: "come", s: "Your dad", p: "의문", kor: { 현재:"오시니?", 과거:"오셨니?", 미래:"오실까?" }, s_kor: "너의 아빠는", b_en: "home", b_kor: "집에", c_en: ["on time", "for dinner"], c_kor: ["제시간에", "저녁 식사에 맞춰"] }
  ];
        return processRawRows1(subjPlurals, TENSES, rawRows);
      })(),
      advanced: null,
      master:   null,
    },
run: {
      standard: (() => {
        const subjPlurals = ["The dogs", "The children", "They", "The athletes", "We"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "run", s: "The dog", p: "긍정", kor: { 현재:"달린다.", 과거:"달렸다.", 미래:"달릴 것이다." }, s_kor: "그 개는", b_en: "fast", b_kor: "빠르게", c_en: ["in the park", "during the morning"], c_kor: ["공원에서", "아침에"] },
    { vBase: "run", s: "He", p: "부정", kor: { 현재:"달리지 않는다.", 과거:"달리지 않았다.", 미래:"달리지 않을 것이다." }, s_kor: "그는", b_en: "quickly", b_kor: "빨리", c_en: ["on the track", "due to his leg"], c_kor: ["트랙 위에서", "다리 때문에"] },
    { vBase: "run", s: "They", p: "의문", kor: { 현재:"달리니?", 과거:"달렸니?", 미래:"달릴까?" }, s_kor: "그들은", b_en: "together", b_kor: "함께", c_en: ["along the river", "on sunny days"], c_kor: ["강을 따라", "화창한 날에"] },
    { vBase: "run", s: "I", p: "긍정", kor: { 현재:"달린다.", 과거:"달렸다.", 미래:"달릴 것이다." }, s_kor: "나는", b_en: "for my health", b_kor: "건강을 위해", c_en: ["in the morning", "regularly"], c_kor: ["아침에", "규칙적으로"] },
    { vBase: "run", s: "The children", p: "부정", kor: { 현재:"달리지 않는다.", 과거:"달리지 않았다.", 미래:"달리지 않을 것이다." }, s_kor: "아이들은", b_en: "in the hallway", b_kor: "복도에서", c_en: ["at all", "at school"], c_kor: ["전혀", "학교에서는"] },
    { vBase: "run", s: "She", p: "의문", kor: { 현재:"달리니?", 과거:"달렸니?", 미래:"달릴까?" }, s_kor: "그녀는", b_en: "in the marathon", b_kor: "마라톤에서", c_en: ["competitively", "in regional events"], c_kor: ["경쟁적으로", "지역 대회에서"] },
    { vBase: "run", s: "The athletes", p: "긍정", kor: { 현재:"달린다.", 과거:"달렸다.", 미래:"달릴 것이다." }, s_kor: "운동선수들은", b_en: "on the track", b_kor: "트랙 위를", c_en: ["with full speed", "until the end"], c_kor: ["전속력으로", "끝까지"] },
    { vBase: "run", s: "We", p: "부정", kor: { 현재:"달리지 않는다.", 과거:"달리지 않았다.", 미래:"달리지 않을 것이다." }, s_kor: "우리는", b_en: "away", b_kor: "멀리", c_en: ["from the problem", "out of fear"], c_kor: ["그 문제로부터", "두려움 때문에"] },
    { vBase: "run", s: "You", p: "의문", kor: { 현재:"달리니?", 과거:"달렸니?", 미래:"달릴까?" }, s_kor: "너는", b_en: "outside", b_kor: "바깥에서", c_en: ["for exercise", "in the morning"], c_kor: ["운동 삼아", "아침에"] },
    { vBase: "run", s: "The cat", p: "긍정", kor: { 현재:"달려간다.", 과거:"달려갔다.", 미래:"달려갈 것이다." }, s_kor: "그 고양이는", b_en: "under the bed", b_kor: "침대 밑으로", c_en: ["suddenly", "in fear"], c_kor: ["갑자기", "두려움에"] },
    { vBase: "run", s: "My brother", p: "부정", kor: { 현재:"달리지 않는다.", 과거:"달리지 않았다.", 미래:"달리지 않을 것이다." }, s_kor: "내 남동생은", b_en: "in the house", b_kor: "집 안에서", c_en: ["at all", "during the winter"], c_kor: ["전혀", "겨울 동안"] },
    { vBase: "run", s: "The dogs", p: "의문", kor: { 현재:"달리니?", 과거:"달렸니?", 미래:"달릴까?" }, s_kor: "개들이", b_en: "wildly", b_kor: "거칠게", c_en: ["in the yard", "without leashes"], c_kor: ["마당에서", "목줄 없이"] },
    { vBase: "run", s: "He", p: "긍정", kor: { 현재:"달린다.", 과거:"달렸다.", 미래:"달릴 것이다." }, s_kor: "그는", b_en: "to the station", b_kor: "역으로", c_en: ["in a hurry", "every morning"], c_kor: ["서둘러서", "매일 아침"] },
    { vBase: "run", s: "They", p: "부정", kor: { 현재:"달리지 않는다.", 과거:"달리지 않았다.", 미래:"달리지 않을 것이다." }, s_kor: "그들은", b_en: "for fun", b_kor: "재미로", c_en: ["for any reason", "during the off-season"], c_kor: ["어떤 이유에서든", "비시즌 동안"] },
    { vBase: "run", s: "I", p: "의문", kor: { 현재:"달리니?", 과거:"달렸니?", 미래:"달릴까?" }, s_kor: "내가", b_en: "fast enough", b_kor: "충분히 빠르게", c_en: ["for the team", "during matches"], c_kor: ["팀을 위해서", "경기 중에"] },
    { vBase: "run", s: "The water", p: "긍정", kor: { 현재:"흐른다.", 과거:"흘렀다.", 미래:"흐를 것이다." }, s_kor: "물이", b_en: "continuously", b_kor: "계속해서", c_en: ["from the tap", "without stopping"], c_kor: ["수도꼭지에서", "멈추지 않고"] },
    { vBase: "run", s: "She", p: "부정", kor: { 현재:"달리지 않는다.", 과거:"달리지 않았다.", 미래:"달리지 않을 것이다." }, s_kor: "그녀는", b_en: "in the rain", b_kor: "빗속에서", c_en: ["willingly", "at all"], c_kor: ["자발적으로는", "전혀"] },
    { vBase: "run", s: "We", p: "의문", kor: { 현재:"달리니?", 과거:"달렸니?", 미래:"달릴까?" }, s_kor: "우리가", b_en: "towards the goal", b_kor: "목표를 향해", c_en: ["together", "as a team"], c_kor: ["함께", "팀으로서"] },
    { vBase: "run", s: "The engine", p: "긍정", kor: { 현재:"작동한다.", 과거:"작동했다.", 미래:"작동할 것이다." }, s_kor: "엔진이", b_en: "smoothly", b_kor: "부드럽게", c_en: ["without noise", "after the repair"], c_kor: ["소음 없이", "수리 후에"] },
    { vBase: "run", s: "You", p: "부정", kor: { 현재:"달리지 않는다.", 과거:"달리지 않았다.", 미래:"달리지 않을 것이다." }, s_kor: "너는", b_en: "on the treadmill", b_kor: "러닝머신에서", c_en: ["these days", "at the gym"], c_kor: ["요즘", "체육관에서"] },
    { vBase: "run", s: "The children", p: "의문", kor: { 현재:"달리니?", 과거:"달렸니?", 미래:"달릴까?" }, s_kor: "아이들이", b_en: "safely", b_kor: "안전하게", c_en: ["on the grass", "during recess"], c_kor: ["잔디밭에서", "쉬는 시간에"] },
    { vBase: "run", s: "He", p: "긍정", kor: { 현재:"달려간다.", 과거:"달려갔다.", 미래:"달려갈 것이다." }, s_kor: "그는", b_en: "upstairs", b_kor: "위층으로", c_en: ["quickly", "to check"], c_kor: ["빠르게", "확인하러"] },
    { vBase: "run", s: "They", p: "부정", kor: { 현재:"운영하지 않는다.", 과거:"운영하지 않았다.", 미래:"운영하지 않을 것이다." }, s_kor: "그들은", b_en: "the store", b_kor: "그 가게를", c_en: ["for a profit", "in this town"], c_kor: ["이익을 위해", "이 마을에서"] },
    { vBase: "run", s: "I", p: "의문", kor: { 현재:"달리니?", 과거:"달렸니?", 미래:"달릴까?" }, s_kor: "내가", b_en: "on the treadmill", b_kor: "러닝머신 위에서", c_en: ["for an hour", "before breakfast"], c_kor: ["한 시간 동안", "아침 식사 전에"] },
    { vBase: "run", s: "The horse", p: "긍정", kor: { 현재:"달린다.", 과거:"달렸다.", 미래:"달릴 것이다." }, s_kor: "그 말은", b_en: "wild", b_kor: "야생으로", c_en: ["in the field", "freely"], c_kor: ["들판에서", "자유롭게"] },
    { vBase: "run", s: "She", p: "부정", kor: { 현재:"달리지 않는다.", 과거:"달리지 않았다.", 미래:"달리지 않을 것이다." }, s_kor: "그녀는", b_en: "out of breath", b_kor: "숨차게", c_en: ["easily", "on short runs"], c_kor: ["쉽게", "짧은 달리기에서도"] },
    { vBase: "run", s: "We", p: "의문", kor: { 현재:"달리니?", 과거:"달렸니?", 미래:"달릴까?" }, s_kor: "우리가", b_en: "in the park", b_kor: "공원에서", c_en: ["early", "before sunrise"], c_kor: ["일찍", "일출 전에"] },
    { vBase: "run", s: "The children", p: "긍정", kor: { 현재:"뛰어다닌다.", 과거:"뛰어다녔다.", 미래:"뛰어다닐 것이다." }, s_kor: "아이들은", b_en: "around the playground", b_kor: "운동장 주변을", c_en: ["after school", "every day"], c_kor: ["방과 후에", "매일"] },
    { vBase: "run", s: "My dad", p: "부정", kor: { 현재:"달리지 않으신다.", 과거:"달리지 않으셨다.", 미래:"달리지 않으실 것이다." }, s_kor: "나의 아빠는", b_en: "outside", b_kor: "바깥에서", c_en: ["in bad weather", "at all"], c_kor: ["궂은 날씨에는", "전혀"] },
    { vBase: "run", s: "Your team", p: "의문", kor: { 현재:"달리니?", 과거:"달렸니?", 미래:"달릴까?" }, s_kor: "너희 팀은", b_en: "together", b_kor: "함께", c_en: ["before every practice", "as a warm-up"], c_kor: ["매 연습 전에", "워밍업으로"] }
  ];
        return processRawRows1(subjPlurals, TENSES, rawRows);
      })(),
      advanced: null,
      master:   null,
    },
walk: {
      standard: (() => {
        const subjPlurals = ["We", "They", "The students", "The couples"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "walk", s: "I", p: "긍정", kor: { 현재:"걷는다.", 과거:"걸었다.", 미래:"걸을 것이다." }, s_kor: "나는", b_en: "to school", b_kor: "학교까지", c_en: ["slowly", "in the morning"], c_kor: ["천천히", "아침에"] },
    { vBase: "walk", s: "They", p: "의문", kor: { 현재:"걷니?", 과거:"걸었니?", 미래:"걸을까?" }, s_kor: "그들은", b_en: "in the park", b_kor: "공원에서", c_en: ["together", "on weekends"], c_kor: ["함께", "주말에"] },
    { vBase: "walk", s: "She", p: "부정", kor: { 현재:"걷지 않는다.", 과거:"걷지 않았다.", 미래:"걷지 않을 것이다." }, s_kor: "그녀는", b_en: "alone", b_kor: "혼자서", c_en: ["at night", "for any reason"], c_kor: ["밤에는", "어떤 이유에서든"] },
    { vBase: "walk", s: "He", p: "긍정", kor: { 현재:"걷는다.", 과거:"걸었다.", 미래:"걸을 것이다." }, s_kor: "그는", b_en: "along the river", b_kor: "강을 따라", c_en: ["with his dog", "every morning"], c_kor: ["그의 개와 함께", "매일 아침"] },
    { vBase: "walk", s: "We", p: "부정", kor: { 현재:"걷지 않는다.", 과거:"걷지 않았다.", 미래:"걷지 않을 것이다." }, s_kor: "우리는", b_en: "fast", b_kor: "빨리", c_en: ["in the rain", "at all"], c_kor: ["빗속에서는", "전혀"] },
    { vBase: "walk", s: "You", p: "의문", kor: { 현재:"걷니?", 과거:"걸었니?", 미래:"걸을까?" }, s_kor: "너는", b_en: "to work", b_kor: "직장까지", c_en: ["on foot", "every day"], c_kor: ["걸어서", "매일"] },
    { vBase: "walk", s: "The old man", p: "긍정", kor: { 현재:"걸으신다.", 과거:"걸으셨다.", 미래:"걸으실 것이다." }, s_kor: "그 노인은", b_en: "with a cane", b_kor: "지팡이를 짚고", c_en: ["carefully", "on the street"], c_kor: ["조심스럽게", "거리에서"] },
    { vBase: "walk", s: "The students", p: "부정", kor: { 현재:"걷지 않는다.", 과거:"걷지 않았다.", 미래:"걷지 않을 것이다." }, s_kor: "그 학생들은", b_en: "in the hallway", b_kor: "복도에서", c_en: ["quietly", "during breaks"], c_kor: ["조용히", "쉬는 시간에"] },
    { vBase: "walk", s: "I", p: "의문", kor: { 현재:"걷니?", 과거:"걸었니?", 미래:"걸을까?" }, s_kor: "내가", b_en: "too fast", b_kor: "너무 빨리", c_en: ["for you", "in general"], c_kor: ["너를 위해", "일반적으로"] },
    { vBase: "walk", s: "They", p: "긍정", kor: { 현재:"걸어간다.", 과거:"걸어갔다.", 미래:"걸어갈 것이다." }, s_kor: "그들은", b_en: "away", b_kor: "멀리", c_en: ["without a word", "in the end"], c_kor: ["말없이", "결국에"] },
    { vBase: "walk", s: "She", p: "부정", kor: { 현재:"걷지 않는다.", 과거:"걷지 않았다.", 미래:"걷지 않을 것이다." }, s_kor: "그녀는", b_en: "barefoot", b_kor: "맨발로", c_en: ["on the grass", "in summer"], c_kor: ["잔디 위를", "여름에"] },
    { vBase: "walk", s: "He", p: "의문", kor: { 현재:"걷니?", 과거:"걸었니?", 미래:"걸을까?" }, s_kor: "그는", b_en: "to the station", b_kor: "역까지", c_en: ["every day", "without fail"], c_kor: ["매일", "어김없이"] },
    { vBase: "walk", s: "We", p: "긍정", kor: { 현재:"걷는다.", 과거:"걸었다.", 미래:"걸을 것이다." }, s_kor: "우리는", b_en: "hand in hand", b_kor: "손을 잡고", c_en: ["on the beach", "happily"], c_kor: ["해변에서", "행복하게"] },
    { vBase: "walk", s: "You", p: "부정", kor: { 현재:"걷지 않는다.", 과거:"걷지 않았다.", 미래:"걷지 않을 것이다." }, s_kor: "너는", b_en: "straight", b_kor: "똑바로", c_en: ["in the dark", "at all"], c_kor: ["어둠 속에서", "전혀"] },
    { vBase: "walk", s: "The cat", p: "의문", kor: { 현재:"걷니?", 과거:"걸었니?", 미래:"걸을까?" }, s_kor: "그 고양이는", b_en: "softly", b_kor: "살금살금", c_en: ["on the roof", "at night"], c_kor: ["지붕 위를", "밤에"] },
    { vBase: "walk", s: "I", p: "긍정", kor: { 현재:"걸어 들어간다.", 과거:"걸어 들어갔다.", 미래:"걸어 들어갈 것이다." }, s_kor: "나는", b_en: "into the room", b_kor: "방 안으로", c_en: ["confidently", "every time"], c_kor: ["자신감 있게", "매번"] },
    { vBase: "walk", s: "They", p: "부정", kor: { 현재:"걷지 않는다.", 과거:"걷지 않았다.", 미래:"걷지 않을 것이다." }, s_kor: "그들은", b_en: "in the rain", b_kor: "빗속을", c_en: ["without umbrellas", "in spring"], c_kor: ["우산 없이", "봄에"] },
    { vBase: "walk", s: "She", p: "의문", kor: { 현재:"걷니?", 과거:"걸었니?", 미래:"걸을까?" }, s_kor: "그녀는", b_en: "up the stairs", b_kor: "계단 위로", c_en: ["slowly", "due to fatigue"], c_kor: ["천천히", "피로 때문에"] },
    { vBase: "walk", s: "He", p: "긍정", kor: { 현재:"걷는다.", 과거:"걸었다.", 미래:"걸을 것이다." }, s_kor: "그는", b_en: "back home", b_kor: "집으로 다시", c_en: ["after work", "tiredly"], c_kor: ["퇴근 후에", "피곤하게"] },
    { vBase: "walk", s: "We", p: "부정", kor: { 현재:"걷지 않는다.", 과거:"걷지 않았다.", 미래:"걷지 않을 것이다." }, s_kor: "우리는", b_en: "on the grass", b_kor: "잔디밭 위를", c_en: ["at the park", "at all"], c_kor: ["공원에서", "전혀"] },
    { vBase: "walk", s: "You", p: "의문", kor: { 현재:"걷니?", 과거:"걸었니?", 미래:"걸을까?" }, s_kor: "너는", b_en: "a lot", b_kor: "많이", c_en: ["for your health", "regularly"], c_kor: ["건강을 위해", "규칙적으로"] },
    { vBase: "walk", s: "The couples", p: "긍정", kor: { 현재:"걷는다.", 과거:"걸었다.", 미래:"걸을 것이다." }, s_kor: "커플들이", b_en: "around the lake", b_kor: "호수 주변을", c_en: ["in the evening", "romantically"], c_kor: ["저녁에", "낭만적으로"] },
    { vBase: "walk", s: "I", p: "부정", kor: { 현재:"걷지 않는다.", 과거:"걷지 않았다.", 미래:"걷지 않을 것이다." }, s_kor: "나는", b_en: "with him", b_kor: "그와 함께", c_en: ["for any reason", "after the fight"], c_kor: ["어떤 이유에서든", "싸운 이후로"] },
    { vBase: "walk", s: "They", p: "의문", kor: { 현재:"걷니?", 과거:"걸었니?", 미래:"걸을까?" }, s_kor: "그들은", b_en: "in the woods", b_kor: "숲 속을", c_en: ["safely", "during daylight"], c_kor: ["안전하게", "낮 동안에"] },
    { vBase: "walk", s: "She", p: "긍정", kor: { 현재:"지나간다.", 과거:"지나갔다.", 미래:"지나갈 것이다." }, s_kor: "그녀는", b_en: "past the store", b_kor: "가게를 지나서", c_en: ["without looking", "quickly"], c_kor: ["보지도 않고", "빠르게"] },
    { vBase: "walk", s: "He", p: "부정", kor: { 현재:"걷지 않는다.", 과거:"걷지 않았다.", 미래:"걷지 않을 것이다." }, s_kor: "그는", b_en: "to the office", b_kor: "사무실로", c_en: ["on foot", "on most days"], c_kor: ["걸어서는", "대부분의 날에"] },
    { vBase: "walk", s: "We", p: "의문", kor: { 현재:"걷니?", 과거:"걸었니?", 미래:"걸을까?" }, s_kor: "우리가", b_en: "in the right direction", b_kor: "올바른 방향으로", c_en: ["without a map", "for sure"], c_kor: ["지도 없이", "확실히"] },
    { vBase: "walk", s: "The old man", p: "긍정", kor: { 현재:"걷는다.", 과거:"걸었다.", 미래:"걸을 것이다." }, s_kor: "그 노인은", b_en: "along the river", b_kor: "강을 따라", c_en: ["slowly", "every evening"], c_kor: ["천천히", "매일 저녁"] },
    { vBase: "walk", s: "She", p: "부정", kor: { 현재:"걸어가지 않는다.", 과거:"걸어가지 않았다.", 미래:"걸어가지 않을 것이다." }, s_kor: "그녀는", b_en: "to school", b_kor: "학교에", c_en: ["on rainy days", "as a rule"], c_kor: ["비가 오는 날에는", "원칙적으로"] },
    { vBase: "walk", s: "Your dog", p: "의문", kor: { 현재:"걷니?", 과거:"걸었니?", 미래:"걸을까?" }, s_kor: "너의 개는", b_en: "with you", b_kor: "너와 함께", c_en: ["in the park", "every morning"], c_kor: ["공원에서", "매일 아침"] }
  ];
        return processRawRows1(subjPlurals, TENSES, rawRows);
      })(),
      advanced: null,
      master:   null,
    },
live: {
      standard: (() => {
        const subjPlurals = ["My parents", "Many animals", "They", "We", "People", "My grandparents", "Your family"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "live", s: "He", p: "긍정", kor: { 현재:"산다.", 과거:"살았다.", 미래:"살 것이다." }, s_kor: "그는", b_en: "in Seoul", b_kor: "서울에", c_en: ["happily", "with his family"], c_kor: ["행복하게", "가족과 함께"] },
    { vBase: "live", s: "My parents", p: "의문", kor: { 현재:"사시니?", 과거:"사셨니?", 미래:"사실까?" }, s_kor: "부모님은", b_en: "in the country", b_kor: "시골에", c_en: ["peacefully", "during the winter"], c_kor: ["평화롭게", "겨울 동안"] },
    { vBase: "live", s: "I", p: "부정", kor: { 현재:"살지 않는다.", 과거:"살지 않았다.", 미래:"살지 않을 것이다." }, s_kor: "나는", b_en: "alone", b_kor: "혼자서", c_en: ["by choice", "in this apartment"], c_kor: ["선택에 의해", "이 아파트에"] },
    { vBase: "live", s: "She", p: "긍정", kor: { 현재:"산다.", 과거:"살았다.", 미래:"살 것이다." }, s_kor: "그녀는", b_en: "a busy life", b_kor: "바쁜 삶을", c_en: ["in the city", "with great passion"], c_kor: ["도시에서", "큰 열정을 가지고"] },
    { vBase: "live", s: "They", p: "부정", kor: { 현재:"살지 않는다.", 과거:"살지 않았다.", 미래:"살지 않을 것이다." }, s_kor: "그들은", b_en: "far away", b_kor: "멀리", c_en: ["from here", "at all"], c_kor: ["여기서부터", "전혀"] },
    { vBase: "live", s: "We", p: "의문", kor: { 현재:"사니?", 과거:"살았니?", 미래:"살까?" }, s_kor: "우리가", b_en: "in a safe place", b_kor: "안전한 곳에", c_en: ["together", "without fear"], c_kor: ["함께", "두려움 없이"] },
    { vBase: "live", s: "Many animals", p: "긍정", kor: { 현재:"산다.", 과거:"살았다.", 미래:"살 것이다." }, s_kor: "많은 동물들이", b_en: "in the forest", b_kor: "숲 속에", c_en: ["freely", "in nature"], c_kor: ["자유롭게", "자연 속에서"] },
    { vBase: "live", s: "You", p: "부정", kor: { 현재:"살지 않는다.", 과거:"살지 않았다.", 미래:"살지 않을 것이다." }, s_kor: "너는", b_en: "in the past", b_kor: "과거에", c_en: ["deeply", "in your mind"], c_kor: ["깊이", "네 마음속에서"] },
    { vBase: "live", s: "He", p: "의문", kor: { 현재:"사니?", 과거:"살았니?", 미래:"살까?" }, s_kor: "그는", b_en: "on his own", b_kor: "스스로", c_en: ["independently", "without help"], c_kor: ["독립적으로", "도움 없이"] },
    { vBase: "live", s: "She", p: "긍정", kor: { 현재:"산다.", 과거:"살았다.", 미래:"살 것이다." }, s_kor: "그녀는", b_en: "next door", b_kor: "옆집에", c_en: ["quietly", "for a long time"], c_kor: ["조용히", "오랫동안"] },
    { vBase: "live", s: "My parents", p: "부정", kor: { 현재:"살지 않으신다.", 과거:"살지 않으셨다.", 미래:"살지 않으실 것이다." }, s_kor: "부모님은", b_en: "in an apartment", b_kor: "아파트에", c_en: ["for any reason", "in this area"], c_kor: ["어떤 이유에서든", "이 지역에서는"] },
    { vBase: "live", s: "I", p: "의문", kor: { 현재:"사니?", 과거:"살았니?", 미래:"살까?" }, s_kor: "내가", b_en: "right", b_kor: "올바르게", c_en: ["for my dreams", "with passion"], c_kor: ["내 꿈을 위해", "열정적으로"] },
    { vBase: "live", s: "They", p: "긍정", kor: { 현재:"산다.", 과거:"살았다.", 미래:"살 것이다." }, s_kor: "그들은", b_en: "in harmony", b_kor: "조화롭게", c_en: ["with nature", "peacefully"], c_kor: ["자연과 함께", "평화롭게"] },
    { vBase: "live", s: "We", p: "부정", kor: { 현재:"살지 않는다.", 과거:"살지 않았다.", 미래:"살지 않을 것이다." }, s_kor: "우리는", b_en: "in fear", b_kor: "두려움 속에", c_en: ["at all", "in this country"], c_kor: ["전혀", "이 나라에서는"] },
    { vBase: "live", s: "You", p: "의문", kor: { 현재:"사니?", 과거:"살았니?", 미래:"살까?" }, s_kor: "너는", b_en: "near the station", b_kor: "역 근처에", c_en: ["conveniently", "without a car"], c_kor: ["편리하게", "차 없이"] },
    { vBase: "live", s: "People", p: "긍정", kor: { 현재:"산다.", 과거:"살았다.", 미래:"살 것이다." }, s_kor: "사람들은", b_en: "longer", b_kor: "더 오래", c_en: ["with good medicine", "in modern society"], c_kor: ["좋은 약 덕분에", "현대 사회에서"] },
    { vBase: "live", s: "He", p: "부정", kor: { 현재:"살지 않는다.", 과거:"살지 않았다.", 미래:"살지 않을 것이다." }, s_kor: "그는", b_en: "up to expectations", b_kor: "기대에 부응하며", c_en: ["perfectly", "in reality"], c_kor: ["완벽하게", "현실에서는"] },
    { vBase: "live", s: "She", p: "의문", kor: { 현재:"사니?", 과거:"살았니?", 미래:"살까?" }, s_kor: "그녀는", b_en: "a healthy life", b_kor: "건강한 삶을", c_en: ["by eating well", "every day"], c_kor: ["잘 챙겨 먹으며", "매일"] },
    { vBase: "live", s: "I", p: "긍정", kor: { 현재:"산다.", 과거:"살았다.", 미래:"살 것이다." }, s_kor: "나는", b_en: "for the moment", b_kor: "이 순간을 위해", c_en: ["passionately", "every day"], c_kor: ["열정적으로", "매일"] },
    { vBase: "live", s: "They", p: "부정", kor: { 현재:"살지 않는다.", 과거:"살지 않았다.", 미래:"살지 않을 것이다." }, s_kor: "그들은", b_en: "in luxury", b_kor: "호화롭게", c_en: ["at all", "despite their wealth"], c_kor: ["전혀", "그들의 부에도 불구하고"] },
    { vBase: "live", s: "We", p: "의문", kor: { 현재:"사니?", 과거:"살았니?", 미래:"살까?" }, s_kor: "우리가", b_en: "close to each other", b_kor: "서로 가까이", c_en: ["peacefully", "in this city"], c_kor: ["평화롭게", "이 도시에서"] },
    { vBase: "live", s: "You", p: "긍정", kor: { 현재:"산다.", 과거:"살았다.", 미래:"살 것이다." }, s_kor: "너는", b_en: "through hard times", b_kor: "힘든 시기를 겪으며", c_en: ["bravely", "in the end"], c_kor: ["용감하게", "결국엔"] },
    { vBase: "live", s: "He", p: "부정", kor: { 현재:"살지 않는다.", 과거:"살지 않았다.", 미래:"살지 않을 것이다." }, s_kor: "그는", b_en: "by the rules", b_kor: "규칙대로", c_en: ["strictly", "without exceptions"], c_kor: ["엄격하게", "예외 없이"] },
    { vBase: "live", s: "She", p: "의문", kor: { 현재:"사니?", 과거:"살았니?", 미래:"살까?" }, s_kor: "그녀는", b_en: "in the suburbs", b_kor: "교외에", c_en: ["quietly", "away from the noise"], c_kor: ["조용히", "소음에서 벗어나"] },
    { vBase: "live", s: "My parents", p: "긍정", kor: { 현재:"산다.", 과거:"살았다.", 미래:"살 것이다." }, s_kor: "부모님은", b_en: "a long life", b_kor: "장수하며", c_en: ["healthily", "together"], c_kor: ["건강하게", "함께"] },
    { vBase: "live", s: "I", p: "부정", kor: { 현재:"살지 않는다.", 과거:"살지 않았다.", 미래:"살지 않을 것이다." }, s_kor: "나는", b_en: "with regrets", b_kor: "후회와 함께", c_en: ["at all", "in my life"], c_kor: ["전혀", "내 인생에서"] },
    { vBase: "live", s: "They", p: "의문", kor: { 현재:"사니?", 과거:"살았니?", 미래:"살까?" }, s_kor: "그들은", b_en: "in a big house", b_kor: "큰 집에", c_en: ["comfortably", "in the suburbs"], c_kor: ["편안하게", "교외에서"] },
    { vBase: "live", s: "My grandparents", p: "긍정", kor: { 현재:"사신다.", 과거:"사셨다.", 미래:"사실 것이다." }, s_kor: "나의 조부모님은", b_en: "in the countryside", b_kor: "시골에서", c_en: ["quietly", "all year round"], c_kor: ["조용히", "일 년 내내"] },
    { vBase: "live", s: "He", p: "부정", kor: { 현재:"살지 않는다.", 과거:"살지 않았다.", 미래:"살지 않을 것이다." }, s_kor: "그는", b_en: "near his workplace", b_kor: "그의 직장 근처에", c_en: ["in this big city", "without a car"], c_kor: ["이 큰 도시에서", "차 없이"] },
    { vBase: "live", s: "Your family", p: "의문", kor: { 현재:"사니?", 과거:"살았니?", 미래:"살까?" }, s_kor: "너의 가족은", b_en: "out in the suburbs", b_kor: "교외 외곽에", c_en: ["with your grandparents", "during the summer"], c_kor: ["조부모님과 함께", "여름 동안"] }
  ];
        return processRawRows1(subjPlurals, TENSES, rawRows);
      })(),
      advanced: null,
      master:   null,
    },
work: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The workers", "The nurses"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "work", s: "She", p: "긍정", kor: { 현재:"일한다.", 과거:"일했다.", 미래:"일할 것이다." }, s_kor: "그녀는", b_en: "hard", b_kor: "열심히", c_en: ["at the office", "during regular hours"], c_kor: ["사무실에서", "정규 시간 동안"] },
    { vBase: "work", s: "The machine", p: "부정", kor: { 현재:"작동하지 않는다.", 과거:"작동하지 않았다.", 미래:"작동하지 않을 것이다." }, s_kor: "그 기계는", b_en: "well", b_kor: "잘", c_en: ["properly", "without oil"], c_kor: ["제대로", "기름 없이는"] },
    { vBase: "work", s: "He", p: "의문", kor: { 현재:"일하니?", 과거:"일했니?", 미래:"일할까?" }, s_kor: "그는", b_en: "late", b_kor: "늦게까지", c_en: ["on busy days", "at the company"], c_kor: ["바쁜 날에", "회사에서"] },
    { vBase: "work", s: "I", p: "긍정", kor: { 현재:"일한다.", 과거:"일했다.", 미래:"일할 것이다." }, s_kor: "나는", b_en: "as a teacher", b_kor: "선생님으로", c_en: ["at the school", "proudly"], c_kor: ["그 학교에서", "자랑스럽게"] },
    { vBase: "work", s: "They", p: "부정", kor: { 현재:"일하지 않는다.", 과거:"일하지 않았다.", 미래:"일하지 않을 것이다." }, s_kor: "그들은", b_en: "on weekends", b_kor: "주말에는", c_en: ["at all", "for rest"], c_kor: ["전혀", "휴식을 위해"] },
    { vBase: "work", s: "We", p: "의문", kor: { 현재:"일하니?", 과거:"일했니?", 미래:"일할까?" }, s_kor: "우리가", b_en: "together", b_kor: "함께", c_en: ["on this project", "as a team"], c_kor: ["이 프로젝트에서", "팀으로서"] },
    { vBase: "work", s: "The plan", p: "긍정", kor: { 현재:"효과가 있다.", 과거:"효과가 있었다.", 미래:"효과가 있을 것이다." }, s_kor: "그 계획은", b_en: "perfectly", b_kor: "완벽하게", c_en: ["in the end", "for us"], c_kor: ["결국에는", "우리를 위해"] },
    { vBase: "work", s: "You", p: "부정", kor: { 현재:"일하지 않는다.", 과거:"일하지 않았다.", 미래:"일하지 않을 것이다." }, s_kor: "너는", b_en: "under pressure", b_kor: "압박감 속에서", c_en: ["well", "for any reason"], c_kor: ["잘", "어떤 이유에서든"] },
    { vBase: "work", s: "The workers", p: "의문", kor: { 현재:"일하니?", 과거:"일했니?", 미래:"일할까?" }, s_kor: "노동자들은", b_en: "in the factory", b_kor: "공장에서", c_en: ["safely", "during their shifts"], c_kor: ["안전하게", "그들의 교대 시간에"] },
    { vBase: "work", s: "She", p: "긍정", kor: { 현재:"일한다.", 과거:"일했다.", 미래:"일할 것이다." }, s_kor: "그녀는", b_en: "part-time", b_kor: "아르바이트로", c_en: ["at the cafe", "during the summer"], c_kor: ["그 카페에서", "여름 동안"] },
    { vBase: "work", s: "The medicine", p: "부정", kor: { 현재:"효과가 없다.", 과거:"효과가 없었다.", 미래:"효과가 없을 것이다." }, s_kor: "그 약은", b_en: "fast", b_kor: "빠르게", c_en: ["at all", "for me"], c_kor: ["전혀", "나에게는"] },
    { vBase: "work", s: "He", p: "의문", kor: { 현재:"일하니?", 과거:"일했니?", 미래:"일할까?" }, s_kor: "그는", b_en: "from home", b_kor: "재택으로", c_en: ["comfortably", "without interruptions"], c_kor: ["편안하게", "방해 없이"] },
    { vBase: "work", s: "I", p: "긍정", kor: { 현재:"일한다.", 과거:"일했다.", 미래:"일할 것이다." }, s_kor: "나는", b_en: "day and night", b_kor: "밤낮으로", c_en: ["for my family", "tirelessly"], c_kor: ["가족을 위해", "지치지 않고"] },
    { vBase: "work", s: "They", p: "부정", kor: { 현재:"일하지 않는다.", 과거:"일하지 않았다.", 미래:"일하지 않을 것이다." }, s_kor: "그들은", b_en: "for money", b_kor: "돈을 위해", c_en: ["only", "without passion"], c_kor: ["오직", "열정 없이"] },
    { vBase: "work", s: "We", p: "의문", kor: { 현재:"작동시키니?", 과거:"작동시켰니?", 미래:"작동시킬까?" }, s_kor: "우리가", b_en: "the system", b_kor: "시스템을", c_en: ["manually", "without electricity"], c_kor: ["수동으로", "전기 없이"] },
    { vBase: "work", s: "The elevator", p: "긍정", kor: { 현재:"작동한다.", 과거:"작동했다.", 미래:"작동할 것이다." }, s_kor: "엘리베이터가", b_en: "normally", b_kor: "정상적으로", c_en: ["safely", "after the repair"], c_kor: ["안전하게", "수리 후에"] },
    { vBase: "work", s: "You", p: "부정", kor: { 현재:"일하지 않는다.", 과거:"일하지 않았다.", 미래:"일하지 않을 것이다." }, s_kor: "너는", b_en: "in a team", b_kor: "팀에서", c_en: ["effectively", "without a leader"], c_kor: ["효과적으로", "리더 없이는"] },
    { vBase: "work", s: "She", p: "의문", kor: { 현재:"일하니?", 과거:"일했니?", 미래:"일할까?" }, s_kor: "그녀는", b_en: "overtime", b_kor: "초과 근무로", c_en: ["voluntarily", "for extra pay"], c_kor: ["자발적으로", "추가 수당을 위해"] },
    { vBase: "work", s: "He", p: "긍정", kor: { 현재:"일한다.", 과거:"일했다.", 미래:"일할 것이다." }, s_kor: "그는", b_en: "like a dog", b_kor: "개처럼 (뼈빠지게)", c_en: ["to pay debts", "without a break"], c_kor: ["빚을 갚으려고", "쉬지 않고"] },
    { vBase: "work", s: "The spell", p: "부정", kor: { 현재:"통하지 않는다.", 과거:"통하지 않았다.", 미래:"통하지 않을 것이다." }, s_kor: "그 주문은", b_en: "on him", b_kor: "그에게", c_en: ["at all", "in this world"], c_kor: ["전혀", "이 세계에서는"] },
    { vBase: "work", s: "I", p: "의문", kor: { 현재:"일하니?", 과거:"일했니?", 미래:"일할까?" }, s_kor: "내가", b_en: "for you", b_kor: "너를 위해", c_en: ["as an assistant", "on this project"], c_kor: ["조수로서", "이 프로젝트에서"] },
    { vBase: "work", s: "They", p: "긍정", kor: { 현재:"일한다.", 과거:"일했다.", 미래:"일할 것이다." }, s_kor: "그들은", b_en: "on a farm", b_kor: "농장에서", c_en: ["with animals", "happily"], c_kor: ["동물들과 함께", "행복하게"] },
    { vBase: "work", s: "We", p: "부정", kor: { 현재:"일하지 않는다.", 과거:"일하지 않았다.", 미래:"일하지 않을 것이다." }, s_kor: "우리는", b_en: "for free", b_kor: "무료로", c_en: ["willingly", "in this industry"], c_kor: ["자발적으로는", "이 업계에서"] },
    { vBase: "work", s: "The magic", p: "의문", kor: { 현재:"효과가 있니?", 과거:"효과가 있었니?", 미래:"효과가 있을까?" }, s_kor: "그 마법이", b_en: "quickly", b_kor: "빠르게", c_en: ["in the dark", "for sure"], c_kor: ["어둠 속에서", "확실히"] },
    { vBase: "work", s: "You", p: "긍정", kor: { 현재:"일한다.", 과거:"일했다.", 미래:"일할 것이다." }, s_kor: "너는", b_en: "miracles", b_kor: "기적처럼", c_en: ["with your hands", "without magic"], c_kor: ["너의 손으로", "마법 없이도"] },
    { vBase: "work", s: "She", p: "부정", kor: { 현재:"일하지 않는다.", 과거:"일하지 않았다.", 미래:"일하지 않을 것이다." }, s_kor: "그녀는", b_en: "abroad", b_kor: "해외에서", c_en: ["due to her family", "for personal reasons"], c_kor: ["가족 때문에", "개인적인 이유로"] },
    { vBase: "work", s: "He", p: "의문", kor: { 현재:"일하니?", 과거:"일했니?", 미래:"일할까?" }, s_kor: "그는", b_en: "out a solution", b_kor: "해결책을", c_en: ["finally", "after a long debate"], c_kor: ["마침내", "긴 토론 후에"] },
    { vBase: "work", s: "The nurses", p: "긍정", kor: { 현재:"일한다.", 과거:"일했다.", 미래:"일할 것이다." }, s_kor: "간호사들은", b_en: "in shifts", b_kor: "교대 근무로", c_en: ["at the hospital", "around the clock"], c_kor: ["병원에서", "24시간 내내"] },
    { vBase: "work", s: "My uncle", p: "부정", kor: { 현재:"일하지 않으신다.", 과거:"일하지 않으셨다.", 미래:"일하지 않으실 것이다." }, s_kor: "나의 삼촌은", b_en: "on weekends", b_kor: "주말에는", c_en: ["at the factory", "as a rule"], c_kor: ["공장에서", "원칙적으로"] },
    { vBase: "work", s: "Your boss", p: "의문", kor: { 현재:"일하시니?", 과거:"일하셨니?", 미래:"일하실까?" }, s_kor: "너의 상사는", b_en: "late", b_kor: "늦게까지", c_en: ["at the office", "on busy days"], c_kor: ["사무실에서", "바쁜 날에"] }
  ];
        return processRawRows1(subjPlurals, TENSES, rawRows);
      })(),
      advanced: null,
      master:   null,
    },
sleep: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The dogs"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "sleep", s: "The baby", p: "긍정", kor: { 현재:"잔다.", 과거:"잤다.", 미래:"잘 것이다." }, s_kor: "아기가", b_en: "soundly", b_kor: "깊게", c_en: ["in the bed", "during the night"], c_kor: ["침대에서", "밤 동안"] },
    { vBase: "sleep", s: "I", p: "부정", kor: { 현재:"자지 않는다.", 과거:"자지 않았다.", 미래:"자지 않을 것이다." }, s_kor: "나는", b_en: "well", b_kor: "잘", c_en: ["without medicine", "due to stress"], c_kor: ["약 없이", "스트레스 때문에"] },
    { vBase: "sleep", s: "He", p: "의문", kor: { 현재:"자니?", 과거:"잤니?", 미래:"잘까?" }, s_kor: "그는", b_en: "on the sofa", b_kor: "소파에서", c_en: ["comfortably", "during breaks"], c_kor: ["편안하게", "쉬는 시간에"] },
    { vBase: "sleep", s: "They", p: "긍정", kor: { 현재:"잔다.", 과거:"잤다.", 미래:"잘 것이다." }, s_kor: "그들은", b_en: "for 8 hours", b_kor: "8시간 동안", c_en: ["during the night", "for health"], c_kor: ["밤 동안", "건강을 위해"] },
    { vBase: "sleep", s: "She", p: "부정", kor: { 현재:"자지 않는다.", 과거:"자지 않았다.", 미래:"자지 않을 것이다." }, s_kor: "그녀는", b_en: "enough", b_kor: "충분히", c_en: ["at all", "during exams"], c_kor: ["전혀", "시험 기간 동안"] },
    { vBase: "sleep", s: "We", p: "의문", kor: { 현재:"자니?", 과거:"잤니?", 미래:"잘까?" }, s_kor: "우리가", b_en: "in a tent", b_kor: "텐트에서", c_en: ["in the woods", "safely"], c_kor: ["숲속에서", "안전하게"] },
    { vBase: "sleep", s: "The cat", p: "긍정", kor: { 현재:"잔다.", 과거:"잤다.", 미래:"잘 것이다." }, s_kor: "그 고양이는", b_en: "in the sun", b_kor: "햇볕 아래에서", c_en: ["peacefully", "after lunch"], c_kor: ["평화롭게", "점심 식사 후에"] },
    { vBase: "sleep", s: "You", p: "부정", kor: { 현재:"자지 않는다.", 과거:"자지 않았다.", 미래:"자지 않을 것이다." }, s_kor: "너는", b_en: "with the light on", b_kor: "불을 켠 채로", c_en: ["for any reason", "at home"], c_kor: ["어떤 이유에서든", "집에서는"] },
    { vBase: "sleep", s: "The dogs", p: "의문", kor: { 현재:"자니?", 과거:"잤니?", 미래:"잘까?" }, s_kor: "개들이", b_en: "outside", b_kor: "바깥에서", c_en: ["in winter", "despite the cold"], c_kor: ["겨울에", "추위에도 불구하고"] },
    { vBase: "sleep", s: "I", p: "긍정", kor: { 현재:"잔다.", 과거:"잤다.", 미래:"잘 것이다." }, s_kor: "나는", b_en: "like a log", b_kor: "통나무처럼 (깊이)", c_en: ["after work", "without waking up"], c_kor: ["퇴근 후에", "깨지 않고"] },
    { vBase: "sleep", s: "He", p: "부정", kor: { 현재:"자지 않는다.", 과거:"자지 않았다.", 미래:"자지 않을 것이다." }, s_kor: "그는", b_en: "during the day", b_kor: "낮 동안에는", c_en: ["at all", "despite being tired"], c_kor: ["전혀", "피곤함에도 불구하고"] },
    { vBase: "sleep", s: "They", p: "의문", kor: { 현재:"자니?", 과거:"잤니?", 미래:"잘까?" }, s_kor: "그들은", b_en: "on the floor", b_kor: "바닥에서", c_en: ["comfortably", "on a thick mat"], c_kor: ["편안하게", "두꺼운 매트 위에서"] },
    { vBase: "sleep", s: "She", p: "긍정", kor: { 현재:"늦잠을 잔다.", 과거:"늦잠을 잤다.", 미래:"늦잠을 잘 것이다." }, s_kor: "그녀는", b_en: "in", b_kor: "늦잠을", c_en: ["on Sundays", "happily"], c_kor: ["일요일에는", "행복하게"] },
    { vBase: "sleep", s: "We", p: "부정", kor: { 현재:"자지 않는다.", 과거:"자지 않았다.", 미래:"자지 않을 것이다." }, s_kor: "우리는", b_en: "in separate rooms", b_kor: "각방에서", c_en: ["by choice", "after making up"], c_kor: ["선택에 의해", "화해한 후에는"] },
    { vBase: "sleep", s: "You", p: "의문", kor: { 현재:"자니?", 과거:"잤니?", 미래:"잘까?" }, s_kor: "너는", b_en: "with a blanket", b_kor: "담요를 덮고", c_en: ["even in summer", "for comfort"], c_kor: ["여름에도", "편안함을 위해"] },
    { vBase: "sleep", s: "The bear", p: "긍정", kor: { 현재:"겨울잠을 잔다.", 과거:"겨울잠을 잤다.", 미래:"겨울잠을 잘 것이다." }, s_kor: "그 곰은", b_en: "through the winter", b_kor: "겨울 내내", c_en: ["deeply", "in the cave"], c_kor: ["깊게", "동굴에서"] },
    { vBase: "sleep", s: "I", p: "부정", kor: { 현재:"자지 못한다.", 과거:"자지 못했다.", 미래:"자지 못할 것이다." }, s_kor: "나는", b_en: "a wink", b_kor: "한숨도", c_en: ["after midnight", "due to coffee"], c_kor: ["자정 이후에", "커피 때문에"] },
    { vBase: "sleep", s: "He", p: "의문", kor: { 현재:"자니?", 과거:"잤니?", 미래:"잘까?" }, s_kor: "그는", b_en: "on his stomach", b_kor: "엎드려서", c_en: ["without a pillow", "for comfort"], c_kor: ["베개 없이", "편안함을 위해"] },
    { vBase: "sleep", s: "They", p: "긍정", kor: { 현재:"잠이 든다.", 과거:"잠이 들었다.", 미래:"잠이 들 것이다." }, s_kor: "그들은", b_en: "off", b_kor: "잠에 빠져서", c_en: ["quickly", "after playing"], c_kor: ["빠르게", "논 후에"] },
    { vBase: "sleep", s: "She", p: "부정", kor: { 현재:"자지 않는다.", 과거:"자지 않았다.", 미래:"자지 않을 것이다." }, s_kor: "그녀는", b_en: "through the alarm", b_kor: "알람을 못 듣고", c_en: ["without waking up", "due to fatigue"], c_kor: ["깨지 않고", "피로 때문에"] },
    { vBase: "sleep", s: "We", p: "의문", kor: { 현재:"자니?", 과거:"잤니?", 미래:"잘까?" }, s_kor: "우리가", b_en: "here", b_kor: "여기서", c_en: ["in this room", "safely"], c_kor: ["이 방에서", "안전하게"] },
    { vBase: "sleep", s: "You", p: "긍정", kor: { 현재:"잔다.", 과거:"잤다.", 미래:"잘 것이다." }, s_kor: "너는", b_en: "like a baby", b_kor: "아기처럼", c_en: ["peacefully", "in the cradle"], c_kor: ["평화롭게", "요람에서"] },
    { vBase: "sleep", s: "The city", p: "부정", kor: { 현재:"잠들지 않는다.", 과거:"잠들지 않았다.", 미래:"잠들지 않을 것이다." }, s_kor: "그 도시는", b_en: "at night", b_kor: "밤에", c_en: ["at all", "in reality"], c_kor: ["전혀", "실제로는"] },
    { vBase: "sleep", s: "I", p: "의문", kor: { 현재:"자니?", 과거:"잤니?", 미래:"잘까?" }, s_kor: "내가", b_en: "with my mouth open", b_kor: "입을 벌리고", c_en: ["unconsciously", "when tired"], c_kor: ["무의식적으로", "피곤할 때"] },
    { vBase: "sleep", s: "He", p: "긍정", kor: { 현재:"잔다.", 과거:"잤다.", 미래:"잘 것이다." }, s_kor: "그는", b_en: "in class", b_kor: "수업 시간에", c_en: ["secretly", "during boring lectures"], c_kor: ["몰래", "지루한 강의 중에"] },
    { vBase: "sleep", s: "They", p: "부정", kor: { 현재:"자지 않는다.", 과거:"자지 않았다.", 미래:"자지 않을 것이다." }, s_kor: "그들은", b_en: "on the bus", b_kor: "버스에서", c_en: ["at all", "for safety"], c_kor: ["전혀", "안전을 위해"] },
    { vBase: "sleep", s: "She", p: "의문", kor: { 현재:"자니?", 과거:"잤니?", 미래:"잘까?" }, s_kor: "그녀는", b_en: "soundly", b_kor: "깊게", c_en: ["in the tent", "despite the storm"], c_kor: ["텐트에서", "폭풍우에도 불구하고"] },
    { vBase: "sleep", s: "The baby", p: "긍정", kor: { 현재:"잔다.", 과거:"잤다.", 미래:"잘 것이다." }, s_kor: "아기는", b_en: "in the crib", b_kor: "요람 안에서", c_en: ["soundly", "all night"], c_kor: ["깊이", "밤새도록"] },
    { vBase: "sleep", s: "My roommate", p: "부정", kor: { 현재:"자지 않는다.", 과거:"자지 않았다.", 미래:"자지 않을 것이다." }, s_kor: "내 룸메이트는", b_en: "early", b_kor: "일찍", c_en: ["on exam nights", "at all"], c_kor: ["시험 기간 밤에는", "결코"] },
    { vBase: "sleep", s: "Your little sister", p: "의문", kor: { 현재:"자니?", 과거:"잤니?", 미래:"잘까?" }, s_kor: "네 여동생은", b_en: "alone", b_kor: "혼자", c_en: ["in her room", "at night"], c_kor: ["자기 방에서", "밤에"] }
  ];
        return processRawRows1(subjPlurals, TENSES, rawRows);
      })(),
      advanced: null,
      master:   null,
    },
smile: {
      standard: (() => {
        const subjPlurals = ["The girls", "They", "We", "The babies"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "smile", s: "The baby", p: "긍정", kor: { 현재:"미소 짓는다.", 과거:"미소 지었다.", 미래:"미소 지을 것이다." }, s_kor: "아기가", b_en: "brightly", b_kor: "밝게", c_en: ["at me", "with joy"], c_kor: ["나를 보고", "기쁨에 차서"] },
    { vBase: "smile", s: "She", p: "부정", kor: { 현재:"미소 짓지 않는다.", 과거:"미소 짓지 않았다.", 미래:"미소 짓지 않을 것이다." }, s_kor: "그녀는", b_en: "much", b_kor: "많이", c_en: ["in public", "due to shyness"], c_kor: ["사람들 앞에서", "수줍음 때문에"] },
    { vBase: "smile", s: "They", p: "의문", kor: { 현재:"미소 짓니?", 과거:"미소 지었니?", 미래:"미소 지을까?" }, s_kor: "그들은", b_en: "happily", b_kor: "행복하게", c_en: ["in the picture", "together"], c_kor: ["사진 속에서", "함께"] },
    { vBase: "smile", s: "He", p: "긍정", kor: { 현재:"미소 짓는다.", 과거:"미소 지었다.", 미래:"미소 지을 것이다." }, s_kor: "그는", b_en: "warmly", b_kor: "따뜻하게", c_en: ["at the guests", "during the event"], c_kor: ["손님들을 보고", "행사 동안"] },
    { vBase: "smile", s: "I", p: "부정", kor: { 현재:"미소 짓지 않는다.", 과거:"미소 짓지 않았다.", 미래:"미소 짓지 않을 것이다." }, s_kor: "나는", b_en: "naturally", b_kor: "자연스럽게", c_en: ["on camera", "during interviews"], c_kor: ["카메라 앞에서는", "인터뷰 중에"] },
    { vBase: "smile", s: "The girls", p: "의문", kor: { 현재:"미소 짓니?", 과거:"미소 지었니?", 미래:"미소 지을까?" }, s_kor: "소녀들이", b_en: "sweetly", b_kor: "달콤하게", c_en: ["at him", "in the garden"], c_kor: ["그를 보고", "정원에서"] },
    { vBase: "smile", s: "We", p: "긍정", kor: { 현재:"미소 짓는다.", 과거:"미소 지었다.", 미래:"미소 지을 것이다." }, s_kor: "우리는", b_en: "softly", b_kor: "부드럽게", c_en: ["to each other", "after the apology"], c_kor: ["서로에게", "사과한 후에"] },
    { vBase: "smile", s: "You", p: "부정", kor: { 현재:"미소 짓지 않는다.", 과거:"미소 짓지 않았다.", 미래:"미소 짓지 않을 것이다." }, s_kor: "너는", b_en: "a lot", b_kor: "많이", c_en: ["for any reason", "in front of him"], c_kor: ["어떤 이유에서든", "그의 앞에서는"] },
    { vBase: "smile", s: "My dad", p: "의문", kor: { 현재:"미소 지으시니?", 과거:"미소 지으셨니?", 미래:"미소 지으실까?" }, s_kor: "나의 아빠는", b_en: "broadly", b_kor: "환하게", c_en: ["at the news", "with great joy"], c_kor: ["그 소식에", "큰 기쁨으로"] },
    { vBase: "smile", s: "The teacher", p: "긍정", kor: { 현재:"미소 지으신다.", 과거:"미소 지으셨다.", 미래:"미소 지으실 것이다." }, s_kor: "선생님은", b_en: "proudly", b_kor: "자랑스럽게", c_en: ["at the students", "during graduation"], c_kor: ["학생들을 보고", "졸업식 동안"] },
    { vBase: "smile", s: "She", p: "부정", kor: { 현재:"미소 짓지 않는다.", 과거:"미소 짓지 않았다.", 미래:"미소 짓지 않을 것이다." }, s_kor: "그녀는", b_en: "back", b_kor: "다시(마주)", c_en: ["at me", "after the argument"], c_kor: ["나를 보고", "말다툼 후에"] },
    { vBase: "smile", s: "He", p: "의문", kor: { 현재:"미소 짓니?", 과거:"미소 지었니?", 미래:"미소 지을까?" }, s_kor: "그는", b_en: "bitterly", b_kor: "씁쓸하게", c_en: ["at the memory", "in silence"], c_kor: ["그 기억에", "침묵 속에서"] },
    { vBase: "smile", s: "They", p: "긍정", kor: { 현재:"미소 짓는다.", 과거:"미소 지었다.", 미래:"미소 지을 것이다." }, s_kor: "그들은", b_en: "kindly", b_kor: "친절하게", c_en: ["to strangers", "on the street"], c_kor: ["낯선 사람들에게", "거리에서"] },
    { vBase: "smile", s: "I", p: "부정", kor: { 현재:"미소 짓지 않는다.", 과거:"미소 짓지 않았다.", 미래:"미소 짓지 않을 것이다." }, s_kor: "나는", b_en: "falsely", b_kor: "거짓되게", c_en: ["in front of them", "during meetings"], c_kor: ["그들 앞에서는", "회의 중에"] },
    { vBase: "smile", s: "The actor", p: "의문", kor: { 현재:"미소 짓니?", 과거:"미소 지었니?", 미래:"미소 지을까?" }, s_kor: "그 배우는", b_en: "charmingly", b_kor: "매력적으로", c_en: ["at the fans", "on the red carpet"], c_kor: ["팬들을 보고", "레드카펫 위에서"] },
    { vBase: "smile", s: "We", p: "긍정", kor: { 현재:"미소 짓는다.", 과거:"미소 지었다.", 미래:"미소 지을 것이다." }, s_kor: "우리는", b_en: "wide", b_kor: "넓게 (활짝)", c_en: ["for the photo", "happily"], c_kor: ["사진을 위해", "행복하게"] },
    { vBase: "smile", s: "You", p: "부정", kor: { 현재:"미소 짓지 않는다.", 과거:"미소 짓지 않았다.", 미래:"미소 짓지 않을 것이다." }, s_kor: "너는", b_en: "sincerely", b_kor: "진심으로", c_en: ["at him", "during the conversation"], c_kor: ["그를 보고", "대화 동안에"] },
    { vBase: "smile", s: "The dog", p: "의문", kor: { 현재:"미소 짓니?", 과거:"미소 지었니?", 미래:"미소 지을까?" }, s_kor: "그 개는", b_en: "at its owner", b_kor: "주인을 보고", c_en: ["strangely", "like a human"], c_kor: ["이상하게도", "사람처럼"] },
    { vBase: "smile", s: "She", p: "긍정", kor: { 현재:"미소 짓는다.", 과거:"미소 지었다.", 미래:"미소 지을 것이다." }, s_kor: "그녀는", b_en: "with her eyes", b_kor: "눈으로", c_en: ["beautifully", "in the sunlight"], c_kor: ["아름답게", "햇빛 아래서"] },
    { vBase: "smile", s: "He", p: "부정", kor: { 현재:"미소 짓지 않는다.", 과거:"미소 짓지 않았다.", 미래:"미소 짓지 않을 것이다." }, s_kor: "그는", b_en: "at my joke", b_kor: "내 농담에", c_en: ["even once", "during the dinner"], c_kor: ["단 한 번도", "저녁 식사 동안"] },
    { vBase: "smile", s: "They", p: "의문", kor: { 현재:"미소 짓니?", 과거:"미소 지었니?", 미래:"미소 지을까?" }, s_kor: "그들은", b_en: "shyly", b_kor: "수줍게", c_en: ["at each other", "in the classroom"], c_kor: ["서로를 보고", "교실에서"] },
    { vBase: "smile", s: "I", p: "긍정", kor: { 현재:"미소 짓는다.", 과거:"미소 지었다.", 미래:"미소 지을 것이다." }, s_kor: "나는", b_en: "to myself", b_kor: "혼자서", c_en: ["in the mirror", "after waking up"], c_kor: ["거울을 보며", "잠에서 깬 후에"] },
    { vBase: "smile", s: "The babies", p: "부정", kor: { 현재:"미소 짓지 않는다.", 과거:"미소 짓지 않았다.", 미래:"미소 짓지 않을 것이다." }, s_kor: "아기들은", b_en: "easily", b_kor: "쉽게", c_en: ["at strangers", "in a new place"], c_kor: ["낯선 사람들에게", "새로운 장소에서"] },
    { vBase: "smile", s: "We", p: "의문", kor: { 현재:"미소 짓니?", 과거:"미소 지었니?", 미래:"미소 지을까?" }, s_kor: "우리가", b_en: "at the joke", b_kor: "그 농담에", c_en: ["for no reason", "in class"], c_kor: ["이유 없이", "수업 중에"] },
    { vBase: "smile", s: "You", p: "긍정", kor: { 현재:"미소 짓는다.", 과거:"미소 지었다.", 미래:"미소 지을 것이다." }, s_kor: "너는", b_en: "gently", b_kor: "부드럽게", c_en: ["at the child", "with love"], c_kor: ["아이를 보고", "사랑을 담아"] },
    { vBase: "smile", s: "She", p: "부정", kor: { 현재:"미소 짓지 않는다.", 과거:"미소 짓지 않았다.", 미래:"미소 짓지 않을 것이다." }, s_kor: "그녀는", b_en: "brightly", b_kor: "밝게", c_en: ["like before", "after the incident"], c_kor: ["예전처럼", "그 사건 이후로"] },
    { vBase: "smile", s: "He", p: "의문", kor: { 현재:"미소 짓니?", 과거:"미소 지었니?", 미래:"미소 지을까?" }, s_kor: "그가", b_en: "secretly", b_kor: "몰래", c_en: ["in the corner", "during the test"], c_kor: ["구석에서", "시험 중에"] },
    { vBase: "smile", s: "The receptionist", p: "긍정", kor: { 현재:"미소 짓는다.", 과거:"미소 지었다.", 미래:"미소 지을 것이다." }, s_kor: "접수원은", b_en: "at every visitor", b_kor: "모든 방문객에게", c_en: ["warmly", "all day"], c_kor: ["따뜻하게", "하루 종일"] },
    { vBase: "smile", s: "My brother", p: "부정", kor: { 현재:"미소 짓지 않는다.", 과거:"미소 짓지 않았다.", 미래:"미소 짓지 않을 것이다." }, s_kor: "내 남동생은", b_en: "back", b_kor: "마주", c_en: ["at strangers", "very easily"], c_kor: ["낯선 사람들에게", "아주 쉽게"] },
    { vBase: "smile", s: "She", p: "의문", kor: { 현재:"미소 짓니?", 과거:"미소 지었니?", 미래:"미소 지을까?" }, s_kor: "그녀는", b_en: "at you", b_kor: "너를 보고", c_en: ["in the hallway", "every time"], c_kor: ["복도에서", "매번"] }
  ];
        return processRawRows1(subjPlurals, TENSES, rawRows);
      })(),
      advanced: null,
      master:   null,
    },
stay: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The guests", "The students", "The tourists"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "stay", s: "I", p: "긍정", kor: { 현재:"머무른다.", 과거:"머물렀다.", 미래:"머무를 것이다." }, s_kor: "나는", b_en: "at home", b_kor: "집에", c_en: ["on weekends", "for rest"], c_kor: ["주말에는", "휴식을 위해"] },
    { vBase: "stay", s: "He", p: "부정", kor: { 현재:"머무르지 않는다.", 과거:"머무르지 않았다.", 미래:"머무르지 않을 것이다." }, s_kor: "그는", b_en: "here", b_kor: "여기에", c_en: ["for any reason", "after the fight"], c_kor: ["어떤 이유에서든", "싸운 이후로"] },
    { vBase: "stay", s: "They", p: "의문", kor: { 현재:"머무르니?", 과거:"머물렀니?", 미래:"머무를까?" }, s_kor: "그들은", b_en: "in the hotel", b_kor: "호텔에", c_en: ["during the trip", "for a week"], c_kor: ["여행 동안", "일주일 동안"] },
    { vBase: "stay", s: "She", p: "긍정", kor: { 현재:"머무른다.", 과거:"머물렀다.", 미래:"머무를 것이다." }, s_kor: "그녀는", b_en: "at the library", b_kor: "도서관에", c_en: ["after school", "for her studies"], c_kor: ["방과 후에", "학업을 위해"] },
    { vBase: "stay", s: "We", p: "부정", kor: { 현재:"머무르지 않는다.", 과거:"머무르지 않았다.", 미래:"머무르지 않을 것이다." }, s_kor: "우리는", b_en: "long", b_kor: "오래", c_en: ["at the party", "at all"], c_kor: ["파티에", "전혀"] },
    { vBase: "stay", s: "You", p: "의문", kor: { 현재:"머무르니?", 과거:"머물렀니?", 미래:"머무를까?" }, s_kor: "너는", b_en: "with us", b_kor: "우리와 함께", c_en: ["in the cabin", "safely"], c_kor: ["오두막에서", "안전하게"] },
    { vBase: "stay", s: "The dog", p: "긍정", kor: { 현재:"머무른다.", 과거:"머물렀다.", 미래:"머무를 것이다." }, s_kor: "그 개는", b_en: "inside", b_kor: "안에", c_en: ["in winter", "warmly"], c_kor: ["겨울에는", "따뜻하게"] },
    { vBase: "stay", s: "The guests", p: "부정", kor: { 현재:"머무르지 않는다.", 과거:"머무르지 않았다.", 미래:"머무르지 않을 것이다." }, s_kor: "손님들은", b_en: "for dinner", b_kor: "저녁 식사를 위해", c_en: ["after the event", "unfortunately"], c_kor: ["행사 후에는", "불행히도"] },
    { vBase: "stay", s: "My mom", p: "의문", kor: { 현재:"머무르시니?", 과거:"머무르셨니?", 미래:"머무르실까?" }, s_kor: "나의 엄마는", b_en: "in the hospital", b_kor: "병원에", c_en: ["for a week", "for recovery"], c_kor: ["일주일 동안", "회복을 위해"] },
    { vBase: "stay", s: "I", p: "긍정", kor: { 현재:"머무른다.", 과거:"머물렀다.", 미래:"머무를 것이다." }, s_kor: "나는", b_en: "at my desk", b_kor: "책상 앞에", c_en: ["all morning", "without a break"], c_kor: ["오전 내내", "쉬지 않고"] },
    { vBase: "stay", s: "He", p: "부정", kor: { 현재:"머무르지 않는다.", 과거:"머무르지 않았다.", 미래:"머무르지 않을 것이다." }, s_kor: "그는", b_en: "in the meeting room", b_kor: "회의실에", c_en: ["after lunch", "for any reason"], c_kor: ["점심 후에", "어떤 이유에서든"] },
    { vBase: "stay", s: "They", p: "의문", kor: { 현재:"머무르니?", 과거:"머물렀니?", 미래:"머무를까?" }, s_kor: "그들은", b_en: "behind", b_kor: "뒤에", c_en: ["after class", "for extra help"], c_kor: ["수업 후에", "추가 도움을 위해"] },
    { vBase: "stay", s: "She", p: "긍정", kor: { 현재:"머무른다.", 과거:"머물렀다.", 미래:"머무를 것이다." }, s_kor: "그녀는", b_en: "at the office", b_kor: "사무실에", c_en: ["for extra hours", "during busy seasons"], c_kor: ["초과 근무로", "바쁜 시즌 동안"] },
    { vBase: "stay", s: "We", p: "부정", kor: { 현재:"머무르지 않는다.", 과거:"머무르지 않았다.", 미래:"머무르지 않을 것이다." }, s_kor: "우리는", b_en: "in this town", b_kor: "이 마을에", c_en: ["during the harsh winter", "for sure"], c_kor: ["혹독한 겨울 동안", "확실히"] },
    { vBase: "stay", s: "You", p: "의문", kor: { 현재:"머무르니?", 과거:"머물렀니?", 미래:"머무를까?" }, s_kor: "너는", b_en: "at school", b_kor: "학교에", c_en: ["until the end", "on club days"], c_kor: ["끝까지", "동아리 활동이 있는 날에"] },
    { vBase: "stay", s: "The students", p: "긍정", kor: { 현재:"머무른다.", 과거:"머물렀다.", 미래:"머무를 것이다." }, s_kor: "그 학생들은", b_en: "late", b_kor: "늦게까지", c_en: ["at the library", "to study"], c_kor: ["도서관에", "공부하러"] },
    { vBase: "stay", s: "I", p: "부정", kor: { 현재:"머무르지 않는다.", 과거:"머무르지 않았다.", 미래:"머무르지 않을 것이다." }, s_kor: "나는", b_en: "in bed", b_kor: "침대에", c_en: ["all day", "despite the illness"], c_kor: ["하루 종일", "병에도 불구하고"] },
    { vBase: "stay", s: "He", p: "의문", kor: { 현재:"머무르니?", 과거:"머물렀니?", 미래:"머무를까?" }, s_kor: "그는", b_en: "out of trouble", b_kor: "말썽을 피우지 않고", c_en: ["at school", "without any issues"], c_kor: ["학교에서", "아무 문제 없이"] },
    { vBase: "stay", s: "They", p: "긍정", kor: { 현재:"머무른다.", 과거:"머물렀다.", 미래:"머무를 것이다." }, s_kor: "그들은", b_en: "near the river", b_kor: "강가에", c_en: ["on weekends", "for fishing"], c_kor: ["주말에", "낚시하러"] },
    { vBase: "stay", s: "She", p: "부정", kor: { 현재:"머무르지 않는다.", 과거:"머무르지 않았다.", 미래:"머무르지 않을 것이다." }, s_kor: "그녀는", b_en: "on the porch", b_kor: "현관에", c_en: ["after dark", "for any reason"], c_kor: ["어두워진 후에는", "어떤 이유에서든"] },
    { vBase: "stay", s: "We", p: "의문", kor: { 현재:"머무르니?", 과거:"머물렀니?", 미래:"머무를까?" }, s_kor: "우리가", b_en: "in this area", b_kor: "이 지역에", c_en: ["after graduation", "by choice"], c_kor: ["졸업 후에도", "선택에 의해"] },
    { vBase: "stay", s: "You", p: "긍정", kor: { 현재:"머무른다.", 과거:"머물렀다.", 미래:"머무를 것이다." }, s_kor: "너는", b_en: "out of sight", b_kor: "눈에 띄지 않게", c_en: ["in the dark", "quietly"], c_kor: ["어둠 속에서", "조용히"] },
    { vBase: "stay", s: "The cat", p: "부정", kor: { 현재:"머무르지 않는다.", 과거:"머무르지 않았다.", 미래:"머무르지 않을 것이다." }, s_kor: "그 고양이는", b_en: "by the window", b_kor: "창가에", c_en: ["for long", "at all"], c_kor: ["오래", "전혀"] },
    { vBase: "stay", s: "I", p: "의문", kor: { 현재:"머무르니?", 과거:"머물렀니?", 미래:"머무를까?" }, s_kor: "내가", b_en: "in touch", b_kor: "연락하고", c_en: ["with them", "regularly"], c_kor: ["그들과", "규칙적으로"] },
    { vBase: "stay", s: "He", p: "긍정", kor: { 현재:"머무른다.", 과거:"머물렀다.", 미래:"머무를 것이다." }, s_kor: "그는", b_en: "at the front desk", b_kor: "안내 데스크에", c_en: ["during his shift", "with a smile"], c_kor: ["근무 시간에", "미소와 함께"] },
    { vBase: "stay", s: "They", p: "부정", kor: { 현재:"머무르지 않는다.", 과거:"머무르지 않았다.", 미래:"머무르지 않을 것이다." }, s_kor: "그들은", b_en: "in the sun", b_kor: "햇볕 아래에", c_en: ["too long", "in summer"], c_kor: ["너무 오래", "여름에는"] },
    { vBase: "stay", s: "She", p: "의문", kor: { 현재:"머무르니?", 과거:"머물렀니?", 미래:"머무를까?" }, s_kor: "그녀가", b_en: "on track", b_kor: "궤도에 (계획대로)", c_en: ["with the project", "despite the difficulties"], c_kor: ["프로젝트와 함께", "어려움에도 불구하고"] },
    { vBase: "stay", s: "The tourists", p: "긍정", kor: { 현재:"머무른다.", 과거:"머물렀다.", 미래:"머무를 것이다." }, s_kor: "관광객들은", b_en: "at the beachside hotel", b_kor: "해변가 호텔에", c_en: ["with their families", "for a week"], c_kor: ["그들의 가족과 함께", "일주일 동안"] },
    { vBase: "stay", s: "My friend", p: "부정", kor: { 현재:"머무르지 않는다.", 과거:"머무르지 않았다.", 미래:"머무르지 않을 것이다." }, s_kor: "내 친구는", b_en: "after school", b_kor: "방과 후에", c_en: ["in the classroom", "for long"], c_kor: ["교실에서", "오랫동안"] },
    { vBase: "stay", s: "He", p: "의문", kor: { 현재:"머무르니?", 과거:"머물렀니?", 미래:"머무를까?" }, s_kor: "그는", b_en: "at the office", b_kor: "사무실에", c_en: ["after hours", "on Friday nights"], c_kor: ["근무 시간 외에", "금요일 밤마다"] }
  ];
        return processRawRows1(subjPlurals, TENSES, rawRows);
      })(),
      advanced: null,
      master:   null,
    },
arrive: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The packages", "The members", "The guests"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "arrive", s: "The train", p: "긍정", kor: { 현재:"도착한다.", 과거:"도착했다.", 미래:"도착할 것이다." }, s_kor: "기차가", b_en: "at the station", b_kor: "역에", c_en: ["on time", "during the morning"], c_kor: ["제시간에", "아침에"] },
    { vBase: "arrive", s: "She", p: "부정", kor: { 현재:"도착하지 않는다.", 과거:"도착하지 않았다.", 미래:"도착하지 않을 것이다." }, s_kor: "그녀는", b_en: "early", b_kor: "일찍", c_en: ["for the meeting", "without exception"], c_kor: ["회의에", "예외 없이"] },
    { vBase: "arrive", s: "He", p: "의문", kor: { 현재:"도착하니?", 과거:"도착했니?", 미래:"도착할까?" }, s_kor: "그는", b_en: "safely", b_kor: "안전하게", c_en: ["in London", "after the long flight"], c_kor: ["런던에", "긴 비행 후에"] },
    { vBase: "arrive", s: "They", p: "긍정", kor: { 현재:"도착한다.", 과거:"도착했다.", 미래:"도착할 것이다." }, s_kor: "그들은", b_en: "here", b_kor: "여기에", c_en: ["by bus", "in the afternoon"], c_kor: ["버스를 타고", "오후에"] },
    { vBase: "arrive", s: "We", p: "부정", kor: { 현재:"도착하지 않는다.", 과거:"도착하지 않았다.", 미래:"도착하지 않을 것이다." }, s_kor: "우리는", b_en: "late", b_kor: "늦게", c_en: ["at the party", "at all"], c_kor: ["파티에", "전혀"] },
    { vBase: "arrive", s: "The package", p: "의문", kor: { 현재:"도착하니?", 과거:"도착했니?", 미래:"도착할까?" }, s_kor: "그 소포는", b_en: "on time", b_kor: "제시간에", c_en: ["at the door", "safely"], c_kor: ["문 앞에", "안전하게"] },
    { vBase: "arrive", s: "You", p: "긍정", kor: { 현재:"도착한다.", 과거:"도착했다.", 미래:"도착할 것이다." }, s_kor: "너는", b_en: "first", b_kor: "가장 먼저", c_en: ["at the office", "every morning"], c_kor: ["사무실에", "매일 아침"] },
    { vBase: "arrive", s: "I", p: "부정", kor: { 현재:"도착하지 않는다.", 과거:"도착하지 않았다.", 미래:"도착하지 않을 것이다." }, s_kor: "나는", b_en: "before noon", b_kor: "정오 전에", c_en: ["there", "during the week"], c_kor: ["그곳에", "평일에"] },
    { vBase: "arrive", s: "The bus", p: "의문", kor: { 현재:"도착하니?", 과거:"도착했니?", 미래:"도착할까?" }, s_kor: "그 버스는", b_en: "at the stop", b_kor: "정류장에", c_en: ["with passengers", "during rush hour"], c_kor: ["승객들과 함께", "혼잡한 시간대에"] },
    { vBase: "arrive", s: "The members", p: "긍정", kor: { 현재:"도착한다.", 과거:"도착했다.", 미래:"도착할 것이다." }, s_kor: "회원들이", b_en: "one by one", b_kor: "한 명씩", c_en: ["at the hall", "slowly"], c_kor: ["홀에", "천천히"] },
    { vBase: "arrive", s: "She", p: "부정", kor: { 현재:"도착하지 않는다.", 과거:"도착하지 않았다.", 미래:"도착하지 않을 것이다." }, s_kor: "그녀는", b_en: "empty-handed", b_kor: "빈손으로", c_en: ["at my house", "at any time"], c_kor: ["우리 집에", "어느 때라도"] },
    { vBase: "arrive", s: "They", p: "의문", kor: { 현재:"도착하니?", 과거:"도착했니?", 미래:"도착할까?" }, s_kor: "그들이", b_en: "in time", b_kor: "제시간에", c_en: ["for the show", "despite the traffic"], c_kor: ["공연을 위해", "교통 체증에도 불구하고"] },
    { vBase: "arrive", s: "The flight", p: "긍정", kor: { 현재:"도착한다.", 과거:"도착했다.", 미래:"도착할 것이다." }, s_kor: "그 비행기는", b_en: "at gate 5", b_kor: "5번 게이트로", c_en: ["smoothly", "after the delay"], c_kor: ["부드럽게", "지연 후에"] },
    { vBase: "arrive", s: "He", p: "부정", kor: { 현재:"도착하지 않는다.", 과거:"도착하지 않았다.", 미래:"도착하지 않을 것이다." }, s_kor: "그는", b_en: "with us", b_kor: "우리와 함께", c_en: ["at the hotel", "for any reason"], c_kor: ["호텔에", "어떤 이유에서든"] },
    { vBase: "arrive", s: "We", p: "의문", kor: { 현재:"도착하니?", 과거:"도착했니?", 미래:"도착할까?" }, s_kor: "우리가", b_en: "at the destination", b_kor: "목적지에", c_en: ["before dark", "without a map"], c_kor: ["어두워지기 전에", "지도 없이"] },
    { vBase: "arrive", s: "The letter", p: "긍정", kor: { 현재:"도착한다.", 과거:"도착했다.", 미래:"도착할 것이다." }, s_kor: "그 편지는", b_en: "in the mail", b_kor: "우편으로", c_en: ["finally", "to me"], c_kor: ["마침내", "나에게"] },
    { vBase: "arrive", s: "You", p: "부정", kor: { 현재:"도착하지 않는다.", 과거:"도착하지 않았다.", 미래:"도착하지 않을 것이다." }, s_kor: "너는", b_en: "unnoticed", b_kor: "눈에 띄지 않게", c_en: ["at the event", "at all"], c_kor: ["행사장에", "전혀"] },
    { vBase: "arrive", s: "I", p: "의문", kor: { 현재:"도착하니?", 과거:"도착했니?", 미래:"도착할까?" }, s_kor: "내가", b_en: "too early", b_kor: "너무 일찍", c_en: ["for dinner", "by mistake"], c_kor: ["저녁 식사에", "실수로"] },
    { vBase: "arrive", s: "They", p: "긍정", kor: { 현재:"도착한다.", 과거:"도착했다.", 미래:"도착할 것이다." }, s_kor: "그들은", b_en: "at a conclusion", b_kor: "결론에", c_en: ["after discussion", "eventually"], c_kor: ["토론 후에", "결국에"] },
    { vBase: "arrive", s: "She", p: "부정", kor: { 현재:"도착하지 않는다.", 과거:"도착하지 않았다.", 미래:"도착하지 않을 것이다." }, s_kor: "그녀는", b_en: "by train", b_kor: "기차로", c_en: ["for her commute", "in this city"], c_kor: ["통근을 위해", "이 도시에서는"] },
    { vBase: "arrive", s: "He", p: "의문", kor: { 현재:"도착하니?", 과거:"도착했니?", 미래:"도착할까?" }, s_kor: "그가", b_en: "at the airport", b_kor: "공항에", c_en: ["safely", "with his luggage"], c_kor: ["안전하게", "그의 짐과 함께"] },
    { vBase: "arrive", s: "The packages", p: "긍정", kor: { 현재:"도착한다.", 과거:"도착했다.", 미래:"도착할 것이다." }, s_kor: "소포들이", b_en: "damaged", b_kor: "파손된 채로", c_en: ["by accident", "in the mail"], c_kor: ["우연히", "우편에서"] },
    { vBase: "arrive", s: "We", p: "부정", kor: { 현재:"도착하지 않는다.", 과거:"도착하지 않았다.", 미래:"도착하지 않을 것이다." }, s_kor: "우리는", b_en: "at the summit", b_kor: "정상에", c_en: ["easily", "without effort"], c_kor: ["쉽게", "노력 없이는"] },
    { vBase: "arrive", s: "You", p: "의문", kor: { 현재:"도착하니?", 과거:"도착했니?", 미래:"도착할까?" }, s_kor: "너는", b_en: "home", b_kor: "집에", c_en: ["after midnight", "on weekends"], c_kor: ["자정 이후에", "주말마다"] },
    { vBase: "arrive", s: "I", p: "긍정", kor: { 현재:"도착한다.", 과거:"도착했다.", 미래:"도착할 것이다." }, s_kor: "나는", b_en: "at the truth", b_kor: "진실에", c_en: ["in the end", "clearly"], c_kor: ["결국에는", "분명하게"] },
    { vBase: "arrive", s: "They", p: "부정", kor: { 현재:"도착하지 않는다.", 과거:"도착하지 않았다.", 미래:"도착하지 않을 것이다." }, s_kor: "그들은", b_en: "on the scene", b_kor: "현장에", c_en: ["quickly enough", "at all"], c_kor: ["충분히 빠르게", "전혀"] },
    { vBase: "arrive", s: "She", p: "의문", kor: { 현재:"도착하니?", 과거:"도착했니?", 미래:"도착할까?" }, s_kor: "그녀가", b_en: "in Paris", b_kor: "파리에", c_en: ["in the morning", "safely"], c_kor: ["아침에", "안전하게"] },
    { vBase: "arrive", s: "The mail carrier", p: "긍정", kor: { 현재:"도착한다.", 과거:"도착했다.", 미래:"도착할 것이다." }, s_kor: "집배원은", b_en: "at the door", b_kor: "문 앞에", c_en: ["before 10 a.m.", "every day"], c_kor: ["오전 10시 전에", "매일"] },
    { vBase: "arrive", s: "The guests", p: "부정", kor: { 현재:"도착하지 않는다.", 과거:"도착하지 않았다.", 미래:"도착하지 않을 것이다." }, s_kor: "손님들은", b_en: "at events", b_kor: "행사장에", c_en: ["early", "as a rule"], c_kor: ["일찍", "원칙적으로"] },
    { vBase: "arrive", s: "The ambulance", p: "의문", kor: { 현재:"도착하니?", 과거:"도착했니?", 미래:"도착할까?" }, s_kor: "구급차는", b_en: "at the scene", b_kor: "현장에", c_en: ["quickly", "every time"], c_kor: ["신속하게", "매번"] }
  ];
        return processRawRows1(subjPlurals, TENSES, rawRows);
      })(),
      advanced: null,
      master:   null,
    },
happen: {
      standard: (() => {
        const subjPlurals = ["Accidents", "These things", "Miracles", "Changes", "Good things"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "happen", s: "The accident", p: "긍정", kor: { 현재:"일어난다.", 과거:"일어났다.", 미래:"일어날 것이다." }, s_kor: "그 사고가", b_en: "suddenly", b_kor: "갑자기", c_en: ["on the street", "during the rush hour"], c_kor: ["거리에서", "출퇴근 시간에"] },
    { vBase: "happen", s: "It", p: "부정", kor: { 현재:"일어나지 않는다.", 과거:"일어나지 않았다.", 미래:"일어나지 않을 것이다." }, s_kor: "그 일은", b_en: "easily", b_kor: "쉽게", c_en: ["in this town", "without a reason"], c_kor: ["이 마을에서", "이유 없이"] },
    { vBase: "happen", s: "A miracle", p: "의문", kor: { 현재:"일어나니?", 과거:"일어났니?", 미래:"일어날까?" }, s_kor: "기적이", b_en: "here", b_kor: "여기서", c_en: ["unexpectedly", "in this world"], c_kor: ["예상치 못하게", "이 세상에서"] },
    { vBase: "happen", s: "These things", p: "긍정", kor: { 현재:"일어난다.", 과거:"일어났다.", 미래:"일어날 것이다." }, s_kor: "이런 일들이", b_en: "for a reason", b_kor: "이유가 있어서", c_en: ["in life", "without fail"], c_kor: ["인생에서", "어김없이"] },
    { vBase: "happen", s: "The error", p: "부정", kor: { 현재:"발생하지 않는다.", 과거:"발생하지 않았다.", 미래:"발생하지 않을 것이다." }, s_kor: "그 오류가", b_en: "twice", b_kor: "두 번은", c_en: ["in the system", "at all"], c_kor: ["시스템에서", "전혀"] },
    { vBase: "happen", s: "Changes", p: "의문", kor: { 현재:"일어나니?", 과거:"일어났니?", 미래:"일어날까?" }, s_kor: "변화들이", b_en: "fast", b_kor: "빠르게", c_en: ["in the world", "due to technology"], c_kor: ["세상에서", "기술 때문에"] },
    { vBase: "happen", s: "The event", p: "긍정", kor: { 현재:"열린다.", 과거:"열렸다.", 미래:"열릴 것이다." }, s_kor: "그 행사가", b_en: "annually", b_kor: "매년", c_en: ["in Seoul", "successfully"], c_kor: ["서울에서", "성공적으로"] },
    { vBase: "happen", s: "It", p: "부정", kor: { 현재:"일어나지 않는다.", 과거:"일어나지 않았다.", 미래:"일어나지 않을 것이다." }, s_kor: "그 일은", b_en: "to me", b_kor: "나에게는", c_en: ["in general", "in reality"], c_kor: ["일반적으로", "현실에서"] },
    { vBase: "happen", s: "Accidents", p: "의문", kor: { 현재:"일어나니?", 과거:"일어났니?", 미래:"일어날까?" }, s_kor: "사고들이", b_en: "easily", b_kor: "쉽게", c_en: ["on this road", "during winter"], c_kor: ["이 도로에서", "겨울 동안"] },
    { vBase: "happen", s: "The magic", p: "긍정", kor: { 현재:"일어난다.", 과거:"일어났다.", 미래:"일어날 것이다." }, s_kor: "마법이", b_en: "in the dark", b_kor: "어둠 속에서", c_en: ["quietly", "to us"], c_kor: ["조용히", "우리에게"] },
    { vBase: "happen", s: "This issue", p: "부정", kor: { 현재:"발생하지 않는다.", 과거:"발생하지 않았다.", 미래:"발생하지 않을 것이다." }, s_kor: "이 문제가", b_en: "without a cause", b_kor: "원인 없이", c_en: ["at all", "under normal conditions"], c_kor: ["전혀", "정상적인 조건 하에서는"] },
    { vBase: "happen", s: "Miracles", p: "의문", kor: { 현재:"일어나니?", 과거:"일어났니?", 미래:"일어날까?" }, s_kor: "기적들이", b_en: "to good people", b_kor: "좋은 사람들에게", c_en: ["quite a lot", "in our lives"], c_kor: ["아주 많이", "우리의 삶에서"] },
    { vBase: "happen", s: "The meeting", p: "긍정", kor: { 현재:"열린다.", 과거:"열렸다.", 미래:"열릴 것이다." }, s_kor: "그 회의가", b_en: "in room 3", b_kor: "3번 방에서", c_en: ["as planned", "without any delay"], c_kor: ["계획대로", "아무런 지연 없이"] },
    { vBase: "happen", s: "It", p: "부정", kor: { 현재:"일어나지 않는다.", 과거:"일어나지 않았다.", 미래:"일어나지 않을 것이다." }, s_kor: "그 일은", b_en: "suddenly", b_kor: "갑자기", c_en: ["in the real world", "for any reason"], c_kor: ["현실 세계에서", "어떤 이유에서든"] },
    { vBase: "happen", s: "The worst", p: "의문", kor: { 현재:"일어나니?", 과거:"일어났니?", 미래:"일어날까?" }, s_kor: "최악의 상황이", b_en: "unexpectedly", b_kor: "예상치 못하게", c_en: ["without warning", "in real life"], c_kor: ["경고 없이", "현실에서"] },
    { vBase: "happen", s: "Something bad", p: "긍정", kor: { 현재:"일어난다.", 과거:"일어났다.", 미래:"일어날 것이다." }, s_kor: "나쁜 일이", b_en: "to him", b_kor: "그에게", c_en: ["unexpectedly", "on unlucky days"], c_kor: ["예상치 못하게", "운이 나쁜 날에"] },
    { vBase: "happen", s: "The delay", p: "부정", kor: { 현재:"발생하지 않는다.", 과거:"발생하지 않았다.", 미래:"발생하지 않을 것이다." }, s_kor: "그 지연이", b_en: "on purpose", b_kor: "고의로", c_en: ["at all", "in our team"], c_kor: ["전혀", "우리 팀에서"] },
    { vBase: "happen", s: "It", p: "의문", kor: { 현재:"일어나니?", 과거:"일어났니?", 미래:"일어날까?" }, s_kor: "그 일이", b_en: "like magic", b_kor: "마법처럼", c_en: ["in front of you", "like a dream"], c_kor: ["너의 눈앞에서", "꿈처럼"] },
    { vBase: "happen", s: "The earthquake", p: "긍정", kor: { 현재:"발생한다.", 과거:"발생했다.", 미래:"발생할 것이다." }, s_kor: "지진이", b_en: "under the sea", b_kor: "바다 밑에서", c_en: ["silently", "deep underground"], c_kor: ["조용히", "깊은 지하에서"] },
    { vBase: "happen", s: "This", p: "부정", kor: { 현재:"일어나지 않는다.", 과거:"일어나지 않았다.", 미래:"일어나지 않을 것이다." }, s_kor: "이 일은", b_en: "to everyone", b_kor: "모두에게", c_en: ["equally", "in life"], c_kor: ["공평하게", "인생에서"] },
    { vBase: "happen", s: "A mistake", p: "의문", kor: { 현재:"발생하니?", 과거:"발생했니?", 미래:"발생할까?" }, s_kor: "실수가", b_en: "in the process", b_kor: "그 과정에서", c_en: ["easily", "due to carelessness"], c_kor: ["쉽게", "부주의 때문에"] },
    { vBase: "happen", s: "Good things", p: "긍정", kor: { 현재:"일어난다.", 과거:"일어났다.", 미래:"일어날 것이다." }, s_kor: "좋은 일들이", b_en: "to those who wait", b_kor: "기다리는 자에게", c_en: ["eventually", "in life"], c_kor: ["결국에는", "인생에서"] },
    { vBase: "happen", s: "It", p: "부정", kor: { 현재:"일어나지 않는다.", 과거:"일어나지 않았다.", 미래:"일어나지 않을 것이다." }, s_kor: "그 일은", b_en: "by chance", b_kor: "우연히", c_en: ["at all", "in nature"], c_kor: ["전혀", "자연에서"] },
    { vBase: "happen", s: "The fight", p: "의문", kor: { 현재:"일어나니?", 과거:"일어났니?", 미래:"일어날까?" }, s_kor: "그 싸움이", b_en: "over nothing", b_kor: "아무것도 아닌 일로", c_en: ["between them", "over small issues"], c_kor: ["그들 사이에서", "사소한 문제로"] },
    { vBase: "happen", s: "A change", p: "긍정", kor: { 현재:"일어난다.", 과거:"일어났다.", 미래:"일어날 것이다." }, s_kor: "변화가", b_en: "from within", b_kor: "내면으로부터", c_en: ["slowly", "over time"], c_kor: ["천천히", "시간이 지나며"] },
    { vBase: "happen", s: "It", p: "부정", kor: { 현재:"일어나지 않는다.", 과거:"일어나지 않았다.", 미래:"일어나지 않을 것이다." }, s_kor: "그 일은", b_en: "in my presence", b_kor: "내 앞에서는", c_en: ["for any reason", "sadly"], c_kor: ["어떤 이유에서든", "슬프게도"] },
    { vBase: "happen", s: "The crash", p: "의문", kor: { 현재:"발생하니?", 과거:"발생했니?", 미래:"발생할까?" }, s_kor: "그 충돌이", b_en: "on the highway", b_kor: "고속도로에서", c_en: ["unexpectedly", "during heavy rain"], c_kor: ["예상치 못하게", "폭우가 내리는 동안"] },
    { vBase: "happen", s: "Accidents", p: "긍정", kor: { 현재:"일어난다.", 과거:"일어났다.", 미래:"일어날 것이다." }, s_kor: "사고는", b_en: "at intersections", b_kor: "교차로에서", c_en: ["without warning", "during heavy rain"], c_kor: ["경고 없이", "폭우가 내리는 동안"] },
    { vBase: "happen", s: "Good things", p: "부정", kor: { 현재:"일어나지 않는다.", 과거:"일어나지 않았다.", 미래:"일어나지 않을 것이다." }, s_kor: "좋은 일들은", b_en: "in real life", b_kor: "현실 세계에서", c_en: ["by chance", "without hard work"], c_kor: ["우연히", "열심히 노력하지 않고는"] },
    { vBase: "happen", s: "These things", p: "의문", kor: { 현재:"일어나니?", 과거:"일어났니?", 미래:"일어날까?" }, s_kor: "이와 같은 일들이", b_en: "around the world", b_kor: "전 세계적으로", c_en: ["during a massive crisis", "without fail"], c_kor: ["거대한 위기 동안", "어김없이"] }
  ];
        return processRawRows1(subjPlurals, TENSES, rawRows);
      })(),
      advanced: null,
      master:   null,
    },
there_be: {
      standard: (() => {
        const subjPlurals = ["Many people", "Some books", "Any dogs", "Problems", "Changes", "Many cars", "A lot of students", "Many stores", "Two people", "Many fish"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "be", s: "a book", p: "긍정", kor: { 현재:"있다.", 과거:"있었다.", 미래:"있을 것이다." }, s_kor: "책 한 권이", b_en: "on the desk", b_kor: "책상 위에", c_en: ["for you", "without a doubt"], c_kor: ["너를 위해", "의심의 여지 없이"] },
    { vBase: "be", s: "Many people", p: "부정", kor: { 현재:"없다.", 과거:"없었다.", 미래:"없을 것이다." }, s_kor: "많은 사람들이", b_en: "in the room", b_kor: "방 안에", c_en: ["in the morning", "at all"], c_kor: ["아침에는", "전혀"] },
    { vBase: "be", s: "an apple", p: "의문", kor: { 현재:"있니?", 과거:"있었니?", 미래:"있을까?" }, s_kor: "사과 한 개가", b_en: "in the box", b_kor: "상자 안에", c_en: ["for sure", "in the basket"], c_kor: ["확실히", "바구니 안에"] },
    { vBase: "be", s: "a problem", p: "긍정", kor: { 현재:"있다.", 과거:"있었다.", 미래:"있을 것이다." }, s_kor: "문제가 하나", b_en: "with the system", b_kor: "시스템에", c_en: ["in the design", "unfortunately"], c_kor: ["설계상에", "불행히도"] },
    { vBase: "be", s: "Any dogs", p: "부정", kor: { 현재:"없다.", 과거:"없었다.", 미래:"없을 것이다." }, s_kor: "어떤 개들도", b_en: "in the yard", b_kor: "마당에", c_en: ["at all", "during the winter"], c_kor: ["전혀", "겨울 동안에는"] },
    { vBase: "be", s: "a doctor", p: "의문", kor: { 현재:"있니?", 과거:"있었니?", 미래:"있을까?" }, s_kor: "의사가 한 명", b_en: "in the hospital", b_kor: "병원에", c_en: ["on duty", "for emergencies"], c_kor: ["근무 중인", "응급 상황을 위해"] },
    { vBase: "be", s: "Some books", p: "긍정", kor: { 현재:"있다.", 과거:"있었다.", 미래:"있을 것이다." }, s_kor: "몇 권의 책들이", b_en: "on the shelf", b_kor: "선반 위에", c_en: ["covered in dust", "for a long time"], c_kor: ["먼지가 쌓인 채", "오랫동안"] },
    { vBase: "be", s: "a reason", p: "부정", kor: { 현재:"없다.", 과거:"없었다.", 미래:"없을 것이다." }, s_kor: "이유가", b_en: "for the delay", b_kor: "그 지연에 대한", c_en: ["at all", "in reality"], c_kor: ["전혀", "실제로는"] },
    { vBase: "be", s: "Many cars", p: "의문", kor: { 현재:"있니?", 과거:"있었니?", 미래:"있을까?" }, s_kor: "많은 차들이", b_en: "on the street", b_kor: "거리에", c_en: ["during rush hour", "in the city"], c_kor: ["출퇴근 시간에", "도시의"] },
    { vBase: "be", s: "a cat", p: "긍정", kor: { 현재:"있다.", 과거:"있었다.", 미래:"있을 것이다." }, s_kor: "고양이 한 마리가", b_en: "under the table", b_kor: "테이블 아래에", c_en: ["quietly", "sleeping"], c_kor: ["조용히", "잠들어"] },
    { vBase: "be", s: "Problems", p: "부정", kor: { 현재:"없다.", 과거:"없었다.", 미래:"없을 것이다." }, s_kor: "문제들이", b_en: "between us", b_kor: "우리 사이에", c_en: ["for any reason", "after talking"], c_kor: ["어떤 이유에서든", "대화 후에"] },
    { vBase: "be", s: "a message", p: "의문", kor: { 현재:"있니?", 과거:"있었니?", 미래:"있을까?" }, s_kor: "메시지가", b_en: "for me", b_kor: "나를 위한", c_en: ["on the phone", "for confirmation"], c_kor: ["전화기에", "확인을 위한"] },
    { vBase: "be", s: "A lot of students", p: "긍정", kor: { 현재:"있다.", 과거:"있었다.", 미래:"있을 것이다." }, s_kor: "많은 학생들이", b_en: "in the library", b_kor: "도서관에", c_en: ["for exams", "during the finals"], c_kor: ["시험을 위해", "기말고사 기간 동안"] },
    { vBase: "be", s: "a cloud", p: "부정", kor: { 현재:"없다.", 과거:"없었다.", 미래:"없을 것이다." }, s_kor: "구름 한 점이", b_en: "in the sky", b_kor: "하늘에", c_en: ["at all", "in the clear sky"], c_kor: ["전혀", "맑은 하늘에는"] },
    { vBase: "be", s: "Changes", p: "의문", kor: { 현재:"있니?", 과거:"있었니?", 미래:"있을까?" }, s_kor: "변화들이", b_en: "in the plan", b_kor: "계획에", c_en: ["due to the weather", "without notice"], c_kor: ["날씨 때문에", "사전 공지 없이"] },
    { vBase: "be", s: "a hospital", p: "긍정", kor: { 현재:"있다.", 과거:"있었다.", 미래:"있을 것이다." }, s_kor: "병원이 하나", b_en: "near here", b_kor: "이 근처에", c_en: ["conveniently", "open 24 hours"], c_kor: ["편리하게", "24시간 열려"] },
    { vBase: "be", s: "Many stores", p: "부정", kor: { 현재:"없다.", 과거:"없었다.", 미래:"없을 것이다." }, s_kor: "많은 가게들이", b_en: "open", b_kor: "열려", c_en: ["at night", "in this town"], c_kor: ["밤에는", "이 마을에서"] },
    { vBase: "be", s: "a mistake", p: "의문", kor: { 현재:"있니?", 과거:"있었니?", 미래:"있을까?" }, s_kor: "실수가 하나", b_en: "in the report", b_kor: "보고서에", c_en: ["in the final draft", "without a doubt"], c_kor: ["최종본에", "틀림없이"] },
    { vBase: "be", s: "a key", p: "긍정", kor: { 현재:"있다.", 과거:"있었다.", 미래:"있을 것이다." }, s_kor: "열쇠 하나가", b_en: "under the mat", b_kor: "매트 아래에", c_en: ["safely", "hidden"], c_kor: ["안전하게", "숨겨져"] },
    { vBase: "be", s: "Two people", p: "부정", kor: { 현재:"없다.", 과거:"없었다.", 미래:"없을 것이다." }, s_kor: "두 사람이", b_en: "waiting", b_kor: "기다리고", c_en: ["for you", "in the lobby"], c_kor: ["너를 위해", "로비에서"] },
    { vBase: "be", s: "a chance", p: "의문", kor: { 현재:"있니?", 과거:"있었니?", 미래:"있을까?" }, s_kor: "기회가 하나", b_en: "for me", b_kor: "나를 위한", c_en: ["in this game", "for a comeback"], c_kor: ["이 게임에서", "역전을 위한"] },
    { vBase: "be", s: "a hole", p: "긍정", kor: { 현재:"있다.", 과거:"있었다.", 미래:"있을 것이다." }, s_kor: "구멍 하나가", b_en: "in the wall", b_kor: "벽에", c_en: ["near the window", "surprisingly big"], c_kor: ["창문 근처에", "놀라울 정도로 크게"] },
    { vBase: "be", s: "Some water", p: "부정", kor: { 현재:"없다.", 과거:"없었다.", 미래:"없을 것이다." }, s_kor: "약간의 물이", b_en: "in the glass", b_kor: "유리잔에", c_en: ["left", "at all"], c_kor: ["남아", "전혀"] },
    { vBase: "be", s: "a noise", p: "의문", kor: { 현재:"있니?", 과거:"있었니?", 미래:"있을까?" }, s_kor: "소음이 하나", b_en: "outside", b_kor: "바깥에", c_en: ["strange", "in the dark"], c_kor: ["이상하게", "어둠 속에서"] },
    { vBase: "be", s: "a solution", p: "긍정", kor: { 현재:"있다.", 과거:"있었다.", 미래:"있을 것이다." }, s_kor: "해결책이 하나", b_en: "to every problem", b_kor: "모든 문제에 대한", c_en: ["somewhere", "for sure"], c_kor: ["어딘가에", "확실히"] },
    { vBase: "be", s: "Many fish", p: "부정", kor: { 현재:"없다.", 과거:"없었다.", 미래:"없을 것이다." }, s_kor: "많은 물고기가", b_en: "in the river", b_kor: "강에", c_en: ["in the deep water", "due to pollution"], c_kor: ["깊은 물 속에", "오염 때문에"] },
    { vBase: "be", s: "a meeting", p: "의문", kor: { 현재:"있니?", 과거:"있었니?", 미래:"있을까?" }, s_kor: "회의가 하나", b_en: "at 3 PM", b_kor: "오후 3시에", c_en: ["after lunch", "in room A"], c_kor: ["점심 식사 후에", "A방에서"] },
    { vBase: "be", s: "a long line", p: "긍정", kor: { 현재:"있다.", 과거:"있었다.", 미래:"있을 것이다." }, s_kor: "긴 줄이", b_en: "at the entrance", b_kor: "입구에", c_en: ["during rush hour", "as expected"], c_kor: ["혼잡한 시간대에는", "예상대로"] },
    { vBase: "be", s: "enough time", p: "부정", kor: { 현재:"없다.", 과거:"없었다.", 미래:"없을 것이다." }, s_kor: "충분한 시간이", b_en: "for the project", b_kor: "프로젝트를 위한", c_en: ["under the current schedule", "unfortunately"], c_kor: ["현재 일정상으로는", "안타깝게도"] },
    { vBase: "be", s: "a solution", p: "의문", kor: { 현재:"있니?", 과거:"있었니?", 미래:"있을까?" }, s_kor: "해결책이", b_en: "to this problem", b_kor: "이 문제에 대한", c_en: ["in the textbook", "at all"], c_kor: ["교과서에", "조금이라도"] }
  ];
        return processRawRows1(subjPlurals, TENSES, rawRows, { isThereBe: true });
      })(),
      advanced: null,
      master:   null,
    },
  };
})();
