// WGT 2형식 데이터 — 정제 및 30문항 확장 완료 (수일치 수정 반영)
(function() {
  if (!window.VERB_DATA) window.VERB_DATA = {};
  window.VERB_DATA[2] = {
be: {
      standard: (() => {
        const subjPlurals = ["The boxes", "The children", "The students", "The books", "The apples"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "be", s: "My dad", p: "긍정", c: "busy", kor: { 현재:"바쁘시다.", 과거:"바쁘셨다.", 미래:"바쁘실 것이다." }, s_kor: "나의 아빠는", b_en: "at the office", b_kor: "사무실에서", c_en: ["with his work", "during weekdays"], c_kor: ["그의 업무로", "평일 동안"] },
    { vBase: "be", s: "The boxes", p: "부정", c: "heavy", kor: { 현재:"무겁지 않다.", 과거:"무겁지 않았다.", 미래:"무겁지 않을 것이다." }, s_kor: "그 상자들은", b_en: "to you", b_kor: "너에게", c_en: ["in reality", "at all"], c_kor: ["실제로는", "전혀"] },
    { vBase: "be", s: "The baby", p: "의문", c: "awake", kor: { 현재:"깨어 있니?", 과거:"깨어 있었니?", 미래:"깨어 있을까?" }, s_kor: "그 아기는", b_en: "in the crib", b_kor: "침대 안에서", c_en: ["without crying", "during the night"], c_kor: ["울지 않고", "밤 동안"] },
    { vBase: "be", s: "We", p: "긍정", c: "hungry", kor: { 현재:"배가 고프다.", 과거:"배가 고팠다.", 미래:"배가 고플 것이다." }, s_kor: "우리는", b_en: "after the game", b_kor: "게임 후에", c_en: ["in the locker room", "for sure"], c_kor: ["라커룸에서", "확실히"] },
    { vBase: "be", s: "My mom", p: "부정", c: "tired", kor: { 현재:"피곤하지 않으시다.", 과거:"피곤하지 않으셨다.", 미래:"피곤하지 않으실 것이다." }, s_kor: "나의 엄마는", b_en: "after work", b_kor: "퇴근 후에", c_en: ["in the evening", "on weekdays"], c_kor: ["저녁에", "평일에"] },
    { vBase: "be", s: "The children", p: "의문", c: "safe", kor: { 현재:"안전한가요?", 과거:"안전했나요?", 미래:"안전할까요?" }, s_kor: "그 아이들은", b_en: "outside", b_kor: "바깥에서", c_en: ["in the dark", "at night"], c_kor: ["어둠 속에서", "밤에"] },
    { vBase: "be", s: "The library", p: "긍정", c: "quiet", kor: { 현재:"조용하다.", 과거:"조용했다.", 미래:"조용할 것이다." }, s_kor: "도서관은", b_en: "in the morning", b_kor: "아침에", c_en: ["before classes", "every day"], c_kor: ["수업 전에", "매일"] },
    { vBase: "be", s: "The room", p: "부정", c: "cold", kor: { 현재:"춥지 않다.", 과거:"춥지 않았다.", 미래:"춥지 않을 것이다." }, s_kor: "방은", b_en: "inside", b_kor: "안쪽이", c_en: ["with the heater on", "in winter"], c_kor: ["히터를 켠 채로", "겨울에"] },
    { vBase: "be", s: "You", p: "의문", c: "late", kor: { 현재:"늦었니?", 과거:"늦었었니?", 미래:"늦을까?" }, s_kor: "너는", b_en: "for school", b_kor: "학교에", c_en: ["in the morning", "every day"], c_kor: ["아침에", "매일"] },
    { vBase: "be", s: "The bus", p: "긍정", c: "early", kor: { 현재:"일찍 왔다.", 과거:"일찍 왔었다.", 미래:"일찍 올 것이다." }, s_kor: "그 버스는", b_en: "at the station", b_kor: "역에", c_en: ["in the morning", "without delay"], c_kor: ["아침에", "지연 없이"] },
    { vBase: "be", s: "The students", p: "부정", c: "sleepy", kor: { 현재:"졸리지 않다.", 과거:"졸리지 않았다.", 미래:"졸리지 않을 것이다." }, s_kor: "그 학생들은", b_en: "in class", b_kor: "수업 시간에", c_en: ["during the lecture", "in the afternoon"], c_kor: ["강의 중에", "오후에"] },
    { vBase: "be", s: "The dog", p: "의문", c: "dirty", kor: { 현재:"더럽니?", 과거:"더러웠니?", 미래:"더러울까?" }, s_kor: "그 개는", b_en: "after the walk", b_kor: "산책 후에", c_en: ["in the park", "in the rain"], c_kor: ["공원에서", "빗속에서"] },
    { vBase: "be", s: "He", p: "의문", c: "ready", kor: { 현재:"준비가 되었니?", 과거:"준비가 되었었니?", 미래:"준비가 될까?" }, s_kor: "그는", b_en: "for the test", b_kor: "시험 준비가", c_en: ["in the classroom", "with his notes"], c_kor: ["교실에서", "그의 노트를 가지고"] },
    { vBase: "be", s: "The soup", p: "부정", c: "hot", kor: { 현재:"뜨겁지 않다.", 과거:"뜨겁지 않았다.", 미래:"뜨겁지 않을 것이다." }, s_kor: "그 수프는", b_en: "for the baby", b_kor: "아기에게", c_en: ["in the bowl", "at all"], c_kor: ["그릇 안에서", "전혀"] },
    { vBase: "be", s: "She", p: "긍정", c: "kind", kor: { 현재:"친절하다.", 과거:"친절했다.", 미래:"친절할 것이다." }, s_kor: "그녀는", b_en: "to everyone", b_kor: "모든 사람에게", c_en: ["in the neighborhood", "with a warm heart"], c_kor: ["이웃에서", "따뜻한 마음으로"] },
    { vBase: "be", s: "They", p: "부정", c: "famous", kor: { 현재:"유명하지 않다.", 과거:"유명하지 않았다.", 미래:"유명하지 않을 것이다." }, s_kor: "그들은", b_en: "in this country", b_kor: "이 나라에서", c_en: ["among the youth", "for any reason"], c_kor: ["젊은이들 사이에서", "어떤 이유에서든"] },
    { vBase: "be", s: "It", p: "의문", c: "dark", kor: { 현재:"어둡니?", 과거:"어두웠니?", 미래:"어두울까?" }, s_kor: "바깥은", b_en: "outside", b_kor: "바깥이", c_en: ["in the woods", "at night"], c_kor: ["숲속이", "밤에"] },
    { vBase: "be", s: "The store", p: "긍정", c: "open", kor: { 현재:"문을 열었다.", 과거:"문을 열었었다.", 미래:"문을 열 것이다." }, s_kor: "그 가게는", b_en: "on Sundays", b_kor: "일요일마다", c_en: ["for the locals", "in the morning"], c_kor: ["지역 주민들을 위해", "아침에"] },
    { vBase: "be", s: "The taxi", p: "부정", c: "late", kor: { 현재:"늦지 않는다.", 과거:"늦지 않았다.", 미래:"늦지 않을 것이다." }, s_kor: "그 택시는", b_en: "for us", b_kor: "우리에게", c_en: ["at the airport", "in the heavy rain"], c_kor: ["공항에서", "폭우 속에서"] },
    { vBase: "be", s: "The books", p: "부정", c: "expensive", kor: { 현재:"비싸지 않다.", 과거:"비싸지 않았다.", 미래:"비싸지 않을 것이다." }, s_kor: "그 책들은", b_en: "at this store", b_kor: "이 가게에서", c_en: ["for students", "at all"], c_kor: ["학생들에게", "전혀"] },
    { vBase: "be", s: "The water", p: "의문", c: "cold", kor: { 현재:"차갑니?", 과거:"차가웠니?", 미래:"차가울까?" }, s_kor: "그 물은", b_en: "in the pool", b_kor: "수영장에서", c_en: ["in the morning", "during winter"], c_kor: ["아침에", "겨울 동안"] },
    { vBase: "be", s: "My friend", p: "긍정", c: "helpful", kor: { 현재:"도움이 된다.", 과거:"도움이 됐다.", 미래:"도움이 될 것이다." }, s_kor: "나의 친구는", b_en: "to me", b_kor: "나에게", c_en: ["with my homework", "at school"], c_kor: ["내 숙제에 대해", "학교에서"] },
    { vBase: "be", s: "The classroom", p: "부정", c: "noisy", kor: { 현재:"시끄럽지 않다.", 과거:"시끄럽지 않았다.", 미래:"시끄럽지 않을 것이다." }, s_kor: "교실은", b_en: "during the test", b_kor: "시험 기간 동안", c_en: ["with the supervisor", "in the afternoon"], c_kor: ["감독관과 함께", "오후에"] },
    { vBase: "be", s: "The apples", p: "긍정", c: "fresh", kor: { 현재:"신선하다.", 과거:"신선했었다.", 미래:"신선할 것이다." }, s_kor: "그 사과들은", b_en: "at the market", b_kor: "시장에서", c_en: ["in the morning", "for sure"], c_kor: ["아침에", "확실히"] },
    { vBase: "be", s: "The cat", p: "부정", c: "afraid", kor: { 현재:"두려워하지 않는다.", 과거:"두려워하지 않았다.", 미래:"두려워하지 않을 것이다." }, s_kor: "그 고양이는", b_en: "of dogs", b_kor: "개들을", c_en: ["in the park", "at all"], c_kor: ["공원에서", "전혀"] },
    { vBase: "be", s: "The park", p: "긍정", c: "beautiful", kor: { 현재:"아름답다.", 과거:"아름다웠다.", 미래:"아름다울 것이다." }, s_kor: "공원은", b_en: "in spring", b_kor: "봄에", c_en: ["with full bloom", "every year"], c_kor: ["만개하여", "매년"] },
    { vBase: "be", s: "I", p: "긍정", c: "sure", kor: { 현재:"확신한다.", 과거:"확신했다.", 미래:"확신할 것이다." }, s_kor: "나는", b_en: "about the plan", b_kor: "그 계획에 대해", c_en: ["for our team", "for sure"], c_kor: ["우리 팀을 위한", "확실히"] },
    { vBase: "be", s: "The teacher", p: "긍정", c: "happy", kor: { 현재:"행복하다.", 과거:"행복했다.", 미래:"행복할 것이다." }, s_kor: "선생님은", b_en: "in the school garden", b_kor: "학교 정원에서", c_en: ["with the students", "during the break"], c_kor: ["학생들과 함께", "쉬는 시간 동안"] },
    { vBase: "be", s: "The water", p: "부정", c: "safe", kor: { 현재:"안전하지 않다.", 과거:"안전하지 않았다.", 미래:"안전하지 않을 것이다." }, s_kor: "물은", b_en: "in the local river", b_kor: "지역 강에서", c_en: ["for drinking", "without a filter"], c_kor: ["마시기에", "필터 없이는"] },
    { vBase: "be", s: "The presentation", p: "의문", c: "ready", kor: { 현재:"준비가 되었니?", 과거:"준비가 되었었니?", 미래:"준비가 될까?" }, s_kor: "발표는", b_en: "in the conference room", b_kor: "회의실에", c_en: ["on the screen", "for the clients"], c_kor: ["화면 상에", "고객들을 위해"] }
  ];
        return processRawRows2(subjPlurals, TENSES, rawRows, { isBeVerb: true });
      })(),
      advanced: null,
      master:   null,
    },
become: {
      standard: (() => {
        const subjPlurals = ["The boys", "The leaves", "People", "My parents", "The prices", "The rules"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "become", s: "The weather", p: "긍정", c: "warm", kor: { 현재:"따뜻해진다.", 과거:"따뜻해졌다.", 미래:"따뜻해질 것이다." }, s_kor: "날씨가", b_en: "in spring", b_kor: "봄에", c_en: ["without a doubt", "every year"], c_kor: ["의심의 여지 없이", "매년"] },
    { vBase: "become", s: "The milk", p: "부정", c: "sour", kor: { 현재:"상하지 않는다.", 과거:"상하지 않았다.", 미래:"상하지 않을 것이다." }, s_kor: "우유가", b_en: "in the fridge", b_kor: "냉장고에서", c_en: ["with a tight cap", "in general"], c_kor: ["뚜껑을 꽉 닫으면", "일반적으로"] },
    { vBase: "become", s: "The boys", p: "의문", c: "quiet", kor: { 현재:"조용해지니?", 과거:"조용해졌니?", 미래:"조용해질까?" }, s_kor: "소년들이", b_en: "during class", b_kor: "수업 중에", c_en: ["without their teacher", "in the morning"], c_kor: ["선생님 없이", "아침에"] },
    { vBase: "become", s: "My dream", p: "긍정", c: "reality", kor: { 현재:"현실이 된다.", 과거:"현실이 되었다.", 미래:"현실이 될 것이다." }, s_kor: "내 꿈이", b_en: "with hard work", b_kor: "열심히 노력하면", c_en: ["in the end", "for sure"], c_kor: ["결국에", "확실히"] },
    { vBase: "become", s: "The sky", p: "부정", c: "dark", kor: { 현재:"어두워지지 않는다.", 과거:"어두워지지 않았다.", 미래:"어두워지지 않을 것이다." }, s_kor: "하늘이", b_en: "in the morning", b_kor: "아침에", c_en: ["during the winter", "in this region"], c_kor: ["겨울 동안", "이 지역에서는"] },
    { vBase: "become", s: "You", p: "의문", c: "tired", kor: { 현재:"피곤해지니?", 과거:"피곤해졌니?", 미래:"피곤해질까?" }, s_kor: "너는", b_en: "after work", b_kor: "퇴근 후에", c_en: ["without a break", "every day"], c_kor: ["쉬지 않고 일하면", "매일"] },
    { vBase: "become", s: "The leaves", p: "긍정", c: "red", kor: { 현재:"붉어진다.", 과거:"붉어졌다.", 미래:"붉어질 것이다." }, s_kor: "나뭇잎들이", b_en: "in fall", b_kor: "가을에", c_en: ["all over the mountain", "in a beautiful way"], c_kor: ["산 전체에", "아름답게"] },
    { vBase: "become", s: "The water", p: "부정", c: "cold", kor: { 현재:"차가워지지 않는다.", 과거:"차가워지지 않았다.", 미래:"차가워지지 않을 것이다." }, s_kor: "물이", b_en: "in the pot", b_kor: "냄비 안에서", c_en: ["with the lid on", "easily"], c_kor: ["뚜껑을 덮으면", "쉽게"] },
    { vBase: "become", s: "The puppy", p: "의문", c: "big", kor: { 현재:"커지니?", 과거:"커졌니?", 미래:"커질까?" }, s_kor: "강아지가", b_en: "with good food", b_kor: "좋은 음식으로", c_en: ["in a natural way", "steadily"], c_kor: ["자연스럽게", "꾸준히"] },
    { vBase: "become", s: "His voice", p: "긍정", c: "loud", kor: { 현재:"커진다.", 과거:"커졌다.", 미래:"커질 것이다." }, s_kor: "그의 목소리가", b_en: "in the room", b_kor: "방 안에서", c_en: ["during the debate", "for sure"], c_kor: ["토론 중에", "확실히"] },
    { vBase: "become", s: "The game", p: "부정", c: "boring", kor: { 현재:"지루해지지 않는다.", 과거:"지루해지지 않았다.", 미래:"지루해지지 않을 것이다." }, s_kor: "게임이", b_en: "to me", b_kor: "나에게는", c_en: ["in the second half", "at all"], c_kor: ["후반전에", "전혀"] },
    { vBase: "become", s: "People", p: "의문", c: "angry", kor: { 현재:"화가 나니?", 과거:"화가 났니?", 미래:"화가 날까?" }, s_kor: "사람들이", b_en: "on the internet", b_kor: "인터넷에서", c_en: ["about small things", "in general"], c_kor: ["사소한 일들에 대해", "일반적으로"] },
    { vBase: "become", s: "The room", p: "긍정", c: "clean", kor: { 현재:"깨끗해진다.", 과거:"깨끗해졌다.", 미래:"깨끗해질 것이다." }, s_kor: "방이", b_en: "after cleaning", b_kor: "청소 후에", c_en: ["with proper tools", "every time"], c_kor: ["적절한 도구로", "매번"] },
    { vBase: "become", s: "The problem", p: "부정", c: "serious", kor: { 현재:"심각해지지 않는다.", 과거:"심각해지지 않았다.", 미래:"심각해지지 않을 것이다." }, s_kor: "문제가", b_en: "in our team", b_kor: "우리 팀에서", c_en: ["with proper management", "luckily"], c_kor: ["적절한 관리 덕분에", "다행히도"] },
    { vBase: "become", s: "She", p: "의문", c: "a teacher", kor: { 현재:"선생님이 되니?", 과거:"선생님이 되었니?", 미래:"선생님이 될까?" }, s_kor: "그녀는", b_en: "at the school", b_kor: "그 학교에서", c_en: ["with her passion", "in the end"], c_kor: ["그녀의 열정으로", "결국에"] },
    { vBase: "become", s: "He", p: "긍정", c: "famous", kor: { 현재:"유명해진다.", 과거:"유명해졌다.", 미래:"유명해질 것이다." }, s_kor: "그는", b_en: "in his country", b_kor: "그의 나라에서", c_en: ["for his talent", "in the end"], c_kor: ["그의 재능으로", "결국에"] },
    { vBase: "become", s: "The bread", p: "부정", c: "hard", kor: { 현재:"딱딱해지지 않는다.", 과거:"딱딱해지지 않았다.", 미래:"딱딱해지지 않을 것이다." }, s_kor: "빵이", b_en: "in the bag", b_kor: "봉투 안에서", c_en: ["without air", "at all"], c_kor: ["공기 없이", "전혀"] },
    { vBase: "become", s: "The concert", p: "의문", c: "exciting", kor: { 현재:"신나지니?", 과거:"신나졌니?", 미래:"신나질까?" }, s_kor: "콘서트가", b_en: "at night", b_kor: "밤에", c_en: ["with the lights", "in general"], c_kor: ["조명과 함께", "일반적으로"] },
    { vBase: "become", s: "The prices", p: "긍정", c: "high", kor: { 현재:"높아진다.", 과거:"높아졌다.", 미래:"높아질 것이다." }, s_kor: "물가가", b_en: "in winter", b_kor: "겨울에", c_en: ["due to the demand", "every year"], c_kor: ["수요 때문에", "매년"] },
    { vBase: "become", s: "My parents", p: "부정", c: "old", kor: { 현재:"늙지 않으신다.", 과거:"늙지 않으셨다.", 미래:"늙지 않으실 것이다." }, s_kor: "부모님이", b_en: "in my eyes", b_kor: "내 눈에는", c_en: ["with their bright smiles", "forever"], c_kor: ["그들의 밝은 미소와 함께", "영원히"] },
    { vBase: "become", s: "The movie", p: "의문", c: "interesting", kor: { 현재:"재미있어지니?", 과거:"재미있어졌니?", 미래:"재미있어질까?" }, s_kor: "영화가", b_en: "at the end", b_kor: "결말에 가서", c_en: ["with the twist", "for sure"], c_kor: ["반전과 함께", "확실히"] },
    { vBase: "become", s: "The child", p: "긍정", c: "sleepy", kor: { 현재:"졸려진다.", 과거:"졸려졌다.", 미래:"졸려질 것이다." }, s_kor: "아이가", b_en: "after lunch", b_kor: "점심 식사 후에", c_en: ["in the warm room", "on normal days"], c_kor: ["따뜻한 방 안에서", "평소에"] },
    { vBase: "become", s: "The rules", p: "부정", c: "strict", kor: { 현재:"엄격해지지 않는다.", 과거:"엄격해지지 않았다.", 미래:"엄격해지지 않을 것이다." }, s_kor: "규칙이", b_en: "here", b_kor: "여기서는", c_en: ["for the students", "in general"], c_kor: ["학생들에게", "일반적으로"] },
    { vBase: "become", s: "We", p: "의문", c: "ready", kor: { 현재:"준비가 되니?", 과거:"준비가 되었니?", 미래:"준비가 될까?" }, s_kor: "우리는", b_en: "for the trip", b_kor: "여행 준비가", c_en: ["with our bags", "in the morning"], c_kor: ["우리의 가방과 함께", "아침에"] },
    { vBase: "become", s: "The robot", p: "긍정", c: "smart", kor: { 현재:"똑똑해진다.", 과거:"똑똑해졌다.", 미래:"똑똑해질 것이다." }, s_kor: "로봇이", b_en: "over time", b_kor: "시간이 지나면서", c_en: ["with the new program", "in the end"], c_kor: ["새로운 프로그램과 함께", "결국엔"] },
    { vBase: "become", s: "The coffee", p: "부정", c: "cold", kor: { 현재:"식지 않는다.", 과거:"식지 않았다.", 미래:"식지 않을 것이다." }, s_kor: "커피가", b_en: "in the cup", b_kor: "컵 안에서", c_en: ["without a lid", "easily"], c_kor: ["뚜껑 없이", "쉽게"] },
    { vBase: "become", s: "They", p: "의문", c: "good friends", kor: { 현재:"좋은 친구가 되니?", 과거:"좋은 친구가 되었니?", 미래:"좋은 친구가 될까?" }, s_kor: "그들은", b_en: "at school", b_kor: "학교에서", c_en: ["through the club", "in the end"], c_kor: ["동아리를 통해", "결국에"] },
    { vBase: "become", s: "The city", p: "긍정", c: "quiet", kor: { 현재:"조용해진다.", 과거:"조용해졌다.", 미래:"조용해질 것이다." }, s_kor: "그 도시는", b_en: "at midnight", b_kor: "자정에", c_en: ["without traffic", "during the winter"], c_kor: ["차량 통행 없이", "겨울 동안"] },
    { vBase: "become", s: "The rules", p: "부정", c: "strict", kor: { 현재:"엄격해지지 않는다.", 과거:"엄격해지지 않았다.", 미래:"엄격해지지 않을 것이다." }, s_kor: "그 규칙들은", b_en: "in this small town", b_kor: "이 작은 마을에서", c_en: ["for the residents", "without a major reason"], c_kor: ["주민들에게", "중대한 이유 없이는"] },
    { vBase: "become", s: "The leaves", p: "의문", c: "yellow", kor: { 현재:"노랗게 변하니?", 과거:"노랗게 변했니?", 미래:"노랗게 변할까?" }, s_kor: "나뭇잎들은", b_en: "in the forest", b_kor: "숲속에서", c_en: ["beautifully", "during the autumn"], c_kor: ["아름답게", "가울 동안"] }
  ];
        return processRawRows2(subjPlurals, TENSES, rawRows);
      })(),
      advanced: null,
      master:   null,
    },
seem: {
      standard: (() => {
        const subjPlurals = ["The results", "The children", "The shoes", "The rules"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "seem", s: "The plan", p: "긍정", c: "perfect", kor: { 현재:"계획이 완벽해 보인다.", 과거:"계획이 완벽해 보였다.", 미래:"계획이 완벽해 보일 것이다." }, s_kor: "계획이", b_en: "at first", b_kor: "처음에는", c_en: ["to us", "without a doubt"], c_kor: ["우리에게", "의심의 여지 없이"] },
    { vBase: "seem", s: "The idea", p: "부정", c: "strange", kor: { 현재:"아이디어가 이상해 보이지 않는다.", 과거:"아이디어가 이상해 보이지 않았다.", 미래:"아이디어가 이상해 보이지 않을 것이다." }, s_kor: "아이디어가", b_en: "to me", b_kor: "나에게는", c_en: ["in theory", "at all"], c_kor: ["이론상으로는", "전혀"] },
    { vBase: "seem", s: "The man", p: "의문", c: "kind", kor: { 현재:"그 남자는 친절해 보이니?", 과거:"그 남자는 친절해 보였니?", 미래:"그 남자는 친절해 보일까?" }, s_kor: "그 남자는", b_en: "in the picture", b_kor: "사진 속에서", c_en: ["to his friends", "in general"], c_kor: ["그의 친구들에게", "일반적으로"] },
    { vBase: "seem", s: "The results", p: "긍정", c: "good", kor: { 현재:"결과가 좋아 보인다.", 과거:"결과가 좋아 보였다.", 미래:"결과가 좋아 보일 것이다." }, s_kor: "결과가", b_en: "on the paper", b_kor: "종이 위에서", c_en: ["to the team", "for sure"], c_kor: ["팀에게", "확실히"] },
    { vBase: "seem", s: "The box", p: "부정", c: "heavy", kor: { 현재:"상자가 무거워 보이지 않는다.", 과거:"상자가 무거워 보이지 않았다.", 미래:"상자가 무거워 보이지 않을 것이다." }, s_kor: "상자가", b_en: "from here", b_kor: "여기서는", c_en: ["to me", "at all"], c_kor: ["나에게는", "전혀"] },
    { vBase: "seem", s: "The problem", p: "의문", c: "difficult", kor: { 현재:"문제가 어려워 보이니?", 과거:"문제가 어려워 보였니?", 미래:"문제가 어려워 보일까?" }, s_kor: "문제가", b_en: "at a glance", b_kor: "한눈에", c_en: ["to you", "in this situation"], c_kor: ["너에게", "이 상황에서"] },
    { vBase: "seem", s: "The house", p: "긍정", c: "empty", kor: { 현재:"집이 비어 있는 것 같다.", 과거:"집이 비어 있는 것 같았다.", 미래:"집이 비어 있는 것 같을 것이다." }, s_kor: "집이", b_en: "at night", b_kor: "밤에", c_en: ["from the outside", "without lights"], c_kor: ["밖에서 볼 때", "불빛 없이"] },
    { vBase: "seem", s: "The food", p: "부정", c: "delicious", kor: { 현재:"음식이 맛있어 보이지 않는다.", 과거:"음식이 맛있어 보이지 않았다.", 미래:"음식이 맛있어 보이지 않을 것이다." }, s_kor: "음식이", b_en: "on the table", b_kor: "테이블 위에서", c_en: ["to the guests", "at first glance"], c_kor: ["손님들에게", "언뜻 보기에"] },
    { vBase: "seem", s: "The dog", p: "의문", c: "sick", kor: { 현재:"개가 아파 보이니?", 과거:"개가 아파 보였니?", 미래:"개가 아파 보일까?" }, s_kor: "개가", b_en: "in the yard", b_kor: "마당에서", c_en: ["to the vet", "a little bit"], c_kor: ["수의사에게", "조금"] },
    { vBase: "seem", s: "The children", p: "긍정", c: "happy", kor: { 현재:"아이들이 행복해 보인다.", 과거:"아이들이 행복해 보였다.", 미래:"아이들이 행복해 보일 것이다." }, s_kor: "아이들이", b_en: "on the playground", b_kor: "놀이터에서", c_en: ["with their friends", "during recess"], c_kor: ["친구들과 함께", "쉬는 시간에"] },
    { vBase: "seem", s: "The story", p: "부정", c: "true", kor: { 현재:"이야기가 사실인 것 같지 않다.", 과거:"이야기가 사실인 것 같지 않았다.", 미래:"이야기가 사실인 것 같지 않을 것이다." }, s_kor: "이야기가", b_en: "to us", b_kor: "우리에게는", c_en: ["in many ways", "in reality"], c_kor: ["여러모로", "실제로는"] },
    { vBase: "seem", s: "The price", p: "의문", c: "reasonable", kor: { 현재:"가격이 합리적인 것 같니?", 과거:"가격이 합리적인 것 같았니?", 미래:"가격이 합리적인 것 같을까?" }, s_kor: "가격이", b_en: "for this car", b_kor: "이 차에 대해", c_en: ["to buyers", "in this market"], c_kor: ["구매자들에게", "이 시장에서"] },
    { vBase: "seem", s: "The test", p: "긍정", c: "easy", kor: { 현재:"시험이 쉬워 보인다.", 과거:"시험이 쉬워 보였다.", 미래:"시험이 쉬워 보일 것이다." }, s_kor: "시험이", b_en: "at first", b_kor: "처음에는", c_en: ["to the students", "on paper"], c_kor: ["학생들에게", "서류상으로는"] },
    { vBase: "seem", s: "The building", p: "부정", c: "safe", kor: { 현재:"건물이 안전해 보이지 않는다.", 과거:"건물이 안전해 보이지 않았다.", 미래:"건물이 안전해 보이지 않을 것이다." }, s_kor: "건물이", b_en: "from the outside", b_kor: "밖에서 볼 때", c_en: ["to the residents", "for any reason"], c_kor: ["주민들에게", "어떤 이유에서든"] },
    { vBase: "seem", s: "The weather", p: "의문", c: "nice", kor: { 현재:"날씨가 좋아 보이니?", 과거:"날씨가 좋아 보였니?", 미래:"날씨가 좋아 보일까?" }, s_kor: "날씨가", b_en: "outside", b_kor: "바깥이", c_en: ["to tourists", "during spring"], c_kor: ["관광객들에게", "봄 동안에"] },
    { vBase: "seem", s: "The solution", p: "긍정", c: "clear", kor: { 현재:"해결책이 분명해 보인다.", 과거:"해결책이 분명해 보였다.", 미래:"해결책이 분명해 보일 것이다." }, s_kor: "해결책이", b_en: "to everyone", b_kor: "모두에게", c_en: ["in this case", "without a doubt"], c_kor: ["이 경우에는", "의심의 여지 없이"] },
    { vBase: "seem", s: "The woman", p: "부정", c: "busy", kor: { 현재:"여자가 바빠 보이지 않는다.", 과거:"여자가 바빠 보이지 않았다.", 미래:"여자가 바빠 보이지 않을 것이다." }, s_kor: "여자가", b_en: "at the office", b_kor: "사무실에서", c_en: ["to her boss", "during meetings"], c_kor: ["그녀의 상사에게", "회의 중에"] },
    { vBase: "seem", s: "The shoes", p: "의문", c: "comfortable", kor: { 현재:"신발이 편안해 보이니?", 과거:"신발이 편안해 보였니?", 미래:"신발이 편안해 보일까?" }, s_kor: "신발이", b_en: "for walking", b_kor: "걷기에", c_en: ["to me", "on long trips"], c_kor: ["나에게", "긴 여행에서"] },
    { vBase: "seem", s: "The task", p: "긍정", c: "impossible", kor: { 현재:"그 일은 불가능해 보인다.", 과거:"그 일은 불가능해 보였다.", 미래:"그 일은 불가능해 보일 것이다." }, s_kor: "그 일은", b_en: "without help", b_kor: "도움 없이는", c_en: ["to us", "in a short time"], c_kor: ["우리에게", "짧은 시간 안에"] },
    { vBase: "seem", s: "The student", p: "부정", c: "nervous", kor: { 현재:"그 학생은 긴장해 보이지 않는다.", 과거:"그 학생은 긴장해 보이지 않았다.", 미래:"그 학생은 긴장해 보이지 않을 것이다." }, s_kor: "그 학생은", b_en: "before the exam", b_kor: "시험 전에", c_en: ["to the teacher", "at all"], c_kor: ["선생님에게", "전혀"] },
    { vBase: "seem", s: "The situation", p: "의문", c: "bad", kor: { 현재:"상황이 나빠 보이니?", 과거:"상황이 나빠 보였니?", 미래:"상황이 나빠 보일까?" }, s_kor: "상황이", b_en: "to you", b_kor: "너에게", c_en: ["in this country", "without preparation"], c_kor: ["이 나라에서", "준비 없이는"] },
    { vBase: "seem", s: "The river", p: "긍정", c: "deep", kor: { 현재:"강이 깊어 보인다.", 과거:"강이 깊어 보였다.", 미래:"강이 깊어 보일 것이다." }, s_kor: "강이", b_en: "from the bridge", b_kor: "다리 위에서", c_en: ["to us", "in the dark"], c_kor: ["우리에게", "어둠 속에서"] },
    { vBase: "seem", s: "The cake", p: "부정", c: "sweet", kor: { 현재:"케이크가 달아 보이지 않는다.", 과거:"케이크가 달아 보이지 않았다.", 미래:"케이크가 달아 보이지 않을 것이다." }, s_kor: "케이크가", b_en: "to me", b_kor: "나에게는", c_en: ["without sugar", "at all"], c_kor: ["설탕 없이", "전혀"] },
    { vBase: "seem", s: "The rules", p: "의문", c: "fair", kor: { 현재:"규칙이 공정해 보이니?", 과거:"규칙이 공정해 보였니?", 미래:"규칙이 공정해 보일까?" }, s_kor: "규칙이", b_en: "to everyone", b_kor: "모두에게", c_en: ["in this school", "in general"], c_kor: ["이 학교에서", "일반적으로"] },
    { vBase: "seem", s: "The car", p: "긍정", c: "fast", kor: { 현재:"차가 빨라 보인다.", 과거:"차가 빨라 보였다.", 미래:"차가 빨라 보일 것이다." }, s_kor: "차가", b_en: "on the road", b_kor: "도로 위에서", c_en: ["to the driver", "from a distance"], c_kor: ["운전자에게", "멀리서 볼 때"] },
    { vBase: "seem", s: "The movie", p: "부정", c: "interesting", kor: { 현재:"영화가 재미있어 보이지 않는다.", 과거:"영화가 재미있어 보이지 않았다.", 미래:"영화가 재미있어 보이지 않을 것이다." }, s_kor: "영화가", b_en: "from the trailer", b_kor: "예고편을 보면", c_en: ["to me", "at all"], c_kor: ["나에게는", "전혀"] },
    { vBase: "seem", s: "The bag", p: "의문", c: "expensive", kor: { 현재:"가방이 비싸 보이니?", 과거:"가방이 비싸 보였니?", 미래:"가방이 비싸 보일까?" }, s_kor: "가방이", b_en: "in the store", b_kor: "가게 안에서", c_en: ["to customers", "for sure"], c_kor: ["고객들에게", "확실히"] },
    { vBase: "seem", s: "The children", p: "긍정", c: "nervous", kor: { 현재:"긴장해 보인다.", 과거:"긴장해 보였다.", 미래:"긴장해 보일 것이다." }, s_kor: "아이들은", b_en: "on the stage", b_kor: "무대 위에서", c_en: ["with bright lights", "before the performance"], c_kor: ["밝은 조명과 함께", "공연 전에"] },
    { vBase: "seem", s: "The rules", p: "부정", c: "fair", kor: { 현재:"공정해 보이지 않는다.", 과거:"공정해 보이지 않았다.", 미래:"공정해 보이지 않을 것이다." }, s_kor: "규칙들은", b_en: "at the school", b_kor: "학교에서", c_en: ["to the students", "without proper discussion"], c_kor: ["학생들에게", "적절한 토론 없이는"] },
    { vBase: "seem", s: "The results", p: "의문", c: "accurate", kor: { 현재:"정확해 보이니?", 과거:"정확해 보였니?", 미래:"정확해 보일까?" }, s_kor: "결과들은", b_en: "in the laboratory", b_kor: "실험실에서", c_en: ["to the scientists", "under a microscope"], c_kor: ["과학자들에게", "현미경 아래서"] }
  ];
        return processRawRows2(subjPlurals, TENSES, rawRows);
      })(),
      advanced: null,
      master:   null,
    },
