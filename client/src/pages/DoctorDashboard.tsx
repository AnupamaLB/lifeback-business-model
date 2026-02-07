/**
 * DoctorDashboard — LifeBack™ clinician dashboard preview
 * Theme: Light pastel health
 */
import { useState } from "react";
import {
  Users, Activity, AlertTriangle, TrendingUp, Clock,
  ChevronRight, Search, Bell, BarChart3,
} from "lucide-react";

const C = {
  teal: "#0D9488",
  tealLight: "#14B8A6",
  tealPastel: "#CCFBF1",
  orange: "#F97316",
  red: "#DC2626",
  green: "#059669",
  blue: "#2563EB",
  purple: "#7C3AED",
  slate900: "#0F172A",
  slate700: "#334155",
  slate500: "#64748B",
  slate300: "#CBD5E1",
  slate200: "#E2E8F0",
  slate100: "#F1F5F9",
  white: "#FFFFFF",
  bg: "#F8FAFB",
};

const patients = [
  { id: "P-1042", name: "Patient A", age: 34, severity: "Moderate", score: 14, trend: "improving", lastVisit: "2 days ago", condition: "MDD" },
  { id: "P-1038", name: "Patient B", age: 28, severity: "Mild", score: 8, trend: "stable", lastVisit: "1 week ago", condition: "GAD" },
  { id: "P-1045", name: "Patient C", age: 45, severity: "Severe", score: 22, trend: "worsening", lastVisit: "Today", condition: "MDD + Anxiety" },
  { id: "P-1039", name: "Patient D", age: 52, severity: "Moderate", score: 16, trend: "improving", lastVisit: "3 days ago", condition: "PTSD" },
  { id: "P-1041", name: "Patient E", age: 19, severity: "Mild", score: 6, trend: "stable", lastVisit: "5 days ago", condition: "Adjustment Disorder" },
  { id: "P-1046", name: "Patient F", age: 61, severity: "Moderate", score: 18, trend: "worsening", lastVisit: "Today", condition: "Late-life Depression" },
];

function getSeverityColor(s: string) {
  if (s === "Severe") return { text: C.red, bg: "#FEF2F2", border: "#FECACA" };
  if (s === "Moderate") return { text: C.orange, bg: "#FFF7ED", border: "#FED7AA" };
  return { text: C.green, bg: "#ECFDF5", border: "#A7F3D0" };
}

function getTrendIcon(t: string) {
  if (t === "improving") return <TrendingUp size={14} style={{ color: C.green }} />;
  if (t === "worsening") return <TrendingUp size={14} style={{ color: C.red, transform: "scaleY(-1)" }} />;
  return <Activity size={14} style={{ color: C.slate500 }} />;
}

