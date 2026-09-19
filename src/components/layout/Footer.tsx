import { useTranslation } from "react-i18next"

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="mt-16 border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-500">
        <p className="font-semibold text-slate-700">{t("footer.companyName")}</p>
        <p className="mt-1">
          © {year} {t("footer.companyName")}. {t("footer.rights")}.
        </p>
      </div>
    </footer>
  )
}
