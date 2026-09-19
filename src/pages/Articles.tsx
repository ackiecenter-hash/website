import { useTranslation } from "react-i18next"

export function Articles() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-2xl font-bold text-slate-800">{t("nav.articles")}</h1>
      <p className="mt-4 text-slate-600">เร็วๆ นี้</p>
    </section>
  )
}
