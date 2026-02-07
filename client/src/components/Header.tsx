/**
 * Header — Sticky navigation with LifeBack™ branding
 * Theme: Light pastel health — teal/mint accents, warm whites
 */
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "/about", label: "About" },
  { href: "/doctor-dashboard", label: "Doctor Dashboard" },
  { href: "/programs", label: "Programs" },
  { href: "/stakeholders", label: "Stakeholders" },
  { href: "/resources", label: "Resources" },
  { href: "/business-model", label: "Business Model" },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #E2E8F0",
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontWeight: 800,
            fontSize: "1.6rem",
            color: "#0D9488",
            textDecoration: "none",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          LifeBack<span style={{ color: "#F97316", fontSize: "0.85em" }}>™</span>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            gap: 6,
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {nav.map((item) => {
            const active = location === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: active ? 700 : 500,
                  color: active ? "#0D9488" : "#475569",
                  padding: "6px 12px",
                  borderRadius: 8,
                  background: active ? "#F0FDFA" : "transparent",
                  transition: "all 0.2s",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-menu-btn"
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#475569",
            padding: 4,
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav
          className="mobile-nav"
          style={{
            display: "none",
            flexDirection: "column",
            padding: "0.5rem 1.5rem 1rem",
            background: "white",
            borderTop: "1px solid #E2E8F0",
          }}
        >
          {nav.map((item) => {
            const active = location === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: active ? 700 : 500,
                  color: active ? "#0D9488" : "#475569",
                  padding: "10px 12px",
                  borderRadius: 8,
                  background: active ? "#F0FDFA" : "transparent",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .mobile-nav { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