look: {
      standard: (() => {
        const subjPlurals = ["The stars", "The children", "The shoes", "The questions", "The toys", "The actors"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "look", s: "The cake", p: "긍정", c: "delicious", kor: { 현재:"맛있어 보인다.", 과거:"맛있어 보였다.", 미래:"맛있어 보일 것이다." }, s_kor: "케이크가", b_en: "in the bakery", b_kor: "빵집에서", c_en: ["through the window", "for sure"], c_kor: ["창문 너머로", "확실히"] },
    { vBase: "look", s: "The man", p: "부정", c: "young", kor: { 현재:"젊어 보이지 않는다.", 과거:"젊어 보이지 않았다.", 미래:"젊어 보이지 않을 것이다." }, s_kor: "그 남자는", b_en: "in that suit", b_kor: "그 정장을 입으니", c_en: ["to me", "in general"], c_kor: ["나에게는", "일반적으로"] },
    { vBase: "look", s: "The stars", p: "의문", c: "bright", kor: { 현재:"밝아 보이니?", 과거:"밝아 보였니?", 미래:"밝아 보일까?" }, s_kor: "별들이", b_en: "in the sky", b_kor: "하늘에서", c_en: ["to us", "on clear nights"], c_kor: ["우리에게", "맑은 밤에"] },
    { vBase: "look", s: "The dog", p: "긍정", c: "cute", kor: { 현재:"귀여워 보인다.", 과거:"귀여워 보였다.", 미래:"귀여워 보일 것이다." }, s_kor: "강아지가", b_en: "in the picture", b_kor: "사진 속에서", c_en: ["to everyone", "for sure"], c_kor: ["모두에게", "확실히"] },
    { vBase: "look", s: "The house", p: "부정", c: "old", kor: { 현재:"낡아 보이지 않는다.", 과거:"낡아 보이지 않았다.", 미래:"낡아 보이지 않을 것이다." }, s_kor: "집이", b_en: "from here", b_kor: "여기서는", c_en: ["to me", "at all"], c_kor: ["나에게는", "전혀"] },
    { vBase: "look", s: "You", p: "의문", c: "pale", kor: { 현재:"창백해 보이니?", 과거:"창백해 보였니?", 미래:"창백해 보일까?" }, s_kor: "너는", b_en: "under the light", b_kor: "조명 아래서", c_en: ["to me", "a little bit"], c_kor: ["나에게", "약간"] },
    { vBase: "look", s: "The dress", p: "긍정", c: "beautiful", kor: { 현재:"아름다워 보인다.", 과거:"아름다워 보였다.", 미래:"아름다워 보일 것이다." }, s_kor: "드레스가", b_en: "on you", b_kor: "너에게", c_en: ["to everyone", "at the party"], c_kor: ["모두에게", "파티에서"] },
    { vBase: "look", s: "The food", p: "부정", c: "fresh", kor: { 현재:"신선해 보이지 않는다.", 과거:"신선해 보이지 않았다.", 미래:"신선해 보이지 않을 것이다." }, s_kor: "음식이", b_en: "on the table", b_kor: "테이블 위에서", c_en: ["to the guests", "at first glance"], c_kor: ["손님들에게", "언뜻 보기에"] },
    { vBase: "look", s: "The children", p: "의문", c: "happy", kor: { 현재:"행복해 보이니?", 과거:"행복해 보였니?", 미래:"행복해 보일까?" }, s_kor: "아이들이", b_en: "at the park", b_kor: "공원에서", c_en: ["with their friends", "during recess"], c_kor: ["친구들과 함께", "쉬는 시간에"] },
    { vBase: "look", s: "The room", p: "긍정", c: "cozy", kor: { 현재:"아늑해 보인다.", 과거:"아늑해 보였다.", 미래:"아늑해 보일 것이다." }, s_kor: "방이", b_en: "with the light", b_kor: "조명을 켜니", c_en: ["to us", "at night"], c_kor: ["우리에게", "밤에"] },
    { vBase: "look", s: "The idea", p: "부정", c: "bad", kor: { 현재:"나빠 보이지 않는다.", 과거:"나빠 보이지 않았다.", 미래:"나빠 보이지 않을 것이다." }, s_kor: "아이디어가", b_en: "on paper", b_kor: "서류상으로는", c_en: ["to us", "at first"], c_kor: ["우리에게는", "처음에는"] },
    { vBase: "look", s: "The shoes", p: "의문", c: "comfortable", kor: { 현재:"편안해 보이니?", 과거:"편안해 보였니?", 미래:"편안해 보일까?" }, s_kor: "신발이", b_en: "for running", b_kor: "달리기에", c_en: ["to you", "on the track"], c_kor: ["너에게", "트랙 위에서"] },
    { vBase: "look", s: "The sky", p: "긍정", c: "clear", kor: { 현재:"맑아 보인다.", 과거:"맑아 보였다.", 미래:"맑아 보일 것이다." }, s_kor: "하늘이", b_en: "after the rain", b_kor: "비 온 뒤에", c_en: ["to us", "in the morning"], c_kor: ["우리에게", "아침에"] },
    { vBase: "look", s: "The bridge", p: "부정", c: "safe", kor: { 현재:"안전해 보이지 않는다.", 과거:"안전해 보이지 않았다.", 미래:"안전해 보이지 않을 것이다." }, s_kor: "다리가", b_en: "from a distance", b_kor: "멀리서는", c_en: ["to me", "at all"], c_kor: ["나에게", "전혀"] },
    { vBase: "look", s: "The plan", p: "의문", c: "perfect", kor: { 현재:"완벽해 보이니?", 과거:"완벽해 보였니?", 미래:"완벽해 보일까?" }, s_kor: "계획이", b_en: "on paper", b_kor: "서류상으로는", c_en: ["to you", "in this situation"], c_kor: ["너에게", "이 상황에서"] },
    { vBase: "look", s: "The soup", p: "긍정", c: "hot", kor: { 현재:"뜨거워 보인다.", 과거:"뜨거워 보였다.", 미래:"뜨거워 보일 것이다." }, s_kor: "수프가", b_en: "in the bowl", b_kor: "그릇 안에서", c_en: ["to me", "for sure"], c_kor: ["나에게", "확실히"] },
    { vBase: "look", s: "The book", p: "부정", c: "interesting", kor: { 현재:"흥미로워 보이지 않는다.", 과거:"흥미로워 보이지 않았다.", 미래:"흥미로워 보이지 않을 것이다." }, s_kor: "책이", b_en: "from the cover", b_kor: "표지로 볼 때", c_en: ["to readers", "at all"], c_kor: ["독자들에게", "전혀"] },
    { vBase: "look", s: "The questions", p: "의문", c: "easy", kor: { 현재:"쉬워 보이니?", 과거:"쉬워 보였니?", 미래:"쉬워 보일까?" }, s_kor: "질문들이", b_en: "on the test", b_kor: "시험지에서", c_en: ["to you", "at first glance"], c_kor: ["너에게", "언뜻 보기에"] },
    { vBase: "look", s: "The garden", p: "긍정", c: "pretty", kor: { 현재:"예뻐 보인다.", 과거:"예뻐 보였다.", 미래:"예뻐 보일 것이다." }, s_kor: "정원이", b_en: "in spring", b_kor: "봄에", c_en: ["to visitors", "every year"], c_kor: ["방문객들에게", "매년"] },
    { vBase: "look", s: "The car", p: "부정", c: "expensive", kor: { 현재:"비싸 보이지 않는다.", 과거:"비싸 보이지 않았다.", 미래:"비싸 보이지 않을 것이다." }, s_kor: "차가", b_en: "from the outside", b_kor: "밖에서 볼 때", c_en: ["to buyers", "in reality"], c_kor: ["구매자들에게", "실제로는"] },
    { vBase: "look", s: "The weather", p: "의문", c: "terrible", kor: { 현재:"끔찍해 보이니?", 과거:"끔찍해 보였니?", 미래:"끔찍해 보일까?" }, s_kor: "날씨가", b_en: "outside", b_kor: "바깥이", c_en: ["to us", "during the storm"], c_kor: ["우리에게", "폭풍우 동안에"] },
    { vBase: "look", s: "The teacher", p: "긍정", c: "strict", kor: { 현재:"엄격해 보인다.", 과거:"엄격해 보였다.", 미래:"엄격해 보일 것이다." }, s_kor: "선생님이", b_en: "in the classroom", b_kor: "교실에서", c_en: ["to students", "during exams"], c_kor: ["학생들에게", "시험 중에"] },
    { vBase: "look", s: "The toys", p: "부정", c: "fun", kor: { 현재:"재미있어 보이지 않는다.", 과거:"재미있어 보이지 않았다.", 미래:"재미있어 보이지 않을 것이다." }, s_kor: "장난감이", b_en: "in the box", b_kor: "상자 안에서", c_en: ["to the kids", "for any reason"], c_kor: ["아이들에게", "어떤 이유에서든"] },
    { vBase: "look", s: "The situation", p: "의문", c: "serious", kor: { 현재:"심각해 보이니?", 과거:"심각해 보였니?", 미래:"심각해 보일까?" }, s_kor: "상황이", b_en: "in this country", b_kor: "이 나라에서", c_en: ["to everyone", "without preparation"], c_kor: ["모두에게", "준비 없이는"] },
    { vBase: "look", s: "The actors", p: "긍정", c: "tired", kor: { 현재:"피곤해 보인다.", 과거:"피곤해 보였다.", 미래:"피곤해 보일 것이다." }, s_kor: "배우들이", b_en: "after the show", b_kor: "공연 후에", c_en: ["to the fans", "in the dressing room"], c_kor: ["팬들에게", "분장실에서"] },
    { vBase: "look", s: "The solution", p: "부정", c: "simple", kor: { 현재:"간단해 보이지 않는다.", 과거:"간단해 보이지 않았다.", 미래:"간단해 보이지 않을 것이다." }, s_kor: "해결책이", b_en: "on paper", b_kor: "서류상으로는", c_en: ["to me", "at first"], c_kor: ["나에게", "처음에는"] },
    { vBase: "look", s: "The mountain", p: "의문", c: "high", kor: { 현재:"높아 보이니?", 과거:"높아 보였니?", 미래:"높아 보일까?" }, s_kor: "산이", b_en: "from the town", b_kor: "마을에서 볼 때", c_en: ["to climbers", "for sure"], c_kor: ["등반가들에게", "확실히"] },
    { vBase: "look", s: "The actors", p: "긍정", c: "tired", kor: { 현재:"피곤해 보인다.", 과거:"피곤해 보였다.", 미래:"피곤해 보일 것이다." }, s_kor: "배우들은", b_en: "on the set", b_kor: "촬영장에서", c_en: ["to the director", "after a long shoot"], c_kor: ["감독에게", "긴 촬영 후에"] },
    { vBase: "look", s: "The questions", p: "부정", c: "easy", kor: { 현재:"쉬워 보이지 않는다.", 과거:"쉬워 보이지 않았다.", 미래:"쉬워 보이지 않을 것이다." }, s_kor: "질문들은", b_en: "on the blackboard", b_kor: "칠판에서", c_en: ["to the students", "without a clear explanation"], c_kor: ["학생들에게", "명확한 설명 없이는"] },
    { vBase: "look", s: "The stars", p: "의문", c: "bright", kor: { 현재:"밝아 보이니?", 과거:"밝아 보였니?", 미래:"밝아 보일까?" }, s_kor: "별들은", b_en: "in the countryside", b_kor: "시골에서", c_en: ["to us", "on a clear night"], c_kor: ["우리에게", "맑은 밤에"] }
  ];
        return processRawRows2(subjPlurals, TENSES, rawRows);
      })(),
      advanced: null,
      master:   null,
    },
