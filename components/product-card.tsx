export type ProductCardItem = {
  name: string
  imageUrl?: string
  description?: string
  price?: string
  href?: string
}

export function ProductCard({ item }: { item: ProductCardItem }) {
  return (
    <a
      href={item.href || "https://lanagranola.base.shop/"}
      target={item.href ? undefined : "_blank"}
      rel={item.href ? undefined : "noopener noreferrer"}
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
        {item.description ? (
          <p className="mt-1 hidden sm:line-clamp-2 text-[13px] text-neutral-500 md:block">{item.description}</p>
        ) : null}
        {item.price ? (
          <div className="mt-2 text-[14px] md:text-[15px] font-bold text-neutral-900">{item.price}</div>
        ) : null}
      </div>
    </a>
  )
}

export function ProductCardGrid({ items }: { items: ProductCardItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
      {items.map((item, idx) => (
        <ProductCard key={item.href || `${item.name}-${idx}`} item={item} />
      ))}
    </div>
  )
}
