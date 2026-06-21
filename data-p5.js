// WGT 5형식 데이터 — 원본 HTML에서 자동 추출
// VERB_DATA[5] 를 초기화한다.
(function() {
  if (!window.VERB_DATA) window.VERB_DATA = {};
  window.VERB_DATA[5] = {
    see: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The girls", "The kids", "The fans"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
        // 긍정문 (9문항)
        { vBase: "see", s: "I", p: "긍정", o: "the dog", o_kor: "그 개가", oc: "running fast", oc_kor: "빠르게 달리는 것을", kor: { 현재:"본다.", 과거:"보았다.", 미래:"볼 것이다." }, s_kor: "나는", b_en: "in the park", b_kor: "공원에서", c_en: ["at this moment"], c_kor: ["이 순간에"] },
        { vBase: "see", s: "She", p: "긍정", o: "the bus", o_kor: "버스가", oc: "leaving the station", oc_kor: "역을 떠나는 것을", kor: { 현재:"본다.", 과거:"보았다.", 미래:"볼 것이다." }, s_kor: "그녀는", b_en: "from a distance", b_kor: "멀리서", c_en: ["too late"], c_kor: ["너무 늦게"] },
        { vBase: "see", s: "He", p: "긍정", o: "the artist", o_kor: "화가가", oc: "painting a portrait", oc_kor: "초상화를 그리는 것을", kor: { 현재:"본다.", 과거:"보았다.", 미래:"볼 것이다." }, s_kor: "그는", b_en: "in the studio", b_kor: "작업실에서", c_en: ["with great interest"], c_kor: ["큰 관심을 가지고"] },
        { vBase: "see", s: "They", p: "긍정", o: "the kids", o_kor: "아이들이", oc: "playing soccer", oc_kor: "축구하는 것을", kor: { 현재:"본다.", 과거:"보았다.", 미래:"볼 것이다." }, s_kor: "그들은", b_en: "in the playground", b_kor: "운동장에서", c_en: ["every afternoon"], c_kor: ["매일 오후에"] },
        { vBase: "see", s: "We", p: "긍정", o: "the plane", o_kor: "비행기가", oc: "landing on the runway", oc_kor: "활주로에 착륙하는 것을", kor: { 현재:"본다.", 과거:"보았다.", 미래:"볼 것이다." }, s_kor: "우리는", b_en: "at the airport", b_kor: "공항에서", c_en: ["safely"], c_kor: ["안전하게"] },
        { vBase: "see", s: "You", p: "긍정", o: "the baby", o_kor: "아기가", oc: "smiling brightly", oc_kor: "밝게 미소 짓는 것을", kor: { 현재:"본다.", 과거:"보았다.", 미래:"볼 것이다." }, s_kor: "너는", b_en: "in the crib", b_kor: "아기 침대에서", c_en: ["warmly"], c_kor: ["따뜻하게"] },
        { vBase: "see", s: "The boy", p: "긍정", o: "the spider", o_kor: "거미가", oc: "climbing the wall", oc_kor: "벽을 오르는 것을", kor: { 현재:"본다.", 과거:"보았다.", 미래:"볼 것이다." }, s_kor: "그 소년은", b_en: "in his room", b_kor: "그의 방에서", c_en: ["with fear"], c_kor: ["두려움과 함께"] },
        { vBase: "see", s: "My mom", p: "긍정", o: "the rain", o_kor: "비가", oc: "pouring outside", oc_kor: "밖에 쏟아지는 것을", kor: { 현재:"본다.", 과거:"보았다.", 미래:"볼 것이다." }, s_kor: "나의 엄마는", b_en: "through the window", b_kor: "창문을 통해", c_en: ["with a sigh"], c_kor: ["한숨과 함께"] },
        { vBase: "see", s: "I", p: "긍정", o: "the horse", o_kor: "말이", oc: "jumping over the fence", oc_kor: "울타리를 뛰어넘는 것을", kor: { 현재:"본다.", 과거:"보았다.", 미래:"볼 것이다." }, s_kor: "나는", b_en: "on the farm", b_kor: "농장에서", c_en: ["elegantly"], c_kor: ["우아하게"] },
        // 부정문 (9문항)
        { vBase: "see", s: "I", p: "부정", o: "the boat", o_kor: "보트가", oc: "sinking in the river", oc_kor: "강에 가라앉는 것을", kor: { 현재:"보지 못한다.", 과거:"보지 못했다.", 미래:"보지 못할 것이다." }, s_kor: "나는", b_en: "from the bridge", b_kor: "다리 위에서는", c_en: ["fortunately"], c_kor: ["다행스럽게도"] },
        { vBase: "see", s: "She", p: "부정", o: "the thief", o_kor: "도둑이", oc: "stealing the bag", oc_kor: "가방을 훔치는 것을", kor: { 현재:"보지 않는다.", 과거:"보지 않았다.", 미래:"보지 않을 것이다." }, s_kor: "그녀는", b_en: "on the street", b_kor: "거리에서", c_en: ["clearly"], c_kor: ["분명하게"] },
        { vBase: "see", s: "He", p: "부정", o: "the sun", o_kor: "태양이", oc: "rising in the east", oc_kor: "동쪽에서 떠오르는 것을", kor: { 현재:"보지 않는다.", 과거:"보지 않았다.", 미래:"보지 않을 것이다." }, s_kor: "그는", b_en: "in the morning", b_kor: "아침에", c_en: ["because of sleep"], c_kor: ["잠 때문에"] },
        { vBase: "see", s: "They", p: "부정", o: "the audience", o_kor: "관객들이", oc: "clapping their hands", oc_kor: "박수치는 것을", kor: { 현재:"보지 못한다.", 과거:"보지 못했다.", 미래:"보지 못할 것이다." }, s_kor: "그들은", b_en: "behind the stage", b_kor: "무대 뒤에서는", c_en: ["clearly"], c_kor: ["분명하게"] },
        { vBase: "see", s: "We", p: "부정", o: "the car", o_kor: "그 차가", oc: "moving towards us", oc_kor: "우리를 향해 움직이는 것을", kor: { 현재:"보지 못한다.", 과거:"보지 못했다.", 미래:"보지 못할 것이다." }, s_kor: "우리는", b_en: "in the dark", b_kor: "어둠 속에서", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "see", s: "You", p: "부정", o: "the fire", o_kor: "불이", oc: "burning the wood", oc_kor: "나무를 태우는 것을", kor: { 현재:"보지 못한다.", 과거:"보지 못했다.", 미래:"보지 못할 것이다." }, s_kor: "너는", b_en: "in the fireplace", b_kor: "벽난로에서", c_en: ["from here"], c_kor: ["여기서는"] },
        { vBase: "see", s: "The girls", p: "부정", o: "the snow", o_kor: "눈이", oc: "covering the ground", oc_kor: "땅을 덮는 것을", kor: { 현재:"보지 못한다.", 과거:"보지 못했다.", 미래:"보지 못할 것이다." }, s_kor: "소녀들은", b_en: "in this town", b_kor: "이 마을에서는", c_en: ["during the winter"], c_kor: ["겨울 동안"] },
        { vBase: "see", s: "My dad", p: "부정", o: "the cat", o_kor: "고양이가", oc: "hiding under the bed", oc_kor: "침대 밑에 숨는 것을", kor: { 현재:"보지 못한다.", 과거:"보지 못했다.", 미래:"보지 못할 것이다." }, s_kor: "나의 아빠는", b_en: "in the house", b_kor: "집 안에서", c_en: ["most of the time"], c_kor: ["보통은"] },
        { vBase: "see", s: "She", p: "부정", o: "the manager", o_kor: "매니저가", oc: "leaving the office", oc_kor: "사무실을 떠나는 것을", kor: { 현재:"보지 못한다.", 과거:"보지 못했다.", 미래:"보지 못할 것이다." }, s_kor: "그녀는", b_en: "at this hour", b_kor: "이 시간에는", c_en: ["most of the time"], c_kor: ["보통은"] },
        // 의문문 (9문항)
        { vBase: "see", s: "I", p: "의문", o: "the tears", o_kor: "눈물이", oc: "falling down", oc_kor: "떨어지는 것을", kor: { 현재:"보니?", 과거:"보았니?", 미래:"볼까?" }, s_kor: "내가", b_en: "from her eyes", b_kor: "그녀의 눈에서", c_en: ["sadly"], c_kor: ["슬프게도"] },
        { vBase: "see", s: "She", p: "의문", o: "the leaves", o_kor: "나뭇잎들이", oc: "falling from the tree", oc_kor: "나무에서 떨어지는 것을", kor: { 현재:"보니?", 과거:"보았니?", 미래:"볼까?" }, s_kor: "그녀는", b_en: "in the garden", b_kor: "정원에서", c_en: ["quietly"], c_kor: ["조용히"] },
        { vBase: "see", s: "He", p: "의문", o: "the bird", o_kor: "그 새가", oc: "flying away", oc_kor: "멀리 날아가는 것을", kor: { 현재:"보니?", 과거:"보았니?", 미래:"볼까?" }, s_kor: "그는", b_en: "in the sky", b_kor: "하늘에서", c_en: ["suddenly"], c_kor: ["갑자기"] },
        { vBase: "see", s: "They", p: "의문", o: "the monkey", o_kor: "원숭이가", oc: "eating a banana", oc_kor: "바나나를 먹는 것을", kor: { 현재:"보니?", 과거:"보았니?", 미래:"볼까?" }, s_kor: "그들은", b_en: "at the zoo", b_kor: "동물원에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "see", s: "We", p: "의문", o: "the fish", o_kor: "물고기가", oc: "swimming in the pond", oc_kor: "연못에서 헤엄치는 것을", kor: { 현재:"보니?", 과거:"보았니?", 미래:"볼까?" }, s_kor: "우리가", b_en: "under the water", b_kor: "물 아래에서", c_en: ["easily"], c_kor: ["쉽게"] },
        { vBase: "see", s: "You", p: "의문", o: "the man", o_kor: "그 남자가", oc: "crossing the street", oc_kor: "길을 건너는 것을", kor: { 현재:"보니?", 과거:"보았니?", 미래:"볼까?" }, s_kor: "너는", b_en: "at the corner", b_kor: "모퉁이에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "see", s: "The teacher", p: "의문", o: "the student", o_kor: "학생이", oc: "cheating on the test", oc_kor: "시험에서 부정행위하는 것을", kor: { 현재:"보니?", 과거:"보았니?", 미래:"볼까?" }, s_kor: "선생님은", b_en: "in the classroom", b_kor: "교실에서", c_en: ["by any chance"], c_kor: ["혹시라도"] },
        { vBase: "see", s: "My friend", p: "의문", o: "the star", o_kor: "별이", oc: "shooting across the sky", oc_kor: "하늘을 가로질러 떨어지는 것을", kor: { 현재:"보니?", 과거:"보았니?", 미래:"볼까?" }, s_kor: "나의 친구는", b_en: "on a dark night", b_kor: "어두운 밤에", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "see", s: "He", p: "의문", o: "the dog", o_kor: "개가", oc: "digging a hole", oc_kor: "구멍을 파는 것을", kor: { 현재:"보니?", 과거:"보았니?", 미래:"볼까?" }, s_kor: "그는", b_en: "in the garden", b_kor: "정원에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] }
    ];
        return processRawRows5(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    hear: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The students", "The neighbors"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
        // 긍정문 (9문항)
        { vBase: "hear", s: "I", p: "긍정", o: "the baby", o_kor: "아기가", oc: "crying loudly", oc_kor: "크게 우는 것을", kor: { 현재:"듣는다.", 과거:"들었다.", 미래:"들을 것이다." }, s_kor: "나는", b_en: "in the next room", b_kor: "옆방에서", c_en: ["in the middle of the night"], c_kor: ["한밤중에"] },
        { vBase: "hear", s: "She", p: "긍정", o: "someone", o_kor: "누군가가", oc: "walking down the stairs", oc_kor: "계단을 내려오는 것을", kor: { 현재:"듣는다.", 과거:"들었다.", 미래:"들을 것이다." }, s_kor: "그녀는", b_en: "in the dark house", b_kor: "어두운 집에서", c_en: ["suddenly"], c_kor: ["갑자기"] },
        { vBase: "hear", s: "He", p: "긍정", o: "the children", o_kor: "아이들이", oc: "laughing in the yard", oc_kor: "마당에서 웃는 것을", kor: { 현재:"듣는다.", 과거:"들었다.", 미래:"들을 것이다." }, s_kor: "그는", b_en: "through the window", b_kor: "창문을 통해", c_en: ["happily"], c_kor: ["행복하게"] },
        { vBase: "hear", s: "They", p: "긍정", o: "the dog", o_kor: "개가", oc: "barking outside", oc_kor: "밖에서 짖는 것을", kor: { 현재:"듣는다.", 과거:"들었다.", 미래:"들을 것이다." }, s_kor: "그들은", b_en: "in the yard", b_kor: "마당에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "hear", s: "We", p: "긍정", o: "the rain", o_kor: "비가", oc: "hitting the roof", oc_kor: "지붕을 때리는 것을", kor: { 현재:"듣는다.", 과거:"들었다.", 미래:"들을 것이다." }, s_kor: "우리는", b_en: "inside the house", b_kor: "집 안에서", c_en: ["comfortably"], c_kor: ["편안하게"] },
        { vBase: "hear", s: "You", p: "긍정", o: "the musician", o_kor: "음악가가", oc: "playing the guitar", oc_kor: "기타 치는 것을", kor: { 현재:"듣는다.", 과거:"들었다.", 미래:"들을 것이다." }, s_kor: "너는", b_en: "on the street", b_kor: "거리에서", c_en: ["with joy"], c_kor: ["기쁨과 함께"] },
        { vBase: "hear", s: "The girl", p: "긍정", o: "the birds", o_kor: "새들이", oc: "singing sweetly", oc_kor: "달콤하게 노래하는 것을", kor: { 현재:"듣는다.", 과거:"들었다.", 미래:"들을 것이다." }, s_kor: "그 소녀는", b_en: "in the trees", b_kor: "나무에서", c_en: ["every morning"], c_kor: ["매일 아침"] },
        { vBase: "hear", s: "My dad", p: "긍정", o: "the car", o_kor: "차가", oc: "pulling into the garage", oc_kor: "차고로 들어오는 것을", kor: { 현재:"듣는다.", 과거:"들었다.", 미래:"들을 것이다." }, s_kor: "나의 아빠는", b_en: "from his room", b_kor: "그의 방에서", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "hear", s: "I", p: "긍정", o: "the bell", o_kor: "종이", oc: "ringing in the hall", oc_kor: "복도에서 울리는 것을", kor: { 현재:"듣는다.", 과거:"들었다.", 미래:"들을 것이다." }, s_kor: "나는", b_en: "from my desk", b_kor: "내 책상에서", c_en: ["clearly"], c_kor: ["분명하게"] },
        // 부정문 (9문항)
        { vBase: "hear", s: "I", p: "부정", o: "the neighbor", o_kor: "이웃이", oc: "shouting angrily", oc_kor: "화내며 소리치는 것을", kor: { 현재:"듣지 못한다.", 과거:"듣지 못했다.", 미래:"듣지 못할 것이다." }, s_kor: "나는", b_en: "behind the thick wall", b_kor: "두꺼운 벽 뒤에서", c_en: ["peacefully"], c_kor: ["평화롭게"] },
        { vBase: "hear", s: "She", p: "부정", o: "the phone", o_kor: "전화기가", oc: "ringing in the bag", oc_kor: "가방 안에서 울리는 것을", kor: { 현재:"듣지 못한다.", 과거:"듣지 못했다.", 미래:"듣지 못할 것이다." }, s_kor: "그녀는", b_en: "on the noisy street", b_kor: "시끄러운 거리에서", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "hear", s: "He", p: "부정", o: "the glass", o_kor: "유리잔이", oc: "breaking into pieces", oc_kor: "산산조각으로 깨지는 것을", kor: { 현재:"듣지 못한다.", 과거:"듣지 못했다.", 미래:"듣지 못할 것이다." }, s_kor: "그는", b_en: "with his earphones on", b_kor: "이어폰을 낀 채로", c_en: ["safely"], c_kor: ["안전하게"] },
        { vBase: "hear", s: "They", p: "부정", o: "the train", o_kor: "기차가", oc: "approaching the station", oc_kor: "역에 접근하는 것을", kor: { 현재:"듣지 못한다.", 과거:"듣지 못했다.", 미래:"듣지 못할 것이다." }, s_kor: "그들은", b_en: "in the loud cafe", b_kor: "시끄러운 카페에서", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "hear", s: "We", p: "부정", o: "the crowd", o_kor: "군중이", oc: "cheering for the team", oc_kor: "팀을 위해 환호하는 것을", kor: { 현재:"듣지 못한다.", 과거:"듣지 못했다.", 미래:"듣지 못할 것이다." }, s_kor: "우리는", b_en: "far from the stadium", b_kor: "경기장에서 멀리 떨어져서", c_en: ["unfortunately"], c_kor: ["불행하게도"] },
        { vBase: "hear", s: "You", p: "부정", o: "the thunder", o_kor: "천둥이", oc: "rumbling in the distance", oc_kor: "멀리서 우르릉거리는 것을", kor: { 현재:"듣지 못한다.", 과거:"듣지 못했다.", 미래:"듣지 못할 것이다." }, s_kor: "너는", b_en: "in the deep sleep", b_kor: "깊은 잠에 빠져서", c_en: ["normally"], c_kor: ["보통은"] },
        { vBase: "hear", s: "The boy", p: "부정", o: "the wolf", o_kor: "늑대가", oc: "howling in the forest", oc_kor: "숲에서 짖는 것을", kor: { 현재:"듣지 못한다.", 과거:"듣지 못했다.", 미래:"듣지 못할 것이다." }, s_kor: "그 소년은", b_en: "in his safe bed", b_kor: "그의 안전한 침대에서", c_en: ["luckily"], c_kor: ["다행히도"] },
        { vBase: "hear", s: "My mom", p: "부정", o: "the door", o_kor: "문이", oc: "opening slowly", oc_kor: "천천히 열리는 것을", kor: { 현재:"듣지 못한다.", 과거:"듣지 못했다.", 미래:"듣지 못할 것이다." }, s_kor: "나의 엄마는", b_en: "in the kitchen", b_kor: "부엌에서", c_en: ["because of the noise"], c_kor: ["소음 때문에"] },
        { vBase: "hear", s: "She", p: "부정", o: "the leaves", o_kor: "나뭇잎들이", oc: "rustling in the wind", oc_kor: "바람에 바스락거리는 것을", kor: { 현재:"듣지 못한다.", 과거:"듣지 못했다.", 미래:"듣지 못할 것이다." }, s_kor: "그녀는", b_en: "behind closed windows", b_kor: "닫힌 창문 뒤에서", c_en: ["completely"], c_kor: ["완전히"] },
        // 의문문 (9문항)
        { vBase: "hear", s: "I", p: "의문", o: "the water", o_kor: "물이", oc: "boiling in the pot", oc_kor: "냄비에서 끓는 것을", kor: { 현재:"듣니?", 과거:"들었니?", 미래:"들을까?" }, s_kor: "내가", b_en: "from the living room", b_kor: "거실에서", c_en: ["clearly"], c_kor: ["분명하게"] },
        { vBase: "hear", s: "She", p: "의문", o: "the clock", o_kor: "시계가", oc: "ticking quietly", oc_kor: "조용히 똑딱거리는 것을", kor: { 현재:"듣니?", 과거:"들었니?", 미래:"들을까?" }, s_kor: "그녀는", b_en: "in the silent room", b_kor: "조용한 방에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "hear", s: "He", p: "의문", o: "the wind", o_kor: "바람이", oc: "blowing fiercely", oc_kor: "사납게 부는 것을", kor: { 현재:"듣니?", 과거:"들었니?", 미래:"들을까?" }, s_kor: "그는", b_en: "outside the window", b_kor: "창문 밖에서", c_en: ["scarily"], c_kor: ["무섭게"] },
        { vBase: "hear", s: "They", p: "의문", o: "the engine", o_kor: "엔진이", oc: "starting suddenly", oc_kor: "갑자기 시동 걸리는 것을", kor: { 현재:"듣니?", 과거:"들었니?", 미래:"들을까?" }, s_kor: "그들은", b_en: "in the garage", b_kor: "차고에서", c_en: ["in surprise"], c_kor: ["놀라서"] },
        { vBase: "hear", s: "We", p: "의문", o: "the bees", o_kor: "벌들이", oc: "buzzing around the flowers", oc_kor: "꽃 주위에서 윙윙거리는 것을", kor: { 현재:"듣니?", 과거:"들었니?", 미래:"들을까?" }, s_kor: "우리가", b_en: "in the garden", b_kor: "정원에서", c_en: ["carefully"], c_kor: ["주의 깊게"] },
        { vBase: "hear", s: "You", p: "의문", o: "the alarm", o_kor: "알람이", oc: "beeping continuously", oc_kor: "계속해서 울리는 것을", kor: { 현재:"듣니?", 과거:"들었니?", 미래:"들을까?" }, s_kor: "너는", b_en: "in the bedroom", b_kor: "침실에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "hear", s: "The teacher", p: "의문", o: "the students", o_kor: "학생들이", oc: "whispering in the class", oc_kor: "교실에서 속삭이는 것을", kor: { 현재:"듣니?", 과거:"들었니?", 미래:"들을까?" }, s_kor: "선생님은", b_en: "from the front", b_kor: "맨 앞에서", c_en: ["sharply"], c_kor: ["날카롭게"] },
        { vBase: "hear", s: "My friend", p: "의문", o: "the footsteps", o_kor: "발소리가", oc: "fading away", oc_kor: "희미해지는 것을", kor: { 현재:"듣니?", 과거:"들었니?", 미래:"들을까?" }, s_kor: "나의 친구는", b_en: "in the hallway", b_kor: "복도에서", c_en: ["nervously"], c_kor: ["초조하게"] },
        { vBase: "hear", s: "He", p: "의문", o: "the singer", o_kor: "가수가", oc: "practicing the song", oc_kor: "노래 연습하는 것을", kor: { 현재:"듣니?", 과거:"들었니?", 미래:"들을까?" }, s_kor: "그는", b_en: "next door", b_kor: "옆집에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] }
    ];
        return processRawRows5(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    watch: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The fans", "The kids"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
        // 긍정문 (9문항)
        { vBase: "watch", s: "I", p: "긍정", o: "the birds", o_kor: "새들이", oc: "building a nest", oc_kor: "둥지를 짓는 것을", kor: { 현재:"지켜본다.", 과거:"지켜보았다.", 미래:"지켜볼 것이다." }, s_kor: "나는", b_en: "in the tree", b_kor: "나무에서", c_en: ["quietly"], c_kor: ["조용히"] },
        { vBase: "watch", s: "She", p: "긍정", o: "the stars", o_kor: "별들이", oc: "shining brightly", oc_kor: "밝게 빛나는 것을", kor: { 현재:"지켜본다.", 과거:"지켜보았다.", 미래:"지켜볼 것이다." }, s_kor: "그녀는", b_en: "in the night sky", b_kor: "밤하늘에서", c_en: ["silently"], c_kor: ["말없이"] },
        { vBase: "watch", s: "He", p: "긍정", o: "the train", o_kor: "기차가", oc: "passing by", oc_kor: "지나가는 것을", kor: { 현재:"지켜본다.", 과거:"지켜보았다.", 미래:"지켜볼 것이다." }, s_kor: "그는", b_en: "near the station", b_kor: "역 근처에서", c_en: ["every morning"], c_kor: ["매일 아침"] },
        { vBase: "watch", s: "They", p: "긍정", o: "the monkeys", o_kor: "원숭이들이", oc: "climbing the tree", oc_kor: "나무에 오르는 것을", kor: { 현재:"지켜본다.", 과거:"지켜보았다.", 미래:"지켜볼 것이다." }, s_kor: "그들은", b_en: "in the zoo", b_kor: "동물원에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "watch", s: "We", p: "긍정", o: "the puppies", o_kor: "강아지들이", oc: "sleeping together", oc_kor: "함께 자는 것을", kor: { 현재:"지켜본다.", 과거:"지켜보았다.", 미래:"지켜볼 것이다." }, s_kor: "우리는", b_en: "in the living room", b_kor: "거실에서", c_en: ["with a smile"], c_kor: ["미소와 함께"] },
        { vBase: "watch", s: "You", p: "긍정", o: "the mechanic", o_kor: "정비사가", oc: "fixing the car", oc_kor: "차를 고치는 것을", kor: { 현재:"지켜본다.", 과거:"지켜보았다.", 미래:"지켜볼 것이다." }, s_kor: "너는", b_en: "in the garage", b_kor: "차고에서", c_en: ["with interest"], c_kor: ["관심을 가지고"] },
        { vBase: "watch", s: "The boy", p: "긍정", o: "the player", o_kor: "선수가", oc: "scoring a goal", oc_kor: "골을 넣는 것을", kor: { 현재:"지켜본다.", 과거:"지켜보았다.", 미래:"지켜볼 것이다." }, s_kor: "그 소년은", b_en: "on the field", b_kor: "경기장에서", c_en: ["excitedly"], c_kor: ["신나서"] },
        { vBase: "watch", s: "My mom", p: "긍정", o: "the baker", o_kor: "제빵사가", oc: "making bread", oc_kor: "빵을 만드는 것을", kor: { 현재:"지켜본다.", 과거:"지켜보았다.", 미래:"지켜볼 것이다." }, s_kor: "나의 엄마는", b_en: "in the bakery", b_kor: "빵집에서", c_en: ["carefully"], c_kor: ["주의 깊게"] },
        { vBase: "watch", s: "I", p: "긍정", o: "the teacher", o_kor: "선생님이", oc: "writing on the board", oc_kor: "칠판에 글을 쓰는 것을", kor: { 현재:"지켜본다.", 과거:"지켜보았다.", 미래:"지켜볼 것이다." }, s_kor: "나는", b_en: "in the classroom", b_kor: "교실에서", c_en: ["carefully"], c_kor: ["주의 깊게"] },
        // 부정문 (9문항)
        { vBase: "watch", s: "I", p: "부정", o: "the magician", o_kor: "마술사가", oc: "performing a trick", oc_kor: "마술을 부리는 것을", kor: { 현재:"지켜보지 못한다.", 과거:"지켜보지 못했다.", 미래:"지켜보지 못할 것이다." }, s_kor: "나는", b_en: "from the back seat", b_kor: "뒷자리에서", c_en: ["clearly"], c_kor: ["분명하게"] },
        { vBase: "watch", s: "She", p: "부정", o: "the kids", o_kor: "아이들이", oc: "playing outside", oc_kor: "밖에서 노는 것을", kor: { 현재:"지켜보지 않는다.", 과거:"지켜보지 않았다.", 미래:"지켜보지 않을 것이다." }, s_kor: "그녀는", b_en: "in the garden", b_kor: "정원에서", c_en: ["most of the time"], c_kor: ["보통은"] },
        { vBase: "watch", s: "He", p: "부정", o: "the ships", o_kor: "배들이", oc: "sailing away", oc_kor: "항해하여 멀어지는 것을", kor: { 현재:"지켜보지 않는다.", 과거:"지켜보지 않았다.", 미래:"지켜보지 않을 것이다." }, s_kor: "그는", b_en: "from the harbor", b_kor: "항구에서", c_en: ["most of the time"], c_kor: ["이제는 더 이상"] },
        { vBase: "watch", s: "They", p: "부정", o: "the water", o_kor: "물이", oc: "boiling in the pot", oc_kor: "냄비에서 끓는 것을", kor: { 현재:"지켜보지 않는다.", 과거:"지켜보지 않았다.", 미래:"지켜보지 않을 것이다." }, s_kor: "그들은", b_en: "in the kitchen", b_kor: "주방에서", c_en: ["due to a phone call"], c_kor: ["전화 통화 때문에"] },
        { vBase: "watch", s: "We", p: "부정", o: "the workers", o_kor: "노동자들이", oc: "repairing the road", oc_kor: "도로를 수리하는 것을", kor: { 현재:"지켜보지 않는다.", 과거:"지켜보지 않았다.", 미래:"지켜보지 않을 것이다." }, s_kor: "우리는", b_en: "on the street", b_kor: "거리에서", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "watch", s: "You", p: "부정", o: "the clouds", o_kor: "구름들이", oc: "moving slowly", oc_kor: "천천히 움직이는 것을", kor: { 현재:"지켜보지 않는다.", 과거:"지켜보지 않았다.", 미래:"지켜보지 않을 것이다." }, s_kor: "너는", b_en: "in the sky", b_kor: "하늘에서", c_en: ["during the test"], c_kor: ["시험 도중에는"] },
        { vBase: "watch", s: "The kids", p: "부정", o: "the butterfly", o_kor: "나비가", oc: "sitting on the flower", oc_kor: "꽃에 앉는 것을", kor: { 현재:"지켜보지 못한다.", 과거:"지켜보지 못했다.", 미래:"지켜보지 못할 것이다." }, s_kor: "아이들은", b_en: "in the garden", b_kor: "정원에서", c_en: ["because it's too fast"], c_kor: ["너무 빠르기 때문에"] },
        { vBase: "watch", s: "My dad", p: "부정", o: "the chef", o_kor: "요리사가", oc: "cooking the meal", oc_kor: "요리하는 것을", kor: { 현재:"지켜보지 않는다.", 과거:"지켜보지 않았다.", 미래:"지켜보지 않을 것이다." }, s_kor: "나의 아빠는", b_en: "in the kitchen", b_kor: "주방에서", c_en: ["because of his work"], c_kor: ["그의 일 때문에"] },
        { vBase: "watch", s: "She", p: "부정", o: "the clock", o_kor: "시계가", oc: "ticking", oc_kor: "똑딱거리는 것을", kor: { 현재:"지켜보지 않는다.", 과거:"지켜보지 않았다.", 미래:"지켜보지 않을 것이다." }, s_kor: "그녀는", b_en: "on the wall", b_kor: "벽에 있는", c_en: ["during the meeting"], c_kor: ["회의 동안"] },
        // 의문문 (9문항)
        { vBase: "watch", s: "I", p: "의문", o: "the ants", o_kor: "개미들이", oc: "carrying food", oc_kor: "먹이를 나르는 것을", kor: { 현재:"지켜보니?", 과거:"지켜보았니?", 미래:"지켜볼까?" }, s_kor: "내가", b_en: "on the ground", b_kor: "땅바닥에서", c_en: ["closely"], c_kor: ["가까이서"] },
        { vBase: "watch", s: "She", p: "의문", o: "the cat", o_kor: "고양이가", oc: "chasing a mouse", oc_kor: "쥐를 쫓는 것을", kor: { 현재:"지켜보니?", 과거:"지켜보았니?", 미래:"지켜볼까?" }, s_kor: "그녀는", b_en: "in the alley", b_kor: "골목에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "watch", s: "He", p: "의문", o: "the sun", o_kor: "태양이", oc: "going down", oc_kor: "지는 것을", kor: { 현재:"지켜보니?", 과거:"지켜보았니?", 미래:"지켜볼까?" }, s_kor: "그는", b_en: "at the beach", b_kor: "해변에서", c_en: ["every evening"], c_kor: ["매일 저녁"] },
        { vBase: "watch", s: "They", p: "의문", o: "the snow", o_kor: "눈이", oc: "falling down", oc_kor: "내리는 것을", kor: { 현재:"지켜보니?", 과거:"지켜보았니?", 미래:"지켜볼까?" }, s_kor: "그들은", b_en: "through the window", b_kor: "창문을 통해", c_en: ["peacefully"], c_kor: ["평화롭게"] },
        { vBase: "watch", s: "We", p: "의문", o: "the fish", o_kor: "물고기들이", oc: "swimming around", oc_kor: "주위를 헤엄치는 것을", kor: { 현재:"지켜보니?", 과거:"지켜보았니?", 미래:"지켜볼까?" }, s_kor: "우리가", b_en: "in the aquarium", b_kor: "수족관에서", c_en: ["peacefully"], c_kor: ["평화롭게"] },
        { vBase: "watch", s: "You", p: "의문", o: "the painter", o_kor: "화가가", oc: "drawing a picture", oc_kor: "그림을 그리는 것을", kor: { 현재:"지켜보니?", 과거:"지켜보았니?", 미래:"지켜볼까?" }, s_kor: "너는", b_en: "in the park", b_kor: "공원에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "watch", s: "The fans", p: "의문", o: "the singer", o_kor: "가수가", oc: "dancing on stage", oc_kor: "무대에서 춤추는 것을", kor: { 현재:"지켜보니?", 과거:"지켜보았니?", 미래:"지켜볼까?" }, s_kor: "팬들은", b_en: "at the concert", b_kor: "콘서트에서", c_en: ["passionately"], c_kor: ["열정적으로"] },
        { vBase: "watch", s: "My friend", p: "의문", o: "the farmer", o_kor: "농부가", oc: "planting seeds", oc_kor: "씨앗을 심는 것을", kor: { 현재:"지켜보니?", 과거:"지켜보았니?", 미래:"지켜볼까?" }, s_kor: "나의 친구는", b_en: "in the field", b_kor: "들판에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "watch", s: "He", p: "의문", o: "the plane", o_kor: "비행기가", oc: "taking off", oc_kor: "이륙하는 것을", kor: { 현재:"지켜보니?", 과거:"지켜보았니?", 미래:"지켜볼까?" }, s_kor: "그는", b_en: "from the airport", b_kor: "공항에서", c_en: ["excitedly"], c_kor: ["신나게"] }
    ];
        return processRawRows5(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    want: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The kids", "The parents", "The fans"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
        // 긍정문 (9문항)
        { vBase: "want", s: "I", p: "긍정", o: "him", o_kor: "그가", oc: "to come home", oc_kor: "집에 오도록", kor: { 현재:"원한다.", 과거:"원했다.", 미래:"원할 것이다." }, s_kor: "나는", b_en: "by tonight", b_kor: "오늘 밤까지", c_en: ["right away"], c_kor: ["바로"] },
        { vBase: "want", s: "She", p: "긍정", o: "me", o_kor: "내가", oc: "to study harder", oc_kor: "더 열심히 공부하도록", kor: { 현재:"원한다.", 과거:"원했다.", 미래:"원할 것이다." }, s_kor: "그녀는", b_en: "at school", b_kor: "학교에서", c_en: ["every day"], c_kor: ["매일"] },
        { vBase: "want", s: "Mom", p: "긍정", o: "me", o_kor: "내가", oc: "to eat breakfast", oc_kor: "아침을 먹도록", kor: { 현재:"원한다.", 과거:"원했다.", 미래:"원할 것이다." }, s_kor: "엄마는", b_en: "in the morning", b_kor: "아침에", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "want", s: "They", p: "긍정", o: "us", o_kor: "우리가", oc: "to join the club", oc_kor: "동아리에 가입하도록", kor: { 현재:"원한다.", 과거:"원했다.", 미래:"원할 것이다." }, s_kor: "그들은", b_en: "after school", b_kor: "방과 후에", c_en: [ADV.TY_EN], c_kor: [ADV.TY_KR] },
        { vBase: "want", s: "We", p: "긍정", o: "him", o_kor: "그가", oc: "to stay with us", oc_kor: "우리와 함께 있도록", kor: { 현재:"원한다.", 과거:"원했다.", 미래:"원할 것이다." }, s_kor: "우리는", b_en: "at home", b_kor: "집에서", c_en: ["all the time"], c_kor: ["항상"] },
        { vBase: "want", s: "You", p: "긍정", o: "me", o_kor: "내가", oc: "to help you", oc_kor: "너를 돕도록", kor: { 현재:"원한다.", 과거:"원했다.", 미래:"원할 것이다." }, s_kor: "너는", b_en: "with the project", b_kor: "프로젝트에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "want", s: "The teacher", p: "긍정", o: "us", o_kor: "우리가", oc: "to read the book", oc_kor: "그 책을 읽도록", kor: { 현재:"원한다.", 과거:"원했다.", 미래:"원할 것이다." }, s_kor: "선생님은", b_en: "in class", b_kor: "수업 시간에", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "want", s: "My friend", p: "긍정", o: "me", o_kor: "내가", oc: "to wait for him", oc_kor: "그를 기다리도록", kor: { 현재:"원한다.", 과거:"원했다.", 미래:"원할 것이다." }, s_kor: "나의 친구는", b_en: "at the gate", b_kor: "문 앞에서", c_en: ["for a while"], c_kor: ["잠시"] },
        { vBase: "want", s: "He", p: "긍정", o: "her", o_kor: "그녀가", oc: "to call him back", oc_kor: "다시 전화하도록", kor: { 현재:"원한다.", 과거:"원했다.", 미래:"원할 것이다." }, s_kor: "그는", b_en: "after the meeting", b_kor: "회의 후에", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        // 부정문 (9문항)
        { vBase: "want", s: "I", p: "부정", o: "him", o_kor: "그가", oc: "to go there alone", oc_kor: "혼자 거기 가도록", kor: { 현재:"원하지 않는다.", 과거:"원하지 않았다.", 미래:"원하지 않을 것이다." }, s_kor: "나는", b_en: "at night", b_kor: "밤에", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "want", s: "She", p: "부정", o: "me", o_kor: "내가", oc: "to watch TV", oc_kor: "텔레비전을 보도록", kor: { 현재:"원하지 않는다.", 과거:"원하지 않았다.", 미래:"원하지 않을 것이다." }, s_kor: "그녀는", b_en: "all day", b_kor: "하루 종일", c_en: ["during study time"], c_kor: ["공부 시간에는"] },
        { vBase: "want", s: "He", p: "부정", o: "us", o_kor: "우리가", oc: "to leave early", oc_kor: "일찍 떠나도록", kor: { 현재:"원하지 않는다.", 과거:"원하지 않았다.", 미래:"원하지 않을 것이다." }, s_kor: "그는", b_en: "from the party", b_kor: "파티에서", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "want", s: "They", p: "부정", o: "him", o_kor: "그가", oc: "to give up", oc_kor: "포기하도록", kor: { 현재:"원하지 않는다.", 과거:"원하지 않았다.", 미래:"원하지 않을 것이다." }, s_kor: "그들은", b_en: "on this task", b_kor: "이 과제를", c_en: ["for any reason"], c_kor: ["어떤 이유에서든"] },
        { vBase: "want", s: "We", p: "부정", o: "them", o_kor: "그들이", oc: "to come back", oc_kor: "돌아오도록", kor: { 현재:"원하지 않는다.", 과거:"원하지 않았다.", 미래:"원하지 않을 것이다." }, s_kor: "우리는", b_en: "without calling", b_kor: "전화도 없이", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "want", s: "My mom", p: "부정", o: "me", o_kor: "내가", oc: "to go outside", oc_kor: "밖에 나가도록", kor: { 현재:"원하지 않는다.", 과거:"원하지 않았다.", 미래:"원하지 않을 것이다." }, s_kor: "나의 엄마는", b_en: "in the rain", b_kor: "비 속에서", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "want", s: "The coach", p: "부정", o: "us", o_kor: "우리가", oc: "to stop training", oc_kor: "훈련을 멈추도록", kor: { 현재:"원하지 않는다.", 과거:"원하지 않았다.", 미래:"원하지 않을 것이다." }, s_kor: "코치는", b_en: "before the game", b_kor: "경기 전에는", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "want", s: "You", p: "부정", o: "me", o_kor: "내가", oc: "to break my promise", oc_kor: "약속을 어기도록", kor: { 현재:"원하지 않는다.", 과거:"원하지 않았다.", 미래:"원하지 않을 것이다." }, s_kor: "너는", b_en: "with my friend", b_kor: "친구와의", c_en: ["for any reason"], c_kor: ["결코"] },
        { vBase: "want", s: "Dad", p: "부정", o: "me", o_kor: "내가", oc: "to stay up late", oc_kor: "늦게까지 자지 않도록", kor: { 현재:"원하지 않는다.", 과거:"원하지 않았다.", 미래:"원하지 않을 것이다." }, s_kor: "아빠는", b_en: "on school nights", b_kor: "학교 가는 날 밤에는", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        // 의문문 (9문항)
        { vBase: "want", s: "I", p: "의문", o: "you", o_kor: "네가", oc: "to come with me", oc_kor: "나와 함께 오도록", kor: { 현재:"원하니?", 과거:"원했니?", 미래:"원할까?" }, s_kor: "내가", b_en: "to the party", b_kor: "파티에", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "want", s: "She", p: "의문", o: "me", o_kor: "내가", oc: "to bring a gift", oc_kor: "선물을 가져오도록", kor: { 현재:"원하니?", 과거:"원했니?", 미래:"원할까?" }, s_kor: "그녀는", b_en: "to her house", b_kor: "그녀의 집에", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "want", s: "He", p: "의문", o: "us", o_kor: "우리가", oc: "to wait outside", oc_kor: "밖에서 기다리도록", kor: { 현재:"원하니?", 과거:"원했니?", 미래:"원할까?" }, s_kor: "그는", b_en: "at the entrance", b_kor: "입구에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "want", s: "They", p: "의문", o: "you", o_kor: "네가", oc: "to join the team", oc_kor: "팀에 합류하도록", kor: { 현재:"원하니?", 과거:"원했니?", 미래:"원할까?" }, s_kor: "그들은", b_en: "for the match", b_kor: "경기를 위해", c_en: [ADV.TY_EN], c_kor: [ADV.TY_KR] },
        { vBase: "want", s: "We", p: "의문", o: "him", o_kor: "그가", oc: "to come back soon", oc_kor: "빨리 돌아오도록", kor: { 현재:"원하니?", 과거:"원했니?", 미래:"원할까?" }, s_kor: "우리가", b_en: "to our house", b_kor: "우리 집에", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "want", s: "You", p: "의문", o: "me", o_kor: "내가", oc: "to stay quiet", oc_kor: "조용히 있도록", kor: { 현재:"원하니?", 과거:"원했니?", 미래:"원할까?" }, s_kor: "너는", b_en: "in the library", b_kor: "도서관에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "want", s: "The teacher", p: "의문", o: "you", o_kor: "네가", oc: "to answer the question", oc_kor: "질문에 대답하도록", kor: { 현재:"원하니?", 과거:"원했니?", 미래:"원할까?" }, s_kor: "선생님은", b_en: "in front of the class", b_kor: "반 앞에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "want", s: "My sister", p: "의문", o: "me", o_kor: "내가", oc: "to play with her", oc_kor: "함께 놀도록", kor: { 현재:"원하니?", 과거:"원했니?", 미래:"원할까?" }, s_kor: "나의 여동생은", b_en: "in her room", b_kor: "그녀의 방에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "want", s: "He", p: "의문", o: "you", o_kor: "네가", oc: "to finish first", oc_kor: "먼저 끝내도록", kor: { 현재:"원하니?", 과거:"원했니?", 미래:"원할까?" }, s_kor: "그는", b_en: "before lunch", b_kor: "점심 전에", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] }
    ];
        return processRawRows5(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    ask: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The kids", "The students", "The fans"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
        // 긍정문 (9문항)
        { vBase: "ask", s: "I", p: "긍정", o: "him", o_kor: "그에게", oc: "to stop talking", oc_kor: "말하는 것을 멈추도록", kor: { 현재:"부탁한다.", 과거:"부탁했다.", 미래:"부탁할 것이다." }, s_kor: "나는", b_en: "in the library", b_kor: "도서관에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "ask", s: "She", p: "긍정", o: "me", o_kor: "나에게", oc: "to help her", oc_kor: "그녀를 돕도록", kor: { 현재:"부탁한다.", 과거:"부탁했다.", 미래:"부탁할 것이다." }, s_kor: "그녀는", b_en: "with her homework", b_kor: "숙제에 대해", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "ask", s: "He", p: "긍정", o: "us", o_kor: "우리에게", oc: "to be quiet", oc_kor: "조용히 하도록", kor: { 현재:"부탁한다.", 과거:"부탁했다.", 미래:"부탁할 것이다." }, s_kor: "그는", b_en: "during the test", b_kor: "시험 도중에", c_en: ["politely"], c_kor: ["정중하게"] },
        { vBase: "ask", s: "They", p: "긍정", o: "him", o_kor: "그에게", oc: "to join the project", oc_kor: "프로젝트에 참여하도록", kor: { 현재:"부탁한다.", 과거:"부탁했다.", 미래:"부탁할 것이다." }, s_kor: "그들은", b_en: "at the office", b_kor: "사무실에서", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "ask", s: "We", p: "긍정", o: "her", o_kor: "그녀에게", oc: "to come early", oc_kor: "일찍 오도록", kor: { 현재:"부탁한다.", 과거:"부탁했다.", 미래:"부탁할 것이다." }, s_kor: "우리는", b_en: "to the meeting", b_kor: "회의에", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "ask", s: "You", p: "긍정", o: "me", o_kor: "나에게", oc: "to close the door", oc_kor: "문을 닫도록", kor: { 현재:"부탁한다.", 과거:"부탁했다.", 미래:"부탁할 것이다." }, s_kor: "너는", b_en: "every time", b_kor: "매번", c_en: ["quietly"], c_kor: ["조용히"] },
        { vBase: "ask", s: "The teacher", p: "긍정", o: "us", o_kor: "우리에게", oc: "to hand in the report", oc_kor: "보고서를 제출하도록", kor: { 현재:"부탁한다.", 과거:"부탁했다.", 미래:"부탁할 것이다." }, s_kor: "선생님은", b_en: "before class", b_kor: "수업 전에", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "ask", s: "My friend", p: "긍정", o: "me", o_kor: "나에게", oc: "to keep the secret", oc_kor: "비밀을 지키도록", kor: { 현재:"부탁한다.", 과거:"부탁했다.", 미래:"부탁할 것이다." }, s_kor: "나의 친구는", b_en: "in a low voice", b_kor: "낮은 목소리로", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "ask", s: "Mom", p: "긍정", o: "me", o_kor: "나에게", oc: "to buy some eggs", oc_kor: "달걀을 사도록", kor: { 현재:"부탁한다.", 과거:"부탁했다.", 미래:"부탁할 것이다." }, s_kor: "엄마는", b_en: "at the store", b_kor: "가게에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        // 부정문 (9문항)
        { vBase: "ask", s: "I", p: "부정", o: "him", o_kor: "그에게", oc: "to leave", oc_kor: "떠나도록", kor: { 현재:"부탁하지 않는다.", 과거:"부탁하지 않았다.", 미래:"부탁하지 않을 것이다." }, s_kor: "나는", b_en: "without reason", b_kor: "이유도 없이", c_en: ["for any reason"], c_kor: ["결코"] },
        { vBase: "ask", s: "She", p: "부정", o: "me", o_kor: "나에게", oc: "to lie", oc_kor: "거짓말하도록", kor: { 현재:"부탁하지 않는다.", 과거:"부탁하지 않았다.", 미래:"부탁하지 않을 것이다." }, s_kor: "그녀는", b_en: "to anyone", b_kor: "누구에게도", c_en: ["for any reason"], c_kor: ["결코"] },
        { vBase: "ask", s: "He", p: "부정", o: "us", o_kor: "우리에게", oc: "to come back", oc_kor: "돌아오도록", kor: { 현재:"부탁하지 않는다.", 과거:"부탁하지 않았다.", 미래:"부탁하지 않을 것이다." }, s_kor: "그는", b_en: "right away", b_kor: "바로", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "ask", s: "They", p: "부정", o: "her", o_kor: "그녀에게", oc: "to do it alone", oc_kor: "혼자 하도록", kor: { 현재:"부탁하지 않는다.", 과거:"부탁하지 않았다.", 미래:"부탁하지 않을 것이다." }, s_kor: "그들은", b_en: "at all", b_kor: "어쨌든", c_en: ["for any reason"], c_kor: ["결코"] },
        { vBase: "ask", s: "We", p: "부정", o: "him", o_kor: "그에게", oc: "to work overtime", oc_kor: "야근을 하도록", kor: { 현재:"부탁하지 않는다.", 과거:"부탁하지 않았다.", 미래:"부탁하지 않을 것이다." }, s_kor: "우리는", b_en: "again", b_kor: "다시는", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "ask", s: "My mom", p: "부정", o: "me", o_kor: "나에게", oc: "to skip meals", oc_kor: "식사를 건너뛰도록", kor: { 현재:"부탁하지 않는다.", 과거:"부탁하지 않았다.", 미래:"부탁하지 않을 것이다." }, s_kor: "나의 엄마는", b_en: "for any reason", b_kor: "어떤 이유로도", c_en: ["for any reason"], c_kor: ["결코"] },
        { vBase: "ask", s: "The coach", p: "부정", o: "us", o_kor: "우리에게", oc: "to miss practice", oc_kor: "연습을 빠지도록", kor: { 현재:"부탁하지 않는다.", 과거:"부탁하지 않았다.", 미래:"부탁하지 않을 것이다." }, s_kor: "코치는", b_en: "without a reason", b_kor: "이유 없이는", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "ask", s: "You", p: "부정", o: "me", o_kor: "나에게", oc: "to give up my dream", oc_kor: "내 꿈을 포기하도록", kor: { 현재:"부탁하지 않는다.", 과거:"부탁하지 않았다.", 미래:"부탁하지 않을 것이다." }, s_kor: "너는", b_en: "for anything", b_kor: "무엇 때문에도", c_en: ["for any reason"], c_kor: ["결코"] },
        { vBase: "ask", s: "Dad", p: "부정", o: "me", o_kor: "나에게", oc: "to go to bed late", oc_kor: "늦게 자도록", kor: { 현재:"부탁하지 않는다.", 과거:"부탁하지 않았다.", 미래:"부탁하지 않을 것이다." }, s_kor: "아빠는", b_en: "on weekdays", b_kor: "평일에는", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        // 의문문 (9문항)
        { vBase: "ask", s: "I", p: "의문", o: "you", o_kor: "너에게", oc: "to help me", oc_kor: "나를 돕도록", kor: { 현재:"부탁하니?", 과거:"부탁했니?", 미래:"부탁할까?" }, s_kor: "내가", b_en: "with the work", b_kor: "일에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "ask", s: "She", p: "의문", o: "him", o_kor: "그에게", oc: "to stay longer", oc_kor: "더 오래 있도록", kor: { 현재:"부탁하니?", 과거:"부탁했니?", 미래:"부탁할까?" }, s_kor: "그녀는", b_en: "at the party", b_kor: "파티에서", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "ask", s: "He", p: "의문", o: "us", o_kor: "우리에게", oc: "to move the chairs", oc_kor: "의자를 옮기도록", kor: { 현재:"부탁하니?", 과거:"부탁했니?", 미래:"부탁할까?" }, s_kor: "그는", b_en: "in the hall", b_kor: "강당에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "ask", s: "They", p: "의문", o: "you", o_kor: "너에게", oc: "to lead the team", oc_kor: "팀을 이끌도록", kor: { 현재:"부탁하니?", 과거:"부탁했니?", 미래:"부탁할까?" }, s_kor: "그들은", b_en: "for the event", b_kor: "행사를 위해", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "ask", s: "We", p: "의문", o: "her", o_kor: "그녀에게", oc: "to sing a song", oc_kor: "노래를 부르도록", kor: { 현재:"부탁하니?", 과거:"부탁했니?", 미래:"부탁할까?" }, s_kor: "우리가", b_en: "at the party", b_kor: "파티에서", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "ask", s: "You", p: "의문", o: "me", o_kor: "나에게", oc: "to carry the box", oc_kor: "상자를 들도록", kor: { 현재:"부탁하니?", 과거:"부탁했니?", 미래:"부탁할까?" }, s_kor: "너는", b_en: "to the car", b_kor: "차까지", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "ask", s: "The students", p: "의문", o: "him", o_kor: "그에게", oc: "to explain it again", oc_kor: "다시 설명하도록", kor: { 현재:"부탁하니?", 과거:"부탁했니?", 미래:"부탁할까?" }, s_kor: "학생들은", b_en: "after class", b_kor: "수업 후에", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "ask", s: "My sister", p: "의문", o: "me", o_kor: "나에게", oc: "to turn off the light", oc_kor: "불을 끄도록", kor: { 현재:"부탁하니?", 과거:"부탁했니?", 미래:"부탁할까?" }, s_kor: "나의 언니는", b_en: "at night", b_kor: "밤에", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "ask", s: "He", p: "의문", o: "you", o_kor: "너에게", oc: "to wait for him", oc_kor: "그를 기다리도록", kor: { 현재:"부탁하니?", 과거:"부탁했니?", 미래:"부탁할까?" }, s_kor: "그는", b_en: "outside the school", b_kor: "학교 밖에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] }
    ];
        return processRawRows5(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    tell: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The kids", "The students", "The parents"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
        // 긍정문 (9문항)
        { vBase: "tell", s: "I", p: "긍정", o: "him", o_kor: "그에게", oc: "to go home", oc_kor: "집에 가도록", kor: { 현재:"말한다.", 과거:"말했다.", 미래:"말할 것이다." }, s_kor: "나는", b_en: "after school", b_kor: "방과 후에", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "tell", s: "She", p: "긍정", o: "me", o_kor: "나에게", oc: "to clean my room", oc_kor: "내 방을 청소하도록", kor: { 현재:"말한다.", 과거:"말했다.", 미래:"말할 것이다." }, s_kor: "그녀는", b_en: "every morning", b_kor: "매일 아침", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "tell", s: "He", p: "긍정", o: "us", o_kor: "우리에게", oc: "to sit down", oc_kor: "앉도록", kor: { 현재:"말한다.", 과거:"말했다.", 미래:"말할 것이다." }, s_kor: "그는", b_en: "in the classroom", b_kor: "교실에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "tell", s: "They", p: "긍정", o: "him", o_kor: "그에게", oc: "to be careful", oc_kor: "조심하도록", kor: { 현재:"말한다.", 과거:"말했다.", 미래:"말할 것이다." }, s_kor: "그들은", b_en: "on the road", b_kor: "도로에서", c_en: ["all the time"], c_kor: ["항상"] },
        { vBase: "tell", s: "We", p: "긍정", o: "her", o_kor: "그녀에게", oc: "to speak louder", oc_kor: "더 크게 말하도록", kor: { 현재:"말한다.", 과거:"말했다.", 미래:"말할 것이다." }, s_kor: "우리는", b_en: "in the meeting", b_kor: "회의에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "tell", s: "You", p: "긍정", o: "me", o_kor: "나에게", oc: "to try my best", oc_kor: "최선을 다하도록", kor: { 현재:"말한다.", 과거:"말했다.", 미래:"말할 것이다." }, s_kor: "너는", b_en: "before every test", b_kor: "모든 시험 전에", c_en: ["all the time"], c_kor: ["항상"] },
        { vBase: "tell", s: "The teacher", p: "긍정", o: "us", o_kor: "우리에게", oc: "to open our books", oc_kor: "책을 펴도록", kor: { 현재:"말한다.", 과거:"말했다.", 미래:"말할 것이다." }, s_kor: "선생님은", b_en: "in class", b_kor: "수업 중에", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "tell", s: "Mom", p: "긍정", o: "me", o_kor: "나에게", oc: "to eat my vegetables", oc_kor: "채소를 먹도록", kor: { 현재:"말한다.", 과거:"말했다.", 미래:"말할 것이다." }, s_kor: "엄마는", b_en: "at dinner", b_kor: "저녁 식사 때", c_en: ["every day"], c_kor: ["매일"] },
        { vBase: "tell", s: "My dad", p: "긍정", o: "me", o_kor: "나에게", oc: "to turn off the TV", oc_kor: "텔레비전을 끄도록", kor: { 현재:"말한다.", 과거:"말했다.", 미래:"말할 것이다." }, s_kor: "나의 아빠는", b_en: "before bed", b_kor: "자기 전에", c_en: ["all the time"], c_kor: ["항상"] },
        // 부정문 (9문항)
        { vBase: "tell", s: "I", p: "부정", o: "him", o_kor: "그에게", oc: "to give up", oc_kor: "포기하도록", kor: { 현재:"말하지 않는다.", 과거:"말하지 않았다.", 미래:"말하지 않을 것이다." }, s_kor: "나는", b_en: "on this matter", b_kor: "이 문제에서는", c_en: ["for any reason"], c_kor: ["결코"] },
        { vBase: "tell", s: "She", p: "부정", o: "me", o_kor: "나에게", oc: "to go there alone", oc_kor: "혼자 가도록", kor: { 현재:"말하지 않는다.", 과거:"말하지 않았다.", 미래:"말하지 않을 것이다." }, s_kor: "그녀는", b_en: "at night", b_kor: "밤에는", c_en: ["for any reason"], c_kor: ["결코"] },
        { vBase: "tell", s: "He", p: "부정", o: "us", o_kor: "우리에게", oc: "to stop the project", oc_kor: "프로젝트를 멈추도록", kor: { 현재:"말하지 않는다.", 과거:"말하지 않았다.", 미래:"말하지 않을 것이다." }, s_kor: "그는", b_en: "under any circumstances", b_kor: "어떤 상황에서도", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "tell", s: "They", p: "부정", o: "him", o_kor: "그에게", oc: "to leave the team", oc_kor: "팀을 떠나도록", kor: { 현재:"말하지 않는다.", 과거:"말하지 않았다.", 미래:"말하지 않을 것이다." }, s_kor: "그들은", b_en: "after all this time", b_kor: "이 오랜 시간 후에", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "tell", s: "We", p: "부정", o: "her", o_kor: "그녀에게", oc: "to worry", oc_kor: "걱정하도록", kor: { 현재:"말하지 않는다.", 과거:"말하지 않았다.", 미래:"말하지 않을 것이다." }, s_kor: "우리는", b_en: "about the result", b_kor: "결과에 대해", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "tell", s: "My mom", p: "부정", o: "me", o_kor: "나에게", oc: "to eat fast food", oc_kor: "패스트푸드를 먹도록", kor: { 현재:"말하지 않는다.", 과거:"말하지 않았다.", 미래:"말하지 않을 것이다." }, s_kor: "나의 엄마는", b_en: "every day", b_kor: "매일", c_en: ["of course"], c_kor: ["물론"] },
        { vBase: "tell", s: "The coach", p: "부정", o: "us", o_kor: "우리에게", oc: "to skip training", oc_kor: "훈련을 빠지도록", kor: { 현재:"말하지 않는다.", 과거:"말하지 않았다.", 미래:"말하지 않을 것이다." }, s_kor: "코치는", b_en: "for any reason", b_kor: "어떤 이유로도", c_en: ["for any reason"], c_kor: ["결코"] },
        { vBase: "tell", s: "You", p: "부정", o: "me", o_kor: "나에게", oc: "to lie to my parents", oc_kor: "부모님께 거짓말하도록", kor: { 현재:"말하지 않는다.", 과거:"말하지 않았다.", 미래:"말하지 않을 것이다." }, s_kor: "너는", b_en: "about anything", b_kor: "무엇에 대해서도", c_en: ["for any reason"], c_kor: ["결코"] },
        { vBase: "tell", s: "Dad", p: "부정", o: "me", o_kor: "나에게", oc: "to quit my hobby", oc_kor: "취미를 그만두도록", kor: { 현재:"말하지 않는다.", 과거:"말하지 않았다.", 미래:"말하지 않을 것이다." }, s_kor: "아빠는", b_en: "for my dreams", b_kor: "꿈을 위해", c_en: ["thankfully"], c_kor: ["고맙게도"] },
        // 의문문 (9문항)
        { vBase: "tell", s: "I", p: "의문", o: "you", o_kor: "너에게", oc: "to come early", oc_kor: "일찍 오도록", kor: { 현재:"말하니?", 과거:"말했니?", 미래:"말할까?" }, s_kor: "내가", b_en: "for the meeting", b_kor: "회의를 위해", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "tell", s: "She", p: "의문", o: "him", o_kor: "그에게", oc: "to wait outside", oc_kor: "밖에서 기다리도록", kor: { 현재:"말하니?", 과거:"말했니?", 미래:"말할까?" }, s_kor: "그녀는", b_en: "every time", b_kor: "매번", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "tell", s: "He", p: "의문", o: "us", o_kor: "우리에게", oc: "to start without him", oc_kor: "그 없이 시작하도록", kor: { 현재:"말하니?", 과거:"말했니?", 미래:"말할까?" }, s_kor: "그는", b_en: "in the morning", b_kor: "아침에", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "tell", s: "They", p: "의문", o: "you", o_kor: "너에게", oc: "to work harder", oc_kor: "더 열심히 일하도록", kor: { 현재:"말하니?", 과거:"말했니?", 미래:"말할까?" }, s_kor: "그들은", b_en: "at the office", b_kor: "사무실에서", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "tell", s: "We", p: "의문", o: "her", o_kor: "그녀에게", oc: "to take a break", oc_kor: "쉬도록", kor: { 현재:"말하니?", 과거:"말했니?", 미래:"말할까?" }, s_kor: "우리가", b_en: "after lunch", b_kor: "점심 식사 후에", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "tell", s: "You", p: "의문", o: "me", o_kor: "나에게", oc: "to turn off the light", oc_kor: "불을 끄도록", kor: { 현재:"말하니?", 과거:"말했니?", 미래:"말할까?" }, s_kor: "너는", b_en: "before sleeping", b_kor: "자기 전에", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "tell", s: "The teacher", p: "의문", o: "you", o_kor: "너에게", oc: "to rewrite the essay", oc_kor: "에세이를 다시 쓰도록", kor: { 현재:"말하니?", 과거:"말했니?", 미래:"말할까?" }, s_kor: "선생님이", b_en: "after class", b_kor: "수업 후에", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "tell", s: "My sister", p: "의문", o: "you", o_kor: "너에게", oc: "to bring your umbrella", oc_kor: "우산을 가져오도록", kor: { 현재:"말하니?", 과거:"말했니?", 미래:"말할까?" }, s_kor: "나의 언니는", b_en: "every rainy day", b_kor: "비 오는 날마다", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "tell", s: "He", p: "의문", o: "you", o_kor: "너에게", oc: "to call him back", oc_kor: "다시 전화하도록", kor: { 현재:"말하니?", 과거:"말했니?", 미래:"말할까?" }, s_kor: "그는", b_en: "after the class", b_kor: "수업 끝나고", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] }
    ];
        return processRawRows5(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    make: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The kids", "The parents", "The fans"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
        // 긍정문 (9문항)
        { vBase: "make", s: "I", p: "긍정", o: "him", o_kor: "그를", oc: "clean the room", oc_kor: "방을 청소하게", kor: { 현재:"시킨다.", 과거:"시켰다.", 미래:"시킬 것이다." }, s_kor: "나는", b_en: "every Saturday", b_kor: "매주 토요일에", c_en: ["without fail"], c_kor: ["반드시"] },
        { vBase: "make", s: "She", p: "긍정", o: "me", o_kor: "나를", oc: "run faster", oc_kor: "더 빨리 달리게", kor: { 현재:"시킨다.", 과거:"시켰다.", 미래:"시킬 것이다." }, s_kor: "그녀는", b_en: "at the track", b_kor: "트랙에서", c_en: ["all the time"], c_kor: ["항상"] },
        { vBase: "make", s: "He", p: "긍정", o: "us", o_kor: "우리를", oc: "do it again", oc_kor: "다시 하게", kor: { 현재:"시킨다.", 과거:"시켰다.", 미래:"시킬 것이다." }, s_kor: "그는", b_en: "until it's perfect", b_kor: "완벽해질 때까지", c_en: ["every time"], c_kor: ["매번"] },
        { vBase: "make", s: "They", p: "긍정", o: "him", o_kor: "그를", oc: "apologize", oc_kor: "사과하게", kor: { 현재:"시킨다.", 과거:"시켰다.", 미래:"시킬 것이다." }, s_kor: "그들은", b_en: "in front of everyone", b_kor: "모두 앞에서", c_en: ["finally"], c_kor: ["마침내"] },
        { vBase: "make", s: "We", p: "긍정", o: "her", o_kor: "그녀를", oc: "work harder", oc_kor: "더 열심히 일하게", kor: { 현재:"시킨다.", 과거:"시켰다.", 미래:"시킬 것이다." }, s_kor: "우리는", b_en: "at the office", b_kor: "사무실에서", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "make", s: "You", p: "긍정", o: "me", o_kor: "나를", oc: "feel nervous", oc_kor: "긴장하게", kor: { 현재:"만든다.", 과거:"만들었다.", 미래:"만들 것이다." }, s_kor: "너는", b_en: "with your words", b_kor: "네 말로", c_en: ["every time"], c_kor: ["매번"] },
        { vBase: "make", s: "The teacher", p: "긍정", o: "us", o_kor: "우리를", oc: "write it ten times", oc_kor: "열 번 쓰게", kor: { 현재:"시킨다.", 과거:"시켰다.", 미래:"시킬 것이다." }, s_kor: "선생님은", b_en: "on the board", b_kor: "칠판에", c_en: ["as a punishment"], c_kor: ["벌로"] },
        { vBase: "make", s: "Mom", p: "긍정", o: "me", o_kor: "나를", oc: "wash the dishes", oc_kor: "설거지하게", kor: { 현재:"시킨다.", 과거:"시켰다.", 미래:"시킬 것이다." }, s_kor: "엄마는", b_en: "after dinner", b_kor: "저녁 식사 후에", c_en: ["every night"], c_kor: ["매일 밤"] },
        { vBase: "make", s: "My dad", p: "긍정", o: "me", o_kor: "나를", oc: "exercise outside", oc_kor: "밖에서 운동하게", kor: { 현재:"시킨다.", 과거:"시켰다.", 미래:"시킬 것이다." }, s_kor: "나의 아빠는", b_en: "in the yard", b_kor: "마당에서", c_en: ["every morning"], c_kor: ["매일 아침"] },
        // 부정문 (9문항)
        { vBase: "make", s: "I", p: "부정", o: "him", o_kor: "그를", oc: "feel sad", oc_kor: "슬프게", kor: { 현재:"만들지 않는다.", 과거:"만들지 않았다.", 미래:"만들지 않을 것이다." }, s_kor: "나는", b_en: "on purpose", b_kor: "의도적으로", c_en: ["for any reason"], c_kor: ["결코"] },
        { vBase: "make", s: "She", p: "부정", o: "me", o_kor: "나를", oc: "do all the work", oc_kor: "모든 일을 하게", kor: { 현재:"시키지 않는다.", 과거:"시키지 않았다.", 미래:"시키지 않을 것이다." }, s_kor: "그녀는", b_en: "by myself", b_kor: "혼자서", c_en: ["fortunately"], c_kor: ["다행히도"] },
        { vBase: "make", s: "He", p: "부정", o: "us", o_kor: "우리를", oc: "stay late", oc_kor: "늦게까지 있게", kor: { 현재:"시키지 않는다.", 과거:"시키지 않았다.", 미래:"시키지 않을 것이다." }, s_kor: "그는", b_en: "at the office", b_kor: "사무실에", c_en: ["thankfully"], c_kor: ["고맙게도"] },
        { vBase: "make", s: "They", p: "부정", o: "her", o_kor: "그녀를", oc: "cry", oc_kor: "울게", kor: { 현재:"만들지 않는다.", 과거:"만들지 않았다.", 미래:"만들지 않을 것이다." }, s_kor: "그들은", b_en: "in front of others", b_kor: "다른 사람들 앞에서는", c_en: ["intentionally"], c_kor: ["의도적으로"] },
        { vBase: "make", s: "We", p: "부정", o: "him", o_kor: "그를", oc: "feel left out", oc_kor: "소외감을 느끼게", kor: { 현재:"만들지 않는다.", 과거:"만들지 않았다.", 미래:"만들지 않을 것이다." }, s_kor: "우리는", b_en: "from the group", b_kor: "그룹에서", c_en: ["for any reason"], c_kor: ["결코"] },
        { vBase: "make", s: "My mom", p: "부정", o: "me", o_kor: "나를", oc: "do the laundry", oc_kor: "빨래하게", kor: { 현재:"시키지 않는다.", 과거:"시키지 않았다.", 미래:"시키지 않을 것이다." }, s_kor: "나의 엄마는", b_en: "by hand", b_kor: "손으로", c_en: ["all the time"], c_kor: ["항상"] },
        { vBase: "make", s: "The coach", p: "부정", o: "us", o_kor: "우리를", oc: "train in the rain", oc_kor: "비 속에서 훈련하게", kor: { 현재:"시키지 않는다.", 과거:"시키지 않았다.", 미래:"시키지 않을 것이다." }, s_kor: "코치는", b_en: "when it's too cold", b_kor: "너무 추울 때는", c_en: ["thankfully"], c_kor: ["고맙게도"] },
        { vBase: "make", s: "You", p: "부정", o: "me", o_kor: "나를", oc: "feel ashamed", oc_kor: "창피하게", kor: { 현재:"만들지 않는다.", 과거:"만들지 않았다.", 미래:"만들지 않을 것이다." }, s_kor: "너는", b_en: "in public", b_kor: "공공장소에서", c_en: ["for any reason"], c_kor: ["결코"] },
        { vBase: "make", s: "Dad", p: "부정", o: "me", o_kor: "나를", oc: "wake up early", oc_kor: "일찍 일어나게", kor: { 현재:"시키지 않는다.", 과거:"시키지 않았다.", 미래:"시키지 않을 것이다." }, s_kor: "아빠는", b_en: "on weekends", b_kor: "주말에는", c_en: ["thankfully"], c_kor: ["다행히도"] },
        // 의문문 (9문항)
        { vBase: "make", s: "I", p: "의문", o: "you", o_kor: "너를", oc: "do all the chores", oc_kor: "집안일을 다 하게", kor: { 현재:"시키니?", 과거:"시켰니?", 미래:"시킬까?" }, s_kor: "내가", b_en: "at home", b_kor: "집에서", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "make", s: "She", p: "의문", o: "him", o_kor: "그를", oc: "repeat the task", oc_kor: "과제를 반복하게", kor: { 현재:"시키니?", 과거:"시켰니?", 미래:"시킬까?" }, s_kor: "그녀가", b_en: "every time", b_kor: "매번", c_en: ["again"], c_kor: ["또"] },
        { vBase: "make", s: "He", p: "의문", o: "you", o_kor: "너를", oc: "feel happy", oc_kor: "행복하게", kor: { 현재:"만드니?", 과거:"만들었니?", 미래:"만들까?" }, s_kor: "그가", b_en: "with his jokes", b_kor: "그의 농담으로", c_en: ["all the time"], c_kor: ["항상"] },
        { vBase: "make", s: "They", p: "의문", o: "you", o_kor: "너를", oc: "study on holidays", oc_kor: "공휴일에 공부하게", kor: { 현재:"시키니?", 과거:"시켰니?", 미래:"시킬까?" }, s_kor: "그들이", b_en: "at the academy", b_kor: "학원에서", c_en: [ADV.TY_EN], c_kor: [ADV.TY_KR] },
        { vBase: "make", s: "We", p: "의문", o: "her", o_kor: "그녀를", oc: "present alone", oc_kor: "혼자 발표하게", kor: { 현재:"시키니?", 과거:"시켰니?", 미래:"시킬까?" }, s_kor: "우리가", b_en: "in class", b_kor: "수업 시간에", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "make", s: "You", p: "의문", o: "me", o_kor: "나를", oc: "write it again", oc_kor: "다시 쓰게", kor: { 현재:"시키니?", 과거:"시켰니?", 미래:"시킬까?" }, s_kor: "네가", b_en: "every morning", b_kor: "매일 아침", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "make", s: "The teacher", p: "의문", o: "you", o_kor: "너를", oc: "stay after class", oc_kor: "수업 후에 남게", kor: { 현재:"시키니?", 과거:"시켰니?", 미래:"시킬까?" }, s_kor: "선생님이", b_en: "for being late", b_kor: "지각 때문에", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "make", s: "Mom", p: "의문", o: "you", o_kor: "너를", oc: "go to bed early", oc_kor: "일찍 자게", kor: { 현재:"시키니?", 과거:"시켰니?", 미래:"시킬까?" }, s_kor: "엄마가", b_en: "on school nights", b_kor: "학교 가는 날 밤에는", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "make", s: "He", p: "의문", o: "you", o_kor: "너를", oc: "wait outside", oc_kor: "밖에서 기다리게", kor: { 현재:"시키니?", 과거:"시켰니?", 미래:"시킬까?" }, s_kor: "그가", b_en: "in the cold", b_kor: "추운 날씨에", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] }
    ];
        return processRawRows5(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    let: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The kids", "The parents", "The fans"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
        // 긍정문 (9문항)
        { vBase: "let", s: "I", p: "긍정", o: "him", o_kor: "그를", oc: "go home early", oc_kor: "일찍 집에 가게", kor: { 현재:"허락한다.", 과거:"허락했다.", 미래:"허락할 것이다." }, s_kor: "나는", b_en: "after the work", b_kor: "일이 끝난 후에", c_en: ["gladly"], c_kor: ["기꺼이"] },
        { vBase: "let", s: "She", p: "긍정", o: "me", o_kor: "나를", oc: "play outside", oc_kor: "밖에서 놀게", kor: { 현재:"허락한다.", 과거:"허락했다.", 미래:"허락할 것이다." }, s_kor: "그녀는", b_en: "after school", b_kor: "방과 후에", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "let", s: "He", p: "긍정", o: "us", o_kor: "우리를", oc: "try again", oc_kor: "다시 시도하게", kor: { 현재:"허락한다.", 과거:"허락했다.", 미래:"허락할 것이다." }, s_kor: "그는", b_en: "one more time", b_kor: "한 번 더", c_en: ["kindly"], c_kor: ["친절하게"] },
        { vBase: "let", s: "They", p: "긍정", o: "her", o_kor: "그녀를", oc: "speak first", oc_kor: "먼저 말하게", kor: { 현재:"허락한다.", 과거:"허락했다.", 미래:"허락할 것이다." }, s_kor: "그들은", b_en: "at the meeting", b_kor: "회의에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "let", s: "We", p: "긍정", o: "him", o_kor: "그를", oc: "lead the group", oc_kor: "그룹을 이끌게", kor: { 현재:"허락한다.", 과거:"허락했다.", 미래:"허락할 것이다." }, s_kor: "우리는", b_en: "for this project", b_kor: "이 프로젝트를 위해", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "let", s: "You", p: "긍정", o: "me", o_kor: "나를", oc: "know the answer", oc_kor: "답을 알게", kor: { 현재:"허락한다.", 과거:"허락했다.", 미래:"허락할 것이다." }, s_kor: "너는", b_en: "in a hint", b_kor: "힌트로", c_en: ["quietly"], c_kor: ["조용히"] },
        { vBase: "let", s: "Mom", p: "긍정", o: "me", o_kor: "나를", oc: "stay up late", oc_kor: "늦게까지 자지 않게", kor: { 현재:"허락한다.", 과거:"허락했다.", 미래:"허락할 것이다." }, s_kor: "엄마는", b_en: "on weekends", b_kor: "주말에는", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "let", s: "The teacher", p: "긍정", o: "us", o_kor: "우리를", oc: "leave early", oc_kor: "일찍 떠나게", kor: { 현재:"허락한다.", 과거:"허락했다.", 미래:"허락할 것이다." }, s_kor: "선생님은", b_en: "after the exam", b_kor: "시험 후에", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "let", s: "My dad", p: "긍정", o: "me", o_kor: "나를", oc: "use his computer", oc_kor: "그의 컴퓨터를 사용하게", kor: { 현재:"허락한다.", 과거:"허락했다.", 미래:"허락할 것이다." }, s_kor: "나의 아빠는", b_en: "on weekends", b_kor: "주말에는", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        // 부정문 (9문항)
        { vBase: "let", s: "I", p: "부정", o: "him", o_kor: "그를", oc: "go alone", oc_kor: "혼자 가게", kor: { 현재:"허락하지 않는다.", 과거:"허락하지 않았다.", 미래:"허락하지 않을 것이다." }, s_kor: "나는", b_en: "at night", b_kor: "밤에는", c_en: ["for any reason"], c_kor: ["결코"] },
        { vBase: "let", s: "She", p: "부정", o: "me", o_kor: "나를", oc: "eat junk food", oc_kor: "정크푸드를 먹게", kor: { 현재:"허락하지 않는다.", 과거:"허락하지 않았다.", 미래:"허락하지 않을 것이다." }, s_kor: "그녀는", b_en: "before dinner", b_kor: "저녁 식사 전에는", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "let", s: "He", p: "부정", o: "us", o_kor: "우리를", oc: "skip the meeting", oc_kor: "회의를 빠지게", kor: { 현재:"허락하지 않는다.", 과거:"허락하지 않았다.", 미래:"허락하지 않을 것이다." }, s_kor: "그는", b_en: "without a reason", b_kor: "이유 없이는", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "let", s: "They", p: "부정", o: "him", o_kor: "그를", oc: "enter the building", oc_kor: "건물에 들어가게", kor: { 현재:"허락하지 않는다.", 과거:"허락하지 않았다.", 미래:"허락하지 않을 것이다." }, s_kor: "그들은", b_en: "without a pass", b_kor: "출입증 없이는", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "let", s: "We", p: "부정", o: "her", o_kor: "그녀를", oc: "work late", oc_kor: "늦게까지 일하게", kor: { 현재:"허락하지 않는다.", 과거:"허락하지 않았다.", 미래:"허락하지 않을 것이다." }, s_kor: "우리는", b_en: "in her condition", b_kor: "그녀의 상태에서는", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "let", s: "My mom", p: "부정", o: "me", o_kor: "나를", oc: "watch TV all day", oc_kor: "하루 종일 텔레비전을 보게", kor: { 현재:"허락하지 않는다.", 과거:"허락하지 않았다.", 미래:"허락하지 않을 것이다." }, s_kor: "나의 엄마는", b_en: "during exams", b_kor: "시험 기간에는", c_en: ["of course"], c_kor: ["당연히"] },
        { vBase: "let", s: "The coach", p: "부정", o: "us", o_kor: "우리를", oc: "skip warm-ups", oc_kor: "준비 운동을 건너뛰게", kor: { 현재:"허락하지 않는다.", 과거:"허락하지 않았다.", 미래:"허락하지 않을 것이다." }, s_kor: "코치는", b_en: "before training", b_kor: "훈련 전에는", c_en: ["for any reason"], c_kor: ["결코"] },
        { vBase: "let", s: "You", p: "부정", o: "me", o_kor: "나를", oc: "explain myself", oc_kor: "내 입장을 설명하게", kor: { 현재:"허락하지 않는다.", 과거:"허락하지 않았다.", 미래:"허락하지 않을 것이다." }, s_kor: "너는", b_en: "at that moment", b_kor: "그 순간에는", c_en: ["unfortunately"], c_kor: ["아쉽게도"] },
        { vBase: "let", s: "Dad", p: "부정", o: "me", o_kor: "나를", oc: "drive the car", oc_kor: "차를 운전하게", kor: { 현재:"허락하지 않는다.", 과거:"허락하지 않았다.", 미래:"허락하지 않을 것이다." }, s_kor: "아빠는", b_en: "until I'm older", b_kor: "내가 더 클 때까지", c_en: ["of course"], c_kor: ["물론"] },
        // 의문문 (9문항)
        { vBase: "let", s: "I", p: "의문", o: "you", o_kor: "너를", oc: "come in", oc_kor: "들어오게", kor: { 현재:"허락하니?", 과거:"허락했니?", 미래:"허락할까?" }, s_kor: "내가", b_en: "at this hour", b_kor: "이 시간에", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "let", s: "She", p: "의문", o: "him", o_kor: "그를", oc: "use her phone", oc_kor: "그녀의 전화기를 사용하게", kor: { 현재:"허락하니?", 과거:"허락했니?", 미래:"허락할까?" }, s_kor: "그녀가", b_en: "at school", b_kor: "학교에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "let", s: "He", p: "의문", o: "us", o_kor: "우리를", oc: "borrow the book", oc_kor: "책을 빌리게", kor: { 현재:"허락하니?", 과거:"허락했니?", 미래:"허락할까?" }, s_kor: "그가", b_en: "from his shelf", b_kor: "그의 책장에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "let", s: "They", p: "의문", o: "you", o_kor: "너를", oc: "join the group", oc_kor: "그룹에 합류하게", kor: { 현재:"허락하니?", 과거:"허락했니?", 미래:"허락할까?" }, s_kor: "그들이", b_en: "at last", b_kor: "마침내", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "let", s: "We", p: "의문", o: "him", o_kor: "그를", oc: "decide this time", oc_kor: "이번에는 결정하게", kor: { 현재:"허락하니?", 과거:"허락했니?", 미래:"허락할까?" }, s_kor: "우리가", b_en: "for the group", b_kor: "그룹을 위해", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "let", s: "You", p: "의문", o: "me", o_kor: "나를", oc: "try one more time", oc_kor: "한 번 더 시도하게", kor: { 현재:"허락하니?", 과거:"허락했니?", 미래:"허락할까?" }, s_kor: "네가", b_en: "before giving up", b_kor: "포기하기 전에", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "let", s: "Mom", p: "의문", o: "you", o_kor: "너를", oc: "go to the party", oc_kor: "파티에 가게", kor: { 현재:"허락하니?", 과거:"허락했니?", 미래:"허락할까?" }, s_kor: "엄마가", b_en: "on Friday", b_kor: "금요일에", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "let", s: "The teacher", p: "의문", o: "you", o_kor: "너를", oc: "leave the class", oc_kor: "수업을 떠나게", kor: { 현재:"허락하니?", 과거:"허락했니?", 미래:"허락할까?" }, s_kor: "선생님이", b_en: "during the lesson", b_kor: "수업 도중에", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "let", s: "He", p: "의문", o: "you", o_kor: "너를", oc: "sit next to him", oc_kor: "옆에 앉게", kor: { 현재:"허락하니?", 과거:"허락했니?", 미래:"허락할까?" }, s_kor: "그가", b_en: "at the table", b_kor: "식탁에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] }
    ];
        return processRawRows5(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    have: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The kids", "The parents", "The fans"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
        // 긍정문 (9문항)
        { vBase: "have", s: "I", p: "긍정", o: "him", o_kor: "그를", oc: "fix the computer", oc_kor: "컴퓨터를 고치게", kor: { 현재:"시킨다.", 과거:"시켰다.", 미래:"시킬 것이다." }, s_kor: "나는", b_en: "right away", b_kor: "바로", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "have", s: "She", p: "긍정", o: "me", o_kor: "나를", oc: "deliver the letter", oc_kor: "편지를 전달하게", kor: { 현재:"시킨다.", 과거:"시켰다.", 미래:"시킬 것이다." }, s_kor: "그녀는", b_en: "to the next building", b_kor: "옆 건물로", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "have", s: "He", p: "긍정", o: "us", o_kor: "우리를", oc: "prepare the report", oc_kor: "보고서를 준비하게", kor: { 현재:"시킨다.", 과거:"시켰다.", 미래:"시킬 것이다." }, s_kor: "그는", b_en: "for the meeting", b_kor: "회의를 위해", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "have", s: "They", p: "긍정", o: "her", o_kor: "그녀를", oc: "call the client", oc_kor: "고객에게 전화하게", kor: { 현재:"시킨다.", 과거:"시켰다.", 미래:"시킬 것이다." }, s_kor: "그들은", b_en: "right away", b_kor: "바로", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "have", s: "We", p: "긍정", o: "him", o_kor: "그를", oc: "wash the car", oc_kor: "차를 세차하게", kor: { 현재:"시킨다.", 과거:"시켰다.", 미래:"시킬 것이다." }, s_kor: "우리는", b_en: "in the garage", b_kor: "차고에서", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "have", s: "You", p: "긍정", o: "me", o_kor: "나를", oc: "rewrite the essay", oc_kor: "에세이를 다시 쓰게", kor: { 현재:"시킨다.", 과거:"시켰다.", 미래:"시킬 것이다." }, s_kor: "너는", b_en: "from the beginning", b_kor: "처음부터", c_en: ["every time"], c_kor: ["매번"] },
        { vBase: "have", s: "The teacher", p: "긍정", o: "us", o_kor: "우리를", oc: "present our work", oc_kor: "작업물을 발표하게", kor: { 현재:"시킨다.", 과거:"시켰다.", 미래:"시킬 것이다." }, s_kor: "선생님은", b_en: "in front of the class", b_kor: "반 앞에서", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "have", s: "Mom", p: "긍정", o: "me", o_kor: "나를", oc: "set the table", oc_kor: "식탁을 차리게", kor: { 현재:"시킨다.", 과거:"시켰다.", 미래:"시킬 것이다." }, s_kor: "엄마는", b_en: "before dinner", b_kor: "저녁 식사 전에", c_en: ["every evening"], c_kor: ["매일 저녁"] },
        { vBase: "have", s: "My dad", p: "긍정", o: "me", o_kor: "나를", oc: "cut the grass", oc_kor: "잔디를 깎게", kor: { 현재:"시킨다.", 과거:"시켰다.", 미래:"시킬 것이다." }, s_kor: "나의 아빠는", b_en: "in the backyard", b_kor: "뒷마당에서", c_en: ["every weekend"], c_kor: ["매주 주말에"] },
        // 부정문 (9문항)
        { vBase: "have", s: "I", p: "부정", o: "him", o_kor: "그를", oc: "do it alone", oc_kor: "혼자 하게", kor: { 현재:"시키지 않는다.", 과거:"시키지 않았다.", 미래:"시키지 않을 것이다." }, s_kor: "나는", b_en: "this time", b_kor: "이번에는", c_en: ["fortunately"], c_kor: ["다행히도"] },
        { vBase: "have", s: "She", p: "부정", o: "me", o_kor: "나를", oc: "work overtime", oc_kor: "야근하게", kor: { 현재:"시키지 않는다.", 과거:"시키지 않았다.", 미래:"시키지 않을 것이다." }, s_kor: "그녀는", b_en: "without extra pay", b_kor: "추가 보수 없이는", c_en: ["thankfully"], c_kor: ["고맙게도"] },
        { vBase: "have", s: "He", p: "부정", o: "us", o_kor: "우리를", oc: "redo the project", oc_kor: "프로젝트를 다시 하게", kor: { 현재:"시키지 않는다.", 과거:"시키지 않았다.", 미래:"시키지 않을 것이다." }, s_kor: "그는", b_en: "again", b_kor: "다시는", c_en: ["thankfully"], c_kor: ["다행히도"] },
        { vBase: "have", s: "They", p: "부정", o: "her", o_kor: "그녀를", oc: "work on weekends", oc_kor: "주말에 일하게", kor: { 현재:"시키지 않는다.", 과거:"시키지 않았다.", 미래:"시키지 않을 것이다." }, s_kor: "그들은", b_en: "for any reason", b_kor: "어떤 이유에서든", c_en: ["luckily"], c_kor: ["운 좋게도"] },
        { vBase: "have", s: "We", p: "부정", o: "him", o_kor: "그를", oc: "move the heavy boxes", oc_kor: "무거운 상자를 옮기게", kor: { 현재:"시키지 않는다.", 과거:"시키지 않았다.", 미래:"시키지 않을 것이다." }, s_kor: "우리는", b_en: "by himself", b_kor: "혼자서는", c_en: ["for any reason"], c_kor: ["결코"] },
        { vBase: "have", s: "My mom", p: "부정", o: "me", o_kor: "나를", oc: "skip meals", oc_kor: "식사를 건너뛰게", kor: { 현재:"시키지 않는다.", 과거:"시키지 않았다.", 미래:"시키지 않을 것이다." }, s_kor: "나의 엄마는", b_en: "for any reason", b_kor: "어떤 이유로도", c_en: ["for any reason"], c_kor: ["결코"] },
        { vBase: "have", s: "The coach", p: "부정", o: "us", o_kor: "우리를", oc: "train when sick", oc_kor: "아플 때 훈련하게", kor: { 현재:"시키지 않는다.", 과거:"시키지 않았다.", 미래:"시키지 않을 것이다." }, s_kor: "코치는", b_en: "thankfully", b_kor: "다행히도", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "have", s: "You", p: "부정", o: "me", o_kor: "나를", oc: "stay behind", oc_kor: "뒤에 남게", kor: { 현재:"시키지 않는다.", 과거:"시키지 않았다.", 미래:"시키지 않을 것이다." }, s_kor: "너는", b_en: "after everyone left", b_kor: "모두 떠난 후에도", c_en: ["at least"], c_kor: ["적어도"] },
        { vBase: "have", s: "Dad", p: "부정", o: "me", o_kor: "나를", oc: "clean the whole house", oc_kor: "집 전체를 청소하게", kor: { 현재:"시키지 않는다.", 과거:"시키지 않았다.", 미래:"시키지 않을 것이다." }, s_kor: "아빠는", b_en: "by myself", b_kor: "혼자서는", c_en: ["at least"], c_kor: ["적어도"] },
        // 의문문 (9문항)
        { vBase: "have", s: "I", p: "의문", o: "you", o_kor: "너를", oc: "copy all of this", oc_kor: "이것을 모두 복사하게", kor: { 현재:"시키니?", 과거:"시켰니?", 미래:"시킬까?" }, s_kor: "내가", b_en: "by hand", b_kor: "손으로", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "have", s: "She", p: "의문", o: "him", o_kor: "그를", oc: "check the numbers again", oc_kor: "숫자를 다시 확인하게", kor: { 현재:"시키니?", 과거:"시켰니?", 미래:"시킬까?" }, s_kor: "그녀가", b_en: "this morning", b_kor: "오늘 아침에", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "have", s: "He", p: "의문", o: "you", o_kor: "너를", oc: "return the books", oc_kor: "책을 반납하게", kor: { 현재:"시키니?", 과거:"시켰니?", 미래:"시킬까?" }, s_kor: "그가", b_en: "to the library", b_kor: "도서관에", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "have", s: "They", p: "의문", o: "you", o_kor: "너를", oc: "redo the test", oc_kor: "시험을 다시 치르게", kor: { 현재:"시키니?", 과거:"시켰니?", 미래:"시킬까?" }, s_kor: "그들이", b_en: "because of the score", b_kor: "점수 때문에", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "have", s: "We", p: "의문", o: "him", o_kor: "그를", oc: "paint the fence", oc_kor: "울타리를 칠하게", kor: { 현재:"시키니?", 과거:"시켰니?", 미래:"시킬까?" }, s_kor: "우리가", b_en: "in the yard", b_kor: "마당에서", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "have", s: "You", p: "의문", o: "me", o_kor: "나를", oc: "do all of this", oc_kor: "이것을 모두 하게", kor: { 현재:"시키니?", 과거:"시켰니?", 미래:"시킬까?" }, s_kor: "네가", b_en: "by tomorrow", b_kor: "내일까지", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "have", s: "The teacher", p: "의문", o: "you", o_kor: "너를", oc: "translate the passage", oc_kor: "지문을 번역하게", kor: { 현재:"시키니?", 과거:"시켰니?", 미래:"시킬까?" }, s_kor: "선생님이", b_en: "in front of everyone", b_kor: "모두 앞에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "have", s: "Mom", p: "의문", o: "you", o_kor: "너를", oc: "iron the clothes", oc_kor: "옷을 다리게", kor: { 현재:"시키니?", 과거:"시켰니?", 미래:"시킬까?" }, s_kor: "엄마가", b_en: "for the trip", b_kor: "여행을 위해", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "have", s: "He", p: "의문", o: "you", o_kor: "너를", oc: "clean the office", oc_kor: "사무실을 청소하게", kor: { 현재:"시키니?", 과거:"시켰니?", 미래:"시킬까?" }, s_kor: "그가", b_en: "on your own", b_kor: "혼자서", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] }
    ];
        return processRawRows5(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    help: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The kids", "The students", "The fans"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
        // 긍정문 (9문항)
        { vBase: "help", s: "I", p: "긍정", o: "him", o_kor: "그가", oc: "carry the bag", oc_kor: "가방을 들게", kor: { 현재:"돕는다.", 과거:"도왔다.", 미래:"도울 것이다." }, s_kor: "나는", b_en: "to the station", b_kor: "역까지", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "help", s: "She", p: "긍정", o: "me", o_kor: "내가", oc: "find the answer", oc_kor: "답을 찾게", kor: { 현재:"돕는다.", 과거:"도왔다.", 미래:"도울 것이다." }, s_kor: "그녀는", b_en: "on the worksheet", b_kor: "학습지에서", c_en: ["patiently"], c_kor: ["인내심 있게"] },
        { vBase: "help", s: "He", p: "긍정", o: "us", o_kor: "우리가", oc: "finish the work", oc_kor: "일을 끝내게", kor: { 현재:"돕는다.", 과거:"도왔다.", 미래:"도울 것이다." }, s_kor: "그는", b_en: "on time", b_kor: "시간 맞춰", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "help", s: "They", p: "긍정", o: "her", o_kor: "그녀가", oc: "move the furniture", oc_kor: "가구를 옮기게", kor: { 현재:"돕는다.", 과거:"도왔다.", 미래:"도울 것이다." }, s_kor: "그들은", b_en: "to the new apartment", b_kor: "새 아파트로", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "help", s: "We", p: "긍정", o: "him", o_kor: "그가", oc: "build a birdhouse", oc_kor: "새집을 짓게", kor: { 현재:"돕는다.", 과거:"도왔다.", 미래:"도울 것이다." }, s_kor: "우리는", b_en: "in the workshop", b_kor: "작업실에서", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "help", s: "You", p: "긍정", o: "me", o_kor: "내가", oc: "understand the lesson", oc_kor: "수업을 이해하게", kor: { 현재:"돕는다.", 과거:"도왔다.", 미래:"도울 것이다." }, s_kor: "너는", b_en: "with your explanation", b_kor: "네 설명으로", c_en: ["all the time"], c_kor: ["항상"] },
        { vBase: "help", s: "The teacher", p: "긍정", o: "us", o_kor: "우리가", oc: "solve the problem", oc_kor: "문제를 풀게", kor: { 현재:"돕는다.", 과거:"도왔다.", 미래:"도울 것이다." }, s_kor: "선생님은", b_en: "step by step", b_kor: "단계적으로", c_en: ["kindly"], c_kor: ["친절하게"] },
        { vBase: "help", s: "My friend", p: "긍정", o: "me", o_kor: "내가", oc: "prepare for the test", oc_kor: "시험 준비를 하게", kor: { 현재:"돕는다.", 과거:"도왔다.", 미래:"도울 것이다." }, s_kor: "나의 친구는", b_en: "after school", b_kor: "방과 후에", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "help", s: "Mom", p: "긍정", o: "me", o_kor: "내가", oc: "pack my bag", oc_kor: "가방을 챙기게", kor: { 현재:"돕는다.", 과거:"도왔다.", 미래:"도울 것이다." }, s_kor: "엄마는", b_en: "before the trip", b_kor: "여행 전에", c_en: ["lovingly"], c_kor: ["사랑스럽게"] },
        // 부정문 (9문항)
        { vBase: "help", s: "I", p: "부정", o: "him", o_kor: "그가", oc: "cheat on the test", oc_kor: "시험에서 부정행위 하게", kor: { 현재:"돕지 않는다.", 과거:"돕지 않았다.", 미래:"돕지 않을 것이다." }, s_kor: "나는", b_en: "under any circumstances", b_kor: "어떤 상황에서도", c_en: ["for any reason"], c_kor: ["결코"] },
        { vBase: "help", s: "She", p: "부정", o: "me", o_kor: "내가", oc: "finish the project", oc_kor: "프로젝트를 끝내게", kor: { 현재:"돕지 않는다.", 과거:"돕지 않았다.", 미래:"돕지 않을 것이다." }, s_kor: "그녀는", b_en: "this time", b_kor: "이번에는", c_en: ["unfortunately"], c_kor: ["안타깝게도"] },
        { vBase: "help", s: "He", p: "부정", o: "us", o_kor: "우리가", oc: "clean up the mess", oc_kor: "어지럽혀진 것을 치우게", kor: { 현재:"돕지 않는다.", 과거:"돕지 않았다.", 미래:"돕지 않을 것이다." }, s_kor: "그는", b_en: "after the party", b_kor: "파티 후에", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "help", s: "They", p: "부정", o: "her", o_kor: "그녀가", oc: "carry the heavy boxes", oc_kor: "무거운 상자를 들게", kor: { 현재:"돕지 않는다.", 과거:"돕지 않았다.", 미래:"돕지 않을 것이다." }, s_kor: "그들은", b_en: "to the truck", b_kor: "트럭까지", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "help", s: "We", p: "부정", o: "him", o_kor: "그가", oc: "escape responsibility", oc_kor: "책임에서 빠져나가게", kor: { 현재:"돕지 않는다.", 과거:"돕지 않았다.", 미래:"돕지 않을 것이다." }, s_kor: "우리는", b_en: "this time", b_kor: "이번에는", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "help", s: "My mom", p: "부정", o: "me", o_kor: "내가", oc: "avoid my problems", oc_kor: "내 문제를 피하게", kor: { 현재:"돕지 않는다.", 과거:"돕지 않았다.", 미래:"돕지 않을 것이다." }, s_kor: "나의 엄마는", b_en: "of course", b_kor: "당연히", c_en: ["for any reason"], c_kor: ["결코"] },
        { vBase: "help", s: "The coach", p: "부정", o: "us", o_kor: "우리가", oc: "give up easily", oc_kor: "쉽게 포기하게", kor: { 현재:"돕지 않는다.", 과거:"돕지 않았다.", 미래:"돕지 않을 것이다." }, s_kor: "코치는", b_en: "no matter what", b_kor: "무슨 일이 있어도", c_en: ["for any reason"], c_kor: ["결코"] },
        { vBase: "help", s: "You", p: "부정", o: "me", o_kor: "내가", oc: "find a shortcut", oc_kor: "지름길을 찾게", kor: { 현재:"돕지 않는다.", 과거:"돕지 않았다.", 미래:"돕지 않을 것이다." }, s_kor: "너는", b_en: "for this kind of work", b_kor: "이런 종류의 일에서는", c_en: ["unfortunately"], c_kor: ["안타깝게도"] },
        { vBase: "help", s: "Dad", p: "부정", o: "me", o_kor: "내가", oc: "skip my homework", oc_kor: "숙제를 건너뛰게", kor: { 현재:"돕지 않는다.", 과거:"돕지 않았다.", 미래:"돕지 않을 것이다." }, s_kor: "아빠는", b_en: "on weekdays", b_kor: "평일에는", c_en: ["of course"], c_kor: ["물론"] },
        // 의문문 (9문항)
        { vBase: "help", s: "I", p: "의문", o: "you", o_kor: "네가", oc: "pack your bag", oc_kor: "가방을 챙기게", kor: { 현재:"도와주니?", 과거:"도와줬니?", 미래:"도와줄까?" }, s_kor: "내가", b_en: "for the trip", b_kor: "여행을 위해", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "help", s: "She", p: "의문", o: "him", o_kor: "그가", oc: "study for the exam", oc_kor: "시험 공부를 하게", kor: { 현재:"도와주니?", 과거:"도와줬니?", 미래:"도와줄까?" }, s_kor: "그녀가", b_en: "at her house", b_kor: "그녀의 집에서", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "help", s: "He", p: "의문", o: "us", o_kor: "우리가", oc: "set up the tent", oc_kor: "텐트를 치게", kor: { 현재:"도와주니?", 과거:"도와줬니?", 미래:"도와줄까?" }, s_kor: "그가", b_en: "at the campsite", b_kor: "캠프장에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "help", s: "They", p: "의문", o: "you", o_kor: "네가", oc: "understand the rules", oc_kor: "규칙을 이해하게", kor: { 현재:"도와주니?", 과거:"도와줬니?", 미래:"도와줄까?" }, s_kor: "그들이", b_en: "at first", b_kor: "처음에", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "help", s: "We", p: "의문", o: "her", o_kor: "그녀가", oc: "decorate the classroom", oc_kor: "교실을 꾸미게", kor: { 현재:"도와주니?", 과거:"도와줬니?", 미래:"도와줄까?" }, s_kor: "우리가", b_en: "for the party", b_kor: "파티를 위해", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "help", s: "You", p: "의문", o: "me", o_kor: "내가", oc: "fix this mistake", oc_kor: "이 실수를 고치게", kor: { 현재:"도와주니?", 과거:"도와줬니?", 미래:"도와줄까?" }, s_kor: "네가", b_en: "before the deadline", b_kor: "마감 전에", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "help", s: "The teacher", p: "의문", o: "you", o_kor: "네가", oc: "write the essay", oc_kor: "에세이를 쓰게", kor: { 현재:"도와주니?", 과거:"도와줬니?", 미래:"도와줄까?" }, s_kor: "선생님이", b_en: "after class", b_kor: "수업 후에", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "help", s: "My sister", p: "의문", o: "me", o_kor: "내가", oc: "choose the right dress", oc_kor: "올바른 드레스를 고르게", kor: { 현재:"도와주니?", 과거:"도와줬니?", 미래:"도와줄까?" }, s_kor: "나의 언니가", b_en: "for the event", b_kor: "행사를 위해", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "help", s: "He", p: "의문", o: "you", o_kor: "네가", oc: "learn the new software", oc_kor: "새 소프트웨어를 배우게", kor: { 현재:"도와주니?", 과거:"도와줬니?", 미래:"도와줄까?" }, s_kor: "그가", b_en: "at the office", b_kor: "사무실에서", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] }
    ];
        return processRawRows5(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    get: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The kids", "The students", "The fans"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
        // 긍정문 (9문항)
        { vBase: "get", s: "I", p: "긍정", o: "him", o_kor: "그가", oc: "to try again", oc_kor: "다시 시도하도록", kor: { 현재:"하게 한다.", 과거:"하게 했다.", 미래:"하게 할 것이다." }, s_kor: "나는", b_en: "with some encouragement", b_kor: "약간의 격려로", c_en: ["finally"], c_kor: ["마침내"] },
        { vBase: "get", s: "She", p: "긍정", o: "me", o_kor: "내가", oc: "to eat vegetables", oc_kor: "채소를 먹도록", kor: { 현재:"하게 한다.", 과거:"하게 했다.", 미래:"하게 할 것이다." }, s_kor: "그녀는", b_en: "with a trick", b_kor: "한 가지 방법으로", c_en: ["every day"], c_kor: ["매일"] },
        { vBase: "get", s: "He", p: "긍정", o: "us", o_kor: "우리가", oc: "to agree with his plan", oc_kor: "그의 계획에 동의하도록", kor: { 현재:"하게 한다.", 과거:"하게 했다.", 미래:"하게 할 것이다." }, s_kor: "그는", b_en: "at the meeting", b_kor: "회의에서", c_en: ["finally"], c_kor: ["마침내"] },
        { vBase: "get", s: "They", p: "긍정", o: "him", o_kor: "그가", oc: "to join the team", oc_kor: "팀에 합류하도록", kor: { 현재:"하게 한다.", 과거:"하게 했다.", 미래:"하게 할 것이다." }, s_kor: "그들은", b_en: "after long talks", b_kor: "오랜 설득 끝에", c_en: [ADV.TY_EN], c_kor: [ADV.TY_KR] },
        { vBase: "get", s: "We", p: "긍정", o: "her", o_kor: "그녀가", oc: "to change her mind", oc_kor: "마음을 바꾸도록", kor: { 현재:"하게 한다.", 과거:"하게 했다.", 미래:"하게 할 것이다." }, s_kor: "우리는", b_en: "in the end", b_kor: "결국에는", c_en: ["thankfully"], c_kor: ["다행히도"] },
        { vBase: "get", s: "You", p: "긍정", o: "me", o_kor: "내가", oc: "to smile", oc_kor: "미소 짓도록", kor: { 현재:"하게 한다.", 과거:"하게 했다.", 미래:"하게 할 것이다." }, s_kor: "너는", b_en: "even on bad days", b_kor: "힘든 날에도", c_en: ["all the time"], c_kor: ["항상"] },
        { vBase: "get", s: "The teacher", p: "긍정", o: "us", o_kor: "우리가", oc: "to think more deeply", oc_kor: "더 깊이 생각하도록", kor: { 현재:"하게 한다.", 과거:"하게 했다.", 미래:"하게 할 것이다." }, s_kor: "선생님은", b_en: "with tough questions", b_kor: "어려운 질문으로", c_en: ["every class"], c_kor: ["매 수업마다"] },
        { vBase: "get", s: "My friend", p: "긍정", o: "me", o_kor: "내가", oc: "to exercise regularly", oc_kor: "규칙적으로 운동하도록", kor: { 현재:"하게 한다.", 과거:"하게 했다.", 미래:"하게 할 것이다." }, s_kor: "나의 친구는", b_en: "at the gym", b_kor: "헬스장에서", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "get", s: "Mom", p: "긍정", o: "me", o_kor: "내가", oc: "to read every night", oc_kor: "매일 밤 읽도록", kor: { 현재:"하게 한다.", 과거:"하게 했다.", 미래:"하게 할 것이다." }, s_kor: "엄마는", b_en: "before bed", b_kor: "자기 전에", c_en: ["all the time"], c_kor: ["항상"] },
        // 부정문 (9문항)
        { vBase: "get", s: "I", p: "부정", o: "him", o_kor: "그가", oc: "to change his opinion", oc_kor: "의견을 바꾸도록", kor: { 현재:"하게 하지 못한다.", 과거:"하게 하지 못했다.", 미래:"하게 하지 못할 것이다." }, s_kor: "나는", b_en: "no matter what", b_kor: "무슨 말을 해도", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "get", s: "She", p: "부정", o: "me", o_kor: "내가", oc: "to give up my goal", oc_kor: "목표를 포기하도록", kor: { 현재:"하게 하지 못한다.", 과거:"하게 하지 못했다.", 미래:"하게 하지 못할 것이다." }, s_kor: "그녀는", b_en: "for any reason", b_kor: "결코", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "get", s: "He", p: "부정", o: "us", o_kor: "우리가", oc: "to work for free", oc_kor: "무보수로 일하도록", kor: { 현재:"하게 하지 못한다.", 과거:"하게 하지 못했다.", 미래:"하게 하지 못할 것이다." }, s_kor: "그는", b_en: "this time", b_kor: "이번에는", c_en: ["thankfully"], c_kor: ["다행히도"] },
        { vBase: "get", s: "They", p: "부정", o: "her", o_kor: "그녀가", oc: "to move away", oc_kor: "멀리 이사 가도록", kor: { 현재:"하게 하지 못한다.", 과거:"하게 하지 못했다.", 미래:"하게 하지 못할 것이다." }, s_kor: "그들은", b_en: "from her family", b_kor: "그녀의 가족으로부터", c_en: ["fortunately"], c_kor: ["다행히도"] },
        { vBase: "get", s: "We", p: "부정", o: "him", o_kor: "그가", oc: "to leave the group", oc_kor: "그룹을 떠나도록", kor: { 현재:"하게 하지 못한다.", 과거:"하게 하지 못했다.", 미래:"하게 하지 못할 것이다." }, s_kor: "우리는", b_en: "despite our efforts", b_kor: "우리의 노력에도", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "get", s: "My mom", p: "부정", o: "me", o_kor: "내가", oc: "to skip the class", oc_kor: "수업을 빠지도록", kor: { 현재:"하게 하지 않는다.", 과거:"하게 하지 않았다.", 미래:"하게 하지 않을 것이다." }, s_kor: "나의 엄마는", b_en: "for no reason", b_kor: "이유 없이", c_en: ["for any reason"], c_kor: ["결코"] },
        { vBase: "get", s: "The coach", p: "부정", o: "us", o_kor: "우리가", oc: "to lose focus", oc_kor: "집중력을 잃도록", kor: { 현재:"하게 하지 않는다.", 과거:"하게 하지 않았다.", 미래:"하게 하지 않을 것이다." }, s_kor: "코치는", b_en: "before the game", b_kor: "경기 전에는", c_en: ["for any reason"], c_kor: ["결코"] },
        { vBase: "get", s: "You", p: "부정", o: "me", o_kor: "내가", oc: "to believe you", oc_kor: "너를 믿도록", kor: { 현재:"하게 하지 못한다.", 과거:"하게 하지 못했다.", 미래:"하게 하지 못할 것이다." }, s_kor: "너는", b_en: "this time", b_kor: "이번에는", c_en: ["most of the time"], c_kor: ["대부분의 경우에"] },
        { vBase: "get", s: "Dad", p: "부정", o: "me", o_kor: "내가", oc: "to quit the sport", oc_kor: "운동을 그만두도록", kor: { 현재:"하게 하지 않는다.", 과거:"하게 하지 않았다.", 미래:"하게 하지 않을 것이다." }, s_kor: "아빠는", b_en: "for my future", b_kor: "내 미래를 위해", c_en: ["thankfully"], c_kor: ["고맙게도"] },
        // 의문문 (9문항)
        { vBase: "get", s: "I", p: "의문", o: "you", o_kor: "네가", oc: "to come with me", oc_kor: "나와 함께 오도록", kor: { 현재:"하게 하니?", 과거:"하게 했니?", 미래:"하게 할까?" }, s_kor: "내가", b_en: "to the event", b_kor: "행사에", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "get", s: "She", p: "의문", o: "him", o_kor: "그가", oc: "to apologize", oc_kor: "사과하도록", kor: { 현재:"하게 하니?", 과거:"하게 했니?", 미래:"하게 할까?" }, s_kor: "그녀가", b_en: "in the end", b_kor: "결국에는", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "get", s: "He", p: "의문", o: "us", o_kor: "우리가", oc: "to work together", oc_kor: "함께 일하도록", kor: { 현재:"하게 하니?", 과거:"하게 했니?", 미래:"하게 할까?" }, s_kor: "그가", b_en: "on this task", b_kor: "이 과제에서", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "get", s: "They", p: "의문", o: "you", o_kor: "네가", oc: "to change schools", oc_kor: "학교를 바꾸도록", kor: { 현재:"하게 하니?", 과거:"하게 했니?", 미래:"하게 할까?" }, s_kor: "그들이", b_en: "in the end", b_kor: "결국에는", c_en: [ADV.TY_EN], c_kor: [ADV.TY_KR] },
        { vBase: "get", s: "We", p: "의문", o: "her", o_kor: "그녀가", oc: "to lead the team", oc_kor: "팀을 이끌도록", kor: { 현재:"하게 하니?", 과거:"하게 했니?", 미래:"하게 할까?" }, s_kor: "우리가", b_en: "for this project", b_kor: "이 프로젝트를 위해", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "get", s: "You", p: "의문", o: "me", o_kor: "내가", oc: "to stay after school", oc_kor: "방과 후에 남도록", kor: { 현재:"하게 하니?", 과거:"하게 했니?", 미래:"하게 할까?" }, s_kor: "네가", b_en: "every time", b_kor: "매번", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "get", s: "The teacher", p: "의문", o: "you", o_kor: "네가", oc: "to redo the assignment", oc_kor: "과제를 다시 하도록", kor: { 현재:"하게 하니?", 과거:"하게 했니?", 미래:"하게 할까?" }, s_kor: "선생님이", b_en: "without any reason", b_kor: "이유도 없이", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "get", s: "My friend", p: "의문", o: "you", o_kor: "네가", oc: "to try the new food", oc_kor: "새로운 음식을 먹어보도록", kor: { 현재:"하게 하니?", 과거:"하게 했니?", 미래:"하게 할까?" }, s_kor: "나의 친구가", b_en: "at the restaurant", b_kor: "식당에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "get", s: "He", p: "의문", o: "you", o_kor: "네가", oc: "to say sorry first", oc_kor: "먼저 사과하도록", kor: { 현재:"하게 하니?", 과거:"하게 했니?", 미래:"하게 할까?" }, s_kor: "그가", b_en: "every time", b_kor: "매번", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] }
    ];
        return processRawRows5(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    find: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The kids", "The students", "The parents"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
        // 긍정문 (9문항)
        { vBase: "find", s: "I", p: "긍정", o: "the book", o_kor: "그 책이", oc: "interesting", oc_kor: "흥미롭다는 것을", kor: { 현재:"알게 된다.", 과거:"알았다.", 미래:"알게 될 것이다." }, s_kor: "나는", b_en: "after reading it", b_kor: "읽은 후에", c_en: ["little by little"], c_kor: ["조금씩"] },
        { vBase: "find", s: "She", p: "긍정", o: "the class", o_kor: "그 수업이", oc: "helpful", oc_kor: "도움이 된다는 것을", kor: { 현재:"알게 된다.", 과거:"알았다.", 미래:"알게 될 것이다." }, s_kor: "그녀는", b_en: "at school", b_kor: "학교에서", c_en: ["more and more"], c_kor: ["점점 더"] },
        { vBase: "find", s: "He", p: "긍정", o: "the movie", o_kor: "그 영화가", oc: "boring", oc_kor: "지루하다는 것을", kor: { 현재:"알게 된다.", 과거:"알았다.", 미래:"알게 될 것이다." }, s_kor: "그는", b_en: "after an hour", b_kor: "한 시간 후에", c_en: ["slowly"], c_kor: ["점차"] },
        { vBase: "find", s: "They", p: "긍정", o: "the problem", o_kor: "그 문제가", oc: "easy", oc_kor: "쉽다는 것을", kor: { 현재:"알게 된다.", 과거:"알았다.", 미래:"알게 될 것이다." }, s_kor: "그들은", b_en: "after practicing", b_kor: "연습 후에", c_en: ["gradually"], c_kor: ["서서히"] },
        { vBase: "find", s: "We", p: "긍정", o: "the new rule", o_kor: "새로운 규칙이", oc: "fair", oc_kor: "공평하다는 것을", kor: { 현재:"알게 된다.", 과거:"알았다.", 미래:"알게 될 것이다." }, s_kor: "우리는", b_en: "after thinking about it", b_kor: "생각해 보면", c_en: ["actually"], c_kor: ["사실"] },
        { vBase: "find", s: "You", p: "긍정", o: "the answer", o_kor: "그 답이", oc: "surprising", oc_kor: "놀랍다는 것을", kor: { 현재:"알게 된다.", 과거:"알았다.", 미래:"알게 될 것이다." }, s_kor: "너는", b_en: "in the end", b_kor: "결국에는", c_en: ["all the time"], c_kor: ["항상"] },
        { vBase: "find", s: "The students", p: "긍정", o: "the homework", o_kor: "그 숙제가", oc: "difficult", oc_kor: "어렵다는 것을", kor: { 현재:"알게 된다.", 과거:"알았다.", 미래:"알게 될 것이다." }, s_kor: "학생들은", b_en: "on the first try", b_kor: "처음 시도할 때", c_en: ["most of the time"], c_kor: ["대부분의 경우에"] },
        { vBase: "find", s: "My friend", p: "긍정", o: "the game", o_kor: "그 게임이", oc: "addictive", oc_kor: "중독성이 있다는 것을", kor: { 현재:"알게 된다.", 과거:"알았다.", 미래:"알게 될 것이다." }, s_kor: "나의 친구는", b_en: "after playing once", b_kor: "한 번 해보고 나서", c_en: ["quickly"], c_kor: ["곧"] },
        { vBase: "find", s: "She", p: "긍정", o: "the teacher", o_kor: "그 선생님이", oc: "kind", oc_kor: "친절하다는 것을", kor: { 현재:"알게 된다.", 과거:"알았다.", 미래:"알게 될 것이다." }, s_kor: "그녀는", b_en: "in class", b_kor: "수업 중에", c_en: ["soon enough"], c_kor: ["곧"] },
        // 부정문 (9문항)
        { vBase: "find", s: "I", p: "부정", o: "the movie", o_kor: "그 영화가", oc: "scary", oc_kor: "무섭다는 것을", kor: { 현재:"알지 못한다.", 과거:"알지 못했다.", 미래:"알지 못할 것이다." }, s_kor: "나는", b_en: "honestly", b_kor: "솔직히", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "find", s: "She", p: "부정", o: "the food", o_kor: "그 음식이", oc: "tasty", oc_kor: "맛있다는 것을", kor: { 현재:"알지 못한다.", 과거:"알지 못했다.", 미래:"알지 못할 것이다." }, s_kor: "그녀는", b_en: "at the restaurant", b_kor: "그 식당에서는", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "find", s: "He", p: "부정", o: "the story", o_kor: "그 이야기가", oc: "believable", oc_kor: "믿을 수 있다는 것을", kor: { 현재:"알지 못한다.", 과거:"알지 못했다.", 미래:"알지 못할 것이다." }, s_kor: "그는", b_en: "at all", b_kor: "전혀", c_en: ["unfortunately"], c_kor: ["안타깝게도"] },
        { vBase: "find", s: "They", p: "부정", o: "the test", o_kor: "그 시험이", oc: "easy", oc_kor: "쉽다는 것을", kor: { 현재:"알지 못한다.", 과거:"알지 못했다.", 미래:"알지 못할 것이다." }, s_kor: "그들은", b_en: "without studying", b_kor: "공부 없이는", c_en: ["of course"], c_kor: ["당연히"] },
        { vBase: "find", s: "We", p: "부정", o: "the idea", o_kor: "그 아이디어가", oc: "useful", oc_kor: "유용하다는 것을", kor: { 현재:"알지 못한다.", 과거:"알지 못했다.", 미래:"알지 못할 것이다." }, s_kor: "우리는", b_en: "at first", b_kor: "처음에는", c_en: ["unfortunately"], c_kor: ["아쉽게도"] },
        { vBase: "find", s: "You", p: "부정", o: "the lesson", o_kor: "그 수업이", oc: "boring", oc_kor: "지루하다는 것을", kor: { 현재:"알지 못한다.", 과거:"알지 못했다.", 미래:"알지 못할 것이다." }, s_kor: "너는", b_en: "I hope", b_kor: "바라건대", c_en: ["for any reason"], c_kor: ["결코"] },
        { vBase: "find", s: "The kids", p: "부정", o: "the vegetables", o_kor: "채소가", oc: "delicious", oc_kor: "맛있다는 것을", kor: { 현재:"알지 못한다.", 과거:"알지 못했다.", 미래:"알지 못할 것이다." }, s_kor: "아이들은", b_en: "at first", b_kor: "처음에는", c_en: ["most of the time"], c_kor: ["대부분의 경우에"] },
        { vBase: "find", s: "My friend", p: "부정", o: "the book", o_kor: "그 책이", oc: "interesting", oc_kor: "흥미롭다는 것을", kor: { 현재:"알지 못한다.", 과거:"알지 못했다.", 미래:"알지 못할 것이다." }, s_kor: "나의 친구는", b_en: "sadly", b_kor: "안타깝게도", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "find", s: "He", p: "부정", o: "the work", o_kor: "그 일이", oc: "rewarding", oc_kor: "보람 있다는 것을", kor: { 현재:"알지 못한다.", 과거:"알지 못했다.", 미래:"알지 못할 것이다." }, s_kor: "그는", b_en: "at first", b_kor: "처음에는", c_en: ["unfortunately"], c_kor: ["안타깝게도"] },
        // 의문문 (9문항)
        { vBase: "find", s: "I", p: "의문", o: "the class", o_kor: "그 수업이", oc: "helpful", oc_kor: "도움이 된다는 것을", kor: { 현재:"알게 되니?", 과거:"알았니?", 미래:"알게 될까?" }, s_kor: "내가", b_en: "by the end", b_kor: "끝에는", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "find", s: "She", p: "의문", o: "the new city", o_kor: "새 도시가", oc: "exciting", oc_kor: "흥미롭다는 것을", kor: { 현재:"알게 되니?", 과거:"알았니?", 미래:"알게 될까?" }, s_kor: "그녀가", b_en: "after moving there", b_kor: "이사하고 나서", c_en: [ADV.TY_EN], c_kor: [ADV.TY_KR] },
        { vBase: "find", s: "He", p: "의문", o: "math", o_kor: "수학이", oc: "fun", oc_kor: "재미있다는 것을", kor: { 현재:"알게 되니?", 과거:"알았니?", 미래:"알게 될까?" }, s_kor: "그가", b_en: "with the right teacher", b_kor: "좋은 선생님과 함께라면", c_en: [ADV.TY_EN], c_kor: [ADV.TY_KR] },
        { vBase: "find", s: "They", p: "의문", o: "the game", o_kor: "그 게임이", oc: "difficult", oc_kor: "어렵다는 것을", kor: { 현재:"알게 되니?", 과거:"알았니?", 미래:"알게 될까?" }, s_kor: "그들이", b_en: "at first", b_kor: "처음에는", c_en: ["quickly"], c_kor: ["금방"] },
        { vBase: "find", s: "We", p: "의문", o: "the plan", o_kor: "그 계획이", oc: "possible", oc_kor: "가능하다는 것을", kor: { 현재:"알게 되니?", 과거:"알았니?", 미래:"알게 될까?" }, s_kor: "우리가", b_en: "after research", b_kor: "조사 후에", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "find", s: "You", p: "의문", o: "the story", o_kor: "그 이야기가", oc: "moving", oc_kor: "감동적이라는 것을", kor: { 현재:"알게 되니?", 과거:"알았니?", 미래:"알게 될까?" }, s_kor: "네가", b_en: "in the end", b_kor: "결말 부분에서", c_en: ["also"], c_kor: ["마찬가지로"] },
        { vBase: "find", s: "The students", p: "의문", o: "the experiment", o_kor: "그 실험이", oc: "amazing", oc_kor: "놀랍다는 것을", kor: { 현재:"알게 되니?", 과거:"알았니?", 미래:"알게 될까?" }, s_kor: "학생들이", b_en: "in science class", b_kor: "과학 수업에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "find", s: "My friend", p: "의문", o: "the new job", o_kor: "새 직업이", oc: "rewarding", oc_kor: "보람 있다는 것을", kor: { 현재:"알게 되니?", 과거:"알았니?", 미래:"알게 될까?" }, s_kor: "나의 친구가", b_en: "after a month", b_kor: "한 달 후에", c_en: [ADV.TY_EN], c_kor: [ADV.TY_KR] },
        { vBase: "find", s: "She", p: "의문", o: "living alone", o_kor: "혼자 사는 것이", oc: "lonely", oc_kor: "외롭다는 것을", kor: { 현재:"알게 되니?", 과거:"알았니?", 미래:"알게 될까?" }, s_kor: "그녀가", b_en: "in the city", b_kor: "도시에서", c_en: [ADV.TY_EN], c_kor: [ADV.TY_KR] }
    ];
        return processRawRows5(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
  };
})();