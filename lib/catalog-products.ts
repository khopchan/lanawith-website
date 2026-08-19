export type CatalogCategory = "granola" | "mini-granola" | "cookies" | "donuts"

export type CatalogProduct = {
  slug: string
  category: CatalogCategory
  categoryLabel: string
  name: string
  breadcrumb: string
  image: string
  images?: string[]
  href: string
  shopUrl: string
  price: string
  shipping: string
  weight: string
  features: string
  taste: string
  ingredients: string
  howToEat: string
  allergy: string
  shelfLife: string
  shippingInfo: string
}

function baseImages(prefix: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `/images/products/base/${prefix}-${i + 1}.jpg`)
}

const shippingSummary = "送料：配送方法・地域により異なります（8,000円以上のご購入で国内送料無料）"

const granolaCookieShippingInfo = `ご注文から通常1週間以内に発送いたします。毎週月曜日までのご注文で、最短翌日発送となる場合がございます。

グラノーラ・クッキーは基本的に常温便でお届けします。5月〜11月は気温の上昇のためクール便での発送となります。状況により期間外もクール便となる場合があります。

送料は配送方法・お届け先により異なります。日本国内は8,000円以上のご購入で送料無料です。詳しくはオンラインショップの購入画面でご確認ください。

食品のため、お客様都合による返品・交換は承っておりません。不良品や誤配送の場合は、到着後3日以内にご連絡ください。`

const granolaShelfLife =
  "消費期限：製造日より45日間 / 保存方法：開封後は冷凍庫にて保存してください。開封後は早めにお召し上がりください。"

function granolaFlavorCopy(flavor: "lana" | "tea" | "chocolate" | "matcha") {
  switch (flavor) {
    case "lana":
      return {
        features:
          "やさしい甘さと香ばしさが広がる、LANA WITH.の定番人気です。小麦粉・卵不使用で、毎日続けられる軽さを大切に焼き上げています。",
        taste:
          "ピーナッツバターの深いコクとメープルシロップの穏やかな甘み。朝でも食べやすく、満足感がありながらも重たくならない味わいです。",
        ingredients:
          "オーツ麦、ひまわりの種、かぼちゃの種、胡桃、アーモンド、バター、メープルシロップ、ピーナッツバター、甜菜糖",
        howToEat:
          "ヨーグルトやミルクと合わせるのはもちろん、スムージーにひとさじ混ぜると香ばしさが加わります。サラダのトッピング、朝食、子どものおやつにもおすすめです。",
        allergy: "落花生・乳・アーモンド・胡桃",
      }
    case "tea":
      return {
        features:
          "香りを楽しむグラノーラとして生まれた、アールグレイと果実の組み合わせです。食べた瞬間に広がる紅茶の香りが特徴です。",
        taste:
          "アールグレイの香りとベリーの酸味が重なる、爽やかな大人の味わい。ヨーグルトでは香りが優しく立ち、ミルクに合わせるとミルクティーのように楽しめます。",
        ingredients:
          "アールグレイを生地に混ぜ込み焼き上げ、いちごジャム・デーツシロップ・りんごシロップを絡めて香りと甘さを整えています。砕いたフランボワーズも加えています。",
        howToEat:
          "朝の紅茶タイムや気分転換に。スムージーに混ぜるとベリーの酸味がアクセントになり、香りのいいフルーツスムージーとしても楽しめます。",
        allergy: "乳・アーモンド・りんご",
      }
    case "chocolate":
      return {
        features:
          "甘すぎず、でもしっかり満足できる、大人のためのチョコグラノーラです。香りと食感を楽しめる軽やかなチョコを目指して作りました。",
        taste:
          "チョコの深みを活かしつつ、軽さを残した味わい。ほろ苦さと優しい甘みが共存し、市販のチョコ味では甘すぎる方でも食べやすい人気フレーバーです。",
        ingredients: "オーツ麦、バター、甜菜糖、アーモンド、純ココア、ハイポリフェノールチョコ",
        howToEat:
          "ミルクと合わせるとチョコレートの風味が広がります。アイスやバナナに添えると簡単デザートに。スムージーに加えるとチョコスムージーとしても楽しめます。",
        allergy: "乳・アーモンド",
      }
    case "matcha":
      return {
        features:
          "ふわりと広がる抹茶の香り。和の深みとやさしさが合わさる一袋です。抹茶の香りを損なわないよう、低温でじっくりと焼き上げています。",
        taste:
          "西尾抹茶のほろ苦さとほどよい甘さが調和し、和スイーツのような味わいです。ミルクでふんわり、甘酒やお汁粉とも相性抜群です。",
        ingredients: "オーツ麦、バター、甜菜糖、アーモンド、西尾抹茶、ホワイトチョコ",
        howToEat:
          "バニラアイスに添えて和パフェ風に。温かい飲み物と合わせてお夜食にも。スムージーに加えると、抹茶ラテスムージーのような上品な味わいになります。",
        allergy: "乳・アーモンド",
      }
  }
}

