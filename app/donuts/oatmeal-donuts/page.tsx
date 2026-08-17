"use client"

import DonutProductDetail from "@/components/donut-product-detail"
import { donutSetProduct } from "@/lib/donut-products"

export default function OatmealDonutsDetailPage() {
  return <DonutProductDetail product={donutSetProduct} />
}