feel: {
      standard: (() => {
        const subjPlurals = ["My legs", "His hands", "The results"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "feel", s: "The blanket", p: "긍정", c: "soft", kor: { 현재:"부드럽게 느껴진다.", 과거:"부드럽게 느껴졌다.", 미래:"부드럽게 느껴질 것이다." }, s_kor: "담요가", b_en: "in winter", b_kor: "겨울에", c_en: ["without a doubt", "in the bedroom"], c_kor: ["의심할 여지 없이", "침실에서"] },
    { vBase: "feel", s: "The water", p: "부정", c: "hot", kor: { 현재:"뜨겁게 느껴지지 않는다.", 과거:"뜨겁게 느껴지지 않았다.", 미래:"뜨겁게 느껴지지 않을 것이다." }, s_kor: "물이", b_en: "in the pool", b_kor: "수영장에서", c_en: ["at all", "without the heater"], c_kor: ["전혀", "히터 없이"] },
    { vBase: "feel", s: "The air", p: "의문", c: "fresh", kor: { 현재:"신선하게 느껴지니?", 과거:"신선하게 느껴졌니?", 미래:"신선하게 느껴질까?" }, s_kor: "공기가", b_en: "in the morning", b_kor: "아침에", c_en: ["here", "after the rain"], c_kor: ["여기서는", "비 온 뒤에"] },
    { vBase: "feel", s: "I", p: "긍정", c: "happy", kor: { 현재:"행복하게 느껴진다.", 과거:"행복하게 느껴졌다.", 미래:"행복하게 느껴질 것이다." }, s_kor: "나는", b_en: "in the park", b_kor: "공원에서", c_en: ["with you", "on a sunny day"], c_kor: ["너와 함께", "화창한 날에"] },
    { vBase: "feel", s: "The fabric", p: "부정", c: "rough", kor: { 현재:"거칠게 느껴지지 않는다.", 과거:"거칠게 느껴지지 않았다.", 미래:"거칠게 느껴지지 않을 것이다." }, s_kor: "천이", b_en: "to the touch", b_kor: "만져보았을 때", c_en: ["in this dress", "in reality"], c_kor: ["이 드레스에서", "실제로는"] },
    { vBase: "feel", s: "He", p: "의문", c: "sick", kor: { 현재:"아프게 느껴지니?", 과거:"아프게 느껴졌니?", 미래:"아프게 느껴질까?" }, s_kor: "그는", b_en: "at the office", b_kor: "사무실에서", c_en: ["a little bit", "without his medicine"], c_kor: ["조금", "약 없이"] },
    { vBase: "feel", s: "The atmosphere", p: "긍정", c: "tense", kor: { 현재:"긴장되게 느껴진다.", 과거:"긴장되게 느껴졌다.", 미래:"긴장되게 느껴질 것이다." }, s_kor: "분위기가", b_en: "in the room", b_kor: "방 안에서", c_en: ["all of a sudden", "during the meeting"], c_kor: ["갑자기", "회의 중에"] },
    { vBase: "feel", s: "The floor", p: "부정", c: "slippery", kor: { 현재:"미끄럽게 느껴지지 않는다.", 과거:"미끄럽게 느껴지지 않았다.", 미래:"미끄럽게 느껴지지 않을 것이다." }, s_kor: "바닥이", b_en: "after cleaning", b_kor: "청소 후에", c_en: ["at all", "with this soap"], c_kor: ["전혀", "이 비누로"] },
    { vBase: "feel", s: "The weather", p: "의문", c: "humid", kor: { 현재:"습하게 느껴지니?", 과거:"습하게 느껴졌니?", 미래:"습하게 느껴질까?" }, s_kor: "날씨가", b_en: "outside", b_kor: "바깥이", c_en: ["in summer", "for everyone"], c_kor: ["여름에", "모두에게"] },
    { vBase: "feel", s: "My legs", p: "긍정", c: "heavy", kor: { 현재:"무겁게 느껴진다.", 과거:"무겁게 느껴졌다.", 미래:"무겁게 느껴질 것이다." }, s_kor: "내 다리가", b_en: "after the run", b_kor: "달리기 후에", c_en: ["on the track", "with fatigue"], c_kor: ["트랙 위에서", "피로함으로"] },
    { vBase: "feel", s: "The bed", p: "부정", c: "comfortable", kor: { 현재:"편안하게 느껴지지 않는다.", 과거:"편안하게 느껴지지 않았다.", 미래:"편안하게 느껴지지 않을 것이다." }, s_kor: "침대가", b_en: "to me", b_kor: "나에게는", c_en: ["without a pillow", "in this room"], c_kor: ["베개 없이", "이 방에서는"] },
    { vBase: "feel", s: "You", p: "의문", c: "sad", kor: { 현재:"슬프게 느껴지니?", 과거:"슬프게 느껴졌니?", 미래:"슬프게 느껴질까?" }, s_kor: "너는", b_en: "about the news", b_kor: "그 소식에 대해", c_en: ["for sure", "in the end"], c_kor: ["확실히", "결국에"] },
    { vBase: "feel", s: "The room", p: "긍정", c: "warm", kor: { 현재:"따뜻하게 느껴진다.", 과거:"따뜻하게 느껴졌다.", 미래:"따뜻하게 느껴질 것이다." }, s_kor: "방이", b_en: "with the heater", b_kor: "히터를 켜서", c_en: ["in the winter", "cozily"], c_kor: ["겨울에", "아늑하게"] },
    { vBase: "feel", s: "The material", p: "부정", c: "cheap", kor: { 현재:"싸구려로 느껴지지 않는다.", 과거:"싸구려로 느껴지지 않았다.", 미래:"싸구려로 느껴지지 않을 것이다." }, s_kor: "재질이", b_en: "to us", b_kor: "우리에게는", c_en: ["at all", "despite the price"], c_kor: ["전혀", "가격에도 불구하고"] },
    { vBase: "feel", s: "The pain", p: "의문", c: "bad", kor: { 현재:"심하게 느껴지니?", 과거:"심하게 느껴졌니?", 미래:"심하게 느껴질까?" }, s_kor: "통증이", b_en: "in my arm", b_kor: "내 팔에서", c_en: ["to you", "after the injury"], c_kor: ["너에게", "부상 후에"] },
    { vBase: "feel", s: "She", p: "긍정", c: "confident", kor: { 현재:"자신감 있게 느껴진다.", 과거:"자신감 있게 느껴졌다.", 미래:"자신감 있게 느껴질 것이다." }, s_kor: "그녀는", b_en: "before the test", b_kor: "시험 전에", c_en: ["in the classroom", "without hesitation"], c_kor: ["교실에서", "망설임 없이"] },
    { vBase: "feel", s: "The silence", p: "부정", c: "awkward", kor: { 현재:"어색하게 느껴지지 않는다.", 과거:"어색하게 느껴지지 않았다.", 미래:"어색하게 느껴지지 않을 것이다." }, s_kor: "침묵이", b_en: "between us", b_kor: "우리 사이에", c_en: ["for any reason", "after talking"], c_kor: ["어떤 이유에서든", "대화 후에"] },
    { vBase: "feel", s: "The situation", p: "의문", c: "dangerous", kor: { 현재:"위험하게 느껴지니?", 과거:"위험하게 느껴졌니?", 미래:"위험하게 느껴질까?" }, s_kor: "상황이", b_en: "to you", b_kor: "너에게는", c_en: ["here", "in the dark"], c_kor: ["여기서는", "어둠 속에서"] },
    { vBase: "feel", s: "His hands", p: "긍정", c: "cold", kor: { 현재:"차갑게 느껴진다.", 과거:"차갑게 느껴졌다.", 미래:"차갑게 느껴질 것이다." }, s_kor: "그의 손이", b_en: "in winter", b_kor: "겨울에", c_en: ["without exception", "despite the gloves"], c_kor: ["예외 없이", "장갑에도 불구하고"] },
    { vBase: "feel", s: "The mattress", p: "부정", c: "hard", kor: { 현재:"딱딱하게 느껴지지 않는다.", 과거:"딱딱하게 느껴지지 않았다.", 미래:"딱딱하게 느껴지지 않을 것이다." }, s_kor: "매트리스가", b_en: "to me", b_kor: "나에게는", c_en: ["at all", "in this room"], c_kor: ["전혀", "이 방에서는"] },
    { vBase: "feel", s: "The results", p: "의문", c: "disappointing", kor: { 현재:"실망스럽게 느껴지니?", 과거:"실망스럽게 느껴졌니?", 미래:"실망스럽게 느껴질까?" }, s_kor: "결과가", b_en: "to them", b_kor: "그들에게", c_en: ["after the hard work", "clearly"], c_kor: ["열심히 노력한 후에", "분명히"] },
    { vBase: "feel", s: "We", p: "긍정", c: "proud", kor: { 현재:"자랑스럽게 느껴진다.", 과거:"자랑스럽게 느껴졌다.", 미래:"자랑스럽게 느껴질 것이다." }, s_kor: "우리는", b_en: "of the team", b_kor: "팀이", c_en: ["after the championship", "happily"], c_kor: ["우승 후에", "행복하게"] },
    { vBase: "feel", s: "The burden", p: "부정", c: "heavy", kor: { 현재:"무겁게 느껴지지 않는다.", 과거:"무겁게 느껴지지 않았다.", 미래:"무겁게 느껴지지 않을 것이다." }, s_kor: "부담이", b_en: "to me", b_kor: "나에게는", c_en: ["in reality", "after the help"], c_kor: ["실제로는", "도움 받은 후에"] },
    { vBase: "feel", s: "They", p: "의문", c: "angry", kor: { 현재:"화가 난 것처럼 느껴지니?", 과거:"화가 난 것처럼 느껴졌니?", 미래:"화가 난 것처럼 느껴질까?" }, s_kor: "그들은", b_en: "about the mistake", b_kor: "실수에 대해", c_en: ["in the office", "suddenly"], c_kor: ["사무실에서", "갑자기"] },
    { vBase: "feel", s: "The towel", p: "긍정", c: "dry", kor: { 현재:"마른 것처럼 느껴진다.", 과거:"마른 것처럼 느껴졌다.", 미래:"마른 것처럼 느껴질 것이다." }, s_kor: "수건이", b_en: "in the sun", b_kor: "햇볕에서", c_en: ["until the end", "in the breeze"], c_kor: ["끝까지", "산들바람 속에서"] },
    { vBase: "feel", s: "The music", p: "부정", c: "loud", kor: { 현재:"시끄럽게 느껴지지 않는다.", 과거:"시끄럽게 느껴지지 않았다.", 미래:"시끄럽게 느껴지지 않을 것이다." }, s_kor: "음악이", b_en: "in this room", b_kor: "이 방에서는", c_en: ["at all", "despite the volume"], c_kor: ["전혀", "볼륨에도 불구하고"] },
    { vBase: "feel", s: "The sun", p: "의문", c: "strong", kor: { 현재:"강하게 느껴지니?", 과거:"강하게 느껴졌니?", 미래:"강하게 느껴질까?" }, s_kor: "햇살이", b_en: "at noon", b_kor: "정오에", c_en: ["for sure", "in the garden"], c_kor: ["확실히", "정원에서"] },
    { vBase: "feel", s: "The blanket", p: "긍정", c: "warm", kor: { 현재:"따뜻하게 느껴진다.", 과거:"따뜻하게 느껴졌다.", 미래:"따뜻하게 느껴질 것이다." }, s_kor: "담요는", b_en: "in the bedroom", b_kor: "침실에서", c_en: ["without a doubt", "during the winter"], c_kor: ["의심할 여지 없이", "겨울 동안"] },
    { vBase: "feel", s: "My legs", p: "부정", c: "heavy", kor: { 현재:"무겁게 느껴지지 않는다.", 과거:"무겁게 느껴지지 않았다.", 미래:"무겁게 느껴지지 않을 것이다." }, s_kor: "내 다리는", b_en: "on the track", b_kor: "트랙 위에서", c_en: ["at all", "after a light warm-up"], c_kor: ["전혀", "가벼운 준비 운동 후에"] },
    { vBase: "feel", s: "The results", p: "의문", c: "disappointing", kor: { 현재:"실망스럽게 느껴지니?", 과거:"실망스럽게 느껴졌니?", 미래:"실망스럽게 느껴질까?" }, s_kor: "결과들은", b_en: "to the team", b_kor: "팀에게", c_en: ["for sure", "without a trophy"], c_kor: ["확실히", "트로피 없이는"] }
  ];
        return processRawRows2(subjPlurals, TENSES, rawRows);
      })(),
      advanced: null,
      master:   null,
    },
