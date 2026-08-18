import { notFound } from "next/navigation"
import CatalogProductDetail from "@/components/catalog-product-detail"
import { cookieSlugs, getCookieProduct } from "@/lib/catalog-products"

export function generateStaticParams() {
  return cookieSlugs.map((slug) => ({ slug }))
}

export default async function CookieProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getCookieProduct(slug)
  if (!product) {
    notFound()
  }

  return <CatalogProductDetail product={product} />
}
