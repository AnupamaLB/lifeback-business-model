/**
 * Home — LifeBack™ Landing Page
 * Theme: Light pastel health — teal/mint/sage, warm whites
 * Sections: Hero, How It Works, Assessment Tabs
 */
import { useState, useEffect } from "react";
import {
  Mic, Smile, Brain, CheckCircle, AlertTriangle, FileText,
  ArrowRight, Activity, Shield, Zap, ChevronDown, ClipboardCheck,
  Award, Globe, Beaker,
} from "lucide-react";

const C = {
  teal: "#0D9488",
  tealLight: "#14B8A6",
  tealPastel: "#CCFBF1",
  orange: "#F97316",
  orangeLight: "#FB923C",
  slate900: "#0F172A",
  slate700: "#334155",
  slate500: "#64748B",
  slate200: "#E2E8F0",
  white: "#FFFFFF",
  bg: "#F8FAFB",
  cardBg: "#FFFFFF",
  mintBg: "#F0FDFA",
  blueBg: "#E0F2FE",
  lavBg: "#F5F3FF",
};

function FeatureCard({ icon, title, description, items }: {
  icon: React.ReactNode; title: string; description: string; items: string[];
}) {
  return (
    <div
      style={{
        background: C.cardBg,
        borderRadius: 16,
        padding: "2rem",
        border: `1px solid ${C.slate200}`,
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 24px rgba(13,148,136,0.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
      }}
    >
      <div
        style={{
          width: 56, height: 56, borderRadius: 14,
          background: `linear-gradient(135deg, ${C.tealPastel}, ${C.blueBg})`,
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 16, color: C.teal,
        }}
      >
        {icon}
      </div>
      <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: C.slate900, marginBottom: 8 }}>{title}</h3>
      <p style={{ color: C.slate500, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: 16 }}>{description}</p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: "flex", alignItems: "center", gap: 8, color: C.slate700, fontSize: "0.85rem" }}>
            <CheckCircle size={14} style={{ color: C.teal, flexShrink: 0 }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<"lb" | "comprehensive">("lb");

  function scrollToTest() {
    document.getElementById("test-section")?.scrollIntoView({ behavior: "smooth" });
  }

  function beginAssessment(kind: "lb" | "comprehensive") {
    if (kind === "lb") {
      alert("Starting your LB Assessment. This AI-powered analysis will take approximately 5-10 minutes.");
    } else {
      alert("Starting your Comprehensive Assessment. This includes both AI analysis and clinical scales and will take approximately 15-20 minutes.");
    }
  }

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      {/* ═══ HERO ═══ */}
      <section
        style={{
          background: `linear-gradient(135deg, ${C.mintBg} 0%, ${C.blueBg} 50%, ${C.lavBg} 100%)`,
          padding: "5rem 1.5rem 4rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(13,148,136,0.05)" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(249,115,22,0.04)" }} />

        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: C.cardBg, border: `1px solid ${C.slate200}`,
              borderRadius: 999, padding: "6px 16px", marginBottom: 24,
              fontSize: "0.8rem", fontWeight: 600, color: C.teal,
            }}
          >
            <Activity size={14} />
            AI-Powered Precision Psychiatry
          </div>

          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
              fontWeight: 800,
              color: C.slate900,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              marginBottom: 16,
            }}
          >
            Your Voice and Face Can Reveal{" "}
            <span style={{ color: C.teal }}>What Words Don't</span>
          </h1>

          <p
            style={{
              color: C.slate500,
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 640,
              margin: "0 auto 32px",
            }}
          >
            LifeBack™ uses advanced AI to analyze voice patterns and facial expressions,
            providing scientific insights into mental well-being. Our multi-modal approach
            offers a more comprehensive understanding than traditional methods.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={scrollToTest}
              style={{
                background: `linear-gradient(135deg, ${C.teal}, ${C.tealLight})`,
                color: C.white, border: "none", borderRadius: 12,
                padding: "14px 28px", fontWeight: 700, fontSize: "0.95rem",
                cursor: "pointer", display: "flex", alignItems: "center", gap: 8,
                boxShadow: "0 4px 14px rgba(13,148,136,0.3)",
              }}
            >
              Start Free Analysis <ArrowRight size={16} />
            </button>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex", justifyContent: "center", gap: "2.5rem",
              marginTop: 48, flexWrap: "wrap",
            }}
          >
            {[
              { value: "97%", label: "Clinical Accuracy" },
              { value: "14 min", label: "Avg. Assessment" },
              { value: "347+", label: "Active Patients" },
              { value: "17", label: "Conditions Covered" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1.8rem", fontWeight: 800, color: C.teal, fontFamily: "'JetBrains Mono', monospace" }}>
                  {s.value}
                </div>
                <div style={{ fontSize: "0.75rem", color: C.slate500, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section style={{ padding: "4rem 1.5rem", background: C.bg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: C.slate900, marginBottom: 8 }}>
              How LifeBack<span style={{ color: C.orange }}>™</span> Works
            </h2>
            <p style={{ color: C.slate500, fontSize: "1rem", maxWidth: 600, margin: "0 auto" }}>
              Three complementary analysis modalities working together for comprehensive assessment
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            <FeatureCard
              icon={<Mic size={26} />}
              title="Voice Analysis"
              description="Deep speech models detect vocal biomarkers — prosody, pitch variation, pauses, and energy — linked to emotional state and risk signals."
              items={["Prosody & intonation patterns", "Pitch variation analysis", "Pause frequency & duration", "Speech energy & intensity"]}
            />
            <FeatureCard
              icon={<Smile size={26} />}
              title="Facial Expression Recognition"
              description="Tracks Action Units and facial dynamics to capture micro-expression patterns and affective shifts relevant to mental well-being."
              items={["Facial Action Units (AUs) tracking", "Micro-expression detection", "Affective shift monitoring", "Emotional valence analysis"]}
            />
            <FeatureCard
              icon={<Brain size={26} />}
              title="Multi-Modal Insights"
              description="Combines voice + face signals to improve reliability and generate score equivalents to established clinical rating scales over time."
              items={["Cross-modal signal fusion", "Score equivalent to different rating scales", "Longitudinal trend analysis", "Personalized baseline"]}
            />
            <FeatureCard
              icon={<Award size={26} />}
              title="Expert Rating Scale Integration"
              description="Voice, facial, and multi-modal AI insights are coupled with gold-standard expert rating scales for clinically validated, comprehensive assessments."
              items={["PHQ-9, GAD-7, HDRS equivalents", "AI-to-scale score mapping", "Clinician-validated benchmarks", "Cross-scale severity alignment"]}
            />

          </div>
        </div>
      </section>

      {/* ═══ ASSESSMENT TABS ═══ */}
      <section id="test-section" style={{ padding: "4rem 1.5rem", background: C.white }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {/* Tabs */}
          <div
            style={{
              display: "flex", gap: 4, marginBottom: 32,
              background: "#F1F5F9", borderRadius: 12, padding: 4,
            }}
          >
            {(["lb", "comprehensive"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  flex: 1, padding: "12px 16px",
                  borderRadius: 10, border: "none",
                  fontWeight: 600, fontSize: "0.9rem",
                  cursor: "pointer",
                  background: activeTab === tab ? C.white : "transparent",
                  color: activeTab === tab ? C.teal : C.slate500,
                  boxShadow: activeTab === tab ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                  transition: "all 0.2s",
                }}
              >
                {tab === "lb" ? "LB Assessment" : "Comprehensive Assessment"}
              </button>
            ))}
          </div>

          {/* LB Tab */}
          {activeTab === "lb" && (
            <div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: C.slate900, marginBottom: 8 }}>LB Assessment</h2>
              <p style={{ color: C.slate500, lineHeight: 1.7, marginBottom: 24 }}>
                Our core AI-powered assessment that analyzes your voice patterns and facial expressions to provide insights into your mental well-being.
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "AI-powered voice pattern analysis",
                  "Facial expression recognition",
                  "Calibrated with standardized psychological scales",
                  "Instant results with detailed insights",
                  "Privacy-focused analysis",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, color: C.slate700, fontSize: "0.95rem" }}>
                    <CheckCircle size={16} style={{ color: C.teal, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>

              <div
                style={{
                  background: "#FFF7ED", border: "1px solid #FED7AA",
                  borderRadius: 12, padding: "14px 18px", marginBottom: 24,
                  display: "flex", alignItems: "flex-start", gap: 10,
                }}
              >
                <AlertTriangle size={18} style={{ color: C.orange, flexShrink: 0, marginTop: 2 }} />
                <p style={{ margin: 0, color: "#92400E", fontSize: "0.875rem", lineHeight: 1.6 }}>
                  <strong>Note:</strong> The LB Assessment is calibrated with standard psychological scales but is not yet a medically approved diagnostic tool. Results are for informational purposes only.
                </p>
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button
                  onClick={() => beginAssessment("lb")}
                  style={{
                    background: `linear-gradient(135deg, ${C.teal}, ${C.tealLight})`,
                    color: C.white, border: "none", borderRadius: 10,
                    padding: "12px 24px", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(13,148,136,0.25)",
                  }}
                >
                  Begin LB Assessment
                </button>
                <button
                  onClick={() => alert("Learn More page coming soon.")}
                  style={{
                    background: "transparent", color: C.teal,
                    border: `1.5px solid ${C.teal}`, borderRadius: 10,
                    padding: "12px 24px", fontWeight: 600, fontSize: "0.9rem", cursor: "pointer",
                  }}
                >
                  Learn More About This Test
                </button>
              </div>
            </div>
          )}

          {/* Comprehensive Tab */}
          {activeTab === "comprehensive" && (
            <div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: C.slate900, marginBottom: 8 }}>Comprehensive Assessment</h2>
              <p style={{ color: C.slate500, lineHeight: 1.7, marginBottom: 24 }}>
                A complete evaluation combining our AI analysis with expert-rated clinical scales for a more thorough assessment.
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Includes full LB Assessment",
                  "Expert-rated clinical scales (HAMD, PHQ-9, etc.)",
                  "Detailed psychological evaluation",
                  "Personalized recommendations",
                  "Option to share results with healthcare providers",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, color: C.slate700, fontSize: "0.95rem" }}>
                    <CheckCircle size={16} style={{ color: C.teal, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>

              <div
                style={{
                  background: C.mintBg, border: "1px solid #99F6E4",
                  borderRadius: 12, padding: "14px 18px", marginBottom: 24,
                  display: "flex", alignItems: "flex-start", gap: 10,
                }}
              >
                <FileText size={18} style={{ color: C.teal, flexShrink: 0, marginTop: 2 }} />
                <p style={{ margin: 0, color: "#134E4A", fontSize: "0.875rem", lineHeight: 1.6 }}>
                  <strong>Medically Approved Report:</strong> The Comprehensive Assessment includes a detailed report that can be reviewed by healthcare professionals.
                </p>
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button
                  onClick={() => beginAssessment("comprehensive")}
                  style={{
                    background: `linear-gradient(135deg, ${C.teal}, ${C.tealLight})`,
                    color: C.white, border: "none", borderRadius: 10,
                    padding: "12px 24px", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(13,148,136,0.25)",
                  }}
                >
                  Begin Comprehensive Assessment
                </button>
                <button
                  onClick={() => alert("Sample report coming soon.")}
                  style={{
                    background: "transparent", color: C.teal,
                    border: `1.5px solid ${C.teal}`, borderRadius: 10,
                    padding: "12px 24px", fontWeight: 600, fontSize: "0.9rem", cursor: "pointer",
                  }}
                >
                  See Sample Report
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ═══ CLINICAL VALIDATION & MULTI-LANGUAGE ═══ */}
      <section style={{ padding: "4rem 1.5rem", background: C.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            <div
              style={{
                background: C.cardBg, borderRadius: 16, padding: "2rem",
                border: `1px solid ${C.slate200}`,
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 24px rgba(13,148,136,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
              }}
            >
              <div
                style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: `linear-gradient(135deg, ${C.tealPastel}, ${C.blueBg})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 16, color: C.teal,
                }}
              >
                <Beaker size={26} />
              </div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: C.slate900, marginBottom: 12 }}>Clinically Validated</h3>
              <p style={{ color: C.slate600, fontSize: "0.95rem", lineHeight: 1.6, marginBottom: 16 }}>
                Validated through IRB-approved trials at RML Hospital.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                <li style={{ display: "flex", alignItems: "center", gap: 8, color: C.slate700, fontSize: "0.9rem" }}>
                  <CheckCircle size={16} style={{ color: C.teal, flexShrink: 0 }} />
                  Patent filed (202511025669)
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8, color: C.slate700, fontSize: "0.9rem" }}>
                  <CheckCircle size={16} style={{ color: C.teal, flexShrink: 0 }} />
                  IRB-approved trials
                </li>
              </ul>
            </div>
            <div
              style={{
                background: C.cardBg, borderRadius: 16, padding: "2rem",
                border: `1px solid ${C.slate200}`,
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 24px rgba(13,148,136,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
              }}
            >
              <div
                style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: `linear-gradient(135deg, ${C.tealPastel}, ${C.blueBg})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 16, color: C.teal,
                }}
              >
                <Globe size={26} />
              </div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: C.slate900, marginBottom: 12 }}>Multi-Language & Benchmark</h3>
              <p style={{ color: C.slate600, fontSize: "0.95rem", lineHeight: 1.6, marginBottom: 16 }}>
                Built on multiple languages and compared with established clinical benchmarks.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                <li style={{ display: "flex", alignItems: "center", gap: 8, color: C.slate700, fontSize: "0.9rem" }}>
                  <CheckCircle size={16} style={{ color: C.teal, flexShrink: 0 }} />
                  Multi-language support
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8, color: C.slate700, fontSize: "0.9rem" }}>
                  <CheckCircle size={16} style={{ color: C.teal, flexShrink: 0 }} />
                  Benchmark-validated
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST BAR ═══ */}
      <section style={{ padding: "3rem 1.5rem", background: C.bg }}>
        <div
          style={{
            maxWidth: 1000, margin: "0 auto",
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24,
          }}
        >
          {[
            { icon: <Shield size={22} />, title: "HIPAA Compliant", desc: "End-to-end encryption" },
            { icon: <Zap size={22} />, title: "69% Faster", desc: "vs. traditional assessment" },
            { icon: <Activity size={22} />, title: "Peer-Reviewed", desc: "Published in IEEE, Springer" },
            { icon: <Brain size={22} />, title: "Patent Filed", desc: "Indian Patent 202511025669" },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: C.cardBg, borderRadius: 14, padding: "1.5rem",
                border: `1px solid ${C.slate200}`, textAlign: "center",
              }}
            >
              <div style={{ color: C.teal, marginBottom: 8, display: "flex", justifyContent: "center" }}>{item.icon}</div>
              <div style={{ fontWeight: 700, color: C.slate900, fontSize: "0.95rem", marginBottom: 4 }}>{item.title}</div>
              <div style={{ color: C.slate500, fontSize: "0.8rem" }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