export const granolaProducts: CatalogProduct[] = [
  {
    slug: "lana",
    category: "granola",
    categoryLabel: "グラノーラ",
    name: "LANAグラノーラ",
    breadcrumb: "LANAグラノーラ",
    image: "/images/products/base/granola-lana-1.jpg",
    images: baseImages("granola-lana", 4),
    href: "/granola/lana",
    shopUrl: "https://lanagranola.base.shop/items/138276406",
    price: "1,944円（税込）",
    shipping: shippingSummary,
    weight: "250g",
    ...granolaFlavorCopy("lana"),
    shelfLife: granolaShelfLife,
    shippingInfo: granolaCookieShippingInfo,
  },
  {
    slug: "tea",
    category: "granola",
    categoryLabel: "グラノーラ",
    name: "紅茶グラノーラ",
    breadcrumb: "紅茶グラノーラ",
    image: "/images/products/base/granola-tea-1.jpg",
    images: baseImages("granola-tea", 4),
    href: "/granola/tea",
    shopUrl: "https://lanagranola.base.shop/items/138276617",
    price: "1,944円（税込）",
    shipping: shippingSummary,
    weight: "250g",
    ...granolaFlavorCopy("tea"),
    shelfLife: granolaShelfLife,
    shippingInfo: granolaCookieShippingInfo,
  },
  {
    slug: "chocolate",
    category: "granola",
    categoryLabel: "グラノーラ",
    name: "チョコグラノーラ",
    breadcrumb: "チョコグラノーラ",
    image: "/images/products/base/granola-chocolate-1.jpg",
    images: baseImages("granola-chocolate", 4),
    href: "/granola/chocolate",
    shopUrl: "https://lanagranola.base.shop/items/138276581",
    price: "1,944円（税込）",
    shipping: shippingSummary,
    weight: "250g",
    ...granolaFlavorCopy("chocolate"),
    shelfLife: granolaShelfLife,
    shippingInfo: granolaCookieShippingInfo,
  },
  {
    slug: "matcha",
    category: "granola",
    categoryLabel: "グラノーラ",
    name: "抹茶グラノーラ",
    breadcrumb: "抹茶グラノーラ",
    image: "/images/products/base/granola-matcha-1.jpg",
    images: baseImages("granola-matcha", 4),
    href: "/granola/matcha",
    shopUrl: "https://lanagranola.base.shop/items/138276647",
    price: "1,944円（税込）",
    shipping: shippingSummary,
    weight: "250g",
    ...granolaFlavorCopy("matcha"),
    shelfLife: granolaShelfLife,
    shippingInfo: granolaCookieShippingInfo,
  },
]

