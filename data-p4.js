// WGT 4형식 데이터 — 원본 HTML에서 자동 추출
// VERB_DATA[4] 를 초기화한다.
(function() {
  if (!window.VERB_DATA) window.VERB_DATA = {};
  window.VERB_DATA[4] = {
    give: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The girls", "The students", "The workers"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
        { vBase: "give", s: "I", p: "긍정", io: "him", io_kor: "그에게", do: "a nice gift", do_kor: "멋진 선물을", kor: { 현재:"준다.", 과거:"주었다.", 미래:"줄 것이다." }, s_kor: "나는", b_en: "for his birthday", b_kor: "그의 생일을 위해", c_en: ["at the party"], c_kor: ["파티에서"] },
        { vBase: "give", s: "She", p: "부정", io: "me", io_kor: "나에게", do: "any money", do_kor: "어떤 돈도", kor: { 현재:"주지 않는다.", 과거:"주지 않았다.", 미래:"주지 않을 것이다." }, s_kor: "그녀는", b_en: "for the snack", b_kor: "간식을 위한", c_en: ["at school"], c_kor: ["학교에서"] },
        { vBase: "give", s: "He", p: "의문", io: "you", io_kor: "너에게", do: "useful advice", do_kor: "유용한 조언을", kor: { 현재:"주니?", 과거:"주었니?", 미래:"줄까?" }, s_kor: "그는", b_en: "about the test", b_kor: "시험에 대한", c_en: ["in the classroom"], c_kor: ["교실에서"] },
        { vBase: "give", s: "They", p: "긍정", io: "us", io_kor: "우리에게", do: "a warm welcome", do_kor: "따뜻한 환영을", kor: { 현재:"해준다.", 과거:"해주었다.", 미래:"해줄 것이다." }, s_kor: "그들은", b_en: "at the hotel", b_kor: "호텔에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "give", s: "We", p: "부정", io: "the dog", io_kor: "그 개에게", do: "chocolate", do_kor: "초콜릿을", kor: { 현재:"주지 않는다.", 과거:"주지 않았다.", 미래:"주지 않을 것이다." }, s_kor: "우리는", b_en: "after dinner", b_kor: "저녁 식사 후에", c_en: ["for its health"], c_kor: ["그것의 건강을 위해"] },
        { vBase: "give", s: "You", p: "의문", io: "her", io_kor: "그녀에게", do: "a second chance", do_kor: "두 번째 기회를", kor: { 현재:"주니?", 과거:"주었니?", 미래:"줄까?" }, s_kor: "너는", b_en: "for the project", b_kor: "프로젝트를 위한", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "give", s: "The boy", p: "긍정", io: "his mom", io_kor: "그의 엄마에게", do: "a beautiful flower", do_kor: "아름다운 꽃을", kor: { 현재:"준다.", 과거:"주었다.", 미래:"줄 것이다." }, s_kor: "그 소년은", b_en: "on her birthday", b_kor: "그녀의 생일에", c_en: ["with a smile"], c_kor: ["미소와 함께"] },
        { vBase: "give", s: "My dad", p: "부정", io: "me", io_kor: "나에게", do: "the car key", do_kor: "차 열쇠를", kor: { 현재:"주지 않으신다.", 과거:"주지 않으셨다.", 미래:"주지 않으실 것이다." }, s_kor: "나의 아빠는", b_en: "for the trip", b_kor: "여행을 위해", c_en: ["tonight"], c_kor: ["오늘 밤에"] },
        { vBase: "give", s: "I", p: "의문", io: "them", io_kor: "그들에게", do: "enough time", do_kor: "충분한 시간을", kor: { 현재:"주니?", 과거:"주었니?", 미래:"줄까?" }, s_kor: "내가", b_en: "for the exam", b_kor: "시험을 위해", c_en: ["in the morning"], c_kor: ["아침에"] },
        { vBase: "give", s: "I", p: "긍정", io: "my sister", io_kor: "내 여동생에게", do: "a big hug", do_kor: "큰 포옹을", kor: { 현재:"해준다.", 과거:"해주었다.", 미래:"해줄 것이다." }, s_kor: "나는", b_en: "in the morning", b_kor: "아침에", c_en: ["before school"], c_kor: ["학교 가기 전에"] },
        { vBase: "give", s: "She", p: "부정", io: "the homeless man", io_kor: "노숙자에게", do: "any food", do_kor: "어떤 음식도", kor: { 현재:"주지 않는다.", 과거:"주지 않았다.", 미래:"주지 않을 것이다." }, s_kor: "그녀는", b_en: "on the street", b_kor: "길거리에서", c_en: ["sadly"], c_kor: ["슬프게도"] },
        { vBase: "give", s: "He", p: "의문", io: "his friend", io_kor: "그의 친구에게", do: "a secret code", do_kor: "비밀 암호를", kor: { 현재:"주니?", 과거:"주었니?", 미래:"줄까?" }, s_kor: "그는", b_en: "for the game", b_kor: "게임을 위한", c_en: ["quietly"], c_kor: ["조용히"] },
        { vBase: "give", s: "They", p: "긍정", io: "the winner", io_kor: "우승자에게", do: "a gold medal", do_kor: "금메달을", kor: { 현재:"준다.", 과거:"주었다.", 미래:"줄 것이다." }, s_kor: "그들은", b_en: "on the stage", b_kor: "무대 위에서", c_en: ["proudly"], c_kor: ["자랑스럽게"] },
        { vBase: "give", s: "We", p: "부정", io: "the stranger", io_kor: "낯선 사람에게", do: "our address", do_kor: "우리의 주소를", kor: { 현재:"주지 않는다.", 과거:"주지 않았다.", 미래:"주지 않을 것이다." }, s_kor: "우리는", b_en: "for security", b_kor: "보안을 위해", c_en: ["in this town"], c_kor: ["이 마을에서"] },
        { vBase: "give", s: "You", p: "의문", io: "the teacher", io_kor: "선생님에게", do: "your homework", do_kor: "너의 숙제를", kor: { 현재:"주니?", 과거:"주었니?", 미래:"줄까?" }, s_kor: "너는", b_en: "before the class", b_kor: "수업 전에", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "give", s: "The girls", p: "긍정", io: "their team", io_kor: "그들의 팀에게", do: "a loud cheer", do_kor: "큰 응원을", kor: { 현재:"보낸다.", 과거:"보냈다.", 미래:"보낼 것이다." }, s_kor: "소녀들은", b_en: "at the stadium", b_kor: "경기장에서", c_en: ["enthusiastically"], c_kor: ["열정적으로"] },
        { vBase: "give", s: "The students", p: "부정", io: "the speaker", io_kor: "발표자에게", do: "full attention", do_kor: "완전한 주의를", kor: { 현재:"주지 않는다.", 과거:"주지 않았다.", 미래:"주지 않을 것이다." }, s_kor: "그 학생들은", b_en: "during the lecture", b_kor: "강의 동안", c_en: ["unfortunately"], c_kor: ["불행하게도"] },
        { vBase: "give", s: "My mom", p: "의문", io: "the baby", io_kor: "아기에게", do: "a warm bath", do_kor: "따뜻한 목욕을", kor: { 현재:"해주시니?", 과거:"해주셨니?", 미래:"해주실까?" }, s_kor: "나의 엄마는", b_en: "in the evening", b_kor: "저녁에", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "give", s: "I", p: "긍정", io: "the plants", io_kor: "식물들에게", do: "some water", do_kor: "약간의 물을", kor: { 현재:"준다.", 과거:"주었다.", 미래:"줄 것이다." }, s_kor: "나는", b_en: "every morning", b_kor: "매일 아침", c_en: ["in the garden"], c_kor: ["정원에서"] },
        { vBase: "give", s: "She", p: "부정", io: "him", io_kor: "그에게", do: "a direct answer", do_kor: "직접적인 대답을", kor: { 현재:"주지 않는다.", 과거:"주지 않았다.", 미래:"주지 않을 것이다." }, s_kor: "그녀는", b_en: "to his question", b_kor: "그의 질문에 대한", c_en: ["right away"], c_kor: ["당장"] },
        { vBase: "give", s: "He", p: "의문", io: "the audience", io_kor: "관객에게", do: "a great show", do_kor: "훌륭한 쇼를", kor: { 현재:"선사하니?", 과거:"선사했니?", 미래:"선사할까?" }, s_kor: "그는", b_en: "on the stage", b_kor: "무대 위에서", c_en: ["tonight"], c_kor: ["오늘 밤에"] },
        { vBase: "give", s: "They", p: "긍정", io: "the charity", io_kor: "자선단체에", do: "a large donation", do_kor: "큰 기부금을", kor: { 현재:"준다.", 과거:"주었다.", 미래:"줄 것이다." }, s_kor: "그들은", b_en: "for the poor", b_kor: "가난한 사람들을 위해", c_en: [ADV.TY_EN], c_kor: [ADV.TY_KR] },
        { vBase: "give", s: "We", p: "부정", io: "the kids", io_kor: "아이들에게", do: "too much sugar", do_kor: "너무 많은 설탕을", kor: { 현재:"주지 않는다.", 과거:"주지 않았다.", 미래:"주지 않을 것이다." }, s_kor: "우리는", b_en: "for their health", b_kor: "그들의 건강을 위해", c_en: ["most of the time"], c_kor: ["보통은"] },
        { vBase: "give", s: "You", p: "의문", io: "your parents", io_kor: "너의 부모님에게", do: "a quick call", do_kor: "짧은 전화를", kor: { 현재:"해주니?", 과거:"해주었니?", 미래:"해줄까?" }, s_kor: "너는", b_en: "after school", b_kor: "방과 후에", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "give", s: "The workers", p: "긍정", io: "the boss", io_kor: "사장님에게", do: "a daily report", do_kor: "일일 보고서를", kor: { 현재:"준다.", 과거:"주었다.", 미래:"줄 것이다." }, s_kor: "노동자들은", b_en: "in the office", b_kor: "사무실에서", c_en: ["before leaving"], c_kor: ["퇴근 전에"] },
        { vBase: "give", s: "The company", p: "부정", io: "the employees", io_kor: "직원들에게", do: "a big bonus", do_kor: "큰 보너스를", kor: { 현재:"주지 않는다.", 과거:"주지 않았다.", 미래:"주지 않을 것이다." }, s_kor: "그 회사는", b_en: "this year", b_kor: "올해에는", c_en: ["due to the crisis"], c_kor: ["위기 때문에"] },
        { vBase: "give", s: "I", p: "의문", io: "the project", io_kor: "프로젝트에", do: "my best effort", do_kor: "나의 최선의 노력을", kor: { 현재:"쏟니?", 과거:"쏟았니?", 미래:"쏟을까?" }, s_kor: "내가", b_en: "for success", b_kor: "성공을 위해", c_en: ["all the time"], c_kor: ["항상"] }
    ];
        return processRawRows4(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    send: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The girls", "The workers"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
        { vBase: "send", s: "I", p: "긍정", io: "you", io_kor: "너에게", do: "a text message", do_kor: "문자 메시지를", kor: { 현재:"보낸다.", 과거:"보냈다.", 미래:"보낼 것이다." }, s_kor: "나는", b_en: "about the meeting", b_kor: "회의에 대한", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "send", s: "She", p: "부정", io: "him", io_kor: "그에게", do: "an email", do_kor: "이메일을", kor: { 현재:"보내지 않는다.", 과거:"보내지 않았다.", 미래:"보내지 않을 것이다." }, s_kor: "그녀는", b_en: "from her office", b_kor: "그녀의 사무실에서", c_en: ["due to a bug"], c_kor: ["버그 때문에"] },
        { vBase: "send", s: "He", p: "의문", io: "us", io_kor: "우리에게", do: "a post card", do_kor: "엽서를", kor: { 현재:"보내니?", 과거:"보냈니?", 미래:"보낼까?" }, s_kor: "그는", b_en: "from his trip", b_kor: "그의 여행지에서", c_en: ["every year"], c_kor: ["매년"] },
        { vBase: "send", s: "They", p: "긍정", io: "the clients", io_kor: "고객들에게", do: "free samples", do_kor: "무료 샘플들을", kor: { 현재:"보낸다.", 과거:"보냈다.", 미래:"보낼 것이다." }, s_kor: "그들은", b_en: "by mail", b_kor: "우편으로", c_en: ["for promotion"], c_kor: ["홍보를 위해"] },
        { vBase: "send", s: "We", p: "부정", io: "her", io_kor: "그녀에게", do: "the final report", do_kor: "최종 보고서를", kor: { 현재:"보내지 않는다.", 과거:"보내지 않았다.", 미래:"보내지 않을 것이다." }, s_kor: "우리는", b_en: "without a review", b_kor: "검토 없이", c_en: ["in this office"], c_kor: ["이 사무실에서"] },
        { vBase: "send", s: "You", p: "의문", io: "me", io_kor: "나에게", do: "some pictures", do_kor: "몇 장의 사진들을", kor: { 현재:"보내니?", 과거:"보냈니?", 미래:"보낼까?" }, s_kor: "너는", b_en: "from the party", b_kor: "파티에서 찍은", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "send", s: "The boy", p: "긍정", io: "his friend", io_kor: "그의 친구에게", do: "a funny video", do_kor: "재미있는 비디오를", kor: { 현재:"보낸다.", 과거:"보냈다.", 미래:"보낼 것이다." }, s_kor: "그 소년은", b_en: "on his phone", b_kor: "그의 휴대폰으로", c_en: ["during the break"], c_kor: ["쉬는 시간에"] },
        { vBase: "send", s: "My mom", p: "부정", io: "my brother", io_kor: "내 남동생에게", do: "extra money", do_kor: "추가 용돈을", kor: { 현재:"보내지 않으신다.", 과거:"보내지 않으셨다.", 미래:"보내지 않으실 것이다." }, s_kor: "나의 엄마는", b_en: "this month", b_kor: "이번 달에는", c_en: ["for a reason"], c_kor: ["이유가 있어서"] },
        { vBase: "send", s: "I", p: "의문", io: "them", io_kor: "그들에게", do: "an invitation", do_kor: "초대장을", kor: { 현재:"보내니?", 과거:"보냈니?", 미래:"보낼까?" }, s_kor: "내가", b_en: "for the wedding", b_kor: "결혼식을 위한", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "send", s: "I", p: "긍정", io: "my grandmother", io_kor: "할머니에게", do: "a warm letter", do_kor: "따뜻한 편지를", kor: { 현재:"보낸다.", 과거:"보냈다.", 미래:"보낼 것이다." }, s_kor: "나는", b_en: "for the holiday", b_kor: "명절을 위해", c_en: ["by mail"], c_kor: ["우편으로"] },
        { vBase: "send", s: "She", p: "부정", io: "the company", io_kor: "그 회사에", do: "her resume", do_kor: "그녀의 이력서를", kor: { 현재:"보내지 않는다.", 과거:"보내지 않았다.", 미래:"보내지 않을 것이다." }, s_kor: "그녀는", b_en: "for the job", b_kor: "그 일자리를 위해", c_en: ["for any reason"], c_kor: ["어떤 이유에서든"] },
        { vBase: "send", s: "He", p: "의문", io: "the customer", io_kor: "고객에게", do: "a new product", do_kor: "새 제품을", kor: { 현재:"보내니?", 과거:"보냈니?", 미래:"보낼까?" }, s_kor: "그는", b_en: "for a test", b_kor: "테스트를 위해", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "send", s: "They", p: "긍정", io: "us", io_kor: "우리에게", do: "a wedding invitation", do_kor: "결혼식 초대장을", kor: { 현재:"보낸다.", 과거:"보냈다.", 미래:"보낼 것이다." }, s_kor: "그들은", b_en: "by mail", b_kor: "우편으로", c_en: ["early"], c_kor: ["일찍"] },
        { vBase: "send", s: "We", p: "부정", io: "the enemy", io_kor: "적에게", do: "a peace message", do_kor: "평화 메시지를", kor: { 현재:"보내지 않는다.", 과거:"보내지 않았다.", 미래:"보내지 않을 것이다." }, s_kor: "우리는", b_en: "at this moment", b_kor: "이 순간에", c_en: ["easily"], c_kor: ["쉽게는"] },
        { vBase: "send", s: "You", p: "의문", io: "your boss", io_kor: "상사에게", do: "the final file", do_kor: "최종 파일을", kor: { 현재:"보내니?", 과거:"보냈니?", 미래:"보낼까?" }, s_kor: "너는", b_en: "before the meeting", b_kor: "회의 전에", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "send", s: "The boy", p: "긍정", io: "his girlfriend", io_kor: "그의 여자친구에게", do: "red roses", do_kor: "빨간 장미를", kor: { 현재:"보낸다.", 과거:"보냈다.", 미래:"보낼 것이다." }, s_kor: "그 소년은", b_en: "for their anniversary", b_kor: "그들의 기념일을 위해", c_en: ["with a card"], c_kor: ["카드와 함께"] },
        { vBase: "send", s: "The girls", p: "부정", io: "the singer", io_kor: "그 가수에게", do: "fan letters", do_kor: "팬레터를", kor: { 현재:"보내지 않는다.", 과거:"보내지 않았다.", 미래:"보내지 않을 것이다." }, s_kor: "소녀들은", b_en: "most of the time", b_kor: "이제는 더 이상", c_en: ["sadly"], c_kor: ["슬프게도"] },
        { vBase: "send", s: "My dad", p: "의문", io: "my brother", io_kor: "내 남동생에게", do: "a plane ticket", do_kor: "비행기 표를", kor: { 현재:"보내시니?", 과거:"보내셨니?", 미래:"보내실까?" }, s_kor: "나의 아빠는", b_en: "for his travel", b_kor: "그의 여행을 위해", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "send", s: "I", p: "긍정", io: "the team", io_kor: "팀에게", do: "a quick update", do_kor: "빠른 업데이트를", kor: { 현재:"보낸다.", 과거:"보냈다.", 미래:"보낼 것이다." }, s_kor: "나는", b_en: "about the issue", b_kor: "이슈에 대해", c_en: ["via email"], c_kor: ["이메일로"] },
        { vBase: "send", s: "She", p: "부정", io: "the hospital", io_kor: "병원에", do: "the medical records", do_kor: "의료 기록을", kor: { 현재:"보내지 않는다.", 과거:"보내지 않았다.", 미래:"보내지 않을 것이다." }, s_kor: "그녀는", b_en: "on time", b_kor: "제시간에", c_en: ["unfortunately"], c_kor: ["불행하게도"] },
        { vBase: "send", s: "He", p: "의문", io: "the publisher", io_kor: "출판사에", do: "his new book", do_kor: "그의 새 책을", kor: { 현재:"보내니?", 과거:"보냈니?", 미래:"보낼까?" }, s_kor: "그는", b_en: "for a review", b_kor: "검토를 위해", c_en: ["soon"], c_kor: ["곧"] },
        { vBase: "send", s: "They", p: "긍정", io: "the victim", io_kor: "피해자에게", do: "some relief money", do_kor: "구호금을", kor: { 현재:"보낸다.", 과거:"보냈다.", 미래:"보낼 것이다." }, s_kor: "그들은", b_en: "for help", b_kor: "도움을 위해", c_en: [ADV.TY_EN], c_kor: [ADV.TY_KR] },
        { vBase: "send", s: "We", p: "부정", io: "the student", io_kor: "그 학생에게", do: "a warning message", do_kor: "경고 메시지를", kor: { 현재:"보내지 않는다.", 과거:"보내지 않았다.", 미래:"보내지 않을 것이다." }, s_kor: "우리는", b_en: "for the first mistake", b_kor: "첫 번째 실수에 대해서는", c_en: ["strictly"], c_kor: ["엄격하게"] },
        { vBase: "send", s: "You", p: "의문", io: "the manager", io_kor: "매니저에게", do: "a voice message", do_kor: "음성 메시지를", kor: { 현재:"보내니?", 과거:"보냈니?", 미래:"보낼까?" }, s_kor: "너는", b_en: "on the phone", b_kor: "전화로", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "send", s: "The teacher", p: "긍정", io: "the parents", io_kor: "학부모들에게", do: "a school notice", do_kor: "가정통신문을", kor: { 현재:"보낸다.", 과거:"보냈다.", 미래:"보낼 것이다." }, s_kor: "선생님은", b_en: "every month", b_kor: "매달", c_en: ["via app"], c_kor: ["앱을 통해"] },
        { vBase: "send", s: "The workers", p: "부정", io: "the factory", io_kor: "공장에", do: "the missing parts", do_kor: "누락된 부품들을", kor: { 현재:"보내지 않는다.", 과거:"보내지 않았다.", 미래:"보내지 않을 것이다." }, s_kor: "노동자들은", b_en: "today", b_kor: "오늘은", c_en: ["due to the strike"], c_kor: ["파업 때문에"] },
        { vBase: "send", s: "I", p: "의문", io: "the winner", io_kor: "우승자에게", do: "a digital gift", do_kor: "디지털 선물을", kor: { 현재:"보내니?", 과거:"보냈니?", 미래:"보낼까?" }, s_kor: "내가", b_en: "via email", b_kor: "이메일을 통해", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] }
    ];
        return processRawRows4(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    tell: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The children", "The workers"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
        { vBase: "tell", s: "I", p: "긍정", io: "him", io_kor: "그에게", do: "the truth", do_kor: "진실을", kor: { 현재:"말한다.", 과거:"말했다.", 미래:"말할 것이다." }, s_kor: "나는", b_en: "about the accident", b_kor: "사고에 대한", c_en: ["honestly"], c_kor: ["솔직하게"] },
        { vBase: "tell", s: "She", p: "부정", io: "us", io_kor: "우리에게", do: "her secret", do_kor: "그녀의 비밀을", kor: { 현재:"말하지 않는다.", 과거:"말하지 않았다.", 미래:"말하지 않을 것이다." }, s_kor: "그녀는", b_en: "in the office", b_kor: "사무실에서", c_en: ["at all"], c_kor: ["전혀"] },
        { vBase: "tell", s: "He", p: "의문", io: "you", io_kor: "너에게", do: "a funny story", do_kor: "재미있는 이야기를", kor: { 현재:"말해주니?", 과거:"말해주었니?", 미래:"말해줄까?" }, s_kor: "그는", b_en: "during the lunch", b_kor: "점심 시간 동안", c_en: ["every day"], c_kor: ["매일"] },
        { vBase: "tell", s: "They", p: "긍정", io: "me", io_kor: "나에게", do: "the password", do_kor: "비밀번호를", kor: { 현재:"말해준다.", 과거:"말해주었다.", 미래:"말해줄 것이다." }, s_kor: "그들은", b_en: "for the computer", b_kor: "컴퓨터를 위한", c_en: ["quietly"], c_kor: ["조용히"] },
        { vBase: "tell", s: "We", p: "부정", io: "the kids", io_kor: "아이들에게", do: "scary stories", do_kor: "무서운 이야기를", kor: { 현재:"말하지 않는다.", 과거:"말하지 않았다.", 미래:"말하지 않을 것이다." }, s_kor: "우리는", b_en: "at night", b_kor: "밤에", c_en: ["before sleeping"], c_kor: ["잠들기 전에"] },
        { vBase: "tell", s: "You", p: "의문", io: "her", io_kor: "그녀에게", do: "the good news", do_kor: "좋은 소식을", kor: { 현재:"말해주니?", 과거:"말해주었니?", 미래:"말해줄까?" }, s_kor: "너는", b_en: "about the exam", b_kor: "시험에 대한", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "tell", s: "The boy", p: "긍정", io: "his teacher", io_kor: "그의 선생님에게", do: "a lie", do_kor: "거짓말을", kor: { 현재:"말한다.", 과거:"말했다.", 미래:"말할 것이다." }, s_kor: "그 소년은", b_en: "about his homework", b_kor: "그의 숙제에 대한", c_en: ["in the classroom"], c_kor: ["교실에서"] },
        { vBase: "tell", s: "My dad", p: "부정", io: "me", io_kor: "나에게", do: "the answer", do_kor: "정답을", kor: { 현재:"말해주지 않으신다.", 과거:"말해주지 않으셨다.", 미래:"말해주지 않으실 것이다." }, s_kor: "나의 아빠는", b_en: "to the puzzle", b_kor: "퍼즐에 대한", c_en: ["right away"], c_kor: ["즉시"] },
        { vBase: "tell", s: "I", p: "의문", io: "them", io_kor: "그들에게", do: "my plan", do_kor: "나의 계획을", kor: { 현재:"말하니?", 과거:"말했니?", 미래:"말할까?" }, s_kor: "내가", b_en: "for the weekend", b_kor: "주말을 위한", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "tell", s: "I", p: "긍정", io: "the police", io_kor: "경찰에게", do: "the whole truth", do_kor: "모든 진실을", kor: { 현재:"말한다.", 과거:"말했다.", 미래:"말할 것이다." }, s_kor: "나는", b_en: "about the crime", b_kor: "범죄에 대한", c_en: ["honestly"], c_kor: ["솔직하게"] },
        { vBase: "tell", s: "She", p: "부정", io: "her parents", io_kor: "그녀의 부모님에게", do: "a single lie", do_kor: "단 하나의 거짓말도", kor: { 현재:"하지 않는다.", 과거:"하지 않았다.", 미래:"하지 않을 것이다." }, s_kor: "그녀는", b_en: "in her life", b_kor: "그녀의 인생에서", c_en: ["proudly"], c_kor: ["자랑스럽게"] },
        { vBase: "tell", s: "He", p: "의문", io: "his son", io_kor: "그의 아들에게", do: "a bedtime story", do_kor: "잠자리 동화를", kor: { 현재:"말해주니?", 과거:"말해주었니?", 미래:"말해줄까?" }, s_kor: "그는", b_en: "every night", b_kor: "매일 밤", c_en: ["with a soft voice"], c_kor: ["부드러운 목소리로"] },
        { vBase: "tell", s: "They", p: "긍정", io: "the audience", io_kor: "관객에게", do: "an amazing fact", do_kor: "놀라운 사실을", kor: { 현재:"말해준다.", 과거:"말해주었다.", 미래:"말해줄 것이다." }, s_kor: "그들은", b_en: "during the show", b_kor: "쇼 동안", c_en: ["clearly"], c_kor: ["명확하게"] },
        { vBase: "tell", s: "We", p: "부정", io: "the competitors", io_kor: "경쟁자들에게", do: "our business plan", do_kor: "우리의 사업 계획을", kor: { 현재:"말하지 않는다.", 과거:"말하지 않았다.", 미래:"말하지 않을 것이다." }, s_kor: "우리는", b_en: "for security", b_kor: "보안을 위해", c_en: ["for any reason"], c_kor: ["어떤 이유에서든"] },
        { vBase: "tell", s: "You", p: "의문", io: "your friend", io_kor: "너의 친구에게", do: "your deep secret", do_kor: "너의 깊은 비밀을", kor: { 현재:"말해주니?", 과거:"말해주었니?", 미래:"말해줄까?" }, s_kor: "너는", b_en: "in the cafe", b_kor: "카페에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "tell", s: "The boy", p: "긍정", io: "the doctor", io_kor: "의사에게", do: "his exact symptoms", do_kor: "그의 정확한 증상을", kor: { 현재:"말한다.", 과거:"말했다.", 미래:"말할 것이다." }, s_kor: "그 소년은", b_en: "in the hospital", b_kor: "병원에서", c_en: ["nervously"], c_kor: ["초조하게"] },
        { vBase: "tell", s: "The children", p: "부정", io: "the teacher", io_kor: "선생님에게", do: "the real reason", do_kor: "진짜 이유를", kor: { 현재:"말하지 않는다.", 과거:"말하지 않았다.", 미래:"말하지 않을 것이다." }, s_kor: "아이들은", b_en: "for their fight", b_kor: "그들의 싸움에 대한", c_en: ["out of fear"], c_kor: ["두려움 때문에"] },
        { vBase: "tell", s: "My dad", p: "의문", io: "the mechanic", io_kor: "정비사에게", do: "the engine problem", do_kor: "엔진 문제를", kor: { 현재:"말해주시니?", 과거:"말해주셨니?", 미래:"말해주실까?" }, s_kor: "나의 아빠는", b_en: "at the garage", b_kor: "차고에서", c_en: ["directly"], c_kor: ["직접"] },
        { vBase: "tell", s: "I", p: "긍정", io: "the driver", io_kor: "운전사에게", do: "the right direction", do_kor: "올바른 방향을", kor: { 현재:"말해준다.", 과거:"말해주었다.", 미래:"말해줄 것이다." }, s_kor: "나는", b_en: "to the hotel", b_kor: "호텔로 가는", c_en: ["politely"], c_kor: ["정중하게"] },
        { vBase: "tell", s: "She", p: "부정", io: "the reporter", io_kor: "기자에게", do: "her private life", do_kor: "그녀의 사생활을", kor: { 현재:"말하지 않는다.", 과거:"말하지 않았다.", 미래:"말하지 않을 것이다." }, s_kor: "그녀는", b_en: "during the interview", b_kor: "인터뷰 동안", c_en: ["firmly"], c_kor: ["단호하게"] },
        { vBase: "tell", s: "He", p: "의문", io: "the staff", io_kor: "직원에게", do: "his special order", do_kor: "그의 특별 주문을", kor: { 현재:"말하니?", 과거:"말했니?", 미래:"말할까?" }, s_kor: "그는", b_en: "in the restaurant", b_kor: "식당에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "tell", s: "They", p: "긍정", io: "the tourists", io_kor: "관광객들에게", do: "a local legend", do_kor: "지역 전설을", kor: { 현재:"말해준다.", 과거:"말해주었다.", 미래:"말해줄 것이다." }, s_kor: "그들은", b_en: "near the temple", b_kor: "사원 근처에서", c_en: ["with excitement"], c_kor: ["흥분하여"] },
        { vBase: "tell", s: "We", p: "부정", io: "the kids", io_kor: "아이들에게", do: "the sad ending", do_kor: "슬픈 결말을", kor: { 현재:"말해주지 않는다.", 과거:"말해주지 않았다.", 미래:"말해주지 않을 것이다." }, s_kor: "우리는", b_en: "of the movie", b_kor: "그 영화의", c_en: ["for their emotions"], c_kor: ["그들의 감정을 위해"] },
        { vBase: "tell", s: "You", p: "의문", io: "the assistant", io_kor: "비서에게", do: "your schedule", do_kor: "너의 일정을", kor: { 현재:"말해주니?", 과거:"말해주었니?", 미래:"말해줄까?" }, s_kor: "너는", b_en: "for tomorrow", b_kor: "내일을 위한", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "tell", s: "The manager", p: "긍정", io: "the team", io_kor: "팀에게", do: "the new goal", do_kor: "새로운 목표를", kor: { 현재:"말해준다.", 과거:"말해주었다.", 미래:"말해줄 것이다." }, s_kor: "매니저는", b_en: "in the meeting room", b_kor: "회의실에서", c_en: ["confidently"], c_kor: ["자신감 있게"] },
        { vBase: "tell", s: "The workers", p: "부정", io: "the boss", io_kor: "사장님에게", do: "the bad news", do_kor: "나쁜 소식을", kor: { 현재:"말하지 않는다.", 과거:"말하지 않았다.", 미래:"말하지 않을 것이다." }, s_kor: "노동자들은", b_en: "directly", b_kor: "직접", c_en: ["out of fear"], c_kor: ["두려움 때문에"] },
        { vBase: "tell", s: "I", p: "의문", io: "the boy", io_kor: "그 소년에게", do: "the magic trick", do_kor: "마술의 비법을", kor: { 현재:"말해주니?", 과거:"말해주었니?", 미래:"말해줄까?" }, s_kor: "내가", b_en: "for fun", b_kor: "재미를 위해", c_en: ["finally"], c_kor: ["마침내"] }
    ];
        return processRawRows4(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    ask: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The students", "The members"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
        { vBase: "ask", s: "I", p: "긍정", io: "him", io_kor: "그에게", do: "a question", do_kor: "질문을", kor: { 현재:"묻는다.", 과거:"물었다.", 미래:"물을 것이다." }, s_kor: "나는", b_en: "about the rule", b_kor: "규칙에 대해", c_en: ["in the class"], c_kor: ["수업 중에"] },
        { vBase: "ask", s: "She", p: "부정", io: "me", io_kor: "나에게", do: "a favor", do_kor: "부탁을", kor: { 현재:"하지 않는다.", 과거:"하지 않았다.", 미래:"하지 않을 것이다." }, s_kor: "그녀는", b_en: "in this situation", b_kor: "이 상황에서", c_en: ["most of the time"], c_kor: ["보통은"] },
        { vBase: "ask", s: "He", p: "의문", io: "you", io_kor: "너에게", do: "the direction", do_kor: "방향을", kor: { 현재:"묻니?", 과거:"물었니?", 미래:"물을까?" }, s_kor: "그는", b_en: "to the station", b_kor: "기차역으로 가는", c_en: ["on the street"], c_kor: ["거리에서"] },
        { vBase: "ask", s: "They", p: "긍정", io: "the teacher", io_kor: "선생님에게", do: "some advice", do_kor: "약간의 조언을", kor: { 현재:"구한다.", 과거:"구했다.", 미래:"구할 것이다." }, s_kor: "그들은", b_en: "for their study", b_kor: "그들의 공부를 위한", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "ask", s: "We", p: "부정", io: "them", io_kor: "그들에게", do: "personal questions", do_kor: "개인적인 질문들을", kor: { 현재:"묻지 않는다.", 과거:"묻지 않았다.", 미래:"묻지 않을 것이다." }, s_kor: "우리는", b_en: "during the interview", b_kor: "면접 동안", c_en: ["out of respect"], c_kor: ["존중의 의미로"] },
        { vBase: "ask", s: "You", p: "의문", io: "her", io_kor: "그녀에게", do: "her opinion", do_kor: "그녀의 의견을", kor: { 현재:"묻니?", 과거:"물었니?", 미래:"물을까?" }, s_kor: "너는", b_en: "about the plan", b_kor: "계획에 대한", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "ask", s: "The boy", p: "긍정", io: "his dad", io_kor: "그의 아빠에게", do: "permission", do_kor: "허락을", kor: { 현재:"구한다.", 과거:"구했다.", 미래:"구할 것이다." }, s_kor: "그 소년은", b_en: "for the trip", b_kor: "여행을 위한", c_en: ["with a serious face"], c_kor: ["진지한 얼굴로"] },
        { vBase: "ask", s: "My mom", p: "부정", io: "me", io_kor: "나에게", do: "hard questions", do_kor: "어려운 질문들을", kor: { 현재:"묻지 않으신다.", 과거:"묻지 않으셨다.", 미래:"묻지 않으실 것이다." }, s_kor: "나의 엄마는", b_en: "after school", b_kor: "방과 후에", c_en: ["for my rest"], c_kor: ["나의 휴식을 위해"] },
        { vBase: "ask", s: "I", p: "의문", io: "the man", io_kor: "그 남자에게", do: "the exact time", do_kor: "정확한 시간을", kor: { 현재:"묻니?", 과거:"물었니?", 미래:"물을까?" }, s_kor: "내가", b_en: "in the park", b_kor: "공원에서", c_en: ["politely"], c_kor: ["정중하게"] },
        { vBase: "ask", s: "I", p: "긍정", io: "the guide", io_kor: "가이드에게", do: "a difficult question", do_kor: "어려운 질문을", kor: { 현재:"묻는다.", 과거:"물었다.", 미래:"물을 것이다." }, s_kor: "나는", b_en: "about the museum", b_kor: "박물관에 대한", c_en: ["out of curiosity"], c_kor: ["호기심에"] },
        { vBase: "ask", s: "She", p: "부정", io: "the stranger", io_kor: "낯선 사람에게", do: "a personal favor", do_kor: "개인적인 부탁을", kor: { 현재:"하지 않는다.", 과거:"하지 않았다.", 미래:"하지 않을 것이다." }, s_kor: "그녀는", b_en: "on the street", b_kor: "거리에서", c_en: ["most of the time"], c_kor: ["보통은"] },
        { vBase: "ask", s: "He", p: "의문", io: "his friend", io_kor: "그의 친구에게", do: "a small loan", do_kor: "작은 대출을", kor: { 현재:"부탁하니?", 과거:"부탁했니?", 미래:"부탁할까?" }, s_kor: "그는", b_en: "for the lunch", b_kor: "점심을 위한", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "ask", s: "They", p: "긍정", io: "the expert", io_kor: "전문가에게", do: "some technical advice", do_kor: "기술적인 조언을", kor: { 현재:"구한다.", 과거:"구했다.", 미래:"구할 것이다." }, s_kor: "그들은", b_en: "for their project", b_kor: "그들의 프로젝트를 위해", c_en: ["politely"], c_kor: ["정중하게"] },
        { vBase: "ask", s: "We", p: "부정", io: "the neighbors", io_kor: "이웃들에게", do: "a huge favor", do_kor: "큰 부탁을", kor: { 현재:"하지 않는다.", 과거:"하지 않았다.", 미래:"하지 않을 것이다." }, s_kor: "우리는", b_en: "at this late hour", b_kor: "이 늦은 시간에", c_en: ["out of respect"], c_kor: ["존중의 의미로"] },
        { vBase: "ask", s: "You", p: "의문", io: "the clerk", io_kor: "점원에게", do: "the exact price", do_kor: "정확한 가격을", kor: { 현재:"묻니?", 과거:"물었니?", 미래:"물을까?" }, s_kor: "너는", b_en: "in the store", b_kor: "가게에서", c_en: ["before buying"], c_kor: ["사기 전에"] },
        { vBase: "ask", s: "The boy", p: "긍정", io: "his mom", io_kor: "그의 엄마에게", do: "some extra money", do_kor: "추가 용돈을", kor: { 현재:"부탁한다.", 과거:"부탁했다.", 미래:"부탁할 것이다." }, s_kor: "그 소년은", b_en: "for a new game", b_kor: "새 게임을 위해", c_en: ["with a cute face"], c_kor: ["귀여운 표정으로"] },
        { vBase: "ask", s: "The students", p: "부정", io: "the professor", io_kor: "교수님에게", do: "any silly questions", do_kor: "어떤 어리석은 질문도", kor: { 현재:"묻지 않는다.", 과거:"묻지 않았다.", 미래:"묻지 않을 것이다." }, s_kor: "그 학생들은", b_en: "in the class", b_kor: "수업 중에", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "ask", s: "My dad", p: "의문", io: "the officer", io_kor: "경찰관에게", do: "the fastest route", do_kor: "가장 빠른 경로를", kor: { 현재:"묻니?", 과거:"물었니?", 미래:"물을까?" }, s_kor: "나의 아빠는", b_en: "to the airport", b_kor: "공항으로 가는", c_en: ["urgently"], c_kor: ["다급하게"] },
        { vBase: "ask", s: "I", p: "긍정", io: "the waiter", io_kor: "웨이터에게", do: "a special request", do_kor: "특별한 요청을", kor: { 현재:"부탁한다.", 과거:"부탁했다.", 미래:"부탁할 것이다." }, s_kor: "나는", b_en: "for our meal", b_kor: "우리의 식사를 위해", c_en: ["in the restaurant"], c_kor: ["식당에서"] },
        { vBase: "ask", s: "She", p: "부정", io: "the actor", io_kor: "그 배우에게", do: "an autograph", do_kor: "사인을", kor: { 현재:"부탁하지 않는다.", 과거:"부탁하지 않았다.", 미래:"부탁하지 않을 것이다." }, s_kor: "그녀는", b_en: "during his break", b_kor: "그의 휴식 시간에", c_en: ["considerately"], c_kor: ["배려하여"] },
        { vBase: "ask", s: "He", p: "의문", io: "the coach", io_kor: "코치에게", do: "another chance", do_kor: "또 다른 기회를", kor: { 현재:"부탁하니?", 과거:"부탁했니?", 미래:"부탁할까?" }, s_kor: "그는", b_en: "for the final match", b_kor: "결승전을 위한", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "ask", s: "They", p: "긍정", io: "the government", io_kor: "정부에게", do: "financial support", do_kor: "재정적 지원을", kor: { 현재:"요구한다.", 과거:"요구했다.", 미래:"요구할 것이다." }, s_kor: "그들은", b_en: "for the poor", b_kor: "가난한 사람들을 위해", c_en: [ADV.TY_EN], c_kor: [ADV.TY_KR] },
        { vBase: "ask", s: "We", p: "부정", io: "the landlord", io_kor: "집주인에게", do: "a rent discount", do_kor: "집세 할인을", kor: { 현재:"요구하지 않는다.", 과거:"요구하지 않았다.", 미래:"요구하지 않을 것이다." }, s_kor: "우리는", b_en: "this month", b_kor: "이번 달에는", c_en: ["surprisingly"], c_kor: ["놀랍게도"] },
        { vBase: "ask", s: "You", p: "의문", io: "the designer", io_kor: "디자이너에게", do: "her honest opinion", do_kor: "그녀의 솔직한 의견을", kor: { 현재:"묻니?", 과거:"물었니?", 미래:"물을까?" }, s_kor: "너는", b_en: "about the logo", b_kor: "로고에 대한", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "ask", s: "The teacher", p: "긍정", io: "the class", io_kor: "반 학생들에게", do: "a trick question", do_kor: "함정 질문을", kor: { 현재:"묻는다.", 과거:"물었다.", 미래:"물을 것이다." }, s_kor: "선생님은", b_en: "for a quiz", b_kor: "퀴즈를 위해", c_en: ["with a smile"], c_kor: ["미소와 함께"] },
        { vBase: "ask", s: "The members", p: "부정", io: "the leader", io_kor: "리더에게", do: "any more questions", do_kor: "더 이상의 질문을", kor: { 현재:"하지 않는다.", 과거:"하지 않았다.", 미래:"하지 않을 것이다." }, s_kor: "회원들은", b_en: "at the end", b_kor: "마지막에", c_en: ["silently"], c_kor: ["조용히"] },
        { vBase: "ask", s: "I", p: "의문", io: "the little girl", io_kor: "어린 소녀에게", do: "her exact age", do_kor: "그녀의 정확한 나이를", kor: { 현재:"묻니?", 과거:"물었니?", 미래:"물을까?" }, s_kor: "내가", b_en: "with a smile", b_kor: "미소와 함께", c_en: ["kindly"], c_kor: ["친절하게"] }
    ];
        return processRawRows4(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    buy: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The girls", "The tourists", "The workers"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
        { vBase: "buy", s: "I", p: "긍정", io: "him", io_kor: "그에게", do: "a new shirt", do_kor: "새 셔츠를", kor: { 현재:"사준다.", 과거:"사주었다.", 미래:"사줄 것이다." }, s_kor: "나는", b_en: "at the mall", b_kor: "쇼핑몰에서", c_en: ["for his interview"], c_kor: ["그의 면접을 위해"] },
        { vBase: "buy", s: "She", p: "부정", io: "us", io_kor: "우리에게", do: "expensive food", do_kor: "비싼 음식을", kor: { 현재:"사주지 않는다.", 과거:"사주지 않았다.", 미래:"사주지 않을 것이다." }, s_kor: "그녀는", b_en: "in this restaurant", b_kor: "이 식당에서", c_en: ["normally"], c_kor: ["보통은"] },
        { vBase: "buy", s: "He", p: "의문", io: "you", io_kor: "너에게", do: "a coffee", do_kor: "커피 한 잔을", kor: { 현재:"사주니?", 과거:"사주었니?", 미래:"사줄까?" }, s_kor: "그는", b_en: "every morning", b_kor: "매일 아침", c_en: ["before work"], c_kor: ["출근 전에"] },
        { vBase: "buy", s: "They", p: "긍정", io: "me", io_kor: "나에게", do: "a birthday cake", do_kor: "생일 케이크를", kor: { 현재:"사준다.", 과거:"사주었다.", 미래:"사줄 것이다." }, s_kor: "그들은", b_en: "at the bakery", b_kor: "빵집에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "buy", s: "We", p: "부정", io: "the kids", io_kor: "아이들에게", do: "sweet snacks", do_kor: "단 간식들을", kor: { 현재:"사주지 않는다.", 과거:"사주지 않았다.", 미래:"사주지 않을 것이다." }, s_kor: "우리는", b_en: "before dinner", b_kor: "저녁 식사 전에", c_en: ["for their health"], c_kor: ["건강을 위해"] },
        { vBase: "buy", s: "You", p: "의문", io: "her", io_kor: "그녀에게", do: "a beautiful ring", do_kor: "아름다운 반지를", kor: { 현재:"사주니?", 과거:"사주었니?", 미래:"사줄까?" }, s_kor: "너는", b_en: "for the anniversary", b_kor: "기념일을 위해", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "buy", s: "The boy", p: "긍정", io: "his sister", io_kor: "그의 여동생에게", do: "a cute doll", do_kor: "귀여운 인형을", kor: { 현재:"사준다.", 과거:"사주었다.", 미래:"사줄 것이다." }, s_kor: "그 소년은", b_en: "with his pocket money", b_kor: "그의 용돈으로", c_en: ["at the toy store"], c_kor: ["장난감 가게에서"] },
        { vBase: "buy", s: "My dad", p: "부정", io: "me", io_kor: "나에게", do: "a smartphone", do_kor: "스마트폰을", kor: { 현재:"사주지 않으신다.", 과거:"사주지 않으셨다.", 미래:"사주지 않으실 것이다." }, s_kor: "나의 아빠는", b_en: "this year", b_kor: "올해에는", c_en: ["due to my grades"], c_kor: ["나의 성적 때문에"] },
        { vBase: "buy", s: "I", p: "의문", io: "them", io_kor: "그들에게", do: "movie tickets", do_kor: "영화 표를", kor: { 현재:"사주니?", 과거:"사주었니?", 미래:"사줄까?" }, s_kor: "내가", b_en: "for the weekend", b_kor: "주말을 위해", c_en: ["as a gift"], c_kor: ["선물로써"] },
        { vBase: "buy", s: "I", p: "긍정", io: "my dog", io_kor: "나의 개에게", do: "a soft bed", do_kor: "부드러운 침대를", kor: { 현재:"사준다.", 과거:"사주었다.", 미래:"사줄 것이다." }, s_kor: "나는", b_en: "for the winter", b_kor: "겨울을 위해", c_en: ["at the pet store"], c_kor: ["애완동물 가게에서"] },
        { vBase: "buy", s: "She", p: "부정", io: "her boyfriend", io_kor: "그녀의 남자친구에게", do: "an expensive watch", do_kor: "비싼 시계를", kor: { 현재:"사주지 않는다.", 과거:"사주지 않았다.", 미래:"사주지 않을 것이다." }, s_kor: "그녀는", b_en: "for his birthday", b_kor: "그의 생일을 위해", c_en: ["this year"], c_kor: ["올해에는"] },
        { vBase: "buy", s: "He", p: "의문", io: "his kids", io_kor: "그의 아이들에게", do: "some ice cream", do_kor: "아이스크림을", kor: { 현재:"사주니?", 과거:"사주었니?", 미래:"사줄까?" }, s_kor: "그는", b_en: "at the park", b_kor: "공원에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "buy", s: "They", p: "긍정", io: "the team", io_kor: "팀에게", do: "a big pizza", do_kor: "큰 피자를", kor: { 현재:"사준다.", 과거:"사주었다.", 미래:"사줄 것이다." }, s_kor: "그들은", b_en: "after the victory", b_kor: "승리 후에", c_en: ["happily"], c_kor: ["행복하게"] },
        { vBase: "buy", s: "We", p: "부정", io: "the guests", io_kor: "손님들에게", do: "any fancy drinks", do_kor: "어떤 고급 음료도", kor: { 현재:"사주지 않는다.", 과거:"사주지 않았다.", 미래:"사주지 않을 것이다." }, s_kor: "우리는", b_en: "at the party", b_kor: "파티에서", c_en: ["for a reason"], c_kor: ["이유가 있어서"] },
        { vBase: "buy", s: "You", p: "의문", io: "your sister", io_kor: "너의 여동생에게", do: "a new dress", do_kor: "새 드레스를", kor: { 현재:"사주니?", 과거:"사주었니?", 미래:"사줄까?" }, s_kor: "너는", b_en: "for the wedding", b_kor: "결혼식을 위해", c_en: [ADV.TW_EN], c_kor: [ADV.TW_KR] },
        { vBase: "buy", s: "The boy", p: "긍정", io: "his dad", io_kor: "그의 아빠에게", do: "a cool tie", do_kor: "멋진 넥타이를", kor: { 현재:"사준다.", 과거:"사주었다.", 미래:"사줄 것이다." }, s_kor: "그 소년은", b_en: "with his savings", b_kor: "그의 저축으로", c_en: ["proudly"], c_kor: ["자랑스럽게"] },
        { vBase: "buy", s: "The girls", p: "부정", io: "the teacher", io_kor: "선생님에게", do: "a farewell gift", do_kor: "작별 선물을", kor: { 현재:"사주지 않는다.", 과거:"사주지 않았다.", 미래:"사주지 않을 것이다." }, s_kor: "소녀들은", b_en: "for a reason", b_kor: "이유가 있어서", c_en: ["sadly"], c_kor: ["슬프게도"] },
        { vBase: "buy", s: "My mom", p: "의문", io: "the family", io_kor: "가족에게", do: "fresh seafood", do_kor: "신선한 해산물을", kor: { 현재:"사주시니?", 과거:"사주셨니?", 미래:"사주실까?" }, s_kor: "나의 엄마는", b_en: "at the market", b_kor: "시장에서", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "buy", s: "I", p: "긍정", io: "the baby", io_kor: "아기에게", do: "a wooden toy", do_kor: "나무 장난감을", kor: { 현재:"사준다.", 과거:"사주었다.", 미래:"사줄 것이다." }, s_kor: "나는", b_en: "at the local shop", b_kor: "동네 가게에서", c_en: ["with joy"], c_kor: ["기쁨과 함께"] },
        { vBase: "buy", s: "She", p: "부정", io: "her cat", io_kor: "그녀의 고양이에게", do: "cheap food", do_kor: "값싼 음식을", kor: { 현재:"사주지 않는다.", 과거:"사주지 않았다.", 미래:"사주지 않을 것이다." }, s_kor: "그녀는", b_en: "for its health", b_kor: "그것의 건강을 위해", c_en: ["for any reason"], c_kor: ["어떤 이유에서든"] },
        { vBase: "buy", s: "He", p: "의문", io: "his wife", io_kor: "그의 아내에게", do: "a gold necklace", do_kor: "금목걸이를", kor: { 현재:"사주니?", 과거:"사주었니?", 미래:"사줄까?" }, s_kor: "그는", b_en: "for their anniversary", b_kor: "그들의 기념일을 위해", c_en: ["secretly"], c_kor: ["몰래"] },
        { vBase: "buy", s: "They", p: "긍정", io: "the school", io_kor: "학교에", do: "new computers", do_kor: "새 컴퓨터들을", kor: { 현재:"사준다.", 과거:"사주었다.", 미래:"사줄 것이다." }, s_kor: "그들은", b_en: "for the students", b_kor: "학생들을 위해", c_en: [ADV.TY_EN], c_kor: [ADV.TY_KR] },
        { vBase: "buy", s: "We", p: "부정", io: "the customer", io_kor: "고객에게", do: "a free coupon", do_kor: "무료 쿠폰을", kor: { 현재:"사주지 않는다.", 과거:"사주지 않았다.", 미래:"사주지 않을 것이다." }, s_kor: "우리는", b_en: "this time", b_kor: "이번에는", c_en: ["unfortunately"], c_kor: ["불행하게도"] },
        { vBase: "buy", s: "You", p: "의문", io: "your friend", io_kor: "너의 친구에게", do: "a concert ticket", do_kor: "콘서트 표를", kor: { 현재:"사주니?", 과거:"사주었니?", 미래:"사줄까?" }, s_kor: "너는", b_en: "for the weekend", b_kor: "주말을 위해", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "buy", s: "The tourists", p: "긍정", io: "their friends", io_kor: "그들의 친구들에게", do: "small souvenirs", do_kor: "작은 기념품들을", kor: { 현재:"사준다.", 과거:"사주었다.", 미래:"사줄 것이다." }, s_kor: "관광객들은", b_en: "in the village", b_kor: "마을에서", c_en: ["joyfully"], c_kor: ["즐겁게"] },
        { vBase: "buy", s: "The workers", p: "부정", io: "the boss", io_kor: "사장님에게", do: "a holiday present", do_kor: "명절 선물을", kor: { 현재:"사주지 않는다.", 과거:"사주지 않았다.", 미래:"사주지 않을 것이다." }, s_kor: "노동자들은", b_en: "all the time", b_kor: "이제는 더 이상", c_en: ["strictly"], c_kor: ["엄격하게"] },
        { vBase: "buy", s: "I", p: "의문", io: "the poor man", io_kor: "가난한 남자에게", do: "a warm coat", do_kor: "따뜻한 코트를", kor: { 현재:"사주니?", 과거:"사주었니?", 미래:"사줄까?" }, s_kor: "내가", b_en: "for the cold weather", b_kor: "추운 날씨를 위해", c_en: ["willingly"], c_kor: ["기꺼이"] }
    ];
        return processRawRows4(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    bring: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The students", "The workers", "The scientists"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
        { vBase: "bring", s: "I", p: "긍정", io: "him", io_kor: "그에게", do: "a cup of water", do_kor: "물 한 잔을", kor: { 현재:"가져다준다.", 과거:"가져다주었다.", 미래:"가져다줄 것이다." }, s_kor: "나는", b_en: "from the kitchen", b_kor: "부엌에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "bring", s: "She", p: "부정", io: "us", io_kor: "우리에게", do: "bad news", do_kor: "나쁜 소식을", kor: { 현재:"가져오지 않는다.", 과거:"가져오지 않았다.", 미래:"가져오지 않을 것이다." }, s_kor: "그녀는", b_en: "to the meeting", b_kor: "회의에", c_en: ["most of the time"], c_kor: ["보통은"] },
        { vBase: "bring", s: "He", p: "의문", io: "you", io_kor: "너에게", do: "the document", do_kor: "그 서류를", kor: { 현재:"가져다주니?", 과거:"가져다주었니?", 미래:"가져다줄까?" }, s_kor: "그는", b_en: "for the sign", b_kor: "서명을 위해", c_en: ["in the office"], c_kor: ["사무실에서"] },
        { vBase: "bring", s: "They", p: "긍정", io: "me", io_kor: "나에게", do: "fresh fruits", do_kor: "신선한 과일들을", kor: { 현재:"가져다준다.", 과거:"가져다주었다.", 미래:"가져다줄 것이다." }, s_kor: "그들은", b_en: "from the farm", b_kor: "농장에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "bring", s: "We", p: "부정", io: "the dog", io_kor: "그 개에게", do: "dirty toys", do_kor: "더러운 장난감을", kor: { 현재:"가져다주지 않는다.", 과거:"가져다주지 않았다.", 미래:"가져다주지 않을 것이다." }, s_kor: "우리는", b_en: "in the house", b_kor: "집 안에서는", c_en: ["for hygiene"], c_kor: ["위생을 위해"] },
        { vBase: "bring", s: "You", p: "의문", io: "her", io_kor: "그녀에게", do: "a warm blanket", do_kor: "따뜻한 담요를", kor: { 현재:"가져다주니?", 과거:"가져다주었니?", 미래:"가져다줄까?" }, s_kor: "너는", b_en: "for the cold night", b_kor: "추운 밤을 위해", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "bring", s: "The boy", p: "긍정", io: "his dad", io_kor: "그의 아빠에게", do: "the newspaper", do_kor: "신문을", kor: { 현재:"가져다준다.", 과거:"가져다주었다.", 미래:"가져다줄 것이다." }, s_kor: "그 소년은", b_en: "every morning", b_kor: "매일 아침", c_en: ["with a smile"], c_kor: ["미소와 함께"] },
        { vBase: "bring", s: "My mom", p: "부정", io: "me", io_kor: "나에게", do: "heavy bags", do_kor: "무거운 가방들을", kor: { 현재:"가져다주지 않으신다.", 과거:"가져다주지 않으셨다.", 미래:"가져다주지 않으실 것이다." }, s_kor: "나의 엄마는", b_en: "from the market", b_kor: "시장에서", c_en: ["alone"], c_kor: ["혼자서는"] },
        { vBase: "bring", s: "I", p: "의문", io: "them", io_kor: "그들에게", do: "good luck", do_kor: "행운을", kor: { 현재:"가져다주니?", 과거:"가져다주었니?", 미래:"가져다줄까?" }, s_kor: "내가", b_en: "in this game", b_kor: "이 게임에서", c_en: ["honestly"], c_kor: ["솔직히"] },
        { vBase: "bring", s: "I", p: "긍정", io: "the dog", io_kor: "개에게", do: "a flying disc", do_kor: "플라잉 디스크를", kor: { 현재:"가져다준다.", 과거:"가져다주었다.", 미래:"가져다줄 것이다." }, s_kor: "나는", b_en: "in the park", b_kor: "공원에서", c_en: ["for fun"], c_kor: ["재미를 위해"] },
        { vBase: "bring", s: "She", p: "부정", io: "the host", io_kor: "주최자에게", do: "a bottle of wine", do_kor: "와인 한 병을", kor: { 현재:"가져다주지 않는다.", 과거:"가져다주지 않았다.", 미래:"가져다주지 않을 것이다." }, s_kor: "그녀는", b_en: "to the party", b_kor: "파티에", c_en: ["by mistake"], c_kor: ["실수로"] },
        { vBase: "bring", s: "He", p: "의문", io: "his kids", io_kor: "그의 아이들에게", do: "some fun toys", do_kor: "재미있는 장난감들을", kor: { 현재:"가져다주니?", 과거:"가져다주었니?", 미래:"가져다줄까?" }, s_kor: "그는", b_en: "from his trip", b_kor: "그의 여행에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "bring", s: "They", p: "긍정", io: "the poor", io_kor: "가난한 사람들에게", do: "warm clothes", do_kor: "따뜻한 옷을", kor: { 현재:"가져다준다.", 과거:"가져다주었다.", 미래:"가져다줄 것이다." }, s_kor: "그들은", b_en: "for the winter", b_kor: "겨울을 위해", c_en: ["every year"], c_kor: ["매년"] },
        { vBase: "bring", s: "We", p: "부정", io: "the animals", io_kor: "동물들에게", do: "any human food", do_kor: "어떤 사람의 음식도", kor: { 현재:"가져다주지 않는다.", 과거:"가져다주지 않았다.", 미래:"가져다주지 않을 것이다." }, s_kor: "우리는", b_en: "at the zoo", b_kor: "동물원에서", c_en: ["for their health"], c_kor: ["그들의 건강을 위해"] },
        { vBase: "bring", s: "You", p: "의문", io: "your friend", io_kor: "너의 친구에게", do: "a hot coffee", do_kor: "따뜻한 커피를", kor: { 현재:"가져다주니?", 과거:"가져다주었니?", 미래:"가져다줄까?" }, s_kor: "너는", b_en: "in the morning", b_kor: "아침에", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "bring", s: "The boy", p: "긍정", io: "the teacher", io_kor: "선생님에게", do: "a red apple", do_kor: "빨간 사과를", kor: { 현재:"가져다준다.", 과거:"가져다주었다.", 미래:"가져다줄 것이다." }, s_kor: "그 소년은", b_en: "on Teacher's Day", b_kor: "스승의 날에", c_en: ["with respect"], c_kor: ["존경의 마음으로"] },
        { vBase: "bring", s: "The students", p: "부정", io: "the club", io_kor: "동아리에", do: "their own instruments", do_kor: "그들 자신의 악기들을", kor: { 현재:"가져오지 않는다.", 과거:"가져오지 않았다.", 미래:"가져오지 않을 것이다." }, s_kor: "그 학생들은", b_en: "today", b_kor: "오늘은", c_en: ["due to the rain"], c_kor: ["비 때문에"] },
        { vBase: "bring", s: "My mom", p: "의문", io: "the baby", io_kor: "아기에게", do: "a soft towel", do_kor: "부드러운 수건을", kor: { 현재:"가져다주시니?", 과거:"가져다주셨니?", 미래:"가져다주실까?" }, s_kor: "나의 엄마는", b_en: "after the bath", b_kor: "목욕 후에", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "bring", s: "I", p: "긍정", io: "the guests", io_kor: "손님들에게", do: "fresh towels", do_kor: "새 수건들을", kor: { 현재:"가져다준다.", 과거:"가져다주었다.", 미래:"가져다줄 것이다." }, s_kor: "나는", b_en: "to their room", b_kor: "그들의 방으로", c_en: ["quickly"], c_kor: ["빠르게"] },
        { vBase: "bring", s: "She", p: "부정", io: "the team", io_kor: "팀에게", do: "any good results", do_kor: "어떤 좋은 결과도", kor: { 현재:"가져다주지 않는다.", 과거:"가져다주지 않았다.", 미래:"가져다주지 않을 것이다." }, s_kor: "그녀는", b_en: "in this season", b_kor: "이번 시즌에", c_en: ["sadly"], c_kor: ["슬프게도"] },
        { vBase: "bring", s: "He", p: "의문", io: "the patient", io_kor: "환자에게", do: "a colorful flower", do_kor: "화려한 꽃을", kor: { 현재:"가져다주니?", 과거:"가져다주었니?", 미래:"가져다줄까?" }, s_kor: "그는", b_en: "in the hospital", b_kor: "병원에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "bring", s: "They", p: "긍정", io: "the city", io_kor: "도시에", do: "a lot of changes", do_kor: "많은 변화를", kor: { 현재:"가져온다.", 과거:"가져왔다.", 미래:"가져올 것이다." }, s_kor: "그들은", b_en: "with the new plan", b_kor: "새 계획과 함께", c_en: ["slowly"], c_kor: ["천천히"] },
        { vBase: "bring", s: "We", p: "부정", io: "the audience", io_kor: "관객에게", do: "an amazing performance", do_kor: "놀라운 공연을", kor: { 현재:"선사하지 못한다.", 과거:"선사하지 못했다.", 미래:"선사하지 못할 것이다." }, s_kor: "우리는", b_en: "this time", b_kor: "이번에는", c_en: ["regrettably"], c_kor: ["유감스럽게도"] },
        { vBase: "bring", s: "You", p: "의문", io: "your family", io_kor: "너의 가족에게", do: "much happiness", do_kor: "많은 행복을", kor: { 현재:"가져다주니?", 과거:"가져다주었니?", 미래:"가져다줄까?" }, s_kor: "너는", b_en: "with your success", b_kor: "너의 성공과 함께", c_en: [ADV.TY_EN], c_kor: [ADV.TY_KR] },
        { vBase: "bring", s: "The workers", p: "긍정", io: "the manager", io_kor: "매니저에게", do: "the broken parts", do_kor: "고장 난 부품들을", kor: { 현재:"가져다준다.", 과거:"가져다주었다.", 미래:"가져다줄 것이다." }, s_kor: "노동자들은", b_en: "from the machine", b_kor: "기계에서 빼낸", c_en: ["immediately"], c_kor: ["즉시"] },
        { vBase: "bring", s: "The scientists", p: "부정", io: "us", io_kor: "우리에게", do: "a clear solution", do_kor: "명확한 해결책을", kor: { 현재:"가져다주지 않는다.", 과거:"가져다주지 않았다.", 미래:"가져다주지 않을 것이다." }, s_kor: "과학자들은", b_en: "for the problem", b_kor: "그 문제에 대한", c_en: ["most of the time"], c_kor: ["아직은"] },
        { vBase: "bring", s: "I", p: "의문", io: "the children", io_kor: "아이들에게", do: "sweet candies", do_kor: "달콤한 사탕들을", kor: { 현재:"가져다주니?", 과거:"가져다주었니?", 미래:"가져다줄까?" }, s_kor: "내가", b_en: "from the store", b_kor: "가게에서 산", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] }
    ];
        return processRawRows4(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    teach: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The teachers", "The experts", "The students"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
        { vBase: "teach", s: "I", p: "긍정", io: "him", io_kor: "그에게", do: "math", do_kor: "수학을", kor: { 현재:"가르친다.", 과거:"가르쳤다.", 미래:"가르칠 것이다." }, s_kor: "나는", b_en: "after school", b_kor: "방과 후에", c_en: ["in the library"], c_kor: ["도서관에서"] },
        { vBase: "teach", s: "She", p: "부정", io: "us", io_kor: "우리에게", do: "bad words", do_kor: "나쁜 말들을", kor: { 현재:"가르치지 않는다.", 과거:"가르치지 않았다.", 미래:"가르치지 않을 것이다." }, s_kor: "그녀는", b_en: "in her class", b_kor: "그녀의 수업에서", c_en: ["for any reason"], c_kor: ["어떤 이유에서든"] },
        { vBase: "teach", s: "He", p: "의문", io: "you", io_kor: "너에게", do: "guitar", do_kor: "기타를", kor: { 현재:"가르쳐주니?", 과거:"가르쳐주었니?", 미래:"가르쳐줄까?" }, s_kor: "그는", b_en: "on weekends", b_kor: "주말마다", c_en: ["at the studio"], c_kor: ["스튜디오에서"] },
        { vBase: "teach", s: "They", p: "긍정", io: "me", io_kor: "나에게", do: "a useful skill", do_kor: "유용한 기술을", kor: { 현재:"가르쳐준다.", 과거:"가르쳐주었다.", 미래:"가르쳐줄 것이다." }, s_kor: "그들은", b_en: "for the project", b_kor: "프로젝트를 위해", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "teach", s: "We", p: "부정", io: "them", io_kor: "그들에게", do: "the secret recipe", do_kor: "비밀 레시피를", kor: { 현재:"가르쳐주지 않는다.", 과거:"가르쳐주지 않았다.", 미래:"가르쳐주지 않을 것이다." }, s_kor: "우리는", b_en: "in the kitchen", b_kor: "주방에서", c_en: ["without permission"], c_kor: ["허락 없이는"] },
        { vBase: "teach", s: "You", p: "의문", io: "her", io_kor: "그녀에게", do: "swimming", do_kor: "수영을", kor: { 현재:"가르쳐주니?", 과거:"가르쳐주었니?", 미래:"가르쳐줄까?" }, s_kor: "너는", b_en: "at the pool", b_kor: "수영장에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "teach", s: "The boy", p: "긍정", io: "his dog", io_kor: "그의 개에게", do: "a new trick", do_kor: "새 묘기를", kor: { 현재:"가르친다.", 과거:"가르쳤다.", 미래:"가르칠 것이다." }, s_kor: "그 소년은", b_en: "in the yard", b_kor: "마당에서", c_en: ["patiently"], c_kor: ["참을성 있게"] },
        { vBase: "teach", s: "My dad", p: "부정", io: "me", io_kor: "나에게", do: "driving", do_kor: "운전을", kor: { 현재:"가르쳐주지 않으신다.", 과거:"가르쳐주지 않으셨다.", 미래:"가르쳐주지 않으실 것이다." }, s_kor: "나의 아빠는", b_en: "on the busy road", b_kor: "복잡한 도로에서", c_en: ["for my safety"], c_kor: ["나의 안전을 위해"] },
        { vBase: "teach", s: "I", p: "의문", io: "them", io_kor: "그들에게", do: "Korean history", do_kor: "한국 역사를", kor: { 현재:"가르치니?", 과거:"가르쳤니?", 미래:"가르칠까?" }, s_kor: "내가", b_en: "in the online class", b_kor: "온라인 수업에서", c_en: ["every Friday"], c_kor: ["매주 금요일마다"] },
        { vBase: "teach", s: "I", p: "긍정", io: "my brother", io_kor: "내 남동생에게", do: "chess", do_kor: "체스를", kor: { 현재:"가르친다.", 과거:"가르쳤다.", 미래:"가르칠 것이다." }, s_kor: "나는", b_en: "in the living room", b_kor: "거실에서", c_en: ["step by step"], c_kor: ["차근차근"] },
        { vBase: "teach", s: "She", p: "부정", io: "the students", io_kor: "학생들에게", do: "grammar", do_kor: "문법을", kor: { 현재:"가르치지 않는다.", 과거:"가르치지 않았다.", 미래:"가르치지 않을 것이다." }, s_kor: "그녀는", b_en: "in this term", b_kor: "이번 학기에는", c_en: ["sadly"], c_kor: ["아쉽게도"] },
        { vBase: "teach", s: "He", p: "의문", io: "the kids", io_kor: "아이들에게", do: "art", do_kor: "미술을", kor: { 현재:"가르쳐주니?", 과거:"가르쳐주었니?", 미래:"가르쳐줄까?" }, s_kor: "그는", b_en: "at the local center", b_kor: "지역 센터에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "teach", s: "They", p: "긍정", io: "the beginners", io_kor: "초보자들에게", do: "basic coding", do_kor: "기초 코딩을", kor: { 현재:"가르쳐준다.", 과거:"가르쳐주었다.", 미래:"가르쳐줄 것이다." }, s_kor: "그들은", b_en: "on the website", b_kor: "웹사이트에서", c_en: ["easily"], c_kor: ["쉽게"] },
        { vBase: "teach", s: "We", p: "부정", io: "the foreigners", io_kor: "외국인들에게", do: "slang", do_kor: "속어를", kor: { 현재:"가르쳐주지 않는다.", 과거:"가르쳐주지 않았다.", 미래:"가르쳐주지 않을 것이다." }, s_kor: "우리는", b_en: "in the regular class", b_kor: "정규 수업에서는", c_en: ["for a reason"], c_kor: ["이유가 있어서"] },
        { vBase: "teach", s: "You", p: "의문", io: "your friend", io_kor: "너의 친구에게", do: "piano", do_kor: "피아노를", kor: { 현재:"가르쳐주니?", 과거:"가르쳐주었니?", 미래:"가르쳐줄까?" }, s_kor: "너는", b_en: "after school", b_kor: "방과 후에", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "teach", s: "The teachers", p: "긍정", io: "the children", io_kor: "아이들에게", do: "good manners", do_kor: "좋은 예절을", kor: { 현재:"가르친다.", 과거:"가르쳤다.", 미래:"가르칠 것이다." }, s_kor: "선생님들은", b_en: "at the school", b_kor: "학교에서", c_en: ["with patience"], c_kor: ["인내심을 가지고"] },
        { vBase: "teach", s: "The experts", p: "부정", io: "the public", io_kor: "대중에게", do: "false information", do_kor: "거짓 정보를", kor: { 현재:"가르치지 않는다.", 과거:"가르치지 않았다.", 미래:"가르치지 않을 것이다." }, s_kor: "전문가들은", b_en: "on TV", b_kor: "TV에서", c_en: ["strictly"], c_kor: ["엄격하게"] },
        { vBase: "teach", s: "My mom", p: "의문", io: "my sister", io_kor: "내 여동생에게", do: "cooking", do_kor: "요리를", kor: { 현재:"가르쳐주시니?", 과거:"가르쳐주셨니?", 미래:"가르쳐주실까?" }, s_kor: "나의 엄마는", b_en: "in the kitchen", b_kor: "부엌에서", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "teach", s: "I", p: "긍정", io: "the team", io_kor: "팀에게", do: "a new strategy", do_kor: "새 전략을", kor: { 현재:"가르친다.", 과거:"가르쳤다.", 미래:"가르칠 것이다." }, s_kor: "나는", b_en: "for the next game", b_kor: "다음 경기를 위해", c_en: ["confidently"], c_kor: ["자신감 있게"] },
        { vBase: "teach", s: "She", p: "부정", io: "her parrot", io_kor: "그녀의 앵무새에게", do: "bad words", do_kor: "나쁜 말들을", kor: { 현재:"가르치지 않는다.", 과거:"가르치지 않았다.", 미래:"가르치지 않을 것이다." }, s_kor: "그녀는", b_en: "in the cage", b_kor: "새장 안에서", c_en: ["for any reason"], c_kor: ["어떤 이유에서든"] },
        { vBase: "teach", s: "He", p: "의문", io: "the old man", io_kor: "그 노인에게", do: "how to use a smartphone", do_kor: "스마트폰 사용법을", kor: { 현재:"가르쳐주니?", 과거:"가르쳐주었니?", 미래:"가르쳐줄까?" }, s_kor: "그는", b_en: "at the community center", b_kor: "주민 센터에서", c_en: ["kindly"], c_kor: ["친절하게"] },
        { vBase: "teach", s: "They", p: "긍정", io: "the staff", io_kor: "직원들에게", do: "safety rules", do_kor: "안전 수칙을", kor: { 현재:"가르쳐준다.", 과거:"가르쳐주었다.", 미래:"가르쳐줄 것이다." }, s_kor: "그들은", b_en: "in the factory", b_kor: "공장에서", c_en: [ADV.TY_EN], c_kor: [ADV.TY_KR] },
        { vBase: "teach", s: "We", p: "부정", io: "the new members", io_kor: "새 회원들에게", do: "the hard techniques", do_kor: "어려운 기술들을", kor: { 현재:"가르쳐주지 않는다.", 과거:"가르쳐주지 않았다.", 미래:"가르쳐주지 않을 것이다." }, s_kor: "우리는", b_en: "in the first week", b_kor: "첫 주에는", c_en: ["for their motivation"], c_kor: ["그들의 동기부여를 위해"] },
        { vBase: "teach", s: "You", p: "의문", io: "the child", io_kor: "그 아이에게", do: "English", do_kor: "영어를", kor: { 현재:"가르쳐주니?", 과거:"가르쳐주었니?", 미래:"가르쳐줄까?" }, s_kor: "너는", b_en: "at home", b_kor: "집에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "teach", s: "The experts", p: "긍정", io: "the farmers", io_kor: "농부들에게", do: "a new farming method", do_kor: "새로운 농법을", kor: { 현재:"가르쳐준다.", 과거:"가르쳐주었다.", 미래:"가르쳐줄 것이다." }, s_kor: "전문가들은", b_en: "in the village", b_kor: "마을에서", c_en: ["passionately"], c_kor: ["열정적으로"] },
        { vBase: "teach", s: "The students", p: "부정", io: "the teacher", io_kor: "선생님에게", do: "anything new", do_kor: "어떤 새로운 것도", kor: { 현재:"가르쳐주지 못한다.", 과거:"가르쳐주지 못했다.", 미래:"가르쳐주지 못할 것이다." }, s_kor: "그 학생들은", b_en: "in this specific field", b_kor: "이 특정 분야에서는", c_en: ["obviously"], c_kor: ["분명히"] },
        { vBase: "teach", s: "I", p: "의문", io: "my dog", io_kor: "나의 개에게", do: "the sit command", do_kor: "앉아 명령을", kor: { 현재:"가르치니?", 과거:"가르쳤니?", 미래:"가르칠까?" }, s_kor: "내가", b_en: "with a snack", b_kor: "간식과 함께", c_en: ["patiently"], c_kor: ["인내심을 가지고"] }
    ];
        return processRawRows4(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    show: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The children", "The girls", "The members"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
        { vBase: "show", s: "I", p: "긍정", io: "him", io_kor: "그에게", do: "my new car", do_kor: "나의 새 차를", kor: { 현재:"보여준다.", 과거:"보여주었다.", 미래:"보여줄 것이다." }, s_kor: "나는", b_en: "in the garage", b_kor: "차고에서", c_en: ["proudly"], c_kor: ["자랑스럽게"] },
        { vBase: "show", s: "She", p: "부정", io: "us", io_kor: "우리에게", do: "her diary", do_kor: "그녀의 일기장을", kor: { 현재:"보여주지 않는다.", 과거:"보여주지 않았다.", 미래:"보여주지 않을 것이다." }, s_kor: "그녀는", b_en: "in her room", b_kor: "그녀의 방에서", c_en: ["for any reason"], c_kor: ["어떤 이유에서든"] },
        { vBase: "show", s: "He", p: "의문", io: "you", io_kor: "너에게", do: "the map", do_kor: "그 지도를", kor: { 현재:"보여주니?", 과거:"보여주었니?", 미래:"보여줄까?" }, s_kor: "그는", b_en: "for the trip", b_kor: "여행을 위해", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "show", s: "They", p: "긍정", io: "me", io_kor: "나에게", do: "a magic trick", do_kor: "마술을", kor: { 현재:"보여준다.", 과거:"보여주었다.", 미래:"보여줄 것이다." }, s_kor: "그들은", b_en: "at the party", b_kor: "파티에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "show", s: "We", p: "부정", io: "them", io_kor: "그들에게", do: "the final design", do_kor: "최종 디자인을", kor: { 현재:"보여주지 않는다.", 과거:"보여주지 않았다.", 미래:"보여주지 않을 것이다." }, s_kor: "우리는", b_en: "before the meeting", b_kor: "회의 전에", c_en: ["for security"], c_kor: ["보안을 위해"] },
        { vBase: "show", s: "You", p: "의문", io: "her", io_kor: "그녀에게", do: "your passport", do_kor: "너의 여권을", kor: { 현재:"보여주니?", 과거:"보여주었니?", 미래:"보여줄까?" }, s_kor: "너는", b_en: "at the airport", b_kor: "공항에서", c_en: ["for check-in"], c_kor: ["체크인을 위해"] },
        { vBase: "show", s: "The boy", p: "긍정", io: "his mom", io_kor: "그의 엄마에게", do: "a perfect score", do_kor: "만점을", kor: { 현재:"보여준다.", 과거:"보여주었다.", 미래:"보여줄 것이다." }, s_kor: "그 소년은", b_en: "on the test", b_kor: "시험에서 받은", c_en: ["with a big smile"], c_kor: ["환한 미소와 함께"] },
        { vBase: "show", s: "My dad", p: "부정", io: "me", io_kor: "나에게", do: "his weakness", do_kor: "그의 약점을", kor: { 현재:"보여주지 않으신다.", 과거:"보여주지 않으셨다.", 미래:"보여주지 않으실 것이다." }, s_kor: "나의 아빠는", b_en: "in front of the family", b_kor: "가족들 앞에서", c_en: ["most of the time"], c_kor: ["보통은"] },
        { vBase: "show", s: "I", p: "의문", io: "the doctor", io_kor: "의사에게", do: "my painful arm", do_kor: "나의 아픈 팔을", kor: { 현재:"보여주니?", 과거:"보여주었니?", 미래:"보여줄까?" }, s_kor: "내가", b_en: "in the hospital", b_kor: "병원에서", c_en: ["honestly"], c_kor: ["솔직하게"] },
        { vBase: "show", s: "I", p: "긍정", io: "my sister", io_kor: "내 여동생에게", do: "a funny picture", do_kor: "재미있는 사진을", kor: { 현재:"보여준다.", 과거:"보여주었다.", 미래:"보여줄 것이다." }, s_kor: "나는", b_en: "on my phone", b_kor: "나의 폰으로", c_en: ["with a laugh"], c_kor: ["웃음과 함께"] },
        { vBase: "show", s: "She", p: "부정", io: "the boss", io_kor: "사장님에게", do: "the mistake", do_kor: "그 실수를", kor: { 현재:"보여주지 않는다.", 과거:"보여주지 않았다.", 미래:"보여주지 않을 것이다." }, s_kor: "그녀는", b_en: "in the report", b_kor: "보고서에 있는", c_en: ["out of fear"], c_kor: ["두려움 때문에"] },
        { vBase: "show", s: "He", p: "의문", io: "his friend", io_kor: "그의 친구에게", do: "the hidden room", do_kor: "숨겨진 방을", kor: { 현재:"보여주니?", 과거:"보여주었니?", 미래:"보여줄까?" }, s_kor: "그는", b_en: "in the basement", b_kor: "지하실에 있는", c_en: ["secretly"], c_kor: ["비밀스럽게"] },
        { vBase: "show", s: "They", p: "긍정", io: "the guests", io_kor: "손님들에게", do: "the beautiful garden", do_kor: "아름다운 정원을", kor: { 현재:"보여준다.", 과거:"보여주었다.", 미래:"보여줄 것이다." }, s_kor: "그들은", b_en: "behind the house", b_kor: "집 뒤에 있는", c_en: ["proudly"], c_kor: ["자랑스럽게"] },
        { vBase: "show", s: "We", p: "부정", io: "the competitor", io_kor: "경쟁자에게", do: "our new product", do_kor: "우리의 새 제품을", kor: { 현재:"보여주지 않는다.", 과거:"보여주지 않았다.", 미래:"보여주지 않을 것이다." }, s_kor: "우리는", b_en: "before the launch", b_kor: "출시 전에는", c_en: ["for any reason"], c_kor: ["어떤 이유에서든"] },
        { vBase: "show", s: "You", p: "의문", io: "the police", io_kor: "경찰에게", do: "your ID card", do_kor: "너의 신분증을", kor: { 현재:"보여주니?", 과거:"보여주었니?", 미래:"보여줄까?" }, s_kor: "너는", b_en: "on the street", b_kor: "거리에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "show", s: "The girls", p: "긍정", io: "the teacher", io_kor: "선생님에게", do: "their art project", do_kor: "그들의 미술 프로젝트를", kor: { 현재:"보여준다.", 과거:"보여주었다.", 미래:"보여줄 것이다." }, s_kor: "소녀들은", b_en: "in the classroom", b_kor: "교실에서", c_en: ["excitedly"], c_kor: ["신나게"] },
        { vBase: "show", s: "The members", p: "부정", io: "the public", io_kor: "대중에게", do: "the secret document", do_kor: "그 비밀 문서를", kor: { 현재:"보여주지 않는다.", 과거:"보여주지 않았다.", 미래:"보여주지 않을 것이다." }, s_kor: "회원들은", b_en: "at this moment", b_kor: "이 순간에는", c_en: ["strictly"], c_kor: ["엄격하게"] },
        { vBase: "show", s: "My mom", p: "의문", io: "the neighbor", io_kor: "이웃에게", do: "the family album", do_kor: "가족 앨범을", kor: { 현재:"보여주시니?", 과거:"보여주셨니?", 미래:"보여주실까?" }, s_kor: "나의 엄마는", b_en: "in the living room", b_kor: "거실에서", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "show", s: "I", p: "긍정", io: "the tourists", io_kor: "관광객들에게", do: "the famous painting", do_kor: "그 유명한 그림을", kor: { 현재:"보여준다.", 과거:"보여주었다.", 미래:"보여줄 것이다." }, s_kor: "나는", b_en: "in the museum", b_kor: "박물관에서", c_en: ["kindly"], c_kor: ["친절하게"] },
        { vBase: "show", s: "She", p: "부정", io: "her parents", io_kor: "그녀의 부모님에게", do: "her bad grades", do_kor: "그녀의 나쁜 성적을", kor: { 현재:"보여주지 않는다.", 과거:"보여주지 않았다.", 미래:"보여주지 않을 것이다." }, s_kor: "그녀는", b_en: "from the test", b_kor: "시험에서 받은", c_en: ["sadly"], c_kor: ["슬프게도"] },
        { vBase: "show", s: "He", p: "의문", io: "the audience", io_kor: "관객에게", do: "his best performance", do_kor: "그의 최고의 공연을", kor: { 현재:"보여주니?", 과거:"보여주었니?", 미래:"보여줄까?" }, s_kor: "그는", b_en: "on the stage", b_kor: "무대 위에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "show", s: "They", p: "긍정", io: "us", io_kor: "우리에게", do: "the right direction", do_kor: "올바른 방향을", kor: { 현재:"보여준다.", 과거:"보여주었다.", 미래:"보여줄 것이다." }, s_kor: "그들은", b_en: "on the map", b_kor: "지도 상에서", c_en: ["clearly"], c_kor: ["명확하게"] },
        { vBase: "show", s: "We", p: "부정", io: "the kids", io_kor: "아이들에게", do: "violent movies", do_kor: "폭력적인 영화들을", kor: { 현재:"보여주지 않는다.", 과거:"보여주지 않았다.", 미래:"보여주지 않을 것이다." }, s_kor: "우리는", b_en: "at home", b_kor: "집에서", c_en: ["for their minds"], c_kor: ["그들의 정서를 위해"] },
        { vBase: "show", s: "You", p: "의문", io: "the manager", io_kor: "매니저에게", do: "the sales record", do_kor: "판매 기록을", kor: { 현재:"보여주니?", 과거:"보여주었니?", 미래:"보여줄까?" }, s_kor: "너는", b_en: "in the office", b_kor: "사무실에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "show", s: "The children", p: "긍정", io: "the teacher", io_kor: "선생님에게", do: "their homework", do_kor: "그들의 숙제를", kor: { 현재:"보여준다.", 과거:"보여주었다.", 미래:"보여줄 것이다." }, s_kor: "아이들은", b_en: "in the morning", b_kor: "아침에", c_en: ["proudly"], c_kor: ["자랑스럽게"] },
        { vBase: "show", s: "The company", p: "부정", io: "the public", io_kor: "대중에게", do: "the real profit", do_kor: "진짜 수익을", kor: { 현재:"보여주지 않는다.", 과거:"보여주지 않았다.", 미래:"보여주지 않을 것이다." }, s_kor: "그 회사는", b_en: "this year", b_kor: "올해에는", c_en: ["for a reason"], c_kor: ["이유가 있어서"] },
        { vBase: "show", s: "I", p: "의문", io: "my dog", io_kor: "나의 개에게", do: "a new toy", do_kor: "새 장난감을", kor: { 현재:"보여주니?", 과거:"보여주었니?", 미래:"보여줄까?" }, s_kor: "내가", b_en: "in the living room", b_kor: "거실에서", c_en: ["excitedly"], c_kor: ["신나게"] }
    ];
        return processRawRows4(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    make: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The girls", "The workers"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
        { vBase: "make", s: "I", p: "긍정", io: "him", io_kor: "그에게", do: "a delicious sandwich", do_kor: "맛있는 샌드위치를", kor: { 현재:"만들어 준다.", 과거:"만들어 주었다.", 미래:"만들어 줄 것이다." }, s_kor: "나는", b_en: "for his lunch", b_kor: "그의 점심을 위해", c_en: ["in the kitchen"], c_kor: ["부엌에서"] },
        { vBase: "make", s: "She", p: "부정", io: "us", io_kor: "우리에게", do: "hot tea", do_kor: "따뜻한 차를", kor: { 현재:"만들어 주지 않는다.", 과거:"만들어 주지 않았다.", 미래:"만들어 주지 않을 것이다." }, s_kor: "그녀는", b_en: "in the morning", b_kor: "아침에", c_en: ["due to busy schedule"], c_kor: ["바쁜 일정 때문에"] },
        { vBase: "make", s: "He", p: "의문", io: "you", io_kor: "너에게", do: "a wooden toy", do_kor: "나무 장난감을", kor: { 현재:"만들어 주니?", 과거:"만들어 주었니?", 미래:"만들어 줄까?" }, s_kor: "그는", b_en: "in his workshop", b_kor: "그의 작업장에서", c_en: ["with care"], c_kor: ["정성스럽게"] },
        { vBase: "make", s: "They", p: "긍정", io: "me", io_kor: "나에게", do: "a big cake", do_kor: "큰 케이크를", kor: { 현재:"만들어 준다.", 과거:"만들어 주었다.", 미래:"만들어 줄 것이다." }, s_kor: "그들은", b_en: "for my birthday", b_kor: "나의 생일을 위해", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "make", s: "We", p: "부정", io: "them", io_kor: "그들에게", do: "false promises", do_kor: "거짓 약속들을", kor: { 현재:"만들어 주지 않는다.", 과거:"만들어 주지 않았다.", 미래:"만들어 주지 않을 것이다." }, s_kor: "우리는", b_en: "in this company", b_kor: "이 회사에서", c_en: ["for our trust"], c_kor: ["우리의 신뢰를 위해"] },
        { vBase: "make", s: "You", p: "의문", io: "her", io_kor: "그녀에게", do: "a paper boat", do_kor: "종이배를", kor: { 현재:"만들어 주니?", 과거:"만들어 주었니?", 미래:"만들어 줄까?" }, s_kor: "너는", b_en: "at the park", b_kor: "공원에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "make", s: "The boy", p: "긍정", io: "his dad", io_kor: "그의 아빠에게", do: "a special card", do_kor: "특별한 카드를", kor: { 현재:"만들어 준다.", 과거:"만들어 주었다.", 미래:"만들어 줄 것이다." }, s_kor: "그 소년은", b_en: "for Father's Day", b_kor: "아버지의 날을 위해", c_en: ["secretly"], c_kor: ["비밀스럽게"] },
        { vBase: "make", s: "My mom", p: "부정", io: "me", io_kor: "나에게", do: "sweet desserts", do_kor: "달콤한 디저트를", kor: { 현재:"만들어 주지 않으신다.", 과거:"만들어 주지 않으셨다.", 미래:"만들어 주지 않으실 것이다." }, s_kor: "나의 엄마는", b_en: "after dinner", b_kor: "저녁 식사 후에", c_en: ["for my diet"], c_kor: ["나의 다이어트를 위해"] },
        { vBase: "make", s: "I", p: "의문", io: "the guest", io_kor: "손님에게", do: "a warm bed", do_kor: "따뜻한 잠자리를", kor: { 현재:"만들어 주니?", 과거:"만들어 주었니?", 미래:"만들어 줄까?" }, s_kor: "내가", b_en: "in the guest room", b_kor: "손님방에", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "make", s: "I", p: "긍정", io: "my friend", io_kor: "내 친구에게", do: "a cup of coffee", do_kor: "커피 한 잔을", kor: { 현재:"만들어 준다.", 과거:"만들어 주었다.", 미래:"만들어 줄 것이다." }, s_kor: "나는", b_en: "in the cafe", b_kor: "카페에서", c_en: ["warmly"], c_kor: ["따뜻하게"] },
        { vBase: "make", s: "She", p: "부정", io: "the dog", io_kor: "개에게", do: "a small house", do_kor: "작은 집을", kor: { 현재:"만들어 주지 않는다.", 과거:"만들어 주지 않았다.", 미래:"만들어 주지 않을 것이다." }, s_kor: "그녀는", b_en: "in the yard", b_kor: "마당에", c_en: ["due to lack of time"], c_kor: ["시간 부족 때문에"] },
        { vBase: "make", s: "He", p: "의문", io: "his son", io_kor: "그의 아들에게", do: "a cool robot", do_kor: "멋진 로봇을", kor: { 현재:"만들어 주니?", 과거:"만들어 주었니?", 미래:"만들어 줄까?" }, s_kor: "그는", b_en: "from old boxes", b_kor: "오래된 상자들로", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "make", s: "They", p: "긍정", io: "us", io_kor: "우리에게", do: "a perfect plan", do_kor: "완벽한 계획을", kor: { 현재:"만들어 준다.", 과거:"만들어 주었다.", 미래:"만들어 줄 것이다." }, s_kor: "그들은", b_en: "for the trip", b_kor: "여행을 위해", c_en: ["carefully"], c_kor: ["주의 깊게"] },
        { vBase: "make", s: "We", p: "부정", io: "the customers", io_kor: "고객들에게", do: "any trouble", do_kor: "어떤 문제도", kor: { 현재:"만들어 주지 않는다.", 과거:"만들어 주지 않았다.", 미래:"만들어 주지 않을 것이다." }, s_kor: "우리는", b_en: "in the store", b_kor: "가게에서", c_en: ["for any reason"], c_kor: ["어떤 이유에서든"] },
        { vBase: "make", s: "You", p: "의문", io: "your mom", io_kor: "너의 엄마에게", do: "a nice dinner", do_kor: "멋진 저녁식사를", kor: { 현재:"만들어 주니?", 과거:"만들어 주었니?", 미래:"만들어 줄까?" }, s_kor: "너는", b_en: "on Mother's Day", b_kor: "어머니의 날에", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "make", s: "The girls", p: "긍정", io: "the teacher", io_kor: "선생님에게", do: "a thank-you card", do_kor: "감사 카드를", kor: { 현재:"만들어 준다.", 과거:"만들어 주었다.", 미래:"만들어 줄 것이다." }, s_kor: "소녀들은", b_en: "after the class", b_kor: "수업 후에", c_en: ["secretly"], c_kor: ["비밀스럽게"] },
        { vBase: "make", s: "The workers", p: "부정", io: "the boss", io_kor: "사장님에게", do: "a lot of money", do_kor: "많은 돈을", kor: { 현재:"만들어 주지 못한다.", 과거:"만들어 주지 못했다.", 미래:"만들어 주지 못할 것이다." }, s_kor: "노동자들은", b_en: "this month", b_kor: "이번 달에는", c_en: ["due to the bad market"], c_kor: ["나쁜 시장 상황 때문에"] },
        { vBase: "make", s: "My dad", p: "의문", io: "me", io_kor: "나에게", do: "a strong desk", do_kor: "튼튼한 책상을", kor: { 현재:"만들어 주시니?", 과거:"만들어 주셨니?", 미래:"만들어 주실까?" }, s_kor: "나의 아빠는", b_en: "in the garage", b_kor: "차고에서", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "make", s: "I", p: "긍정", io: "the baby", io_kor: "아기에게", do: "warm milk", do_kor: "따뜻한 우유를", kor: { 현재:"만들어 준다.", 과거:"만들어 주었다.", 미래:"만들어 줄 것이다." }, s_kor: "나는", b_en: "in the night", b_kor: "밤중에", c_en: ["quickly"], c_kor: ["빠르게"] },
        { vBase: "make", s: "She", p: "부정", io: "her friend", io_kor: "그녀의 친구에게", do: "a quick meal", do_kor: "간단한 식사를", kor: { 현재:"만들어 주지 않는다.", 과거:"만들어 주지 않았다.", 미래:"만들어 주지 않을 것이다." }, s_kor: "그녀는", b_en: "due to her work", b_kor: "그녀의 일 때문에", c_en: ["unfortunately"], c_kor: ["불행하게도"] },
        { vBase: "make", s: "He", p: "의문", io: "the team", io_kor: "팀에게", do: "a great logo", do_kor: "훌륭한 로고를", kor: { 현재:"만들어 주니?", 과거:"만들어 주었니?", 미래:"만들어 줄까?" }, s_kor: "그는", b_en: "for the project", b_kor: "프로젝트를 위해", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "make", s: "They", p: "긍정", io: "the poor", io_kor: "가난한 사람들에게", do: "winter clothes", do_kor: "겨울옷을", kor: { 현재:"만들어 준다.", 과거:"만들어 주었다.", 미래:"만들어 줄 것이다." }, s_kor: "그들은", b_en: "at the center", b_kor: "센터에서", c_en: [ADV.TY_EN], c_kor: [ADV.TY_KR] },
        { vBase: "make", s: "We", p: "부정", io: "the angry man", io_kor: "화난 남자에게", do: "a new problem", do_kor: "새로운 문제를", kor: { 현재:"만들어 주지 않는다.", 과거:"만들어 주지 않았다.", 미래:"만들어 주지 않을 것이다." }, s_kor: "우리는", b_en: "in the meeting", b_kor: "회의에서", c_en: ["carefully"], c_kor: ["주의 깊게"] },
        { vBase: "make", s: "You", p: "의문", io: "your sister", io_kor: "너의 여동생에게", do: "a beautiful crown", do_kor: "아름다운 왕관을", kor: { 현재:"만들어 주니?", 과거:"만들어 주었니?", 미래:"만들어 줄까?" }, s_kor: "너는", b_en: "with flowers", b_kor: "꽃들로", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "make", s: "The boss", p: "긍정", io: "us", io_kor: "우리에게", do: "a good offer", do_kor: "좋은 제안을", kor: { 현재:"만들어 준다.", 과거:"만들어 주었다.", 미래:"만들어 줄 것이다." }, s_kor: "사장님은", b_en: "in the office", b_kor: "사무실에서", c_en: ["finally"], c_kor: ["마침내"] },
        { vBase: "make", s: "The students", p: "부정", io: "the teacher", io_kor: "선생님에게", do: "a hard time", do_kor: "힘든 시간을", kor: { 현재:"만들어 주지 않는다.", 과거:"만들어 주지 않았다.", 미래:"만들어 주지 않을 것이다." }, s_kor: "그 학생들은", b_en: "in the class", b_kor: "수업 중에", c_en: ["for any reason"], c_kor: ["이제는 더 이상"] },
        { vBase: "make", s: "I", p: "의문", io: "my cat", io_kor: "나의 고양이에게", do: "a fun toy", do_kor: "재미있는 장난감을", kor: { 현재:"만들어 주니?", 과거:"만들어 주었니?", 미래:"만들어 줄까?" }, s_kor: "내가", b_en: "with a string", b_kor: "끈을 가지고", c_en: ["patiently"], c_kor: ["인내심을 가지고"] }
    ];
        return processRawRows4(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    offer: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The companies", "The schools"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
        { vBase: "offer", s: "I", p: "긍정", io: "him", io_kor: "그에게", do: "a good job", do_kor: "좋은 일자리를", kor: { 현재:"제공한다.", 과거:"제공했다.", 미래:"제공할 것이다." }, s_kor: "나는", b_en: "in my company", b_kor: "나의 회사에서", c_en: ["after the interview"], c_kor: ["면접 후에"] },
        { vBase: "offer", s: "She", p: "부정", io: "us", io_kor: "우리에게", do: "any help", do_kor: "어떤 도움도", kor: { 현재:"제공하지 않는다.", 과거:"제공하지 않았다.", 미래:"제공하지 않을 것이다." }, s_kor: "그녀는", b_en: "in this difficult situation", b_kor: "이 어려운 상황에서", c_en: ["unfortunately"], c_kor: ["불행하게도"] },
        { vBase: "offer", s: "He", p: "의문", io: "you", io_kor: "너에게", do: "a free drink", do_kor: "무료 음료를", kor: { 현재:"제공하니?", 과거:"제공했니?", 미래:"제공할까?" }, s_kor: "그는", b_en: "at the cafe", b_kor: "카페에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "offer", s: "They", p: "긍정", io: "me", io_kor: "나에게", do: "a special discount", do_kor: "특별 할인을", kor: { 현재:"제공한다.", 과거:"제공했다.", 미래:"제공할 것이다." }, s_kor: "그들은", b_en: "at the store", b_kor: "매장에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "offer", s: "We", p: "부정", io: "them", io_kor: "그들에게", do: "free service", do_kor: "무료 서비스를", kor: { 현재:"제공하지 않는다.", 과거:"제공하지 않았다.", 미래:"제공하지 않을 것이다." }, s_kor: "우리는", b_en: "after the warranty period", b_kor: "보증 기간 이후에는", c_en: ["most of the time"], c_kor: ["대부분의 경우에"] },
        { vBase: "offer", s: "You", p: "의문", io: "her", io_kor: "그녀에게", do: "a ride", do_kor: "차편을", kor: { 현재:"제공하니?", 과거:"제공했니?", 미래:"제공할까?" }, s_kor: "너는", b_en: "to the station", b_kor: "기차역까지", c_en: ["in the heavy rain"], c_kor: ["폭우 속에서"] },
        { vBase: "offer", s: "The boy", p: "긍정", io: "his friend", io_kor: "그의 친구에게", do: "an apology", do_kor: "사과를", kor: { 현재:"제공한다.", 과거:"제공했다.", 미래:"제공할 것이다." }, s_kor: "그 소년은", b_en: "for his mistake", b_kor: "그의 실수에 대해", c_en: ["sincerely"], c_kor: ["진심으로"] },
        { vBase: "offer", s: "My dad", p: "부정", io: "me", io_kor: "나에게", do: "more money", do_kor: "더 많은 돈을", kor: { 현재:"제공하지 않으신다.", 과거:"제공하지 않으셨다.", 미래:"제공하지 않으실 것이다." }, s_kor: "나의 아빠는", b_en: "for unnecessary things", b_kor: "불필요한 것들을 위해서는", c_en: ["strictly"], c_kor: ["엄격하게"] },
        { vBase: "offer", s: "I", p: "의문", io: "the guest", io_kor: "손님에게", do: "a comfortable seat", do_kor: "편안한 자리를", kor: { 현재:"제공하니?", 과거:"제공했니?", 미래:"제공할까?" }, s_kor: "내가", b_en: "in the living room", b_kor: "거실에서", c_en: ["politely"], c_kor: ["정중하게"] },
        { vBase: "offer", s: "I", p: "긍정", io: "the poor man", io_kor: "가난한 남자에게", do: "some warm food", do_kor: "약간의 따뜻한 음식을", kor: { 현재:"제공한다.", 과거:"제공했다.", 미래:"제공할 것이다." }, s_kor: "나는", b_en: "on the street", b_kor: "거리에서", c_en: ["kindly"], c_kor: ["친절하게"] },
        { vBase: "offer", s: "She", p: "부정", io: "the customer", io_kor: "고객에게", do: "a full refund", do_kor: "전액 환불을", kor: { 현재:"제공하지 않는다.", 과거:"제공하지 않았다.", 미래:"제공하지 않을 것이다." }, s_kor: "그녀는", b_en: "at the counter", b_kor: "계산대에서", c_en: ["without a receipt"], c_kor: ["영수증 없이는"] },
        { vBase: "offer", s: "He", p: "의문", io: "his staff", io_kor: "그의 직원들에게", do: "a long vacation", do_kor: "긴 휴가를", kor: { 현재:"제공하니?", 과거:"제공했니?", 미래:"제공할까?" }, s_kor: "그는", b_en: "in the summer", b_kor: "여름에", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "offer", s: "They", p: "긍정", io: "the winner", io_kor: "우승자에게", do: "a huge prize", do_kor: "큰 상을", kor: { 현재:"제공한다.", 과거:"제공했다.", 미래:"제공할 것이다." }, s_kor: "그들은", b_en: "on the stage", b_kor: "무대 위에서", c_en: ["proudly"], c_kor: ["자랑스럽게"] },
        { vBase: "offer", s: "We", p: "부정", io: "the members", io_kor: "회원들에게", do: "free parking", do_kor: "무료 주차를", kor: { 현재:"제공하지 않는다.", 과거:"제공하지 않았다.", 미래:"제공하지 않을 것이다." }, s_kor: "우리는", b_en: "at the gym", b_kor: "체육관에서", c_en: ["all the time"], c_kor: ["이제는 더 이상"] },
        { vBase: "offer", s: "You", p: "의문", io: "the old lady", io_kor: "할머니에게", do: "your seat", do_kor: "너의 자리를", kor: { 현재:"제공하니?", 과거:"제공했니?", 미래:"제공할까?" }, s_kor: "너는", b_en: "on the bus", b_kor: "버스에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "offer", s: "The companies", p: "긍정", io: "the students", io_kor: "학생들에게", do: "an internship", do_kor: "인턴십을", kor: { 현재:"제공한다.", 과거:"제공했다.", 미래:"제공할 것이다." }, s_kor: "회사들은", b_en: "every year", b_kor: "매년", c_en: ["for their future"], c_kor: ["그들의 미래를 위해"] },
        { vBase: "offer", s: "The schools", p: "부정", io: "the kids", io_kor: "아이들에게", do: "unhealthy food", do_kor: "건강에 해로운 음식을", kor: { 현재:"제공하지 않는다.", 과거:"제공하지 않았다.", 미래:"제공하지 않을 것이다." }, s_kor: "학교들은", b_en: "in the cafeteria", b_kor: "구내식당에서", c_en: ["strictly"], c_kor: ["엄격하게"] },
        { vBase: "offer", s: "My mom", p: "의문", io: "the neighbor", io_kor: "이웃에게", do: "fresh cookies", do_kor: "신선한 쿠키를", kor: { 현재:"제공하시니?", 과거:"제공하셨니?", 미래:"제공하실까?" }, s_kor: "나의 엄마는", b_en: "this morning", b_kor: "오늘 아침에", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "offer", s: "I", p: "긍정", io: "the team", io_kor: "팀에게", do: "a better idea", do_kor: "더 나은 아이디어를", kor: { 현재:"제공한다.", 과거:"제공했다.", 미래:"제공할 것이다." }, s_kor: "나는", b_en: "in the meeting", b_kor: "회의에서", c_en: ["confidently"], c_kor: ["자신감 있게"] },
        { vBase: "offer", s: "She", p: "부정", io: "the stranger", io_kor: "낯선 사람에게", do: "her personal information", do_kor: "그녀의 개인 정보를", kor: { 현재:"제공하지 않는다.", 과거:"제공하지 않았다.", 미래:"제공하지 않을 것이다." }, s_kor: "그녀는", b_en: "on the phone", b_kor: "전화상으로", c_en: ["for any reason"], c_kor: ["어떤 이유에서든"] },
        { vBase: "offer", s: "He", p: "의문", io: "the clients", io_kor: "고객들에게", do: "a new contract", do_kor: "새 계약을", kor: { 현재:"제공하니?", 과거:"제공했니?", 미래:"제공할까?" }, s_kor: "그는", b_en: "in the office", b_kor: "사무실에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "offer", s: "They", p: "긍정", io: "the refugees", io_kor: "난민들에게", do: "a safe place", do_kor: "안전한 장소를", kor: { 현재:"제공한다.", 과거:"제공했다.", 미래:"제공할 것이다." }, s_kor: "그들은", b_en: "in the camp", b_kor: "캠프에서", c_en: [ADV.TY_EN], c_kor: [ADV.TY_KR] },
        { vBase: "offer", s: "We", p: "부정", io: "the lazy worker", io_kor: "게으른 직원에게", do: "another chance", do_kor: "또 다른 기회를", kor: { 현재:"제공하지 않는다.", 과거:"제공하지 않았다.", 미래:"제공하지 않을 것이다." }, s_kor: "우리는", b_en: "this time", b_kor: "이번에는", c_en: ["firmly"], c_kor: ["단호하게"] },
        { vBase: "offer", s: "You", p: "의문", io: "your dog", io_kor: "너의 개에게", do: "a special treat", do_kor: "특별한 간식을", kor: { 현재:"제공하니?", 과거:"제공했니?", 미래:"제공할까?" }, s_kor: "너는", b_en: "after the trick", b_kor: "묘기 후에", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "offer", s: "The manager", p: "긍정", io: "the staff", io_kor: "직원들에게", do: "free coffee", do_kor: "무료 커피를", kor: { 현재:"제공한다.", 과거:"제공했다.", 미래:"제공할 것이다." }, s_kor: "매니저는", b_en: "in the break room", b_kor: "휴게실에서", c_en: ["all the time"], c_kor: ["항상"] },
        { vBase: "offer", s: "The company", p: "부정", io: "the users", io_kor: "사용자들에게", do: "free updates", do_kor: "무료 업데이트를", kor: { 현재:"제공하지 않는다.", 과거:"제공하지 않았다.", 미래:"제공하지 않을 것이다." }, s_kor: "그 회사는", b_en: "from next year", b_kor: "내년부터는", c_en: ["unfortunately"], c_kor: ["불행하게도"] },
        { vBase: "offer", s: "I", p: "의문", io: "the boy", io_kor: "그 소년에게", do: "a helping hand", do_kor: "도움의 손길을", kor: { 현재:"제공하니?", 과거:"제공했니?", 미래:"제공할까?" }, s_kor: "내가", b_en: "in the difficult time", b_kor: "어려운 시기에", c_en: ["willingly"], c_kor: ["기꺼이"] }
    ];
        return processRawRows4(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    lend: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The banks", "The girls"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
        { vBase: "lend", s: "I", p: "긍정", io: "him", io_kor: "그에게", do: "my bicycle", do_kor: "나의 자전거를", kor: { 현재:"빌려준다.", 과거:"빌려주었다.", 미래:"빌려줄 것이다." }, s_kor: "나는", b_en: "for the trip", b_kor: "여행을 위해", c_en: ["willingly"], c_kor: ["기꺼이"] },
        { vBase: "lend", s: "She", p: "부정", io: "us", io_kor: "우리에게", do: "her laptop", do_kor: "그녀의 노트북을", kor: { 현재:"빌려주지 않는다.", 과거:"빌려주지 않았다.", 미래:"빌려주지 않을 것이다." }, s_kor: "그녀는", b_en: "in the class", b_kor: "수업 중에", c_en: ["due to security"], c_kor: ["보안 때문에"] },
        { vBase: "lend", s: "He", p: "의문", io: "you", io_kor: "너에게", do: "some money", do_kor: "약간의 돈을", kor: { 현재:"빌려주니?", 과거:"빌려주었니?", 미래:"빌려줄까?" }, s_kor: "그는", b_en: "for the lunch", b_kor: "점심 식사를 위해", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "lend", s: "They", p: "긍정", io: "me", io_kor: "나에게", do: "a useful book", do_kor: "유용한 책을", kor: { 현재:"빌려준다.", 과거:"빌려주었다.", 미래:"빌려줄 것이다." }, s_kor: "그들은", b_en: "from their library", b_kor: "그들의 서재에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "lend", s: "We", p: "부정", io: "them", io_kor: "그들에게", do: "our tools", do_kor: "우리의 도구들을", kor: { 현재:"빌려주지 않는다.", 과거:"빌려주지 않았다.", 미래:"빌려주지 않을 것이다." }, s_kor: "우리는", b_en: "without a promise", b_kor: "약속 없이", c_en: ["in the workshop"], c_kor: ["작업장에서"] },
        { vBase: "lend", s: "You", p: "의문", io: "her", io_kor: "그녀에게", do: "your umbrella", do_kor: "너의 우산을", kor: { 현재:"빌려주니?", 과거:"빌려주었니?", 미래:"빌려줄까?" }, s_kor: "너는", b_en: "in the heavy rain", b_kor: "폭우 속에서", c_en: ["kindly"], c_kor: ["친절하게"] },
        { vBase: "lend", s: "The boy", p: "긍정", io: "his friend", io_kor: "그의 친구에게", do: "an eraser", do_kor: "지우개를", kor: { 현재:"빌려준다.", 과거:"빌려주었다.", 미래:"빌려줄 것이다." }, s_kor: "그 소년은", b_en: "during the test", b_kor: "시험 도중에", c_en: ["quickly"], c_kor: ["빠르게"] },
        { vBase: "lend", s: "My dad", p: "부정", io: "me", io_kor: "나에게", do: "his expensive camera", do_kor: "그의 비싼 카메라를", kor: { 현재:"빌려주지 않으신다.", 과거:"빌려주지 않으셨다.", 미래:"빌려주지 않으실 것이다." }, s_kor: "나의 아빠는", b_en: "for my travel", b_kor: "나의 여행을 위해", c_en: ["due to worry"], c_kor: ["걱정 때문에"] },
        { vBase: "lend", s: "I", p: "의문", io: "the student", io_kor: "그 학생에게", do: "a blue pen", do_kor: "파란색 펜을", kor: { 현재:"빌려주니?", 과거:"빌려주었니?", 미래:"빌려줄까?" }, s_kor: "내가", b_en: "in the library", b_kor: "도서관에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "lend", s: "I", p: "긍정", io: "my sister", io_kor: "내 여동생에게", do: "my jacket", do_kor: "나의 재킷을", kor: { 현재:"빌려준다.", 과거:"빌려주었다.", 미래:"빌려줄 것이다." }, s_kor: "나는", b_en: "in the cold weather", b_kor: "추운 날씨에", c_en: ["willingly"], c_kor: ["기꺼이"] },
        { vBase: "lend", s: "She", p: "부정", io: "the stranger", io_kor: "낯선 사람에게", do: "her phone", do_kor: "그녀의 전화를", kor: { 현재:"빌려주지 않는다.", 과거:"빌려주지 않았다.", 미래:"빌려주지 않을 것이다." }, s_kor: "그녀는", b_en: "on the street", b_kor: "거리에서", c_en: ["for safety"], c_kor: ["안전을 위해"] },
        { vBase: "lend", s: "He", p: "의문", io: "his brother", io_kor: "그의 남동생에게", do: "his car", do_kor: "그의 차를", kor: { 현재:"빌려주니?", 과거:"빌려주었니?", 미래:"빌려줄까?" }, s_kor: "그는", b_en: "for the date", b_kor: "데이트를 위해", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "lend", s: "They", p: "긍정", io: "the team", io_kor: "팀에게", do: "a large space", do_kor: "큰 공간을", kor: { 현재:"빌려준다.", 과거:"빌려주었다.", 미래:"빌려줄 것이다." }, s_kor: "그들은", b_en: "for the practice", b_kor: "연습을 위해", c_en: ["generously"], c_kor: ["관대하게"] },
        { vBase: "lend", s: "We", p: "부정", io: "the lazy boy", io_kor: "게으른 소년에게", do: "our notes", do_kor: "우리의 노트를", kor: { 현재:"빌려주지 않는다.", 과거:"빌려주지 않았다.", 미래:"빌려주지 않을 것이다." }, s_kor: "우리는", b_en: "before the exam", b_kor: "시험 전에", c_en: ["strictly"], c_kor: ["엄격하게"] },
        { vBase: "lend", s: "You", p: "의문", io: "the neighbor", io_kor: "이웃에게", do: "the hammer", do_kor: "망치를", kor: { 현재:"빌려주니?", 과거:"빌려주었니?", 미래:"빌려줄까?" }, s_kor: "너는", b_en: "for the repair", b_kor: "수리를 위해", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "lend", s: "The banks", p: "긍정", io: "the customers", io_kor: "고객들에게", do: "a lot of money", do_kor: "많은 돈을", kor: { 현재:"빌려준다.", 과거:"빌려주었다.", 미래:"빌려줄 것이다." }, s_kor: "은행들은", b_en: "for their business", b_kor: "그들의 사업을 위해", c_en: ["with interest"], c_kor: ["이자와 함께"] },
        { vBase: "lend", s: "The girls", p: "부정", io: "the boys", io_kor: "소년들에게", do: "their makeup", do_kor: "그들의 화장품을", kor: { 현재:"빌려주지 않는다.", 과거:"빌려주지 않았다.", 미래:"빌려주지 않을 것이다." }, s_kor: "소녀들은", b_en: "in the classroom", b_kor: "교실에서", c_en: ["for any reason"], c_kor: ["어떤 이유에서든"] },
        { vBase: "lend", s: "My mom", p: "의문", io: "her friend", io_kor: "그녀의 친구에게", do: "a beautiful dress", do_kor: "아름다운 드레스를", kor: { 현재:"빌려주시니?", 과거:"빌려주셨니?", 미래:"빌려주실까?" }, s_kor: "나의 엄마는", b_en: "for the party", b_kor: "파티를 위해", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "lend", s: "I", p: "긍정", io: "the museum", io_kor: "박물관에", do: "an old painting", do_kor: "오래된 그림을", kor: { 현재:"빌려준다.", 과거:"빌려주었다.", 미래:"빌려줄 것이다." }, s_kor: "나는", b_en: "for the exhibition", b_kor: "전시회를 위해", c_en: ["proudly"], c_kor: ["자랑스럽게"] },
        { vBase: "lend", s: "She", p: "부정", io: "him", io_kor: "그에게", do: "her favorite book", do_kor: "그녀가 가장 좋아하는 책을", kor: { 현재:"빌려주지 않는다.", 과거:"빌려주지 않았다.", 미래:"빌려주지 않을 것이다." }, s_kor: "그녀는", b_en: "for any reason", b_kor: "이제는 더 이상", c_en: ["sadly"], c_kor: ["슬프게도"] },
        { vBase: "lend", s: "He", p: "의문", io: "the chef", io_kor: "요리사에게", do: "his special knife", do_kor: "그의 특별한 칼을", kor: { 현재:"빌려주니?", 과거:"빌려주었니?", 미래:"빌려줄까?" }, s_kor: "그는", b_en: "in the kitchen", b_kor: "주방에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "lend", s: "They", p: "긍정", io: "us", io_kor: "우리에게", do: "their tent", do_kor: "그들의 텐트를", kor: { 현재:"빌려준다.", 과거:"빌려주었다.", 미래:"빌려줄 것이다." }, s_kor: "그들은", b_en: "for the camping", b_kor: "캠핑을 위해", c_en: [ADV.TY_EN], c_kor: [ADV.TY_KR] },
        { vBase: "lend", s: "We", p: "부정", io: "the liar", io_kor: "거짓말쟁이에게", do: "any money", do_kor: "어떤 돈도", kor: { 현재:"빌려주지 않는다.", 과거:"빌려주지 않았다.", 미래:"빌려주지 않을 것이다." }, s_kor: "우리는", b_en: "this time", b_kor: "이번에는", c_en: ["firmly"], c_kor: ["단호하게"] },
        { vBase: "lend", s: "You", p: "의문", io: "your coworker", io_kor: "너의 동료에게", do: "the stapler", do_kor: "스테이플러를", kor: { 현재:"빌려주니?", 과거:"빌려주었니?", 미래:"빌려줄까?" }, s_kor: "너는", b_en: "in the office", b_kor: "사무실에서", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "lend", s: "The library", p: "긍정", io: "the members", io_kor: "회원들에게", do: "three books", do_kor: "세 권의 책을", kor: { 현재:"빌려준다.", 과거:"빌려주었다.", 미래:"빌려줄 것이다." }, s_kor: "도서관은", b_en: "at a time", b_kor: "한 번에", c_en: ["freely"], c_kor: ["자유롭게"] },
        { vBase: "lend", s: "The store", p: "부정", io: "the customers", io_kor: "고객들에게", do: "the shopping carts", do_kor: "쇼핑 카트를", kor: { 현재:"빌려주지 않는다.", 과거:"빌려주지 않았다.", 미래:"빌려주지 않을 것이다." }, s_kor: "그 가게는", b_en: "outside the building", b_kor: "건물 밖으로는", c_en: ["strictly"], c_kor: ["엄격하게"] },
        { vBase: "lend", s: "I", p: "의문", io: "the child", io_kor: "그 아이에게", do: "a warm blanket", do_kor: "따뜻한 담요를", kor: { 현재:"빌려주니?", 과거:"빌려주었니?", 미래:"빌려줄까?" }, s_kor: "내가", b_en: "for the cold night", b_kor: "추운 밤을 위해", c_en: ["kindly"], c_kor: ["친절하게"] }
    ];
        return processRawRows4(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
    promise: {
      standard: (() => {
        const subjPlurals = ["They", "We", "The leaders", "The parents"];
        const TENSES = ["현재", "과거", "미래"];
        const rawRows = [
        { vBase: "promise", s: "I", p: "긍정", io: "him", io_kor: "그에게", do: "a great reward", do_kor: "큰 보상을", kor: { 현재:"약속한다.", 과거:"약속했다.", 미래:"약속할 것이다." }, s_kor: "나는", b_en: "for his hard work", b_kor: "그의 노고에 대해", c_en: ["in the office"], c_kor: ["사무실에서"] },
        { vBase: "promise", s: "She", p: "부정", io: "us", io_kor: "우리에게", do: "an easy test", do_kor: "쉬운 시험을", kor: { 현재:"약속하지 않는다.", 과거:"약속하지 않았다.", 미래:"약속하지 않을 것이다." }, s_kor: "그녀는", b_en: "in the class", b_kor: "수업 중에", c_en: ["to be fair"], c_kor: ["공정하기 위해"] },
        { vBase: "promise", s: "He", p: "의문", io: "you", io_kor: "너에게", do: "a secret gift", do_kor: "비밀 선물을", kor: { 현재:"약속하니?", 과거:"약속했니?", 미래:"약속할까?" }, s_kor: "그는", b_en: "for your birthday", b_kor: "너의 생일을 위해", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "promise", s: "They", p: "긍정", io: "me", io_kor: "나에게", do: "a safe trip", do_kor: "안전한 여행을", kor: { 현재:"약속한다.", 과거:"약속했다.", 미래:"약속할 것이다." }, s_kor: "그들은", b_en: "to the island", b_kor: "섬으로 가는", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "promise", s: "We", p: "부정", io: "them", io_kor: "그들에게", do: "perfect success", do_kor: "완벽한 성공을", kor: { 현재:"약속하지 않는다.", 과거:"약속하지 않았다.", 미래:"약속하지 않을 것이다." }, s_kor: "우리는", b_en: "in this project", b_kor: "이 프로젝트에서", c_en: ["honestly"], c_kor: ["정직하게"] },
        { vBase: "promise", s: "You", p: "의문", io: "her", io_kor: "그녀에게", do: "your help", do_kor: "너의 도움을", kor: { 현재:"약속하니?", 과거:"약속했니?", 미래:"약속할까?" }, s_kor: "너는", b_en: "in the difficult time", b_kor: "어려운 시기에", c_en: ["sincerely"], c_kor: ["진심으로"] },
        { vBase: "promise", s: "The boy", p: "긍정", io: "his mom", io_kor: "그의 엄마에게", do: "better grades", do_kor: "더 나은 성적을", kor: { 현재:"약속한다.", 과거:"약속했다.", 미래:"약속할 것이다." }, s_kor: "그 소년은", b_en: "on the next exam", b_kor: "다음 시험에서", c_en: ["with a firm voice"], c_kor: ["단호한 목소리로"] },
        { vBase: "promise", s: "My dad", p: "부정", io: "me", io_kor: "나에게", do: "a new bicycle", do_kor: "새 자전거를", kor: { 현재:"약속하지 않으신다.", 과거:"약속하지 않으셨다.", 미래:"약속하지 않으실 것이다." }, s_kor: "나의 아빠는", b_en: "for my birthday", b_kor: "내 생일을 위해", c_en: ["due to safety"], c_kor: ["안전 문제 때문에"] },
        { vBase: "promise", s: "I", p: "의문", io: "the team", io_kor: "팀에게", do: "full support", do_kor: "전폭적인 지원을", kor: { 현재:"약속하니?", 과거:"약속했니?", 미래:"약속할까?" }, s_kor: "내가", b_en: "for the final match", b_kor: "결승전을 위해", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "promise", s: "I", p: "긍정", io: "my dog", io_kor: "나의 개에게", do: "a long walk", do_kor: "긴 산책을", kor: { 현재:"약속한다.", 과거:"약속했다.", 미래:"약속할 것이다." }, s_kor: "나는", b_en: "in the park", b_kor: "공원에서", c_en: ["every evening"], c_kor: ["매일 저녁에"] },
        { vBase: "promise", s: "She", p: "부정", io: "the buyer", io_kor: "구매자에게", do: "a huge discount", do_kor: "큰 할인을", kor: { 현재:"약속하지 않는다.", 과거:"약속하지 않았다.", 미래:"약속하지 않을 것이다." }, s_kor: "그녀는", b_en: "at this moment", b_kor: "이 순간에는", c_en: ["firmly"], c_kor: ["단호하게"] },
        { vBase: "promise", s: "He", p: "의문", io: "his fans", io_kor: "그의 팬들에게", do: "a new album", do_kor: "새 앨범을", kor: { 현재:"약속하니?", 과거:"약속했니?", 미래:"약속할까?" }, s_kor: "그는", b_en: "at the concert", b_kor: "콘서트에서", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "promise", s: "They", p: "긍정", io: "the citizens", io_kor: "시민들에게", do: "a cleaner city", do_kor: "더 깨끗한 도시를", kor: { 현재:"약속한다.", 과거:"약속했다.", 미래:"약속할 것이다." }, s_kor: "그들은", b_en: "during the campaign", b_kor: "캠페인 기간 동안", c_en: ["loudly"], c_kor: ["큰 소리로"] },
        { vBase: "promise", s: "We", p: "부정", io: "the bad man", io_kor: "나쁜 남자에게", do: "another chance", do_kor: "또 다른 기회를", kor: { 현재:"약속하지 않는다.", 과거:"약속하지 않았다.", 미래:"약속하지 않을 것이다." }, s_kor: "우리는", b_en: "this time", b_kor: "이번에는", c_en: ["for any reason"], c_kor: ["어떤 이유에서든"] },
        { vBase: "promise", s: "You", p: "의문", io: "your wife", io_kor: "너의 아내에게", do: "an expensive ring", do_kor: "비싼 반지를", kor: { 현재:"약속하니?", 과거:"약속했니?", 미래:"약속할까?" }, s_kor: "너는", b_en: "for the anniversary", b_kor: "기념일을 위해", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "promise", s: "The leaders", p: "긍정", io: "the people", io_kor: "국민들에게", do: "peace", do_kor: "평화를", kor: { 현재:"약속한다.", 과거:"약속했다.", 미래:"약속할 것이다." }, s_kor: "지도자들은", b_en: "on TV", b_kor: "TV에서", c_en: ["confidently"], c_kor: ["자신감 있게"] },
        { vBase: "promise", s: "The parents", p: "부정", io: "the kids", io_kor: "아이들에게", do: "unlimited game time", do_kor: "무제한 게임 시간을", kor: { 현재:"약속하지 않는다.", 과거:"약속하지 않았다.", 미래:"약속하지 않을 것이다." }, s_kor: "부모님은", b_en: "on weekdays", b_kor: "주중에는", c_en: ["strictly"], c_kor: ["엄격하게"] },
        { vBase: "promise", s: "My mom", p: "의문", io: "my sister", io_kor: "내 여동생에게", do: "a cute puppy", do_kor: "귀여운 강아지를", kor: { 현재:"약속하시니?", 과거:"약속하셨니?", 미래:"약속하실까?" }, s_kor: "나의 엄마는", b_en: "for the next year", b_kor: "내년을 위해", c_en: [ADV.TN_EN], c_kor: [ADV.TN_KR] },
        { vBase: "promise", s: "I", p: "긍정", io: "myself", io_kor: "나 자신에게", do: "a better future", do_kor: "더 나은 미래를", kor: { 현재:"약속한다.", 과거:"약속했다.", 미래:"약속할 것이다." }, s_kor: "나는", b_en: "in the mirror", b_kor: "거울 앞에서", c_en: ["secretly"], c_kor: ["남몰래"] },
        { vBase: "promise", s: "She", p: "부정", io: "the client", io_kor: "고객에게", do: "fast delivery", do_kor: "빠른 배송을", kor: { 현재:"약속하지 않는다.", 과거:"약속하지 않았다.", 미래:"약속하지 않을 것이다." }, s_kor: "그녀는", b_en: "during the holiday", b_kor: "명절 기간 동안에는", c_en: ["honestly"], c_kor: ["솔직하게"] },
        { vBase: "promise", s: "He", p: "의문", io: "his friend", io_kor: "그의 친구에게", do: "his old car", do_kor: "그의 낡은 차를", kor: { 현재:"약속하니?", 과거:"약속했니?", 미래:"약속할까?" }, s_kor: "그는", b_en: "for free", b_kor: "무료로", c_en: [ADV.TODAY_EN], c_kor: [ADV.TODAY_KR] },
        { vBase: "promise", s: "They", p: "긍정", io: "us", io_kor: "우리에게", do: "a delicious dinner", do_kor: "맛있는 저녁을", kor: { 현재:"약속한다.", 과거:"약속했다.", 미래:"약속할 것이다." }, s_kor: "그들은", b_en: "at the restaurant", b_kor: "식당에서", c_en: [ADV.TY_EN], c_kor: [ADV.TY_KR] },
        { vBase: "promise", s: "We", p: "부정", io: "the lazy student", io_kor: "게으른 학생에게", do: "a good grade", do_kor: "좋은 성적을", kor: { 현재:"약속하지 않는다.", 과거:"약속하지 않았다.", 미래:"약속하지 않을 것이다." }, s_kor: "우리는", b_en: "in this class", b_kor: "이 수업에서는", c_en: ["obviously"], c_kor: ["분명히"] },
        { vBase: "promise", s: "You", p: "의문", io: "the boss", io_kor: "사장님에게", do: "a perfect result", do_kor: "완벽한 결과를", kor: { 현재:"약속하니?", 과거:"약속했니?", 미래:"약속할까?" }, s_kor: "너는", b_en: "for the new project", b_kor: "새 프로젝트에 대해", c_en: [ADV.RN_EN], c_kor: [ADV.RN_KR] },
        { vBase: "promise", s: "The boss", p: "긍정", io: "the workers", io_kor: "노동자들에게", do: "a pay raise", do_kor: "임금 인상을", kor: { 현재:"약속한다.", 과거:"약속했다.", 미래:"약속할 것이다." }, s_kor: "사장님은", b_en: "in the meeting", b_kor: "회의에서", c_en: ["finally"], c_kor: ["마침내"] },
        { vBase: "promise", s: "The company", p: "부정", io: "the investors", io_kor: "투자자들에게", do: "impossible profits", do_kor: "불가능한 수익을", kor: { 현재:"약속하지 않는다.", 과거:"약속하지 않았다.", 미래:"약속하지 않을 것이다." }, s_kor: "그 회사는", b_en: "on paper", b_kor: "문서상으로", c_en: ["legally"], c_kor: ["법적으로"] },
        { vBase: "promise", s: "I", p: "의문", io: "the sick boy", io_kor: "아픈 소년에게", do: "a fun trip", do_kor: "재미있는 여행을", kor: { 현재:"약속하니?", 과거:"약속했니?", 미래:"약속할까?" }, s_kor: "내가", b_en: "after his recovery", b_kor: "그의 회복 후에", c_en: ["with a smile"], c_kor: ["미소와 함께"] }
    ];
        return processRawRows4(subjPlurals, TENSES, rawRows);
      })()
      ,
      advanced: null,
      master:   null,
    },
  };
})();