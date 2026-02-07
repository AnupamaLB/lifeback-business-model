/**
 * BusinessModel — Finance, Pricing, GTM, Channel Partners
 * Theme: Light pastel health — teal/mint/sage
 */
import { useState, useEffect, useRef } from "react";
import {
  Building2, GraduationCap, Briefcase, Smartphone, FlaskConical, Dna, Monitor,
  Users, Handshake, Shield, TrendingUp, ArrowRight, Hospital, CreditCard,
  BarChart3, Target, Globe, Zap, Heart, Brain, Activity,
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend, AreaChart, Area,
} from "recharts";

/* ─── Color Palette ─── */
const C = {
  teal: "#0D9488",
  tealLight: "#14B8A6",
  tealPastel: "#CCFBF1",
  emerald: "#059669",
  emeraldPastel: "#D1FAE5",
  blue: "#2563EB",
  bluePastel: "#DBEAFE",
  purple: "#7C3AED",
  purplePastel: "#EDE9FE",
  orange: "#F97316",
  orangePastel: "#FED7AA",
  rose: "#E11D48",
  rosePastel: "#FFE4E6",
  amber: "#D97706",
  amberPastel: "#FEF3C7",
  slate900: "#0F172A",
  slate700: "#334155",
  slate500: "#64748B",
  slate300: "#CBD5E1",
  slate200: "#E2E8F0",
  white: "#FFFFFF",
  bg: "#F8FAFB",
  mintBg: "#F0FDFA",
  blueBg: "#E0F2FE",
  lavBg: "#F5F3FF",
};

/* ─── Data ─── */
const revenueData = [
  { year: "Year 3", Hospitals: 7.5, Companies: 3.0, Colleges: 2.25, Patients: 1.8, "Pharma/R&D": 0.75 },
  { year: "Year 4", Hospitals: 18.0, Companies: 6.0, Colleges: 4.5, Patients: 4.8, "Pharma/R&D": 1.5 },
  { year: "Year 5", Hospitals: 30.0, Companies: 9.0, Colleges: 6.75, Patients: 9.0, "Pharma/R&D": 2.25 },
  { year: "Year 6", Hospitals: 42.0, Companies: 12.0, Colleges: 9.0, Patients: 14.4, "Pharma/R&D": 3.0 },
  { year: "Year 7", Hospitals: 52.5, Companies: 15.0, Colleges: 11.25, Patients: 21.6, "Pharma/R&D": 3.75 },
];

const growthData = [
  { year: "Year 3", revenue: 15.3 },
  { year: "Year 4", revenue: 34.8 },
  { year: "Year 5", revenue: 57.0 },
  { year: "Year 6", revenue: 80.4 },
  { year: "Year 7", revenue: 104.1 },
];

const pricingTiers = [
  { icon: <Hospital size={24} />, segment: "Hospitals", product: "Hospital SaaS Platform", price: "₹30K–50K/mo", unit: "per department", share: "50%", color: C.teal, bg: C.mintBg, border: "#99F6E4" },
  { icon: <GraduationCap size={24} />, segment: "Education", product: "Campus Mental Health Suite", price: "₹2–4L/yr", unit: "per institution", share: "15%", color: C.blue, bg: C.bluePastel, border: "#93C5FD" },
  { icon: <Briefcase size={24} />, segment: "Corporate", product: "Employee Mental Health", price: "₹5–10L/yr", unit: "per company", share: "20%", color: C.purple, bg: C.purplePastel, border: "#C4B5FD" },
  { icon: <Monitor size={24} />, segment: "Tele-Health", product: "White-label API", price: "₹50K–1L/mo", unit: "+ revenue share", share: "—", color: C.emerald, bg: C.emeraldPastel, border: "#A7F3D0" },
  { icon: <Smartphone size={24} />, segment: "Patients", product: "Continuous Care App", price: "₹999/mo", unit: "or ₹9,999/yr", share: "10%", color: C.orange, bg: C.orangePastel, border: "#FDBA74" },
  { icon: <FlaskConical size={24} />, segment: "DaaS", product: "De-identified Data", price: "₹20–50L", unit: "per project", share: "5%", color: C.rose, bg: C.rosePastel, border: "#FDA4AF" },
  { icon: <Dna size={24} />, segment: "Genomics+", product: "PRS/PGx Reports", price: "₹5–8K", unit: "per report (Year 5+)", share: "Future", color: C.amber, bg: C.amberPastel, border: "#FCD34D" },
];

