// 직독직해 마스터 — 레벨/지문 고정 데이터
// 구조: LEVELS[i] = { level, label, passages:[ { id, title, topic, sentences:[ {full, chunks:[[영,한],...]} ] } ] }
// 각 지문 = STEP1(영→한)·STEP2(한→영)·STEP3(어순배열) 3단계.
// 레벨당 지문 5개 목표. 현재 LEVEL 1에 샘플 1개만 입력, 2~5는 빈 슬롯(준비 중).
// 지문 추가 시: 각 sentence의 chunks 영어 부분을 공백 join → full과 100% 일치해야 함.
const LEVELS = [
  {
    "level": 1,
    "label": "LEVEL 1",
    "passages": [
      {
        "id": "L1-sample",
        "title": "샘플 지문 (모의고사 31번)",
        "topic": "통계학과 근대 국가",
        "sentences": [
          {
            "full": "Statistics in the twentieth century became the systematic collection of quantitative information needed by the state.",
            "chunks": [
              [
                "Statistics in the twentieth century",
                "20세기의 통계학은"
              ],
              [
                "became the systematic collection",
                "체계적인 수집이 되었다"
              ],
              [
                "of quantitative information",
                "양적 정보의"
              ],
              [
                "needed by the state.",
                "국가가 필요로 하는"
              ]
            ]
          },
          {
            "full": "This process occurred in all the industrialised countries as a key part of their becoming modern states.",
            "chunks": [
              [
                "This process occurred",
                "이 과정은 일어났다"
              ],
              [
                "in all the industrialised countries",
                "모든 산업화된 국가들에서"
              ],
              [
                "as a key part",
                "핵심적인 부분으로서"
              ],
              [
                "of their becoming modern states.",
                "그들이 근대 국가가 되는 것의"
              ]
            ]
          },
          {
            "full": "Desrosières writes: \"It is difficult to think simultaneously that the objects being measured really do exist and that this is only a convention\".",
            "chunks": [
              [
                "Desrosières writes:",
                "데조지에르는 다음과 같이 썼다:"
              ],
              [
                "\"It is difficult to think simultaneously",
                "\"동시에 생각하기는 어렵다"
              ],
              [
                "that the objects being measured really do exist",
                "측정되고 있는 대상이 실제로 존재한다는 것과"
              ],
              [
                "and that this is only a convention\".",
                "이것이 단지 하나의 관습일 뿐이라는 것을\"."
              ]
            ]
          },
          {
            "full": "Yet this is the case.",
            "chunks": [
              [
                "Yet this is the case.",
                "그러나 이것은 사실이다."
              ]
            ]
          },
          {
            "full": "Phenomena such as prices being charged and products being sold exist, but the categories and classification frameworks supporting the collection, aggregation, and organisation of official statistics are devised to serve the purposes of the state, for macroeconomic or for social policies.",
            "chunks": [
              [
                "Phenomena such as prices being charged",
                "부과되는 가격과 같은 현상들은"
              ],
              [
                "and products being sold exist,",
                "그리고 판매되는 제품들은 존재한다,"
              ],
              [
                "but the categories and classification frameworks",
                "그러나 범주와 분류 체계는"
              ],
              [
                "supporting the collection, aggregation, and organisation",
                "수집, 집계, 구성을 지원하는"
              ],
              [
                "of official statistics",
                "공식 통계의"
              ],
              [
                "are devised to serve the purposes of the state,",
                "국가의 목적에 기여하도록 고안된다,"
              ],
              [
                "for macroeconomic or for social policies.",
                "거시경제적 또는 사회적 정책을 위해"
              ]
            ]
          },
          {
            "full": "Theodore Porter described the use of statistics to create state authority : \"Quantification is a way of making decisions without seeming to decide\", characterising it as a \"social technology\" intended to build trust in authority.",
            "chunks": [
              [
                "Theodore Porter described the use of statistics",
                "시어도어 포터는 통계의 사용을 설명했다"
              ],
              [
                "to create state authority :",
                "국가 권위를 만들어내기 위한:"
              ],
              [
                "\"Quantification is a way of making decisions",
                "\"양화는 결정을 내리는 방법이다"
              ],
              [
                "without seeming to decide\",",
                "결정을 내리는 것처럼 보이지 않으면서\","
              ],
              [
                "characterising it as a \"social technology\"",
                "그것을 '사회적 기술'로 특징지으면서"
              ],
              [
                "intended to build trust in authority.",
                "권위에 대한 신뢰를 구축하기 위해 의도된"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "level": 2,
    "label": "LEVEL 2",
    "passages": []
  },
  {
    "level": 3,
    "label": "LEVEL 3",
    "passages": []
  },
  {
    "level": 4,
    "label": "LEVEL 4",
    "passages": []
  },
  {
    "level": 5,
    "label": "LEVEL 5",
    "passages": []
  }
];

// 자가검증 (원문 대조)
LEVELS.forEach(L => L.passages.forEach(p => {
  p.sentences.forEach((s, i) => {
    const joined = s.chunks.map(c => c[0]).join(' ');
    if (joined !== s.full) console.warn('[' + L.label + '/' + p.id + '] ❌ 문장' + (i+1) + ' 원문 불일치');
  });
}));
