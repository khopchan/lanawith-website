"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Package, Clock, AlertTriangle, Truck, ExternalLink } from "lucide-react"
import type { CatalogProduct } from "@/lib/catalog-products"

export default function CatalogProductDetail({ product }: { product: CatalogProduct }) {
  return (
    <div className="min-h-screen bg-brand-milk-white">
      <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-brand-beige">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="font-serif text-2xl text-brand-dark-brown hover:text-brand-mocha transition-colors">
            LANA WITH.
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-brand-dark-brown hover:text-brand-mocha transition-colors japanese-text">
              ホーム
            </a>
            <a
              href="/#products"
              className="text-brand-dark-brown hover:text-brand-mocha transition-colors japanese-text"
            >
              商品一覧
            </a>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-brand-dark-brown japanese-text">
          <a href="/" className="hover:text-brand-mocha transition-colors">
            ホーム
          </a>
          <span>/</span>
          <a href="/#products" className="hover:text-brand-mocha transition-colors">
            {product.categoryLabel}
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
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h1 className="font-heading-jp text-3xl md:text-4xl text-brand-dark-brown mb-4">{product.name}</h1>
                  {product.price ? (
                    <p className="text-xl text-brand-mocha font-semibold mb-2">{product.price}</p>
                  ) : null}
                  <p className="text-brand-dark-brown japanese-text mb-1">内容量：{product.weight}</p>
                  <p className="text-brand-dark-brown japanese-text">{product.shipping}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Package className="w-5 h-5 text-brand-mocha mt-1 shrink-0" />
                    <div className="space-y-3">
                      <h4 className="font-semibold text-brand-dark-brown">商品説明</h4>
                      <div>
                        <p className="text-sm font-medium text-brand-dark-brown">商品の特徴</p>
                        <p className="text-sm text-brand-dark-brown japanese-text leading-relaxed">{product.features}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-brand-dark-brown">味わい</p>
                        <p className="text-sm text-brand-dark-brown japanese-text leading-relaxed">{product.taste}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-brand-dark-brown">使用している素材</p>
                        <p className="text-sm text-brand-dark-brown japanese-text leading-relaxed">
                          {product.ingredients}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-brand-dark-brown">おすすめの食べ方</p>
                        <p className="text-sm text-brand-dark-brown japanese-text leading-relaxed">{product.howToEat}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-brand-mocha mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-brand-dark-brown">アレルギー表示</h4>
                      <p className="text-sm text-brand-dark-brown japanese-text">{product.allergy}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-brand-mocha mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-brand-dark-brown">消費期限・保存方法</h4>
                      <p className="text-sm text-brand-dark-brown japanese-text leading-relaxed">{product.shelfLife}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Truck className="w-5 h-5 text-brand-mocha mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-brand-dark-brown">発送情報</h4>
                      <p className="text-sm text-brand-dark-brown japanese-text leading-relaxed whitespace-pre-line">
                        {product.shippingInfo}
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-brand-mocha hover:bg-brand-dark-brown text-white py-3 flex items-center justify-center gap-2"
                >
                  <a href={product.shopUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    オンラインショップで購入する
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-beige/30">
        <div className="container mx-auto px-4 text-center">
          <Button
            variant="outline"
            className="border-brand-mocha text-brand-mocha hover:bg-brand-mocha hover:text-white bg-transparent"
            asChild
          >
            <a href="/#products">
              <ArrowLeft className="w-4 h-4 mr-2" />
              商品一覧に戻る
            </a>
          </Button>
        </div>
      </section>

      <footer className="bg-brand-dark-brown text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="font-serif text-2xl mb-4">LANA WITH.</div>
          <p className="text-white/70 japanese-text mb-8">ハンドメイド グラノーラ専門店</p>
          <div className="space-y-2 text-white/60 japanese-text">
            <p>&copy; 2025 LANA WITH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
