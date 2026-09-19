import { useTranslation } from "react-i18next"

import { ProductCard } from "../components/product/ProductCard"
import { products } from "../data/products"

export function Products() {
  const { t } = useTranslation()

  return (
    <section>
      <div className="border-b border-black/5 bg-brand-50/60 px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">Catalog</span>
          <h1 className="mt-2 font-display text-3xl font-semibold text-brand-900 sm:text-4xl">
            {t("nav.products")}
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
