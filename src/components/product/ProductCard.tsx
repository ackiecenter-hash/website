import { Link } from "react-router-dom"

import type { Product } from "../../data/products"

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="block rounded-xl border border-slate-100 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <h3 className="text-lg font-bold text-brand-green-dark">{product.name}</h3>
      <p className="mt-1 text-sm font-medium text-brand-amber">{product.tagline}</p>
      <p className="mt-2 text-sm text-slate-600">{product.description}</p>
    </Link>
  )
}
