"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#why-us", label: "Why Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container header-inner">
          <a
            href="#home"
            className="logo text-gradient"
            aria-label="Trenquix home"
          >
            Trenquix
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="header-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="#contact"
              className="btn-primary header-cta"
              style={{ padding: "10px 22px" }}
            >
              Get a Free Quote
            </a>
            <button
              type="button"
              className="menu-btn"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="material-symbols-outlined">
                {isMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen ? (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-link"
              style={{ animationDelay: `${0.08 * (index + 1)}s` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Get a Free Quote
          </a>
        </nav>
      ) : null}
    </>
  );
}
