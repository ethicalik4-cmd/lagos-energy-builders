import { Link } from "@tanstack/react-router";

import { SITE_EMAIL, SITE_EMAIL_HREF, SITE_LOCATION, SITE_NAVIGATION } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="site-footer__top">
          <Link to="/" className="brand-lockup" aria-label="ELATEV Engineering Company home">
            <span className="brand-mark" aria-hidden="true">
              <span className="brand-mark__letter">E</span>
            </span>
            <span className="brand-copy">
              <span className="brand-name">ELATEV</span>
              <span className="brand-subtitle">Engineering Company</span>
            </span>
          </Link>
          <nav className="site-footer__links" aria-label="Footer navigation">
            {SITE_NAVIGATION.map((item) => (
              <Link key={item.to} to={item.to}>{item.label}</Link>
            ))}
          </nav>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} ELATEV Engineering Company · {SITE_LOCATION}</span>
          <a href={SITE_EMAIL_HREF}>{SITE_EMAIL}</a>
        </div>
      </div>
    </footer>
  );
}