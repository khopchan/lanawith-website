"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Package, Clock, AlertTriangle, Truck, ExternalLink } from "lucide-react"
import type { DonutProduct } from "@/lib/donut-products"

export default function DonutProductDetail({ product }: { product: DonutProduct }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-brand-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="font-serif text-2xl text-brand-text hover:text-brand-text-muted transition-colors">
            LANA WITH.
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-brand-text hover:text-brand-text-muted transition-colors japanese-text">
              ホーム
            </a>
            <a href="/donuts" className="text-brand-text hover:text-brand-text-muted transition-colors japanese-text">
              ドーナツ一覧
            </a>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-brand-text-muted">
          <a href="/" className="hover:text-brand-text transition-colors">
            ホーム
          </a>
          <span>/</span>
          <a href="/donuts" className="hover:text-brand-text transition-colors">
            ドーナツ
          </a>
          <span>/</span>
          <span>{product.breadcrumb}</span>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden border border-brand-border">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                {product.thumbnails && product.thumbnails.length > 0 ? (
                  <div className="grid grid-cols-4 gap-2">
                    {product.thumbnails.map((thumb) => (
                      <div key={thumb.alt} className="aspect-square rounded-lg overflow-hidden">
                        <img src={thumb.src} alt={thumb.alt} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="space-y-6">
                <div>
                  <h1 className="font-heading-jp text-3xl md:text-4xl text-brand-text mb-4">{product.name}</h1>
                  {product.price ? (
                    <p className="text-xl text-brand-text font-semibold mb-2">{product.price}</p>
                  ) : null}
                  {product.weight ? (
                    <p className="text-brand-text-muted japanese-text mb-1">内容量：{product.weight}</p>
                  ) : null}
                  {product.shipping ? (
                    <p className="text-brand-text-muted japanese-text">{product.shipping}</p>
                  ) : null}
                </div>

                {product.setContents && product.setContents.length > 0 ? (
                  <div className="bg-brand-bg-alt rounded-xl p-6 border border-brand-border">
                    <h3 className="font-heading-jp text-lg text-brand-text mb-3">セット内容</h3>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      {product.setContents.map((item) => (
                        <div key={item.label} className="flex items-center space-x-2">
                          <div className={`w-3 h-3 ${item.colorClass} rounded-full`}></div>
                          <span>
                            {item.label} × {item.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="space-y-4">
                  {product.description ? (
                    <div className="flex items-start space-x-3">
                      <Package className="w-5 h-5 text-brand-text-muted mt-1" />
                      <div>
                        <h4 className="font-semibold text-brand-text">商品説明</h4>
                        <p className="text-sm text-brand-text japanese-text leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  ) : null}

                  {product.allergy ? (
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-brand-text-muted mt-1" />
                      <div>
                        <h4 className="font-semibold text-brand-text">アレルギー表示</h4>
                        <p className="text-sm text-brand-text-muted">{product.allergy}</p>
                      </div>
                    </div>
                  ) : null}

                  {product.shelfLife ? (
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-brand-text-muted mt-1" />
                      <div>
                        <h4 className="font-semibold text-brand-text">消費期限・保存方法</h4>
                        <p className="text-sm text-brand-text-muted">{product.shelfLife}</p>
                      </div>
                    </div>
                  ) : null}

                  {product.shippingInfo ? (
                    <div className="flex items-start space-x-3">
                      <Truck className="w-5 h-5 text-brand-text-muted mt-1" />
                      <div>
                        <h4 className="font-semibold text-brand-text">発送情報</h4>
                        <p className="text-sm text-brand-text-muted japanese-text">{product.shippingInfo}</p>
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="space-y-3">
                  {product.shopUrl ? (
                    <Button
                      asChild
                      className="w-full bg-brand-button hover:bg-brand-button-hover text-white py-3 flex items-center justify-center gap-2"
                    >
                      <a href={product.shopUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        オンラインショップで購入する
                      </a>
                    </Button>
                  ) : null}

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
                    className="w-full bg-brand-button hover:bg-brand-button-hover text-white py-3 flex items-center justify-center gap-2"
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

      <section className="py-12 bg-brand-bg-alt">
        <div className="container mx-auto px-4 text-center">
          <Button
            variant="outline"
            className="border-brand-border text-brand-text hover:bg-white bg-brand-bg-muted"
            onClick={() => (window.location.href = "/donuts")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            ドーナツ一覧に戻る
          </Button>
        </div>
      </section>

      <footer className="bg-brand-bg-muted text-brand-text py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="font-serif text-2xl mb-4">LANA WITH.</div>
          <p className="text-brand-text-muted japanese-text mb-8">ハンドメイド グラノーラ専門店</p>
          <div className="space-y-2 text-brand-text-muted japanese-text">
            <p>&copy; 2025 LANA WITH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
