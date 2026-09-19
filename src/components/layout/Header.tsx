import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"

import { portals } from "../../config/portals"
import { LanguageSwitcher } from "../ui/LanguageSwitcher"

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium hover:text-brand-green ${isActive ? "text-brand-green" : "text-slate-700"}`

export function Header() {
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <NavLink to="/" className="text-lg font-bold text-brand-green-dark">
          Ackie Plus
        </NavLink>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/" className={navLinkClass} end>
            {t("nav.home")}
          </NavLink>
          <NavLink to="/products" className={navLinkClass}>
            {t("nav.products")}
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            {t("nav.about")}
          </NavLink>
          <NavLink to="/articles" className={navLinkClass}>
            {t("nav.articles")}
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            {t("nav.contact")}
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={portals.dealer}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-brand-green px-3 py-1.5 text-sm font-medium text-brand-green hover:bg-brand-green hover:text-white sm:inline-block"
          >
            {t("nav.dealer")}
          </a>
          <a
            href={portals.staff}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-brand-green px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-green-dark sm:inline-block"
          >
            {t("nav.staff")}
          </a>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
