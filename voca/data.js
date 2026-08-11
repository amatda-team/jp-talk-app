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
  },
  {
    id: 82,
    word: "である",
    reading: "である",
    meaning: "~이다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 83,
    word: "時速",
    reading: "じそく",
    meaning: "시속",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 84,
    word: "さほど",
    reading: "さほど",
    meaning: "그다지, 별로",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 85,
    word: "身近",
    reading: "みぢか",
    meaning: "신변, 가까운 곳 (친숙함)",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 86,
    word: "ましてや",
    reading: "ましてや",
    meaning: "하물며, 더구나",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 87,
    word: "ほんの",
    reading: "ほんの",
    meaning: "그저, 단지, 약간의",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 88,
    word: "なんともはや",
    reading: "なんともはや",
    meaning: "참으로, 어처구니없게도",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 89,
    word: "しかも",
    reading: "しかも",
    meaning: "게다가, 더구나",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 90,
    word: "のち",
    reading: "のち",
    meaning: "뒤, 후, 나중",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 91,
    word: "癒す",
    reading: "いやす",
    meaning: "고치다, 치료하다, 달래다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 92,
    word: "演奏",
    reading: "えんそう",
    meaning: "연주",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 93,
    word: "一握り",
    reading: "ひとにぎり",
    meaning: "한 줌, 아주 적음",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 94,
    word: "強迫",
    reading: "きょうはく",
    meaning: "강박",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 95,
    word: "聞き飛ばす",
    reading: "ききとばす",
    meaning: "건성으로 듣고 넘기다, 흘려듣다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 96,
    word: "一律",
    reading: "いちりつ",
    meaning: "일률",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 97,
    word: "割く",
    reading: "さく",
    meaning: "할애하다, 쪼개다, 가르다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 98,
    word: "自ら",
    reading: "みずから",
    meaning: "스스로, 친히",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 99,
    word: "数多く",
    reading: "かずおおく",
    meaning: "수많이, 무수히",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 100,
    word: "決着",
    reading: "けっちゃく",
    meaning: "결착, 결말, 매듭",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 101,
    word: "等しい",
    reading: "ひとしい",
    meaning: "같다, 동등하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 102,
    word: "遭う",
    reading: "あう",
    meaning: "겪다, 당하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 103,
    word: "挙句",
    reading: "あげく",
    meaning: "끝, 급기야",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 104,
    word: "あてになる",
    reading: "あてになる",
    meaning: "의지가 되다, 믿음직하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 105,
    word: "用いる",
    reading: "もちいる",
    meaning: "사용하다, 쓰다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 106,
    word: "すれ違い",
    reading: "すれちがい",
    meaning: "엇갈림, 스쳐 지나감",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 107,
    word: "駆られる",
    reading: "かられる",
    meaning: "(감정 등에) 사로잡히다, 쫓기다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 108,
    word: "差し迫る",
    reading: "さしせまる",
    meaning: "다가오다, 절박해지다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 109,
    word: "迫る",
    reading: "せまる",
    meaning: "다가오다, 육박하다, 강요하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 110,
    word: "患者",
    reading: "かんじゃ",
    meaning: "환자",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 111,
    word: "錆びつく",
    reading: "さびつく",
    meaning: "흠뻑 녹슬다, (능력 등이) 무뎌지다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 112,
    word: "気まぐれ",
    reading: "きまぐれ",
    meaning: "변덕스러움, 변덕",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 113,
    word: "見抜く",
    reading: "みぬく",
    meaning: "간파하다, 꿰뚫어 보다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 114,
    word: "近場",
    reading: "ちかば",
    meaning: "근처, 가까운 곳",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 115,
    word: "加える",
    reading: "くわえる",
    meaning: "가하다, 더하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 116,
    word: "急激",
    reading: "きゅうげき",
    meaning: "급격",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 117,
    word: "発露",
    reading: "はつろ",
    meaning: "발로, 겉으로 드러남",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 118,
    word: "まさしく",
    reading: "まさしく",
    meaning: "틀림없이, 바로",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 119,
    word: "ご機嫌になる",
    reading: "ごきげんになる",
    meaning: "기분이 좋아지다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 120,
    word: "脆い",
    reading: "もろい",
    meaning: "무르다, 깨지기 쉽다, 취약하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 121,
    word: "創作",
    reading: "そうさく",
    meaning: "창작",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 122,
    word: "遺物",
    reading: "いぶつ",
    meaning: "유물",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 123,
    word: "掘る",
    reading: "ほる",
    meaning: "파다, 캐다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 124,
    word: "素材",
    reading: "そざい",
    meaning: "소재",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 125,
    word: "錆びる",
    reading: "さびる",
    meaning: "녹슬다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 126,
    word: "廃棄",
    reading: "はいき",
    meaning: "폐기",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 127,
    word: "というのも",
    reading: "というのも",
    meaning: "왜냐하면",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 128,
    word: "唱える",
    reading: "となえる",
    meaning: "소리내어 읽다, 외치다, 주창하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 129,
    word: "淘汰",
    reading: "とうた",
    meaning: "도태",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 130,
    word: "二言目",
    reading: "ふたことめ",
    meaning: "두 마디째, 입버릇처럼 하는 말",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 131,
    word: "粛々",
    reading: "しゅくしゅく",
    meaning: "조용하고 엄숙함 (숙숙)",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 132,
    word: "漏らす",
    reading: "もらす",
    meaning: "새게 하다, 누설하다, 빠뜨리다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 133,
    word: "途方にくれる",
    reading: "とほうにくれる",
    meaning: "어찌할 바를 모르다, 망연자실하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 134,
    word: "気が向く",
    reading: "きがむく",
    meaning: "마음이 내키다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 135,
    word: "報酬",
    reading: "ほうしゅう",
    meaning: "보수",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 136,
    word: "費やす",
    reading: "ついやす",
    meaning: "쓰다, 소비하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 137,
    word: "道具",
    reading: "どうぐ",
    meaning: "도구",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 138,
    word: "遅れる",
    reading: "おくれる",
    meaning: "늦다, 뒤떨어지다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 139,
    word: "遅い",
    reading: "おそい",
    meaning: "늦다, 느리다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 140,
    word: "許容",
    reading: "きょよう",
    meaning: "허용",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 141,
    word: "かつて",
    reading: "かつて",
    meaning: "일찍이, 예전",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 142,
    word: "堅苦しい",
    reading: "かたくるしい",
    meaning: "격식에 치우치다, 딱딱하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 143,
    word: "襲来",
    reading: "しゅうらい",
    meaning: "내습, 습격",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 144,
    word: "営み",
    reading: "いとなみ",
    meaning: "영위, 일, 작업, 행위",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 145,
    word: "授受",
    reading: "じゅじゅ",
    meaning: "수수, 주고받음",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 146,
    word: "捕獲",
    reading: "ほかく",
    meaning: "포획",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 147,
    word: "感心",
    reading: "かんしん",
    meaning: "감탄, 기특함",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 148,
    word: "かえって",
    reading: "かえって",
    meaning: "오히려, 반대로",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 149,
    word: "叩き込まれ",
    reading: "たたきこまれ",
    meaning: "철저히 주입되다, 처박히다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 150,
    word: "洞察",
    reading: "どうさつ",
    meaning: "통찰",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 151,
    word: "自閉症",
    reading: "じへいしょう",
    meaning: "자폐증",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 152,
    word: "危害",
    reading: "きがい",
    meaning: "위해",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 153,
    word: "鈴",
    reading: "すず",
    meaning: "방울",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 154,
    word: "所持",
    reading: "しょじ",
    meaning: "소지",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 155,
    word: "撃退",
    reading: "げきたい",
    meaning: "격퇴",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 156,
    word: "土壌",
    reading: "どじょう",
    meaning: "토양",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 157,
    word: "劣悪",
    reading: "れつあく",
    meaning: "열악",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 158,
    word: "保証",
    reading: "ほしょう",
    meaning: "보증",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 159,
    word: "控える",
    reading: "ひかえる",
    meaning: "삼가다, 앞두다, 대기하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 160,
    word: "抑える",
    reading: "おさえる",
    meaning: "억누르다, 억제하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 161,
    word: "縮小",
    reading: "しゅくしょう",
    meaning: "축소",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 162,
    word: "いかざるをえない",
    reading: "いかざるをえない",
    meaning: "가지 않을 수 없다 (行かざるを得ない)",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 163,
    word: "研修",
    reading: "けんしゅう",
    meaning: "연수",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 164,
    word: "主体",
    reading: "しゅたい",
    meaning: "주체",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 165,
    word: "陥る",
    reading: "おちいる",
    meaning: "빠지다, (좋지 않은 상태에) 떨어지다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 166,
    word: "配属",
    reading: "はいぞく",
    meaning: "배속",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 167,
    word: "につれて",
    reading: "につれて",
    meaning: "~함에 따라",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 168,
    word: "減少",
    reading: "げんしょう",
    meaning: "감소",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 169,
    word: "差し控える",
    reading: "さしひかえる",
    meaning: "삼가다, 보류하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 170,
    word: "気難しい",
    reading: "きむずかしい",
    meaning: "까다롭다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 171,
    word: "善行",
    reading: "ぜんこう",
    meaning: "선행",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 172,
    word: "勘弁してくれ",
    reading: "かんべんしてくれ",
    meaning: "용서해 줘, 봐 줘",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 173,
    word: "悪態をつく",
    reading: "あくたいをつく",
    meaning: "악담을 퍼붓다, 욕을 하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 174,
    word: "言いつける",
    reading: "いいつける",
    meaning: "분부하다, 고자질하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 175,
    word: "就業",
    reading: "しゅうぎょう",
    meaning: "취업, 업무 시작",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 176,
    word: "就業時間",
    reading: "しゅうぎょうじかん",
    meaning: "근무 시간, 취업 시간",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 177,
    word: "路線",
    reading: "ろせん",
    meaning: "노선",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 178,
    word: "単独",
    reading: "たんどく",
    meaning: "단독",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 179,
    word: "混在",
    reading: "こんざい",
    meaning: "혼재",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 180,
    word: "容易",
    reading: "ようい",
    meaning: "용이, 쉬움",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 181,
    word: "直通",
    reading: "ちょくつう",
    meaning: "직통",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 182,
    word: "乗り入れる",
    reading: "のりいれる",
    meaning: "(교통기관이) 연장 운행하다, 타고 들어가다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 183,
    word: "郊外",
    reading: "こうがい",
    meaning: "교외",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 184,
    word: "からなる",
    reading: "からなる",
    meaning: "~로 이루어지다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 185,
    word: "耳慣れる",
    reading: "みみなれる",
    meaning: "귀에 익다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 186,
    word: "扱える",
    reading: "あつかえる",
    meaning: "다룰 수 있다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 187,
    word: "仕組み",
    reading: "しくみ",
    meaning: "구조, 짜임새",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 188,
    word: "扱い切る",
    reading: "あつかいきる",
    meaning: "다 다루다, 감당해내다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 189,
    word: "かつ",
    reading: "かつ",
    meaning: "또한, 동시에",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 190,
    word: "行える",
    reading: "おこなえる",
    meaning: "행할 수 있다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 191,
    word: "既存",
    reading: "きぞん",
    meaning: "기존",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 192,
    word: "敷居が高い",
    reading: "しきいがたかい",
    meaning: "문턱이 높다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 193,
    word: "素人",
    reading: "しろうと",
    meaning: "아마추어, 초보자",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 194,
    word: "援助",
    reading: "えんじょ",
    meaning: "원조, 지원",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 195,
    word: "自主的",
    reading: "じしゅてき",
    meaning: "자주적",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 196,
    word: "橋を架ける",
    reading: "はしをかける",
    meaning: "다리를 놓다 (가교 역할을 하다)",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 197,
    word: "周囲",
    reading: "しゅうい",
    meaning: "주위",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 198,
    word: "募集を掛ける",
    reading: "ぼしゅうをかける",
    meaning: "모집하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 199,
    word: "対象",
    reading: "たいしょう",
    meaning: "대상",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 200,
    word: "巻き返し",
    reading: "まきかえし",
    meaning: "반격, 열세를 만회함",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 201,
    word: "勢い",
    reading: "いきおい",
    meaning: "기세",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 202,
    word: "勢力",
    reading: "せいりょく",
    meaning: "세력",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 203,
    word: "争い",
    reading: "あらそい",
    meaning: "다툼, 분쟁",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 204,
    word: "激戦",
    reading: "げきせん",
    meaning: "격전",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 205,
    word: "据える",
    reading: "すえる",
    meaning: "설치하다, 자리를 잡게 하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 206,
    word: "道程",
    reading: "どうてい",
    meaning: "도정, 여정",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 207,
    word: "見出す",
    reading: "みいだす",
    meaning: "찾아내다, 발견하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 208,
    word: "歩み進む",
    reading: "あゆみすすむ",
    meaning: "걸어 나아가다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 209,
    word: "図る",
    reading: "はかる",
    meaning: "도모하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 210,
    word: "振幅",
    reading: "しんぷく",
    meaning: "진폭",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 211,
    word: "辛苦",
    reading: "しんく",
    meaning: "신고, 고생",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 212,
    word: "労苦",
    reading: "ろうく",
    meaning: "노고",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 213,
    word: "生き甲斐",
    reading: "いきがい",
    meaning: "보람, 삶의 보람",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 214,
    word: "ならしめる",
    reading: "ならしめる",
    meaning: "~하게 하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 215,
    word: "なるようにする",
    reading: "なるようにする",
    meaning: "되게 하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 216,
    word: "強いてさせる",
    reading: "しいてさせる",
    meaning: "억지로 시키다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 217,
    word: "対等",
    reading: "たいとう",
    meaning: "대등",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 218,
    word: "果たす",
    reading: "はたす",
    meaning: "완수하다, 다하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 219,
    word: "言葉遣い",
    reading: "ことばづかい",
    meaning: "말투, 말씨",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 220,
    word: "織り交ぜる",
    reading: "おりまぜる",
    meaning: "섞어 짜다, 곁들이다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 221,
    word: "よそよそしい",
    reading: "よそよそしい",
    meaning: "쌀쌀맞다, 서먹서먹하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 222,
    word: "気まずい",
    reading: "きまずい",
    meaning: "어색하다, 서먹하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 223,
    word: "交える",
    reading: "まじえる",
    meaning: "섞다, 교차시키다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 224,
    word: "探りを入れる",
    reading: "さぐりをいれる",
    meaning: "떠보다, 슬쩍 눈치를 보다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 225,
    word: "顕著",
    reading: "けんちょ",
    meaning: "현저",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 226,
    word: "脅威",
    reading: "きょうい",
    meaning: "위협",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 227,
    word: "脆弱性",
    reading: "ぜいじゃくせい",
    meaning: "취약성",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 228,
    word: "狩猟",
    reading: "しゅりょう",
    meaning: "수렵, 사냥",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 229,
    word: "当該",
    reading: "とうがい",
    meaning: "당해, 해당",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 230,
    word: "持ち込む",
    reading: "もちこむ",
    meaning: "반입하다, 끌어들이다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 231,
    word: "栽培",
    reading: "さいばい",
    meaning: "재배",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 232,
    word: "随伴する",
    reading: "ずいはんする",
    meaning: "수반하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 233,
    word: "駆除する",
    reading: "くじょする",
    meaning: "구제하다, 퇴치하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 234,
    word: "住み着く",
    reading: "すみつく",
    meaning: "정착하다, 살림을 차리다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 235,
    word: "アリ",
    reading: "あり",
    meaning: "개미",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 236,
    word: "紛れる",
    reading: "まぎれる",
    meaning: "헷갈리다, 뒤섞이다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 237,
    word: "輸入",
    reading: "ゆにゅう",
    meaning: "수입",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 238,
    word: "生物相",
    reading: "せいぶつそう",
    meaning: "생물상",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 239,
    word: "すら",
    reading: "すら",
    meaning: "~조차",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 240,
    word: "生息",
    reading: "せいそく",
    meaning: "서식",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 241,
    word: "島嶼",
    reading: "とうしょ",
    meaning: "도서, 크고 작은 섬들",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 242,
    word: "隔離",
    reading: "かくり",
    meaning: "격리",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 243,
    word: "有する",
    reading: "ゆうする",
    meaning: "가지다, 소유하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 244,
    word: "前者",
    reading: "ぜんしゃ",
    meaning: "전자",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 245,
    word: "しつけ",
    reading: "しつけ",
    meaning: "예의범절 가르침, 훈육",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 246,
    word: "稽古事",
    reading: "けいこごと",
    meaning: "예능/무술 등의 기예를 배우는 일",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 247,
    word: "大挙",
    reading: "たいきょ",
    meaning: "대거",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 248,
    word: "いとま",
    reading: "いとま",
    meaning: "틈, 여가, 작별",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 249,
    word: "大して",
    reading: "たいして",
    meaning: "대수롭게, 그다지",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 250,
    word: "誘惑",
    reading: "ゆうわく",
    meaning: "유혹",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 251,
    word: "劣る",
    reading: "おとる",
    meaning: "뒤떨어지다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 252,
    word: "切り替える",
    reading: "きりかえる",
    meaning: "바꾸다, 전환하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 253,
    word: "手抜き",
    reading: "てぬき",
    meaning: "부실, 날림, 손을 뗌",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 254,
    word: "欺く",
    reading: "あざむく",
    meaning: "속이다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 255,
    word: "堰を切る",
    reading: "せきをきる",
    meaning: "둑을 터뜨리다 (감정/말이 터짐)",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 256,
    word: "赤子の手をひねる",
    reading: "あかごのてをひねる",
    meaning: "식은 죽 먹기",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 257,
    word: "源泉",
    reading: "げんせん",
    meaning: "원천",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 258,
    word: "手をつける",
    reading: "てをつける",
    meaning: "손을 대다, 착수하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 259,
    word: "騙す",
    reading: "だます",
    meaning: "속이다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 260,
    word: "駆られる",
    reading: "かられる",
    meaning: "사로잡히다, 쫓기다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 261,
    word: "桁違い",
    reading: "けたちがい",
    meaning: "자릿수가 다름, 스케일이 다름",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 262,
    word: "味を占める",
    reading: "あじをしめる",
    meaning: "재미를 붙이다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 263,
    word: "追随",
    reading: "ついずい",
    meaning: "추종, 뒤따름",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 264,
    word: "真っ先",
    reading: "まっさき",
    meaning: "맨 앞, 가장 먼저",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 265,
    word: "徐々に",
    reading: "じょじょに",
    meaning: "서서히",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 266,
    word: "生後間もない",
    reading: "せいごまもない",
    meaning: "생후 얼마 안 된",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 267,
    word: "駆り立てる",
    reading: "かりたてる",
    meaning: "몰아대다, 부추기다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 268,
    word: "備わる",
    reading: "そなわる",
    meaning: "갖춰지다, 구비되다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 269,
    word: "想定",
    reading: "そうてい",
    meaning: "상정, 가정",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 270,
    word: "発現",
    reading: "はつげん",
    meaning: "발현",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 271,
    word: "合致",
    reading: "がっち",
    meaning: "합치",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 272,
    word: "新生児",
    reading: "しんせいじ",
    meaning: "신생아",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 273,
    word: "乳幼児",
    reading: "にゅうようじ",
    meaning: "영유아",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 274,
    word: "養育",
    reading: "よういく",
    meaning: "양육",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 275,
    word: "それゆえ",
    reading: "それゆえ",
    meaning: "그러므로",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 276,
    word: "こういうわけで",
    reading: "こういうわけで",
    meaning: "이런 까닭으로",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 277,
    word: "馴染みのある",
    reading: "なじみのある",
    meaning: "낯익은, 친숙한",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 278,
    word: "怠い",
    reading: "だるい",
    meaning: "나른하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 279,
    word: "〜たとたん",
    reading: "〜たとたん",
    meaning: "~하자마자",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 280,
    word: "伝達",
    reading: "でんたつ",
    meaning: "전달",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 281,
    word: "双方",
    reading: "そうほう",
    meaning: "쌍방",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 282,
    word: "情意",
    reading: "じょうい",
    meaning: "정의, 감정과 의지",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 283,
    word: "張り詰める",
    reading: "はりつめる",
    meaning: "팽팽해지다, 긴장하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 284,
    word: "相反する",
    reading: "あいはんする",
    meaning: "상반되다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 285,
    word: "飛び交う",
    reading: "とびかう",
    meaning: "난무하다, 날아다니다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 286,
    word: "受け身",
    reading: "うけみ",
    meaning: "수동(적)",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 287,
    word: "役者",
    reading: "やくしゃ",
    meaning: "배우, 연기자",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 288,
    word: "接触",
    reading: "せっしょく",
    meaning: "접촉",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 289,
    word: "仕切り",
    reading: "しきり",
    meaning: "칸막이, 결산, 마무리",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 290,
    word: "朝夕",
    reading: "あさゆう",
    meaning: "아침저녁",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 291,
    word: "理不尽",
    reading: "りふじん",
    meaning: "불합리, 터무니없음",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 292,
    word: "見ず知らず",
    reading: "みずしらず",
    meaning: "생면부지",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 293,
    word: "強いられる",
    reading: "しいられる",
    meaning: "강요당하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 294,
    word: "見知らぬ",
    reading: "みしらぬ",
    meaning: "모르는, 낯선",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 295,
    word: "人通り",
    reading: "ひとどおり",
    meaning: "사람의 통행",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 296,
    word: "保つ",
    reading: "たもつ",
    meaning: "유지하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 297,
    word: "消失",
    reading: "しょうしつ",
    meaning: "소실",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 298,
    word: "超過",
    reading: "ちょうか",
    meaning: "초과",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 299,
    word: "くつろぐ",
    reading: "くつろぐ",
    meaning: "편안히 쉬다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 300,
    word: "この上ない",
    reading: "このうえない",
    meaning: "더할 나위 없다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 301,
    word: "快適",
    reading: "かいてき",
    meaning: "쾌적",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 302,
    word: "他者",
    reading: "たしゃ",
    meaning: "타자, 다른 사람",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 303,
    word: "他人",
    reading: "たにん",
    meaning: "타인",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 304,
    word: "目をつぶる",
    reading: "めをつぶる",
    meaning: "눈을 감다, 모른 체하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 305,
    word: "消し去る",
    reading: "けしさる",
    meaning: "지워버리다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 306,
    word: "わずかに",
    reading: "わずかに",
    meaning: "약간, 근소하게",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 307,
    word: "車窓",
    reading: "しゃそう",
    meaning: "차창",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 308,
    word: "考え事",
    reading: "かんがえごと",
    meaning: "생각거리, 궁리",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 309,
    word: "努める",
    reading: "つとめる",
    meaning: "노력하다, 힘쓰다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 310,
    word: "自在に",
    reading: "じざいに",
    meaning: "자유자재로",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 311,
    word: "引き離す",
    reading: "ひきはなす",
    meaning: "떼어놓다, 거리를 벌리다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 312,
    word: "もたらす",
    reading: "もたらす",
    meaning: "가져오다, 초래하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 313,
    word: "送受信",
    reading: "そうじゅしん",
    meaning: "송수신",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 314,
    word: "たちまち",
    reading: "たちまち",
    meaning: "홀연, 금세, 순식간에",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 315,
    word: "挟む",
    reading: "はさむ",
    meaning: "끼우다, 틈을 두다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 316,
    word: "詰め込む",
    reading: "つめこむ",
    meaning: "쑤셔 넣다, 가득 채우다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  }
];
