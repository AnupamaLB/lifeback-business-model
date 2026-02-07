/**
 * PageShell — Reusable page wrapper with hero section
 * Theme: Light pastel health — teal gradient hero
 */
interface Props {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function PageShell({ title, subtitle, children }: Props) {
  return (
    <>
      <section
        style={{
          background: "linear-gradient(135deg, #F0FDFA 0%, #E0F2FE 50%, #F5F3FF 100%)",
          padding: "3.5rem 1.5rem 2.5rem",
          textAlign: "center",
          fontFamily: "'DM Sans', system-ui, sans-serif",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#0F172A",
              marginBottom: subtitle ? 12 : 0,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p style={{ color: "#475569", fontSize: "1.1rem", lineHeight: 1.6, margin: 0 }}>
              {subtitle}
            </p>
          )}
        </div>
      </section>
      <main
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "2.5rem 1.5rem 4rem",
          fontFamily: "'DM Sans', system-ui, sans-serif",
        }}
      >
        {children}
      </main>
    </>
  );
}
