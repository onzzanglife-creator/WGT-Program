// 직독직해 마스터 — 레벨/지문 고정 데이터
// 구조: LEVELS[i] = { level, label, passages:[ { id, title, topic, sentences:[ {full, chunks:[[영,한],...]} ] } ] }
// 각 지문 = STEP1(영→한)·STEP2(한→영)·STEP3(어순배열) 3단계.

const LEVELS = [
  {
    "level": 1,
    "label": "LEVEL 1",
    "passages": [
      {
        "id": "L1-P1",
        "title": "지문 1",
        "topic": "자존감을 위한 라디오 메시지",
        "sentences": [
          {
            "full": "Welcome to our daily morning radio show.",
            "chunks": [
              ["Welcome to", "환영합니다"],
              ["our daily morning radio show.", "저희 매일 아침 라디오 방송에 오신 것을"]
            ]
          },
          {
            "full": "Today, I want to share a very special message.",
            "chunks": [
              ["Today,", "오늘은"],
              ["I want to share", "나누고 싶습니다"],
              ["a very special message.", "아주 특별한 메시지를"]
            ]
          },
          {
            "full": "Many young students worry deeply about their future.",
            "chunks": [
              ["Many young students", "많은 어린 학생이"],
              ["worry deeply", "깊이 걱정합니다"],
              ["about their future.", "자신의 미래에 대해"]
            ]
          },
          {
            "full": "They often look at their friends on social media.",
            "chunks": [
              ["They often look at", "그들은 자주 들여다봅니다"],
              ["their friends", "친구들의 모습을"],
              ["on social media.", "소셜 미디어에서"]
            ]
          },
          {
            "full": "They think other people live a much better life.",
            "chunks": [
              ["They think", "그들은 생각합니다"],
              ["other people live", "남들은 살아간다고"],
              ["a much better life.", "훨씬 더 나은 삶을"]
            ]
          },
          {
            "full": "However, you should never compare your life with others.",
            "chunks": [
              ["However,", "하지만"],
              ["you should never compare", "당신은 결코 비교해서는 안 됩니다"],
              ["your life", "당신의 삶을"],
              ["with others.", "다른 사람과"]
            ]
          },
          {
            "full": "Everyone has their own timeline and personal pace.",
            "chunks": [
              ["Everyone has", "모든 사람은 가지고 있습니다"],
              ["their own timeline", "저마다의 시간표를"],
              ["and personal pace.", "그리고 자신만의 속도를"]
            ]
          },
          {
            "full": "You are a truly unique and highly valuable person.",
            "chunks": [
              ["You are", "당신은"],
              ["a truly unique", "진정으로 특별하고"],
              ["and highly valuable person.", "매우 소중한 사람입니다"]
            ]
          },
          {
            "full": "Your own qualities make you perfectly beautiful right now.",
            "chunks": [
              ["Your own qualities", "당신만의 고유한 자질이"],
              ["make you", "당신을 만들어 줍니다"],
              ["perfectly beautiful", "더없이 아름답게"],
              ["right now.", "바로 지금"]
            ]
          },
          {
            "full": "Please love yourself just the way you are.",
            "chunks": [
              ["Please love yourself", "당신 자신을 사랑하세요"],
              ["just the way you are.", "있는 그대로의 모습으로"]
            ]
          },
          {
            "full": "Small daily steps will eventually lead to great success.",
            "chunks": [
              ["Small daily steps", "매일의 작은 발걸음이"],
              ["will eventually lead to", "결국 이어집니다"],
              ["great success.", "큰 성공으로"]
            ]
          },
          {
            "full": "Thank you for listening to this warm morning message.",
            "chunks": [
              ["Thank you for listening to", "들어주셔서 감사합니다"],
              ["this warm morning message.", "이 따뜻한 아침 메시지를"]
            ]
          }
        ]
      },
      {
        "id": "L1-P2",
        "title": "지문 2",
        "topic": "실수를 두려워하지 않는 마음",
        "sentences": [
          {
            "full": "Many students feel extremely sad after making big mistakes.",
            "chunks": [
              ["Many students", "많은 학생이"],
              ["feel extremely sad", "몹시 슬퍼합니다"],
              ["after making big mistakes.", "큰 실수를 한 뒤에"]
            ]
          },
          {
            "full": "They lose their confidence during difficult school exams.",
            "chunks": [
              ["They lose their confidence", "그들은 자신감을 잃습니다"],
              ["during difficult school exams.", "어려운 학교 시험을 치르는 동안"]
            ]
          },
          {
            "full": "Some people even want to give up easily.",
            "chunks": [
              ["Some people", "어떤 이들은"],
              ["even want to give up", "심지어 포기하고 싶어 합니다"],
              ["easily.", "너무도 쉽게"]
            ]
          },
          {
            "full": "However, making mistakes is just a natural part of learning.",
            "chunks": [
              ["However,", "하지만"],
              ["making mistakes is", "실수를 하는 것은"],
              ["just a natural part", "자연스러운 한 부분일 뿐입니다"],
              ["of learning.", "배움의 과정에서"]
            ]
          },
          {
            "full": "No human being is completely perfect from the start.",
            "chunks": [
              ["No human being is", "어떤 사람도 ~지 않습니다"],
              ["completely perfect", "완전히 완벽하지는"],
              ["from the start.", "처음부터"]
            ]
          },
          {
            "full": "Every great leader failed many times before achieving success.",
            "chunks": [
              ["Every great leader", "모든 위대한 지도자도"],
              ["failed many times", "수없이 실패했습니다"],
              ["before achieving success.", "성공을 이루기 전에는"]
            ]
          },
          {
            "full": "A small failure helps you grow much stronger inside.",
            "chunks": [
              ["A small failure", "작은 실패는"],
              ["helps you grow", "당신을 더 자라게 합니다"],
              ["much stronger", "훨씬 더 단단하게"],
              ["inside.", "내면에서"]
            ]
          },
          {
            "full": "It shows you a brand new way to solve problems.",
            "chunks": [
              ["It shows you", "그것은 당신에게 보여줍니다"],
              ["a brand new way", "완전히 새로운 길을"],
              ["to solve problems.", "문제를 푸는"]
            ]
          },
          {
            "full": "Therefore, do not fear your wrong answers at all.",
            "chunks": [
              ["Therefore,", "그러므로"],
              ["do not fear", "두려워하지 마세요"],
              ["your wrong answers", "틀린 답을"],
              ["at all.", "조금도"]
            ]
          },
          {
            "full": "They are just hidden steps toward your ultimate goals.",
            "chunks": [
              ["They are", "그것들은"],
              ["just hidden steps", "숨겨진 디딤돌일 뿐입니다"],
              ["toward your ultimate goals.", "당신의 궁극적 목표로 가는"]
            ]
          },
          {
            "full": "Believe in your great potential and try one more time.",
            "chunks": [
              ["Believe in", "믿으세요"],
              ["your great potential", "당신의 위대한 가능성을"],
              ["and try", "그리고 도전하세요"],
              ["one more time.", "한 번 더"]
            ]
          },
          {
            "full": "You can achieve anything with a brave and hopeful heart.",
            "chunks": [
              ["You can achieve anything", "당신은 무엇이든 이룰 수 있습니다"],
              ["with a brave and hopeful heart.", "용감하고 희망찬 마음이면"]
            ]
          }
        ]
      },
      {
        "id": "L1-P3",
        "title": "지문 3",
        "topic": "학교 강당에서의 친절 연설",
        "sentences": [
          {
            "full": "Good afternoon, everyone gathered in this school theater.",
            "chunks": [
              ["Good afternoon,", "안녕하세요"],
              ["everyone gathered", "모여 주신 여러분"],
              ["in this school theater.", "이 학교 강당에"]
            ]
          },
          {
            "full": "Today, let us talk about the true power of kindness.",
            "chunks": [
              ["Today,", "오늘은"],
              ["let us talk about", "함께 이야기해 봅시다"],
              ["the true power of kindness.", "친절의 진정한 힘에 대해"]
            ]
          },
          {
            "full": "We meet many different friends every single day.",
            "chunks": [
              ["We meet", "우리는 만납니다"],
              ["many different friends", "다양한 친구들을"],
              ["every single day.", "날마다"]
            ]
          },
          {
            "full": "Sometimes, people say mean words without thinking carefully.",
            "chunks": [
              ["Sometimes,", "때때로"],
              ["people say mean words", "사람들은 모진 말을 합니다"],
              ["without thinking carefully.", "깊이 생각하지 않고"]
            ]
          },
          {
            "full": "Those bad words can hurt someone deeply in their heart.",
            "chunks": [
              ["Those bad words", "그런 나쁜 말은"],
              ["can hurt someone", "누군가에게 상처를 줄 수 있습니다"],
              ["deeply", "깊이"],
              ["in their heart.", "마음속 깊은 곳에"]
            ]
          },
          {
            "full": "Instead, we can choose to use warm and gentle words.",
            "chunks": [
              ["Instead,", "그 대신"],
              ["we can choose to use", "우리는 골라 쓸 수 있습니다"],
              ["warm and gentle words.", "따뜻하고 부드러운 말을"]
            ]
          },
          {
            "full": "A kind word can change someone's entire gloomy day.",
            "chunks": [
              ["A kind word", "친절한 말 한마디는"],
              ["can change", "바꿀 수 있습니다"],
              ["someone's entire gloomy day.", "누군가의 우울한 하루 전체를"]
            ]
          },
          {
            "full": "Please help your friends whenever they face sudden difficulties.",
            "chunks": [
              ["Please help your friends", "친구를 도와주세요"],
              ["whenever they face", "그들이 마주칠 때마다"],
              ["sudden difficulties.", "갑작스러운 어려움을"]
            ]
          },
          {
            "full": "You do not need a lot of money to help others.",
            "chunks": [
              ["You do not need", "당신에게 필요하지 않습니다"],
              ["a lot of money", "많은 돈이"],
              ["to help others.", "남을 돕는 데"]
            ]
          },
          {
            "full": "A simple smile or a helping hand is always enough.",
            "chunks": [
              ["A simple smile", "작은 미소"],
              ["or a helping hand", "또는 내미는 손길이면"],
              ["is always enough.", "언제나 충분합니다"]
            ]
          },
          {
            "full": "Your small acts can create a much better world together.",
            "chunks": [
              ["Your small acts", "당신의 작은 행동이"],
              ["can create", "만들 수 있습니다"],
              ["a much better world", "훨씬 더 나은 세상을"],
              ["together.", "다 함께"]
            ]
          },
          {
            "full": "Let us start this beautiful journey of kindness from today.",
            "chunks": [
              ["Let us start", "시작해 봅시다"],
              ["this beautiful journey of kindness", "친절이라는 이 아름다운 여정을"],
              ["from today.", "오늘부터"]
            ]
          }
        ]
      },
      {
        "id": "L1-P4",
        "title": "지문 4",
        "topic": "감사의 마음이 주는 긍정 에너지",
        "sentences": [
          {
            "full": "Real happiness always starts from a small thankful heart.",
            "chunks": [
              ["Real happiness", "진정한 행복은"],
              ["always starts", "언제나 시작됩니다"],
              ["from a small thankful heart.", "작은 감사의 마음에서"]
            ]
          },
          {
            "full": "Many people only look for big and rare fortunes.",
            "chunks": [
              ["Many people", "많은 사람은"],
              ["only look for", "오직 찾아 헤맵니다"],
              ["big and rare fortunes.", "크고 드문 행운만을"]
            ]
          },
          {
            "full": "But pure joy usually stays in very ordinary things.",
            "chunks": [
              ["But pure joy", "하지만 순수한 기쁨은"],
              ["usually stays", "대개 머물러 있습니다"],
              ["in very ordinary things.", "아주 평범한 것들 속에"]
            ]
          },
          {
            "full": "Look around your daily life carefully every single morning.",
            "chunks": [
              ["Look around", "둘러보세요"],
              ["your daily life", "당신의 일상을"],
              ["carefully", "찬찬히"],
              ["every single morning.", "매일 아침"]
            ]
          },
          {
            "full": "There are many beautiful things right around us.",
            "chunks": [
              ["There are", "있습니다"],
              ["many beautiful things", "수많은 아름다운 것들이"],
              ["right around us.", "바로 우리 곁에"]
            ]
          },
          {
            "full": "Think about the clear blue sky and warm sunlight.",
            "chunks": [
              ["Think about", "생각해 보세요"],
              ["the clear blue sky", "맑고 푸른 하늘과"],
              ["and warm sunlight.", "따스한 햇살을"]
            ]
          },
          {
            "full": "Thank your family for their deep love and endless care.",
            "chunks": [
              ["Thank your family", "가족에게 감사하세요"],
              ["for their deep love", "그들의 깊은 사랑과"],
              ["and endless care.", "끝없는 보살핌에"]
            ]
          },
          {
            "full": "They always stand by you safely during hard times.",
            "chunks": [
              ["They always stand by you", "그들은 늘 당신 곁을 지킵니다"],
              ["safely", "든든하게"],
              ["during hard times.", "힘든 시기에도"]
            ]
          },
          {
            "full": "Express your thankful mind to your good teachers as well.",
            "chunks": [
              ["Express", "표현해 보세요"],
              ["your thankful mind", "감사하는 마음을"],
              ["to your good teachers", "고마운 선생님들께도"],
              ["as well.", "마찬가지로"]
            ]
          },
          {
            "full": "Saying thank you makes both people incredibly happy at once.",
            "chunks": [
              ["Saying thank you", "고맙다고 말하는 것은"],
              ["makes both people", "두 사람 모두를"],
              ["incredibly happy", "더없이 행복하게 합니다"],
              ["at once.", "동시에"]
            ]
          },
          {
            "full": "Gratitude fills your whole mind with bright, positive energy.",
            "chunks": [
              ["Gratitude fills", "감사는 가득 채웁니다"],
              ["your whole mind", "당신의 마음 전체를"],
              ["with bright, positive energy.", "밝고 긍정적인 에너지로"]
            ]
          },
          {
            "full": "Open your new day with a happy and thankful smile.",
            "chunks": [
              ["Open your new day", "새로운 하루를 여세요"],
              ["with a happy", "행복하고"],
              ["and thankful smile.", "감사하는 미소로"]
            ]
          }
        ]
      },
      {
        "id": "L1-P5",
        "title": "지문 5",
        "topic": "자신의 특별한 재능 발견하기",
        "sentences": [
          {
            "full": "Every single student has a different talent and hidden strength.",
            "chunks": [
              ["Every single student has", "모든 학생은 지니고 있습니다"],
              ["a different talent", "저마다 다른 재능과"],
              ["and hidden strength.", "숨은 강점을"]
            ]
          },
          {
            "full": "Some people sing very well, and others draw pictures beautifully.",
            "chunks": [
              ["Some people sing very well,", "어떤 사람은 노래를 아주 잘하고"],
              ["and others draw pictures", "어떤 사람은 그림을 그립니다"],
              ["beautifully.", "아름답게"]
            ]
          },
          {
            "full": "A few students are amazingly good at sports or cooking.",
            "chunks": [
              ["A few students are", "어떤 학생들은"],
              ["amazingly good at", "놀랍도록 뛰어납니다"],
              ["sports or cooking.", "운동이나 요리에"]
            ]
          },
          {
            "full": "You clearly do not have to be good at everything.",
            "chunks": [
              ["You clearly do not have to be good", "당신이 꼭 잘해야 하는 건 아닙니다"],
              ["at everything.", "모든 것을 다"]
            ]
          },
          {
            "full": "Discovering your own strength takes some time and patience.",
            "chunks": [
              ["Discovering your own strength", "자신만의 강점을 발견하는 데는"],
              ["takes", "필요합니다"],
              ["some time and patience.", "약간의 시간과 인내가"]
            ]
          },
          {
            "full": "Do not hurry or lose your precious confidence easily.",
            "chunks": [
              ["Do not hurry", "서두르지 마세요"],
              ["or lose", "또는 잃지 마세요"],
              ["your precious confidence", "소중한 자신감을"],
              ["easily.", "쉽게"]
            ]
          },
          {
            "full": "Watch your favorite activities closely during your free time.",
            "chunks": [
              ["Watch", "지켜보세요"],
              ["your favorite activities", "당신이 가장 좋아하는 활동을"],
              ["closely", "유심히"],
              ["during your free time.", "여가 시간에"]
            ]
          },
          {
            "full": "Try new things bravely without any deep worries.",
            "chunks": [
              ["Try new things", "새로운 것들에 도전하세요"],
              ["bravely", "용감하게"],
              ["without any deep worries.", "깊이 걱정하지 말고"]
            ]
          },
          {
            "full": "You will certainly find your special gift very soon.",
            "chunks": [
              ["You will certainly find", "당신은 반드시 찾게 됩니다"],
              ["your special gift", "당신만의 특별한 재능을"],
              ["very soon.", "머지않아"]
            ]
          },
          {
            "full": "Trust your unique power and keep going forward boldly.",
            "chunks": [
              ["Trust", "믿으세요"],
              ["your unique power", "당신만의 고유한 힘을"],
              ["and keep going forward", "그리고 계속 나아가세요"],
              ["boldly.", "담대하게"]
            ]
          },
          {
            "full": "Your bright future is waiting for your brilliant light.",
            "chunks": [
              ["Your bright future", "당신의 밝은 미래가"],
              ["is waiting for", "기다리고 있습니다"],
              ["your brilliant light.", "당신의 찬란한 빛을"]
            ]
          },
          {
            "full": "You are the main hero of your own wonderful life story.",
            "chunks": [
              ["You are", "당신은"],
              ["the main hero", "진짜 주인공입니다"],
              ["of your own wonderful life story.", "당신 자신의 멋진 인생 이야기의"]
            ]
          }
        ]
      }
    ]
  },
  {
    "level": 2,
    "label": "LEVEL 2",
    "passages": [
      {
        "id": "L2-P1",
        "title": "지문 1",
        "topic": "무대 공포증을 이겨낸 순간",
        "sentences": [
          {
            "full": "Leo stood anxiously behind the heavy velvet stage curtains.",
            "chunks": [
              ["Leo stood anxiously", "레오는 초조하게 서 있었습니다"],
              ["behind the heavy velvet stage curtains.", "두꺼운 벨벳 무대 커튼 뒤에"]
            ]
          },
          {
            "full": "His hands shook deeply, and his heart pounded fast.",
            "chunks": [
              ["His hands shook deeply,", "두 손은 심하게 떨렸고"],
              ["and his heart pounded fast.", "심장은 빠르게 쿵쾅거렸습니다"]
            ]
          },
          {
            "full": "The loud crowd outside made him feel incredibly small.",
            "chunks": [
              ["The loud crowd outside", "밖에서 떠드는 시끄러운 관중 때문에"],
              ["made him feel", "그는 느꼈습니다"],
              ["incredibly small.", "자신이 한없이 작게"]
            ]
          },
          {
            "full": "He strongly doubted his ability to deliver the speech well.",
            "chunks": [
              ["He strongly doubted", "그는 몹시 의심했습니다"],
              ["his ability", "자신의 능력을"],
              ["to deliver the speech well.", "연설을 잘 해낼"]
            ]
          },
          {
            "full": "Then, he remembered his teacher's encouraging words from yesterday.",
            "chunks": [
              ["Then,", "그때"],
              ["he remembered", "그는 떠올렸습니다"],
              ["his teacher's encouraging words", "선생님의 격려의 말을"],
              ["from yesterday.", "어제 들은"]
            ]
          },
          {
            "full": "She said that his true honest voice had great power.",
            "chunks": [
              ["She said", "선생님은 말했습니다"],
              ["that his true honest voice", "그의 진실하고 솔직한 목소리에는"],
              ["had great power.", "큰 힘이 있다고"]
            ]
          },
          {
            "full": "Leo took a deep breath and stepped out slowly.",
            "chunks": [
              ["Leo took a deep breath", "레오는 깊게 숨을 들이쉬고"],
              ["and stepped out", "무대로 걸어 나갔습니다"],
              ["slowly.", "천천히"]
            ]
          },
          {
            "full": "The bright stage lights shone directly onto his nervous face.",
            "chunks": [
              ["The bright stage lights", "밝은 무대 조명이"],
              ["shone directly", "곧장 비추었습니다"],
              ["onto his nervous face.", "긴장한 그의 얼굴을"]
            ]
          },
          {
            "full": "He opened his mouth and spoke his mind clearly.",
            "chunks": [
              ["He opened his mouth", "그는 입을 열어"],
              ["and spoke his mind", "속마음을 말했습니다"],
              ["clearly.", "또렷하게"]
            ]
          },
          {
            "full": "Suddenly, the intense fear vanished completely into the warm air.",
            "chunks": [
              ["Suddenly,", "갑자기"],
              ["the intense fear", "그 극심한 두려움이"],
              ["vanished completely", "완전히 사라졌습니다"],
              ["into the warm air.", "따뜻한 공기 속으로"]
            ]
          },
          {
            "full": "The whole audience clapped loudly with bright, happy smiles.",
            "chunks": [
              ["The whole audience", "객석의 모두가"],
              ["clapped loudly", "크게 박수를 쳤습니다"],
              ["with bright, happy smiles.", "밝고 행복한 미소를 지으며"]
            ]
          },
          {
            "full": "A wonderful wave of self-pride filled his entire body.",
            "chunks": [
              ["A wonderful wave", "벅찬 물결이"],
              ["of self-pride", "자부심이라는"],
              ["filled his entire body.", "그의 온몸을 가득 채웠습니다"]
            ]
          }
        ]
      },
      {
        "id": "L2-P2",
        "title": "지문 2",
        "topic": "캔버스 위의 실패와 재발견",
        "sentences": [
          {
            "full": "Clara looked at her messy canvas with deep disappointment.",
            "chunks": [
              ["Clara looked at", "클라라는 바라보았습니다"],
              ["her messy canvas", "엉망이 된 자신의 캔버스를"],
              ["with deep disappointment.", "깊은 실망감에 잠겨"]
            ]
          },
          {
            "full": "The colors mixed poorly, creating a dark and ugly shape.",
            "chunks": [
              ["The colors mixed poorly,", "색들이 잘못 섞여서"],
              ["creating a dark", "어둡고"],
              ["and ugly shape.", "보기 흉한 형체를 만들어 냈습니다"]
            ]
          },
          {
            "full": "She felt bitter tears starting in her eyes during class.",
            "chunks": [
              ["She felt", "그녀는 느꼈습니다"],
              ["bitter tears starting", "쓰라린 눈물이 차오르는 것을"],
              ["in her eyes", "눈가에"],
              ["during class.", "수업 중에"]
            ]
          },
          {
            "full": "All her classmates seemed much more talented than her.",
            "chunks": [
              ["All her classmates", "반 친구들은 모두"],
              ["seemed much more talented", "훨씬 더 재능 있어 보였습니다"],
              ["than her.", "그녀보다"]
            ]
          },
          {
            "full": "She wanted to throw the ruined painting into the bin immediately.",
            "chunks": [
              ["She wanted to throw", "그녀는 던져 버리고 싶었습니다"],
              ["the ruined painting", "망친 그림을"],
              ["into the bin", "쓰레기통에"],
              ["immediately.", "당장"]
            ]
          },
          {
            "full": "Her art teacher walked over and smiled at her gently.",
            "chunks": [
              ["Her art teacher walked over", "미술 선생님이 다가와"],
              ["and smiled at her", "그녀에게 미소 지었습니다"],
              ["gently.", "부드럽게"]
            ]
          },
          {
            "full": "He softly said that beautiful art always comes from mistakes.",
            "chunks": [
              ["He softly said", "선생님은 나직이 말했습니다"],
              ["that beautiful art", "아름다운 예술은"],
              ["always comes", "언제나 나온다고"],
              ["from mistakes.", "실수에서"]
            ]
          },
          {
            "full": "Clara picked up a new brush with fresh, brave courage.",
            "chunks": [
              ["Clara picked up", "클라라는 집어 들었습니다"],
              ["a new brush", "새 붓을"],
              ["with fresh, brave courage.", "새롭고 용감한 용기로"]
            ]
          },
          {
            "full": "She added bright yellow lines boldly across the dark canvas.",
            "chunks": [
              ["She added", "그녀는 더했습니다"],
              ["bright yellow lines", "밝은 노란 선들을"],
              ["boldly", "과감하게"],
              ["across the dark canvas.", "어두운 캔버스를 가로질러"]
            ]
          },
          {
            "full": "The painting magically transformed into a beautiful night sky scene.",
            "chunks": [
              ["The painting", "그 그림은"],
              ["magically transformed", "마법처럼 바뀌었습니다"],
              ["into a beautiful night sky scene.", "아름다운 밤하늘 풍경으로"]
            ]
          },
          {
            "full": "A joyful smile slowly spread across her tearful red face.",
            "chunks": [
              ["A joyful smile", "기쁨의 미소가"],
              ["slowly spread", "천천히 번졌습니다"],
              ["across her tearful red face.", "눈물 어린 붉은 얼굴 위로"]
            ]
          },
          {
            "full": "She finally realized her own unique creative value today.",
            "chunks": [
              ["She finally realized", "그녀는 마침내 깨달았습니다"],
              ["her own unique creative value", "자신만의 독창적 가치를"],
              ["today.", "오늘"]
            ]
          }
        ]
      },
      {
        "id": "L2-P3",
        "title": "지문 3",
        "topic": "외로움에서 피어난 연대감",
        "sentences": [
          {
            "full": "Minjun sat completely alone in the noisy school cafeteria yesterday.",
            "chunks": [
              ["Minjun sat", "민준은 앉아 있었습니다"],
              ["completely alone", "완전히 홀로"],
              ["in the noisy school cafeteria", "시끌벅적한 학교 식당에"],
              ["yesterday.", "어제"]
            ]
          },
          {
            "full": "He felt invisible and isolated among the happy laughing crowds.",
            "chunks": [
              ["He felt invisible", "그는 투명 인간 같았고"],
              ["and isolated", "외톨이가 된 듯했습니다"],
              ["among the happy laughing crowds.", "즐겁게 웃는 무리 속에서"]
            ]
          },
          {
            "full": "Nobody seemed to notice his quiet, lonely presence at all.",
            "chunks": [
              ["Nobody seemed to notice", "아무도 알아채지 못하는 듯했습니다"],
              ["his quiet, lonely presence", "그의 조용하고 외로운 존재를"],
              ["at all.", "조금도"]
            ]
          },
          {
            "full": "He stared down at his lunch tray with a heavy heart.",
            "chunks": [
              ["He stared down at", "그는 가만히 내려다보았습니다"],
              ["his lunch tray", "자신의 식판만"],
              ["with a heavy heart.", "무거운 마음으로"]
            ]
          },
          {
            "full": "Suddenly, a friendly student approached his empty table slowly.",
            "chunks": [
              ["Suddenly,", "그때 갑자기"],
              ["a friendly student", "상냥한 한 학생이"],
              ["approached his empty table", "그의 빈 자리로 다가왔습니다"],
              ["slowly.", "천천히"]
            ]
          },
          {
            "full": "She asked to sit next to him with genuine kindness.",
            "chunks": [
              ["She asked", "그 학생은 물었습니다"],
              ["to sit next to him", "옆에 앉아도 되는지"],
              ["with genuine kindness.", "진심 어린 친절로"]
            ]
          },
          {
            "full": "They started talking happily about their favorite books and hobbies.",
            "chunks": [
              ["They started talking happily", "둘은 즐겁게 이야기하기 시작했습니다"],
              ["about their favorite books", "서로 좋아하는 책과"],
              ["and hobbies.", "취미에 대해"]
            ]
          },
          {
            "full": "Her warm laughter quickly melted his cold feelings of loneliness.",
            "chunks": [
              ["Her warm laughter", "그녀의 따뜻한 웃음은"],
              ["quickly melted", "금세 녹였습니다"],
              ["his cold feelings of loneliness.", "차갑게 굳은 그의 외로움을"]
            ]
          },
          {
            "full": "Other students soon joined them and shared their funny stories.",
            "chunks": [
              ["Other students soon joined them", "곧 다른 학생들도 합류해"],
              ["and shared", "함께 나누었습니다"],
              ["their funny stories.", "저마다 재미있는 이야기를"]
            ]
          },
          {
            "full": "Minjun felt a bright light shining warmly inside his mind.",
            "chunks": [
              ["Minjun felt", "민준은 느꼈습니다"],
              ["a bright light shining", "밝은 빛이 켜지는 것을"],
              ["warmly", "따뜻하게"],
              ["inside his mind.", "마음속에서"]
            ]
          },
          {
            "full": "He was no longer a lonely outsider in this big school.",
            "chunks": [
              ["He was no longer", "그는 더 이상 아니었습니다"],
              ["a lonely outsider", "외로운 이방인이"],
              ["in this big school.", "이 큰 학교에서"]
            ]
          },
          {
            "full": "A deep sense of belonging made him feel totally secure.",
            "chunks": [
              ["A deep sense of belonging", "깊은 소속감이"],
              ["made him feel", "그를 느끼게 했습니다"],
              ["totally secure.", "온전히 안전하다고"]
            ]
          }
        ]
      },
      {
        "id": "L2-P4",
        "title": "지문 4",
        "topic": "순위보다 소중한 노력의 가치",
        "sentences": [
          {
            "full": "Sophia stood nervously at the starting line of the final race.",
            "chunks": [
              ["Sophia stood", "소피아는 서 있었습니다"],
              ["nervously", "초조하게"],
              ["at the starting line", "출발선에"],
              ["of the final race.", "결승 경주의"]
            ]
          },
          {
            "full": "The heavy pressure to win made her stomach hurt badly.",
            "chunks": [
              ["The heavy pressure to win", "이겨야 한다는 무거운 압박감에"],
              ["made her stomach hurt", "속이 아파 왔습니다"],
              ["badly.", "몹시"]
            ]
          },
          {
            "full": "She feared disappointing her parents and her supportive running team.",
            "chunks": [
              ["She feared", "그녀는 두려웠습니다"],
              ["disappointing her parents", "부모님을 실망시킬까 봐"],
              ["and her supportive running team.", "그리고 응원해 주는 육상팀까지"]
            ]
          },
          {
            "full": "The loud whistle blew, and everyone ran forward extremely fast.",
            "chunks": [
              ["The loud whistle blew,", "요란한 호루라기가 울리자"],
              ["and everyone ran forward", "모두가 앞으로 내달렸습니다"],
              ["extremely fast.", "엄청나게 빠르게"]
            ]
          },
          {
            "full": "Her legs felt heavy, and she fell behind the others quickly.",
            "chunks": [
              ["Her legs felt heavy,", "다리가 무겁게 느껴졌고"],
              ["and she fell behind", "그녀는 뒤처졌습니다"],
              ["the others", "다른 선수들에게"],
              ["quickly.", "순식간에"]
            ]
          },
          {
            "full": "Panic gripped her heart tightly as other runners passed her.",
            "chunks": [
              ["Panic gripped her heart", "공포가 그녀의 심장을 움켜쥐었습니다"],
              ["tightly", "꽉"],
              ["as other runners passed her.", "다른 선수들이 그녀를 앞지를 때마다"]
            ]
          },
          {
            "full": "Then, she firmly decided to focus only on her own steps.",
            "chunks": [
              ["Then,", "그때"],
              ["she firmly decided to focus", "그녀는 집중하기로 굳게 마음먹었습니다"],
              ["only on her own steps.", "오직 자신의 발걸음에만"]
            ]
          },
          {
            "full": "She told herself that finishing the race was her true goal.",
            "chunks": [
              ["She told herself", "그녀는 스스로 되뇌었습니다"],
              ["that finishing the race", "경주를 끝까지 완주하는 것이"],
              ["was her true goal.", "진짜 목표라고"]
            ]
          },
          {
            "full": "She ran forward with her own natural, steady running rhythm.",
            "chunks": [
              ["She ran forward", "그녀는 앞으로 달렸습니다"],
              ["with her own natural,", "자신만의 자연스럽고"],
              ["steady running rhythm.", "꾸준한 페이스로"]
            ]
          },
          {
            "full": "When she finally crossed the finish line, she was not first.",
            "chunks": [
              ["When she finally crossed", "마침내 통과했을 때"],
              ["the finish line,", "결승선을"],
              ["she was not first.", "그녀는 1등이 아니었습니다"]
            ]
          },
          {
            "full": "Yet, an overwhelming feeling of peace filled her exhausted heart.",
            "chunks": [
              ["Yet,", "그러나"],
              ["an overwhelming feeling of peace", "벅찬 평온함이"],
              ["filled", "가득 채웠습니다"],
              ["her exhausted heart.", "지친 그녀의 가슴을"]
            ]
          },
          {
            "full": "She was incredibly proud of her honest and brave effort.",
            "chunks": [
              ["She was incredibly proud", "그녀는 더없이 자랑스러웠습니다"],
              ["of her honest", "정직하고"],
              ["and brave effort.", "용감했던 자신의 노력이"]
            ]
          }
        ]
      },
      {
        "id": "L2-P5",
        "title": "지문 5",
        "topic": "침묵을 깨뜨린 내면의 목소리",
        "sentences": [
          {
            "full": "Jiwoo always hid her opinions during group discussion classes.",
            "chunks": [
              ["Jiwoo always hid", "지우는 늘 감추었습니다"],
              ["her opinions", "자신의 의견을"],
              ["during group discussion classes.", "모둠 토론 수업 동안"]
            ]
          },
          {
            "full": "She worried deeply that her classmates might mock her thoughts.",
            "chunks": [
              ["She worried deeply", "그녀는 깊이 걱정했습니다"],
              ["that her classmates", "혹시 반 친구들이"],
              ["might mock her thoughts.", "자기 생각을 비웃을까 봐"]
            ]
          },
          {
            "full": "Her throat tightened painfully whenever she wanted to speak up.",
            "chunks": [
              ["Her throat tightened", "목이 조여 왔습니다"],
              ["painfully", "고통스럽게"],
              ["whenever she wanted to speak up.", "말을 꺼내려 할 때마다"]
            ]
          },
          {
            "full": "She felt helpless and trapped in her own quiet silence.",
            "chunks": [
              ["She felt helpless", "그녀는 무력감을 느끼며"],
              ["and trapped", "갇혀 있었습니다"],
              ["in her own quiet silence.", "스스로의 침묵 속에"]
            ]
          },
          {
            "full": "Today, the study group faced a very difficult problem together.",
            "chunks": [
              ["Today,", "오늘"],
              ["the study group faced", "스터디 모둠은 맞닥뜨렸습니다"],
              ["a very difficult problem", "아주 어려운 문제를"],
              ["together.", "다 함께"]
            ]
          },
          {
            "full": "Everyone was totally confused, and the classroom was covered in silence.",
            "chunks": [
              ["Everyone was totally confused,", "모두가 완전히 혼란에 빠졌고"],
              ["and the classroom", "교실은"],
              ["was covered in silence.", "침묵에 잠겼습니다"]
            ]
          },
          {
            "full": "Jiwoo knew a great solution clearly in her brilliant mind.",
            "chunks": [
              ["Jiwoo knew", "지우는 알고 있었습니다"],
              ["a great solution", "멋진 해결책을"],
              ["clearly", "또렷하게"],
              ["in her brilliant mind.", "명석한 머릿속에"]
            ]
          },
          {
            "full": "She raised her hand timidly but stood up straight and tall.",
            "chunks": [
              ["She raised her hand", "그녀는 손을 들었습니다"],
              ["timidly", "조심스럽게"],
              ["but stood up", "그러나 일어섰습니다"],
              ["straight and tall.", "허리를 곧게 펴고"]
            ]
          },
          {
            "full": "She expressed her smart idea with a clear and confident voice.",
            "chunks": [
              ["She expressed", "그녀는 표현했습니다"],
              ["her smart idea", "자신의 똑똑한 생각을"],
              ["with a clear", "맑고"],
              ["and confident voice.", "자신감 있는 목소리로"]
            ]
          },
          {
            "full": "Her team members nodded enthusiastically and praised her excellent suggestion.",
            "chunks": [
              ["Her team members nodded", "팀원들은 고개를 끄덕였고"],
              ["enthusiastically", "열렬히"],
              ["and praised", "칭찬했습니다"],
              ["her excellent suggestion.", "그녀의 훌륭한 제안을"]
            ]
          },
          {
            "full": "A powerful feeling of inner strength woke up fiercely inside her.",
            "chunks": [
              ["A powerful feeling", "강력한 감정이"],
              ["of inner strength", "내면의 힘이라는"],
              ["woke up fiercely", "맹렬히 깨어났습니다"],
              ["inside her.", "그녀 안에서"]
            ]
          },
          {
            "full": "She finally discovered the amazing worth of her own ideas.",
            "chunks": [
              ["She finally discovered", "그녀는 마침내 발견했습니다"],
              ["the amazing worth", "놀라운 가치를"],
              ["of her own ideas.", "자기 생각이 지닌"]
            ]
          }
        ]
      }
    ]
  }
,
{
    "level": 3,
    "label": "LEVEL 3",
    "passages": [
      {
        "id": "L3-P1",
        "title": "지문 1",
        "topic": "어느 아웃사이더의 아름다운 도서관",
        "sentences": [
          {
            "full": "Arthur was born in a small country town in 1950.",
            "chunks": [
              ["Arthur was born", "아서는 태어났습니다"],
              ["in a small country town", "어느 작은 시골 마을에서"],
              ["in 1950.", "1950년에"]
            ]
          },
          {
            "full": "His family was poor, so he could not buy many books.",
            "chunks": [
              ["His family was poor,", "그의 가족은 가난했기에"],
              ["so he could not buy", "그는 살 수 없었습니다"],
              ["many books.", "책을 많이"]
            ]
          },
          {
            "full": "However, he loved reading stories under the old tree every afternoon.",
            "chunks": [
              ["However,", "하지만"],
              ["he loved reading stories", "그는 이야기 읽는 것을 무척 좋아했습니다"],
              ["under the old tree", "오래된 나무 아래에서"],
              ["every afternoon.", "매일 오후"]
            ]
          },
          {
            "full": "He opened a small free library for children in his village.",
            "chunks": [
              ["He opened", "그는 열었습니다"],
              ["a small free library", "작은 무료 도서관을"],
              ["for children", "아이들을 위해"],
              ["in his village.", "자신의 마을에"]
            ]
          },
          {
            "full": "At first, the library had only fifty books on the shelves.",
            "chunks": [
              ["At first,", "처음에"],
              ["the library had only fifty books", "그 도서관에는 겨우 50권의 책만이 있었습니다"],
              ["on the shelves.", "선반에"]
            ]
          },
          {
            "full": "Many neighbors donated their old books to help his noble project.",
            "chunks": [
              ["Many neighbors donated", "많은 이웃이 기부했습니다"],
              ["their old books", "자신들의 오래된 책을"],
              ["to help", "돕기 위해"],
              ["his noble project.", "그의 숭고한 프로젝트를"]
            ]
          },
          {
            "full": "In 1985, the local government gave him a special community award.",
            "chunks": [
              ["In 1985,", "1985년에"],
              ["the local government gave him", "지역 정부는 그에게 수여했습니다"],
              ["a special community award.", "특별한 지역사회 공로상을"]
            ]
          },
          {
            "full": "He also started a weekly reading club for young students there.",
            "chunks": [
              ["He also started", "그는 또한 시작했습니다"],
              ["a weekly reading club", "주간 독서 클럽을"],
              ["for young students there.", "그곳에서 어린 학생들을 위한"]
            ]
          },
          {
            "full": "He worked happily in the library for over thirty long years.",
            "chunks": [
              ["He worked happily", "그는 행복하게 일했습니다"],
              ["in the library", "도서관에서"],
              ["for over thirty long years.", "30년이 넘는 긴 세월 동안"]
            ]
          },
          {
            "full": "He never made any money from this quiet and peaceful place.",
            "chunks": [
              ["He never made any money", "그는 단 한 푼의 돈도 벌지 않았습니다"],
              ["from this quiet and peaceful place.", "이 조용하고 평화로운 공간에서"]
            ]
          },
          {
            "full": "Children visited him to read books and share their bright dreams.",
            "chunks": [
              ["Children visited him", "아이들은 그를 찾아왔습니다"],
              ["to read books", "책을 읽고"],
              ["and share their bright dreams.", "자신들의 눈부신 꿈을 나누기 위해"]
            ]
          },
          {
            "full": "He passed away peacefully at the age of eighty-five in 2035.",
            "chunks": [
              ["He passed away peacefully", "그는 평온하게 세상을 떠났습니다"],
              ["at the age of eighty-five", "85세의 나이로"],
              ["in 2035.", "2035년에"]
            ]
          },
          {
            "full": "Today, his son manages the library with the same deep love.",
            "chunks": [
              ["Today,", "오늘날에는"],
              ["his son manages the library", "그의 아들이 그 도서관을 운영하고 있습니다"],
              ["with the same deep love.", "똑같이 깊은 사랑으로"]
            ]
          },
          {
            "full": "His life shows us the true value of sharing with others.",
            "chunks": [
              ["His life shows us", "그의 일생은 우리에게 보여줍니다"],
              ["the true value of sharing", "나누는 것의 진정한 가치를"],
              ["with others.", "타인과"]
            ]
          }
        ]
      },
      {
        "id": "L3-P2",
        "title": "지문 2",
        "topic": "숲과 새들의 어머니, 엘렌",
        "sentences": [
          {
            "full": "Ellen grew up near a deep forest full of wild animals.",
            "chunks": [
              ["Ellen grew up", "엘렌은 어린 시절을 보냈습니다"],
              ["near a deep forest", "깊은 숲 근처에서"],
              ["full of wild animals.", "야생 동물로 가득한"]
            ]
          },
          {
            "full": "She studied biology at a famous state university in her country.",
            "chunks": [
              ["She studied biology", "그녀는 생물학을 공부했습니다"],
              ["at a famous state university", "어느 유명한 주립 대학에서"],
              ["in her country.", "자국의"]
            ]
          },
          {
            "full": "In 1992, she traveled to Africa to research injured wild birds.",
            "chunks": [
              ["In 1992,", "1992년에"],
              ["she traveled to Africa", "그녀는 아프리카로 떠났습니다"],
              ["to research injured wild birds.", "다친 야생 조류를 연구하기 위해"]
            ]
          },
          {
            "full": "She founded a small animal shelter near a quiet national park.",
            "chunks": [
              ["She founded", "그녀는 설립했습니다"],
              ["a small animal shelter", "작은 동물 보호소를"],
              ["near a quiet national park.", "한적한 국립공원 근처에"]
            ]
          },
          {
            "full": "The shelter saved more than three hundred birds in five years.",
            "chunks": [
              ["The shelter saved", "그 보호소는 구했습니다"],
              ["more than three hundred birds", "300마리가 넘는 새들을"],
              ["in five years.", "5년 동안"]
            ]
          },
          {
            "full": "She wrote an interesting book about her life with the birds.",
            "chunks": [
              ["She wrote an interesting book", "그녀는 흥미로운 책을 집필했습니다"],
              ["about her life", "자신의 삶에 관한"],
              ["with the birds.", "새들과 함께한"]
            ]
          },
          {
            "full": "The book became a bestseller and inspired many young student readers.",
            "chunks": [
              ["The book became a bestseller", "그 책은 베스트셀러가 되었습니다"],
              ["and inspired", "그리고 영감을 주었습니다"],
              ["many young student readers.", "수많은 어린 학생 독자들에게"]
            ]
          },
          {
            "full": "She did not like to appear on popular television interview shows.",
            "chunks": [
              ["She did not like to appear", "그녀는 출연하는 것을 꺼렸습니다"],
              ["on popular television interview shows.", "인기 있는 텔레비전 인터뷰 프로그램에"]
            ]
          },
          {
            "full": "Instead, she spent most of her time treating sick animals directly.",
            "chunks": [
              ["Instead,", "대신에"],
              ["she spent most of her time", "그녀는 자신의 대부분의 시간을 쏟았습니다"],
              ["treating sick animals directly.", "아픈 동물들을 직접 치료하는 데"]
            ]
          },
          {
            "full": "A large environmental group gave her a golden medal in 2005.",
            "chunks": [
              ["A large environmental group", "어느 대규모 환경 단체가"],
              ["gave her a golden medal", "그녀에게 금메달을 수여했습니다"],
              ["in 2005.", "2005년에"]
            ]
          },
          {
            "full": "She used the prize money to buy more medical equipment.",
            "chunks": [
              ["She used the prize money", "그녀는 그 상금을 사용했습니다"],
              ["to buy more medical equipment.", "더 많은 의료 장비를 구입하는 데"]
            ]
          },
          {
            "full": "She moved to Australia in 2015 to protect marine creatures.",
            "chunks": [
              ["She moved to Australia", "그녀는 호주로 이주했습니다"],
              ["in 2015", "2015년에"],
              ["to protect marine creatures.", "해양 생물들을 보호하기 위해"]
            ]
          },
          {
            "full": "Many international volunteers came to her new station to learn everything.",
            "chunks": [
              ["Many international volunteers came", "많은 다국적 자원봉사자가 찾아왔습니다"],
              ["to her new station", "그녀의 새로운 기지로"],
              ["to learn everything.", "모든 것을 배우기 위해"]
            ]
          },
          {
            "full": "She always believed that every living creature has a precious soul.",
            "chunks": [
              ["She always believed", "그녀는 항상 믿었습니다"],
              ["that every living creature", "모든 살아있는 생명체가"],
              ["has a precious soul.", "소중한 영혼을 지니고 있다고"]
            ]
          }
        ]
      },
      {
        "id": "L3-P3",
        "title": "지문 3",
        "topic": "오크타운의 기적",
        "sentences": [
          {
            "full": "Oaktown was a beautiful village famous for its large apple orchards.",
            "chunks": [
              ["Oaktown was a beautiful village", "오크타운은 아름다운 마을이었습니다"],
              ["famous for its large apple orchards.", "거대한 사과 과수원으로 유명한"]
            ]
          },
          {
            "full": "In 2002, a terrible storm destroyed most of the local farms.",
            "chunks": [
              ["In 2002,", "2002년에"],
              ["a terrible storm destroyed", "끔찍한 폭풍이 파괴해 버렸습니다"],
              ["most of the local farms.", "지역 농장의 대부분을"]
            ]
          },
          {
            "full": "Many older farmers lost their hopes and wanted to leave town.",
            "chunks": [
              ["Many older farmers", "많은 고령의 농부들이"],
              ["lost their hopes", "희망을 잃고"],
              ["and wanted to leave town.", "마을을 떠나고 싶어 했습니다"]
            ]
          },
          {
            "full": "A young farmer named Thomas suggested a smart and new plan.",
            "chunks": [
              ["A young farmer named Thomas", "토마스라는 이름의 한 젊은 농부가"],
              ["suggested", "제안했습니다"],
              ["a smart and new plan.", "기발하고 새로운 계획을"]
            ]
          },
          {
            "full": "He asked everyone to share their remaining seeds and agricultural tools.",
            "chunks": [
              ["He asked everyone", "그는 모든 사람에게 요청했습니다"],
              ["to share", "공유하자고"],
              ["their remaining seeds and agricultural tools.", "남은 씨앗과 농기구들을"]
            ]
          },
          {
            "full": "The villagers gathered at the community center to discuss the details.",
            "chunks": [
              ["The villagers gathered", "마을 사람들은 모여들었습니다"],
              ["at the community center", "주민 센터로"],
              ["to discuss the details.", "세부 사항을 논의하기 위해"]
            ]
          },
          {
            "full": "They built a shared tractor system to save heavy fuel costs.",
            "chunks": [
              ["They built a shared tractor system", "그들은 공동 트랙터 시스템을 구축했습니다"],
              ["to save heavy fuel costs.", "막대한 연료비를 절약하기 위해"]
            ]
          },
          {
            "full": "Young people worked hard on the farms of the elderly neighbors.",
            "chunks": [
              ["Young people worked hard", "젊은이들은 열심히 일했습니다"],
              ["on the farms", "농장에서"],
              ["of the elderly neighbors.", "나이 든 이웃들의"]
            ]
          },
          {
            "full": "By 2005, the apple production reached the highest record in history.",
            "chunks": [
              ["By 2005,", "2005년 무렵"],
              ["the apple production reached", "사과 생산량은 도달했습니다"],
              ["the highest record in history.", "역사상 최고 기록에"]
            ]
          },
          {
            "full": "A national magazine reported this wonderful recovery story on the front page.",
            "chunks": [
              ["A national magazine reported", "어느 전국 잡지가 보도했습니다"],
              ["this wonderful recovery story", "이 놀라운 회복의 이야기를"],
              ["on the front page.", "전면 표지에"]
            ]
          },
          {
            "full": "Tourists from other cities visited the town to buy fresh apples.",
            "chunks": [
              ["Tourists from other cities", "다른 도시에서 온 관광객이"],
              ["visited the town", "이 마을을 방문했습니다"],
              ["to buy fresh apples.", "신선한 사과를 사기 위해"]
            ]
          },
          {
            "full": "The farmers built a small agricultural school with their total profit.",
            "chunks": [
              ["The farmers built", "농부들은 세웠습니다"],
              ["a small agricultural school", "작은 농업 학교를"],
              ["with their total profit.", "자신들의 전체 수익금으로"]
            ]
          },
          {
            "full": "They offered free classes about organic farming methods to the public.",
            "chunks": [
              ["They offered free classes", "그들은 무료 수업을 제공했습니다"],
              ["about organic farming methods", "유기농법에 관한"],
              ["to the public.", "대중을 상대로"]
            ]
          },
          {
            "full": "This small community proved that cooperation can overcome any natural disaster.",
            "chunks": [
              ["This small community proved", "이 작은 공동체는 증명했습니다"],
              ["that cooperation can overcome", "협력이 극복할 수 있음을"],
              ["any natural disaster.", "어떠한 자연재해도"]
            ]
          }
        ]
      },
      {
        "id": "L3-P4",
        "title": "지문 4",
        "topic": "세상을 바꾼 소년의 정수 필터",
        "sentences": [
          {
            "full": "David was an ordinary high school student living in Chicago.",
            "chunks": [
              ["David was an ordinary high school student", "데이비드는 평범한 고등학생이었습니다"],
              ["living in Chicago.", "시카고에 사는"]
            ]
          },
          {
            "full": "He traveled to a small village in Asia with his uncle.",
            "chunks": [
              ["He traveled", "그는 여행을 떠났습니다"],
              ["to a small village in Asia", "아시아의 어느 작은 마을로"],
              ["with his uncle.", "삼촌과 함께"]
            ]
          },
          {
            "full": "He saw children drinking dirty water from a polluted local river.",
            "chunks": [
              ["He saw children drinking dirty water", "그는 아이들이 더러운 물을 마시는 것을 목격했습니다"],
              ["from a polluted local river.", "오염된 지역 강에서"]
            ]
          },
          {
            "full": "Many villagers suffered from serious stomach illnesses due to the water.",
            "chunks": [
              ["Many villagers suffered", "많은 마을 주민이 고통받고 있었습니다"],
              ["from serious stomach illnesses", "심각한 위장병으로"],
              ["due to the water.", "그 물 때문에"]
            ]
          },
          {
            "full": "After returning home, David decided to invent a cheap water filter.",
            "chunks": [
              ["After returning home,", "집으로 돌아온 후"],
              ["David decided to invent", "데이비드는 발명하기로 결심했습니다"],
              ["a cheap water filter.", "저렴한 정수 필터를"]
            ]
          },
          {
            "full": "He used simple everyday materials like sand, charcoal, and plastic bottles.",
            "chunks": [
              ["He used simple everyday materials", "그는 단순한 일상 재료들을 활용했습니다"],
              ["like sand, charcoal, and plastic bottles.", "모래, 숯, 플라스틱 병과 같은"]
            ]
          },
          {
            "full": "He failed eighty-two times before creating a perfectly working model.",
            "chunks": [
              ["He failed eighty-two times", "그는 82번이나 실패했습니다"],
              ["before creating", "만들어 내기 전까지"],
              ["a perfectly working model.", "완벽하게 작동하는 모델을"]
            ]
          },
          {
            "full": "His filter could clean dirty water within less than three minutes.",
            "chunks": [
              ["His filter could clean dirty water", "그의 필터는 더러운 물을 정화할 수 있었습니다"],
              ["within less than three minutes.", "3분도 채 지나지 않아"]
            ]
          },
          {
            "full": "In 2018, he won the first prize at a global science fair.",
            "chunks": [
              ["In 2018,", "2018년에"],
              ["he won the first prize", "그는 1등 상을 받았습니다"],
              ["at a global science fair.", "세계적인 과학 박람회에서"]
            ]
          },
          {
            "full": "A rich company offered to buy his patent for much money.",
            "chunks": [
              ["A rich company offered to buy", "어느 부유한 기업이 사겠다고 제안했습니다"],
              ["his patent", "그의 특허를"],
              ["for much money.", "큰돈에"]
            ]
          },
          {
            "full": "However, David refused the offer to keep the filter completely free.",
            "chunks": [
              ["However,", "하지만"],
              ["David refused the offer", "데이비드는 그 제안을 거절했습니다"],
              ["to keep the filter completely free.", "이 필터를 완전히 무료로 유지하기 위해"]
            ]
          },
          {
            "full": "He uploaded the simple instruction video onto the internet for everyone.",
            "chunks": [
              ["He uploaded the simple instruction video", "그는 간단한 설명 동영상을 올렸습니다"],
              ["onto the internet", "인터넷에"],
              ["for everyone.", "모두를 위해"]
            ]
          },
          {
            "full": "People around the world built their own filters using his design.",
            "chunks": [
              ["People around the world", "전 세계 사람들이"],
              ["built their own filters", "자신들만의 필터를 만들었습니다"],
              ["using his design.", "그의 디자인을 활용해"]
            ]
          },
          {
            "full": "His brilliant invention saved countless young lives across the developing countries.",
            "chunks": [
              ["His brilliant invention saved", "그의 훌륭한 발명품은 구했습니다"],
              ["countless young lives", "셀 수 없이 많은 어린 생명을"],
              ["across the developing countries.", "개발도상국 전역에서"]
            ]
          }
        ]
      },
      {
        "id": "L3-P5",
        "title": "지문 5",
        "topic": "마야 선생님의 달리는 교실",
        "sentences": [
          {
            "full": "Maya worked as a passionate elementary school teacher for ten years.",
            "chunks": [
              ["Maya worked", "마야는 일했습니다"],
              ["as a passionate elementary school teacher", "열정적인 초등학교 교사로"],
              ["for ten years.", "10년 동안"]
            ]
          },
          {
            "full": "She noticed that many poor children could not attend regular schools.",
            "chunks": [
              ["She noticed", "그녀는 알아차렸습니다"],
              ["that many poor children", "많은 빈곤층 아이들이"],
              ["could not attend regular schools.", "정규 학교에 다니지 못한다는"]
            ]
          },
          {
            "full": "They had to work in crowded street markets to support families.",
            "chunks": [
              ["They had to work", "그 아이들은 일해야만 했습니다"],
              ["in crowded street markets", "사람들로 붐비는 길거리 시장에서"],
              ["to support families.", "가족의 생계를 돕기 위해"]
            ]
          },
          {
            "full": "In 2012, she bought an old yellow bus with her savings.",
            "chunks": [
              ["In 2012,", "2012년에"],
              ["she bought an old yellow bus", "그녀는 낡은 노란색 버스를 한 대 구입했습니다"],
              ["with her savings.", "자신의 저축금으로"]
            ]
          },
          {
            "full": "She turned the vehicle into a colorful mobile classroom for kids.",
            "chunks": [
              ["She turned the vehicle", "그녀는 그 차량을 탈바꿈시켰습니다"],
              ["into a colorful mobile classroom", "알록달록한 이동식 교실로"],
              ["for kids.", "아이들을 위한"]
            ]
          },
          {
            "full": "She drove the bus to different poor neighborhoods every morning.",
            "chunks": [
              ["She drove the bus", "그녀는 버스를 몰았습니다"],
              ["to different poor neighborhoods", "서로 다른 가난한 동네로"],
              ["every morning.", "매일 아침"]
            ]
          },
          {
            "full": "She taught basic reading, writing, and mathematics to the children.",
            "chunks": [
              ["She taught", "그녀는 가르쳤습니다"],
              ["basic reading, writing, and mathematics", "기초적인 읽기, 쓰기, 그리고 수학을"],
              ["to the children.", "아이들에게"]
            ]
          },
          {
            "full": "At first, some parents did not trust her strange educational project.",
            "chunks": [
              ["At first,", "처음에"],
              ["some parents did not trust", "일부 부모들은 믿지 않았습니다"],
              ["her strange educational project.", "그녀의 이상한 교육 프로젝트를"]
            ]
          },
          {
            "full": "However, they changed their minds after seeing their children's happy smiles.",
            "chunks": [
              ["However,", "하지만"],
              ["they changed their minds", "그들은 마음을 바꾸었습니다"],
              ["after seeing their children's happy smiles.", "아이들의 행복한 미소를 본 후"]
            ]
          },
          {
            "full": "A local bakery provided free bread and milk for her students.",
            "chunks": [
              ["A local bakery provided", "어느 지역 빵집이 제공해 주었습니다"],
              ["free bread and milk", "무료 빵과 우유를"],
              ["for her students.", "그녀의 학생들을 위해"]
            ]
          },
          {
            "full": "She never accepted any tuition fees from the poor families there.",
            "chunks": [
              ["She never accepted any tuition fees", "그녀는 어떤 수업료도 받지 않았습니다"],
              ["from the poor families there.", "그곳의 가난한 가족들로부터"]
            ]
          },
          {
            "full": "In 2020, a famous foundation gave her a global education award.",
            "chunks": [
              ["In 2020,", "2020년에"],
              ["a famous foundation gave her", "어느 저명한 재단이 그녀에게 수여했습니다"],
              ["a global education award.", "세계 교육상을"]
            ]
          },
          {
            "full": "Five other cities copied her mobile school system the next year.",
            "chunks": [
              ["Five other cities copied", "다섯 개의 다른 도시가 모방했습니다"],
              ["her mobile school system", "그녀의 이동식 학교 시스템을"],
              ["the next year.", "다음 해에"]
            ]
          },
          {
            "full": "Her noble work proved that every child deserves a proper education.",
            "chunks": [
              ["Her noble work proved", "그녀의 숭고한 업적은 증명했습니다"],
              ["that every child deserves", "모든 아이가 마땅히 자격이 있다는 것을"],
              ["a proper education.", "올바른 교육을 받을"]
            ]
          }
        ]
      }
    ]
  },
  {
    "level": 4,
    "label": "LEVEL 4",
    "passages": [
      {
        "id": "L4-P1",
        "title": "지문 1",
        "topic": "주도적인 삶의 태도",
        "sentences": [
          {
            "full": "Modern society constantly forces young students to follow the pre-determined and crowded paths of conventional academic success.",
            "chunks": [
              ["Modern society constantly forces", "현대 사회는 끊임없이 강요합니다"],
              ["young students to follow", "어린 학생들이 따르도록"],
              ["the pre-determined and crowded paths", "미리 정해진 혼잡한 경로를"],
              ["of conventional academic success.", "획일적인 학업적 성공이라는"]
            ]
          },
          {
            "full": "However, it is absolutely crucial to realize that your unique life journey belongs completely to you.",
            "chunks": [
              ["However,", "하지만"],
              ["it is absolutely crucial to realize", "깨닫는 것이 절대적으로 중요합니다"],
              ["that your unique life journey", "당신의 독창적인 인생 여정은"],
              ["belongs completely to you.", "온전히 당신 자신만의 것이라는 사실을"]
            ]
          },
          {
            "full": "You must not let the loud expectations of other people drown out your own authentic dreams.",
            "chunks": [
              ["You must not let", "내버려 두어서는 결코 안 됩니다"],
              ["the loud expectations of other people", "다른 사람들의 시끄러운 기대가"],
              ["drown out your own authentic dreams.", "당신 자신의 진정한 꿈을 침몰시키도록"]
            ]
          },
          {
            "full": "Take a brave step forward and choose the subjects or hobbies that truly spark your inner passion.",
            "chunks": [
              ["Take a brave step forward", "용기 있는 발걸음을 내딛어"],
              ["and choose the subjects or hobbies", "과목이나 취미를 선택하십시오"],
              ["that truly spark your inner passion.", "당신 내면의 열정을 진정으로 불태우는"]
            ]
          },
          {
            "full": "It is important to set your own personal goals based on what you genuinely love and value.",
            "chunks": [
              ["It is important to set", "설정하는 것이 중요합니다"],
              ["your own personal goals", "자신만의 개인적인 목표를"],
              ["based on", "기반하여"],
              ["what you genuinely love and value.", "당신이 진정으로 사랑하고 가치 있게 여기는 것에"]
            ]
          },
          {
            "full": "When you live proactively, you can find a deep sense of responsibility and ultimate joy in life.",
            "chunks": [
              ["When you live proactively,", "당신이 주도적인 삶을 살아갈 때"],
              ["you can find", "당신은 발견할 수 있습니다"],
              ["a deep sense of responsibility", "깊은 책임감과"],
              ["and ultimate joy in life.", "삶에서 궁극적인 기쁨을"]
            ]
          },
          {
            "full": "Do not blindly conform to the standards of others just to feel temporarily safe and comfortable.",
            "chunks": [
              ["Do not blindly conform", "맹목적으로 순응하지 마십시오"],
              ["to the standards of others", "타인의 기준에"],
              ["just to feel", "단지 느끼기 위해"],
              ["temporarily safe and comfortable.", "일시적으로 안전하고 편안함을"]
            ]
          },
          {
            "full": "You should understand that standing out from the crowd is a beautiful sign of personal growth.",
            "chunks": [
              ["You should understand", "당신은 이해해야 합니다"],
              ["that standing out from the crowd", "군중들 사이에서 돋보이는 것은"],
              ["is a beautiful sign of personal growth.", "개인적 성장의 아름다운 신호라는 점을"]
            ]
          },
          {
            "full": "True confidence always grows from making independent choices and taking full control of your daily destiny.",
            "chunks": [
              ["True confidence always grows", "진정한 자신감은 항상 자라납니다"],
              ["from making independent choices", "독립적인 선택을 내리고"],
              ["and taking full control of your daily destiny.", "당신의 매일의 운명을 온전히 통제하는 것을 통해"]
            ]
          },
          {
            "full": "Remember that a meaningful life is built by your own hands, not by the desires of society.",
            "chunks": [
              ["Remember", "명심하십시오"],
              ["that a meaningful life is built", "의미 있는 삶은 건설된다는 사실을"],
              ["by your own hands,", "당신 자신의 손으로"],
              ["not by the desires of society.", "사회의 욕망이 아니라"]
            ]
          },
          {
            "full": "Therefore, you ought to cultivate the courage to say no to things that do not match your soul.",
            "chunks": [
              ["Therefore,", "그러므로"],
              ["you ought to cultivate the courage", "당신은 용기를 길러야 합니다"],
              ["to say no", "아니라고 거절할 수 있는"],
              ["to things that do not match your soul.", "당신의 영혼과 맞지 않는 것들에 대해"]
            ]
          },
          {
            "full": "Focus your precious energy on building the unique future you want to see for yourself tomorrow.",
            "chunks": [
              ["Focus your precious energy", "당신의 소중한 에너지를 집중하십시오"],
              ["on building the unique future", "그 독창적인 미래를 건설하는 데"],
              ["you want to see for yourself", "당신 자신을 위해 스스로 목격하고 싶은"],
              ["tomorrow.", "내일"]
            ]
          },
          {
            "full": "Never allow temporary fear of failure to stop you from pursuing your most cherished lifelong aspirations.",
            "chunks": [
              ["Never allow", "결코 있어서는 안 됩니다"],
              ["temporary fear of failure", "실패에 대한 일시적인 두려움 때문에"],
              ["to stop you from pursuing", "추구하는 것을 멈추는 일이"],
              ["your most cherished lifelong aspirations.", "당신이 마음속에 가장 소중히 품어온 평생의 염원을"]
            ]
          },
          {
            "full": "Be the active author of your own story and proudly walk down your beautiful chosen pathway.",
            "chunks": [
              ["Be the active author of your own story", "당신 자신의 인생 이야기의 능동적인 저자가 되어"],
              ["and proudly walk down", "자랑스럽게 걸어가십시오"],
              ["your beautiful chosen pathway.", "당신이 선택한 그 아름다운 길을"]
            ]
          }
        ]
      },
      {
        "id": "L4-P2",
        "title": "지문 2",
        "topic": "내면의 목소리와 고요함의 가치",
        "sentences": [
          {
            "full": "In this noisy digital world, we are always surrounded by endless messages and opinions from online platforms.",
            "chunks": [
              ["In this noisy digital world,", "이 시끄러운 디지털 세상에서"],
              ["we are always surrounded", "우리는 항상 둘러싸여 있습니다"],
              ["by endless messages and opinions", "끝없는 메시지와 의견들에"],
              ["from online platforms.", "온라인 플랫폼으로부터"]
            ]
          },
          {
            "full": "It is highly important to find quiet moments to listen closely to your own inner voice.",
            "chunks": [
              ["It is highly important to find", "찾는 것이 매우 중요합니다"],
              ["quiet moments", "고요한 순간을"],
              ["to listen closely", "귀를 기울일"],
              ["to your own inner voice.", "당신 자신의 내면의 목소리에"]
            ]
          },
          {
            "full": "You must step back from the constant distractions of smartphones to reflect on your true thoughts.",
            "chunks": [
              ["You must step back", "당신은 반드시 한 걸음 물러나야 합니다"],
              ["from the constant distractions of smartphones", "스마트폰의 끊임없는 방해로부터"],
              ["to reflect on your true thoughts.", "당신의 진짜 생각들을 성찰하기 위해"]
            ]
          },
          {
            "full": "Spending time alone in quiet nature should be viewed as a vital necessity for your mental health.",
            "chunks": [
              ["Spending time alone", "혼자만의 시간을 보내는 것은"],
              ["in quiet nature", "조용한 자연 속에서"],
              ["should be viewed as a vital necessity", "필수적인 조건으로 여겨져야 합니다"],
              ["for your mental health.", "당신의 정신 건강을 위한"]
            ]
          },
          {
            "full": "You ought to ask yourself what really matters to you when the world becomes perfectly still.",
            "chunks": [
              ["You ought to ask yourself", "당신은 스스로에게 물어보아야 합니다"],
              ["what really matters to you", "당신에게 진정으로 중요한 것이 무엇인지"],
              ["when the world becomes perfectly still.", "세상이 온전히 고요해질 때"]
            ]
          },
          {
            "full": "Do not let the superficial trends of social media dictate your self-worth or personal identity.",
            "chunks": [
              ["Do not let", "좌우하게 두지 마십시오"],
              ["the superficial trends of social media", "소셜 미디어의 피상적인 트렌드가"],
              ["dictate your self-worth or personal identity.", "당신의 자아 가치나 개인적 정체성을"]
            ]
          },
          {
            "full": "It is imperative to cultivate a peaceful mind that is not easily shaken by external judgments.",
            "chunks": [
              ["It is imperative to cultivate", "기르는 것이 절대적으로 필요합니다"],
              ["a peaceful mind", "평온한 마음을"],
              ["that is not easily shaken", "쉽게 흔들리지 않는"],
              ["by external judgments.", "외부적 판단에"]
            ]
          },
          {
            "full": "Silence provides the perfect space where deep creativity and genuine self-awareness can finally blossom.",
            "chunks": [
              ["Silence provides the perfect space", "침묵은 완벽한 공간을 제공합니다"],
              ["where deep creativity and genuine self-awareness", "깊은 창의성과 진정한 자아 인식이"],
              ["can finally blossom.", "마침내 꽃피울 수 있는"]
            ]
          },
          {
            "full": "Protect your inner sanctuary from the chaotic noise of modern life with extreme and careful dedication.",
            "chunks": [
              ["Protect your inner sanctuary", "당신의 내면의 안식처를 지켜내기 위해"],
              ["from the chaotic noise of modern life", "현대 삶의 혼란스러운 소음으로부터"],
              ["with extreme and careful dedication.", "극도로 세심한 노력을 기울이십시오"]
            ]
          },
          {
            "full": "You should trust the wisdom that comes from your quiet reflections during these peaceful moments.",
            "chunks": [
              ["You should trust the wisdom", "당신은 지혜를 신뢰해야 합니다"],
              ["that comes from your quiet reflections", "당신의 고요한 성찰에서 나오는"],
              ["during these peaceful moments.", "이러한 평화로운 순간 동안"]
            ]
          },
          {
            "full": "Understanding who you are in total silence is the strongest foundation for building real confidence.",
            "chunks": [
              ["Understanding who you are", "자신이 누구인지 이해하는 것은"],
              ["in total silence", "완전한 침묵 속에서"],
              ["is the strongest foundation", "가장 강력한 토대입니다"],
              ["for building real confidence.", "진짜 자신감을 세우기 위한"]
            ]
          },
          {
            "full": "Therefore, make a daily habit of turning off your digital screens to reconnect with yourself.",
            "chunks": [
              ["Therefore,", "그러므로"],
              ["make a daily habit", "매일의 습관으로 만드십시오"],
              ["of turning off your digital screens", "디지털 화면을 끄는 것을"],
              ["to reconnect with yourself.", "당신 자신과 다시 연결되기 위해"]
            ]
          },
          {
            "full": "Genuine answers to life's biggest questions are rarely found in the loud voices of others.",
            "chunks": [
              ["Genuine answers to life's biggest questions", "삶의 가장 큰 질문들에 대한 진짜 해답은"],
              ["are rarely found", "발견되는 경우가 거의 없습니다"],
              ["in the loud voices of others.", "타인의 시끄러운 목소리 속에서"]
            ]
          },
          {
            "full": "Listen to the soft melody of your heart and follow its gentle guidance every single day.",
            "chunks": [
              ["Listen to the soft melody of your heart", "당신의 심장의 부드러운 멜로디에 귀를 기울이고"],
              ["and follow its gentle guidance", "그 온화한 안내를 따르십시오"],
              ["every single day.", "매일"]
            ]
          }
        ]
      },
      {
        "id": "L4-P3",
        "title": "지문 3",
        "topic": "건강한 협력과 배려의 태도",
        "sentences": [
          {
            "full": "Competing with classmates can sometimes motivate you to study harder and achieve better academic results.",
            "chunks": [
              ["Competing with classmates", "반 친구들과 경쟁하는 것은"],
              ["can sometimes motivate you", "때때로 당신을 자극할 수 있습니다"],
              ["to study harder", "더 열심히 공부하고"],
              ["and achieve better academic results.", "더 나은 학업 성취를 이루도록"]
            ]
          },
          {
            "full": "However, it is far more beneficial to focus on the great value of genuine teamwork and cooperation.",
            "chunks": [
              ["However,", "하지만"],
              ["it is far more beneficial", "훨씬 더 유익합니다"],
              ["to focus on the great value", "거대한 가치에 집중하는 것이"],
              ["of genuine teamwork and cooperation.", "진정한 팀워크와 협력의"]
            ]
          },
          {
            "full": "You must recognize that true success is not about defeating others but about lifting everyone up.",
            "chunks": [
              ["You must recognize", "당신은 인식해야 합니다"],
              ["that true success is not", "진정한 성공이란 결코 아니라는 것을"],
              ["about defeating others", "타인을 패배시키는 것이"],
              ["but about lifting everyone up.", "오히려 모두를 일으켜 세우는 것임을"]
            ]
          },
          {
            "full": "We should learn to share our knowledge and unique skills to solve complex problems together.",
            "chunks": [
              ["We should learn to share", "우리는 공유하는 법을 배워야 합니다"],
              ["our knowledge and unique skills", "우리의 지식과 독특한 기술을"],
              ["to solve complex problems together.", "복잡한 문제들을 함께 해결하기 위해"]
            ]
          },
          {
            "full": "It is essential to listen with open minds to the diverse viewpoints of your group members.",
            "chunks": [
              ["It is essential to listen", "귀를 기울이는 것이 필수적입니다"],
              ["with open minds", "열린 마음으로"],
              ["to the diverse viewpoints of your group members.", "모둠원들의 다양한 관점에도"]
            ]
          },
          {
            "full": "Always respect the unique contributions of every individual, regardless of their academic levels or backgrounds.",
            "chunks": [
              ["Always respect", "항상 존중하십시오"],
              ["the unique contributions of every individual,", "모든 개인의 독특한 기여를"],
              ["regardless of their academic levels or backgrounds.", "그들의 학업 수준이나 배경에 상관없이"]
            ]
          },
          {
            "full": "You ought to offer a helping hand to those who struggle with difficult school assignments.",
            "chunks": [
              ["You ought to offer a helping hand", "당신은 도움의 손길을 내밀어야 합니다"],
              ["to those who struggle", "힘들어하는 사람들에게"],
              ["with difficult school assignments.", "어려운 학교 과제로 인해"]
            ]
          },
          {
            "full": "Supporting your peers builds a kind community where everyone feels completely safe and valued.",
            "chunks": [
              ["Supporting your peers", "동료들을 지원하는 것은"],
              ["builds a kind community", "친절한 공동체를 형성합니다"],
              ["where everyone feels", "모든 사람이 느끼는"],
              ["completely safe and valued.", "온전히 안전하고 가치 있다고"]
            ]
          },
          {
            "full": "Do not allow jealousy or selfish ambition to ruin the beautiful bonds of your friendships.",
            "chunks": [
              ["Do not allow", "결코 내버려 두지 마십시오"],
              ["jealousy or selfish ambition", "시기심이나 이기적인 야망이"],
              ["to ruin the beautiful bonds", "아름다운 결속을 파괴하도록"],
              ["of your friendships.", "우정이라는"]
            ]
          },
          {
            "full": "It is important to remember that we can achieve much more together than alone.",
            "chunks": [
              ["It is important to remember", "기억하는 것이 중요합니다"],
              ["that we can achieve much more together", "우리가 함께 훨씬 더 많은 것을 성취할 수 있다는 점을"],
              ["than alone.", "혼자일 때보다"]
            ]
          },
          {
            "full": "Therefore, you should strive to be a supportive collaborator rather than a fierce rival.",
            "chunks": [
              ["Therefore,", "그러므로"],
              ["you should strive to be", "당신은 되기 위해 노력해야 합니다"],
              ["a supportive collaborator", "지지하는 협력자가"],
              ["rather than a fierce rival.", "치열한 경쟁자가 되기보다는"]
            ]
          },
          {
            "full": "Practice empathy in your daily interactions to create a warm atmosphere in your classroom.",
            "chunks": [
              ["Practice empathy", "공감을 연습하십시오"],
              ["in your daily interactions", "당신의 매일의 상호작용 속에서"],
              ["to create a warm atmosphere", "따뜻한 분위기를 조성하기 위해"],
              ["in your classroom.", "교실 안에"]
            ]
          },
          {
            "full": "Kindness is a powerful force that can easily transform a stressful environment into a joyful one.",
            "chunks": [
              ["Kindness is a powerful force", "친절은 강력한 힘입니다"],
              ["that can easily transform", "쉽게 바꿀 수 있는"],
              ["a stressful environment", "스트레스가 많은 환경을"],
              ["into a joyful one.", "즐거운 곳으로"]
            ]
          },
          {
            "full": "Work together with a shared heart and witness the amazing miracles of collective effort today.",
            "chunks": [
              ["Work together", "함께 일하십시오"],
              ["with a shared heart", "공동의 마음으로"],
              ["and witness the amazing miracles", "그리고 놀라운 기적을 목격하십시오"],
              ["of collective effort today.", "오늘 집단적 노력이 만들어내는"]
            ]
          }
        ]
      },
      {
        "id": "L4-P4",
        "title": "지문 4",
        "topic": "실패를 환영하는 회복탄력성",
        "sentences": [
          {
            "full": "Experiencing sudden failure or making a big mistake can be a very painful and discouraging event.",
            "chunks": [
              ["Experiencing sudden failure", "갑작스러운 실패를 경험하거나"],
              ["or making a big mistake", "큰 실수를 저지르는 것은"],
              ["can be a very painful and discouraging event.", "매우 고통스럽고 낙담하게 만드는 사건일 수 있습니다"]
            ]
          },
          {
            "full": "However, it is important to treat these difficult moments as valuable opportunities for growth.",
            "chunks": [
              ["However,", "하지만"],
              ["it is important to treat", "대하는 것이 중요합니다"],
              ["these difficult moments", "이러한 힘든 순간들을"],
              ["as valuable opportunities for growth.", "성장을 위한 가치 있는 기회로"]
            ]
          },
          {
            "full": "You must not view mistakes as proof of your weakness or lack of talent.",
            "chunks": [
              ["You must not view mistakes", "실수들을 바라보아서는 안 됩니다"],
              ["as proof of your weakness", "당신의 약점이나"],
              ["or lack of talent.", "재능이 부족하다는 증거로"]
            ]
          },
          {
            "full": "Instead, you should analyze what went wrong with a calm and deeply curious mind.",
            "chunks": [
              ["Instead,", "대신에"],
              ["you should analyze what went wrong", "당신은 무엇이 잘못되었는지 분석해야 합니다"],
              ["with a calm and deeply curious mind.", "차분하고 깊이 호기심 어린 마음으로"]
            ]
          },
          {
            "full": "It is through overcoming adversity that we build real mental strength and lasting resilience.",
            "chunks": [
              ["It is through overcoming adversity", "바로 역경을 극복해 내는 것을 통해서입니다"],
              ["that we build real mental strength", "우리가 진짜 정신적 힘과"],
              ["and lasting resilience.", "지속적인 회복탄력성을 기르는 것은"]
            ]
          },
          {
            "full": "Do not let the fear of being judged prevent you from trying new challenges.",
            "chunks": [
              ["Do not let the fear of being judged", "평가받는 것에 대한 두려움이"],
              ["prevent you from trying", "당신이 시도하는 것을 가로막게 두지 마십시오"],
              ["new challenges.", "새로운 도전을"]
            ]
          },
          {
            "full": "You ought to embrace your flaws because they are natural steps toward becoming wiser.",
            "chunks": [
              ["You ought to embrace your flaws", "당신은 자신의 부족함을 포용해야 합니다"],
              ["because they are natural steps", "그것들은 자연스러운 단계이기 때문에"],
              ["toward becoming wiser.", "당신이 더 현명해지기 위해"]
            ]
          },
          {
            "full": "Every successful expert was once an amateur who refused to give up after failing.",
            "chunks": [
              ["Every successful expert", "모든 성공한 전문가 역시"],
              ["was once an amateur", "한때는 아마추어였습니다"],
              ["who refused to give up", "포기하기를 거부했던"],
              ["after failing.", "실패한 후에도"]
            ]
          },
          {
            "full": "Change your inner dialogue from negative self-criticism to warm and encouraging words of self-compassion.",
            "chunks": [
              ["Change your inner dialogue", "당신의 내면의 대화를 바꾸십시오"],
              ["from negative self-criticism", "부정적인 자기비판에서"],
              ["to warm and encouraging words", "따뜻하고 격려하는 말로"],
              ["of self-compassion.", "자기 자비의"]
            ]
          },
          {
            "full": "It is crucial to believe in your ability to learn and adapt over time.",
            "chunks": [
              ["It is crucial to believe in your ability", "당신의 능력을 믿는 것이 중요합니다"],
              ["to learn and adapt", "배우고 적응할 수 있다는"],
              ["over time.", "시간이 흐르면서"]
            ]
          },
          {
            "full": "Therefore, you should stand up proudly every time you fall down on your path.",
            "chunks": [
              ["Therefore,", "그러므로"],
              ["you should stand up proudly", "당신은 자랑스럽게 일어서야 합니다"],
              ["every time you fall down", "넘어질 때마다"],
              ["on your path.", "인생의 길에서"]
            ]
          },
          {
            "full": "View every obstacle as a strict but helpful teacher that guides you to success.",
            "chunks": [
              ["View every obstacle", "모든 장애물을 바라보십시오"],
              ["as a strict but helpful teacher", "엄격하지만 도움이 되는 스승으로"],
              ["that guides you to success.", "당신을 성공으로 인도하는"]
            ]
          },
          {
            "full": "Real power does not mean never failing, but rising stronger after every single defeat.",
            "chunks": [
              ["Real power does not mean", "진정한 힘이란 결코 의미하지 않습니다"],
              ["never failing,", "단 한 번도 실패하지 않는 것이 아니라"],
              ["but rising stronger", "더 강하게 일어나는 것을"],
              ["after every single defeat.", "패배할 때마다"]
            ]
          },
          {
            "full": "Keep moving forward with a brave smile and trust the beautiful process of your transformation.",
            "chunks": [
              ["Keep moving forward", "앞으로 나아가고"],
              ["with a brave smile", "용감한 미소를 지으며"],
              ["and trust the beautiful process", "그리고 그 아름다운 과정을 신뢰하십시오"],
              ["of your transformation.", "당신의 변화라는"]
            ]
          }
        ]
      },
      {
        "id": "L4-P5",
        "title": "지문 5",
        "topic": "비판에 대처하는 현명한 태도",
        "sentences": [
          {
            "full": "Receiving harsh criticism from others can easily hurt your feelings and damage your personal confidence.",
            "chunks": [
              ["Receiving harsh criticism from others", "타인으로부터 가혹한 비판을 받는 것은"],
              ["can easily hurt your feelings", "당신의 감정을 쉽게 상하게 하고"],
              ["and damage your personal confidence.", "개인적인 자신감을 손상시킬 수 있습니다"]
            ]
          },
          {
            "full": "However, it is essential to develop a mature attitude toward the feedback you receive.",
            "chunks": [
              ["However,", "하지만"],
              ["it is essential to develop a mature attitude", "성숙한 태도를 발달시키는 것이 필수적입니다"],
              ["toward the feedback you receive.", "당신이 받는 피드백에 대해"]
            ]
          },
          {
            "full": "You must separate your true identity from the subjective opinions and comments of other people.",
            "chunks": [
              ["You must separate your true identity", "당신은 당신의 진짜 정체성을 분리해 내야 합니다"],
              ["from the subjective opinions and comments", "주관적인 의견 및 논평들로부터"],
              ["of other people.", "타인들의"]
            ]
          },
          {
            "full": "We should understand that constructive criticism can actually help us fix our hidden blind spots.",
            "chunks": [
              ["We should understand", "우리는 이해해야 합니다"],
              ["that constructive criticism can actually help us", "건설적인 비판이 실제로 우리에게 도움을 줄 수 있음을"],
              ["fix our hidden blind spots.", "우리의 숨겨진 맹점들을 고치는 데"]
            ]
          },
          {
            "full": "It is important to stay calm and listen carefully before reacting with anger or defense.",
            "chunks": [
              ["It is important to stay calm", "차분함을 유지하는 것이 중요합니다"],
              ["and listen carefully", "그리고 주의 깊게 귀 기울이는 것이"],
              ["before reacting", "반응하기 전에"],
              ["with anger or defense.", "분노나 방어로"]
            ]
          },
          {
            "full": "Do not let malicious words enter your heart, but evaluate the advice objectively and wisely.",
            "chunks": [
              ["Do not let malicious words", "악의적인 말이"],
              ["enter your heart,", "당신의 마음에 파고들게 두지 말고"],
              ["but evaluate the advice", "그 조언을 평가하십시오"],
              ["objectively and wisely.", "객관적이고 현명하게"]
            ]
          },
          {
            "full": "You ought to filter out the totally useless noise and extract only the truly valuable lessons.",
            "chunks": [
              ["You ought to filter out", "당신은 걸러내야 합니다"],
              ["the totally useless noise", "완전히 쓸모없는 소음은"],
              ["and extract only the truly valuable lessons.", "그리고 오직 진정으로 가치 있는 교훈만을 추출해야 합니다"]
            ]
          },
          {
            "full": "Asking for feedback from trusted mentors is a highly effective way to improve yourself.",
            "chunks": [
              ["Asking for feedback", "피드백을 요청하는 것은"],
              ["from trusted mentors", "당신이 신뢰할 수 있는 멘토에게"],
              ["is a highly effective way", "매우 효과적인 방법입니다"],
              ["to improve yourself.", "당신 자신을 향상하는"]
            ]
          },
          {
            "full": "Use the words of others as a practical tool for building a better version of yourself.",
            "chunks": [
              ["Use the words of others", "타인의 말을 사용하십시오"],
              ["as a practical tool", "실용적인 도구로"],
              ["for building a better version of yourself.", "더 나은 버전의 당신 자신을 빚어내기 위한"]
            ]
          },
          {
            "full": "It is crucial to remember that nobody is perfect and everyone is constantly learning.",
            "chunks": [
              ["It is crucial to remember", "명심하는 것이 중요합니다"],
              ["that nobody is perfect", "완벽한 사람은 아무도 없으며"],
              ["and everyone is constantly learning.", "모든 사람이 끊임없이 배우고 있다는 사실을"]
            ]
          },
          {
            "full": "Therefore, you should welcome honest critiques because they can accelerate your journey toward mastery.",
            "chunks": [
              ["Therefore,", "그러므로"],
              ["you should welcome honest critiques", "당신은 솔직한 비판을 환영해야 하는데"],
              ["because they can accelerate", "왜냐하면 그것들이 가속할 수 있기 때문입니다"],
              ["your journey toward mastery.", "숙달을 향한 당신의 여정을"]
            ]
          },
          {
            "full": "Always keep an open mind and treat every piece of advice as a potential hidden gift.",
            "chunks": [
              ["Always keep an open mind", "언제나 열린 마음을 유지하고"],
              ["and treat every piece of advice", "모든 조언을 대하십시오"],
              ["as a potential hidden gift.", "잠재적으로 숨겨진 선물로"]
            ]
          },
          {
            "full": "Your worth is not determined by praise, nor is it destroyed by negative remarks.",
            "chunks": [
              ["Your worth is not determined", "당신의 가치는 결코 결정되지 않으며"],
              ["by praise,", "칭찬에 의해"],
              ["nor is it destroyed", "결코 파괴되지도 않습니다"],
              ["by negative remarks.", "부정적인 말에 의해"]
            ]
          },
          {
            "full": "Stand firm in your self-worth while gracefully growing through the diverse perspectives around you.",
            "chunks": [
              ["Stand firm in your self-worth", "당신의 자아 가치 속에 굳건히 서 있으십시오"],
              ["while gracefully growing", "우아하게 성장하는 동시에"],
              ["through the diverse perspectives around you.", "당신 주변의 다양한 관점들을 통해"]
            ]
          }
        ]
      }
    ]
  },
{
    "level": 5,
    "label": "LEVEL 5",
    "passages": [
      {
        "id": "L5-P1",
        "title": "지문 1",
        "topic": "삶의 불확실성을 포용하는 지혜",
        "sentences": [
          {
            "full": "Human life is filled with unpredictable changes that we can never fully anticipate or control.",
            "chunks": [
              ["Human life is filled", "인간의 삶은 가득 차 있습니다"],
              ["with unpredictable changes", "불확실한 변화들로"],
              ["that we can never fully anticipate or control.", "우리가 결코 완전히 예측하거나 통제할 수 없는"]
            ]
          },
          {
            "full": "Many people experience deep anxiety by desperately trying to secure a guaranteed future in a fluid world.",
            "chunks": [
              ["Many people experience deep anxiety", "많은 사람이 깊은 불안을 경험합니다"],
              ["by desperately trying to secure", "필사적으로 확보하려고 노력하기 때문에"],
              ["a guaranteed future", "보장된 미래를"],
              ["in a fluid world.", "유동적인 세상에서"]
            ]
          },
          {
            "full": "Philosophical wisdom teaches us that resisting uncertainty only creates unnecessary suffering and prevents real peace.",
            "chunks": [
              ["Philosophical wisdom teaches us", "철학적 지혜는 가르칩니다"],
              ["that resisting uncertainty", "불확실성에 저항하는 것이"],
              ["only creates unnecessary suffering", "단지 불필요한 고통을 만들 뿐이며"],
              ["and prevents real peace.", "진짜 평화를 찾는 것을 막는다고"]
            ]
          },
          {
            "full": "By accepting the simple truth that nothing stays the same, we learn to navigate life with grace.",
            "chunks": [
              ["By accepting the simple truth", "단순한 진리를 받아들임으로써"],
              ["that nothing stays the same,", "아무것도 그대로 머물지 않는다는"],
              ["we learn to navigate life", "우리는 삶을 항해하는 법을 배웁니다"],
              ["with grace.", "우아하게"]
            ]
          },
          {
            "full": "Every unexpected obstacle that breaks our original plans is actually a hidden doorway to new possibilities.",
            "chunks": [
              ["Every unexpected obstacle", "모든 예기치 못한 장애물은"],
              ["that breaks our original plans", "우리의 원래 계획을 깨뜨리는"],
              ["is actually a hidden doorway", "사실 숨겨진 문입니다"],
              ["to new possibilities.", "새로운 가능성으로 향하는"]
            ]
          },
          {
            "full": "When we let go of our rigid desires for absolute control, we open our minds to creative solutions.",
            "chunks": [
              ["When we let go of", "우리가 내려놓을 때"],
              ["our rigid desires for absolute control,", "절대적인 통제를 향한 경직된 욕망을"],
              ["we open our minds", "우리는 마음에 엽니다"],
              ["to creative solutions.", "창의적인 해결책에"]
            ]
          },
          {
            "full": "The beauty of our journey lies precisely in the fact that we do not know the final destination.",
            "chunks": [
              ["The beauty of our journey", "우리 여정의 아름다움은"],
              ["lies precisely in the fact", "사실 바로 그 자체에 존재합니다"],
              ["that we do not know", "우리가 알지 못한다는"],
              ["the final destination.", "최종 목적지를"]
            ]
          },
          {
            "full": "Therefore, we must cultivate a flexible mindset that welcomes surprise and adapts to the changing winds of destiny.",
            "chunks": [
              ["Therefore,", "그러므로"],
              ["we must cultivate a flexible mindset", "우리는 유연한 사고방식을 길러야 합니다"],
              ["that welcomes surprise", "놀라움을 환영하고"],
              ["and adapts to the changing winds of destiny.", "운명의 변하는 바람에 쉽게 적응하는"]
            ]
          },
          {
            "full": "Those who can smile at the unknown possess a profound inner strength that external circumstances cannot destroy.",
            "chunks": [
              ["Those who can smile at the unknown", "미지의 것에 미소 지을 수 있는 사람들은"],
              ["possess a profound inner strength", "깊은 내면의 힘을 소유합니다"],
              ["that external circumstances cannot destroy.", "외부 상황이 결코 파괴할 수 없는"]
            ]
          },
          {
            "full": "True stability comes not from fixing the world, but from building a resilient center within ourselves.",
            "chunks": [
              ["True stability comes", "진정한 안정은 옵니다"],
              ["not from fixing the world,", "세상을 고정하는 것에서 오는 것이 아니라"],
              ["but from building a resilient center", "회복탄력성 있는 중심을 세우는 것에서"],
              ["within ourselves.", "우리 내면에"]
            ]
          },
          {
            "full": "We must recognize that the most significant growth occurs during periods of maximum confusion and structural transition.",
            "chunks": [
              ["We must recognize", "우리는 인식해야 합니다"],
              ["that the most significant growth occurs", "가장 의미 있는 성장이 일어난다는 점을"],
              ["during periods", "시기 동안"],
              ["of maximum confusion and structural transition.", "극심한 혼란과 구조적 전환의"]
            ]
          },
          {
            "full": "Embrace the mysterious nature of existence and trust that the universe has a unique purpose for your path.",
            "chunks": [
              ["Embrace the mysterious nature of existence", "존재의 신비로운 본질을 포용하십시오"],
              ["and trust that the universe", "그리고 신뢰하십시오"],
              ["has a unique purpose", "우주가 독특한 목적을 가지고 있음을"],
              ["for your path.", "당신의 길을 위한"]
            ]
          },
          {
            "full": "Every step into the unknown is a brave act of faith that expands our spiritual boundaries.",
            "chunks": [
              ["Every step", "모든 발걸음은"],
              ["into the unknown", "미지의 어둠 속으로 내딛는"],
              ["is a brave act of faith", "용감한 믿음의 행위입니다"],
              ["that expands our spiritual boundaries.", "우리의 영적인 경계를 확장하는"]
            ]
          },
          {
            "full": "Instead of fearing what might happen tomorrow, focus entirely on the incredible potential of the present.",
            "chunks": [
              ["Instead of fearing", "두려워하는 대신"],
              ["what might happen tomorrow,", "내일 무슨 일이 일어날지"],
              ["focus entirely", "온전히 집중하십시오"],
              ["on the incredible potential of the present.", "현재 존재하는 놀라운 잠재력에"]
            ]
          },
          {
            "full": "Wisdom is the gentle art of flowing with the river of time rather than fighting its natural current.",
            "chunks": [
              ["Wisdom is the gentle art", "지혜는 부드러운 기술입니다"],
              ["of flowing with the river of time", "시간의 강물과 함께 흘러가는"],
              ["rather than fighting its natural current.", "그 자연스러운 흐름에 대항해 싸우기보다"]
            ]
          },
          {
            "full": "Walk forward with an open heart and discover the absolute joy of a life lived without certainties.",
            "chunks": [
              ["Walk forward with an open heart", "열린 마음으로 앞으로 걸어가십시오"],
              ["and discover the absolute joy", "그리고 절대적인 기쁨을 발견하십시오"],
              ["of a life lived", "살아가는 삶의"],
              ["without certainties.", "확실성 없이"]
            ]
          }
        ]
      },
      {
        "id": "L5-P2",
        "title": "지문 2",
        "topic": "시간의 흐름과 순간의 가치",
        "sentences": [
          {
            "full": "Time is a mysterious river that flows continuously without ever pausing for a single moment for anyone.",
            "chunks": [
              ["Time is a mysterious river", "시간은 신비로운 강물입니다"],
              ["that flows continuously", "연속적으로 흐르는"],
              ["without ever pausing for a single moment", "단 한 순간도 멈추지 않고"],
              ["for anyone.", "그 누구를 위해서도"]
            ]
          },
          {
            "full": "Modern humans are constantly rushing toward the future, completely ignoring the precious beauty that surrounds them.",
            "chunks": [
              ["Modern humans are constantly rushing", "현대인은 끊임없이 돌진합니다"],
              ["toward the future,", "미래를 향해"],
              ["completely ignoring the precious beauty", "소중한 아름다움을 완전히 무시한 채"],
              ["that surrounds them.", "그들을 둘러싼"]
            ]
          },
          {
            "full": "We often treat the present moment as a mere stepping stone to reach an imaginary happiness.",
            "chunks": [
              ["We often treat the present moment", "우리는 종종 현재의 순간을 취급합니다"],
              ["as a mere stepping stone", "단순한 디딤돌로"],
              ["to reach an imaginary happiness.", "상상 속의 행복에 도달하기 위한"]
            ]
          },
          {
            "full": "However, the profound truth is that the present is the only reality we will ever possess.",
            "chunks": [
              ["However,", "하지만"],
              ["the profound truth is", "존재의 깊은 진실은 ~라는 점입니다"],
              ["that the present is the only reality", "현재가 유일한 진짜 현실이"],
              ["we will ever possess.", "우리가 소유할"]
            ]
          },
          {
            "full": "The past is already a fading memory, while the future remains an unwritten story filled with illusions.",
            "chunks": [
              ["The past is already a fading memory,", "과거는 이미 희미해져 가는 기억이며"],
              ["while the future remains", "반면에 미래는 남아 있습니다"],
              ["an unwritten story", "쓰이지 않은 이야기로"],
              ["filled with illusions.", "환상으로 가득 찬"]
            ]
          },
          {
            "full": "Therefore, learning to inhabit the current moment fully is the ultimate secret to a meaningful life.",
            "chunks": [
              ["Therefore,", "그러므로"],
              ["learning to inhabit the current moment fully", "현재의 순간에 온전히 거주하는 법을 배우는 것은"],
              ["is the ultimate secret", "궁극적인 비밀입니다"],
              ["to a meaningful life.", "의미 있는 삶을 살기 위한"]
            ]
          },
          {
            "full": "When we give absolute attention to the small details of daily tasks, ordinary actions become extraordinary experiences.",
            "chunks": [
              ["When we give absolute attention", "우리가 절대적인 주의를 기울일 때"],
              ["to the small details of daily tasks,", "일상의 작은 세부 사항들에"],
              ["ordinary actions", "평범한 행동들은"],
              ["become extraordinary experiences.", "비범한 경험이 됩니다"]
            ]
          },
          {
            "full": "Slow down your rapid thoughts and listen closely to the quiet rhythm of your breathing today.",
            "chunks": [
              ["Slow down your rapid thoughts", "당신의 빠른 생각을 늦추십시오"],
              ["and listen closely", "그리고 귀를 기울여 보십시오"],
              ["to the quiet rhythm", "고요한 리듬에"],
              ["of your breathing today.", "오늘 당신의 호흡이 만드는"]
            ]
          },
          {
            "full": "True wealth is not measured by the number of things we accumulate, but by the depth of our awareness.",
            "chunks": [
              ["True wealth is not measured", "진정한 부는 측정되지 않습니다"],
              ["by the number of things we accumulate,", "우리가 축적하는 물건의 숫자가 아니라"],
              ["but by the depth", "깊이에 의해"],
              ["of our awareness.", "우리의 인식의"]
            ]
          },
          {
            "full": "By practicing mindfulness, we can extract the sweet essence of joy from even the simplest moments.",
            "chunks": [
              ["By practicing mindfulness,", "마음챙김을 연습함으로써"],
              ["we can extract the sweet essence of joy", "우리는 기쁨의 달콤한 본질을 추출할 수 있습니다"],
              ["from even the simplest moments.", "존재의 가장 단순한 순간들로부터도"]
            ]
          },
          {
            "full": "We must realize that every single breath we take is a priceless gift that never happens again.",
            "chunks": [
              ["We must realize", "우리는 깨달아야 합니다"],
              ["that every single breath we take", "우리가 내쉬는 모든 단 한 번의 호흡이"],
              ["is a priceless gift", "소중한 선물임을"],
              ["that never happens again.", "결코 다시는 일어나지 않을"]
            ]
          },
          {
            "full": "Do not let your precious days pass by like a gray blur while chasing endless external achievements.",
            "chunks": [
              ["Do not let your precious days pass by", "당신의 소중한 날들이 지나가 버리게 두지 마십시오"],
              ["like a gray blur", "흐릿하게"],
              ["while chasing", "쫓느라"],
              ["endless external achievements.", "끝없는 외부의 성취를"]
            ]
          },
          {
            "full": "Wake up to the vivid reality of the world and appreciate the magnificent artwork that nature displays.",
            "chunks": [
              ["Wake up", "깨어나십시오"],
              ["to the vivid reality of the world", "세상의 생생한 현실에"],
              ["and appreciate the magnificent artwork", "그리고 웅장한 예술 작품을 감상하십시오"],
              ["that nature displays.", "자연이 전시하는"]
            ]
          },
          {
            "full": "Real peace is found when we stop fighting change and embrace the temporary nature of life.",
            "chunks": [
              ["Real peace is found", "진정한 평온은 발견됩니다"],
              ["when we stop fighting change", "우리가 변화와 싸우기를 멈추고"],
              ["and embrace the temporary nature of life.", "삶의 일시적인 본질을 포용할 때"]
            ]
          },
          {
            "full": "Cherish the people around you, because their unique presence is a beautiful spark that eventually fades away.",
            "chunks": [
              ["Cherish the people around you,", "당신 주변의 사람들을 아끼십시오"],
              ["because their unique presence is a beautiful spark", "왜냐하면 그들의 독특한 존재는 아름다운 불꽃이기 때문입니다"],
              ["that eventually fades away.", "결국 사라져 버릴"]
            ]
          },
          {
            "full": "Live deeply in the golden now and allow your soul to blossom in the eternity of this moment.",
            "chunks": [
              ["Live deeply in the golden now", "황금빛 지금 속에 깊이 살아가십시오"],
              ["and allow your soul to blossom", "그리고 당신의 영혼이 꽃피우게 하십시오"],
              ["in the eternity of this moment.", "이 순간의 영원 속에서"]
            ]
          }
        ]
      },
      {
        "id": "L5-P3",
        "title": "지문 3",
        "topic": "진정한 자유와 내면의 통제",
        "sentences": [
          {
            "full": "Most people define freedom as the absolute ability to do whatever they want without any external restrictions.",
            "chunks": [
              ["Most people define freedom", "대부분의 사람은 자유를 정의합니다"],
              ["as the absolute ability to do", "할 수 있는 절대적인 능력으로"],
              ["whatever they want", "그들이 원하는 것은 무엇이든"],
              ["without any external restrictions.", "외부의 제한 없이"]
            ]
          },
          {
            "full": "However, ancient philosophers argued that true freedom is a state of profound mastery over your desires.",
            "chunks": [
              ["However,", "하지만"],
              ["ancient philosophers argued", "고대 철학자들은 주장했습니다"],
              ["that true freedom is a state", "진정한 자유가 실제로는 상태라고"],
              ["of profound mastery over your desires.", "당신 자신의 욕망을 깊이 지배하는"]
            ]
          },
          {
            "full": "If you are controlled by your sudden impulses, you are merely a slave to yourself.",
            "chunks": [
              ["If you are controlled", "만약 당신이 조종당한다면"],
              ["by your sudden impulses,", "갑작스러운 충동에 의해"],
              ["you are merely a slave", "당신은 단지 노예일 뿐입니다"],
              ["to yourself.", "자신에게 속한"]
            ]
          },
          {
            "full": "Real liberation begins when you develop the capacity to choose your response to external events wisely.",
            "chunks": [
              ["Real liberation begins", "진정한 해방은 시작됩니다"],
              ["when you develop the capacity", "당신이 능력을 발달시킬 때"],
              ["to choose your response to external events wisely.", "외부 사건에 대한 당신의 반응을 현명하게 선택할 수 있는"]
            ]
          },
          {
            "full": "The world will always present challenges, but the ultimate power remains within our own sovereign minds.",
            "chunks": [
              ["The world will always present challenges,", "세상은 항상 도전을 제시하겠지만"],
              ["but the ultimate power remains", "궁극적인 힘은 남아 있습니다"],
              ["within our own sovereign minds.", "우리 자신의 주권적인 마음속에"]
            ]
          },
          {
            "full": "We cannot always control what happens to us, but we can absolutely choose our attitude toward it.",
            "chunks": [
              ["We cannot always control", "우리가 항상 통제할 수는 없지만"],
              ["what happens to us,", "우리에게 일어나는 일을"],
              ["but we can absolutely choose", "완전히 선택할 수 있습니다"],
              ["our attitude toward it.", "그것에 대한 태도는"]
            ]
          },
          {
            "full": "Discipline should not be viewed as a painful cage, but as the essential key that unlocks your potential.",
            "chunks": [
              ["Discipline should not be viewed", "규율은 여겨져야 합니다"],
              ["as a painful cage,", "고통스러운 감옥이 아니라"],
              ["but as the essential key", "필수적인 열쇠로"],
              ["that unlocks your potential.", "당신의 잠재력을 열어주는"]
            ]
          },
          {
            "full": "By mastering your thoughts daily, you build an unshakeable fortress that no external storm can destroy.",
            "chunks": [
              ["By mastering your thoughts daily,", "매일 당신의 생각을 다스림으로써"],
              ["you build an unshakeable fortress", "당신은 흔들리지 않는 요새를 건설합니다"],
              ["that no external storm can destroy.", "어떤 폭풍도 파괴할 수 없는"]
            ]
          },
          {
            "full": "True independence is the quiet confidence to follow your own moral compass even when others disagree.",
            "chunks": [
              ["True independence is the quiet confidence", "진정한 독립은 고요한 자신감입니다"],
              ["to follow your own moral compass", "당신 자신의 도덕적 나침반을 따르는"],
              ["even when others disagree.", "타인이 동의하지 않을 때조차"]
            ]
          },
          {
            "full": "Do not seek the temporary approval of society, but strive to achieve the respect of your conscience.",
            "chunks": [
              ["Do not seek", "구하지 말고"],
              ["the temporary approval of society,", "사회의 일시적인 승인을"],
              ["but strive to achieve", "얻기 위해 노력하십시오"],
              ["the respect of your conscience.", "당신 자신의 양심이 보내는 존경을"]
            ]
          },
          {
            "full": "When you are no longer dependent on the praise of others, you are finally free to live authentically.",
            "chunks": [
              ["When you are no longer dependent", "당신이 더 이상 의존하지 않을 때"],
              ["on the praise of others,", "타인의 칭찬에"],
              ["you are finally free", "당신은 마침내 자유를 얻게 됩니다"],
              ["to live authentically.", "온전하게 살아갈"]
            ]
          },
          {
            "full": "This inner autonomy is the greatest treasure that a human being can accumulate during their earthly journey.",
            "chunks": [
              ["This inner autonomy", "이러한 내면의 자율성은"],
              ["is the greatest treasure", "가장 위대한 보물입니다"],
              ["that a human being can accumulate", "인간이 축적할 수 있는"],
              ["during their earthly journey.", "지상에서의 여정 동안"]
            ]
          },
          {
            "full": "Guard your mental freedom fiercely against the subtle manipulations of advertising and the shallow opinions of peers.",
            "chunks": [
              ["Guard your mental freedom fiercely", "당신의 정신적 자유를 격렬하게 수호하십시오"],
              ["against the subtle manipulations of advertising", "광고의 미묘한 조작과"],
              ["and the shallow opinions of peers.", "또래들의 얕은 의견에 대항하여"]
            ]
          },
          {
            "full": "True strength is demonstrated when you remain completely calm and centered in the midst of chaos.",
            "chunks": [
              ["True strength is demonstrated", "진정한 힘은 입증됩니다"],
              ["when you remain completely calm and centered", "당신이 차분하고 중심을 유지할 때"],
              ["in the midst of chaos.", "완전한 혼란의 한가운데서"]
            ]
          },
          {
            "full": "Realize that you are the sole ruler of your inner world and claim your majestic power with dignity.",
            "chunks": [
              ["Realize that you are the sole ruler", "당신이 유일한 통치자임을 깨닫고"],
              ["of your inner world", "내면세계의"],
              ["and claim your majestic power", "당신의 엄숙한 힘을 주장하십시오"],
              ["with dignity.", "존엄성을 가지고"]
            ]
          },
          {
            "full": "Walk through life as a genuinely free individual, guided by truth, love, and your own unshakeable wisdom.",
            "chunks": [
              ["Walk through life", "삶을 걸어가십시오"],
              ["as a genuinely free individual,", "자유로운 개인으로서"],
              ["guided by truth, love,", "진리, 사랑에 인도되어"],
              ["and your own unshakeable wisdom.", "그리고 당신 자신의 흔들리지 않는 지혜에"]
            ]
          }
        ]
      },
      {
        "id": "L5-P4",
        "title": "지문 4",
        "topic": "인간관계의 깊이와 고독의 철학",
        "sentences": [
          {
            "full": "In our interconnected world, we communicate with thousands of people instantly through social media networks.",
            "chunks": [
              ["In our interconnected world,", "상호 연결된 세상에서"],
              ["we communicate with thousands of people", "우리는 수천 명의 사람과 소통할 수 있습니다"],
              ["instantly", "즉각적으로"],
              ["through social media networks.", "소셜 미디어 네트워크를 통해"]
            ]
          },
          {
            "full": "However, this superficial connectivity often masks a profound sense of loneliness among modern individuals.",
            "chunks": [
              ["However,", "하지만"],
              ["this superficial connectivity often masks", "이러한 피상적인 연결성은 종종 가려버립니다"],
              ["a profound sense of loneliness", "깊은 외로움을"],
              ["among modern individuals.", "현대인들 사이에서"]
            ]
          },
          {
            "full": "Genuine relationships require significant time, deep empathy, and the vulnerability to share your true hidden self.",
            "chunks": [
              ["Genuine relationships require", "진정한 인간관계는 요구합니다"],
              ["significant time, deep empathy,", "상당한 시간, 깊은 공감"],
              ["and the vulnerability", "그리고 취약성을"],
              ["to share your true hidden self.", "당신의 숨겨진 진짜 모습을 공유하는"]
            ]
          },
          {
            "full": "We must learn to look beyond digital screens and engage in meaningful face-to-face conversations.",
            "chunks": [
              ["We must learn to look", "우리는 바라보는 법을 배워야 합니다"],
              ["beyond digital screens", "디지털 화면 너머를"],
              ["and engage in meaningful face-to-face conversations.", "그리고 의미 있는 대면 대화에 참여해야 합니다"]
            ]
          },
          {
            "full": "Furthermore, developing a healthy relationship with yourself is the essential prerequisite for building strong bonds.",
            "chunks": [
              ["Furthermore,", "게다가"],
              ["developing a healthy relationship with yourself", "자신과 건강한 관계를 발달시키는 것은"],
              ["is the essential prerequisite", "필수적인 전제 조건입니다"],
              ["for building strong bonds.", "강력한 결속을 쌓기 위한"]
            ]
          },
          {
            "full": "Solitude should never be confused with painful loneliness, as it is a fertile ground for spiritual growth.",
            "chunks": [
              ["Solitude should never be confused", "고독은 결코 혼동되어서는 안 됩니다"],
              ["with painful loneliness,", "고통스러운 외로움과"],
              ["as it is a fertile ground", "비옥한 토대이기 때문입니다"],
              ["for spiritual growth.", "영적 성장을 위한"]
            ]
          },
          {
            "full": "In quiet moments of solitude, we can process our complex emotions and discover a profound sense of peace.",
            "chunks": [
              ["In quiet moments of solitude,", "고요한 고독의 순간에"],
              ["we can process our complex emotions", "우리는 복잡한 감정을 처리하고"],
              ["and discover a profound sense of peace.", "깊은 평온함을 발견할 수 있습니다"]
            ]
          },
          {
            "full": "Those who fear being alone often seek the noise of crowds just to escape their own thoughts.",
            "chunks": [
              ["Those who fear being alone", "혼자 있는 것을 두려워하는 사람들은"],
              ["often seek the noise of crowds", "군중이 만드는 끊임없는 소음을 종종 찾습니다"],
              ["just to escape their own thoughts.", "생각에서 도망치기 위해"]
            ]
          },
          {
            "full": "However, you must cultivate the ability to sit quietly in a room without any digital distractions.",
            "chunks": [
              ["However,", "하지만"],
              ["you must cultivate the ability", "당신은 능력을 길러야 합니다"],
              ["to sit quietly in a room", "혼자 방에 조용히 앉아 있을 수 있는"],
              ["without any digital distractions.", "어떠한 디지털 유혹도 없이"]
            ]
          },
          {
            "full": "When you become your own best friend, you no longer desperately need the external validation of the world.",
            "chunks": [
              ["When you become your own best friend,", "당신이 자신에게 가장 좋은 친구가 될 때"],
              ["you no longer desperately need", "당신은 필사적으로 필요로 하지 않습니다"],
              ["the external validation of the world.", "세상이 주는 외부의 인정을"]
            ]
          },
          {
            "full": "This self-reliance allows you to love others genuinely without expectations, conditions, or desires for control.",
            "chunks": [
              ["This self-reliance allows you", "이러한 자립은 당신이 허락합니다"],
              ["to love others genuinely", "타인을 진정으로 사랑하도록"],
              ["without expectations, conditions,", "기대, 조건 없이"],
              ["or desires for control.", "혹은 통제를 향한 욕망 없이"]
            ]
          },
          {
            "full": "Deep friendships are built on mutual respect and the shared freedom to grow into your highest selves.",
            "chunks": [
              ["Deep friendships are built", "깊은 우정은 세워집니다"],
              ["on mutual respect", "상호 존중과"],
              ["and the shared freedom", "공유된 자유 위에"],
              ["to grow into your highest selves.", "당신의 가장 높은 모습으로 성장할 수 있는"]
            ]
          },
          {
            "full": "Spend your limited time with people who nourish your soul and inspire you to become wiser.",
            "chunks": [
              ["Spend your limited time", "제한된 시간을 보내십시오"],
              ["with people who nourish your soul", "당신의 영혼을 양육하는 사람들과 함께"],
              ["and inspire you", "그리고 영감을 주는"],
              ["to become wiser.", "당신이 더 현명해지도록"]
            ]
          },
          {
            "full": "True community is not about having many followers, but about creating lasting emotional heart-links.",
            "chunks": [
              ["True community is not about", "진정한 공동체는 아닙니다"],
              ["having many followers,", "많은 숫자의 팔로워를 갖는 것이"],
              ["but about creating", "만드는 것입니다"],
              ["lasting emotional heart-links.", "지속적인 정서적 마음의 연결을"]
            ]
          },
          {
            "full": "Cherish the rare moments of genuine connection and hold them in your memory as sacred treasures.",
            "chunks": [
              ["Cherish the rare moments", "드문 순간들을 아끼고"],
              ["of genuine connection", "진정한 연결이 일어나는"],
              ["and hold them in your memory", "그것들을 당신의 기억 속에 간직하십시오"],
              ["as sacred treasures.", "삶의 신성한 보물로서"]
            ]
          },
          {
            "full": "Balance your social interactions with peaceful moments of silence to maintain a harmonious and beautifully centered existence.",
            "chunks": [
              ["Balance your social interactions", "사회적 상호작용의 균형을 맞추십시오"],
              ["with peaceful moments of silence", "침묵이 주는 평화로운 순간들로"],
              ["to maintain a harmonious", "조화롭고 유지하기 위해"],
              ["and beautifully centered existence.", "아름답게 중심 잡힌 존재를"]
            ]
          }
        ]
      },
      {
        "id": "L5-P5",
        "title": "지문 5",
        "topic": "자연의 섭리와 인간의 겸손",
        "sentences": [
          {
            "full": "Modern technology has given human beings the dangerous illusion that they are masters of the natural world.",
            "chunks": [
              ["Modern technology has given human beings", "현대 기술은 인간에게 심어주었습니다"],
              ["the dangerous illusion", "위험한 환상을"],
              ["that they are masters of the natural world.", "자신들이 자연 세계의 지배자라는"]
            ]
          },
          {
            "full": "We build massive concrete cities and alter the landscape with disregard for the balance of ecosystems.",
            "chunks": [
              ["We build massive concrete cities", "우리는 거대한 콘크리트 도시를 건설하고"],
              ["and alter the landscape", "풍경을 바꾸어 버립니다"],
              ["with disregard", "무시한 채"],
              ["for the balance of ecosystems.", "생태계의 균형을"]
            ]
          },
          {
            "full": "However, a single natural disaster can instantly remind us of our extreme fragility and dependence on Earth.",
            "chunks": [
              ["However,", "하지만"],
              ["a single natural disaster", "단 한 번의 자연재해는"],
              ["can instantly remind us", "우리에게 즉각적으로 상기시킵니다"],
              ["of our extreme fragility and dependence on Earth.", "우리의 극심한 취약성과 지구에 대한 의존성을"]
            ]
          },
          {
            "full": "Philosophical humility begins when we realize that we are merely a small part of a vast universe.",
            "chunks": [
              ["Philosophical humility begins", "철학적 겸손은 시작됩니다"],
              ["when we realize", "우리가 깨달을 때"],
              ["that we are merely a small part", "단지 작은 일부일 뿐이라는 것을"],
              ["of a vast universe.", "광대한 우주의"]
            ]
          },
          {
            "full": "Nature operated perfectly for billions of years before the sudden arrival of humans and their industrial machinery.",
            "chunks": [
              ["Nature operated perfectly", "자연은 완벽하게 작동했습니다"],
              ["for billions of years", "수십억 년 동안"],
              ["before the sudden arrival of humans", "인간의 갑작스러운 도래 전"],
              ["and their industrial machinery.", "그리고 그들의 산업 기계의"]
            ]
          },
          {
            "full": "Therefore, we should listen to the silent wisdom of the ancient forests and the mysterious oceans.",
            "chunks": [
              ["Therefore,", "그러므로"],
              ["we should listen", "우리는 귀를 기울여야 합니다"],
              ["to the silent wisdom", "소리 없는 지혜에"],
              ["of the ancient forests and the mysterious oceans.", "오래된 숲과 신비로운 바다가 보내는"]
            ]
          },
          {
            "full": "Every tree, river, and mountain has a unique lesson to teach us about patience, resilience, and transformation.",
            "chunks": [
              ["Every tree, river, and mountain", "모든 나무, 강, 그리고 산은"],
              ["has a unique lesson to teach us", "우리에게 가르쳐 줄 독특한 교훈을 가지고 있습니다"],
              ["about patience, resilience, and transformation.", "인내, 회복탄력성, 그리고 변화에 대해"]
            ]
          },
          {
            "full": "A flower does not rush to blossom, but waits gracefully for the perfect combination of sunlight and rain.",
            "chunks": [
              ["A flower does not rush to blossom,", "꽃은 피어나기 위해 서두르지 않으며"],
              ["but waits gracefully", "우아하게 기다립니다"],
              ["for the perfect combination", "완벽한 조합을"],
              ["of sunlight and rain.", "햇빛과 비의"]
            ]
          },
          {
            "full": "By observing natural rhythms, we can learn to accept the cycles of our own lives.",
            "chunks": [
              ["By observing natural rhythms,", "자연스러운 리듬을 관찰함으로써"],
              ["we can learn to accept", "우리는 받아들이는 법을 배울 수 있습니다"],
              ["the cycles of our own lives.", "우리 자신의 삶이 가진 순환을"]
            ]
          },
          {
            "full": "There is a time for active growth, and there is an equally important time for rest and reflection.",
            "chunks": [
              ["There is a time for active growth,", "활발한 성장을 위한 시간이 있으며"],
              ["and there is an equally important time", "똑같이 중요한 시간이 존재합니다"],
              ["for rest and reflection.", "휴식과 성찰을 위한"]
            ]
          },
          {
            "full": "Do not let your greedy desires destroy the beautiful home that sustains every living creature.",
            "chunks": [
              ["Do not let your greedy desires", "당신의 탐욕스러운 욕망이"],
              ["destroy the beautiful home", "아름다운 집을 파괴하게 두지 마십시오"],
              ["that sustains every living creature.", "모든 생명체를 지탱해 주는"]
            ]
          },
          {
            "full": "We must transition from an aggressive attitude of exploitation to a gentle mindset of stewardship and respect.",
            "chunks": [
              ["We must transition", "우리는 전환해야 합니다"],
              ["from an aggressive attitude of exploitation", "착취라는 공격적인 태도에서"],
              ["to a gentle mindset of stewardship and respect.", "관리자로서의 온화한 사고방식과 깊은 존중으로"]
            ]
          },
          {
            "full": "Walk lightly upon the earth and express your sincere gratitude for the abundant resources provided daily.",
            "chunks": [
              ["Walk lightly upon the earth", "지구 위를 가볍게 걷고"],
              ["and express your sincere gratitude", "진심 어린 감사를 표현하십시오"],
              ["for the abundant resources provided daily.", "매일 우리에게 제공되는 풍요로운 자원에 대해"]
            ]
          },
          {
            "full": "True progress is not measured by our conquest of nature, but by our harmonious coexistence with all species.",
            "chunks": [
              ["True progress is not measured", "진정한 발전은 측정되는 것이 아니라"],
              ["by our conquest of nature,", "우리가 자연을 정복하는 것으로"],
              ["but by our harmonious coexistence", "조화로운 공존에 의해 측정됩니다"],
              ["with all species.", "모든 생명과의"]
            ]
          },
          {
            "full": "Reconnect with the natural world and allow its magnificent simplicity to heal your stressed and chaotic mind.",
            "chunks": [
              ["Reconnect with the natural world", "자연 세계와 다시 연결되고"],
              ["and allow its magnificent simplicity", "그것이 가진 웅장한 단순함이"],
              ["to heal your stressed and chaotic mind.", "당신의 스트레스 받고 혼란스러운 마음을 치유하게 하십시오"]
            ]
          },
          {
            "full": "Remember that we do not inherit the earth from our ancestors, but merely borrow it from our future children.",
            "chunks": [
              ["Remember", "기억하십시오"],
              ["that we do not inherit the earth", "우리는 지구를 물려받은 것이 아니라"],
              ["from our ancestors,", "조상으로부터"],
              ["but merely borrow it from our future children.", "단지 우리의 미래 자녀들로부터 그것을 빌린 것임을"]
            ]
          }
        ]
      }
    ]
  }
];
