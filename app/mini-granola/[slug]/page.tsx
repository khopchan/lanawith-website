import { notFound } from "next/navigation"
import CatalogProductDetail from "@/components/catalog-product-detail"
import { miniGranolaSlugs, getMiniGranolaProduct } from "@/lib/catalog-products"

export function generateStaticParams() {
  return miniGranolaSlugs.map((slug) => ({ slug }))
}

export default async function MiniGranolaProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getMiniGranolaProduct(slug)
  if (!product) {
    notFound()
  }

  return <CatalogProductDetail product={product} />
}
