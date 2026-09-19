import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import { LogoMark } from "../ui/LogoMark"

const footerLinks = [
  { to: "/products", key: "nav.products" },
  { to: "/about", key: "nav.about" },
  { to: "/articles", key: "nav.articles" },
  { to: "/contact", key: "nav.contact" },
]

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-brand-950 text-white/70">
      <svg
        className="pointer-events-none absolute -left-16 bottom-[-60px] h-64 w-64 opacity-10"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <polygon points="100,0 200,60 200,160 100,200 0,160 0,60" fill="#8fe0b6" />
      </svg>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2">
        <div>
          <div className="flex items-center gap-2.5 font-display text-lg font-semibold text-white">
            <LogoMark />
            {t("footer.companyName")}
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">
            ผู้จัดจำหน่ายสินค้าทางการเกษตร ปุ๋ยน้ำ สารจับใบ ไคโตซาน และสารเสริมประสิทธิภาพพืช สำหรับเกษตรกรยุคใหม่
          </p>
        </div>

        <nav className="flex flex-col gap-2 sm:items-end">
          {footerLinks.map((link) => (
            <Link key={link.to} to={link.to} className="text-sm transition-colors hover:text-white">
              {t(link.key)}
            </Link>
          ))}
        </nav>
      </div>

      <div className="relative border-t border-white/10 px-4 py-5">
        <p className="mx-auto max-w-6xl text-xs text-white/45">
          © {year} {t("footer.companyName")}. {t("footer.rights")}.
        </p>
      </div>
    </footer>
  )
}
