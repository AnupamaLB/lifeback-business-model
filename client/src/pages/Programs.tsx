/**
 * Programs — LifeBack™ Product Modules & Programs
 * Theme: Light pastel health
 */
import PageShell from "@/components/PageShell";
import { Building2, Users, Database, Link2, Mic, Smile, Brain, Activity, Shield, FileText } from "lucide-react";

const C = {
  teal: "#0D9488",
  tealLight: "#14B8A6",
  slate900: "#0F172A",
  slate700: "#334155",
  slate500: "#64748B",
  slate200: "#E2E8F0",
  white: "#FFFFFF",
  orange: "#F97316",
};

const modules = [
  {
    icon: <Building2 size={28} />,
    title: "Hospital Module (B2B)",
    subtitle: "For Clinicians & Hospital Administrators",
    color: "#0D9488",
    bg: "#F0FDFA",
    border: "#99F6E4",
    features: [
      "AI-powered screening & severity scoring",
      "Clinician dashboard with trend analytics",
      "Follow-up tracker & reminders",
      "EMR/EHR integration (HL7/FHIR, SSO)",
      "Department-level reporting & audit trails",
      "Multi-specialty support (17 conditions)",
    ],
  },
  {
    icon: <Users size={28} />,
    title: "Patient Module (B2B2C)",
    subtitle: "For Patients Under Hospital Care",
    color: "#2563EB",
    bg: "#EFF6FF",
    border: "#93C5FD",
    features: [
      "Continuous care dashboard",
      "Self-monitoring & mood tracking",
      "Medication adherence reminders",
      "Caregiver family access",
      "Secure messaging with care team",
      "Progress reports & insights",
    ],
  },
  {
    icon: <Database size={28} />,
    title: "Data & Analytics (DaaS)",
    subtitle: "For Researchers, Pharma & Institutions",
    color: "#7C3AED",
    bg: "#F5F3FF",
    border: "#C4B5FD",
    features: [
      "De-identified, audit-ready datasets",
      "Population health analytics",
      "Pharma R&D collaboration tools",
      "Academic research partnerships",
      "Regulatory-compliant data handling",
      "Custom analytics dashboards",
    ],
  },
  {
    icon: <Link2 size={28} />,
    title: "Connected Care",
    subtitle: "Cross-Specialty Expansion",
    color: "#DC2626",
    bg: "#FEF2F2",
    border: "#FECACA",
    features: [
      "Start with Psychiatry as beachhead",
      "Expand to Cardio-metabolic conditions",
      "Oncology mental health support",
      "Postpartum depression screening",
      "Chronic disease mental wellness",
      "Phased rollout across 17 conditions",
    ],
  },
];

const techStack = [
  { icon: <Mic size={20} />, label: "Voice Biomarkers", desc: "Prosody, pitch, pauses, energy" },
  { icon: <Smile size={20} />, label: "Facial Analysis", desc: "Action Units, micro-expressions" },
  { icon: <Brain size={20} />, label: "Multi-Modal Fusion", desc: "Cross-signal AI integration" },
  { icon: <Activity size={20} />, label: "Longitudinal Tracking", desc: "Trend analysis over time" },
  { icon: <Shield size={20} />, label: "Privacy-First", desc: "On-prem / federated options" },
  { icon: <FileText size={20} />, label: "Clinical Scales", desc: "PHQ-9, HAMD, GAD-7 calibrated" },
];

export default function Programs() {
  return (
    <PageShell
      title="Product Modules & Programs"
      subtitle="LifeBack™ offers a modular platform designed for hospitals, patients, and research partners."
    >
      {/* Product Modules */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 48 }}>
        {modules.map((m) => (
          <div
            key={m.title}
            style={{
              background: C.white,
              borderRadius: 16,
              padding: "2rem",
              border: `1px solid ${C.slate200}`,
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              transition: "transform 0.3s, box-shadow 0.3s",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${m.color}12`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: m.color }} />
            <div
              style={{
                width: 56, height: 56, borderRadius: 14,
                background: m.bg, border: `1px solid ${m.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: m.color, marginBottom: 16,
              }}
            >
              {m.icon}
            </div>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: C.slate900, marginBottom: 4 }}>{m.title}</h3>
            <p style={{ fontSize: "0.8rem", color: m.color, fontWeight: 600, marginBottom: 16 }}>{m.subtitle}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {m.features.map((f) => (
                <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, color: C.slate700, fontSize: "0.85rem", lineHeight: 1.5 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: m.color, flexShrink: 0, marginTop: 6 }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Technology Stack */}
      <div
        style={{
          background: C.white,
          borderRadius: 16,
          padding: "2rem",
          border: `1px solid ${C.slate200}`,
        }}
      >
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: C.slate900, marginBottom: 20 }}>
          Technology Stack
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
          {techStack.map((t) => (
            <div
              key={t.label}
              style={{
                background: "#F0FDFA",
                border: "1px solid #99F6E4",
                borderRadius: 12,
                padding: "1.25rem",
                textAlign: "center",
              }}
            >
              <div style={{ color: C.teal, marginBottom: 8, display: "flex", justifyContent: "center" }}>{t.icon}</div>
              <div style={{ fontWeight: 700, color: C.slate900, fontSize: "0.9rem", marginBottom: 4 }}>{t.label}</div>
              <div style={{ color: C.slate500, fontSize: "0.78rem" }}>{t.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