sound: {
      standard: (() => {
        const subjPlurals = ["The steps", "The instructions"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "sound", s: "The music", p: "긍정", c: "loud", kor: { 현재:"시끄럽게 들린다.", 과거:"시끄럽게 들렸다.", 미래:"시끄럽게 들릴 것이다." }, s_kor: "음악이", b_en: "in the room", b_kor: "방 안에서", c_en: ["with this speaker", "for sure"], c_kor: ["이 스피커로는", "확실히"] },
    { vBase: "sound", s: "The story", p: "부정", c: "true", kor: { 현재:"사실처럼 들리지 않는다.", 과거:"사실처럼 들리지 않았다.", 미래:"사실처럼 들리지 않을 것이다." }, s_kor: "이야기가", b_en: "to me", b_kor: "나에게는", c_en: ["in many ways", "in reality"], c_kor: ["여러모로", "실제로는"] },
    { vBase: "sound", s: "His voice", p: "의문", c: "angry", kor: { 현재:"화난 것처럼 들리니?", 과거:"화난 것처럼 들렸니?", 미래:"화난 것처럼 들릴까?" }, s_kor: "그의 목소리가", b_en: "on the phone", b_kor: "전화상으로", c_en: ["without a doubt", "to everyone"], c_kor: ["의심의 여지 없이", "모두에게"] },
    { vBase: "sound", s: "The idea", p: "긍정", c: "great", kor: { 현재:"훌륭하게 들린다.", 과거:"훌륭하게 들렸다.", 미래:"훌륭하게 들릴 것이다." }, s_kor: "아이디어가", b_en: "to us", b_kor: "우리에게는", c_en: ["at first glance", "in this meeting"], c_kor: ["언뜻 보기에", "이 회의에서"] },
    { vBase: "sound", s: "The alarm", p: "부정", c: "clear", kor: { 현재:"선명하게 들리지 않는다.", 과거:"선명하게 들리지 않았다.", 미래:"선명하게 들리지 않을 것이다." }, s_kor: "알람이", b_en: "from here", b_kor: "여기서는", c_en: ["in the morning", "every day"], c_kor: ["아침에", "매일"] },
    { vBase: "sound", s: "The plan", p: "의문", c: "perfect", kor: { 현재:"완벽하게 들리니?", 과거:"완벽하게 들렸니?", 미래:"완벽하게 들릴까?" }, s_kor: "계획이", b_en: "to you", b_kor: "너에게는", c_en: ["on paper", "at first"], c_kor: ["서류상으로는", "처음에는"] },
    { vBase: "sound", s: "The song", p: "긍정", c: "sad", kor: { 현재:"슬프게 들린다.", 과거:"슬프게 들렸다.", 미래:"슬프게 들릴 것이다." }, s_kor: "노래가", b_en: "in the hall", b_kor: "홀 안에서", c_en: ["to the audience", "without a reason"], c_kor: ["관객들에게", "이유 없이"] },
    { vBase: "sound", s: "The noise", p: "부정", c: "annoying", kor: { 현재:"짜증 나게 들리지 않는다.", 과거:"짜증 나게 들리지 않았다.", 미래:"짜증 나게 들리지 않을 것이다." }, s_kor: "소음이", b_en: "to me", b_kor: "나에게는", c_en: ["during the night", "at all"], c_kor: ["밤 동안에", "전혀"] },
    { vBase: "sound", s: "The engine", p: "의문", c: "strange", kor: { 현재:"이상하게 들리니?", 과거:"이상하게 들렸니?", 미래:"이상하게 들릴까?" }, s_kor: "엔진이", b_en: "from the outside", b_kor: "밖에서 들을 때", c_en: ["to the mechanic", "a little bit"], c_kor: ["정비사에게", "조금"] },
    { vBase: "sound", s: "Her excuse", p: "긍정", c: "weak", kor: { 현재:"빈약하게 들린다.", 과거:"빈약하게 들렸다.", 미래:"빈약하게 들릴 것이다." }, s_kor: "그녀의 변명이", b_en: "to everyone", b_kor: "모두에게", c_en: ["in the room", "without logic"], c_kor: ["방 안에서", "논리 없이"] },
    { vBase: "sound", s: "The news", p: "부정", c: "surprising", kor: { 현재:"놀랍게 들리지 않는다.", 과거:"놀랍게 들리지 않았다.", 미래:"놀랍게 들리지 않을 것이다." }, s_kor: "뉴스가", b_en: "to us", b_kor: "우리에게는", c_en: ["in the morning", "for any reason"], c_kor: ["아침에", "어떤 이유에서든"] },
    { vBase: "sound", s: "The joke", p: "의문", c: "funny", kor: { 현재:"재미있게 들리니?", 과거:"재미있게 들렸니?", 미래:"재미있게 들릴까?" }, s_kor: "농담이", b_en: "to them", b_kor: "그들에게", c_en: ["during the break", "in general"], c_kor: ["쉬는 시간에", "일반적으로"] },
    { vBase: "sound", s: "The proposal", p: "긍정", c: "interesting", kor: { 현재:"흥미롭게 들린다.", 과거:"흥미롭게 들렸다.", 미래:"흥미롭게 들릴 것이다." }, s_kor: "제안이", b_en: "at first", b_kor: "처음에는", c_en: ["to the committee", "on paper"], c_kor: ["위원회에게", "서류상으로"] },
    { vBase: "sound", s: "The steps", p: "부정", c: "heavy", kor: { 현재:"무겁게 들리지 않는다.", 과거:"무겁게 들리지 않았다.", 미래:"무겁게 들리지 않을 것이다." }, s_kor: "발소리가", b_en: "in the hall", b_kor: "복도에서", c_en: ["in the dark", "at all"], c_kor: ["어둠 속에서", "전혀"] },
    { vBase: "sound", s: "The bird", p: "의문", c: "sweet", kor: { 현재:"달콤하게 들리니?", 과거:"달콤하게 들렸니?", 미래:"달콤하게 들릴까?" }, s_kor: "새소리가", b_en: "in the morning", b_kor: "아침에", c_en: ["in the forest", "every spring"], c_kor: ["숲속에서", "매년 봄에"] },
    { vBase: "sound", s: "The suggestion", p: "긍정", c: "helpful", kor: { 현재:"도움이 되는 것처럼 들린다.", 과거:"도움이 되는 것처럼 들렸다.", 미래:"도움이 되는 것처럼 들릴 것이다." }, s_kor: "제안이", b_en: "to us", b_kor: "우리에게", c_en: ["in this situation", "for sure"], c_kor: ["이 상황에서", "확실히"] },
    { vBase: "sound", s: "The answer", p: "부정", c: "correct", kor: { 현재:"정확하게 들리지 않는다.", 과거:"정확하게 들리지 않았다.", 미래:"정확하게 들리지 않을 것이다." }, s_kor: "대답이", b_en: "to the teacher", b_kor: "선생님에게는", c_en: ["without a doubt", "at all"], c_kor: ["의심의 여지 없이", "전혀"] },
    { vBase: "sound", s: "The explanation", p: "의문", c: "logical", kor: { 현재:"논리적으로 들리니?", 과거:"논리적으로 들렸니?", 미래:"논리적으로 들릴까?" }, s_kor: "설명이", b_en: "to you", b_kor: "너에게", c_en: ["in this context", "easily"], c_kor: ["이 문맥에서", "쉽게"] },
    { vBase: "sound", s: "The thunder", p: "긍정", c: "scary", kor: { 현재:"무섭게 들린다.", 과거:"무섭게 들렸다.", 미래:"무섭게 들릴 것이다." }, s_kor: "천둥소리가", b_en: "at night", b_kor: "밤에", c_en: ["during the storm", "to the children"], c_kor: ["폭풍우 동안에", "아이들에게"] },
    { vBase: "sound", s: "The speech", p: "부정", c: "boring", kor: { 현재:"지루하게 들리지 않는다.", 과거:"지루하게 들리지 않았다.", 미래:"지루하게 들리지 않을 것이다." }, s_kor: "연설이", b_en: "to the students", b_kor: "학생들에게는", c_en: ["in the auditorium", "after lunch"], c_kor: ["강당에서", "점심 식사 후에"] },
    { vBase: "sound", s: "The rumor", p: "의문", c: "false", kor: { 현재:"거짓으로 들리니?", 과거:"거짓으로 들렸니?", 미래:"거짓으로 들릴까?" }, s_kor: "소문이", b_en: "to everyone", b_kor: "모두에게", c_en: ["in this town", "in reality"], c_kor: ["이 마을에서", "실제로는"] },
    { vBase: "sound", s: "The guitar", p: "긍정", c: "beautiful", kor: { 현재:"아름답게 들린다.", 과거:"아름답게 들렸다.", 미래:"아름답게 들릴 것이다." }, s_kor: "기타 소리가", b_en: "in the cafe", b_kor: "카페에서", c_en: ["to the guests", "on weekends"], c_kor: ["손님들에게", "주말에"] },
    { vBase: "sound", s: "The instructions", p: "부정", c: "clear", kor: { 현재:"명확하게 들리지 않는다.", 과거:"명확하게 들리지 않았다.", 미래:"명확하게 들리지 않을 것이다." }, s_kor: "지시사항이", b_en: "over the radio", b_kor: "무전기로는", c_en: ["to the team", "at all"], c_kor: ["팀에게", "전혀"] },
    { vBase: "sound", s: "The excuse", p: "의문", c: "reasonable", kor: { 현재:"합리적으로 들리니?", 과거:"합리적으로 들렸니?", 미래:"합리적으로 들릴까?" }, s_kor: "변명이", b_en: "to the boss", b_kor: "사장님에게", c_en: ["in the office", "at first"], c_kor: ["사무실에서", "처음에는"] },
    { vBase: "sound", s: "The laugh", p: "긍정", c: "fake", kor: { 현재:"가짜처럼 들린다.", 과거:"가짜처럼 들렸다.", 미래:"가짜처럼 들릴 것이다." }, s_kor: "웃음소리가", b_en: "to me", b_kor: "나에게는", c_en: ["during the conversation", "all of a sudden"], c_kor: ["대화 중에", "갑자기"] },
    { vBase: "sound", s: "The warning", p: "부정", c: "serious", kor: { 현재:"심각하게 들리지 않는다.", 과거:"심각하게 들리지 않았다.", 미래:"심각하게 들리지 않을 것이다." }, s_kor: "경고가", b_en: "to them", b_kor: "그들에게는", c_en: ["in the building", "at all"], c_kor: ["건물 안에서", "전혀"] },
    { vBase: "sound", s: "The project", p: "의문", c: "difficult", kor: { 현재:"어렵게 들리니?", 과거:"어렵게 들렸니?", 미래:"어렵게 들릴까?" }, s_kor: "프로젝트가", b_en: "at first", b_kor: "처음에는", c_en: ["to the team", "without a guide"], c_kor: ["팀에게", "가이드 없이는"] },
    { vBase: "sound", s: "The announcement", p: "긍정", c: "clear", kor: { 현재:"선명하게 들린다.", 과거:"선명하게 들렸다.", 미래:"선명하게 들릴 것이다." }, s_kor: "안내방송은", b_en: "at the station", b_kor: "역에서", c_en: ["to everyone", "through the speakers"], c_kor: ["모두에게", "스피커를 통해"] },
    { vBase: "sound", s: "The steps", p: "부정", c: "heavy", kor: { 현재:"무겁게 들리지 않는다.", 과거:"무겁게 들리지 않았다.", 미래:"무겁게 들리지 않을 것이다." }, s_kor: "발소리는", b_en: "in the hallway", b_kor: "복도에서", c_en: ["with soft slippers", "at all"], c_kor: ["부드러운 실내화 덕분에", "전혀"] },
    { vBase: "sound", s: "The song", p: "의문", c: "sad", kor: { 현재:"슬프게 들리니?", 과거:"슬프게 들렸니?", 미래:"슬프게 들릴까?" }, s_kor: "노래가", b_en: "in the theater", b_kor: "극장 안에서", c_en: ["for a special reason", "to the audience"], c_kor: ["특별한 이유로", "관객들에게"] }
  ];
        return processRawRows2(subjPlurals, TENSES, rawRows);
      })(),
      advanced: null,
      master:   null,
    },