const gtmPhases = [
  {
    phase: "Phase 1",
    title: "Clinical Validation",
    period: "M0 – M18",
    color: C.teal,
    bg: C.mintBg,
    border: "#99F6E4",
    items: ["IRB-approved trials at RML Hospital", "97% accuracy validation", "CDSCO regulatory pathway mapping", "Patent filing & IP protection"],
  },
  {
    phase: "Phase 2",
    title: "Commercial Launch",
    period: "M18 – M36",
    color: C.blue,
    bg: C.bluePastel,
    border: "#93C5FD",
    items: ["Hospital SaaS deployment (5–10 hospitals)", "Corporate wellness pilot programs", "Campus mental health partnerships", "Direct sales team buildout"],
  },
  {
    phase: "Phase 3",
    title: "Scale & Expand",
    period: "M36 – M60+",
    color: C.purple,
    bg: C.purplePastel,
    border: "#C4B5FD",
    items: ["50+ hospital deployments", "White-label API partnerships", "DaaS for Pharma & research", "Regional → Global expansion"],
  },
];

/* ─── Animated Counter ─── */
function AnimatedCounter({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1500;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800 }}>
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

/* ─── Section Heading ─── */
function SectionHeading({ badge, title, subtitle }: { badge: string; title: string; subtitle: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
      <div
        style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          background: C.mintBg, border: `1px solid #99F6E4`,
          borderRadius: 999, padding: "5px 14px", marginBottom: 12,
          fontSize: "0.75rem", fontWeight: 700, color: C.teal,
          textTransform: "uppercase", letterSpacing: "0.06em",
        }}
      >
        {badge}
      </div>
      <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: C.slate900, marginBottom: 8, letterSpacing: "-0.02em" }}>
        {title}
      </h2>
      <p style={{ color: C.slate500, fontSize: "1rem", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
        {subtitle}
      </p>
    </div>
  );
}

