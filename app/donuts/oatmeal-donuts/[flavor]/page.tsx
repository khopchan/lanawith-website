import { notFound } from "next/navigation"
import CatalogProductDetail from "@/components/catalog-product-detail"
import { donutFlavorSlugs, getDonutFlavorCatalogProduct } from "@/lib/catalog-products"

export function generateStaticParams() {
  return donutFlavorSlugs.map((flavor) => ({ flavor }))
}

export default async function DonutFlavorPage({
  params,
}: {
  params: Promise<{ flavor: string }>
}) {
  const { flavor } = await params
  const product = getDonutFlavorCatalogProduct(flavor)
  if (!product) {
    notFound()
  }

  return <CatalogProductDetail product={product} />
}