export const miniGranolaProducts: CatalogProduct[] = [
  {
    slug: "lana",
    category: "mini-granola",
    categoryLabel: "ミニグラノーラ",
    name: "LANAグラノーラ",
    breadcrumb: "LANAグラノーラ（ミニ）",
    image: "/images/products/base/mini-lana-1.jpg",
    images: baseImages("mini-lana", 4),
    href: "/mini-granola/lana",
    shopUrl: "https://lanagranola.base.shop/items/138276560",
    price: "777円（税込）",
    shipping: shippingSummary,
    weight: "100g",
    ...granolaFlavorCopy("lana"),
    features: `${granolaFlavorCopy("lana").features} お試しや手土産にも使いやすいミニサイズです。`,
    shelfLife: granolaShelfLife,
    shippingInfo: granolaCookieShippingInfo,
  },
  {
    slug: "tea",
    category: "mini-granola",
    categoryLabel: "ミニグラノーラ",
    name: "紅茶グラノーラ",
    breadcrumb: "紅茶グラノーラ（ミニ）",
    image: "/images/products/base/mini-tea-1.jpg",
    images: baseImages("mini-tea", 4),
    href: "/mini-granola/tea",
    shopUrl: "https://lanagranola.base.shop/items/138276634",
    price: "777円（税込）",
    shipping: shippingSummary,
    weight: "100g",
    ...granolaFlavorCopy("tea"),
    features: `${granolaFlavorCopy("tea").features} お試しや手土産にも使いやすいミニサイズです。`,
    shelfLife: granolaShelfLife,
    shippingInfo: granolaCookieShippingInfo,
  },
  {
    slug: "chocolate",
    category: "mini-granola",
    categoryLabel: "ミニグラノーラ",
    name: "チョコグラノーラ",
    breadcrumb: "チョコグラノーラ（ミニ）",
    image: "/images/products/base/mini-chocolate-1.jpg",
    images: baseImages("mini-chocolate", 4),
    href: "/mini-granola/chocolate",
    shopUrl: "https://lanagranola.base.shop/items/138276597",
    price: "777円（税込）",
    shipping: shippingSummary,
    weight: "100g",
    ...granolaFlavorCopy("chocolate"),
    features: `${granolaFlavorCopy("chocolate").features} お試しや手土産にも使いやすいミニサイズです。`,
    shelfLife: granolaShelfLife,
    shippingInfo: granolaCookieShippingInfo,
  },
  {
    slug: "matcha",
    category: "mini-granola",
    categoryLabel: "ミニグラノーラ",
    name: "抹茶グラノーラ",
    breadcrumb: "抹茶グラノーラ（ミニ）",
    image: "/images/products/base/mini-matcha-1.jpg",
    images: baseImages("mini-matcha", 4),
    href: "/mini-granola/matcha",
    shopUrl: "https://lanagranola.base.shop/items/138276715",
    price: "777円（税込）",
    shipping: shippingSummary,
    weight: "100g",
    ...granolaFlavorCopy("matcha"),
    features: `${granolaFlavorCopy("matcha").features} お試しや手土産にも使いやすいミニサイズです。`,
    shelfLife: granolaShelfLife,
    shippingInfo: granolaCookieShippingInfo,
  },
]