smell: {
      standard: (() => {
        const subjPlurals = ["The shoes"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "smell", s: "The flower", p: "긍정", c: "sweet", kor: { 현재:"달콤한 냄새가 난다.", 과거:"달콤한 냄새가 났다.", 미래:"달콤한 냄새가 날 것이다." }, s_kor: "꽃이", b_en: "in the garden", b_kor: "정원에서", c_en: ["without fail", "during spring"], c_kor: ["어김없이", "봄 동안"] },
    { vBase: "smell", s: "The milk", p: "부정", c: "sour", kor: { 현재:"상한 냄새가 나지 않는다.", 과거:"상한 냄새가 나지 않았다.", 미래:"상한 냄새가 나지 않을 것이다." }, s_kor: "우유가", b_en: "in the fridge", b_kor: "냉장고에서", c_en: ["at all", "despite the cold"], c_kor: ["전혀", "추위에도 불구하고"] },
    { vBase: "smell", s: "The food", p: "의문", c: "delicious", kor: { 현재:"맛있는 냄새가 나니?", 과거:"맛있는 냄새가 났니?", 미래:"맛있는 냄새가 날까?" }, s_kor: "음식이", b_en: "in the kitchen", b_kor: "부엌에서", c_en: ["to us", "before dinner"], c_kor: ["우리에게", "저녁 식사 전에"] },
    { vBase: "smell", s: "The bread", p: "긍정", c: "fresh", kor: { 현재:"신선한 냄새가 난다.", 과거:"신선한 냄새가 났다.", 미래:"신선한 냄새가 날 것이다." }, s_kor: "빵이", b_en: "in the bakery", b_kor: "빵집에서", c_en: ["to the customers", "every morning"], c_kor: ["손님들에게", "매일 아침"] },
    { vBase: "smell", s: "The room", p: "부정", c: "bad", kor: { 현재:"나쁜 냄새가 나지 않는다.", 과거:"나쁜 냄새가 나지 않았다.", 미래:"나쁜 냄새가 나지 않을 것이다." }, s_kor: "방이", b_en: "after cleaning", b_kor: "청소 후에", c_en: ["to me", "for sure"], c_kor: ["나에게는", "확실히"] },
    { vBase: "smell", s: "The soup", p: "의문", c: "spicy", kor: { 현재:"매운 냄새가 나니?", 과거:"매운 냄새가 났니?", 미래:"매운 냄새가 날까?" }, s_kor: "수프가", b_en: "in the pot", b_kor: "냄비 안에서", c_en: ["to everyone", "for sure"], c_kor: ["모두에게", "확실히"] },
    { vBase: "smell", s: "The cheese", p: "긍정", c: "strong", kor: { 현재:"강한 냄새가 난다.", 과거:"강한 냄새가 났다.", 미래:"강한 냄새가 날 것이다." }, s_kor: "치즈가", b_en: "on the plate", b_kor: "접시 위에서", c_en: ["to us", "in general"], c_kor: ["우리에게", "일반적으로"] },
    { vBase: "smell", s: "The air", p: "부정", c: "fresh", kor: { 현재:"신선한 냄새가 나지 않는다.", 과거:"신선한 냄새가 나지 않았다.", 미래:"신선한 냄새가 나지 않을 것이다." }, s_kor: "공기가", b_en: "in the city", b_kor: "도시에서는", c_en: ["to tourists", "during winter"], c_kor: ["관광객들에게", "겨울 동안"] },
    { vBase: "smell", s: "The coffee", p: "의문", c: "good", kor: { 현재:"좋은 냄새가 나니?", 과거:"좋은 냄새가 났니?", 미래:"좋은 냄새가 날까?" }, s_kor: "커피가", b_en: "in the morning", b_kor: "아침에", c_en: ["to me", "every day"], c_kor: ["나에게", "매일"] },
    { vBase: "smell", s: "The perfume", p: "긍정", c: "nice", kor: { 현재:"좋은 냄새가 난다.", 과거:"좋은 냄새가 났다.", 미래:"좋은 냄새가 날 것이다." }, s_kor: "향수가", b_en: "on her", b_kor: "그녀에게서", c_en: ["to everyone", "at the party"], c_kor: ["모두에게", "파티에서"] },
    { vBase: "smell", s: "The garbage", p: "부정", c: "terrible", kor: { 현재:"끔찍한 냄새가 나지 않는다.", 과거:"끔찍한 냄새가 나지 않았다.", 미래:"끔찍한 냄새가 나지 않을 것이다." }, s_kor: "쓰레기가", b_en: "in winter", b_kor: "겨울에는", c_en: ["to us", "despite the cold"], c_kor: ["우리에게", "추위에도 불구하고"] },
    { vBase: "smell", s: "The meat", p: "의문", c: "strange", kor: { 현재:"이상한 냄새가 나니?", 과거:"이상한 냄새가 났니?", 미래:"이상한 냄새가 날까?" }, s_kor: "고기가", b_en: "on the plate", b_kor: "접시 위에서", c_en: ["to you", "without sauce"], c_kor: ["너에게", "소스 없이"] },
    { vBase: "smell", s: "The soap", p: "긍정", c: "clean", kor: { 현재:"깨끗한 냄새가 난다.", 과거:"깨끗한 냄새가 났다.", 미래:"깨끗한 냄새가 날 것이다." }, s_kor: "비누가", b_en: "in the bathroom", b_kor: "욕실에서", c_en: ["to me", "every time"], c_kor: ["나에게", "매번"] },
    { vBase: "smell", s: "The smoke", p: "부정", c: "heavy", kor: { 현재:"독한 냄새가 나지 않는다.", 과거:"독한 냄새가 나지 않았다.", 미래:"독한 냄새가 나지 않을 것이다." }, s_kor: "연기가", b_en: "from here", b_kor: "여기서는", c_en: ["to us", "at all"], c_kor: ["우리에게", "전혀"] },
    { vBase: "smell", s: "The fish", p: "의문", c: "fresh", kor: { 현재:"신선한 냄새가 나니?", 과거:"신선한 냄새가 났니?", 미래:"신선한 냄새가 날까?" }, s_kor: "생선이", b_en: "at the market", b_kor: "시장에서", c_en: ["to the buyers", "in the morning"], c_kor: ["구매자들에게", "아침에"] },
    { vBase: "smell", s: "The lotion", p: "긍정", c: "soft", kor: { 현재:"부드러운 냄새가 난다.", 과거:"부드러운 냄새가 났다.", 미래:"부드러운 냄새가 날 것이다." }, s_kor: "로션이", b_en: "on the skin", b_kor: "피부에서", c_en: ["to everyone", "for sure"], c_kor: ["모두에게", "확실히"] },
    { vBase: "smell", s: "The car", p: "부정", c: "new", kor: { 현재:"새것 냄새가 나지 않는다.", 과거:"새것 냄새가 나지 않았다.", 미래:"새것 냄새가 나지 않을 것이다." }, s_kor: "차가", b_en: "inside", b_kor: "안에서", c_en: ["to the driver", "for any reason"], c_kor: ["운전자에게", "어떤 이유에서든"] },
    { vBase: "smell", s: "The blanket", p: "의문", c: "musty", kor: { 현재:"곰팡내가 나니?", 과거:"곰팡내가 났니?", 미래:"곰팡내가 날까?" }, s_kor: "담요가", b_en: "from the closet", b_kor: "옷장에서", c_en: ["to me", "after a long time"], c_kor: ["나에게", "오랜만에"] },
    { vBase: "smell", s: "The candle", p: "긍정", c: "pleasant", kor: { 현재:"기분 좋은 냄새가 난다.", 과거:"기분 좋은 냄새가 났다.", 미래:"기분 좋은 냄새가 날 것이다." }, s_kor: "양초가", b_en: "in the evening", b_kor: "저녁에", c_en: ["to us", "for sure"], c_kor: ["우리에게", "확실히"] },
    { vBase: "smell", s: "The shoes", p: "부정", c: "smelly", kor: { 현재:"악취가 나지 않는다.", 과거:"악취가 나지 않았다.", 미래:"악취가 나지 않을 것이다." }, s_kor: "신발이", b_en: "after washing", b_kor: "세탁 후에", c_en: ["to me", "at all"], c_kor: ["나에게", "전혀"] },
    { vBase: "smell", s: "The sauce", p: "의문", c: "sweet", kor: { 현재:"달콤한 냄새가 나니?", 과거:"달콤한 냄새가 났니?", 미래:"달콤한 냄새가 날까?" }, s_kor: "소스가", b_en: "in the bowl", b_kor: "그릇 안에서", c_en: ["to you", "without sugar"], c_kor: ["너에게", "설탕 없이"] },
    { vBase: "smell", s: "The house", p: "긍정", c: "wonderful", kor: { 현재:"훌륭한 냄새가 난다.", 과거:"훌륭한 냄새가 났다.", 미래:"훌륭한 냄새가 날 것이다." }, s_kor: "집이", b_en: "on holidays", b_kor: "명절에", c_en: ["to the guests", "during festivals"], c_kor: ["손님들에게", "축제 기간 동안"] },
    { vBase: "smell", s: "The breath", p: "부정", c: "bad", kor: { 현재:"입냄새가 나쁘지 않다.", 과거:"입냄새가 나쁘지 않았다.", 미래:"입냄새가 나쁘지 않을 것이다." }, s_kor: "입냄새가", b_en: "after brushing", b_kor: "양치 후에", c_en: ["to others", "at all"], c_kor: ["다른 사람들에게", "전혀"] },
    { vBase: "smell", s: "The pizza", p: "의문", c: "cheesy", kor: { 현재:"치즈 냄새가 많이 나니?", 과거:"치즈 냄새가 많이 났니?", 미래:"치즈 냄새가 많이 날까?" }, s_kor: "피자가", b_en: "in the box", b_kor: "상자 안에서", c_en: ["to me", "for sure"], c_kor: ["나에게", "확실히"] },
    { vBase: "smell", s: "The wood", p: "긍정", c: "earthy", kor: { 현재:"흙(자연) 냄새가 난다.", 과거:"흙(자연) 냄새가 났다.", 미래:"흙(자연) 냄새가 날 것이다." }, s_kor: "나무가", b_en: "after the rain", b_kor: "비 온 뒤에", c_en: ["to us", "in a natural way"], c_kor: ["우리에게", "자연스럽게"] },
    { vBase: "smell", s: "The paint", p: "부정", c: "strong", kor: { 현재:"독한 냄새가 나지 않는다.", 과거:"독한 냄새가 나지 않았다.", 미래:"독한 냄새가 나지 않을 것이다." }, s_kor: "페인트가", b_en: "in this room", b_kor: "이 방에서는", c_en: ["to everyone", "without ventilation"], c_kor: ["모두에게", "환기 없이"] },
    { vBase: "smell", s: "The tea", p: "의문", c: "herbal", kor: { 현재:"허브 냄새가 나니?", 과거:"허브 냄새가 났니?", 미래:"허브 냄새가 날까?" }, s_kor: "차가", b_en: "in the cup", b_kor: "컵 안에서", c_en: ["to me", "in a mild way"], c_kor: ["나에게", "은은하게"] },
    { vBase: "smell", s: "The shoes", p: "긍정", c: "bad", kor: { 현재:"나쁜 냄새가 난다.", 과거:"나쁜 냄새가 났다.", 미래:"나쁜 냄새가 날 것이다." }, s_kor: "신발은", b_en: "in the closet", b_kor: "옷장 안에서", c_en: ["to me", "after a rainy day"], c_kor: ["나에게", "비가 온 날 후에"] },
    { vBase: "smell", s: "The sauce", p: "부정", c: "sour", kor: { 현재:"상한 냄새가 나지 않는다.", 과거:"상한 냄새가 나지 않았다.", 미래:"상한 냄새가 나지 않을 것이다." }, s_kor: "소스는", b_en: "on the table", b_kor: "식탁 위에서", c_en: ["to me", "even after a day"], c_kor: ["나에게", "하루가 지나도"] },
    { vBase: "smell", s: "The soup", p: "의문", c: "spicy", kor: { 현재:"매운 냄새가 나니?", 과거:"매운 냄새가 났니?", 미래:"매운 냄새가 날까?" }, s_kor: "수프는", b_en: "in the kitchen", b_kor: "주방에서", c_en: ["to you", "with this black pepper"], c_kor: ["너에게", "이 후추 때문에"] }
  ];
        return processRawRows2(subjPlurals, TENSES, rawRows);
      })(),
      advanced: null,
      master:   null,
    },
taste: {
      standard: (() => {
        const subjPlurals = ["The apples", "The cookies", "The drinks"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "taste", s: "The soup", p: "긍정", c: "delicious", kor: { 현재:"맛있는 맛이 난다.", 과거:"맛있는 맛이 났다.", 미래:"맛있는 맛이 날 것이다." }, s_kor: "수프가", b_en: "in the pot", b_kor: "냄비 안에서", c_en: ["to us", "during the winter"], c_kor: ["우리에게", "겨울 동안"] },
    { vBase: "taste", s: "The medicine", p: "부정", c: "bitter", kor: { 현재:"쓴맛이 나지 않는다.", 과거:"쓴맛이 나지 않았다.", 미래:"쓴맛이 나지 않을 것이다." }, s_kor: "약이", b_en: "to me", b_kor: "나에게는", c_en: ["in reality", "at all"], c_kor: ["실제로는", "전혀"] },
    { vBase: "taste", s: "The coffee", p: "의문", c: "sweet", kor: { 현재:"단맛이 나니?", 과거:"단맛이 났니?", 미래:"단맛이 날까?" }, s_kor: "커피가", b_en: "with sugar", b_kor: "설탕을 넣으니", c_en: ["to you", "in the morning"], c_kor: ["너에게", "아침에"] },
    { vBase: "taste", s: "The apples", p: "긍정", c: "sour", kor: { 현재:"신맛이 난다.", 과거:"신맛이 났다.", 미래:"신맛이 날 것이다." }, s_kor: "사과들이", b_en: "from the tree", b_kor: "그 나무에서 딴", c_en: ["to us", "without a doubt"], c_kor: ["우리에게", "의심할 여지 없이"] },
    { vBase: "taste", s: "The cake", p: "부정", c: "dry", kor: { 현재:"퍽퍽한 맛이 나지 않는다.", 과거:"퍽퍽한 맛이 나지 않았다.", 미래:"퍽퍽한 맛이 나지 않을 것이다." }, s_kor: "케이크가", b_en: "after a day", b_kor: "하루가 지나도", c_en: ["to me", "in general"], c_kor: ["나에게는", "일반적으로"] },
    { vBase: "taste", s: "The water", p: "의문", c: "strange", kor: { 현재:"이상한 맛이 나니?", 과거:"이상한 맛이 났니?", 미래:"이상한 맛이 날까?" }, s_kor: "물이", b_en: "in this bottle", b_kor: "이 병 안에서", c_en: ["to everyone", "for some reason"], c_kor: ["모두에게", "어떤 이유에서인지"] },
    { vBase: "taste", s: "The milk", p: "긍정", c: "bad", kor: { 현재:"상한 맛이 난다.", 과거:"상한 맛이 났다.", 미래:"상한 맛이 날 것이다." }, s_kor: "우유가", b_en: "out of the fridge", b_kor: "냉장고 밖에 두니", c_en: ["to me", "without a lid"], c_kor: ["나에게", "뚜껑 없이"] },
    { vBase: "taste", s: "The cookies", p: "부정", c: "salty", kor: { 현재:"짠맛이 나지 않는다.", 과거:"짠맛이 나지 않았다.", 미래:"짠맛이 나지 않을 것이다." }, s_kor: "쿠키가", b_en: "without salt", b_kor: "소금을 넣지 않아", c_en: ["to us", "in reality"], c_kor: ["우리에게", "실제로는"] },
    { vBase: "taste", s: "The meat", p: "의문", c: "spicy", kor: { 현재:"매운 맛이 나니?", 과거:"매운 맛이 났니?", 미래:"매운 맛이 날까?" }, s_kor: "고기가", b_en: "with this sauce", b_kor: "이 소스와 함께", c_en: ["to you", "in general"], c_kor: ["너에게", "일반적으로"] },
    { vBase: "taste", s: "The tea", p: "긍정", c: "strong", kor: { 현재:"진한 맛이 난다.", 과거:"진한 맛이 났다.", 미래:"진한 맛이 날 것이다." }, s_kor: "차가", b_en: "in the morning", b_kor: "아침에는", c_en: ["to me", "without water"], c_kor: ["나에게", "물 없이"] },
    { vBase: "taste", s: "The sauce", p: "부정", c: "hot", kor: { 현재:"매운 맛이 나지 않는다.", 과거:"매운 맛이 나지 않았다.", 미래:"매운 맛이 나지 않을 것이다." }, s_kor: "소스가", b_en: "to me", b_kor: "나에게는", c_en: ["in reality", "at all"], c_kor: ["실제로는", "전혀"] },
    { vBase: "taste", s: "The bread", p: "의문", c: "fresh", kor: { 현재:"신선한 맛이 나니?", 과거:"신선한 맛이 났니?", 미래:"신선한 맛이 날까?" }, s_kor: "빵이", b_en: "from the oven", b_kor: "오븐에서 막 나와서", c_en: ["to the customers", "in the morning"], c_kor: ["손님들에게", "아침에"] },
    { vBase: "taste", s: "The juice", p: "긍정", c: "sweet", kor: { 현재:"단맛이 난다.", 과거:"단맛이 났다.", 미래:"단맛이 날 것이다." }, s_kor: "주스가", b_en: "with ice", b_kor: "얼음을 넣으니", c_en: ["to us", "in summer"], c_kor: ["우리에게", "여름에"] },
    { vBase: "taste", s: "The fish", p: "부정", c: "fishy", kor: { 현재:"비린 맛이 나지 않는다.", 과거:"비린 맛이 나지 않았다.", 미래:"비린 맛이 나지 않을 것이다." }, s_kor: "생선이", b_en: "with lemon", b_kor: "레몬과 함께", c_en: ["to me", "at all"], c_kor: ["나에게", "전혀"] },
    { vBase: "taste", s: "The drinks", p: "의문", c: "good", kor: { 현재:"좋은 맛이 나니?", 과거:"좋은 맛이 났니?", 미래:"좋은 맛이 날까?" }, s_kor: "음료수들이", b_en: "at this party", b_kor: "이 파티에서", c_en: ["to you", "without ice"], c_kor: ["너에게", "얼음 없이"] },
    { vBase: "taste", s: "The pizza", p: "긍정", c: "salty", kor: { 현재:"짠맛이 난다.", 과거:"짠맛이 났다.", 미래:"짠맛이 날 것이다." }, s_kor: "피자가", b_en: "with extra cheese", b_kor: "치즈를 추가하니", c_en: ["to me", "for sure"], c_kor: ["나에게", "확실히"] },
    { vBase: "taste", s: "The candy", p: "부정", c: "sour", kor: { 현재:"신맛이 나지 않는다.", 과거:"신맛이 나지 않았다.", 미래:"신맛이 나지 않을 것이다." }, s_kor: "사탕이", b_en: "in my mouth", b_kor: "내 입에서는", c_en: ["to me", "at all"], c_kor: ["나에게", "전혀"] },
    { vBase: "taste", s: "The sandwich", p: "의문", c: "dry", kor: { 현재:"퍽퍽한 맛이 나니?", 과거:"퍽퍽한 맛이 났니?", 미래:"퍽퍽한 맛이 날까?" }, s_kor: "샌드위치가", b_en: "without sauce", b_kor: "소스 없이", c_en: ["to you", "in general"], c_kor: ["너에게", "일반적으로"] },
    { vBase: "taste", s: "The cheese", p: "긍정", c: "rich", kor: { 현재:"풍부한 맛이 난다.", 과거:"풍부한 맛이 났다.", 미래:"풍부한 맛이 날 것이다." }, s_kor: "치즈가", b_en: "on the cracker", b_kor: "크래커 위에서", c_en: ["to us", "for sure"], c_kor: ["우리에게", "확실히"] },
    { vBase: "taste", s: "The soup", p: "부정", c: "salty", kor: { 현재:"짠맛이 나지 않는다.", 과거:"짠맛이 나지 않았다.", 미래:"짠맛이 나지 않을 것이다." }, s_kor: "수프가", b_en: "after adding water", b_kor: "물을 넣은 후에", c_en: ["to me", "at all"], c_kor: ["나에게", "전혀"] },
    { vBase: "taste", s: "The chicken", p: "의문", c: "spicy", kor: { 현재:"매운 맛이 나니?", 과거:"매운 맛이 났니?", 미래:"매운 맛이 날까?" }, s_kor: "치킨이", b_en: "at this restaurant", b_kor: "이 식당에서", c_en: ["to you", "in general"], c_kor: ["너에게", "일반적으로"] },
    { vBase: "taste", s: "The dessert", p: "긍정", c: "sweet", kor: { 현재:"단맛이 난다.", 과거:"단맛이 났다.", 미래:"단맛이 날 것이다." }, s_kor: "디저트가", b_en: "after dinner", b_kor: "저녁 식사 후에", c_en: ["to everyone", "for sure"], c_kor: ["모두에게", "확실히"] },
    { vBase: "taste", s: "The lemon", p: "부정", c: "sweet", kor: { 현재:"단맛이 나지 않는다.", 과거:"단맛이 나지 않았다.", 미래:"단맛이 나지 않을 것이다." }, s_kor: "레몬이", b_en: "to anyone", b_kor: "누구에게도", c_en: ["in reality", "at all"], c_kor: ["실제로는", "전혀"] },
    { vBase: "taste", s: "The water", p: "의문", c: "clean", kor: { 현재:"깨끗한 맛이 나니?", 과거:"깨끗한 맛이 났니?", 미래:"깨끗한 맛이 날까?" }, s_kor: "물이", b_en: "from the spring", b_kor: "샘물에서 떠서", c_en: ["to us", "without a filter"], c_kor: ["우리에게", "필터 없이"] },
    { vBase: "taste", s: "The stew", p: "긍정", c: "rich", kor: { 현재:"풍부한 맛이 난다.", 과거:"풍부한 맛이 났다.", 미래:"풍부한 맛이 날 것이다." }, s_kor: "스튜가", b_en: "in winter", b_kor: "겨울에", c_en: ["to me", "for sure"], c_kor: ["나에게", "확실히"] },
    { vBase: "taste", s: "The pie", p: "부정", c: "burnt", kor: { 현재:"탄 맛이 나지 않는다.", 과거:"탄 맛이 나지 않았다.", 미래:"탄 맛이 나지 않을 것이다." }, s_kor: "파이가", b_en: "from the oven", b_kor: "오븐에서 꺼내도", c_en: ["to us", "at all"], c_kor: ["우리에게", "전혀"] },
    { vBase: "taste", s: "The drink", p: "의문", c: "sour", kor: { 현재:"신맛이 나니?", 과거:"신맛이 났니?", 미래:"신맛이 날까?" }, s_kor: "음료수가", b_en: "with lemon", b_kor: "레몬을 넣으니", c_en: ["to you", "in general"], c_kor: ["너에게", "일반적으로"] },
    { vBase: "taste", s: "The cookies", p: "긍정", c: "salty", kor: { 현재:"짠맛이 난다.", 과거:"짠맛이 났다.", 미래:"짠맛이 날 것이다." }, s_kor: "쿠키들은", b_en: "in the bakery", b_kor: "빵집에서", c_en: ["to me", "without enough sugar"], c_kor: ["나에게", "설탕이 부족해서"] },
    { vBase: "taste", s: "The apples", p: "부정", c: "sour", kor: { 현재:"신맛이 나지 않는다.", 과거:"신맛이 나지 않았다.", 미래:"신맛이 나지 않을 것이다." }, s_kor: "사과들은", b_en: "on the tree", b_kor: "나무에서", c_en: ["to us", "during the harvest season"], c_kor: ["우리에게", "수확 시기 동안에는"] },
    { vBase: "taste", s: "The drinks", p: "의문", c: "sweet", kor: { 현재:"단맛이 나니?", 과거:"단맛이 났니?", 미래:"단맛이 날까?" }, s_kor: "음료수들은", b_en: "at the party", b_kor: "파티에서", c_en: ["to everyone", "with fresh honey"], c_kor: ["모두에게", "신선한 꿀 덕분에"] }
  ];
        return processRawRows2(subjPlurals, TENSES, rawRows);
      })(),
      advanced: null,
      master:   null,
    },
