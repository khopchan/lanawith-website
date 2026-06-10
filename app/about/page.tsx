import Link from "next/link"
import { ArrowLeft, Leaf, Sprout, Cherry } from "lucide-react"

export const metadata = { title: "About | Lana with." }

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white">
      {/* Header */}
      <div className="bg-[#4B2E23] text-white py-8 md:py-12">
        <div className="mx-auto max-w-4xl px-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#EADBC8] hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            ホームに戻る
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Lana with.</h1>
          <p className="text-lg md:text-xl text-[#EADBC8] leading-relaxed">おいしいを、もっと自由に。</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-5 py-12 md:py-16">
        {/* Brand Story Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Cherry className="text-[#4B2E23]" size={24} />
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#4B2E23]">ブランドストーリー</h2>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#EADBC8]/30">
            <p className="text-base md:text-lg leading-relaxed text-[#4B2E23] mb-4">
              幼なじみのふたりが営むグラノーラ専門店。「おいしいを、もっと自由に。」をコンセプトに、自分へのごほうびにも、贈り物にも選ばれる特別なお菓子を提供しています。
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#4B2E23] italic">
              「ひとつはじぶん。もうひとつはあなたに。」――温かくやさしいおいしさを届けます。
            </p>
          </div>
        </section>

        {/* Product Commitment Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Leaf className="text-[#4B2E23]" size={24} />
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#4B2E23]">商品名へのこだわり</h2>
          </div>
          <div className="bg-[#EADBC8]/20 rounded-2xl p-6 md:p-8">
            <p className="text-base md:text-lg leading-relaxed text-[#4B2E23]">
              Lana
              with.の商品名は、素材や味がひと目で伝わるよう工夫しています。見て"食べたい"、口にして"想像以上においしい"を目指しています。
            </p>
          </div>
        </section>

        {/* Development Background Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Sprout className="text-[#4B2E23]" size={24} />
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#4B2E23]">開発背景</h2>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#EADBC8]/30">
            <p className="text-base md:text-lg leading-relaxed text-[#4B2E23]">
              「日常的なグラノーラではない、特別なグラノーラ」を目指し、自家製粉オートミールやナッツを手作業で刻み、香りや焼き加減にこだわっています。大量生産にはない味わいを実現し、"特別だけど身近に置きたくなる"味わいを届けています。
            </p>
          </div>
        </section>

        {/* Founders Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#4B2E23] mb-8 text-center">創設者について</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#EADBC8]/30">
              <h3 className="text-xl font-serif font-bold text-[#4B2E23] mb-2">mao</h3>
              <p className="text-[#C2A98D] mb-3">ヨガインストラクター</p>
              <p className="text-sm md:text-base leading-relaxed text-[#4B2E23]">
                からだにやさしい食と暮らしを研究。焼き上がりの香りに合わせた朝ヨガが日課です。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#EADBC8]/30">
              <h3 className="text-xl font-serif font-bold text-[#4B2E23] mb-2">yuna</h3>
              <p className="text-[#C2A98D] mb-3">ベーカー</p>
              <p className="text-sm md:text-base leading-relaxed text-[#4B2E23]">
                素材の持ち味を生かした焼き菓子とグラノーラを担当。季節の食材を活かす配合が得意です。
              </p>
            </div>
          </div>
        </section>

        {/* Brand Info */}
        <section className="text-center">
          <div className="bg-[#4B2E23] text-white rounded-2xl p-6 md:p-8">
            <div className="font-mono text-sm md:text-base leading-relaxed">
              <p>/ Lana with.</p>
              <p>/ granola speciality store</p>
              <p>/ since 2024</p>
              <p>/ mao and yuna</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 bg-[#4B2E23] text-white px-8 py-3 rounded-xl hover:bg-[#6A3E31] transition-colors text-base md:text-lg font-medium"
          >
            商品を見る
          </Link>
        </section>
      </div>
    </main>
  )
}
