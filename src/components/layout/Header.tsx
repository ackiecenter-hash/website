import { useState } from "react"
import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"

import { portals } from "../../config/portals"
import { LanguageSwitcher } from "../ui/LanguageSwitcher"
import { LogoMark } from "../ui/LogoMark"

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium transition-colors hover:text-brand-600 ${isActive ? "text-brand-700" : "text-ink/70"}`

const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  `block rounded-xl px-3 py-2.5 text-base font-medium transition-colors ${
    isActive ? "bg-brand-50 text-brand-700" : "text-ink/80 hover:bg-sand-dark"
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
    <header className="sticky top-0 z-40 border-b border-black/5 bg-sand/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5">
        <NavLink
          to="/"
          className="flex items-center gap-2.5 font-display text-lg font-semibold text-brand-900"
          onClick={() => setMenuOpen(false)}
        >
          <LogoMark />
          Ackie Plus
        </NavLink>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass} end={"end" in item}>
              {t(item.key)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={portals.dealer}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-brand-600/30 px-3.5 py-1.5 text-sm font-medium text-brand-700 transition-colors hover:border-brand-600 hover:bg-brand-50 sm:inline-block"
          >
            {t("nav.dealer")}
          </a>
          <a
            href={portals.staff}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-brand-600 px-3.5 py-1.5 text-sm font-medium text-white shadow-sm shadow-brand-600/20 transition-colors hover:bg-brand-700 sm:inline-block"
          >
            {t("nav.staff")}
          </a>
          <LanguageSwitcher />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "ปิดเมนู" : "เปิดเมนู"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 text-ink/70 md:hidden"
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
        <div className="border-t border-black/5 px-4 pb-4 pt-2 md:hidden">
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
              className="rounded-xl border border-brand-600/30 px-3 py-2.5 text-center text-sm font-medium text-brand-700 hover:bg-brand-50"
            >
              {t("nav.dealer")}
            </a>
            <a
              href={portals.staff}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-brand-600 px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-brand-700"
            >
              {t("nav.staff")}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
