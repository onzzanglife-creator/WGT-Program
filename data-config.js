// WGT VERB_CONFIG — 형식별 동사 메타데이터
const VERB_CONFIG = {
  1: {
    label: "1형식 (S+V+A)",
    verbs: {
      go:       { title: "go (가다)",               forms: "go - went - gone",                    options: {} },
      come:     { title: "come (오다)",              forms: "come - came - come",                  options: {} },
      run:      { title: "run (달리다)",             forms: "run - ran - run",                     options: {} },
      walk:     { title: "walk (걷다)",              forms: "walk - walked - walked",              options: {} },
      live:     { title: "live (살다)",              forms: "live - lived - lived",                options: {} },
      work:     { title: "work (일하다/작동하다)",   forms: "work - worked - worked",              options: {} },
      sleep:    { title: "sleep (자다)",             forms: "sleep - slept - slept",               options: {} },
      smile:    { title: "smile (미소 짓다)",        forms: "smile - smiled - smiled",             options: {} },
      stay:     { title: "stay (머물다)",            forms: "stay - stayed - stayed",              options: {} },
      arrive:   { title: "arrive (도착하다)",        forms: "arrive - arrived - arrived",          options: {} },
      happen:   { title: "happen (일어나다)",        forms: "happen - happened - happened",        options: {} },
      there_be: { title: "There be (있다)",          forms: "There is/are (유도부사 구문)",        options: { isThereBe: true } },
    }
  },
  2: {
    label: "2형식 (S+V+C)",
    verbs: {
      be:     { title: "be (이다/있다)",              forms: "be - was/were - been",                options: { isBeVerb: true } },
      become: { title: "become (되다)",               forms: "become - became - become",            options: {} },
      seem:   { title: "seem (~처럼 보이다)",          forms: "seem - seemed - seemed",              options: {} },
      look:   { title: "look (~해 보이다)",            forms: "look - looked - looked",              options: {} },
      feel:   { title: "feel (~하게 느끼다)",          forms: "feel - felt - felt",                  options: {} },
      sound:  { title: "sound (~하게 들리다)",         forms: "sound - sounded - sounded",           options: {} },
      smell:  { title: "smell (~한 냄새가 나다)",      forms: "smell - smelled - smelled",           options: {} },
      taste:  { title: "taste (~한 맛이 나다)",        forms: "taste - tasted - tasted",             options: {} },
      get:    { title: "get (~이 되다)",               forms: "get - got - gotten",                  options: {} },
      turn:   { title: "turn (~이 되다)",              forms: "turn - turned - turned",              options: {} },
      remain: { title: "remain (~인 채로 있다)",       forms: "remain - remained - remained",        options: {} },
      stay:   { title: "stay (~인 채로 있다)",         forms: "stay - stayed - stayed",              options: {} },
    }
  },
  3: {
    label: "3형식 (S+V+O)",
    verbs: {
      have:  { title: "have (가지고 있다)",         forms: "have - had - had",                    options: {} },
      need:  { title: "need (필요하다)",            forms: "need - needed - needed",              options: {} },
      make:  { title: "make (만들다)",              forms: "make - made - made",                  options: {} },
      hate:  { title: "hate (싫어하다)",            forms: "hate - hated - hated",                options: {} },
      do:    { title: "do (하다)",                  forms: "do - did - done",                     options: {} },
      enjoy: { title: "enjoy (즐기다)",             forms: "enjoy - enjoyed - enjoyed",           options: {} },
      wear:  { title: "wear (입다)",                forms: "wear - wore - worn",                  options: {} },
      buy:   { title: "buy (사다)",                 forms: "buy - bought - bought",               options: {} },
      want:  { title: "want (원하다)",              forms: "want - wanted - wanted",              options: {} },
      know:  { title: "know (알다)",                forms: "know - knew - known",                 options: {} },
      take:  { title: "take (가져가다/데려가다)",   forms: "take - took - taken",                 options: {} },
      see:   { title: "see (보다)",                 forms: "see - saw - seen",                    options: {} },
    }
  },
  4: {
    label: "4형식 (S+V+IO+DO)",
    verbs: {
      give:    { title: "give (주다)",        forms: "give - gave - given",                 options: {} },
      send:    { title: "send (보내다)",      forms: "send - sent - sent",                  options: {} },
      tell:    { title: "tell (말하다)",      forms: "tell - told - told",                  options: {} },
      ask:     { title: "ask (묻다)",         forms: "ask - asked - asked",                 options: {} },
      buy:     { title: "buy (사주다)",       forms: "buy - bought - bought",               options: {} },
      bring:   { title: "bring (가져다주다)", forms: "bring - brought - brought",           options: {} },
      teach:   { title: "teach (가르치다)",   forms: "teach - taught - taught",             options: {} },
      show:    { title: "show (보여주다)",    forms: "show - showed - shown",               options: {} },
      make:    { title: "make (만들어주다)",  forms: "make - made - made",                  options: {} },
      offer:   { title: "offer (제공하다)",   forms: "offer - offered - offered",           options: {} },
      lend:    { title: "lend (빌려주다)",    forms: "lend - lent - lent",                  options: {} },
      promise: { title: "promise (약속하다)", forms: "promise - promised - promised",       options: {} },
    }
  },
  5: {
    label: "5형식 (S+V+O+OC)",
    verbs: {
      see:  { title: "see (보다)",         forms: "see - saw - seen",                    options: {} },
      hear: { title: "hear (듣다)",        forms: "hear - heard - heard",                options: {} },
      watch:{ title: "watch (지켜보다)",   forms: "watch - watched - watched",           options: {} },
      want: { title: "want (원하다)",      forms: "want - wanted - wanted",              options: {} },
      ask:  { title: "ask (부탁하다)",     forms: "ask - asked - asked",                 options: {} },
      tell: { title: "tell (말하다)",      forms: "tell - told - told",                  options: {} },
      make: { title: "make (시키다)",      forms: "make - made - made",                  options: {} },
      let:  { title: "let (허락하다)",     forms: "let - let - let",                     options: {} },
      have: { title: "have (시키다)",      forms: "have - had - had",                    options: {} },
      help: { title: "help (돕다)",        forms: "help - helped - helped",              options: {} },
      get:  { title: "get (시키다)",       forms: "get - got - gotten",                  options: {} },
      find: { title: "find (알다/느끼다)", forms: "find - found - found",                options: {} },
    }
  },
};

// VERB_DATA 컨테이너 초기화 (data-p1~p5.js가 window.VERB_DATA[N]으로 채움)
var VERB_DATA = window.VERB_DATA = { 1: {}, 2: {}, 3: {}, 4: {}, 5: {} };