/* ─── Main Component ─── */
export default function BusinessModel() {
  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>

      {/* ═══ HERO ═══ */}
      <section
        style={{
          background: `linear-gradient(135deg, ${C.mintBg} 0%, ${C.blueBg} 50%, ${C.lavBg} 100%)`,
          padding: "4rem 1.5rem 3rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: -100, right: -100, width: 300, height: 300, borderRadius: "50%", background: "rgba(13,148,136,0.04)" }} />
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 250, height: 250, borderRadius: "50%", background: "rgba(37,99,235,0.03)" }} />

        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: C.white, border: `1px solid ${C.slate200}`,
              borderRadius: 999, padding: "6px 16px", marginBottom: 20,
              fontSize: "0.8rem", fontWeight: 600, color: C.teal,
            }}
          >
            <BarChart3 size={14} />
            Business & Finance Model
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 4.5vw, 2.8rem)",
              fontWeight: 800,
              color: C.slate900,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              marginBottom: 16,
            }}
          >
            LifeBack<span style={{ color: C.orange }}>™</span> Revenue Architecture
          </h1>

          <p style={{ color: C.slate500, fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 620, margin: "0 auto 36px" }}>
            Multi-layered B2B and B2B2C hybrid model diversifying revenue across clinical, corporate, and research segments.
          </p>

          {/* Key metrics */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 16,
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            {[
              { value: 30, prefix: "₹", suffix: " Cr", label: "Pre-Money Valuation" },
              { value: 15, prefix: "$", suffix: "B TAM", label: "Total Addressable Mkt" },
              { value: 83, prefix: "$", suffix: "M SOM", label: "5-Year Target" },
              { value: 104, prefix: "₹", suffix: " Cr", label: "Year 7 Revenue" },
            ].map((m) => (
              <div
                key={m.label}
                style={{
                  background: C.white,
                  borderRadius: 14,
                  padding: "1.25rem 1rem",
                  border: `1px solid ${C.slate200}`,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ fontSize: "1.5rem", color: C.teal }}>
                  <AnimatedCounter target={m.value} prefix={m.prefix} suffix={m.suffix} />
                </div>
                <div style={{ fontSize: "0.7rem", color: C.slate500, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: 4 }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BUSINESS MODEL OVERVIEW ═══ */}
      <section style={{ padding: "4rem 1.5rem", background: C.bg }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeading badge="Revenue Segments" title="5-Segment Revenue Architecture" subtitle="Diversified across hospitals, corporates, education, patients, and research." />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {[
              { icon: <Hospital size={24} />, title: "Hospitals", share: "50%", desc: "AI Assessment Software for Doctors — Monthly SaaS subscription per department", color: C.teal, bg: C.mintBg, border: "#99F6E4", width: 50 },
              { icon: <Briefcase size={24} />, title: "Companies", share: "20%", desc: "Employee Mental Health Screening — Annual corporate wellness license", color: C.blue, bg: C.bluePastel, border: "#93C5FD", width: 20 },
              { icon: <GraduationCap size={24} />, title: "Colleges", share: "15%", desc: "Student Mental Health Program — Annual campus license", color: C.purple, bg: C.purplePastel, border: "#C4B5FD", width: 15 },
              { icon: <Smartphone size={24} />, title: "Patients", share: "10%", desc: "Personal Care App (after screening) — Monthly subscription", color: C.orange, bg: C.orangePastel, border: "#FDBA74", width: 10 },
              { icon: <FlaskConical size={24} />, title: "Pharma / R&D", share: "5%", desc: "Anonymous Health Data — Project-based fee for research", color: C.rose, bg: C.rosePastel, border: "#FDA4AF", width: 5 },
            ].map((seg) => (
              <div
                key={seg.title}
                style={{
                  background: C.white,
                  borderRadius: 16,
                  padding: "1.75rem",
                  border: `1px solid ${C.slate200}`,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${seg.color}12`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: seg.color }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                  <div
                    style={{
                      width: 48, height: 48, borderRadius: 12,
                      background: seg.bg, border: `1px solid ${seg.border}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: seg.color,
                    }}
                  >
                    {seg.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 800, fontSize: "1.4rem", color: seg.color,
                    }}
                  >
                    {seg.share}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: C.slate900, marginBottom: 8 }}>{seg.title}</h3>
                <p style={{ color: C.slate500, fontSize: "0.85rem", lineHeight: 1.6, marginBottom: 14 }}>{seg.desc}</p>
                {/* Progress bar */}
                <div style={{ height: 6, background: "#F1F5F9", borderRadius: 999, overflow: "hidden" }}>
                  <div style={{ width: `${seg.width}%`, height: "100%", background: seg.color, borderRadius: 999, transition: "width 1s ease" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING MODEL ═══ */}
      <section style={{ padding: "4rem 1.5rem", background: C.white }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeading badge="Pricing" title="Pricing Model" subtitle="Flexible pricing across all segments — from monthly SaaS to project-based fees." />

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 700 }}>
              <thead>
                <tr style={{ background: "#F8FAFC" }}>
                  {["Segment", "Product / Service", "Price", "Unit", "Revenue Share"].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "12px 16px", textAlign: "left",
                        fontSize: "0.75rem", fontWeight: 700, color: C.slate500,
                        textTransform: "uppercase", letterSpacing: "0.05em",
                        borderBottom: `2px solid ${C.slate200}`,
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricingTiers.map((t) => (
                  <tr
                    key={t.segment}
                    style={{ borderBottom: `1px solid ${C.slate200}`, transition: "background 0.15s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#FAFAFA"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                  >
                    <td style={{ padding: "14px 16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div
                          style={{
                            width: 36, height: 36, borderRadius: 10,
                            background: t.bg, border: `1px solid ${t.border}`,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            color: t.color, flexShrink: 0,
                          }}
                        >
                          {t.icon}
                        </div>
                        <span style={{ fontWeight: 700, color: C.slate900, fontSize: "0.9rem" }}>{t.segment}</span>
                      </div>
                    </td>
                    <td style={{ padding: "14px 16px", color: C.slate700, fontSize: "0.85rem" }}>{t.product}</td>
                    <td style={{ padding: "14px 16px" }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: t.color, fontSize: "0.9rem" }}>
                        {t.price}
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", color: C.slate500, fontSize: "0.85rem" }}>{t.unit}</td>
                    <td style={{ padding: "14px 16px" }}>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontWeight: 700, fontSize: "0.85rem", color: t.color,
                          background: t.bg, padding: "3px 10px", borderRadius: 999,
                        }}
                      >
                        {t.share}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ GO-TO-MARKET ═══ */}
      <section style={{ padding: "4rem 1.5rem", background: C.bg }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeading badge="Go-to-Market" title="3-Phase GTM Strategy" subtitle="Phased rollout from clinical validation to global scale." />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginBottom: 40 }}>
            {gtmPhases.map((p) => (
              <div
                key={p.phase}
                style={{
                  background: C.white,
                  borderRadius: 16,
                  padding: "2rem",
                  border: `1px solid ${C.slate200}`,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: p.color }} />
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span
                    style={{
                      fontSize: "0.7rem", fontWeight: 800, color: p.color,
                      background: p.bg, border: `1px solid ${p.border}`,
                      padding: "4px 12px", borderRadius: 999,
                      textTransform: "uppercase", letterSpacing: "0.06em",
                    }}
                  >
                    {p.phase}
                  </span>
                  <span style={{ fontSize: "0.8rem", color: C.slate500, fontFamily: "'JetBrains Mono', monospace" }}>{p.period}</span>
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: C.slate900, marginBottom: 14 }}>{p.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {p.items.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, color: C.slate700, fontSize: "0.85rem", lineHeight: 1.5 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: p.color, flexShrink: 0, marginTop: 6 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Market Size Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { label: "TAM", value: "$12–15B", desc: "Total Addressable Market (India)", color: C.teal, bg: C.mintBg },
              { label: "SAM", value: "$8.3B", desc: "Serviceable Addressable Market", color: C.blue, bg: C.bluePastel },
              { label: "SOM", value: "$83M", desc: "5-Year Target (~1% of SAM)", color: C.purple, bg: C.purplePastel },
            ].map((m) => (
              <div
                key={m.label}
                style={{
                  background: C.white,
                  borderRadius: 14,
                  padding: "1.5rem",
                  border: `1px solid ${C.slate200}`,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "0.7rem", fontWeight: 800, color: m.color,
                    background: m.bg, display: "inline-block",
                    padding: "3px 12px", borderRadius: 999, marginBottom: 10,
                    textTransform: "uppercase", letterSpacing: "0.06em",
                  }}
                >
                  {m.label}
                </div>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: m.color, fontFamily: "'JetBrains Mono', monospace", marginBottom: 4 }}>
                  {m.value}
                </div>
                <div style={{ fontSize: "0.8rem", color: C.slate500 }}>{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CHANNEL PARTNERS ═══ */}
      <section style={{ padding: "4rem 1.5rem", background: C.white }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeading badge="Distribution" title="Channel Partner Strategy" subtitle="60/40 split between direct sales and white-label partnerships." />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
            {/* Direct */}
            <div
              style={{
                background: C.white, borderRadius: 16, padding: "2rem",
                border: `1px solid ${C.slate200}`, boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                position: "relative", overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: C.teal }} />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: C.mintBg, border: "1px solid #99F6E4", display: "flex", alignItems: "center", justifyContent: "center", color: C.teal }}>
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: C.slate900, margin: 0 }}>Direct Sales</h3>
                    <p style={{ fontSize: "0.8rem", color: C.slate500, margin: 0 }}>Primary channel</p>
                  </div>
                </div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: "1.6rem", color: C.teal }}>60%</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: <Building2 size={16} />, text: "Hospital Software Partners (EMR/EHR integrations)" },
                  { icon: <Users size={16} />, text: "Key Opinion Leaders (KOLs) in psychiatry" },
                  { icon: <Globe size={16} />, text: "Medical Conferences & Associations" },
                ].map((item) => (
                  <li key={item.text} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: C.slate700, fontSize: "0.9rem", lineHeight: 1.5 }}>
                    <div style={{ color: C.teal, flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* White-label */}
            <div
              style={{
                background: C.white, borderRadius: 16, padding: "2rem",
                border: `1px solid ${C.slate200}`, boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                position: "relative", overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: C.blue }} />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: C.bluePastel, border: "1px solid #93C5FD", display: "flex", alignItems: "center", justifyContent: "center", color: C.blue }}>
                    <Handshake size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: C.slate900, margin: 0 }}>White-Label / Channel</h3>
                    <p style={{ fontSize: "0.8rem", color: C.slate500, margin: 0 }}>Partnership channel</p>
                  </div>
                </div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: "1.6rem", color: C.blue }}>40%</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: <Briefcase size={16} />, text: "Corporate Health Service Providers → Employee screening" },
                  { icon: <Monitor size={16} />, text: "Telepsychiatry Platforms → Integrated assessment tools" },
                  { icon: <Shield size={16} />, text: "Insurance Companies → Member mental health screening" },
                ].map((item) => (
                  <li key={item.text} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: C.slate700, fontSize: "0.9rem", lineHeight: 1.5 }}>
                    <div style={{ color: C.blue, flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINANCIAL PROJECTIONS ═══ */}
      <section style={{ padding: "4rem 1.5rem", background: C.bg }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeading badge="Financials" title="5-Year Revenue Projections" subtitle="Revenue scaling from ₹15.3 Cr (Year 3) to ₹104.1 Cr (Year 7)." />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: 24, marginBottom: 32 }}>
            {/* Stacked Bar */}
            <div
              style={{
                background: C.white, borderRadius: 16, padding: "1.5rem",
                border: `1px solid ${C.slate200}`,
              }}
            >
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: C.slate900, marginBottom: 16 }}>Revenue by Segment (₹ Cr)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData} barCategoryGap="20%">
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="year" tick={{ fontSize: 12, fill: C.slate500 }} />
                  <YAxis tick={{ fontSize: 12, fill: C.slate500 }} />
                  <Tooltip
                    contentStyle={{ borderRadius: 10, border: `1px solid ${C.slate200}`, fontSize: 12 }}
                    formatter={(value: number) => [`₹${value} Cr`]}
                  />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <Bar dataKey="Hospitals" stackId="a" fill={C.teal} radius={[0, 0, 0, 0]} />
                  <Bar dataKey="Companies" stackId="a" fill={C.blue} />
                  <Bar dataKey="Colleges" stackId="a" fill={C.purple} />
                  <Bar dataKey="Patients" stackId="a" fill={C.orange} />
                  <Bar dataKey="Pharma/R&D" stackId="a" fill={C.rose} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Growth Area */}
            <div
              style={{
                background: C.white, borderRadius: 16, padding: "1.5rem",
                border: `1px solid ${C.slate200}`,
              }}
            >
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: C.slate900, marginBottom: 16 }}>Total Revenue Growth (₹ Cr)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="year" tick={{ fontSize: 12, fill: C.slate500 }} />
                  <YAxis tick={{ fontSize: 12, fill: C.slate500 }} />
                  <Tooltip
                    contentStyle={{ borderRadius: 10, border: `1px solid ${C.slate200}`, fontSize: 12 }}
                    formatter={(value: number) => [`₹${value} Cr`]}
                  />
                  <Area type="monotone" dataKey="revenue" stroke={C.teal} fill={C.tealPastel} strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Revenue Table */}
          <div
            style={{
              background: C.white, borderRadius: 16,
              border: `1px solid ${C.slate200}`, overflow: "hidden",
            }}
          >
            <div style={{ padding: "1.25rem 1.5rem", borderBottom: `1px solid ${C.slate200}` }}>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: C.slate900, margin: 0 }}>Revenue Breakdown (₹ Crores)</h3>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 500 }}>
                <thead>
                  <tr style={{ background: "#F8FAFC" }}>
                    {["Segment", "Year 3", "Year 4", "Year 5", "Year 6", "Year 7"].map((h) => (
                      <th
                        key={h}
                        style={{
                          padding: "10px 16px", textAlign: h === "Segment" ? "left" : "right",
                          fontSize: "0.75rem", fontWeight: 700, color: C.slate500,
                          textTransform: "uppercase", letterSpacing: "0.05em",
                          borderBottom: `1px solid ${C.slate200}`,
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { seg: "Hospitals", vals: [7.5, 18.0, 30.0, 42.0, 52.5], color: C.teal },
                    { seg: "Companies", vals: [3.0, 6.0, 9.0, 12.0, 15.0], color: C.blue },
                    { seg: "Colleges", vals: [2.25, 4.5, 6.75, 9.0, 11.25], color: C.purple },
                    { seg: "Patients", vals: [1.8, 4.8, 9.0, 14.4, 21.6], color: C.orange },
                    { seg: "Pharma/R&D", vals: [0.75, 1.5, 2.25, 3.0, 3.75], color: C.rose },
                  ].map((row) => (
                    <tr key={row.seg} style={{ borderBottom: `1px solid ${C.slate200}` }}>
                      <td style={{ padding: "12px 16px", fontWeight: 600, color: row.color, fontSize: "0.9rem" }}>{row.seg}</td>
                      {row.vals.map((v, i) => (
                        <td key={i} style={{ padding: "12px 16px", textAlign: "right", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.85rem", color: C.slate700 }}>
                          ₹{v.toFixed(2)}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr style={{ background: "#F8FAFC", fontWeight: 800 }}>
                    <td style={{ padding: "12px 16px", color: C.slate900, fontSize: "0.9rem" }}>TOTAL</td>
                    {[15.3, 34.8, 57.0, 80.4, 104.1].map((v, i) => (
                      <td key={i} style={{ padding: "12px 16px", textAlign: "right", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.9rem", color: C.teal }}>
                        ₹{v.toFixed(2)}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INVESTMENT CTA ═══ */}
      <section style={{ padding: "3.5rem 1.5rem", background: `linear-gradient(135deg, ${C.mintBg} 0%, ${C.blueBg} 100%)` }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: C.slate900, marginBottom: 12 }}>
            Investment Opportunity
          </h2>
          <p style={{ color: C.slate500, fontSize: "1rem", lineHeight: 1.7, marginBottom: 28 }}>
            ₹1.5 Cr for 5% Equity at ₹30 Cr Pre-Money Valuation. Staged global expansion with phased disease rollout across 17 conditions.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <div style={{ background: C.white, borderRadius: 12, padding: "1rem 1.5rem", border: `1px solid ${C.slate200}`, textAlign: "center" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: "1.3rem", color: C.teal }}>₹1.5 Cr</div>
              <div style={{ fontSize: "0.75rem", color: C.slate500, fontWeight: 600 }}>Investment Ask</div>
            </div>
            <div style={{ background: C.white, borderRadius: 12, padding: "1rem 1.5rem", border: `1px solid ${C.slate200}`, textAlign: "center" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: "1.3rem", color: C.blue }}>5%</div>
              <div style={{ fontSize: "0.75rem", color: C.slate500, fontWeight: 600 }}>Equity Offered</div>
            </div>
            <div style={{ background: C.white, borderRadius: 12, padding: "1rem 1.5rem", border: `1px solid ${C.slate200}`, textAlign: "center" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: "1.3rem", color: C.purple }}>₹30 Cr</div>
              <div style={{ fontSize: "0.75rem", color: C.slate500, fontWeight: 600 }}>Pre-Money Valuation</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
