"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Hoja de vida" },
  { href: "/diplomas", label: "Diplomas y cursos" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Navegación principal">
        <div className="site-nav-inner">
          <Link
            className="site-brand"
            href="/"
            aria-label="Camilo Torrecillas Ardila, inicio"
            onClick={() => setMenuOpen(false)}
          >
            <span className="brand-mark" aria-hidden="true">CT</span>
            <span>Camilo Torrecillas</span>
          </Link>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-toggle-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="sr-only">{menuOpen ? "Cerrar menú" : "Abrir menú"}</span>
          </button>

          <div
            className={`site-nav-links${menuOpen ? " is-open" : ""}`}
            id="primary-navigation"
          >
            {links.map(({ href, label }) => {
              const active = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className={active ? "nav-link is-active" : "nav-link"}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