get: {
      standard: (() => {
        const subjPlurals = ["The children", "The players", "The days", "The clothes"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "get", s: "The weather", p: "긍정", c: "cold", kor: { 현재:"추워진다.", 과거:"추워졌다.", 미래:"추워질 것이다." }, s_kor: "날씨가", b_en: "in winter", b_kor: "겨울에", c_en: ["without a doubt", "every year"], c_kor: ["의심의 여지 없이", "매년"] },
    { vBase: "get", s: "The children", p: "부정", c: "bored", kor: { 현재:"지루해하지 않는다.", 과거:"지루해하지 않았다.", 미래:"지루해하지 않을 것이다." }, s_kor: "아이들이", b_en: "in class", b_kor: "수업 중에", c_en: ["without the teacher", "in general"], c_kor: ["선생님 없이", "일반적으로"] },
    { vBase: "get", s: "You", p: "의문", c: "tired", kor: { 현재:"피곤해지니?", 과거:"피곤해졌니?", 미래:"피곤해질까?" }, s_kor: "너는", b_en: "after work", b_kor: "퇴근 후에", c_en: ["without a break", "every day"], c_kor: ["쉬지 않고", "매일"] },
    { vBase: "get", s: "The room", p: "긍정", c: "dark", kor: { 현재:"어두워진다.", 과거:"어두워졌다.", 미래:"어두워질 것이다." }, s_kor: "방이", b_en: "at night", b_kor: "밤에", c_en: ["without lights", "in no time"], c_kor: ["불빛 없이", "순식간에"] },
    { vBase: "get", s: "The situation", p: "부정", c: "better", kor: { 현재:"나아지지 않는다.", 과거:"나아지지 않았다.", 미래:"나아지지 않을 것이다." }, s_kor: "상황이", b_en: "in this town", b_kor: "이 마을에서는", c_en: ["without help", "at all"], c_kor: ["도움 없이는", "전혀"] },
    { vBase: "get", s: "The game", p: "의문", c: "exciting", kor: { 현재:"흥미진진해지니?", 과거:"흥미진진해졌니?", 미래:"흥미진진해질까?" }, s_kor: "게임이", b_en: "in the second half", b_kor: "후반전에", c_en: ["to the fans", "in general"], c_kor: ["팬들에게", "일반적으로"] },
    { vBase: "get", s: "I", p: "긍정", c: "hungry", kor: { 현재:"배가 고파진다.", 과거:"배가 고파졌다.", 미래:"배가 고파질 것이다." }, s_kor: "나는", b_en: "before lunch", b_kor: "점심시간 전에", c_en: ["in the office", "every day"], c_kor: ["사무실에서", "매일"] },
    { vBase: "get", s: "The test", p: "부정", c: "easy", kor: { 현재:"쉬워지지 않는다.", 과거:"쉬워지지 않았다.", 미래:"쉬워지지 않을 것이다." }, s_kor: "시험이", b_en: "for the students", b_kor: "학생들에게", c_en: ["without studying", "in reality"], c_kor: ["공부하지 않으면", "실제로는"] },
    { vBase: "get", s: "The crowd", p: "의문", c: "loud", kor: { 현재:"시끄러워지니?", 과거:"시끄러워졌니?", 미래:"시끄러워질까?" }, s_kor: "군중이", b_en: "at the concert", b_kor: "콘서트에서", c_en: ["with excitement", "during the performance"], c_kor: ["흥분하여", "공연 동안"] },
    { vBase: "get", s: "The players", p: "긍정", c: "ready", kor: { 현재:"준비가 된다.", 과거:"준비가 되었다.", 미래:"준비가 될 것이다." }, s_kor: "선수들이", b_en: "in the locker room", b_kor: "라커룸에서", c_en: ["before the match", "in the end"], c_kor: ["경기 전에", "결국에"] },
    { vBase: "get", s: "The problem", p: "부정", c: "worse", kor: { 현재:"악화되지 않는다.", 과거:"악화되지 않았다.", 미래:"악화되지 않을 것이다." }, s_kor: "문제가", b_en: "with help", b_kor: "도움 덕분에", c_en: ["in this case", "at all"], c_kor: ["이 경우에는", "전혀"] },
    { vBase: "get", s: "The days", p: "의문", c: "short", kor: { 현재:"짧아지니?", 과거:"짧아졌니?", 미래:"짧아질까?" }, s_kor: "낮이", b_en: "in winter", b_kor: "겨울에", c_en: ["in this country", "every year"], c_kor: ["이 나라에서는", "매년"] },
    { vBase: "get", s: "The tea", p: "긍정", c: "cold", kor: { 현재:"식어버린다.", 과거:"식어버렸다.", 미래:"식어버릴 것이다." }, s_kor: "차가", b_en: "on the table", b_kor: "테이블 위에서", c_en: ["without a lid", "in a short time"], c_kor: ["뚜껑 없이", "단숨에"] },
    { vBase: "get", s: "The movie", p: "부정", c: "interesting", kor: { 현재:"재미있어지지 않는다.", 과거:"재미있어지지 않았다.", 미래:"재미있어지지 않을 것이다." }, s_kor: "영화가", b_en: "in the middle", b_kor: "중반부에도", c_en: ["to the audience", "at all"], c_kor: ["관객들에게", "전혀"] },
    { vBase: "get", s: "He", p: "의문", c: "angry", kor: { 현재:"화를 내니?", 과거:"화를 냈니?", 미래:"화를 낼까?" }, s_kor: "그가", b_en: "about the mistake", b_kor: "그 실수에 대해", c_en: ["in the office", "for sure"], c_kor: ["사무실에서", "확실히"] },
    { vBase: "get", s: "The water", p: "긍정", c: "warm", kor: { 현재:"따뜻해진다.", 과거:"따뜻해졌다.", 미래:"따뜻해질 것이다." }, s_kor: "물이", b_en: "in the sun", b_kor: "햇볕 아래에서", c_en: ["in the afternoon", "for sure"], c_kor: ["오후에", "확실히"] },
    { vBase: "get", s: "The job", p: "부정", c: "hard", kor: { 현재:"어려워지지 않는다.", 과거:"어려워지지 않았다.", 미래:"어려워지지 않을 것이다." }, s_kor: "그 일이", b_en: "with practice", b_kor: "연습하면", c_en: ["to the workers", "for any reason"], c_kor: ["근로자들에게", "어떤 이유에서든"] },
    { vBase: "get", s: "The dog", p: "의문", c: "dirty", kor: { 현재:"더러워지니?", 과거:"더러워졌니?", 미래:"더러워질까?" }, s_kor: "개가", b_en: "in the park", b_kor: "공원에서", c_en: ["after raining", "easily"], c_kor: ["비 온 뒤에", "쉽게"] },
    { vBase: "get", s: "The soup", p: "긍정", c: "thick", kor: { 현재:"걸쭉해진다.", 과거:"걸쭉해졌다.", 미래:"걸쭉해질 것이다." }, s_kor: "수프가", b_en: "on the stove", b_kor: "가스레인지 위에서", c_en: ["with low heat", "in the end"], c_kor: ["약한 불로", "결국에"] },
    { vBase: "get", s: "The clothes", p: "부정", c: "dry", kor: { 현재:"마르지 않는다.", 과거:"마르지 않았다.", 미래:"마르지 않을 것이다." }, s_kor: "옷이", b_en: "in this weather", b_kor: "이 날씨에는", c_en: ["on the balcony", "at all"], c_kor: ["발코니에서", "전혀"] },
    { vBase: "get", s: "The house", p: "의문", c: "messy", kor: { 현재:"지저분해지니?", 과거:"지저분해졌니?", 미래:"지저분해질까?" }, s_kor: "집이", b_en: "with the kids", b_kor: "아이들이 있으면", c_en: ["during the weekend", "easily"], c_kor: ["주말 동안", "쉽게"] },
    { vBase: "get", s: "She", p: "긍정", c: "nervous", kor: { 현재:"긴장한다.", 과거:"긴장했다.", 미래:"긴장할 것이다." }, s_kor: "그녀는", b_en: "before the test", b_kor: "시험 전에", c_en: ["in the classroom", "usually"], c_kor: ["교실에서", "보통"] },
    { vBase: "get", s: "The phone", p: "부정", c: "hot", kor: { 현재:"뜨거워지지 않는다.", 과거:"뜨거워지지 않았다.", 미래:"뜨거워지지 않을 것이다." }, s_kor: "전화기가", b_en: "during the call", b_kor: "통화 중에", c_en: ["in the summer", "usually"], c_kor: ["여름에", "보통"] },
    { vBase: "get", s: "The sky", p: "의문", c: "clear", kor: { 현재:"맑아지니?", 과거:"맑아졌니?", 미래:"맑아질까?" }, s_kor: "하늘이", b_en: "after the rain", b_kor: "비 온 뒤에", c_en: ["in the afternoon", "for sure"], c_kor: ["오후에", "확실히"] },
    { vBase: "get", s: "The story", p: "긍정", c: "complicated", kor: { 현재:"복잡해진다.", 과거:"복잡해졌다.", 미래:"복잡해질 것이다." }, s_kor: "이야기가", b_en: "at the end", b_kor: "결말에 가서", c_en: ["to the readers", "for sure"], c_kor: ["독자들에게", "확실히"] },
    { vBase: "get", s: "The plan", p: "부정", c: "confusing", kor: { 현재:"혼란스러워지지 않는다.", 과거:"혼란스러워지지 않았다.", 미래:"혼란스러워지지 않을 것이다." }, s_kor: "계획이", b_en: "with the guide", b_kor: "가이드와 함께라면", c_en: ["in this situation", "at all"], c_kor: ["이 상황에서는", "전혀"] },
    { vBase: "get", s: "The price", p: "의문", c: "high", kor: { 현재:"높아지니?", 과거:"높아졌니?", 미래:"높아질까?" }, s_kor: "가격이", b_en: "in summer", b_kor: "여름에", c_en: ["at the market", "every year"], c_kor: ["시장에서", "매년"] },
    { vBase: "get", s: "The actors", p: "긍정", c: "ready", kor: { 현재:"준비가 된다.", 과거:"준비가 되었다.", 미래:"준비가 될 것이다." }, s_kor: "배우들은", b_en: "backstage", b_kor: "무대 뒤에서", c_en: ["with the crew", "before the show"], c_kor: ["스태프와 함께", "공연 전에"] },
    { vBase: "get", s: "The children", p: "부정", c: "bored", kor: { 현재:"지루해하지 않는다.", 과거:"지루해하지 않았다.", 미래:"지루해하지 않을 것이다." }, s_kor: "아이들은", b_en: "at the school", b_kor: "학교에서", c_en: ["with their friends", "during the festival"], c_kor: ["친구들과 함께", "축제 동안에는"] },
    { vBase: "get", s: "The days", p: "의문", c: "short", kor: { 현재:"짧아지니?", 과거:"짧아졌니?", 미래:"짧아질까?" }, s_kor: "낮은", b_en: "in the north", b_kor: "북부 지방에서", c_en: ["without a doubt", "during December"], c_kor: ["의심의 여지 없이", "12월 동안"] }
  ];
        return processRawRows2(subjPlurals, TENSES, rawRows);
      })(),
      advanced: null,
      master:   null,
    },
