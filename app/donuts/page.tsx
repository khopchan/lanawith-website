"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Leaf, Award } from "lucide-react"

export default function DonutsPage() {
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
            <a href="/about" className="text-brand-dark-brown hover:text-brand-mocha transition-colors japanese-text">
              私たちについて
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-beige/30 to-brand-milk-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl mb-12">
              <img
                src="/colorful-oatmeal-donuts.png"
                alt="オートミール焼きドーナツ 4種類"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center mb-16">
              <div className="inline-block text-4xl mb-4">🍩</div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark-brown mb-6">
                オートミール焼きドーナツ
              </h1>
              <p className="text-lg md:text-xl text-brand-dark-brown leading-relaxed max-w-3xl mx-auto japanese-text">
                小さなお子様から大人の方まで一緒に楽しめる、新しいオートミールスイーツ。
                <br />
                現在は 4種類セット販売のみですが、今後フレーバーを増やす予定です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-1 gap-8 justify-center">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-brand-beige/50 max-w-md mx-auto">
                <div className="aspect-square">
                  <img
                    src="/oatmeal-donuts-gift-box.png"
                    alt="オートミール焼きドーナツ６個入り（４種類セット）"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-brand-dark-brown mb-3">
                    オートミール焼きドーナツ６個入り（４種類セット）
                  </h3>
                  <p className="text-brand-dark-brown mb-4 japanese-text">プレーン / ココア / 西尾抹茶 / 紅茶</p>
                  <div className="space-y-2 mb-6 text-sm text-brand-dark-brown">
                    <p>価格：2,400円（税込）</p>
                    <p>送料：全国一律 520円</p>
                  </div>
                  <Button
                    className="w-full bg-brand-mocha hover:bg-brand-dark-brown text-white"
                    onClick={() => (window.location.href = "/donuts/oatmeal-donuts")}
                  >
                    詳細を見る
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-brand-beige/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-dark-brown text-center mb-12">
              ドーナツの特徴
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-brand-milk-white rounded-full flex items-center justify-center mx-auto border-2 border-brand-mocha">
                  <Heart className="w-8 h-8 text-brand-mocha" />
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-dark-brown">家族で楽しめる</h3>
                <p className="text-brand-dark-brown leading-relaxed japanese-text text-sm">
                  小さなお子様から大人まで、みんなで一緒に楽しめる優しい味わいです。
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-brand-milk-white rounded-full flex items-center justify-center mx-auto border-2 border-brand-mocha">
                  <Leaf className="w-8 h-8 text-brand-mocha" />
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-dark-brown">オートミール使用</h3>
                <p className="text-brand-dark-brown leading-relaxed japanese-text text-sm">
                  栄養豊富なオートミールを使用した、体に優しい焼きドーナツです。
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-brand-milk-white rounded-full flex items-center justify-center mx-auto border-2 border-brand-mocha">
                  <Award className="w-8 h-8 text-brand-mocha" />
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-dark-brown">4つの味</h3>
                <p className="text-brand-dark-brown leading-relaxed japanese-text text-sm">
                  プレーン、ココア、西尾抹茶、紅茶の4種類をセットでお楽しみいただけます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-mocha to-brand-dark-brown">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
            新しいオートミールスイーツを体験してみませんか？
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto japanese-text">
            家族みんなで楽しめる、優しい味わいのドーナツをお届けします。
          </p>
          <Button
            className="bg-white text-brand-dark-brown hover:bg-brand-milk-white px-8"
            onClick={() => (window.location.href = "/donuts/oatmeal-donuts")}
          >
            商品詳細を見る
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
