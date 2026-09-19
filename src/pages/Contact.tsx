import { useTranslation } from "react-i18next"

export function Contact() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-2xl font-bold text-slate-800">{t("nav.contact")}</h1>
      <form className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="ชื่อ-นามสกุล"
          className="w-full rounded-lg border border-slate-200 px-4 py-2"
        />
        <input
          type="tel"
          placeholder="เบอร์โทรศัพท์"
          className="w-full rounded-lg border border-slate-200 px-4 py-2"
        />
        <textarea
          placeholder="ข้อความ"
          rows={4}
          className="w-full rounded-lg border border-slate-200 px-4 py-2"
        />
        <button
          type="submit"
          className="rounded-full bg-brand-green px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-green-dark"
        >
          ส่งข้อความ
        </button>
      </form>
    </section>
  )
}