turn: {
      standard: (() => {
        const subjPlurals = ["The leaves", "The apples"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "turn", s: "The leaves", p: "긍정", c: "red", kor: { 현재:"붉게 변한다.", 과거:"붉게 변했다.", 미래:"붉게 변할 것이다." }, s_kor: "나뭇잎들이", b_en: "in fall", b_kor: "가을에", c_en: ["all over the mountain", "beautifully"], c_kor: ["산 전체에", "아름답게"] },
    { vBase: "turn", s: "His face", p: "부정", c: "pale", kor: { 현재:"창백해지지 않는다.", 과거:"창백해지지 않았다.", 미래:"창백해지지 않을 것이다." }, s_kor: "그의 얼굴이", b_en: "in the dark", b_kor: "어둠 속에서", c_en: ["without a light", "easily"], c_kor: ["빛 없이", "쉽게"] },
    { vBase: "turn", s: "The sky", p: "의문", c: "dark", kor: { 현재:"어두워지니?", 과거:"어두워졌니?", 미래:"어두워질까?" }, s_kor: "하늘이", b_en: "at night", b_kor: "밤에", c_en: ["in the winter", "completely"], c_kor: ["겨울에", "완전히"] },
    { vBase: "turn", s: "The milk", p: "긍정", c: "sour", kor: { 현재:"상해버린다.", 과거:"상해버렸다.", 미래:"상해버릴 것이다." }, s_kor: "우유가", b_en: "in the sun", b_kor: "햇볕 아래에서", c_en: ["without a cap", "quickly"], c_kor: ["뚜껑 없이", "빠르게"] },
    { vBase: "turn", s: "The traffic light", p: "부정", c: "green", kor: { 현재:"초록색으로 바뀌지 않는다.", 과거:"초록색으로 바뀌지 않았다.", 미래:"초록색으로 바뀌지 않을 것이다." }, s_kor: "신호등이", b_en: "for a long time", b_kor: "오랫동안", c_en: ["at this intersection", "due to the error"], c_kor: ["이 교차로에서", "오류 때문에"] },
    { vBase: "turn", s: "The weather", p: "의문", c: "cold", kor: { 현재:"추워지니?", 과거:"추워졌니?", 미래:"추워질까?" }, s_kor: "날씨가", b_en: "in November", b_kor: "11월에", c_en: ["in this region", "without fail"], c_kor: ["이 지역에서는", "어김없이"] },
    { vBase: "turn", s: "The conversation", p: "긍정", c: "serious", kor: { 현재:"심각해진다.", 과거:"심각해졌다.", 미래:"심각해질 것이다." }, s_kor: "대화가", b_en: "after dinner", b_kor: "저녁 식사 후에", c_en: ["in the living room", "without a smile"], c_kor: ["거실에서", "웃음기 없이"] },
    { vBase: "turn", s: "The water", p: "부정", c: "brown", kor: { 현재:"갈색으로 변하지 않는다.", 과거:"갈색으로 변하지 않았다.", 미래:"갈색으로 변하지 않을 것이다." }, s_kor: "물이", b_en: "with the filter", b_kor: "필터를 쓰면", c_en: ["in the tank", "under normal conditions"], c_kor: ["물탱크 안에서", "정상적인 조건 하에서는"] },
    { vBase: "turn", s: "The situation", p: "의문", c: "bad", kor: { 현재:"나빠지니?", 과거:"나빠졌니?", 미래:"나빠질까?" }, s_kor: "상황이", b_en: "without help", b_kor: "도움이 없으면", c_en: ["in this area", "rapidly"], c_kor: ["이 구역에서", "급격하게"] },
    { vBase: "turn", s: "The project", p: "긍정", c: "impossible", kor: { 현재:"불가능해진다.", 과거:"불가능해졌다.", 미래:"불가능해질 것이다." }, s_kor: "프로젝트가", b_en: "without money", b_kor: "돈이 없으면", c_en: ["for our team", "in reality"], c_kor: ["우리 팀에게", "실제로는"] },
    { vBase: "turn", s: "The apples", p: "부정", c: "brown", kor: { 현재:"갈색으로 변하지 않는다.", 과거:"갈색으로 변하지 않았다.", 미래:"갈색으로 변하지 않을 것이다." }, s_kor: "사과들이", b_en: "in the fridge", b_kor: "냉장고에서는", c_en: ["in a sealed container", "easily"], c_kor: ["밀폐 용기 안에서", "쉽게"] },
    { vBase: "turn", s: "His hair", p: "의문", c: "gray", kor: { 현재:"희끗희끗해지니?", 과거:"희끗희끗해졌니?", 미래:"희끗희끗해질까?" }, s_kor: "그의 머리가", b_en: "with age", b_kor: "나이가 들면서", c_en: ["on the sides", "naturally"], c_kor: ["옆머리가", "자연스럽게"] },
    { vBase: "turn", s: "The dream", p: "긍정", c: "real", kor: { 현재:"현실이 된다.", 과거:"현실이 되었다.", 미래:"현실이 될 것이다." }, s_kor: "꿈이", b_en: "with hard work", b_kor: "열심히 노력하면", c_en: ["in our lives", "eventually"], c_kor: ["우리 삶에서", "결국에는"] },
    { vBase: "turn", s: "The joke", p: "부정", c: "funny", kor: { 현재:"재미있어지지 않는다.", 과거:"재미있어지지 않았다.", 미래:"재미있어지지 않을 것이다." }, s_kor: "농담이", b_en: "to everyone", b_kor: "모두에게", c_en: ["in the office", "without context"], c_kor: ["사무실에서", "문맥 없이는"] },
    { vBase: "turn", s: "The crowd", p: "의문", c: "violent", kor: { 현재:"폭력적으로 변하니?", 과거:"폭력적으로 변했니?", 미래:"폭력적으로 변할까?" }, s_kor: "군중이", b_en: "after the match", b_kor: "경기 후에", c_en: ["outside the stadium", "due to anger"], c_kor: ["경기장 밖에서", "분노 때문에"] },
    { vBase: "turn", s: "The weather", p: "긍정", c: "warm", kor: { 현재:"따뜻해진다.", 과거:"따뜻해졌다.", 미래:"따뜻해질 것이다." }, s_kor: "날씨가", b_en: "in spring", b_kor: "봄에", c_en: ["in the south", "without a doubt"], c_kor: ["남쪽 지방에서는", "의심의 여지 없이"] },
    { vBase: "turn", s: "The metal", p: "부정", c: "rusty", kor: { 현재:"녹슬지 않는다.", 과거:"녹슬지 않았다.", 미래:"녹슬지 않을 것이다." }, s_kor: "금속이", b_en: "with the coating", b_kor: "코팅을 하면", c_en: ["in the rain", "easily"], c_kor: ["빗속에서", "쉽게"] },
    { vBase: "turn", s: "The debate", p: "의문", c: "angry", kor: { 현재:"격렬해지니?", 과거:"격렬해졌니?", 미래:"격렬해질까?" }, s_kor: "토론이", b_en: "at the end", b_kor: "마지막에", c_en: ["in the hall", "without a moderator"], c_kor: ["홀 안에서", "사회자 없이"] },
    { vBase: "turn", s: "The paper", p: "긍정", c: "yellow", kor: { 현재:"누렇게 변한다.", 과거:"누렇게 변했다.", 미래:"누렇게 변할 것이다." }, s_kor: "종이가", b_en: "in the sun", b_kor: "햇볕에서", c_en: ["on the desk", "gradually"], c_kor: ["책상 위에서", "점차"] },
    { vBase: "turn", s: "The food", p: "부정", c: "bad", kor: { 현재:"상하지 않는다.", 과거:"상하지 않았다.", 미래:"상하지 않을 것이다." }, s_kor: "음식이", b_en: "in the freezer", b_kor: "냉동실에서는", c_en: ["for months", "under the right temperature"], c_kor: ["몇 달 동안", "적절한 온도 아래에서는"] },
    { vBase: "turn", s: "The story", p: "의문", c: "interesting", kor: { 현재:"흥미로워지니?", 과거:"흥미로워졌니?", 미래:"흥미로워질까?" }, s_kor: "이야기가", b_en: "in chapter two", b_kor: "2장에서", c_en: ["to the readers", "with a plot twist"], c_kor: ["독자들에게", "반전과 함께"] },
    { vBase: "turn", s: "The lake", p: "긍정", c: "solid", kor: { 현재:"단단하게 얼어붙는다.", 과거:"단단하게 얼어붙었다.", 미래:"단단하게 얼어붙을 것이다." }, s_kor: "호수가", b_en: "in winter", b_kor: "겨울에", c_en: ["in the mountain", "deeply"], c_kor: ["산속에서", "깊게"] },
    { vBase: "turn", s: "The mood", p: "부정", c: "happy", kor: { 현재:"행복해지지 않는다.", 과거:"행복해지지 않았다.", 미래:"행복해지지 않을 것이다." }, s_kor: "분위기가", b_en: "with that music", b_kor: "그 음악으로는", c_en: ["in the room", "despite the party"], c_kor: ["방 안에서", "파티에도 불구하고"] },
    { vBase: "turn", s: "The leaves", p: "의문", c: "brown", kor: { 현재:"갈색으로 변하니?", 과거:"갈색으로 변했니?", 미래:"갈색으로 변할까?" }, s_kor: "나뭇잎들이", b_en: "in late fall", b_kor: "늦가을에", c_en: ["on the ground", "naturally"], c_kor: ["땅 위에서", "자연스럽게"] },
    { vBase: "turn", s: "The sky", p: "긍정", c: "blue", kor: { 현재:"푸르게 변한다.", 과거:"푸르게 변했다.", 미래:"푸르게 변할 것이다." }, s_kor: "하늘이", b_en: "after the storm", b_kor: "폭풍우 후에", c_en: ["over the city", "clearly"], c_kor: ["도시 위로", "선명하게"] },
    { vBase: "turn", s: "The problem", p: "부정", c: "easy", kor: { 현재:"쉬워지지 않는다.", 과거:"쉬워지지 않았다.", 미래:"쉬워지지 않을 것이다." }, s_kor: "문제가", b_en: "with time", b_kor: "시간이 지나도", c_en: ["in this situation", "without effort"], c_kor: ["이 상황에서는", "노력 없이는"] },
    { vBase: "turn", s: "The conversation", p: "의문", c: "awkward", kor: { 현재:"어색해지니?", 과거:"어색해졌니?", 미래:"어색해질까?" }, s_kor: "대화가", b_en: "without her", b_kor: "그녀가 없으면", c_en: ["in the room", "due to silence"], c_kor: ["방 안에서", "침묵 때문에"] },
    { vBase: "turn", s: "The leaves", p: "긍정", c: "red", kor: { 현재:"붉게 변한다.", 과거:"붉게 변했다.", 미래:"붉게 변할 것이다." }, s_kor: "나뭇잎들은", b_en: "in the forest", b_kor: "숲속에서", c_en: ["all over the trees", "during the autumn"], c_kor: ["나무들 곳곳에서", "가을 동안"] },
    { vBase: "turn", s: "The apples", p: "부정", c: "brown", kor: { 현재:"갈색으로 변하지 않는다.", 과거:"갈색으로 변하지 않았다.", 미래:"갈색으로 변하지 않을 것이다." }, s_kor: "사과들은", b_en: "in the container", b_kor: "용기 안에서", c_en: ["in the fridge", "without air"], c_kor: ["냉장고 안에서", "공기가 없으면"] },
    { vBase: "turn", s: "The leaves", p: "의문", c: "brown", kor: { 현재:"갈색으로 변하니?", 과거:"갈색으로 변했니?", 미래:"갈색으로 변할까?" }, s_kor: "나뭇잎들은", b_en: "in the garden", b_kor: "정원에서", c_en: ["on the ground", "after a heavy frost"], c_kor: ["땅 위에서", "심한 서리가 내린 후에"] }
  ];
        return processRawRows2(subjPlurals, TENSES, rawRows);
      })(),
      advanced: null,
      master:   null,
    },
remain: {
      standard: (() => {
        const subjPlurals = ["The seats", "The doors", "The problems", "The rules", "The questions", "The books", "The letters"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "remain", s: "The truth", p: "긍정", c: "hidden", kor: { 현재:"숨겨진 상태로 남는다.", 과거:"숨겨진 상태로 남았다.", 미래:"숨겨진 상태로 남을 것이다." }, s_kor: "진실이", b_en: "in the book", b_kor: "책 속에", c_en: ["from the public", "for a long time"], c_kor: ["대중으로부터", "오랫동안"] },
    { vBase: "remain", s: "The building", p: "부정", c: "safe", kor: { 현재:"안전하게 남아있지 않다.", 과거:"안전하게 남아있지 않았다.", 미래:"안전하게 남아있지 않을 것이다." }, s_kor: "건물이", b_en: "after the storm", b_kor: "폭풍우 후에", c_en: ["for the residents", "despite the damage"], c_kor: ["주민들을 위해", "피해에도 불구하고"] },
    { vBase: "remain", s: "The seats", p: "의문", c: "empty", kor: { 현재:"비어 있니?", 과거:"비어 있었니?", 미래:"비어 있을까?" }, s_kor: "좌석들이", b_en: "in the front", b_kor: "앞쪽에", c_en: ["during the performance", "for some reason"], c_kor: ["공연 중에", "어떤 이유에서인지"] },
    { vBase: "remain", s: "The weather", p: "긍정", c: "cold", kor: { 현재:"추운 상태를 유지한다.", 과거:"추운 상태를 유지했다.", 미래:"추운 상태를 유지할 것이다." }, s_kor: "날씨가", b_en: "in the north", b_kor: "북부 지방에서는", c_en: ["during the winter", "continuously"], c_kor: ["겨울 동안", "계속해서"] },
    { vBase: "remain", s: "The problem", p: "부정", c: "unsolved", kor: { 현재:"미해결 상태로 남지 않는다.", 과거:"미해결 상태로 남지 않았다.", 미래:"미해결 상태로 남지 않을 것이다." }, s_kor: "문제가", b_en: "in our team", b_kor: "우리 팀에서", c_en: ["with our help", "for a long time"], c_kor: ["우리의 도움으로", "오랫동안"] },
    { vBase: "remain", s: "The door", p: "의문", c: "open", kor: { 현재:"열려 있니?", 과거:"열려 있었니?", 미래:"열려 있을까?" }, s_kor: "문이", b_en: "in the hallway", b_kor: "복도에서", c_en: ["at night", "for ventilation"], c_kor: ["밤에", "환기를 위해"] },
    { vBase: "remain", s: "The mystery", p: "긍정", c: "unsolved", kor: { 현재:"풀리지 않은 채 남는다.", 과거:"풀리지 않은 채 남았다.", 미래:"풀리지 않은 채 남을 것이다." }, s_kor: "미스터리가", b_en: "in this town", b_kor: "이 마을에서", c_en: ["for years", "without any clues"], c_kor: ["수년 동안", "아무런 단서 없이"] },
    { vBase: "remain", s: "The food", p: "부정", c: "fresh", kor: { 현재:"신선하게 유지되지 않는다.", 과거:"신선하게 유지되지 않았다.", 미래:"신선하게 유지되지 않을 것이다." }, s_kor: "음식이", b_en: "on the table", b_kor: "테이블 위에서는", c_en: ["without a cover", "in summer"], c_kor: ["덮개 없이", "여름에"] },
    { vBase: "remain", s: "The rules", p: "의문", c: "strict", kor: { 현재:"엄격하게 유지되니?", 과거:"엄격하게 유지되었니?", 미래:"엄격하게 유지될까?" }, s_kor: "규칙이", b_en: "in this school", b_kor: "이 학교에서", c_en: ["for the students", "during exams"], c_kor: ["학생들에게", "시험 동안"] },
    { vBase: "remain", s: "The shop", p: "긍정", c: "closed", kor: { 현재:"닫힌 상태로 남는다.", 과거:"닫힌 상태로 남았다.", 미래:"닫힌 상태로 남을 것이다." }, s_kor: "가게가", b_en: "in the town", b_kor: "이 마을에서는", c_en: ["on Sundays", "for maintenance"], c_kor: ["일요일에는", "보수를 위해"] },
    { vBase: "remain", s: "The machine", p: "부정", c: "broken", kor: { 현재:"고장 난 상태로 남지 않는다.", 과거:"고장 난 상태로 남지 않았다.", 미래:"고장 난 상태로 남지 않을 것이다." }, s_kor: "기계가", b_en: "in the factory", b_kor: "공장에서는", c_en: ["after repair", "for a long time"], c_kor: ["수리 후에", "오랫동안"] },
    { vBase: "remain", s: "The memory", p: "의문", c: "clear", kor: { 현재:"선명하게 남아있니?", 과거:"선명하게 남아있었니?", 미래:"선명하게 남아있을까?" }, s_kor: "기억이", b_en: "in your mind", b_kor: "네 마음속에", c_en: ["after all these years", "without fading"], c_kor: ["이렇게 오랜 세월이 지난 후에도", "흐려지지 않고"] },
    { vBase: "remain", s: "The task", p: "긍정", c: "unfinished", kor: { 현재:"미완성으로 남는다.", 과거:"미완성으로 남았다.", 미래:"미완성으로 남을 것이다." }, s_kor: "그 일이", b_en: "on the desk", b_kor: "책상 위에", c_en: ["without attention", "for a long time"], c_kor: ["관심 받지 못한 채", "오랫동안"] },
    { vBase: "remain", s: "The room", p: "부정", c: "dirty", kor: { 현재:"더럽게 남아있지 않는다.", 과거:"더럽게 남아있지 않았다.", 미래:"더럽게 남아있지 않을 것이다." }, s_kor: "방이", b_en: "in the hotel", b_kor: "호텔에서는", c_en: ["after cleaning", "for any reason"], c_kor: ["청소 후에", "어떤 이유에서든"] },
    { vBase: "remain", s: "The questions", p: "의문", c: "unanswered", kor: { 현재:"대답 없는 상태로 남아있니?", 과거:"대답 없는 상태로 남아있었니?", 미래:"대답 없는 상태로 남아있을까?" }, s_kor: "질문들이", b_en: "on the paper", b_kor: "종이 위에", c_en: ["during the test", "due to lack of time"], c_kor: ["시험 중에", "시간 부족 때문에"] },
    { vBase: "remain", s: "The secret", p: "긍정", c: "safe", kor: { 현재:"안전하게 남는다.", 과거:"안전하게 남았다.", 미래:"안전하게 남을 것이다." }, s_kor: "비밀이", b_en: "in my heart", b_kor: "내 마음속에", c_en: ["with me", "for a long time"], c_kor: ["나와 함께", "오랫동안"] },
    { vBase: "remain", s: "The price", p: "부정", c: "high", kor: { 현재:"높게 유지되지 않는다.", 과거:"높게 유지되지 않았다.", 미래:"높게 유지되지 않을 것이다." }, s_kor: "가격이", b_en: "in the market", b_kor: "시장에서는", c_en: ["during winter", "for a long time"], c_kor: ["겨울 동안", "오랫동안"] },
    { vBase: "remain", s: "The result", p: "의문", c: "unknown", kor: { 현재:"알려지지 않은 상태로 남아있니?", 과거:"알려지지 않은 상태로 남아있었니?", 미래:"알려지지 않은 상태로 남아있을까?" }, s_kor: "결과가", b_en: "in this case", b_kor: "이 경우에는", c_en: ["until the end", "without a doubt"], c_kor: ["마지막까지", "의심의 여지 없이"] },
    { vBase: "remain", s: "The forest", p: "긍정", c: "quiet", kor: { 현재:"조용한 상태로 남는다.", 과거:"조용한 상태로 남았다.", 미래:"조용한 상태로 남을 것이다." }, s_kor: "숲이", b_en: "in the mountain", b_kor: "산속에서는", c_en: ["at night", "without any noise"], c_kor: ["밤에", "아무런 소음 없이"] },
    { vBase: "remain", s: "The child", p: "부정", c: "awake", kor: { 현재:"깨어 있는 상태로 남지 않는다.", 과거:"깨어 있는 상태로 남지 않았다.", 미래:"깨어 있는 상태로 남지 않을 것이다." }, s_kor: "아이가", b_en: "in the bed", b_kor: "침대에서", c_en: ["after midnight", "without crying"], c_kor: ["자정 이후에", "울지 않고"] },
    { vBase: "remain", s: "The house", p: "의문", c: "empty", kor: { 현재:"비어 있니?", 과거:"비어 있었니?", 미래:"비어 있을까?" }, s_kor: "집이", b_en: "in the village", b_kor: "마을에서는", c_en: ["during winter", "without any visitors"], c_kor: ["겨울에", "방문객 없이"] },
    { vBase: "remain", s: "The box", p: "긍정", c: "unopened", kor: { 현재:"열리지 않은 채 남는다.", 과거:"열리지 않은 채 남았다.", 미래:"열리지 않은 채 남을 것이다." }, s_kor: "상자가", b_en: "in the corner", b_kor: "구석에", c_en: ["of the room", "for a long time"], c_kor: ["방의", "오랫동안"] },
    { vBase: "remain", s: "The bridge", p: "부정", c: "closed", kor: { 현재:"닫힌 채로 남아있지 않는다.", 과거:"닫힌 채로 남아있지 않았다.", 미래:"닫힌 채로 남아있지 않을 것이다." }, s_kor: "다리가", b_en: "over the river", b_kor: "강 위의", c_en: ["after the repair", "for a long time"], c_kor: ["수리 후에", "오랫동안"] },
    { vBase: "remain", s: "The books", p: "의문", c: "unread", kor: { 현재:"읽히지 않은 채 남아있니?", 과거:"읽히지 않은 채 남아있었니?", 미래:"읽히지 않은 채 남아있을까?" }, s_kor: "책들이", b_en: "on the shelf", b_kor: "선반 위에", c_en: ["in the library", "for many years"], c_kor: ["도서관의", "수년 동안"] },
    { vBase: "remain", s: "The village", p: "긍정", c: "peaceful", kor: { 현재:"평화롭게 남아있다.", 과거:"평화롭게 남아있었다.", 미래:"평화롭게 남아있을 것이다." }, s_kor: "마을이", b_en: "in the valley", b_kor: "계곡에서", c_en: ["during the winter", "without visitors"], c_kor: ["겨울 동안", "방문객 없이"] },
    { vBase: "remain", s: "The coffee", p: "부정", c: "hot", kor: { 현재:"뜨겁게 유지되지 않는다.", 과거:"뜨겁게 유지되지 않았다.", 미래:"뜨겁게 유지되지 않을 것이다." }, s_kor: "커피가", b_en: "in the cup", b_kor: "컵 안에서는", c_en: ["without a lid", "in winter"], c_kor: ["뚜껑 없이", "겨울에"] },
    { vBase: "remain", s: "The letters", p: "의문", c: "unsigned", kor: { 현재:"서명되지 않은 채 남아있니?", 과거:"서명되지 않은 채 남아있었니?", 미래:"서명되지 않은 채 남아있을까?" }, s_kor: "편지들이", b_en: "on the desk", b_kor: "책상 위에", c_en: ["in the office", "for a long time"], c_kor: ["사무실의", "오랫동안"] },
    { vBase: "remain", s: "The seats", p: "긍정", c: "empty", kor: { 현재:"비어 있다.", 과거:"비어 있었다.", 미래:"비어 있을 것이다." }, s_kor: "좌석들은", b_en: "in the front row", b_kor: "앞줄에", c_en: ["of the theater", "during the early show"], c_kor: ["극장의", "이른 공연 동안"] },
    { vBase: "remain", s: "The problems", p: "부정", c: "unsolved", kor: { 현재:"미해결 상태로 남지 않는다.", 과거:"미해결 상태로 남지 않았다.", 미래:"미해결 상태로 남지 않을 것이다." }, s_kor: "문제들은", b_en: "in our team", b_kor: "우리 팀에서", c_en: ["for a long time", "with a good leader"], c_kor: ["오랫동안", "좋은 리더 덕분에"] },
    { vBase: "remain", s: "The doors", p: "의문", c: "open", kor: { 현재:"열려 있니?", 과거:"열려 있었니?", 미래:"열려 있을까?" }, s_kor: "문들은", b_en: "at the bank", b_kor: "은행에서", c_en: ["for security reasons", "after business hours"], c_kor: ["보안상의 이유로", "영업 시간 후에"] }
  ];
        return processRawRows2(subjPlurals, TENSES, rawRows);
      })(),
      advanced: null,
      master:   null,
    },
