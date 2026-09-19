import { Link, useParams } from "react-router-dom"

import { products } from "../data/products"

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <p className="text-ink-dim">ไม่พบสินค้านี้</p>
        <Link to="/products" className="mt-4 inline-block font-semibold text-brand-600">
          กลับไปหน้าสินค้า
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <Link to="/products" className="text-sm font-medium text-brand-600 hover:text-brand-700">
        ← กลับไปหน้าสินค้า
      </Link>

      <div className="mt-6 flex items-center gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 font-display text-2xl font-semibold text-white">
          {product.name[0]}
        </span>
        <div>
          <h1 className="font-display text-3xl font-semibold text-brand-900">{product.name}</h1>
          <p className="mt-0.5 text-lg font-medium text-brand-600">{product.tagline}</p>
        </div>
      </div>

      <p className="mt-6 max-w-xl text-ink-dim leading-relaxed">{product.description}</p>
    </section>
  )
}
