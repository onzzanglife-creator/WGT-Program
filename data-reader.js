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
];
