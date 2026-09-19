import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import { ProductCard } from "../components/product/ProductCard"
import { products } from "../data/products"

export function Home() {
  const { t } = useTranslation()

  return (
    <div>
      <section className="bg-gradient-to-br from-brand-green-dark to-brand-green px-4 py-20 text-center text-white">
        <h1 className="mx-auto max-w-3xl text-3xl font-bold sm:text-4xl">{t("home.heroTitle")}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-100">{t("home.heroSubtitle")}</p>
        <Link
          to="/products"
          className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-green-dark hover:bg-slate-100"
        >
          {t("home.cta")}
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-8 text-2xl font-bold text-slate-800">{t("home.featuredProducts")}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
