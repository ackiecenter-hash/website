import { useTranslation } from "react-i18next"

export function About() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-2xl font-bold text-slate-800">{t("nav.about")}</h1>
      <p className="mt-4 text-slate-600">{t("footer.companyName")}</p>
    </section>
  )
}
