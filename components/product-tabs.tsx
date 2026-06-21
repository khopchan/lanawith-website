"use client"

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
        <h2 className="text-3xl font-serif font-bold tracking-wide">LANA WITH. 商品一覧</h2>
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

      <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
        {current.items.map((item: any, idx: number) => (
          <a
            key={idx}
            href="https://lanagranola.base.shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl overflow-hidden bg-white border border-neutral-200/70 shadow-sm hover:shadow-md transition"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={
                  item.imageUrl && item.imageUrl.trim() !== ""
                    ? item.imageUrl
                    : "https://placehold.co/800x600?text=Lana+with"
                }
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-3 md:p-4">
              <h3 className="text-[15px] md:text-base font-semibold text-neutral-800 line-clamp-2">{item.name}</h3>
              <p className="mt-1 hidden sm:line-clamp-2 text-[13px] text-neutral-500 md:block">{item.description}</p>
              <div className="mt-2 text-[14px] md:text-[15px] font-bold text-neutral-900">{item.price}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
