export default function ComingSoon() {
  return (
    <section style={{ background: "var(--bg)", padding: "120px 0" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <p
          className="text-xs font-medium tracking-[0.25em] uppercase mb-6"
          style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }}
        >
          What&#39;s next
        </p>

        <div
          className="rounded-2xl p-12 md:p-20 flex flex-col items-center text-center relative overflow-hidden"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(200,240,74,0.04) 0%, transparent 70%)",
            }}
          />

          <h2
            className="font-display text-4xl md:text-6xl font-medium leading-tight mb-6 relative z-10"
            style={{ color: "var(--text)", fontFamily: "'Lora', Georgia, serif" }}
          >
            More products
            <br />
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>on the horizon</em>
          </h2>

          <p
            className="text-lg leading-relaxed mb-10 relative z-10"
            style={{
              color: "var(--text-muted)",
              fontFamily: "'Inter', sans-serif",
              maxWidth: "480px",
            }}
          >
            We&#39;re just getting started. New tools from Satrahlabs are in development.
            Follow along to be first to know.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
            <a
              href="mailto:hello@satrahlabs.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: "var(--accent)",
                color: "#000",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Get in touch
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
