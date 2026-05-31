"use client";

export default function ProductShowcase() {
  const pillars = [
    { label: "Cardiovascular", desc: "Resting HR, HRV, VO₂ Max" },
    { label: "Metabolic", desc: "Glucose, BMI, body composition" },
    { label: "Sleep", desc: "Duration, efficiency, REM cycles" },
    { label: "Activity", desc: "Steps, active energy, workouts" },
    { label: "Genetics", desc: "Polygenic risk & longevity markers" },
    { label: "Lab Results", desc: "Scan bloodwork, track trends" },
    { label: "Mental health", desc: "Stress index, mindfulness" },
    { label: "Nutrition", desc: "Micronutrient gaps, hydration" },
  ];

  return (
    <section id="products" style={{ background: "var(--bg)", padding: "120px 0" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section label */}
        <p
          className="text-xs font-medium tracking-[0.25em] uppercase mb-6"
          style={{ color: "var(--accent)", fontFamily: "'Inter', sans-serif" }}
        >
          Featured Product
        </p>

        {/* Headline */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <h2
            className="font-display text-4xl md:text-6xl font-medium leading-tight"
            style={{ color: "var(--text)", fontFamily: "'Lora', Georgia, serif", maxWidth: "600px" }}
          >
            BioAge — your real age,
            <em style={{ fontStyle: "italic" }}> measured by science</em>
          </h2>
          <a
            href="https://satrahlabs.github.io/bioage/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "var(--accent)", fontFamily: "'Inter', sans-serif" }}
          >
            View product site
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Hero card */}
          <div
            className="lg:col-span-2 lg:row-span-2 rounded-2xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              minHeight: "360px",
            }}
          >
            {/* Glow blob */}
            <div
              className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
              aria-hidden="true"
              style={{
                background: "radial-gradient(circle, rgba(200,240,74,0.12) 0%, transparent 70%)",
                transform: "translate(20%, -20%)",
              }}
            />

            <div>
              <span
                className="inline-block text-xs font-medium tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-6"
                style={{
                  background: "var(--accent-dim, rgba(200,240,74,0.1))",
                  color: "var(--accent)",
                  fontFamily: "'Inter', sans-serif",
                  border: "1px solid rgba(200,240,74,0.2)",
                }}
              >
                iOS App
              </span>

              <h3
                className="font-display text-3xl md:text-4xl font-medium leading-tight mb-4"
                style={{ color: "var(--text)", fontFamily: "'Lora', Georgia, serif" }}
              >
                8 pillars of biological age
              </h3>

              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif", maxWidth: "420px" }}
              >
                BioAge synthesizes data from Apple Health, Apple Watch, lab reports, and physical
                tests into a single, science-backed score. All data stays on-device — always.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://satrahlabs.github.io/bioage/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: "var(--accent)",
                  color: "#000",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Learn more
              </a>
              <span
                className="text-sm"
                style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }}
              >
                Free on the App Store
              </span>
            </div>
          </div>

          {/* Privacy card */}
          <div
            className="rounded-2xl p-6 flex flex-col justify-between"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              minHeight: "170px",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M14 3L4 7v7c0 6 4.5 11 10 12 5.5-1 10-6 10-12V7L14 3z" stroke="rgba(200,240,74,0.7)" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M10 14l3 3 6-6" stroke="rgba(200,240,74,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
              <h4
                className="font-medium text-base mb-1"
                style={{ color: "var(--text)", fontFamily: "'Inter', sans-serif" }}
              >
                Privacy-first
              </h4>
              <p
                className="text-sm"
                style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }}
              >
                All data stays on-device in the iOS Keychain. No cloud sync, no servers.
              </p>
            </div>
          </div>

          {/* Apple Watch card */}
          <div
            className="rounded-2xl p-6 flex flex-col justify-between"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              minHeight: "170px",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <rect x="9" y="4" width="10" height="20" rx="3" stroke="rgba(200,240,74,0.7)" strokeWidth="1.5"/>
              <path d="M9 9h10M9 19h10" stroke="rgba(200,240,74,0.7)" strokeWidth="1" strokeOpacity="0.5"/>
              <circle cx="14" cy="14" r="2" fill="rgba(200,240,74,0.7)"/>
            </svg>
            <div>
              <h4
                className="font-medium text-base mb-1"
                style={{ color: "var(--text)", fontFamily: "'Inter', sans-serif" }}
              >
                Apple Watch
              </h4>
              <p
                className="text-sm"
                style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }}
              >
                Continuous biometric sync via Apple Health for real-time trend tracking.
              </p>
            </div>
          </div>
        </div>

        {/* Pillars grid */}
        <div className="mt-12">
          <p
            className="text-xs font-medium tracking-[0.2em] uppercase mb-6"
            style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }}
          >
            The 8 pillars
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {pillars.map((p) => (
              <div
                key={p.label}
                className="rounded-xl px-4 py-4 transition-colors duration-200 hover:border-[rgba(200,240,74,0.2)]"
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  className="text-sm font-medium mb-1"
                  style={{ color: "var(--text)", fontFamily: "'Inter', sans-serif" }}
                >
                  {p.label}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
