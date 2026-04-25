const db = [
  {
    id: 1,
    word: "頭に来る",
    reading: "あたまにくる",
    meaning: "화가 나다; 기분 나빠지다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 2,
    word: "気張る",
    reading: "きばる",
    meaning: "힘을 주다; 분발하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 3,
    word: "臆病者",
    reading: "おくびょうもの",
    meaning: "겁쟁이",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 4,
    word: "鼻血",
    reading: "はなぢ",
    meaning: "코피; 빈털터리가 되다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 5,
    word: "守秘",
    reading: "しゅひ",
    meaning: "비밀을 지킴",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 6,
    word: "助かる",
    reading: "たすかる",
    meaning: "살아나다; 도움이 되다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 7,
    word: "只管・一向",
    reading: "ひたすら",
    meaning: "오로지; 한결같이",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 8,
    word: "ワロタ",
    reading: "わろた",
    meaning: "빵터짐",
    tag: "スラング",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 9,
    word: "おなら",
    reading: "おなら",
    meaning: "방귀",
    tag: "日常",
    exJa: "おならをする",
    exKo: "방귀를 뀌다"
  },
  {
    id: 10,
    word: "ポンコツ",
    reading: "ぽんこつ",
    meaning: "고물; 글러먹은 사람",
    tag: "スラング",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 11,
    word: "女王",
    reading: "じょおう",
    meaning: "여왕",
    tag: "社会",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 12,
    word: "ブッチする",
    reading: "ぶっちする",
    meaning: "무시하다; 약속을 깨다",
    tag: "スラング",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 13,
    word: "うんたらかんたら",
    reading: "うんたらかんたら",
    meaning: "어쩌구 저쩌구",
    tag: "スラング",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 14,
    word: "鼻に付く",
    reading: "はなにつく",
    meaning: "싫어지다; 진력나다",
    tag: "日常",
    exJa: "出すぎた親切が鼻に付く",
    exKo: "지나친 친절이 역겹다"
  },
  {
    id: 15,
    word: "滲み出る",
    reading: "にじみでる",
    meaning: "스며 나오다; 자연히 드러나다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 16,
    word: "欲しがる",
    reading: "ほしがる",
    meaning: "탐내다; 갖고 싶어하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 17,
    word: "別嬪",
    reading: "べっぴん",
    meaning: "미인",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 18,
    word: "取り消し",
    reading: "とりけし",
    meaning: "취소",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 19,
    word: "爽快",
    reading: "そうかい",
    meaning: "상쾌함",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 20,
    word: "ぽい捨て",
    reading: "ぽいすて",
    meaning: "물건을 함부로 버리는 일",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 21,
    word: "滅ぶ",
    reading: "ほろぶ",
    meaning: "망하다; 사라지다",
    tag: "社会",
    exJa: "美しい自然が滅んでゆく",
    exKo: "아름다운 자연이 사라져 가다"
  },
  {
    id: 22,
    word: "女手",
    reading: "おんなで",
    meaning: "여자의 힘[일손]; 여자의 필적",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 23,
    word: "足掛かり",
    reading: "あしがかり",
    meaning: "발판; 거점; 실마리",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 24,
    word: "越境",
    reading: "えっきょう",
    meaning: "월경 (국경을 넘음)",
    tag: "社会",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 25,
    word: "根性",
    reading: "こんじょう",
    meaning: "근성; 강한 기질",
    tag: "日常",
    exJa: "根性のある人",
    exKo: "근성이 있는 사람"
  },
  {
    id: 26,
    word: "飛び付く",
    reading: "とびつく",
    meaning: "달려들다; 덤벼들다",
    tag: "日常",
    exJa: "流行にすぐとびつく性向",
    exKo: "유행을 무턱대고 따르는 성향"
  },
  {
    id: 27,
    word: "まさに",
    reading: "まさに",
    meaning: "당연히; 바야흐로; 막",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 28,
    word: "改革",
    reading: "かいかく",
    meaning: "개혁",
    tag: "社会",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 29,
    word: "招聘",
    reading: "しょうへい",
    meaning: "초빙",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 30,
    word: "集積",
    reading: "しゅうせき",
    meaning: "집적; 다량으로 모음",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 31,
    word: "一事が万事",
    reading: "いちじがばんじ",
    meaning: "한 가지를 보면 딴 것도 미루어 알 수 있다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 32,
    word: "程遠い",
    reading: "ほどとおい",
    meaning: "동떨어지다; 차이가 많이 나다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 33,
    word: "感嘆",
    reading: "かんたん",
    meaning: "감탄",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 34,
    word: "潜在力",
    reading: "せんざいりょく",
    meaning: "잠재력",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 35,
    word: "躊躇い",
    reading: "ためらい",
    meaning: "주저; 망설임",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 36,
    word: "痛ましい",
    reading: "いたましい",
    meaning: "애처롭다; 참혹하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 37,
    word: "隠蔽",
    reading: "いんぺい",
    meaning: "은폐",
    tag: "社会",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 38,
    word: "成熟",
    reading: "せいじゅく",
    meaning: "성숙",
    tag: "社会",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 39,
    word: "過ち",
    reading: "あやまち",
    meaning: "잘못; 실수; 오류",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 40,
    word: "浮かれる",
    reading: "うかれる",
    meaning: "(마음이) 들뜨다; 신이 나다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 41,
    word: "符合",
    reading: "ふごう",
    meaning: "부합",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 42,
    word: "対話",
    reading: "たいわ",
    meaning: "대화",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 43,
    word: "紛争",
    reading: "ふんそう",
    meaning: "분쟁",
    tag: "社会",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 44,
    word: "永世中立",
    reading: "えいせいちゅうりつ",
    meaning: "영세 중립",
    tag: "社会",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 45,
    word: "傘下",
    reading: "さんか",
    meaning: "산하",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 46,
    word: "修める",
    reading: "おさめる",
    meaning: "닦다; 수양하다; 배우고 익히다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 47,
    word: "ライフハック",
    reading: "らいふはっく",
    meaning: "라이프핵; 효율을 올리기 위한 기술",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 48,
    word: "吹き込む",
    reading: "ふきこむ",
    meaning: "불어 들어오다; 불어넣다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 49,
    word: "先陣",
    reading: "せんじん",
    meaning: "선진; 맨 앞장; 선봉",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 50,
    word: "隣人",
    reading: "りんじん",
    meaning: "이웃 (사람)",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 51,
    word: "葛藤",
    reading: "かっとう",
    meaning: "갈등",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 52,
    word: "財政",
    reading: "ざいせい",
    meaning: "재정",
    tag: "社会",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 53,
    word: "改編",
    reading: "かいへん",
    meaning: "개편",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 54,
    word: "溶け込む",
    reading: "とけこむ",
    meaning: "녹아서 완전히 섞이다; 융화하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 55,
    word: "溶け込み",
    reading: "とけこみ",
    meaning: "용입",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 56,
    word: "経由",
    reading: "けいゆ",
    meaning: "경유; 거쳐 지나는 것",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 57,
    word: "防御",
    reading: "ぼうぎょ",
    meaning: "방어",
    tag: "社会",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 58,
    word: "強力",
    reading: "きょうりょく",
    meaning: "강력",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 59,
    word: "決定打",
    reading: "けっていだ",
    meaning: "결정타; 결정적인 영향을 주는 행동",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 60,
    word: "既存",
    reading: "きそん",
    meaning: "기존",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 61,
    word: "深掘り",
    reading: "ふかぼり",
    meaning: "무언가를 깊게 파고듦; 밀접한 관계 구축",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 62,
    word: "現況",
    reading: "げんきょう",
    meaning: "현황",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 63,
    word: "答弁",
    reading: "とうべん",
    meaning: "답변; 질문에 대답하는 것",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 64,
    word: "探す",
    reading: "さがす",
    meaning: "찾다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 65,
    word: "閉じこもる",
    reading: "とじこもる",
    meaning: "틀어박혀 나오지 않다; 두문불출하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 66,
    word: "創出",
    reading: "そうしゅつ",
    meaning: "창출",
    tag: "ビジネス",
    exJa: "新たな文化を創出する",
    exKo: "새로운 문화를 창출하다"
  },
  {
    id: 67,
    word: "誘致",
    reading: "ゆうち",
    meaning: "유치; 이끌어 들임",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 68,
    word: "接ぎ木",
    reading: "つぎき",
    meaning: "접목",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 69,
    word: "閉鎖的",
    reading: "へいさてき",
    meaning: "폐쇄적",
    tag: "社会",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 70,
    word: "推進",
    reading: "すいしん",
    meaning: "추진",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 71,
    word: "速く来い",
    reading: "はやくこい",
    meaning: "급히 오너라",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 72,
    word: "修士",
    reading: "しゅうし",
    meaning: "석사",
    tag: "社会",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 73,
    word: "着手",
    reading: "ちゃくしゅ",
    meaning: "착수",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 74,
    word: "契機",
    reading: "けいき",
    meaning: "계기",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 75,
    word: "至らぬ",
    reading: "いたらぬ",
    meaning: "미흡한; 모자라는",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 76,
    word: "燥ぐ",
    reading: "はしゃぐ",
    meaning: "까불며 떠들다; 우쭐해지다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 77,
    word: "腑抜ける",
    reading: "ふぬける",
    meaning: "얼빠지다; 무기력해지다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 78,
    word: "犬も食わない",
    reading: "いぬもくわない",
    meaning: "개도 먹지 않는다; 아무도 거들떠보지 않다",
    tag: "日常",
    exJa: "夫婦喧嘩は犬も食わない",
    exKo: "부부 싸움은 개도 안 말린다"
  },
  {
    id: 79,
    word: "面",
    reading: "づら",
    meaning: "(경멸조로) 얼굴; 낯",
    tag: "スラング",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 80,
    word: "光栄",
    reading: "こうえい",
    meaning: "광영; 영광",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 81,
    word: "目が丸くなる",
    reading: "めがまるくなる",
    meaning: "놀라서 눈이 동그래지다",
    tag: "日常",
    exJa: "びっくりして目が丸くなる。",
    exKo: "깜짝 놀라 눈이 동그래지다"
  },
  {
    id: 82,
    word: "飲み込む",
    reading: "のみこむ",
    meaning: "삼키다; 이해하다; 납득하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 83,
    word: "KY",
    reading: "けーわい",
    meaning: "분위기 파악 못하는 것(사람)",
    tag: "スラング",
    exJa: "あの人KYすぎじゃない?",
    exKo: "저 사람 너무 분위기 파악 못 하는 것 아냐?"
  },
  {
    id: 84,
    word: "ぶいぶい",
    reading: "ぶいぶい",
    meaning: "투덜투덜",
    tag: "スラング",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 85,
    word: "アポをとる",
    reading: "あぽをとる",
    meaning: "약속하다",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 86,
    word: "健気",
    reading: "けなげ",
    meaning: "씩씩하고 부지런함; 갸륵함",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 87,
    word: "狭き門",
    reading: "せまきもん",
    meaning: "좁은 문; 난관",
    tag: "社会",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 88,
    word: "損切り",
    reading: "そんぎり",
    meaning: "손절매",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 89,
    word: "内職",
    reading: "ないしょく",
    meaning: "내직; 부업",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 90,
    word: "受け止める",
    reading: "うけとめる",
    meaning: "받아 내다; 받아들이다",
    tag: "ビジネス",
    exJa: "指摘を前向きに受け止める",
    exKo: "지적을 적극적으로 받아들이다"
  },
  {
    id: 91,
    word: "所詮",
    reading: "しょせん",
    meaning: "어차피; 결국",
    tag: "日常",
    exJa: "所詮できない相談だ",
    exKo: "도저히 되지도 않을 이야기다"
  },
  {
    id: 92,
    word: "大人げない",
    reading: "おとなげない",
    meaning: "어른답지 못하다; 유치하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 93,
    word: "遣らかす",
    reading: "やらかす",
    meaning: "저지르다",
    tag: "日常",
    exJa: "どえらいことを遣らかしてしまった",
    exKo: "엄청난 일을 저지르고 말았다"
  },
  {
    id: 94,
    word: "よっ友",
    reading: "よっとも",
    meaning: "인사 정도만 나누는 친구",
    tag: "スラング",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 95,
    word: "宥める",
    reading: "なだめる",
    meaning: "달래다; 관대한 조치를 하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 96,
    word: "お馴染み",
    reading: "おなじみ",
    meaning: "친숙함; 잘 아는 사람",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 97,
    word: "媚を売る",
    reading: "こびをうる",
    meaning: "아양 떨다; 아첨하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 98,
    word: "屈辱",
    reading: "くつじょく",
    meaning: "굴욕",
    tag: "社会",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 99,
    word: "緊張感",
    reading: "きんちょうかん",
    meaning: "긴장감",
    tag: "日常",
    exJa: "息苦しいほどの緊張感が漂う",
    exKo: "숨 막힐 정도의 긴장감이 감돌다"
  },
  {
    id: 100,
    word: "燃え盛る",
    reading: "もえさかる",
    meaning: "한창 타다; 활활 타다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 101,
    word: "外聞",
    reading: "がいぶん",
    meaning: "세상 소문; 평판; 체면",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 102,
    word: "かなぐり捨てる",
    reading: "かなぐりすてる",
    meaning: "벗어 던지다; 벗어 팽개치다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 103,
    word: "羽目になる",
    reading: "はめになる",
    meaning: "곤란한 상황에 처하다; 일이 꼬이다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 104,
    word: "待ち伏せ",
    reading: "まちぶせ",
    meaning: "매복하고 기다림",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 105,
    word: "焦げる",
    reading: "こげる",
    meaning: "눋다; 타다",
    tag: "日常",
    exJa: "肉がじりじりと焦げる",
    exKo: "고기가 지글지글 타다"
  },
  {
    id: 106,
    word: "取り込む",
    reading: "とりこむ",
    meaning: "어수선하다; 거두어들이다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 107,
    word: "意気込み",
    reading: "いきごみ",
    meaning: "분발함; 패기; 의욕",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 108,
    word: "立ち回り",
    reading: "たちまわり",
    meaning: "돌아다님; 자기 이익이 되도록 조처함",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 109,
    word: "地道",
    reading: "じみち",
    meaning: "착실함",
    tag: "ビジネス",
    exJa: "地道な人",
    exKo: "착실한 사람"
  },
  {
    id: 110,
    word: "泥臭い",
    reading: "どろくさい",
    meaning: "흙내가 나다; 촌스럽다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 111,
    word: "一際",
    reading: "ひときわ",
    meaning: "한층 더; 유달리",
    tag: "日常",
    exJa: "一際目を引く",
    exKo: "한층 더 눈길을 끌다"
  },
  {
    id: 112,
    word: "目立つ",
    reading: "めだつ",
    meaning: "눈에 띄다; 두드러지다",
    tag: "日常",
    exJa: "その中でも一際目立つ生徒が1人いた",
    exKo: "그중에서도 유독 눈에 띄는 학생이 한 명 있었다"
  },
  {
    id: 113,
    word: "悪羅悪羅系",
    reading: "おらおらけい",
    meaning: "거만하고 강압적인 태도의 남성",
    tag: "スラング",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 114,
    word: "いびる",
    reading: "いびる",
    meaning: "들볶다; 괴롭히다; 구박하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 115,
    word: "めそめそ",
    reading: "めそめそ",
    meaning: "훌쩍훌쩍 우는 모양",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 116,
    word: "どん底",
    reading: "どんぞこ",
    meaning: "(맨) 밑바닥; 최악의 상태",
    tag: "日常",
    exJa: "人生のどん底を経験する",
    exKo: "인생의 밑바닥을 경험하다"
  },
  {
    id: 117,
    word: "避ける",
    reading: "さける",
    meaning: "피하다; 삼가다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 118,
    word: "前例",
    reading: "ぜんれい",
    meaning: "전례",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 119,
    word: "強まる",
    reading: "つよまる",
    meaning: "강해지다; 세지다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 120,
    word: "裏付け",
    reading: "うらづけ",
    meaning: "확실한 증거; 뒷받침",
    tag: "ビジネス",
    exJa: "理論の裏付けがない",
    exKo: "이론적인 뒷받침이 없다"
  },
  {
    id: 121,
    word: "真っ向",
    reading: "まっこう",
    meaning: "정면; 이마 한가운데",
    tag: "日常",
    exJa: "逃げないで真っ向から勝負する",
    exKo: "피하지 않고 정면으로 승부하다"
  },
  {
    id: 122,
    word: "急ぐ",
    reading: "いそぐ",
    meaning: "급히[빨리] 가다",
    tag: "日常",
    exJa: "とっとと急ぐ",
    exKo: "급히 가다"
  },
  {
    id: 123,
    word: "理想郷",
    reading: "りそうきょう",
    meaning: "이상향; 유토피아",
    tag: "社会",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 124,
    word: "コネ",
    reading: "こね",
    meaning: "연고; 연줄; 인맥",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 125,
    word: "足を運ぶ",
    reading: "あしをはこぶ",
    meaning: "실지로 그 곳에 가다; 찾아가보다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 126,
    word: "ちくる",
    reading: "ちくる",
    meaning: "일러바치다; 고자질하다",
    tag: "スラング",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 127,
    word: "ごまんと",
    reading: "ごまんと",
    meaning: "많이; 얼마든지",
    tag: "日常",
    exJa: "そんな例ならごまんとあるさ",
    exKo: "그런 예라면 얼마든지 있어"
  },
  {
    id: 128,
    word: "ろくでもない",
    reading: "ろくでもない",
    meaning: "대단치도 않다; 쓸데도 없다",
    tag: "日常",
    exJa: "碌でも無い話をするな",
    exKo: "쓸데없는 이야기를 하지 마라"
  },
  {
    id: 129,
    word: "的外れ",
    reading: "まとはずれ",
    meaning: "빗나감; 요점을 벗어남",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 130,
    word: "白け",
    reading: "しらけ",
    meaning: "관심·감동이 없음",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 131,
    word: "破る",
    reading: "やぶる",
    meaning: "깨다; 부수다; 돌파하다",
    tag: "日常",
    exJa: "優勝候補を破る",
    exKo: "우승 후보를 패배시키다"
  },
  {
    id: 132,
    word: "操り人形",
    reading: "あやつりにんぎょう",
    meaning: "꼭두각시 인형",
    tag: "社会",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 133,
    word: "被る",
    reading: "かぶる",
    meaning: "겹치다; 중복되다",
    tag: "ビジネス",
    exJa: "政策がかぶる部分がある",
    exKo: "정책이 겹치는 부분이 있다"
  },
  {
    id: 134,
    word: "きりがない",
    reading: "きりがない",
    meaning: "끝이 없다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 135,
    word: "理屈",
    reading: "りくつ",
    meaning: "도리; 이치; 구실",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 136,
    word: "割り切る",
    reading: "わりきる",
    meaning: "명쾌하게 결론짓다; 딱 잘라 결론 내다",
    tag: "ビジネス",
    exJa: "これは理屈で割り切ることはできない",
    exKo: "이것은 이치만으로 딱 잘라 단정 지을 수는 없다"
  },
  {
    id: 137,
    word: "焼ける",
    reading: "やける",
    meaning: "타다; 색이 변하다",
    tag: "日常",
    exJa: "山が焼ける",
    exKo: "산불이 나다"
  },
  {
    id: 138,
    word: "抑揚",
    reading: "よくよう",
    meaning: "억양",
    tag: "日常",
    exJa: "抑揚のない話し方",
    exKo: "억양이 없는 말투"
  },
  {
    id: 139,
    word: "絞め殺す",
    reading: "しめころす",
    meaning: "목을 졸라 죽이다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 140,
    word: "どうやら",
    reading: "どうやら",
    meaning: "아무래도; 어쩐지; 간신히",
    tag: "日常",
    exJa: "どうやら風邪を引いたようだ",
    exKo: "아무래도 감기가 든 모양이다"
  },
  {
    id: 141,
    word: "自ずと",
    reading: "おのずと",
    meaning: "저절로; 자연히",
    tag: "日常",
    exJa: "年を取れば自ずと分かってくる",
    exKo: "나이를 먹으면 자연히 알게 된다"
  },
  {
    id: 142,
    word: "執筆",
    reading: "しっぴつ",
    meaning: "집필",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 143,
    word: "ふて腐れる",
    reading: "ふてくされる",
    meaning: "부루퉁해지다; 토라지다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 144,
    word: "あからさま",
    reading: "あからさま",
    meaning: "명백함; 분명함",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 145,
    word: "誤魔化す",
    reading: "ごまかす",
    meaning: "속이다; 얼버무리다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 146,
    word: "触れる",
    reading: "ふれる",
    meaning: "접촉하다; 닿다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 147,
    word: "臑噛り",
    reading: "すねかじり",
    meaning: "부모의 신세를 짐 (또는 그런 사람)",
    tag: "日常",
    exJa: "すねかじりの分際でぜいたくだね。",
    exKo: "부모에게 얹혀사는 처지에 사치스럽군"
  },
  {
    id: 148,
    word: "分際",
    reading: "ぶんざい",
    meaning: "신분; 분수",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 149,
    word: "巻き戻す",
    reading: "まきもどす",
    meaning: "되감다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 150,
    word: "べた惚れ",
    reading: "べたぼれ",
    meaning: "홀딱 반함",
    tag: "スラング",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 151,
    word: "押し売り",
    reading: "おしうり",
    meaning: "강매",
    tag: "社会",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 152,
    word: "病む",
    reading: "やむ",
    meaning: "앓다; 병들다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 153,
    word: "淑やか",
    reading: "しとやか",
    meaning: "정숙함; 얌전함",
    tag: "日常",
    exJa: "そういう風に着たらおしとやかに見えるよ。",
    exKo: "그렇게 입으니까 참해 보여."
  },
  {
    id: 154,
    word: "びり",
    reading: "びり",
    meaning: "제일 끝; 꼴찌",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 155,
    word: "どか雪",
    reading: "どかゆき",
    meaning: "펑펑 내리는 눈",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 156,
    word: "そっと",
    reading: "そっと",
    meaning: "살짝; 가만히; 몰래",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 157,
    word: "お花畑",
    reading: "おはなばたけ",
    meaning: "꽃밭",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 158,
    word: "危うく",
    reading: "あやうく",
    meaning: "가까스로; 겨우; 간신히",
    tag: "日常",
    exJa: "危ういところで助かる",
    exKo: "위태로운 고비에서 간신히 살아나다"
  },
  {
    id: 159,
    word: "危うい",
    reading: "あやうい",
    meaning: "위태롭다; 아슬아슬하다",
    tag: "日常",
    exJa: "命が危うい",
    exKo: "생명이 위태롭다"
  },
  {
    id: 160,
    word: "ざまあみろ",
    reading: "ざまあみろ",
    meaning: "꼴좋다",
    tag: "スラング",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 161,
    word: "振り回す",
    reading: "ふりまわす",
    meaning: "휘두르다",
    tag: "日常",
    exJa: "ステッキを振り回す",
    exKo: "지팡이를 휘두르다"
  },
  {
    id: 162,
    word: "ハサミ",
    reading: "はさみ",
    meaning: "가위",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 163,
    word: "ふるい落とす",
    reading: "ふるいおとす",
    meaning: "체로 쳐서 떨어뜨리다",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 164,
    word: "同い年",
    reading: "おないどし",
    meaning: "동갑; 같은 나이",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 165,
    word: "コツ",
    reading: "こつ",
    meaning: "요령; 미립",
    tag: "日常",
    exJa: "コツをすっかり飲み込む",
    exKo: "요령을 완전히 터득하다"
  },
  {
    id: 166,
    word: "頭文字",
    reading: "かしらもじ",
    meaning: "두문자; 머리글자",
    tag: "日常",
    exJa: "英文の頭文字は大文字で書く",
    exKo: "영문의 머리글자는 대문자로 쓴다"
  },
  {
    id: 167,
    word: "日和",
    reading: "ひより",
    meaning: "날씨; 맑게 갠 날씨",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 168,
    word: "宿る",
    reading: "やどる",
    meaning: "머무르다; 깃들다",
    tag: "日常",
    exJa: "睫に宿る露",
    exKo: "속눈썹에 맺힌 이슬[눈물]"
  },
  {
    id: 169,
    word: "睫",
    reading: "まつげ",
    meaning: "속눈썹",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 170,
    word: "ときめき",
    reading: "ときめき",
    meaning: "(기쁨이나 기대로) 가슴이 두근거림",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 171,
    word: "足切り",
    reading: "あしきり",
    meaning: "일정 기준 미달자를 탈락시키는 일",
    tag: "社会",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 172,
    word: "ほっこり",
    reading: "ほっこり",
    meaning: "마음이 따뜻해지는 모양",
    tag: "日常",
    exJa: "心がほっこりする話",
    exKo: "마음이 따뜻해지는 이야기"
  },
  {
    id: 173,
    word: "雲行きが怪しい",
    reading: "くもゆきがあやしい",
    meaning: "날씨(형세)가 수상하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 174,
    word: "百も承知",
    reading: "ひゃくもしょうち",
    meaning: "잘(충분히) 알고 있음",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 175,
    word: "地に足をつける",
    reading: "ちにあしをつける",
    meaning: "매사에 확실히 진행시켜 나가는 것",
    tag: "ビジネス",
    exJa: "わくわくして足が地に着かない",
    exKo: "가슴이 두근거려 안절부절못하다"
  },
  {
    id: 176,
    word: "巻き起こる",
    reading: "まきおこる",
    meaning: "돌연 일어나다",
    tag: "社会",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 177,
    word: "目を掛ける",
    reading: "めをかける",
    meaning: "돌보아 주다; 총애하다",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 178,
    word: "矛先",
    reading: "ほこさき",
    meaning: "창끝; 비난이나 공격의 방향",
    tag: "社会",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 179,
    word: "まさに",
    reading: "まさに",
    meaning: "지금 바로; 마침",
    tag: "日常",
    exJa: "客への態度はまさにそうあるべきだ",
    exKo: "손님을 대하는 태도는 마땅히 그래야 한다"
  },
  {
    id: 180,
    word: "取るに足りない",
    reading: "とるにたりない",
    meaning: "하잘것없다; 하찮다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 181,
    word: "薄ら",
    reading: "うっすら",
    meaning: "어렴풋이; 희미하게",
    tag: "日常",
    exJa: "今も薄すらと記憶に残っている",
    exKo: "지금도 어렴풋이 기억에 남아 있다"
  },
  {
    id: 182,
    word: "頬",
    reading: "ほお",
    meaning: "볼; 뺨",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 183,
    word: "顎",
    reading: "あご",
    meaning: "턱",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 184,
    word: "牛耳る",
    reading: "ぎゅうじる",
    meaning: "(조직 등을) 좌지우지하다",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 185,
    word: "御尤も",
    reading: "ごもっとも",
    meaning: "지당함; 당연함",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 186,
    word: "隅",
    reading: "すみ",
    meaning: "모퉁이; 구석",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 187,
    word: "撲滅",
    reading: "ぼくめつ",
    meaning: "박멸",
    tag: "社会",
    exJa: "蚊を撲滅する",
    exKo: "모기를 박멸하다"
  },
  {
    id: 188,
    word: "引かれる",
    reading: "ひかれる",
    meaning: "(마음 등이) 끌리다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 189,
    word: "程良い",
    reading: "ほどよい",
    meaning: "알맞다; 적당하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 190,
    word: "次第に",
    reading: "しだいに",
    meaning: "차츰; 점점",
    tag: "日常",
    exJa: "二人の仲が次第に隔たる",
    exKo: "두 사람 사이가 점차 멀어지다"
  },
  {
    id: 191,
    word: "心細い",
    reading: "こころぼそい",
    meaning: "불안하다; 어쩐지 쓸쓸하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 192,
    word: "物腰",
    reading: "ものごし",
    meaning: "언행; 사람을 대하는 말씨",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 193,
    word: "瑞々しい",
    reading: "みずみずしい",
    meaning: "윤이 나고 싱싱하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 194,
    word: "差し支える",
    reading: "さしつかえる",
    meaning: "지장이 있다; 방해가 되다",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 195,
    word: "意気込む",
    reading: "いきごむ",
    meaning: "분발하다; 의욕에 불타다",
    tag: "日常",
    exJa: "新記録を狙いたいと意気込む",
    exKo: "신기록을 노리고 싶다며 의욕을 보이다"
  },
  {
    id: 196,
    word: "ブレない",
    reading: "ぶれない",
    meaning: "흔들림이 없는 모양; 일관성 있는 모양",
    tag: "ビジネス",
    exJa: "柔軟だけど芯がブレない",
    exKo: "유연하지만 심지가 굳다"
  },
  {
    id: 197,
    word: "怯える",
    reading: "おびえる",
    meaning: "겁먹다; 무서워 벌벌 떨다",
    tag: "日常",
    exJa: "石油値上げの声に怯える",
    exKo: "석유 가격 인상 소리에 겁을 내다"
  },
  {
    id: 198,
    word: "嫌らしい",
    reading: "いやらしい",
    meaning: "불쾌한 느낌이 들다; 역겹다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 199,
    word: "凄まじい",
    reading: "すさまじい",
    meaning: "굉장하다; 놀랍다; 무섭다",
    tag: "日常",
    exJa: "凄まじい量の資料を読んだ",
    exKo: "엄청난 양의 자료를 읽었다"
  },
  {
    id: 200,
    word: "惜しい",
    reading: "おしい",
    meaning: "아깝다; 애석하다",
    tag: "日常",
    exJa: "惜しいところで失敗した",
    exKo: "아깝게도 다 된 일을 실패했다"
  },
  {
    id: 201,
    word: "頑固",
    reading: "がんこ",
    meaning: "완고(함); 외고집",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 202,
    word: "バズ",
    reading: "ばず",
    meaning: "버즈; 소문; 입소문",
    tag: "スラング",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 203,
    word: "たどり着く",
    reading: "たどりつく",
    meaning: "겨우 목적지에 다다르다",
    tag: "日常",
    exJa: "マップを使って目的地にたどり着く",
    exKo: "지도를 이용하여 겨우 목적지에 당도하다"
  },
  {
    id: 204,
    word: "裂ける",
    reading: "さける",
    meaning: "찢어지다; 터지다; 갈라지다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 205,
    word: "余程",
    reading: "よほど",
    meaning: "상당히; 대단히; 꽤",
    tag: "日常",
    exJa: "現代人はよほどのことでは感動しない無感動状態になったようだ。",
    exKo: "현대인은 웬만한 일에는 감동하지 않는 무감동 상태가 된 듯하다."
  },
  {
    id: 206,
    word: "うっかり",
    reading: "うっかり",
    meaning: "깜빡; 무심코; 멍청히",
    tag: "日常",
    exJa: "うっかり秘密[本心]をしゃべってしまう",
    exKo: "무심코 비밀[본심]을 말해 버리다"
  },
  {
    id: 207,
    word: "相性",
    reading: "あいしょう",
    meaning: "궁합이 맞음; 성격이 잘 맞음",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 208,
    word: "覗かせる",
    reading: "のぞかせる",
    meaning: "들여다 보이게 하다; 슬쩍 비치다",
    tag: "日常",
    exJa: "下心を覗かせる",
    exKo: "속마음을 슬쩍 비치다"
  },
  {
    id: 209,
    word: "下心",
    reading: "したごころ",
    meaning: "속마음; 본심",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 210,
    word: "サボり",
    reading: "さぼり",
    meaning: "땡땡이, 농땡이",
    tag: "スラング",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 211,
    word: "潜り",
    reading: "もぐり",
    meaning: "강의를 몰래 훔쳐 듣는 일 (도강)",
    tag: "スラング",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 212,
    word: "こっそり",
    reading: "こっそり",
    meaning: "가만히; 살짝; 몰래",
    tag: "日常",
    exJa: "誰かとこっそり(と)連絡を取っている",
    exKo: "누군가와 몰래 연락하고 있다"
  },
  {
    id: 213,
    word: "今更",
    reading: "いまさら",
    meaning: "이제 와서; 새삼스럽게",
    tag: "日常",
    exJa: "今更後には引けない",
    exKo: "이제 와서 물러설 [그만둘] 수는 없다"
  },
  {
    id: 214,
    word: "いっそ",
    reading: "いっそ",
    meaning: "도리어; 차라리",
    tag: "日常",
    exJa: "いっそ遠くへ行ってみるか",
    exKo: "차라리 멀리 가 볼까?"
  },
  {
    id: 215,
    word: "片付ける",
    reading: "かたづける",
    meaning: "치우다; 정돈[정리]하다",
    tag: "日常",
    exJa: "机の上を片付ける",
    exKo: "책상 위를 정돈하다"
  },
  {
    id: 216,
    word: "ちょろい",
    reading: "ちょろい",
    meaning: "쉽다; 간단하다; 별것 아니다",
    tag: "日常",
    exJa: "こんな問題はちょろい",
    exKo: "이런 문제는 식은 죽 먹기다"
  },
  {
    id: 217,
    word: "ちやほや",
    reading: "ちやほや",
    meaning: "상대를 추어올리는 모양",
    tag: "日常",
    exJa: "周囲からちやほやされていい気になる",
    exKo: "주위에서 추어올리는 바람에 우쭐해지다"
  },
  {
    id: 218,
    word: "離す",
    reading: "はなす",
    meaning: "떼다; 풀다; 놓다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 219,
    word: "解禁",
    reading: "かいきん",
    meaning: "해금",
    tag: "社会",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 220,
    word: "持て囃す",
    reading: "もてはやす",
    meaning: "격찬하다; 몹시 칭찬하다",
    tag: "日常",
    exJa: "時の人として持て囃す",
    exKo: "당대의 인물이라고 칭찬이 자자하다"
  },
  {
    id: 221,
    word: "遣らせ",
    reading: "やらせ",
    meaning: "미리 짜고 하는 일",
    tag: "社会",
    exJa: "あの番組はやらせだ。",
    exKo: "저 프로그램은 미리 짜고 꾸민 것이다"
  },
  {
    id: 222,
    word: "滅多に",
    reading: "めったに",
    meaning: "좀처럼; 좀체",
    tag: "日常",
    exJa: "こんな機会はめったにないだろう",
    exKo: "이런 기회는 좀처럼 없을 게다"
  },
  {
    id: 223,
    word: "掛け持ち",
    reading: "かけもち",
    meaning: "겸임; 겸무",
    tag: "ビジネス",
    exJa: "2校の講師を掛け持ちする",
    exKo: "두 학교의 강사를 겸임하다"
  },
  {
    id: 224,
    word: "助っと",
    reading: "すけっと",
    meaning: "가세하여 돕는 사람; 조력하는 사람",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 225,
    word: "腰抜け",
    reading: "こしぬけ",
    meaning: "무기력하고 겁이 많음; 겁쟁이",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 226,
    word: "揺らぎ",
    reading: "ゆらぎ",
    meaning: "흔들림; 동요",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 227,
    word: "尖る",
    reading: "とがる",
    meaning: "뾰족해지다; 예민해지다; 화내다",
    tag: "日常",
    exJa: "神経が尖る",
    exKo: "신경이 곤두서다"
  },
  {
    id: 228,
    word: "樹霊",
    reading: "じゅれい",
    meaning: "늙은 나무에 깃든 정령",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 229,
    word: "テリトリー",
    reading: "てりとりー",
    meaning: "테리터리; 영토; 전문 분야",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 230,
    word: "細かい",
    reading: "こまかい",
    meaning: "잘다; 까다롭다",
    tag: "日常",
    exJa: "細かい話は抜きにしよう",
    exKo: "자세한 이야기는 생략하기로 하자"
  },
  {
    id: 231,
    word: "香ばしい",
    reading: "こうばしい",
    meaning: "향기롭다; 구수하다",
    tag: "日常",
    exJa: "香ばしい香りが漂う",
    exKo: "향기로운 냄새가 감돌다"
  },
  {
    id: 232,
    word: "鳴かず飛ばず",
    reading: "なかずとばず",
    meaning: "울지도 않고 날지도 않고",
    tag: "社会",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 233,
    word: "志す",
    reading: "こころざす",
    meaning: "뜻하다; 뜻을 두다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 234,
    word: "社割り",
    reading: "しゃわり",
    meaning: "가게에서 취급하는 상품을 할인가격으로 구입할 수 있는 제도",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 235,
    word: "いい加減",
    reading: "いいかげん",
    meaning: "적당함; 알맞음; 꽤",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 236,
    word: "傍線",
    reading: "ぼうせん",
    meaning: "방선; 밑줄",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 237,
    word: "余っ程",
    reading: "よっぽど",
    meaning: "꽤; 어지간히; 대단히",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 238,
    word: "歯車",
    reading: "はぐるま",
    meaning: "톱니바퀴; 전체를 구성하는 요소",
    tag: "社会",
    exJa: "組織の歯車に過ぎない",
    exKo: "조직의 일원에 불과하다"
  },
  {
    id: 239,
    word: "油",
    reading: "あぶら",
    meaning: "기름; 활력소; 원동력",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 240,
    word: "塗れ",
    reading: "まみれ",
    meaning: "...투성이",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 241,
    word: "中華街",
    reading: "ちゅうかがい",
    meaning: "차이나타운",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 242,
    word: "鉄板",
    reading: "てっぱん",
    meaning: "철판",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 243,
    word: "落ち葉",
    reading: "おちば",
    meaning: "낙엽",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 244,
    word: "甘ったるい",
    reading: "あまったるい",
    meaning: "달콤하다; 달디달다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 245,
    word: "寝起き",
    reading: "ねおき",
    meaning: "기상과 취침; 잠에서 깨어남",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 246,
    word: "つまみ出す",
    reading: "つまみだす",
    meaning: "집어내다; 끌어내다; 쫓아내다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 247,
    word: "モブキャラ",
    reading: "もぶきゃら",
    meaning: "이름이나 대사가 없는 단역 캐릭터",
    tag: "スラング",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 248,
    word: "雲泥の差",
    reading: "うんでいのさ",
    meaning: "운니지차; 천양지차",
    tag: "社会",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 249,
    word: "眠る",
    reading: "ねむる",
    meaning: "잠자다; 잠들다; 활용되지 않다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 250,
    word: "ふんぞり返る",
    reading: "ふんぞりかえる",
    meaning: "뽐내어 몸을 뒤로 젖히다; 뽐내다",
    tag: "日常",
    exJa: "椅子にふんぞり返る",
    exKo: "의자에 턱 버티고 앉다"
  },
  {
    id: 251,
    word: "媒体",
    reading: "ばいたい",
    meaning: "매체",
    tag: "社会",
    exJa: "コミュニケーションの媒体",
    exKo: "커뮤니케이션의 매체"
  },
  {
    id: 252,
    word: "火傷",
    reading: "やけど",
    meaning: "화상; 타격을 입음",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 253,
    word: "助兵衛",
    reading: "すけべえ",
    meaning: "호색(함); 호색가; 색골",
    tag: "スラング",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 254,
    word: "やむを得ない",
    reading: "やむをえない",
    meaning: "할 수 없다; 어쩔 수 없다; 부득이하다",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 255,
    word: "止む",
    reading: "やむ",
    meaning: "멈추다; 그치다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 256,
    word: "中古",
    reading: "ちゅうこ",
    meaning: "중고",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 257,
    word: "鼻詰まり",
    reading: "はなづまり",
    meaning: "코 막힘",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 258,
    word: "荒れる",
    reading: "あれる",
    meaning: "거칠어지다; 사나워지다",
    tag: "日常",
    exJa: "会議が荒れる",
    exKo: "회의가 험악해지다"
  },
  {
    id: 259,
    word: "日焼けサロン",
    reading: "ひやけさろん",
    meaning: "선탠 살롱",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 260,
    word: "日焼け",
    reading: "ひやけ",
    meaning: "피부가 햇볕에 타서 검게 되는 일",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 261,
    word: "売れ残り",
    reading: "うれのこり",
    meaning: "잔품; 팔다 남은 물건",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 262,
    word: "目を見張る",
    reading: "めをみはる",
    meaning: "놀라거나 하여 눈을 크게 뜨다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 263,
    word: "甲斐",
    reading: "がい",
    meaning: "...할 만한 값어치; 보람",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 264,
    word: "貝殻",
    reading: "かいがら",
    meaning: "조가비; 조개껍데기",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 265,
    word: "イケボ",
    reading: "いけぼ",
    meaning: "꽃미남 목소리",
    tag: "スラング",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 266,
    word: "ばんばん",
    reading: "ばんばん",
    meaning: "펑펑; 퍽퍽; 척척",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 267,
    word: "どうせなら",
    reading: "どうせなら",
    meaning: "이왕이면",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 268,
    word: "猶",
    reading: "なお",
    meaning: "역시; 여전히",
    tag: "日常",
    exJa: "期日はなお二週間ある",
    exKo: "기일은 아직 2주일이 (남아) 있다"
  },
  {
    id: 269,
    word: "なだらか",
    reading: "なだらか",
    meaning: "완만함; 순조로움",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 270,
    word: "ぺてん",
    reading: "ぺてん",
    meaning: "속임; 속임수; 사기",
    tag: "社会",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 271,
    word: "放し",
    reading: "ぱなし",
    meaning: "그대로 둔다는 뜻",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 272,
    word: "予防接種",
    reading: "よぼうせっしゅ",
    meaning: "예방 접종",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 273,
    word: "緩む",
    reading: "ゆるむ",
    meaning: "느슨해지다; 헐거워지다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 274,
    word: "がくがく",
    reading: "がくがく",
    meaning: "바들바들; 부들부들",
    tag: "日常",
    exJa: "足ががくがく震える",
    exKo: "다리가 바들바들 떨리다"
  },
  {
    id: 275,
    word: "震える",
    reading: "ふるえる",
    meaning: "흔들리다; 진동하다; 떨리다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 276,
    word: "掛かり付け",
    reading: "かかりつけ",
    meaning: "언제나 그 의사의 진찰·치료를 받는 일",
    tag: "日常",
    exJa: "掛かり付けの医者",
    exKo: "단골 의사"
  },
  {
    id: 277,
    word: "欠かせない",
    reading: "かかせない",
    meaning: "빠뜨릴 수 없다; 없어서는 안 된다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 278,
    word: "苦情",
    reading: "くじょう",
    meaning: "불평; 불만",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 279,
    word: "要領",
    reading: "ようりょう",
    meaning: "요령; 요점",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 280,
    word: "講じる",
    reading: "こうじる",
    meaning: "강의하다; 강구하다",
    tag: "ビジネス",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 281,
    word: "素晴らしい",
    reading: "すばらしい",
    meaning: "훌륭하다; 굉장하다; 멋지다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 282,
    word: "暑がる",
    reading: "あつがる",
    meaning: "더워하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  },
  {
    id: 283,
    word: "寒がる",
    reading: "さむがる",
    meaning: "추워하다",
    tag: "日常",
    exJa: "-",
    exKo: "-"
  }
];
