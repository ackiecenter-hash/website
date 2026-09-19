import { useState } from "react"
import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"

import { portals } from "../../config/portals"
import { LanguageSwitcher } from "../ui/LanguageSwitcher"

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium hover:text-brand-green ${isActive ? "text-brand-green" : "text-slate-700"}`

const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  `block rounded-lg px-3 py-2 text-base font-medium hover:bg-slate-50 ${
    isActive ? "bg-brand-green/10 text-brand-green" : "text-slate-700"
  }`

const navItems = [
  { to: "/", key: "nav.home", end: true },
  { to: "/products", key: "nav.products" },
  { to: "/about", key: "nav.about" },
  { to: "/articles", key: "nav.articles" },
  { to: "/contact", key: "nav.contact" },
] as const

export function Header() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <NavLink to="/" className="text-lg font-bold text-brand-green-dark" onClick={() => setMenuOpen(false)}>
          Ackie Plus
        </NavLink>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass} end={"end" in item}>
              {t(item.key)}
            </NavLink>
          ))}
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

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "ปิดเมนู" : "เปิดเมนู"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-100 px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={mobileNavLinkClass}
                end={"end" in item}
                onClick={() => setMenuOpen(false)}
              >
                {t(item.key)}
              </NavLink>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2 sm:hidden">
            <a
              href={portals.dealer}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-brand-green px-3 py-2 text-center text-sm font-medium text-brand-green hover:bg-brand-green hover:text-white"
            >
              {t("nav.dealer")}
            </a>
            <a
              href={portals.staff}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-brand-green px-3 py-2 text-center text-sm font-medium text-white hover:bg-brand-green-dark"
            >
              {t("nav.staff")}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
