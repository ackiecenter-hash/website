import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import { ProductCard } from "../components/product/ProductCard"
import { products } from "../data/products"

const stats = [
  { value: "6", label: "ผลิตภัณฑ์หลัก" },
  { value: "77", label: "จังหวัดที่จัดส่งถึง" },
  { value: "1000+", label: "ตัวแทน/ร้านค้าพันธมิตร" },
]

export function Home() {
  const { t } = useTranslation()

  return (
    <div>
      <section className="relative overflow-hidden bg-brand-950">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <svg
          className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] opacity-30 sm:opacity-50"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="200" cy="200" r="200" fill="url(#hero-blob)" />
          <defs>
            <radialGradient id="hero-blob" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 200) rotate(90) scale(200)">
              <stop stopColor="#2f9e63" />
              <stop offset="1" stopColor="#0a2419" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          className="pointer-events-none absolute -bottom-32 left-[-60px] h-[320px] w-[320px] opacity-20"
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden="true"
        >
          <polygon points="100,0 200,60 200,160 100,200 0,160 0,60" fill="#8fe0b6" />
        </svg>

        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-300/30 bg-white/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-brand-300">
              เกษตรคลับ · Ackie Plus
            </span>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {t("home.heroTitle")}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">{t("home.heroSubtitle")}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/products"
                className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-brand-950 shadow-lg shadow-brand-500/20 transition-transform hover:-translate-y-0.5 hover:bg-brand-300"
              >
                {t("home.cta")}
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {t("nav.contact")}
              </Link>
            </div>
          </div>

          <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-semibold text-white sm:text-4xl">{stat.value}</dd>
                <p className="mt-1 text-sm text-white/55">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">Featured</span>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
              {t("home.featuredProducts")}
            </h2>
          </div>
          <Link
            to="/products"
            className="hidden text-sm font-semibold text-brand-700 hover:text-brand-600 sm:inline-block"
          >
            {t("home.cta")} →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
