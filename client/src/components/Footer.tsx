/**
 * Footer — LifeBack™ site footer
 * Theme: Light pastel health — teal/mint accents
 */
import { Link } from "wouter";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#F8FAFC",
        borderTop: "1px solid #E2E8F0",
        fontFamily: "'DM Sans', system-ui, sans-serif",
        padding: "3rem 1.5rem 2rem",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ fontWeight: 800, fontSize: "1.4rem", color: "#0D9488", marginBottom: 8 }}>
              LifeBack<span style={{ color: "#F97316" }}>™</span>
            </div>
            <p style={{ color: "#64748B", fontSize: "0.875rem", lineHeight: 1.6, maxWidth: 280 }}>
              AI-powered precision psychiatry platform. Objective mental-health decision support for hospitals and clinicians.
            </p>
          </div>

          {/* Product */}
          <div>
            <div style={{ fontWeight: 700, color: "#1E293B", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>
              Product
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { href: "/doctor-dashboard", label: "Doctor Dashboard" },
                { href: "/programs", label: "Programs" },
                { href: "/resources", label: "Resources" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{ color: "#64748B", textDecoration: "none", fontSize: "0.875rem" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div style={{ fontWeight: 700, color: "#1E293B", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>
              Company
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { href: "/about", label: "About" },
                { href: "/stakeholders", label: "Stakeholders" },
                { href: "/business-model", label: "Business Model" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{ color: "#64748B", textDecoration: "none", fontSize: "0.875rem" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontWeight: 700, color: "#1E293B", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>
              Contact
            </div>
            <p style={{ color: "#64748B", fontSize: "0.875rem", lineHeight: 1.6 }}>
              Sequoia Insilico Pvt. Ltd.<br />
              <a href="https://sequoiainsilico.com/" target="_blank" rel="noopener" style={{ color: "#0D9488", textDecoration: "none" }}>
                sequoiainsilico.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #E2E8F0",
            paddingTop: "1.25rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ color: "#94A3B8", fontSize: "0.8rem", margin: 0 }}>
            © {new Date().getFullYear()} LifeBack™ — Sequoia Insilico Pvt. Ltd. All rights reserved.
          </p>
          <p style={{ color: "#94A3B8", fontSize: "0.8rem", margin: 0, display: "flex", alignItems: "center", gap: 4 }}>
            Made with <Heart size={12} style={{ color: "#F97316" }} /> for better mental health
          </p>
        </div>
      </div>
    </footer>
  );
}
