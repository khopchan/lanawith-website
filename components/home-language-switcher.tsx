"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

type Language = "ja" | "en"

const ENGLISH_TEXT = new Map<string, string>([
  ["商品", "Products"],
  ["こだわり", "Craft"],
  ["アクセス", "Access"],
  ["オーナー", "Owners"],
  ["私たちについて", "About Us"],
  ["お問い合わせ", "Contact"],
  ["メニュー", "Menu"],
  ["オンラインショップ", "Online Shop"],
  ["オンラインショップを見る", "Visit Online Shop"],
  ["幼馴染みのわたしたちが", "We have been friends since childhood,"],
  ["型にはまらない美味しいものを", "and LANA WITH. began with a wish to create"],
  ["届けたい想いから作り始めました。", "delicious food beyond the usual conventions."],
  ["お気に入りの器とスプーンと一緒に", "With your favorite bowl and spoon,"],
  ["ゆったりとした時間を、", "take a slow moment for yourself"],
  ["そしておいしさと栄養が詰まった", "and enjoy granola filled with"],
  ["グラノーラをお楽しみください。", "both flavor and nourishment."],
  ["幼馴染みのわたしたちが型にはまらない美味しいものを", "We have been friends since childhood, and LANA WITH. began with a wish to create delicious food beyond the usual conventions."],
  ["届けたい想いから作り始めました。", "That wish is where everything started."],
  ["お気に入りの器とスプーンと一緒にゆったりとした時間を、", "Take a slow moment with your favorite bowl and spoon,"],
  ["そしておいしさと栄養が詰まったグラノーラをお楽しみください。", "and enjoy granola filled with both flavor and nourishment."],
  ["LANA WITH. 商品一覧", "LANA WITH. Products"],
  ["カテゴリをタブで切り替えできます", "Choose a category to browse our products."],
  ["グラノーラ", "Granola"],
  ["ミニグラノーラ", "Mini Granola"],
  ["クッキー", "Cookies"],
  ["ドーナツ", "Donuts"],
  ["LANAグラノーラ", "LANA Granola"],
  ["紅茶グラノーラ", "Earl Grey Granola"],
  ["チョコグラノーラ", "Chocolate Granola"],
  ["抹茶グラノーラ", "Matcha Granola"],
  ["香ばしいピーナッツバターベースに、ナッツをたっぷり使用した定番人気。朝食にもおやつにもおすすめ。", "Our signature granola with a roasted peanut-butter base and plenty of nuts. Perfect for breakfast or a snack."],
  ["アールグレイ茶葉×りんご・デーツ・いちごシロップ。封を開けると紅茶とフルーツの香りが広がる。", "Earl Grey tea with apple, dates, and strawberry syrup. Open the bag and enjoy the aroma of tea and fruit."],
  ["チョコ×ココアの甘さとほろ苦さ。アーモンドの香ばしさ。甘さ控えめで大人向け。", "Chocolate and cocoa with a balanced bittersweet finish and roasted almond notes."],
  ["上質な抹茶の香りとほろ苦さ。温かいミルクやおしること好相性。", "Fragrant matcha with a refined bitterness. Especially good with warm milk or Japanese sweets."],
  ["定番の味をお試しサイズで。", "Our signature flavor in a smaller size."],
  ["アールグレイ×フルーツの香り。携帯にも◎", "Earl Grey and fruit aromas in an easy-to-carry size."],
  ["甘さ控えめのチョコとココア。", "Gently sweet chocolate and cocoa."],
  ["抹茶の和風テイストを手軽に。", "An easy way to enjoy the taste of matcha."],
  ["グラノーラクッキー（10枚）", "Granola Cookies (10)"],
  ["紅茶クッキー（10枚）", "Earl Grey Cookies (10)"],
  ["チョコクッキー（10枚）", "Chocolate Cookies (10)"],
  ["抹茶クッキー（10枚）", "Matcha Cookies (10)"],
  ["グラノーラ素材の香ばしさ。ふくらし粉・卵不使用。", "Roasted granola flavors, made without baking powder or eggs."],
  ["アールグレイが香る上品な味。紅茶やコーヒーに。", "Elegant Earl Grey aroma, ideal with tea or coffee."],
  ["チョコチャンクたっぷりの濃厚タイプ。", "Rich cookies generously filled with chocolate chunks."],
  ["上質な抹茶が香る、ほろ苦く上品な味わい。", "A refined cookie with fragrant matcha and a gentle bitterness."],
  ["オートミール焼きドーナツ プレーン 6個入り", "Baked Oatmeal Donuts — Plain (6)"],
  ["オートミール焼きドーナツ ココア 6個入り", "Baked Oatmeal Donuts — Cocoa (6)"],
  ["オートミール焼きドーナツ 西尾抹茶 6個入り", "Baked Oatmeal Donuts — Nishio Matcha (6)"],
  ["オートミール焼きドーナツ 紅茶 6個入り", "Baked Oatmeal Donuts — Earl Grey (6)"],
  ["オートミール焼きドーナツ 4種類セット 6個入り", "Baked Oatmeal Donuts — Assorted 4 Flavors (6)"],
  ["オートミールの香ばしさとやさしい甘みが楽しめる定番の味。", "A classic flavor with the roasted aroma of oatmeal and gentle sweetness."],
  ["純ココアのほろ苦さを活かした、甘さ控えめの味わい。", "A lightly sweet donut that highlights the pleasant bitterness of pure cocoa."],
  ["抹茶のほろ苦さと香りが広がる、和テイストの味わい。", "A Japanese-inspired flavor with aromatic matcha and a refined bitterness."],
  ["紅茶の華やかな香りがふんわり広がる上品な味わい。", "An elegant donut with the soft, floral aroma of tea."],
  ["小麦粉・卵・乳製品不使用のオートミール焼きドーナツ4種の詰め合わせ。プレーン・ココア・抹茶・紅茶を1箱で楽しめます。", "An assortment of four baked oatmeal donut flavors made without wheat flour, eggs, or dairy: plain, cocoa, matcha, and Earl Grey."],
  ["1,944円", "¥1,944"],
  ["777円", "¥777"],
  ["2,160円", "¥2,160"],
  ["2,400円（税込）", "¥2,400 (tax included)"],
  ["のこだわり", " — What Makes Us Special"],
  ["選びやすさへの工夫", "Made Easy to Choose"],
  ["細部までの手仕事", "Crafted by Hand"],
  ["特別で日常に寄り添う", "Special, Yet Made for Everyday Life"],
  [`見ただけで、おいしさが伝わるように。

LANA WITH.の商品名は、素材や味わいがひと目で伝わるシンプルな名前を大切にしています。

選ぶ時間も楽しんでいただけるように。

商品を手に取る前から、おいしさを想像できるネーミングを心がけています。`, `We want deliciousness to come through at a glance.

At LANA WITH., we value simple product names that clearly express the ingredients and flavors.

Choosing should be part of the enjoyment, too.

Before you even pick up a product, we want its name to help you imagine how it will taste.`],
  ["自家製粉オートミールやナッツを手作業で刻み", "We mill our own oatmeal and chop nuts by hand,"],
  ["香りや焼き加減にこだわり抜いて仕上げています。", "paying close attention to aroma and the perfect bake."],
  ["だからこそ生まれる、唯一無二の味わい。", "That care creates a flavor that is distinctly ours."],
  ["大量生産では再現できない深い味わいを追求。", "We pursue depth of flavor that mass production cannot reproduce."],
  ["「特別だけど、日常にそっと寄り添う」", "Special, yet quietly at home in everyday life."],
  ["そんな存在でありたいと願っています。", "That is the kind of presence we hope LANA WITH. can be."],
  ["からだにやさしい食と暮らしを研究", "Exploring food and daily living that are kind to the body"],
  ["朝ヨガが日課です。", "Morning yoga is part of her daily routine."],
  ["素材の持ち味を生かした", "Bringing out the natural character of ingredients"],
  ["焼き菓子とグラノーラの専門家", "Specialist in baked goods and granola"],
  ["Lanaについて", "About LANA"],
  ["幼馴染のふたりで運営する LANA WITH.", "LANA WITH. is run by two childhood friends."],
  ["\"日常のごほうび\" を届けています。", "We create little rewards for everyday life."],
  ["おいしいを、もっと自由に。", "Enjoy Deliciousness, More Freely."],
  ["LANA WITH.のはじまり", "How LANA WITH. Began"],
  [`2021年7月19日。

ふたりで開催したコラボイベントをきっかけに、LANA WITH.は生まれました。

はじまりは、ひとつのオートミールクッキー。

私たちが届けたいのは、ただの商品ではありません。

食べた瞬間の香りや味わい、誰かと過ごした時間。

その時の気持ちまで、記憶として残るものをつくりたい。

LANA WITH.は、日々の暮らしにそっと寄り添い、記憶に残るおいしさをお届けします。`, `July 19, 2021.

LANA WITH. began with a collaborative event created by the two of us.

It started with a single oatmeal cookie.

What we want to deliver is more than a product.

The aroma and flavor of the first bite, and the time spent with someone you care about.

We want to create something that leaves even the feeling of that moment in your memory.

LANA WITH. brings memorable deliciousness that stays close to everyday life.`],
  ["LANAが生まれた理由", "Why LANA Was Created"],
  [`自由な食べ方ができるグラノーラに魅力を感じて。

そのままはもちろん、ヨーグルトやアイスに添えたり、気分や暮らしに合わせて楽しめるグラノーラ。

決まった食べ方にとらわれず、自由に味わえるところに私たちらしさを感じ、オリジナル商品の開発を始めました。

袋を開けた瞬間に広がる香り。

噛むほどに増す素材の旨み。

何度も試作を重ねながら、素材本来の味わいを大切にしたグラノーラを目指しています。

毎日の朝食にも、ご褒美のおやつにも。

暮らしの中で自然と手に取っていただける存在になれたら嬉しいです。`, `We were drawn to granola because it can be enjoyed so freely.

Eat it as it is, add it to yogurt or ice cream, and make it part of your day in whatever way suits you.

That freedom felt true to who we are, and inspired us to begin developing our own original granola.

The aroma that rises the moment you open the bag.

The flavor of the ingredients that grows as you chew.

Through repeated testing, we continue to pursue granola that respects the natural character of every ingredient.

For everyday breakfast or as a small reward.

We hope it becomes something you naturally reach for in daily life.`],
  ["LANA WITH. noteを読む", "Read the LANA WITH. note"],
  ["with 私たちと一緒に", "Work With Us"],
  ["OEM・卸販売のご相談はこちらから", "OEM & Wholesale Inquiries"],
  ["LANA WITH. では、OEM生産・卸販売のご依頼も承っております。 一緒にオリジナル商品づくりをしてみませんか？ お気軽にお問い合わせください。", "LANA WITH. welcomes OEM production and wholesale inquiries. Let’s create an original product together. Please feel free to contact us."],
  ["LINEで問い合わせ", "Contact via LINE"],
  ["メールで問い合わせ", "Contact by Email"],
  ["アクセス / 店舗情報", "Access / Store Information"],
  ["〒444-2136 愛知県岡崎市上里１丁目3−２", "1-3-2 Kamisato, Okazaki, Aichi 444-2136, Japan"],
  ["Googleマップで開く", "Open in Google Maps"],
  ["今すぐ特別な朝食を始めませんか？", "Ready to Make Breakfast a Little More Special?"],
  ["ハンドメイドの温かさを、あなたの食卓にお届けします。", "Bringing the warmth of handmade food to your table."],
  ["グラノーラ 定期便セット", "Granola Subscription Set"],
  ["ラナウィズ", "LANA WITH."],
  ["ハンドメイド グラノーラ専門店", "Handmade Granola Specialty Store"],
  ["ご案内", "Information"],
  ["配送について", "Shipping"],
  ["プライバシーポリシー", "Privacy Policy"],
])

