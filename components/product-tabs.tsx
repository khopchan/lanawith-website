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
        <h2 className="text-3xl font-serif tracking-wide text-brand-text">LANA WITH. 商品一覧</h2>
        <p className="text-brand-text-muted mt-2">カテゴリをタブで切り替えできます</p>
      </div>

      {/* タブ */}
      <div className="flex gap-2 mb-6">
        {catalog.categories.map((cat: any) => (
          <button
            key={cat.key}
            onClick={() => setState({ catalog: { ...catalog, activeTab: cat.key } })}
            className={`px-4 py-2 rounded-full border transition ${
              activeKey === cat.key
                ? "bg-brand-bg-muted border-brand-border text-brand-text"
                : "bg-white hover:bg-brand-bg-alt border-brand-border text-brand-text-muted"
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
