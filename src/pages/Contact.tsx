import { useTranslation } from "react-i18next"

export function Contact() {
  const { t } = useTranslation()

  return (
    <section>
      <div className="border-b border-black/5 bg-brand-50/60 px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">Get in touch</span>
          <h1 className="mt-2 font-display text-3xl font-semibold text-brand-900 sm:text-4xl">{t("nav.contact")}</h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-14">
        <form className="space-y-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8">
          <div>
            <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-ink">
              ชื่อ-นามสกุล
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="ชื่อ-นามสกุล"
              className="w-full rounded-xl border border-black/10 px-4 py-2.5 outline-none transition-colors focus:border-brand-500"
            />
          </div>
          <div>
            <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-ink">
              เบอร์โทรศัพท์
            </label>
            <input
              id="contact-phone"
              type="tel"
              placeholder="เบอร์โทรศัพท์"
              className="w-full rounded-xl border border-black/10 px-4 py-2.5 outline-none transition-colors focus:border-brand-500"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-ink">
              ข้อความ
            </label>
            <textarea
              id="contact-message"
              placeholder="ข้อความ"
              rows={4}
              className="w-full rounded-xl border border-black/10 px-4 py-2.5 outline-none transition-colors focus:border-brand-500"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-600/20 transition-colors hover:bg-brand-700"
          >
            ส่งข้อความ
          </button>
        </form>
      </div>
    </section>
  )
}
