import { useEffect, useRef, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { NAV_LINKS, PROFILE } from "../content/data";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "../hooks/useTheme";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, toggleTheme] = useTheme();
  const active = useActiveSection(SECTION_IDS);
  const menuBtn = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") { setOpen(false); menuBtn.current?.focus(); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const nextTheme = theme === "dark" ? "terang" : "gelap";

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container site-header__bar">
        <a href="#top" className="wordmark" aria-label={`${PROFILE.username}.fme, ke atas halaman`}>
          {PROFILE.username}<span className="wordmark__dot">.</span>riqqs
        </a>

        <nav id="site-nav" aria-label="Utama" className={`site-nav${open ? " is-open" : ""}`}>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="site-nav__link" aria-current={active === l.href.slice(1) ? "location" : undefined} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li className="site-nav__contact">
              <a href="#kontak" className="site-nav__link" onClick={() => setOpen(false)}>Kontak</a>
            </li>
          </ul>
        </nav>

        <div className="site-header__actions">
          <button type="button" className="icon-btn" onClick={toggleTheme} aria-label={`Ganti ke tema ${nextTheme}`}>
            {theme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <a href="#kontak" className="btn btn--small btn--primary site-header__cta">Hubungi saya</a>
          <button ref={menuBtn} type="button" className="icon-btn menu-btn" aria-expanded={open} aria-controls="site-nav" aria-label={open ? "Tutup menu" : "Buka menu"} onClick={() => setOpen((v) => !v)}>
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