function translateTextNode(node: Text) {
  const value = node.nodeValue
  if (!value) return

  const trimmed = value.trim()
  if (!trimmed) return

  const translated = ENGLISH_TEXT.get(trimmed)
  if (!translated) return

  const start = value.indexOf(trimmed)
  if (start === -1) return

  node.nodeValue = `${value.slice(0, start)}${translated}${value.slice(start + trimmed.length)}`
}

function translateTree(root: Node) {
  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root as Text)
    return
  }

  if (!(root instanceof Element) && root !== document.body) return

  if (root instanceof Element) {
    const tag = root.tagName
    if (["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA"].includes(tag)) return
  }

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  let node = walker.nextNode()
  while (node) {
    translateTextNode(node as Text)
    node = walker.nextNode()
  }
}

export default function HomeLanguageSwitcher() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [language, setLanguage] = useState<Language>("ja")

  useEffect(() => {
    setMounted(true)
    if (pathname !== "/") return

    const params = new URLSearchParams(window.location.search)
    const queryLanguage = params.get("lang")
    const savedLanguage = window.localStorage.getItem("lana-language")
    const initialLanguage: Language = queryLanguage === "en" || (!queryLanguage && savedLanguage === "en") ? "en" : "ja"

    setLanguage(initialLanguage)
    document.documentElement.lang = initialLanguage

    if (initialLanguage === "en") {
      document.title = "LANA WITH. - Handmade Granola Specialty Store"
      window.requestAnimationFrame(() => translateTree(document.body))
    }
  }, [pathname])

  useEffect(() => {
    if (!mounted || pathname !== "/" || language !== "en") return

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData") {
          translateTextNode(mutation.target as Text)
          continue
        }

        mutation.addedNodes.forEach((node) => translateTree(node))
      }
    })

    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
    })

    return () => observer.disconnect()
  }, [language, mounted, pathname])

  if (!mounted || pathname !== "/") return null

  const changeLanguage = (nextLanguage: Language) => {
    if (nextLanguage === language) return

    window.localStorage.setItem("lana-language", nextLanguage)
    const url = new URL(window.location.href)

    if (nextLanguage === "en") {
      url.searchParams.set("lang", "en")
    } else {
      url.searchParams.delete("lang")
    }

    window.location.href = `${url.pathname}${url.search}${url.hash}`
  }

  return (
    <div
      className="absolute right-14 top-4 z-[60] flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] text-white md:right-5 md:top-5 md:text-[12px]"
      style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8), 0 0 16px rgba(0,0,0,0.55)" }}
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => changeLanguage("ja")}
        className={`transition-opacity ${language === "ja" ? "opacity-100" : "opacity-55 hover:opacity-85"}`}
        aria-pressed={language === "ja"}
      >
        JA
      </button>
      <span className="opacity-45" aria-hidden="true">|</span>
      <button
        type="button"
        onClick={() => changeLanguage("en")}
        className={`transition-opacity ${language === "en" ? "opacity-100" : "opacity-55 hover:opacity-85"}`}
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  )
}
