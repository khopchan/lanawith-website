"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Package, Clock, AlertTriangle, Truck } from "lucide-react"

export default function OatmealDonutsDetailPage() {
  return (
    <div className="min-h-screen bg-brand-milk-white">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-brand-beige">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a
            href="/"
            className="font-serif text-2xl font-bold text-brand-dark-brown hover:text-brand-mocha transition-colors"
          >
            Lana with
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-brand-dark-brown hover:text-brand-mocha transition-colors japanese-text">
              ホーム
            </a>
            <a href="/donuts" className="text-brand-dark-brown hover:text-brand-mocha transition-colors japanese-text">
              ドーナツ一覧
            </a>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-brand-dark-brown">
          <a href="/" className="hover:text-brand-mocha transition-colors">
            ホーム
          </a>
          <span>/</span>
          <a href="/donuts" className="hover:text-brand-mocha transition-colors">
            ドーナツ
          </a>
          <span>/</span>
          <span>オートミール焼きドーナツ６個入り</span>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/oatmeal-donuts-gift-box.png"
                    alt="オートミール焼きドーナツ６個入り（４種類セット）"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img src="/plain-oatmeal-donut.png" alt="プレーン" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img src="/cocoa-oatmeal-donut.png" alt="ココア" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img src="/matcha-oatmeal-donut.png" alt="西尾抹茶" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img src="/tea-oatmeal-donut.png" alt="紅茶" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark-brown mb-4">
                    オートミール焼きドーナツ６個入り（４種類セット）
                  </h1>
                  <p className="text-xl text-brand-mocha font-semibold mb-2">2,400円（税込）</p>
                  <p className="text-brand-dark-brown japanese-text">送料：全国一律 520円</p>
                </div>

                <div className="bg-brand-beige/30 rounded-xl p-6">
                  <h3 className="font-serif text-lg font-bold text-brand-dark-brown mb-3">セット内容</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-200 rounded-full"></div>
                      <span>プレーン × 2個</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                      <span>ココア × 2個</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span>西尾抹茶 × 1個</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-orange-300 rounded-full"></div>
                      <span>紅茶 × 1個</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Package className="w-5 h-5 text-brand-mocha mt-1" />
                    <div>
                      <h4 className="font-semibold text-brand-dark-brown">商品説明</h4>
                      <p className="text-sm text-brand-dark-brown japanese-text leading-relaxed">
                        小さなお子様から大人の方まで一緒に楽しめる、新しいオートミールスイーツです。栄養豊富なオートミールを使用し、4つの異なる味わいをお楽しみいただけます。現在は4種類すべてのセット販売のみ対応しております。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-brand-mocha mt-1" />
                    <div>
                      <h4 className="font-semibold text-brand-dark-brown">アレルギー表示</h4>
                      <p className="text-sm text-brand-dark-brown">小麦・卵・乳・大豆</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-brand-mocha mt-1" />
                    <div>
                      <h4 className="font-semibold text-brand-dark-brown">賞味期限・保存方法</h4>
                      <p className="text-sm text-brand-dark-brown">製造日より2週間 / 冷暗所保存</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Truck className="w-5 h-5 text-brand-mocha mt-1" />
                    <div>
                      <h4 className="font-semibold text-brand-dark-brown">発送情報</h4>
                      <p className="text-sm text-brand-dark-brown japanese-text">
                        ご注文から3-5営業日以内に発送いたします。冷蔵便でお届けします。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <p className="text-sm text-yellow-800 japanese-text">
                    <strong>重要：</strong>{" "}
                    現在は「4種類すべてのセット販売のみ」対応しております。単品での販売は行っておりません。
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 flex items-center justify-center gap-2"
                    onClick={() => window.open("https://lin.ee/bxHhY8L", "_blank")}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63 0 .344-.282.628-.629.628M24 10.314C24 4.943 18.615.572 12.017.572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                    </svg>
                    LINEで注文・相談
                  </Button>

                  <Button
                    className="w-full text-white py-3 flex items-center justify-center gap-2"
                    style={{ backgroundColor: "#4B2E23" }}
                    onClick={() => window.open("mailto:lana.with.granola@gmail.com", "_blank")}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    メールで問い合わせ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Donuts */}
      <section className="py-12 bg-brand-beige/30">
        <div className="container mx-auto px-4 text-center">
          <Button
            variant="outline"
            className="border-brand-mocha text-brand-mocha hover:bg-brand-mocha hover:text-white bg-transparent"
            onClick={() => (window.location.href = "/donuts")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            ドーナツ一覧に戻る
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark-brown text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="font-serif text-2xl font-bold mb-4">Lana with</div>
          <p className="text-white/70 japanese-text mb-8">ハンドメイド グラノーラ専門店</p>
          <div className="space-y-2 text-white/60 japanese-text">
            <p>&copy; 2025 Lana with. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
