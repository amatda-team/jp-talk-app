const db = [
  {
    id: 1,
    word: "好ましい",
    reading: "このましい",
    meaning: "바람직하다, 마음에 들다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 2,
    word: "しっとりとした",
    reading: "しっとりとした",
    meaning: "촉촉한, 차분한",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 3,
    word: "へばりつく",
    reading: "へばりつく",
    meaning: "달라붙다, 들러붙다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 4,
    word: "厄介な",
    reading: "やっかいな",
    meaning: "성가신, 까다로운, 성가신 존재",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 5,
    word: "無防備",
    reading: "むぼうび",
    meaning: "무방비",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 6,
    word: "後ろめたい",
    reading: "うしろめたい",
    meaning: "떳떳하지 못하다, 양심에 가책이 되다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 7,
    word: "ひょっとすると",
    reading: "ひょっとすると",
    meaning: "어쩌면, 혹시",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 8,
    word: "いらぬ",
    reading: "いらぬ",
    meaning: "쓸데없는, 불필요한 (=いらない)",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 9,
    word: "暗黙",
    reading: "あんもく",
    meaning: "암묵, 말하지 않아도 앎 (dark)",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 10,
    word: "改めて",
    reading: "あらためて",
    meaning: "새롭게, 다시금, 정식으로",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 11,
    word: "いわば",
    reading: "いわば",
    meaning: "말하자면, 비유하자면",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 12,
    word: "次第に",
    reading: "しだいに",
    meaning: "차츰, 점차",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 13,
    word: "闇雲に",
    reading: "やみくもに",
    meaning: "무턱대고, 덮어놓고",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 14,
    word: "しかるべき",
    reading: "しかるべき",
    meaning: "적절한, 마땅한, 사당한",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 15,
    word: "多々",
    reading: "たた",
    meaning: "많음, 대단히",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 16,
    word: "植える",
    reading: "うえる",
    meaning: "심다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 17,
    word: "絶やす",
    reading: "たやす",
    meaning: "끊다, 멸절시키다, 없애다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 18,
    word: "現れる",
    reading: "あらわれる",
    meaning: "나타나다, 드러나다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 19,
    word: "教わる",
    reading: "おそわる",
    meaning: "배우다, 가르침을 받다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 20,
    word: "申し出す",
    reading: "もうしだす",
    meaning: "(의사·신청 등을) 제출하다, 신청하다, 제의하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 21,
    word: "噛み砕く",
    reading: "かみくだく",
    meaning: "씹어 꺾다; (이해하기 쉽게) 씹어서 설명하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 22,
    word: "収まる",
    reading: "おさまる",
    meaning: "수습되다, 가라앉다, 안으로 들어가다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 23,
    word: "キレる",
    reading: "きれる",
    meaning: "적반하장으로 화내다, 끈이 끊어지듯 성질을 내다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 24,
    word: "拗れる",
    reading: "こじれる",
    meaning: "뒤틀리다, 꼬이다, (사태가) 악화되다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 25,
    word: "まくしたてる",
    reading: "まくしたてる",
    meaning: "(말을) 쏟아붓다, 들이대며 말하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 26,
    word: "つられる",
    reading: "つられる",
    meaning: "끌려가다, 유혹되다, 부화뇌동하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 27,
    word: "取り組む",
    reading: "とりくむ",
    meaning: "맞붙다, 몰두하다, 대처하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 28,
    word: "持ち合わせる",
    reading: "もちあわせる",
    meaning: "마침 가지고 있다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 29,
    word: "教えられる",
    reading: "おしえられる",
    meaning: "가르침을 받다, 깨닫게 되다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 30,
    word: "語りかける",
    reading: "かたりかける",
    meaning: "말을 걸다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 31,
    word: "招く",
    reading: "まねく",
    meaning: "손짓하여 부르다, 초래하다, 불러일으키다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 32,
    word: "さらけ出す",
    reading: "さらけだす",
    meaning: "모두 드러내다, 노출시키다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 33,
    word: "指す",
    reading: "さす",
    meaning: "가리키다, 지적하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 34,
    word: "漂う",
    reading: "ただよう",
    meaning: "떠돌다, 표류하다, (향기·분위기 등이) 감돌다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 35,
    word: "分け合う",
    reading: "わけあう",
    meaning: "서로 나누다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 36,
    word: "暖を取る",
    reading: "だんをとる",
    meaning: "불을 쬐다, 온기를 얻다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 37,
    word: "覚える",
    reading: "おぼえる",
    meaning: "기억하다, 익히다; (감정·감각을) 느끼다, 자연스럽게 체득하다",
    tag: "日常",
    exJa: "違和感を覚える",
    exKo: "위화감을 느끼다"
  },
  {
    id: 38,
    word: "捕まえる",
    reading: "つかまえる",
    meaning: "잡다, 붙잡다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 39,
    word: "固める",
    reading: "かためる",
    meaning: "굳히다, 다지다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 40,
    word: "囲む",
    reading: "かこむ",
    meaning: "둘러싸다, 에워싸다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 41,
    word: "築く",
    reading: "きずく",
    meaning: "쌓다, 구축하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 42,
    word: "縛る",
    reading: "しばる",
    meaning: "묶다, 속박하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 43,
    word: "繰り返す",
    reading: "くりかえす",
    meaning: "되풀이하다, 반복하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 44,
    word: "体得",
    reading: "たいとく",
    meaning: "몸소 익히다 (체득하다)",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 45,
    word: "遂げる",
    reading: "とげる",
    meaning: "이루다, 완수하다, (결과에) 이르고 마다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 46,
    word: "叶う",
    reading: "かなう",
    meaning: "(꿈·소원이) 이루어지다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 47,
    word: "叶える",
    reading: "かなえる",
    meaning: "(꿈·소원을) 이루어 주다, 이뤄내다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 48,
    word: "敬服する",
    reading: "けいふくする",
    meaning: "경복하다, 깊이 존경하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 49,
    word: "制御",
    reading: "せいぎょ",
    meaning: "제어하다, 통제하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 50,
    word: "水やり",
    reading: "みずやり",
    meaning: "(식물에) 물주기",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 51,
    word: "陸上",
    reading: "りくじょう",
    meaning: "육상",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 52,
    word: "苔",
    reading: "こけ",
    meaning: "이끼",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 53,
    word: "剣幕",
    reading: "けんまく",
    meaning: "기세, 험악한 태도/얼굴빛",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 54,
    word: "早口",
    reading: "はやくち",
    meaning: "빠른 말, 말을 빠르게 함",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 55,
    word: "伝染",
    reading: "でんせん",
    meaning: "전염",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 56,
    word: "道筋",
    reading: "みちすじ",
    meaning: "길순, 경로, 이치/줄거리",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 57,
    word: "真偽",
    reading: "しんぎ",
    meaning: "진위, 진위 여부",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 58,
    word: "趣味",
    reading: "しゅみ",
    meaning: "취미, 멋, 풍류, 센스, 취향",
    tag: "日常",
    exJa: "趣味が良い",
    exKo: "센스/취향이 좋다"
  },
  {
    id: 59,
    word: "断り",
    reading: "ことわり",
    meaning: "거절, 사전 양해/통보",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 60,
    word: "陰口",
    reading: "かげぐち",
    meaning: "험담, 뒷공론",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 61,
    word: "針",
    reading: "はり",
    meaning: "바늘, 침",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 62,
    word: "開花",
    reading: "かいか",
    meaning: "개화, 꽃이 핌",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 63,
    word: "閉花",
    reading: "へいか",
    meaning: "폐화, 꽃이 믐",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 64,
    word: "適正",
    reading: "てきせい",
    meaning: "적정, 적절함",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 65,
    word: "日照",
    reading: "にっしょう",
    meaning: "일조, 햇빛이 쬠",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 66,
    word: "茎",
    reading: "くき",
    meaning: "줄기 (식물)",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 67,
    word: "風雨",
    reading: "ふうう",
    meaning: "비바람",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 68,
    word: "獲物",
    reading: "えもの",
    meaning: "사냥감, 획득한 물건",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 69,
    word: "協力",
    reading: "きょうりょく",
    meaning: "협력",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 70,
    word: "分配",
    reading: "ぶんぱい",
    meaning: "분배",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 71,
    word: "食物",
    reading: "しょくもつ",
    meaning: "음식물, 먹거리",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 72,
    word: "一因",
    reading: "いちいん",
    meaning: "한 가지 원인",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 73,
    word: "規範",
    reading: "きはん",
    meaning: "규범",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 74,
    word: "過剰",
    reading: "かじょう",
    meaning: "과쟁, 과도함",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 75,
    word: "浪費",
    reading: "ろうひ",
    meaning: "낭비",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 76,
    word: "消費",
    reading: "しょうひ",
    meaning: "소비",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 77,
    word: "破壊",
    reading: "はかい",
    meaning: "파괴",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 78,
    word: "様",
    reading: "さま",
    meaning: "모습, 상태, 모양",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 79,
    word: "類似性",
    reading: "るいじせい",
    meaning: "유사성",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 80,
    word: "域",
    reading: "いき",
    meaning: "영역, 경지, 수준",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 81,
    word: "技",
    reading: "わざ",
    meaning: "기술, 솜씨, 묘기",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  }
];
