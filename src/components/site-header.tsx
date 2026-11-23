import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Cog, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE_EMAIL_HREF, SITE_NAVIGATION, SITE_NAME } from "@/lib/site-content";

interface SiteHeaderProps {
  overHero?: boolean;
}

export function SiteHeader({ overHero = false }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <header className={`site-header ${overHero ? "site-header--overlay" : "site-header--solid"}`}>
      <div className="site-container site-header__inner">
        <Link to="/" className="brand-lockup" aria-label={`${SITE_NAME} home`} onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <Cog />
            <span className="brand-mark__letter">E</span>
          </span>
          <span className="brand-copy">
            <span className="brand-name">ELATEV</span>
            <span className="brand-subtitle">Engineering Company</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          {SITE_NAVIGATION.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`site-nav__link ${pathname === item.to ? "is-active" : ""}`}
              aria-current={pathname === item.to ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button asChild className="site-contact-button site-header__desktop-contact">
          <a href={SITE_EMAIL_HREF}>
            Contact Our Team <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="site-menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="site-mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>

      <nav
        id="site-mobile-navigation"
        className={`site-mobile-nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {SITE_NAVIGATION.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={pathname === item.to ? "is-active" : ""}
            aria-current={pathname === item.to ? "page" : undefined}
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Button asChild className="site-contact-button">
          <a href={SITE_EMAIL_HREF} tabIndex={menuOpen ? 0 : -1}>
            Contact Our Team <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
      </nav>
    </header>
  );
}