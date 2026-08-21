"use client"

import { ProductCardGrid } from "@/components/product-card"

/** スマホ2×2用の order（PCは元のカテゴリ順を維持） */
const TAB_ORDER_CLASS: Record<string, string> = {
  granola: "order-1 md:order-1",
  cookies: "order-2 md:order-3",
  mini: "order-3 md:order-2",
  donuts: "order-4 md:order-4",
}

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
        <h2 className="text-2xl md:text-3xl font-heading-jp !font-medium tracking-wide text-brand-text">
          LANA WITH. 商品一覧
        </h2>
        <p className="text-brand-text-muted mt-2">カテゴリをタブで切り替えできます</p>
      </div>

      {/* タブ: SPは2×2、PCは横1列 */}
      <div className="mb-6 grid grid-cols-2 gap-2 md:flex md:flex-wrap md:gap-2">
        {catalog.categories.map((cat: any) => {
          const selected = activeKey === cat.key
          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => setState({ catalog: { ...catalog, activeTab: cat.key } })}
              className={`inline-flex h-11 w-full items-center justify-center rounded-xl border px-3 text-[14px] font-normal leading-none whitespace-nowrap transition md:h-10 md:w-auto md:min-w-0 md:px-4 ${
                TAB_ORDER_CLASS[cat.key] ?? ""
              } ${
                selected
                  ? "border-brand-border bg-brand-bg-muted text-brand-text"
                  : "border-brand-border bg-white text-brand-text-muted hover:bg-brand-bg-alt"
              }`}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      <ProductCardGrid items={current.items} />
    </div>
  )
}
