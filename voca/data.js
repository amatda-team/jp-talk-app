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
  }
];
