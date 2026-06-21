// WGT VERB_CONFIG — 형식별 동사 메타데이터
const VERB_CONFIG = {
  1: {
    label: "1형식 (S+V+A)",
    verbs: {
      go:       { title: "go (가다)",               options: {} },
      come:     { title: "come (오다)",              options: {} },
      run:      { title: "run (달리다)",             options: {} },
      walk:     { title: "walk (걷다)",              options: {} },
      live:     { title: "live (살다)",              options: {} },
      work:     { title: "work (일하다/작동하다)",   options: {} },
      sleep:    { title: "sleep (자다)",             options: {} },
      smile:    { title: "smile (미소 짓다)",        options: {} },
      stay:     { title: "stay (머물다)",            options: {} },
      arrive:   { title: "arrive (도착하다)",        options: {} },
      happen:   { title: "happen (일어나다)",        options: {} },
      there_be: { title: "There be (있다)",          options: { isThereBe: true } },
    }
  },
  2: {
    label: "2형식 (S+V+C)",
    verbs: {
      be:     { title: "be (이다/있다)",              options: { isBeVerb: true } },
      become: { title: "become (되다)",               options: {} },
      seem:   { title: "seem (~처럼 보이다)",          options: {} },
      look:   { title: "look (~해 보이다)",            options: {} },
      feel:   { title: "feel (~하게 느끼다)",          options: {} },
      sound:  { title: "sound (~하게 들리다)",         options: {} },
      smell:  { title: "smell (~한 냄새가 나다)",      options: {} },
      taste:  { title: "taste (~한 맛이 나다)",        options: {} },
      get:    { title: "get (~이 되다)",               options: {} },
      turn:   { title: "turn (~이 되다)",              options: {} },
      remain: { title: "remain (~인 채로 있다)",       options: {} },
      stay:   { title: "stay (~인 채로 있다)",         options: {} },
    }
  },
  3: {
    label: "3형식 (S+V+O)",
    verbs: {
      have:  { title: "have (가지고 있다)",         options: {} },
      need:  { title: "need (필요하다)",            options: {} },
      make:  { title: "make (만들다)",              options: {} },
      hate:  { title: "hate (싫어하다)",            options: {} },
      do:    { title: "do (하다)",                  options: {} },
      enjoy: { title: "enjoy (즐기다)",             options: {} },
      wear:  { title: "wear (입다)",                options: {} },
      buy:   { title: "buy (사다)",                 options: {} },
      want:  { title: "want (원하다)",              options: {} },
      know:  { title: "know (알다)",                options: {} },
      take:  { title: "take (가져가다/데려가다)",   options: {} },
      see:   { title: "see (보다)",                 options: {} },
    }
  },
  4: {
    label: "4형식 (S+V+IO+DO)",
    verbs: {
      give:    { title: "give (주다)",        options: {} },
      send:    { title: "send (보내다)",      options: {} },
      tell:    { title: "tell (말하다)",      options: {} },
      ask:     { title: "ask (묻다)",         options: {} },
      buy:     { title: "buy (사주다)",       options: {} },
      bring:   { title: "bring (가져다주다)", options: {} },
      teach:   { title: "teach (가르치다)",   options: {} },
      show:    { title: "show (보여주다)",    options: {} },
      make:    { title: "make (만들어주다)",  options: {} },
      offer:   { title: "offer (제공하다)",   options: {} },
      lend:    { title: "lend (빌려주다)",    options: {} },
      promise: { title: "promise (약속하다)", options: {} },
    }
  },
  5: {
    label: "5형식 (S+V+O+OC)",
    verbs: {
      see:  { title: "see (보다)",         options: {} },
      hear: { title: "hear (듣다)",        options: {} },
      watch:{ title: "watch (지켜보다)",   options: {} },
      want: { title: "want (원하다)",      options: {} },
      ask:  { title: "ask (부탁하다)",     options: {} },
      tell: { title: "tell (말하다)",      options: {} },
      make: { title: "make (시키다)",      options: {} },
      let:  { title: "let (허락하다)",     options: {} },
      have: { title: "have (시키다)",      options: {} },
      help: { title: "help (돕다)",        options: {} },
      get:  { title: "get (시키다)",       options: {} },
      find: { title: "find (알다/느끼다)", options: {} },
    }
  },
};

// VERB_DATA 컨테이너 초기화 (data-p1~p5.js가 채움)
const VERB_DATA = { 1: {}, 2: {}, 3: {}, 4: {}, 5: {} };