export const cookieProducts: CatalogProduct[] = [
  {
    slug: "granola",
    category: "cookies",
    categoryLabel: "クッキー",
    name: "グラノーラクッキー（10枚）",
    breadcrumb: "グラノーラクッキー（10枚）",
    image: "/images/products/base/cookie-granola-1.jpg",
    images: baseImages("cookie-granola", 2),
    href: "/cookies/granola",
    shopUrl: "https://lanagranola.base.shop/items/138276902",
    price: "2,160円（税込）",
    shipping: shippingSummary,
    weight: "250g（25g×10枚）",
    features:
      "ピーナッツとメープルのやさしい甘さに、胡桃・アーモンド・ひまわりの種・かぼちゃの種をすべて手刻みで混ぜ込みました。ふくらし粉・卵不使用です。",
    taste: "噛むほどに素材の香ばしさが広がり、オートミールの素朴な味わいをしっかり感じられる一枚です。",
    ingredients:
      "オーツ麦、ひまわりの種、かぼちゃの種、胡桃、アーモンド、バター、メープルシロップ、ピーナッツバター、甜菜糖",
    howToEat: "毎日のおやつにも、贈りものにもおすすめです。",
    allergy: "乳・落花生・胡桃・アーモンド",
    shelfLife:
      "消費期限：製造日より14日間 / 保存方法：直射日光、高温多湿を避けて保存してください。開封後は早めにお召し上がりください。",
    shippingInfo: granolaCookieShippingInfo,
  },
  {
    slug: "tea",
    category: "cookies",
    categoryLabel: "クッキー",
    name: "紅茶クッキー（10枚）",
    breadcrumb: "紅茶クッキー（10枚）",
    image: "/images/products/base/cookie-tea-1.jpg",
    images: baseImages("cookie-tea", 2),
    href: "/cookies/tea",
    shopUrl: "https://lanagranola.base.shop/items/138276967",
    price: "2,160円（税込）",
    shipping: shippingSummary,
    weight: "250g（25g×10枚）",
    features: "ふわっと広がる紅茶の香りが心地よい、オートミールクッキーです。お茶の時間にそっと寄り添います。",
    taste: "甘さは控えめで、アールグレイの風味をやさしく楽しめる落ち着いた味わいです。",
    ingredients: "オーツ麦、アーモンド、バター、甜菜糖、紅茶",
    howToEat: "紅茶やコーヒーと一緒に、ほっとひと息つきたい時間におすすめです。",
    allergy: "乳・アーモンド",
    shelfLife:
      "消費期限：製造日より14日間 / 保存方法：直射日光、高温多湿を避けて保存してください。開封後は早めにお召し上がりください。",
    shippingInfo: granolaCookieShippingInfo,
  },
  {
    slug: "chocolate",
    category: "cookies",
    categoryLabel: "クッキー",
    name: "チョコクッキー（10枚）",
    breadcrumb: "チョコクッキー（10枚）",
    image: "/images/products/base/cookie-chocolate-1.jpg",
    images: baseImages("cookie-chocolate", 2),
    href: "/cookies/chocolate",
    shopUrl: "https://lanagranola.base.shop/items/138276941",
    price: "2,160円（税込）",
    shipping: shippingSummary,
    weight: "250g（25g×10枚）",
    features:
      "オートミールを作るたびに製粉し、小麦粉・卵不使用で焼き上げたチョコクッキーです。トッピングには、カカオの風味がしっかりと感じられるハイポリフェノールチョコを使用しています。",
    taste: "甘さは控えめに、オートミールの香ばしさとチョコのコクを楽しめる一枚です。",
    ingredients: "オーツ麦、アーモンド、バター、甜菜糖、純ココア、ハイポリフェノールチョコレート",
    howToEat: "ほっとひと息つきたい時間に。コーヒーやミルクとも相性がよい一枚です。",
    allergy: "乳・アーモンド",
    shelfLife:
      "消費期限：製造日より21日間 / 保存方法：直射日光、高温多湿を避けて保存してください。開封後は早めにお召し上がりください。",
    shippingInfo: granolaCookieShippingInfo,
  },
  {
    slug: "matcha",
    category: "cookies",
    categoryLabel: "クッキー",
    name: "抹茶クッキー（10枚）",
    breadcrumb: "抹茶クッキー（10枚）",
    image: "/images/products/base/cookie-matcha-1.jpg",
    images: baseImages("cookie-matcha", 2),
    href: "/cookies/matcha",
    shopUrl: "https://lanagranola.base.shop/items/138276994",
    price: "2,160円（税込）",
    shipping: shippingSummary,
    weight: "250g（25g×10枚）",
    features: "抹茶のほろ苦さを活かしたオートミールクッキーです。トッピングにはホワイトチョコを使用しています。",
    taste: "抹茶の風味とやさしい甘さのバランスを楽しめます。甘すぎず、落ち着いた味わいです。",
    ingredients: "オーツ麦、アーモンド、バター、甜菜糖、抹茶",
    howToEat: "ゆっくり味わいたい午後のおやつに。お茶やコーヒーと一緒にお楽しみください。",
    allergy: "乳・アーモンド",
    shelfLife:
      "消費期限：製造日より21日間 / 保存方法：直射日光、高温多湿を避けて保存してください。開封後は早めにお召し上がりください。",
    shippingInfo: granolaCookieShippingInfo,
  },
]