stay: {
      standard: (() => {
        const subjPlurals = ["The children", "The stores", "The animals", "The prices", "The flowers"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
    { vBase: "stay", s: "The baby", p: "긍정", c: "awake", kor: { 현재:"깨어 있다.", 과거:"깨어 있었다.", 미래:"깨어 있을 것이다." }, s_kor: "아기가", b_en: "in the crib", b_kor: "침대 안에서", c_en: ["without crying", "during the night"], c_kor: ["울지 않고", "밤 동안"] },
    { vBase: "stay", s: "The room", p: "부정", c: "warm", kor: { 현재:"따뜻하게 유지되지 않는다.", 과거:"따뜻하게 유지되지 않았다.", 미래:"따뜻하게 유지되지 않을 것이다." }, s_kor: "방이", b_en: "in the house", b_kor: "집 안에서", c_en: ["during the winter", "without a heater"], c_kor: ["겨울 동안", "히터 없이"] },
    { vBase: "stay", s: "You", p: "의문", c: "healthy", kor: { 현재:"건강을 유지하니?", 과거:"건강을 유지했니?", 미래:"건강을 유지할까?" }, s_kor: "너는", b_en: "in the city", b_kor: "도시에서", c_en: ["despite the pollution", "in a natural way"], c_kor: ["공해에도 불구하고", "자연스럽게"] },
    { vBase: "stay", s: "The store", p: "긍정", c: "open", kor: { 현재:"열려 있다.", 과거:"열려 있었다.", 미래:"열려 있을 것이다." }, s_kor: "가게가", b_en: "on the corner", b_kor: "길모퉁이에서", c_en: ["until midnight", "every day"], c_kor: ["자정까지", "매일"] },
    { vBase: "stay", s: "The water", p: "부정", c: "clean", kor: { 현재:"깨끗하게 유지되지 않는다.", 과거:"깨끗하게 유지되지 않았다.", 미래:"깨끗하게 유지되지 않을 것이다." }, s_kor: "물이", b_en: "in the pool", b_kor: "수영장에서는", c_en: ["without a filter", "during the summer"], c_kor: ["필터 없이", "여름 동안"] },
    { vBase: "stay", s: "The children", p: "의문", c: "quiet", kor: { 현재:"조용히 있니?", 과거:"조용히 있었니?", 미래:"조용히 있을까?" }, s_kor: "아이들이", b_en: "in the library", b_kor: "도서관에서", c_en: ["with their books", "during the reading time"], c_kor: ["그들의 책과 함께", "독서 시간 동안"] },
    { vBase: "stay", s: "The weather", p: "긍정", c: "cool", kor: { 현재:"시원하게 유지된다.", 과거:"시원하게 유지되었다.", 미래:"시원하게 유지될 것이다." }, s_kor: "날씨가", b_en: "in the mountains", b_kor: "산속에서는", c_en: ["in the morning", "during summer"], c_kor: ["아침에", "여름 동안"] },
    { vBase: "stay", s: "The food", p: "부정", c: "fresh", kor: { 현재:"신선하게 유지되지 않는다.", 과거:"신선하게 유지되지 않았다.", 미래:"신선하게 유지되지 않을 것이다." }, s_kor: "음식이", b_en: "in the car", b_kor: "차 안에서는", c_en: ["without a cooler", "during long trips"], c_kor: ["쿨러 없이", "긴 여행 동안"] },
    { vBase: "stay", s: "The dog", p: "의문", c: "calm", kor: { 현재:"얌전히 있니?", 과거:"얌전히 있었니?", 미래:"얌전히 있을까?" }, s_kor: "개가", b_en: "in the house", b_kor: "집 안에서", c_en: ["with strangers", "during a storm"], c_kor: ["낯선 사람들과 있어도", "폭풍우 동안"] },
    { vBase: "stay", s: "She", p: "긍정", c: "focused", kor: { 현재:"집중을 유지한다.", 과거:"집중을 유지했다.", 미래:"집중을 유지할 것이다." }, s_kor: "그녀는", b_en: "in the classroom", b_kor: "교실에서", c_en: ["during the test", "without any distractions"], c_kor: ["시험 동안", "아무런 방해 없이"] },
    { vBase: "stay", s: "The milk", p: "부정", c: "good", kor: { 현재:"좋은 상태로 유지되지 않는다.", 과거:"좋은 상태로 유지되지 않았다.", 미래:"좋은 상태로 유지되지 않을 것이다." }, s_kor: "우유가", b_en: "on the table", b_kor: "테이블 위에서는", c_en: ["without a cap", "in warm weather"], c_kor: ["뚜껑 없이", "따뜻한 날씨에"] },
    { vBase: "stay", s: "The prices", p: "의문", c: "stable", kor: { 현재:"안정적으로 유지되니?", 과거:"안정적으로 유지되었니?", 미래:"안정적으로 유지될까?" }, s_kor: "물가가", b_en: "in the market", b_kor: "시장에서", c_en: ["during an economic crisis", "in general"], c_kor: ["경제 위기 동안", "일반적으로"] },
    { vBase: "stay", s: "He", p: "긍정", c: "positive", kor: { 현재:"긍정적인 상태를 유지한다.", 과거:"긍정적인 상태를 유지했다.", 미래:"긍정적인 상태를 유지할 것이다." }, s_kor: "그는", b_en: "in the office", b_kor: "사무실에서", c_en: ["during hard times", "without losing hope"], c_kor: ["힘든 시기 동안", "희망을 잃지 않고"] },
    { vBase: "stay", s: "The road", p: "부정", c: "safe", kor: { 현재:"안전하게 유지되지 않는다.", 과거:"안전하게 유지되지 않았다.", 미래:"안전하게 유지되지 않을 것이다." }, s_kor: "도로가", b_en: "in the mountains", b_kor: "산속에서는", c_en: ["during the winter", "without snow tires"], c_kor: ["겨울 동안", "스노타이어 없이"] },
    { vBase: "stay", s: "The door", p: "의문", c: "locked", kor: { 현재:"잠겨 있니?", 과거:"잠겨 있었니?", 미래:"잠겨 있을까?" }, s_kor: "문이", b_en: "in the hallway", b_kor: "복도에서", c_en: ["at night", "for security reasons"], c_kor: ["밤에", "보안상의 이유로"] },
    { vBase: "stay", s: "The lake", p: "긍정", c: "frozen", kor: { 현재:"얼어붙어 있다.", 과거:"얼어붙어 있었다.", 미래:"얼어붙어 있을 것이다." }, s_kor: "호수가", b_en: "in the valley", b_kor: "계곡에서", c_en: ["during January", "in the freezing cold"], c_kor: ["1월 동안", "몹시 추운 날씨에"] },
    { vBase: "stay", s: "The secret", p: "부정", c: "hidden", kor: { 현재:"숨겨진 채 유지되지 않는다.", 과거:"숨겨진 채 유지되지 않았다.", 미래:"숨겨진 채 유지되지 않을 것이다." }, s_kor: "비밀이", b_en: "in this town", b_kor: "이 마을에서는", c_en: ["with so many gossips", "for a long time"], c_kor: ["소문이 너무 많아서", "오랫동안"] },
    { vBase: "stay", s: "The animals", p: "의문", c: "warm", kor: { 현재:"따뜻하게 지내니?", 과거:"따뜻하게 지냈니?", 미래:"따뜻하게 지낼까?" }, s_kor: "동물들이", b_en: "in the barn", b_kor: "헛간에서", c_en: ["with thick blankets", "during winter"], c_kor: ["두꺼운 담요와 함께", "겨울에"] },
    { vBase: "stay", s: "The air", p: "긍정", c: "dry", kor: { 현재:"건조하게 유지된다.", 과거:"건조하게 유지되었다.", 미래:"건조하게 유지될 것이다." }, s_kor: "공기가", b_en: "in the desert", b_kor: "사막에서는", c_en: ["without rain", "throughout the year"], c_kor: ["비 없이", "일 년 내내"] },
    { vBase: "stay", s: "The engine", p: "부정", c: "cool", kor: { 현재:"시원하게 유지되지 않는다.", 과거:"시원하게 유지되지 않았다.", 미래:"시원하게 유지되지 않을 것이다." }, s_kor: "엔진이", b_en: "on the track", b_kor: "트랙 위에서는", c_en: ["during the race", "without a cooling system"], c_kor: ["경주 중에는", "냉각 시스템 없이"] },
    { vBase: "stay", s: "The team", p: "의문", c: "strong", kor: { 현재:"강하게 유지되니?", 과거:"강하게 유지되었니?", 미래:"강하게 유지될까?" }, s_kor: "팀이", b_en: "in the league", b_kor: "리그에서", c_en: ["without their captain", "in general"], c_kor: ["주장 없이", "일반적으로"] },
    { vBase: "stay", s: "The building", p: "긍정", c: "empty", kor: { 현재:"비어 있다.", 과거:"비어 있었다.", 미래:"비어 있을 것이다." }, s_kor: "건물이", b_en: "in the business district", b_kor: "상업 지구에서는", c_en: ["on weekends", "without any workers"], c_kor: ["주말에는", "아무런 근로자 없이"] },
    { vBase: "stay", s: "The flowers", p: "부정", c: "beautiful", kor: { 현재:"아름답게 유지되지 않는다.", 과거:"아름답게 유지되지 않았다.", 미래:"아름답게 유지되지 않을 것이다." }, s_kor: "꽃들이", b_en: "in the vase", b_kor: "꽃병 안에서는", c_en: ["without water", "for a long time"], c_kor: ["물 없이", "오랫동안"] },
    { vBase: "stay", s: "The market", p: "의문", c: "busy", kor: { 현재:"붐비니?", 과거:"붐볐니?", 미래:"붐빌까?" }, s_kor: "시장이", b_en: "in the town center", b_kor: "도심에서는", c_en: ["in the morning", "during weekends"], c_kor: ["아침에", "주말 동안"] },
    { vBase: "stay", s: "The bridge", p: "긍정", c: "strong", kor: { 현재:"튼튼하게 유지된다.", 과거:"튼튼하게 유지되었다.", 미래:"튼튼하게 유지될 것이다." }, s_kor: "다리가", b_en: "over the river", b_kor: "강 위에서", c_en: ["in the strong wind", "with sturdy pillars"], c_kor: ["강한 바람 속에서도", "튼튼한 기둥 덕분에"] },
    { vBase: "stay", s: "The fire", p: "부정", c: "alive", kor: { 현재:"살아있지(타오르지) 않는다.", 과거:"살아있지(타오르지) 않았다.", 미래:"살아있지(타오르지) 않을 것이다." }, s_kor: "불이", b_en: "in the camp", b_kor: "캠프에서는", c_en: ["during the heavy rain", "without dry wood"], c_kor: ["폭우가 내리는 동안", "마른장작 없이"] },
    { vBase: "stay", s: "The problem", p: "의문", c: "simple", kor: { 현재:"간단하게 유지되니?", 과거:"간단하게 유지되었니?", 미래:"간단하게 유지될까?" }, s_kor: "문제가", b_en: "in this textbook", b_kor: "이 교과서에서는", c_en: ["for beginners", "without a hint"], c_kor: ["초보자들에게는", "힌트 없이"] },
    { vBase: "stay", s: "The audience", p: "긍정", c: "quiet", kor: { 현재:"조용히 있다.", 과거:"조용히 있었다.", 미래:"조용히 있을 것이다." }, s_kor: "관객들은", b_en: "in the theater", b_kor: "극장에서", c_en: ["out of respect", "during the play"], c_kor: ["예의를 갖추어", "연극 동안"] },
    { vBase: "stay", s: "The stores", p: "부정", c: "open", kor: { 현재:"열려 있지 않는다.", 과거:"열려 있지 않았다.", 미래:"열려 있지 않을 것이다." }, s_kor: "가게들은", b_en: "in this area", b_kor: "이 지역에서", c_en: ["for security reasons", "after midnight"], c_kor: ["보안상의 이유로", "자정 이후에는"] },
    { vBase: "stay", s: "The campers", p: "의문", c: "warm", kor: { 현재:"따뜻하게 지내니?", 과거:"따뜻하게 지냈니?", 미래:"따뜻하게 지낼까?" }, s_kor: "캠핑객들은", b_en: "in the tent", b_kor: "텐트 안에서", c_en: ["with a sleeping bag", "during the cold night"], c_kor: ["침낭과 함께", "추운 밤 동안"] }
  ];
        return processRawRows2(subjPlurals, TENSES, rawRows);
      })(),
      advanced: null,
      master:   null,
    },
  };
})();
