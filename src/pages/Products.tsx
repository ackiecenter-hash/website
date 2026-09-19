import { useTranslation } from "react-i18next"

import { ProductCard } from "../components/product/ProductCard"
import { products } from "../data/products"

export function Products() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="mb-8 text-2xl font-bold text-slate-800">{t("nav.products")}</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  )
}
