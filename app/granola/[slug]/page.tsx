import { notFound } from "next/navigation"
import CatalogProductDetail from "@/components/catalog-product-detail"
import { granolaSlugs, getGranolaProduct } from "@/lib/catalog-products"

export function generateStaticParams() {
  return granolaSlugs.map((slug) => ({ slug }))
}

export default async function GranolaProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getGranolaProduct(slug)
  if (!product) {
    notFound()
  }

  return <CatalogProductDetail product={product} />
}
