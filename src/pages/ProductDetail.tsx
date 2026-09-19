import { Link, useParams } from "react-router-dom"

import { products } from "../data/products"

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p className="text-slate-600">ไม่พบสินค้านี้</p>
        <Link to="/products" className="mt-4 inline-block text-brand-green">
          กลับไปหน้าสินค้า
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <Link to="/products" className="text-sm text-brand-green">
        ← กลับไปหน้าสินค้า
      </Link>
      <h1 className="mt-4 text-3xl font-bold text-brand-green-dark">{product.name}</h1>
      <p className="mt-1 text-lg font-medium text-brand-amber">{product.tagline}</p>
      <p className="mt-4 text-slate-600">{product.description}</p>
    </section>
  )
}
