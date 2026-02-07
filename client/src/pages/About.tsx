/**
 * About — LifeBack™ overview
 * Theme: Light pastel health
 */
import PageShell from "@/components/PageShell";

export default function About() {
  return (
    <PageShell
      title="About LifeBack™"
      subtitle="Objective mental-health decision support for hospitals and clinicians."
    >
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: 16,
          padding: "2.5rem",
          border: "1px solid #E2E8F0",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
          lineHeight: 1.8,
          color: "#334155",
          fontSize: "1rem",
        }}
      >
        <p style={{ marginBottom: 20 }}>
          LifeBack™ helps hospitals and clinicians bring objectivity to mental-health care. Today,
          assessments are often subjective, time-intensive, and inconsistent across clinicians and visits.
        </p>
        <p style={{ marginBottom: 20 }}>
          LifeBack's MVP combines <strong style={{ color: "#0D9488" }}>audio-video analysis + standardized scales</strong> to generate decision-support
          insights — risk flags, symptom severity trends, and follow-up tracking — inside routine clinical workflows.
        </p>
        <p style={{ marginBottom: 20 }}>
          The goal is not to replace clinicians, but to <strong style={{ color: "#0D9488" }}>standardize evaluation</strong>, reduce missed cases, and enable
          measurable monitoring across visits.
        </p>
        <p style={{ margin: 0 }}>
          We are deploying the MVP in multi-location pilots with performance, safety, and adoption KPIs, alongside a clear
          roadmap toward QMS + SaMD readiness.
        </p>
      </div>

      {/* Traction Section */}
      <div style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: 20 }}>Traction & Milestones</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16 }}>
          {[
            { label: "Clinical Validation", value: "97% accuracy at RML Hospital, Delhi" },
            { label: "IP Protection", value: "Indian Patent Filed (202511025669)" },
            { label: "Publications", value: "Peer-reviewed in IEEE, Springer" },
            { label: "Regulatory", value: "IRB-approved trials, CDSCO pathway mapped" },
            { label: "Funding", value: "₹50L BIRAC grant + ₹1.75Cr TDB soft loan" },
            { label: "Hospital Pipeline", value: "RML, St. John's + 3 new sites" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: "#F0FDFA",
                borderRadius: 12,
                padding: "1.25rem",
                border: "1px solid #99F6E4",
              }}
            >
              <div style={{ fontWeight: 700, color: "#0D9488", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>
                {item.label}
              </div>
              <div style={{ color: "#334155", fontSize: "0.9rem", fontWeight: 500 }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