const donutShippingSummary =
  "送料：クール便（冷凍便）でお届け。配送先の地域・サイズにより異なります（8,000円以上のご購入で国内送料無料）"

const donutShippingInfo = `ご注文（お支払い確定）後、順次発送いたします。毎週月曜日までのご注文で、最短翌日発送となる場合がございます。

クール宅急便（冷凍便）でお届けします。ドーナツは冷凍状態で届きます。

送料は配送先の地域・サイズにより異なります（クール宅急便）。日本国内は8,000円以上のご購入で送料無料です。詳しくはオンラインショップの購入画面でご確認ください。

食品のため、お客様都合による返品・交換は承っておりません。不良品や誤配送の場合はご連絡ください。`

const donutShelfLife =
  "消費期限：冷凍状態で製造日より2ヶ月（解凍後はその日中にお召し上がりください） / 保存方法：−20℃以下の冷凍庫で保存してください。個包装なので、食べたい分だけ解凍できます。"

const donutAllergy =
  "アレルギー物質を含む原材料：該当なし（小麦粉・卵・乳製品不使用）。※同じ製造室で乳製品・落花生・ナッツ類を使用した製品を製造しています。"

const donutHowToEat =
  "個包装のまま、室温で1時間ほど解凍すると、しっとり・ふんわりとした食感に戻ります。コーヒーや紅茶、ミルクと相性がよく、朝食や午後のおやつ、来客時のお茶菓子にもおすすめです。あんこやホイップを添えたり、レタスやハムチーズを挟んでサンド風にも楽しめます。"

const donutBaseFeatures =
  "油で揚げずに焼き上げたオートミールの焼きドーナツです。小麦粉・卵・乳製品不使用で、口当たりは軽く、甘さは控えめ。小さなお子様から大人の方まで一緒に楽しめます。"

