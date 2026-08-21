export type DonutThumbnail = {
  src: string
  alt: string
}

export type DonutSetItem = {
  label: string
  count: string
  colorClass: string
}

export type DonutProduct = {
  slug: string
  name: string
  breadcrumb: string
  image: string
  href: string
  price?: string
  shipping?: string
  shopUrl?: string
  weight?: string
  flavors?: string
  description?: string
  allergy?: string
  shelfLife?: string
  shippingInfo?: string
  setContents?: DonutSetItem[]
  thumbnails?: DonutThumbnail[]
}

export const donutFlavorProducts: DonutProduct[] = [
  {
    slug: "plain",
    name: "オートミール焼きドーナツ プレーン 6個入り",
    breadcrumb: "プレーン 6個入り",
    image: "/plain-oatmeal-donut.png",
    href: "/donuts/oatmeal-donuts/plain",
    price: "2,400円（税込）",
    description: "オートミールの香ばしさとやさしい甘みが楽しめる定番の味。",
  },
  {
    slug: "cocoa",
    name: "オートミール焼きドーナツ ココア 6個入り",
    breadcrumb: "ココア 6個入り",
    image: "/cocoa-oatmeal-donut.png",
    href: "/donuts/oatmeal-donuts/cocoa",
    price: "2,400円（税込）",
    description: "純ココアのほろ苦さを活かした、甘さ控えめの味わい。",
  },
  {
    slug: "matcha",
    name: "オートミール焼きドーナツ 西尾抹茶 6個入り",
    breadcrumb: "西尾抹茶 6個入り",
    image: "/matcha-oatmeal-donut.png",
    href: "/donuts/oatmeal-donuts/matcha",
    price: "2,400円（税込）",
    description: "抹茶のほろ苦さと香りが広がる、和テイストの味わい。",
  },
  {
    slug: "tea",
    name: "オートミール焼きドーナツ 紅茶 6個入り",
    breadcrumb: "紅茶 6個入り",
    image: "/tea-oatmeal-donut.png",
    href: "/donuts/oatmeal-donuts/tea",
    price: "2,400円（税込）",
    description: "紅茶の華やかな香りがふんわり広がる上品な味わい。",
  },
]

export const donutSetProduct: DonutProduct = {
  slug: "set",
  name: "オートミール焼きドーナツ 4種類セット 6個入り",
  breadcrumb: "オートミール焼きドーナツ６個入り",
  image: "/oatmeal-donuts-gift-box.png",
  href: "/donuts/oatmeal-donuts",
  price: "2,400円（税込）",
  shopUrl: "https://lanagranola.base.shop/items/101173991",
  weight: "65g×6個",
  shipping: "送料：クール便（冷凍便）でお届け。配送先の地域・サイズにより異なります（8,000円以上のご購入で国内送料無料）",
  flavors: "プレーン / ココア / 西尾抹茶 / 紅茶",
  description:
    "小麦粉・卵・乳製品不使用のオートミール焼きドーナツを詰め合わせたセットです。プレーン・ココア・抹茶・紅茶の4つの味を1箱でお楽しみいただけます。素朴な見た目ながら、しっとり・ふんわりとした口当たり。解凍するだけで手軽に召し上がれます。",
  allergy:
    "アレルギー物質を含む原材料：該当なし（小麦粉・卵・乳製品不使用）。※同じ製造室で乳製品・落花生・ナッツ類を使用した製品を製造しています。",
  shelfLife:
    "消費期限：冷凍状態で製造日より2ヶ月（解凍後はその日中にお召し上がりください） / 保存方法：−20℃以下の冷凍庫で保存してください。",
  shippingInfo:
    "ご注文（お支払い確定）後、順次発送いたします。毎週月曜日までのご注文で最短翌日発送となる場合がございます。クール宅急便（冷凍便）でお届けし、ドーナツは冷凍状態で届きます。送料は配送先の地域・サイズにより異なります（8,000円以上のご購入で国内送料無料）。",
  setContents: [
    { label: "プレーン", count: "2個", colorClass: "bg-yellow-200" },
    { label: "ココア", count: "2個", colorClass: "bg-amber-600" },
    { label: "西尾抹茶", count: "1個", colorClass: "bg-green-400" },
    { label: "紅茶", count: "1個", colorClass: "bg-orange-300" },
  ],
  thumbnails: [
    { src: "/images/products/donut-all.jpg", alt: "4種類盛り合わせ" },
    { src: "/images/products/donut-set-plain-info.png", alt: "プレーン説明" },
    { src: "/images/products/donut-cocoa-info.png", alt: "ココア説明" },
    { src: "/images/products/donut-set-matcha-info.png", alt: "抹茶説明" },
    { src: "/images/products/donut-tea-info.png", alt: "紅茶説明" },
    { src: "/plain-oatmeal-donut.png", alt: "プレーン単体" },
  ],
}

export const donutListingProducts: DonutProduct[] = [...donutFlavorProducts, donutSetProduct]

export const donutFlavorIds = donutFlavorProducts.map((product) => product.slug)

export function getDonutFlavor(slug: string): DonutProduct | undefined {
  return donutFlavorProducts.find((product) => product.slug === slug)
}
