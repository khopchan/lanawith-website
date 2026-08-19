"use client"

import { ProductCardGrid } from "@/components/product-card"

export default function ProductTabs(props: any) {
  const catalog = props.state?.catalog
  const setState = props.setState || (() => {})
  if (!catalog) return null

  const activeKey = catalog.activeTab || catalog.categories[0]?.key
  const current = catalog.categories.find((c: any) => c.key === activeKey) || catalog.categories[0]

  return (
    <div className="w-full">
      {/* タイトル */}
      <div className="mb-6">
        <h2 className="text-3xl font-serif tracking-wide">LANA WITH. 商品一覧</h2>
        <p className="text-neutral-500 mt-2">カテゴリをタブで切り替えできます</p>
      </div>

      {/* タブ */}
      <div className="flex gap-2 mb-6">
        {catalog.categories.map((cat: any) => (
          <button
            key={cat.key}
            onClick={() => setState({ catalog: { ...catalog, activeTab: cat.key } })}
            className={`px-4 py-2 rounded-full border transition ${
              activeKey === cat.key
                ? "bg-amber-100 border-amber-300 text-amber-900"
                : "bg-white hover:bg-neutral-50 border-neutral-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <ProductCardGrid items={current.items} />
    </div>
  )
}
