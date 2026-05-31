export default function About() {
  return (
    <section id="about" style={{ background: "var(--surface)", padding: "120px 0" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — text */}
          <div>
            <p
              className="text-xs font-medium tracking-[0.25em] uppercase mb-6"
              style={{ color: "var(--accent)", fontFamily: "'Inter', sans-serif" }}
            >
              About Satrahlabs
            </p>

            <h2
              className="font-display text-4xl md:text-5xl font-medium leading-tight mb-8"
              style={{ color: "var(--text)", fontFamily: "'Lora', Georgia, serif" }}
            >
              Personal science,
              <br />
              <em style={{ fontStyle: "italic" }}>built with precision</em>
            </h2>

            <div
              className="space-y-5 text-base leading-relaxed"
              style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }}
            >
              <p>
                Satrahlabs is an early-stage lab building health technology that respects both your
                intelligence and your privacy. We believe the most valuable data in the world is your
                own biology — and it should stay yours.
              </p>
              <p>
                We started with BioAge because we wanted to answer a simple question: <em style={{ color: "var(--text)" }}>am I aging
                faster or slower than my calendar age suggests?</em> The answer turned out to require
                combining eight distinct measurement pillars — so we built the tool to do it.
              </p>
              <p>
                More products are on the way. Every one of them will be science-backed, privacy-first,
                and obsessively designed.
              </p>
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "8", label: "Health pillars measured" },
              { value: "0", label: "Servers holding your data" },
              { value: "1", label: "Product live today" },
              { value: "∞", label: "More coming" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-6 flex flex-col justify-between"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  minHeight: "140px",
                }}
              >
                <span
                  className="font-display text-5xl font-medium"
                  style={{ color: "var(--accent)", fontFamily: "'Lora', Georgia, serif" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-sm"
                  style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
