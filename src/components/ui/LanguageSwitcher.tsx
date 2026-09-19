import { useTranslation } from "react-i18next"

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggle = (lng: "th" | "en") => {
    void i18n.changeLanguage(lng)
  }

  return (
    <div className="flex gap-1 text-sm font-medium">
      <button
        type="button"
        onClick={() => toggle("th")}
        className={`px-2 py-1 rounded ${i18n.language === "th" ? "bg-brand-green text-white" : "text-slate-500"}`}
      >
        ไทย
      </button>
      <button
        type="button"
        onClick={() => toggle("en")}
        className={`px-2 py-1 rounded ${i18n.language === "en" ? "bg-brand-green text-white" : "text-slate-500"}`}
      >
        EN
      </button>
    </div>
  )
}
