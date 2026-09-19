import { Link } from "react-router-dom"

import type { Product } from "../../data/products"

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-600/20 hover:shadow-xl hover:shadow-brand-900/10"
    >
      <span
        aria-hidden="true"
        className="absolute right-0 top-0 h-24 w-24 -translate-y-1/2 translate-x-1/3 rounded-full bg-brand-50 transition-transform duration-300 group-hover:scale-125"
      />
      <div className="relative">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 font-display text-lg font-semibold text-white">
          {product.name[0]}
        </span>
        <h3 className="mt-4 font-display text-lg font-semibold text-brand-900">{product.name}</h3>
        <p className="mt-1 text-sm font-medium text-brand-600">{product.tagline}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-dim">{product.description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
          ดูรายละเอียด
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </Link>
  )
}
