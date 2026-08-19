import Link from "next/link"
import { ArrowLeft, Leaf, Sprout, Cherry } from "lucide-react"

export const metadata = { title: "About | LANA WITH." }

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
          <h1 className="text-4xl md:text-5xl font-serif mb-4">About LANA WITH.</h1>
          <p className="text-lg md:text-xl text-[#EADBC8] leading-relaxed">おいしいを、もっと自由に。</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-5 py-12 md:py-16">
        {/* Brand Story Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Cherry className="text-[#4B2E23]" size={24} />
            <h2 className="text-2xl md:text-3xl font-heading-jp font-semibold text-[#4B2E23]">LANA WITH.のはじまり</h2>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#EADBC8]/30">
            <p className="text-base md:text-lg leading-relaxed text-[#4B2E23] whitespace-pre-line">
              {`2021年の夏、ふたりの小さなコラボからLANA WITH.は始まりました。

はじまりは、ひとつのオートミールクッキー。

素材の香りとやさしい甘さが、暮らしにすっとなじむおいしさを目指しています。`}
            </p>
          </div>
        </section>

        {/* Product Commitment Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Leaf className="text-[#4B2E23]" size={24} />
            <h2 className="text-2xl md:text-3xl font-heading-jp font-semibold text-[#4B2E23]">選びやすさへの工夫</h2>
          </div>
          <div className="bg-[#EADBC8]/20 rounded-2xl p-6 md:p-8">
            <p className="text-base md:text-lg leading-relaxed text-[#4B2E23] whitespace-pre-line">
              {`名前を見ただけで、味が思い浮かぶこと。

LANA WITH.は、素材や食感が伝わるシンプルなネーミングを大切にしています。

選ぶ時間まで、ちょっと楽しくなるように。`}
            </p>
          </div>
        </section>

        {/* Development Background Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Sprout className="text-[#4B2E23]" size={24} />
            <h2 className="text-2xl md:text-3xl font-heading-jp font-semibold text-[#4B2E23]">LANAが生まれた理由</h2>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#EADBC8]/30">
            <p className="text-base md:text-lg leading-relaxed text-[#4B2E23] whitespace-pre-line">
              {`そのままでも、ヨーグルトでも、おやつにも。

食べ方を決めすぎないグラノーラに、私たちらしさを感じました。

「おいしいを、もっと自由に。」の気持ちをのせて、素材の味わいをまっすぐ届けています。`}
            </p>
          </div>
        </section>

        {/* Founders Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading-jp text-[#4B2E23] mb-8 text-center">創設者について</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#EADBC8]/30">
              <h3 className="text-xl font-serif text-[#4B2E23] mb-2">mao</h3>
              <p className="text-[#C2A98D] mb-3">ヨガインストラクター</p>
              <p className="text-sm md:text-base leading-relaxed text-[#4B2E23]">
                からだにやさしい食と暮らしを研究。焼き上がりの香りに合わせた朝ヨガが日課です。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#EADBC8]/30">
              <h3 className="text-xl font-serif text-[#4B2E23] mb-2">yuna</h3>
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
              <p>/ LANA WITH.</p>
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
