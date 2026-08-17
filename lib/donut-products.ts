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
  },
  {
    slug: "cocoa",
    name: "オートミール焼きドーナツ ココア 6個入り",
    breadcrumb: "ココア 6個入り",
    image: "/cocoa-oatmeal-donut.png",
    href: "/donuts/oatmeal-donuts/cocoa",
  },
  {
    slug: "matcha",
    name: "オートミール焼きドーナツ 西尾抹茶 6個入り",
    breadcrumb: "西尾抹茶 6個入り",
    image: "/matcha-oatmeal-donut.png",
    href: "/donuts/oatmeal-donuts/matcha",
  },
  {
    slug: "tea",
    name: "オートミール焼きドーナツ 紅茶 6個入り",
    breadcrumb: "紅茶 6個入り",
    image: "/tea-oatmeal-donut.png",
    href: "/donuts/oatmeal-donuts/tea",
  },
]

export const donutSetProduct: DonutProduct = {
  slug: "set",
  name: "オートミール焼きドーナツ 4種類セット 6個入り",
  breadcrumb: "オートミール焼きドーナツ６個入り",
  image: "/oatmeal-donuts-gift-box.png",
  href: "/donuts/oatmeal-donuts",
  price: "2,400円（税込）",
  shipping: "送料：全国一律 520円",
  flavors: "プレーン / ココア / 西尾抹茶 / 紅茶",
  description:
    "小さなお子様から大人の方まで一緒に楽しめる、新しいオートミールスイーツです。栄養豊富なオートミールを使用し、4つの異なる味わいをお楽しみいただけます。",
  allergy: "小麦・卵・乳・大豆",
  shelfLife: "製造日より2週間 / 冷暗所保存",
  shippingInfo: "ご注文から3-5営業日以内に発送いたします。冷蔵便でお届けします。",
  setContents: [
    { label: "プレーン", count: "2個", colorClass: "bg-yellow-200" },
    { label: "ココア", count: "2個", colorClass: "bg-amber-600" },
    { label: "西尾抹茶", count: "1個", colorClass: "bg-green-400" },
    { label: "紅茶", count: "1個", colorClass: "bg-orange-300" },
  ],
  thumbnails: [
    { src: "/plain-oatmeal-donut.png", alt: "プレーン" },
    { src: "/cocoa-oatmeal-donut.png", alt: "ココア" },
    { src: "/matcha-oatmeal-donut.png", alt: "西尾抹茶" },
    { src: "/tea-oatmeal-donut.png", alt: "紅茶" },
  ],
}

export const donutListingProducts: DonutProduct[] = [...donutFlavorProducts, donutSetProduct]

export const donutFlavorIds = donutFlavorProducts.map((product) => product.slug)

export function getDonutFlavor(slug: string): DonutProduct | undefined {
  return donutFlavorProducts.find((product) => product.slug === slug)
}
