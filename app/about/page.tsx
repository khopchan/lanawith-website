import Link from "next/link"
import { ArrowLeft, Leaf, Sprout, Cherry } from "lucide-react"

export const metadata = { title: "About | LANA WITH." }

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-brand-bg-alt py-8 md:py-12">
        <div className="mx-auto max-w-4xl px-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-text-muted hover:text-brand-text transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            ホームに戻る
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-brand-text">About LANA WITH.</h1>
          <p className="text-lg md:text-xl text-brand-text-muted leading-relaxed">おいしいを、もっと自由に。</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-5 py-12 md:py-16">
        {/* Brand Story Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Cherry className="text-brand-text" size={24} />
            <h2 className="text-2xl md:text-3xl font-heading-jp font-medium text-brand-text">LANA WITH.のはじまり</h2>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-brand-border">
            <p className="text-base md:text-lg leading-relaxed text-brand-text whitespace-pre-line">
              {`2021年7月19日。
ひとつのオートミールクッキーから、LANA WITH.は始まりました。

素材のおいしさを大切に、毎日の中で気軽に楽しめるものを。

食べる時間が、少しうれしくなるようなおいしさを届けています。`}
            </p>
          </div>
        </section>

        {/* Product Commitment Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Leaf className="text-brand-text" size={24} />
            <h2 className="text-2xl md:text-3xl font-heading-jp font-medium text-brand-text">選びやすさへの工夫</h2>
          </div>
          <div className="bg-brand-bg-muted rounded-2xl p-6 md:p-8 border border-brand-border">
            <p className="text-base md:text-lg leading-relaxed text-brand-text whitespace-pre-line">
              {`見ただけで、味わいが想像できるように。

素材や香りが伝わる、シンプルな名前を大切にしています。

選ぶ時間まで、おいしさの一部になるように。`}
            </p>
          </div>
        </section>

        {/* Development Background Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Sprout className="text-brand-text" size={24} />
            <h2 className="text-2xl md:text-3xl font-heading-jp font-medium text-brand-text">LANAが生まれた理由</h2>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-brand-border">
            <p className="text-base md:text-lg leading-relaxed text-brand-text whitespace-pre-line">
              {`そのままでも、ヨーグルトやアイスと合わせても。

決まった食べ方にとらわれず、自由に楽しめるのがグラノーラの魅力です。

素材の香りと食感を生かし、毎日に自然となじむおいしさをつくっています。`}
            </p>
          </div>
        </section>

        {/* Founders Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading-jp text-brand-text mb-8 text-center">創設者について</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-brand-border">
              <h3 className="text-xl font-serif text-brand-text mb-2">mao</h3>
              <p className="text-brand-text-muted mb-3">ヨガインストラクター</p>
              <p className="text-sm md:text-base leading-relaxed text-brand-text">
                からだにやさしい食と暮らしを研究。焼き上がりの香りに合わせた朝ヨガが日課です。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-brand-border">
              <h3 className="text-xl font-serif text-brand-text mb-2">yuna</h3>
              <p className="text-brand-text-muted mb-3">ベーカー</p>
              <p className="text-sm md:text-base leading-relaxed text-brand-text">
                素材の持ち味を生かした焼き菓子とグラノーラを担当。季節の食材を活かす配合が得意です。
              </p>
            </div>
          </div>
        </section>

        {/* Brand Info */}
        <section className="text-center">
          <div className="bg-brand-bg-muted text-brand-text rounded-2xl p-6 md:p-8 border border-brand-border">
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
            className="inline-flex items-center gap-2 bg-brand-button text-white px-8 py-3 rounded-xl hover:bg-brand-button-hover transition-colors text-base md:text-lg font-medium"
          >
            商品を見る
          </Link>
        </section>
      </div>
    </main>
  )
}