export default function DoctorDashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = patients.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.condition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: C.bg, minHeight: "80vh" }}>
      {/* Dashboard Header */}
      <div style={{ background: C.white, borderBottom: `1px solid ${C.slate200}`, padding: "1.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: C.slate900, marginBottom: 4 }}>
              Clinician Dashboard
            </h1>
            <p style={{ color: C.slate500, fontSize: "0.85rem", margin: 0 }}>
              LifeBack™ AI-powered patient monitoring & decision support
            </p>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button
              style={{
                background: C.white, border: `1px solid ${C.slate200}`, borderRadius: 10,
                padding: "8px 12px", display: "flex", alignItems: "center", gap: 6,
                color: C.slate700, fontSize: "0.8rem", cursor: "pointer",
              }}
            >
              <Bell size={16} /> <span style={{ background: C.red, color: C.white, borderRadius: 999, padding: "1px 6px", fontSize: "0.7rem", fontWeight: 700 }}>3</span>
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "1.5rem" }}>
        {/* Stat Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 24 }}>
          {[
            { icon: <Users size={20} />, label: "Active Patients", value: "347", change: "+12 this week", color: C.teal, bg: "#F0FDFA" },
            { icon: <AlertTriangle size={20} />, label: "High Risk", value: "23", change: "Needs attention", color: C.red, bg: "#FEF2F2" },
            { icon: <Activity size={20} />, label: "Assessments Today", value: "18", change: "6 pending review", color: C.blue, bg: "#EFF6FF" },
            { icon: <BarChart3 size={20} />, label: "Avg. Improvement", value: "34%", change: "Over 6 weeks", color: C.green, bg: "#ECFDF5" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: C.white, borderRadius: 14, padding: "1.25rem",
                border: `1px solid ${C.slate200}`,
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div
                  style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: s.bg, display: "flex", alignItems: "center", justifyContent: "center",
                    color: s.color,
                  }}
                >
                  {s.icon}
                </div>
                <span style={{ fontSize: "0.8rem", color: C.slate500, fontWeight: 500 }}>{s.label}</span>
              </div>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: C.slate900, fontFamily: "'JetBrains Mono', monospace" }}>
                {s.value}
              </div>
              <div style={{ fontSize: "0.75rem", color: s.color, fontWeight: 600, marginTop: 4 }}>{s.change}</div>
            </div>
          ))}
        </div>

        {/* Patient Table */}
        <div
          style={{
            background: C.white, borderRadius: 16,
            border: `1px solid ${C.slate200}`,
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "1.25rem 1.5rem", borderBottom: `1px solid ${C.slate200}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: C.slate900, margin: 0 }}>Patient Overview</h2>
            <div
              style={{
                display: "flex", alignItems: "center", gap: 8,
                background: C.slate100, borderRadius: 10, padding: "8px 14px",
                border: `1px solid ${C.slate200}`,
              }}
            >
              <Search size={16} style={{ color: C.slate500 }} />
              <input
                type="text"
                placeholder="Search patients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  border: "none", background: "transparent", outline: "none",
                  fontSize: "0.85rem", color: C.slate700, width: 180,
                }}
              />
            </div>
          </div>

          {/* Table */}
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: C.slate100 }}>
                  {["Patient", "Condition", "Severity", "Score", "Trend", "Last Visit", ""].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "10px 16px", textAlign: "left",
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
                {filtered.map((p) => {
                  const sev = getSeverityColor(p.severity);
                  return (
                    <tr
                      key={p.id}
                      style={{ borderBottom: `1px solid ${C.slate200}`, transition: "background 0.15s" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#FAFAFA"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                    >
                      <td style={{ padding: "12px 16px" }}>
                        <div style={{ fontWeight: 600, color: C.slate900, fontSize: "0.9rem" }}>{p.name}</div>
                        <div style={{ fontSize: "0.75rem", color: C.slate500 }}>{p.id} · Age {p.age}</div>
                      </td>
                      <td style={{ padding: "12px 16px", color: C.slate700, fontSize: "0.85rem" }}>{p.condition}</td>
                      <td style={{ padding: "12px 16px" }}>
                        <span
                          style={{
                            fontSize: "0.75rem", fontWeight: 700, color: sev.text,
                            background: sev.bg, border: `1px solid ${sev.border}`,
                            padding: "3px 10px", borderRadius: 999,
                          }}
                        >
                          {p.severity}
                        </span>
                      </td>
                      <td style={{ padding: "12px 16px", fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, color: C.slate900, fontSize: "0.9rem" }}>
                        {p.score}
                      </td>
                      <td style={{ padding: "12px 16px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.8rem", color: C.slate700, textTransform: "capitalize" }}>
                          {getTrendIcon(p.trend)} {p.trend}
                        </div>
                      </td>
                      <td style={{ padding: "12px 16px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: "0.8rem", color: C.slate500 }}>
                          <Clock size={12} /> {p.lastVisit}
                        </div>
                      </td>
                      <td style={{ padding: "12px 16px" }}>
                        <button
                          onClick={() => alert(`Opening detailed view for ${p.name} (${p.id})`)}
                          style={{
                            background: "transparent", border: "none",
                            color: C.teal, cursor: "pointer", display: "flex", alignItems: "center",
                          }}
                        >
                          <ChevronRight size={18} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {filtered.length === 0 && (
            <div style={{ padding: 40, textAlign: "center", color: C.slate500 }}>
              No patients found matching "{searchTerm}"
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div
          style={{
            marginTop: 24, background: "#FFF7ED", border: "1px solid #FED7AA",
            borderRadius: 12, padding: "14px 18px",
            display: "flex", alignItems: "flex-start", gap: 10,
          }}
        >
          <AlertTriangle size={18} style={{ color: C.orange, flexShrink: 0, marginTop: 2 }} />
          <p style={{ margin: 0, color: "#92400E", fontSize: "0.8rem", lineHeight: 1.6 }}>
            <strong>Demo Dashboard:</strong> This is a preview of the LifeBack™ clinician dashboard with sample data. Actual patient data is encrypted, HIPAA-compliant, and only accessible to authorized healthcare providers.
          </p>
        </div>
      </div>
    </div>
  );
}
