import { notFound } from "next/navigation"
import DonutProductDetail from "@/components/donut-product-detail"
import { donutFlavorIds, getDonutFlavor } from "@/lib/donut-products"

export function generateStaticParams() {
  return donutFlavorIds.map((flavor) => ({ flavor }))
}

export default async function DonutFlavorPage({
  params,
}: {
  params: Promise<{ flavor: string }>
}) {
  const { flavor } = await params
  const product = getDonutFlavor(flavor)
  if (!product) {
    notFound()
  }

  return <DonutProductDetail product={product} />
}