export const donutFlavorCatalogProducts: CatalogProduct[] = [
  {
    slug: "plain",
    category: "donuts",
    categoryLabel: "ドーナツ",
    name: "オートミール焼きドーナツ プレーン 6個入り",
    breadcrumb: "プレーン 6個入り",
    image: "/images/products/base/donut-plain-1.jpg",
    images: baseImages("donut-plain", 3),
    href: "/donuts/oatmeal-donuts/plain",
    shopUrl: "https://lanagranola.base.shop/items/133964018",
    price: "2,400円（税込）",
    shipping: donutShippingSummary,
    weight: "65g×6個",
    features: donutBaseFeatures,
    taste:
      "オートミールの香ばしさとやさしい甘みをそのまま楽しめる定番の味です。シンプルで、スイーツとしてもお惣菜と一緒にも食べられます。",
    ingredients: "オーツミルク、オートミール、米粉、メープルシロップ、甜菜糖、米油、ベーキングパウダー、食塩",
    howToEat: donutHowToEat,
    allergy: donutAllergy,
    shelfLife: donutShelfLife,
    shippingInfo: donutShippingInfo,
  },
  {
    slug: "cocoa",
    category: "donuts",
    categoryLabel: "ドーナツ",
    name: "オートミール焼きドーナツ ココア 6個入り",
    breadcrumb: "ココア 6個入り",
    image: "/images/products/base/donut-cocoa-1.jpg",
    images: baseImages("donut-cocoa", 3),
    href: "/donuts/oatmeal-donuts/cocoa",
    shopUrl: "https://lanagranola.base.shop/items/133545169",
    price: "2,400円（税込）",
    shipping: donutShippingSummary,
    weight: "65g×6個",
    features: donutBaseFeatures,
    taste:
      "純ココアのほろ苦さを活かし、甘さ控えめに仕上げた大人にも人気のフレーバーです。チョコが苦手な方でも食べやすい、軽やかな味わいです。",
    ingredients: "オーツミルク、オートミール、米粉、メープルシロップ、甜菜糖、米油、ベーキングパウダー、純ココア、食塩",
    howToEat: donutHowToEat,
    allergy: donutAllergy,
    shelfLife: donutShelfLife,
    shippingInfo: donutShippingInfo,
  },
  {
    slug: "matcha",
    category: "donuts",
    categoryLabel: "ドーナツ",
    name: "オートミール焼きドーナツ 西尾抹茶 6個入り",
    breadcrumb: "西尾抹茶 6個入り",
    image: "/images/products/base/donut-matcha-1.jpg",
    images: baseImages("donut-matcha", 3),
    href: "/donuts/oatmeal-donuts/matcha",
    shopUrl: "https://lanagranola.base.shop/items/133964069",
    price: "2,400円（税込）",
    shipping: donutShippingSummary,
    weight: "65g×6個",
    features: donutBaseFeatures,
    taste:
      "抹茶の穏やかな苦味と香りが広がる、後味すっきりの和テイストです。和菓子のような、洋菓子のような味わいです。",
    ingredients: "オーツミルク、オートミール、米粉、メープルシロップ、甜菜糖、米油、ベーキングパウダー、抹茶パウダー、食塩",
    howToEat: donutHowToEat,
    allergy: donutAllergy,
    shelfLife: donutShelfLife,
    shippingInfo: donutShippingInfo,
  },
  {
    slug: "tea",
    category: "donuts",
    categoryLabel: "ドーナツ",
    name: "オートミール焼きドーナツ 紅茶 6個入り",
    breadcrumb: "紅茶 6個入り",
    image: "/images/products/base/donut-tea-1.jpg",
    images: baseImages("donut-tea", 3),
    href: "/donuts/oatmeal-donuts/tea",
    shopUrl: "https://lanagranola.base.shop/items/133711930",
    price: "2,400円（税込）",
    shipping: donutShippingSummary,
    weight: "65g×6個",
    features: donutBaseFeatures,
    taste:
      "紅茶の華やかな香りがふんわりと立つ、上品な味わいです。ミルクと合わせると、ミルクティーのような香りが広がります。",
    ingredients: "オーツミルク、オートミール、米粉、メープルシロップ、甜菜糖、米油、ベーキングパウダー、紅茶、食塩",
    howToEat: donutHowToEat,
    allergy: donutAllergy,
    shelfLife: donutShelfLife,
    shippingInfo: donutShippingInfo,
  },
]

export const granolaSlugs = granolaProducts.map((product) => product.slug)
export const miniGranolaSlugs = miniGranolaProducts.map((product) => product.slug)
export const cookieSlugs = cookieProducts.map((product) => product.slug)
export const donutFlavorSlugs = donutFlavorCatalogProducts.map((product) => product.slug)

export function getGranolaProduct(slug: string): CatalogProduct | undefined {
  return granolaProducts.find((product) => product.slug === slug)
}

export function getMiniGranolaProduct(slug: string): CatalogProduct | undefined {
  return miniGranolaProducts.find((product) => product.slug === slug)
}

export function getCookieProduct(slug: string): CatalogProduct | undefined {
  return cookieProducts.find((product) => product.slug === slug)
}

export function getDonutFlavorCatalogProduct(slug: string): CatalogProduct | undefined {
  return donutFlavorCatalogProducts.find((product) => product.slug === slug)
}
