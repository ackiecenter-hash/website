import { useTranslation } from "react-i18next"

export function Articles() {
  const { t } = useTranslation()

  return (
    <section>
      <div className="border-b border-black/5 bg-brand-50/60 px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">Insights</span>
          <h1 className="mt-2 font-display text-3xl font-semibold text-brand-900 sm:text-4xl">{t("nav.articles")}</h1>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-14">
        <p className="text-ink-dim">เร็วๆ นี้</p>
      </div>
    </section>
  )
}
