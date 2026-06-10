"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import {
  Instagram,
  ExternalLink,
  ArrowRight,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Tag,
  Hand,
  Star,
  Heart,
  Sparkles,
} from "lucide-react"
import { useState, useEffect } from "react"
import ProductTabs from "@/components/product-tabs"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const carouselSlides = [
    {
      id: 1,
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7705%202.jpg-iOsZBbqgi6mkXZ4zCEXycVMpzodqfQ.jpeg",
      alt: "Lana with granola packages",
    },
    {
      id: 2,
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lana0120.jpg-resjDol3pmfqLhku3WM3TZfCT0yYWd.jpeg",
      alt: "Lana with product styling",
    },
    {
      id: 3,
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4191%202.JPG-9eN4r0hGOB9zeKqZbI1J917enqtAVK.jpeg",
      alt: "Granola bowl with milk",
    },
    {
      id: 4,
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lana0094.jpg-2KdmgiffCWf9NzjHtcEOvLSZYXGueG.jpeg",
      alt: "Stacked oatmeal donuts",
    },
    {
      id: 5,
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B3CFB952-9294-43D0-95FE-CA261650F30E.jpg-ROIObwnGj9IV6D2V3TGe7O58v9w0Eo.jpeg",
      alt: "Granola close-up",
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
    }, 3000) // Changed autoplay interval from 5000ms to 3000ms (3 seconds)

    return () => clearInterval(interval)
  }, [isAutoPlaying, carouselSlides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }
  }

  const [catalogState, setCatalogState] = useState({
    catalog: {
      activeTab: "granola",
      categories: [
        {
          key: "granola",
          label: "グラノーラ",
          items: [
            {
              name: "Lanaグラノーラ",
              price: "1,430円",
              description:
                "香ばしいピーナッツバターベースに、ナッツをたっぷり使用した定番人気。朝食にもおやつにもおすすめ。",
              allergy: "乳・落花生",
              weight: "250g",
              shelfLife: "製造日より3週間",
              storage: "開封後は冷凍保存を推奨",
              imageUrl: "/images/slide-1.jpg",
            },
            {
              name: "紅茶のグラノーラ",
              price: "1,430円",
              description:
                "アールグレイ茶葉×りんご・デーツ・いちごシロップ。封を開けると紅茶とフルーツの香りが広がる。",
              allergy: "乳・りんご・アーモンド",
              weight: "250g",
              shelfLife: "製造日より3週間",
              storage: "冷暗所／開封後は冷凍保存推奨",
              imageUrl: "/images/slide-2.jpg",
            },
            {
              name: "チョコグラノーラ",
              price: "1,540円",
              description: "チョコ×ココアの甘さとほろ苦さ。アーモンドの香ばしさ。甘さ控えめで大人向け。",
              allergy: "乳",
              weight: "250g",
              shelfLife: "製造日より3週間",
              storage: "開封後は冷凍保存推奨",
              imageUrl: "/images/slide-3.jpg",
            },
            {
              name: "抹茶グラノーラ",
              price: "1,540円",
              description: "上質な抹茶の香りとほろ苦さ。温かいミルクやおしること好相性。",
              allergy: "乳",
              weight: "250g",
              shelfLife: "製造日より3週間",
              storage: "開封後は冷凍保存推奨",
              imageUrl: "/images/slide-4.jpg",
            },
            {
              name: "Lanaミール",
              price: "1,200円",
              description: "ナッツ無しのシンプルなオートミール。サラダ・グラタン・白米代替・ぜんざいトッピングにも。",
              allergy: "乳・落花生",
              weight: "250g",
              shelfLife: "製造日より3週間",
              storage: "開封後は冷凍保存推奨",
              imageUrl: "/images/slide-1.jpg",
            },
          ],
        },
        {
          key: "mini",
          label: "ミニグラノーラ",
          items: [
            {
              name: "Lanaグラノーラ（ミニ）",
              price: "600円",
              description: "定番の味をお試しサイズで。",
              allergy: "乳・落花生",
              weight: "100g",
              shelfLife: "製造日より3週間",
              storage: "開封後は冷凍保存推奨",
              imageUrl: "/elegant-granola-bowl.png",
            },
            {
              name: "紅茶のグラノーラ（ミニ）",
              price: "600円",
              description: "アールグレイ×フルーツの香り。携帯にも◎",
              allergy: "乳・りんご・アーモンド",
              weight: "100g",
              shelfLife: "製造日より3週間",
              storage: "冷暗所／開封後は冷凍保存推奨",
              imageUrl: "/premium-granola-bowl.png",
            },
            {
              name: "チョコグラノーラ（ミニ）",
              price: "650円",
              description: "甘さ控えめのチョコとココア。",
              allergy: "乳",
              weight: "100g",
              shelfLife: "製造日より3週間",
              storage: "開封後は冷凍保存推奨",
              imageUrl: "/chocolate-granola.png",
            },
            {
              name: "抹茶グラノーラ（ミニ）",
              price: "650円",
              description: "抹茶の和風テイストを手軽に。",
              allergy: "乳",
              weight: "100g",
              shelfLife: "製造日より3週間",
              storage: "開封後は冷凍保存推奨",
              imageUrl: "/berry-granola-bowl.png",
            },
            {
              name: "Lanaミール（ミニ）",
              price: "400円",
              description: "トッピング向けに使いやすいミニサイズ。",
              allergy: "乳・落花生",
              weight: "100g",
              shelfLife: "製造日より3週間",
              storage: "開封後は冷凍保存推奨",
              imageUrl: "/premium-granola-bowl.png",
            },
          ],
        },
        {
          key: "cookies",
          label: "クッキー",
          items: [
            {
              name: "グラノーラクッキー（10枚）",
              price: "2,000円",
              description: "グラノーラ素材の香ばしさ。ふくらし粉・卵不使用。",
              allergy: "乳",
              weight: "10枚",
              shelfLife: "製造日より3週間",
              storage: "冷暗所／開封後はお早めに",
              imageUrl: "/berry-granola-bowl.png",
            },
            {
              name: "紅茶のクッキー（10枚）",
              price: "2,000円",
              description: "アールグレイが香る上品な味。紅茶やコーヒーに。",
              allergy: "乳",
              weight: "10枚",
              shelfLife: "製造日より3週間",
              storage: "冷暗所／開封後はお早めに",
              imageUrl: "/premium-granola-bowl.png",
            },
            {
              name: "チョコクッキー（10枚）",
              price: "2,000円",
              description: "チョコチャンクたっぷりの濃厚タイプ。",
              allergy: "乳",
              weight: "10枚",
              shelfLife: "製造日より3週間",
              storage: "冷暗所／開封後はお早めに",
              imageUrl: "/chocolate-granola.png",
            },
          ],
        },
        {
          key: "donuts",
          label: "ドーナツ",
          items: [
            {
              name: "オートミール焼きドーナツ６個入り（４種類セット）",
              price: "2,400円",
              description: "送料：全国一律 520円\nセット内容：プレーン × 2個、ココア × 2個、西尾抹茶 × 1個、紅茶 × 1個",
              allergy: "小麦・卵・乳",
              weight: "6個入り",
              shelfLife: "製造日より1週間",
              storage: "常温保存",
              imageUrl: "/colorful-oatmeal-donuts.png",
            },
          ],
        },
      ],
    },
  })

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false) // Close mobile menu after navigation
    }
  }

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <div className="min-h-screen bg-brand-milk-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          {/* Left-top logo to home link */}
          <a
            href="/"
            className="font-serif text-2xl md:text-3xl font-bold text-white hover:text-white/90 transition-colors"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8), 0 0 16px rgba(0,0,0,0.6)" }}
          >
            Lana with.
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("products")}
              className="text-lg text-white hover:text-white/90 transition-colors japanese-text font-semibold"
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8), 0 0 16px rgba(0,0,0,0.6)" }}
            >
              商品
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-lg text-white hover:text-white/90 transition-colors japanese-text font-semibold"
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8), 0 0 16px rgba(0,0,0,0.6)" }}
            >
              こだわり
            </button>
            <button
              onClick={() => scrollToSection("access")}
              className="text-lg text-white hover:text-white/90 transition-colors japanese-text font-semibold"
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8), 0 0 16px rgba(0,0,0,0.6)" }}
            >
              アクセス
            </button>
            <button
              onClick={() => scrollToSection("owner")}
              className="text-lg text-white hover:text-white/90 transition-colors japanese-text font-semibold"
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8), 0 0 16px rgba(0,0,0,0.6)" }}
            >
              オーナー
            </button>
            <button
              onClick={() => scrollToSection("about-brand")}
              className="text-lg text-white hover:text-white/90 transition-colors japanese-text font-semibold"
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8), 0 0 16px rgba(0,0,0,0.6)" }}
              aria-label="私たちについて（このページ内へ移動）"
            >
              私たちについて
            </button>
            <button
              onClick={() => window.open("https://lin.ee/bxHhY8L", "_blank")}
              className="text-lg text-white hover:text-white/90 transition-colors japanese-text font-semibold"
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8), 0 0 16px rgba(0,0,0,0.6)" }}
            >
              お問い合わせ
            </button>
          </nav>

          {/* Mobile Navigation */}
          <button
            className="md:hidden text-white hover:text-white/90 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="メニューを開く"
            aria-controls="mobile-drawer"
            aria-expanded={isMobileMenuOpen}
            style={{
              textShadow: "2px 2px 8px rgba(0,0,0,0.8), 0 0 16px rgba(0,0,0,0.6)",
              filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.8))",
            }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 md:w-7 md:h-7" /> : <Menu className="w-6 h-6 md:w-7 md:h-7" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <div
              className="fixed inset-0 z-[100] bg-black/30 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Right-side Drawer Panel */}
            <nav
              id="mobile-drawer"
              className={`fixed top-0 right-0 z-[101] h-full w-[60vw] max-w-[280px] min-w-[240px] 
                         rounded-l-2xl border border-white/15
                         bg-gradient-to-b from-black/18 via-black/12 to-black/10
                         shadow-[0_8px_40px_rgba(0,0,0,.35)]
                         transition-transform duration-300 ease-out ${
                           isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                         } md:hidden`}
              role="dialog"
              aria-modal="true"
              aria-labelledby="drawer-title"
            >
              <div className="flex items-center justify-between px-6 py-5">
                <h2 id="drawer-title" className="text-[15px] font-medium tracking-wide text-white/95">
                  メニュー
                </h2>
                <button
                  className="rounded-md p-2 text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="px-4 pb-6">
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => scrollToSection("products")}
                      className="block rounded-xl border border-white/15 px-4 py-2.5
                                 text-[14px] tracking-wide
                                 bg-white text-brand-dark-brown text-center
                                 hover:bg-gray-50 hover:border-white/20
                                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70
                                 transition-colors w-full"
                    >
                      商品
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("about")}
                      className="block rounded-xl border border-white/15 px-4 py-2.5
                                 text-[14px] tracking-wide
                                 bg-white text-brand-dark-brown text-center
                                 hover:bg-gray-50 hover:border-white/20
                                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70
                                 transition-colors w-full"
                    >
                      こだわり
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("access")}
                      className="block rounded-xl border border-white/15 px-4 py-2.5
                                 text-[14px] tracking-wide
                                 bg-white text-brand-dark-brown text-center
                                 hover:bg-gray-50 hover:border-white/20
                                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70
                                 transition-colors w-full"
                    >
                      アクセス
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("owner")}
                      className="block rounded-xl border border-white/15 px-4 py-2.5
                                 text-[14px] tracking-wide
                                 bg-white text-brand-dark-brown text-center
                                 hover:bg-gray-50 hover:border-white/20
                                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70
                                 transition-colors w-full"
                    >
                      オーナー
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("about-brand")}
                      className="block rounded-xl border border-white/15 px-4 py-2.5
                                 text-[14px] tracking-wide
                                 bg-white text-brand-dark-brown text-center
                                 hover:bg-gray-50 hover:border-white/20
                                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70
                                 transition-colors w-full"
                    >
                      私たちについて
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        window.open("https://lin.ee/bxHhY8L", "_blank")
                        setIsMobileMenuOpen(false)
                      }}
                      className="block rounded-xl border border-white/20 bg-white px-4 py-2.5
                                 text-[14px] text-brand-dark-brown tracking-wide text-center
                                 hover:bg-gray-50 transition-colors w-full"
                    >
                      お問い合わせ
                    </button>
                  </li>
                </ul>

                <div className="mt-4">
                  <button
                    className="block rounded-xl border border-white/20 bg-white px-4 py-2.5
                               text-[14px] text-brand-dark-brown tracking-wide text-center
                               hover:bg-gray-50 transition-colors w-full"
                    onClick={() => {
                      window.open("https://lanagranola.base.shop/", "_blank")
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    オンラインショップ
                  </button>
                </div>
              </div>
            </nav>
          </>
        )}
      </header>

      {/* Hero Carousel Section */}
      <section
        className="relative min-h-[100vh] flex items-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-roledescription="carousel"
        aria-live="polite"
        aria-label="Hero image carousel"
      >
        {/* Carousel Slides */}
        <div className="absolute inset-0">
          {carouselSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity ease-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${slide.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                transitionDuration: "1200ms",
                transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/45 md:bg-black/35 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
        <button
          onClick={goToPrevious}
          className="hero-nav-arrow absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full hidden md:flex items-center justify-center transition-all duration-200"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={goToNext}
          className="hero-nav-arrow absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full hidden md:flex items-center justify-center transition-all duration-200"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? "true" : "false"}
            />
          ))}
        </div>

        {/* Hero Content - Same on all slides */}
        <div className="container mx-auto px-4 relative z-10 pt-16 pb-20 md:pt-20 md:pb-24">
          <div className="max-w-2xl md:max-w-[1100px] md:mx-auto md:text-center">
            <div className="space-y-6">
              <h1
                id="heroTitle"
                className="font-serif font-bold text-white leading-relaxed"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,.35)" }}
              >
                {/* Mobile layout - more line breaks */}
                <span className="block md:hidden text-3xl lg:text-4xl">
                  GRANOLA SPECIALITY STORE
                  <br />
                  <span className="text-xl font-normal">since 2024</span>
                  <br />
                  <span className="text-lg font-normal italic">mao and yuna</span>
                </span>

                {/* Desktop layout - fewer line breaks */}
                <span className="hidden md:block text-4xl xl:text-5xl">
                  GRANOLA SPECIALITY STORE since 2024
                  <br />
                  <span className="text-2xl xl:text-3xl font-normal italic">mao and yuna</span>
                </span>
              </h1>

              <div
                className="text-white/95 japanese-text leading-relaxed"
                style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.6)" }}
              >
                {/* Mobile layout - more line breaks for readability */}
                <p className="block md:hidden text-sm md:text-base">
                  幼馴染みのわたしたちが
                  <br />
                  型にはまらない美味しいものを
                  <br />
                  届けたい想いから作り始めました。
                  <br />
                  <br />
                  お気に入りの器とスプーンと一緒に
                  <br />
                  ゆったりとした時間を、
                  <br />
                  そしておいしさと栄養が詰まった
                  <br />
                  グラノーラをお楽しみください。
                </p>

                {/* Desktop layout - fewer line breaks, utilizing width */}
                <p className="hidden md:block text-base lg:text-lg max-w-4xl mx-auto">
                  幼馴染みのわたしたちが型にはまらない美味しいものを
                  <br />
                  届けたい想いから作り始めました。
                  <br />
                  <br />
                  お気に入りの器とスプーンと一緒にゆったりとした時間を、
                  <br />
                  そしておいしさと栄養が詰まったグラノーラをお楽しみください。
                </p>
              </div>

              <div id="heroButtons" className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#C2A98D] hover:bg-[#B8A082] text-white px-6 py-3 text-base md:text-lg font-medium rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl japanese-text"
                  onClick={() => window.open("https://lanagranola.base.shop/", "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  オンラインショップを見る
                </Button>
                <button
                  onClick={() => scrollToSection("about-brand")}
                  className="inline-flex items-center gap-2 rounded-xl border border-neutral-300/60 bg-white/90 px-4 h-10 md:h-11 md:px-5 text-[14px] md:text-base hover:bg-white shadow-sm transition japanese-text text-brand-dark-brown hover:text-brand-dark-brown"
                >
                  私たちについて
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ProductTabs state={catalogState} setState={setCatalogState} />
        </div>
      </section>

      {/* Brand Values Section */}
      <section id="about" className="py-20 bg-brand-beige/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-brown mb-4">
              <span className="font-serif">Lana with.</span>
              <span className="japanese-text">のこだわり</span>
            </h2>
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-8">
              <iframe
                src="https://www.youtube.com/embed/8cyFD2DOZiI"
                title="Lana with 紹介動画"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-brand-milk-white rounded-full flex items-center justify-center mx-auto border-2 border-brand-mocha">
                <Tag className="w-8 h-8 text-brand-dark-brown" />
              </div>
              <h3 className="japanese-text text-xl font-bold text-brand-dark-brown">商品名へのこだわり</h3>
              <div className="max-w-[38ch] md:max-w-none mx-auto">
                <p
                  className="kodawari-copy text-[14px] md:text-base jp-tight leading-relaxed mb-8 japanese-text"
                  style={{ color: "#4B2E23" }}
                >
                  素材や味がひと目で伝わるように工夫した名前。
                  <br />
                  「見て食べたい」口にして「想像以上においしい」
                  <br />
                  と感じてもらえることを目指しています。
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-brand-milk-white rounded-full flex items-center justify-center mx-auto border-2 border-brand-mocha">
                <Hand className="w-8 h-8 text-brand-dark-brown" />
              </div>
              <h3 className="japanese-text text-xl font-bold text-brand-dark-brown">細部までの手仕事</h3>
              <div className="max-w-[38ch] md:max-w-none mx-auto">
                <p
                  className="kodawari-copy text-[14px] md:text-base jp-tight leading-relaxed mb-8 japanese-text"
                  style={{ color: "#4B2E23" }}
                >
                  自家製粉オートミールやナッツを手作業で刻み
                  <br />
                  香りや焼き加減にこだわり抜いて仕上げています。
                  <br />
                  だからこそ生まれる、唯一無二の味わい。
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-brand-milk-white rounded-full flex items-center justify-center mx-auto border-2 border-brand-mocha">
                <Star className="w-8 h-8 text-brand-dark-brown" />
              </div>
              <h3 className="japanese-text text-xl font-bold text-brand-dark-brown">特別で日常に寄り添う</h3>
              <div className="max-w-[38ch] md:max-w-none mx-auto">
                <p
                  className="kodawari-copy text-[14px] md:text-base jp-tight leading-relaxed mb-8 japanese-text"
                  style={{ color: "#4B2E23" }}
                >
                  大量生産では再現できない深い味わいを追求。
                  <br />
                  「特別だけど、日常にそっと寄り添う」
                  <br />
                  そんな存在でありたいと願っています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section id="owner" className="py-12 md:py-16 bg-[#efe7de]/40">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-[28px] md:text-3xl font-serif text-[#4b2f21] mb-8 md:mb-10 tracking-wide">
            owner
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
            {/* mao */}
            <article className="text-center mb-6 md:mb-0">
              <a
                href="https://www.instagram.com/maoyoga_/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <img
                  src="/images/owner/mao.avif"
                  alt="mao"
                  className="w-full max-h-[220px] md:max-h-none md:aspect-square object-cover rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-[15px] md:text-base font-medium text-[#4b2f21]">mao</h3>
                <div className="text-[15px] md:text-[16px] text-[#6b5143] mt-2 mb-4 leading-[1.7] md:leading-[1.6]">
                  <p className="mb-3">
                    yoga instructor
                    <br />
                    からだにやさしい食と暮らしを研究
                    <br />
                    朝ヨガが日課です。
                  </p>
                </div>
                <a
                  href="https://www.instagram.com/maoyoga_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-1 text-[13px] px-[10px] py-1 underline underline-offset-4 decoration-[#c6926b] hover:decoration-[#A67C52] transition-colors"
                >
                  about
                </a>
              </div>
            </article>

            {/* yuna */}
            <article className="text-center mb-6 md:mb-0">
              <a
                href="https://www.instagram.com/co_no_mawari/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <img
                  src="/images/owner/yuna.avif"
                  alt="yuna"
                  className="w-full max-h-[220px] md:max-h-none md:aspect-square object-cover rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-[15px] md:text-base font-medium text-[#4b2f21]">yuna</h3>
                <div className="text-[15px] md:text-[16px] text-[#6b5143] mt-2 mb-4 leading-[1.7] md:leading-[1.6]">
                  <p className="mb-3">
                    baker
                    <br />
                    素材の持ち味を生かした
                    <br />
                    焼き菓子とグラノーラの専門家
                  </p>
                </div>
                <a
                  href="https://www.instagram.com/co_no_mawari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-1 text-[13px] px-[10px] py-1 underline underline-offset-4 decoration-[#c6926b] hover:decoration-[#A67C52] transition-colors"
                >
                  about
                </a>
              </div>
            </article>

            {/* Lanaについて（2人の写真・ブランド紹介） */}
            <article className="text-center mb-6 md:mb-0">
              <a
                href="https://www.instagram.com/lanawith_/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <img
                  src="/images/owner/lana.avif"
                  alt="Lanaについて"
                  className="w-full max-h-[220px] md:max-h-none md:aspect-square object-cover rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-[15px] md:text-base font-medium text-[#4b2f21]">Lanaについて</h3>
                <div className="text-[15px] md:text-[16px] text-[#6b5143] mt-2 mb-4 leading-[1.7] md:leading-[1.6]">
                  <p className="mb-3">
                    幼馴染のふたりで運営する Lana with.
                    <br />
                    "日常のごほうび" を届けています。
                  </p>
                </div>
                <a
                  href="https://www.instagram.com/lanawith_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-1 text-[13px] px-[10px] py-1 underline underline-offset-4 decoration-[#c6926b] hover:decoration-[#A67C52] transition-colors"
                >
                  view more
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* About Lana with. Section */}
      <section id="about-brand" className="pt-16 pb-20 md:pt-20 md:pb-24">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-stone-800">About Lana with.</h2>
            <p className="mt-2 text-stone-600 md:text-lg japanese-text">おいしいを、もっと自由に。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1: ブランドストーリー */}
            <div className="rounded-2xl bg-stone-50 border border-stone-200/70 shadow-sm p-5 md:p-6">
              <div className="flex items-center mb-2">
                <Heart className="w-6 h-6 text-amber-700/80 mr-2" />
                <h3 className="text-xl md:text-2xl font-semibold text-stone-800">ブランドストーリー</h3>
              </div>
              <p className="text-[15px] md:text-[16px] leading-relaxed text-stone-700 japanese-text">
                Lana with.
                の商品名は、素材や味がひと目で伝わるよう工夫しています。見て"食べたい"、口にして"想像以上においしい"を目指しています。
              </p>
            </div>

            {/* Card 2: 商品名へのこだわり */}
            <div className="rounded-2xl bg-stone-50 border border-stone-200/70 shadow-sm p-5 md:p-6">
              <div className="flex items-center mb-2">
                <Tag className="w-6 h-6 text-amber-700/80 mr-2" />
                <h3 className="text-xl md:text-2xl font-semibold text-stone-800">商品名へのこだわり</h3>
              </div>
              <p className="text-[15px] md:text-[16px] leading-relaxed text-stone-700 japanese-text">
                Lana with.
                の商品名は、素材や味がひと目で伝わるよう工夫しています。見て"食べたい"、口にして"想像以上においしい"を目指しています。
              </p>
            </div>

            {/* Card 3: 開発背景 */}
            <div className="rounded-2xl bg-stone-50 border border-stone-200/70 shadow-sm p-5 md:p-6 md:col-span-2">
              <div className="flex items-center mb-2">
                <Sparkles className="w-6 h-6 text-amber-700/80 mr-2" />
                <h3 className="text-xl md:text-2xl font-semibold text-stone-800">開発背景</h3>
              </div>
              <p className="text-[15px] md:text-[16px] leading-relaxed text-stone-700 japanese-text">
                「日常的なグラノーラではない、特別なグラノーラ」を目指し、自家製粉オートミールやナッツを手作業で刻み、香りや焼き加減にこだわっています。大量生産にはない味わいを実現し、"特別だけど身近に置きたくなる"味わいを届けています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Updated With Us Section */}
      <section className="py-20" style={{ backgroundColor: "#EADBC8" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: "#4B2E23" }}>
              with 私たちと一緒に
            </h2>
            <p className="text-lg mb-8" style={{ color: "#4B2E23" }}>
              OEM・卸販売のご相談はこちらから
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Product Images - 2 images side by side */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img src="/granola-bowl-with-milk.jpg" alt="グラノーラボウル" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img src="/matcha-granola-parfait.png" alt="抹茶パフェ" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Text and Buttons - centered below images */}
            <div className="text-center">
              <div className="max-w-[38ch] md:max-w-none mx-auto">
                <p
                  className="oem-copy text-[14px] md:text-lg jp-tight leading-relaxed mb-8 japanese-text"
                  style={{ color: "#4B2E23" }}
                >
                  Lana with. では、OEM生産・卸販売のご依頼も承っております。
                  一緒にオリジナル商品づくりをしてみませんか？ お気軽にお問い合わせください。
                </p>
              </div>

              {/* Contact buttons */}
              <div className="flex flex-row gap-4 justify-center">
                <Button
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 flex items-center justify-center gap-2"
                  onClick={() => window.open("https://lin.ee/bxHhY8L", "_blank")}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.282.628-.63.628-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.63 0-.345.282-.63.63-.63.346 0 .628.285.628.63 0 .344-.282.628-.629.628M24 10.314C24 4.943 18.615.572 12.017.572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                  LINEで問い合わせ
                </Button>

                <Button
                  className="text-white px-6 py-3 flex items-center justify-center gap-2"
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
      </section>

      {/* Access/Store Information Section */}
      <section id="access" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark-brown mb-4">
              アクセス / 店舗情報
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl shadow-lg mb-6 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.5403616692537!2d137.165812!3d34.994643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004a3003a19fd47%3A0xb40f5ec83ebddfe9!2z44Kw44Op44OO44O844Op5bCC6ZaA5bqXIExhbmEgd2l0aC4!5e0!3m2!1sja!2sjp!4v1755335366122!5m2!1sja!2sjp"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <p className="mt-2 text-center text-gray-700 japanese-text">
              〒444-2136 愛知県岡崎市上里１丁目3−２
              <br />
              Lana with.
            </p>

            <div className="text-center mt-6">
              <Button
                className="bg-brand-mocha hover:bg-brand-dark-brown text-white"
                onClick={() => window.open("https://maps.app.goo.gl/BzCGi1zzDn4HQNcm6", "_blank")}
              >
                Googleマップで開く
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-mocha to-brand-dark-brown">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            今すぐ特別な朝食を始めませんか？
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto japanese-text">
            ハンドメイドの温かさを、あなたの食卓にお届けします。
          </p>
          <Button
            className="bg-white text-brand-dark-brown hover:bg-brand-milk-white px-8"
            onClick={() => window.open("https://lanagranola.base.shop/", "_blank")}
          >
            オンラインショップへ
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-brand-dark-brown text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="font-serif text-2xl font-bold">Lana with.</div>
              <p className="text-white/80 japanese-text">ラナウィズ</p>
              <p className="text-white/70 japanese-text">ハンドメイド グラノーラ専門店</p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/lanawith_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://lanagranola.base.shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-lg font-semibold">会社情報</h3>
              <ul className="space-y-2 text-white/70 japanese-text">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    私たちについて
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    お問い合わせ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    配送について
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    プライバシーポリシー
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60 japanese-text">
            <p>&copy; 2025 Lana with. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
