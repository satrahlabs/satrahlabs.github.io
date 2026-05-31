export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        padding: "48px 0",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <span
          className="font-display text-lg font-semibold"
          style={{ color: "var(--text)", fontFamily: "'Lora', Georgia, serif" }}
        >
          satrahlabs
        </span>

        <p
          className="text-sm"
          style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }}
        >
          © {new Date().getFullYear()} Satrahlabs. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://satrahlabs.github.io/bioage/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-opacity hover:opacity-70"
            style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }}
          >
            BioAge
          </a>
          <a
            href="mailto:hello@satrahlabs.com"
            className="text-sm transition-opacity hover:opacity-70"
            style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }}
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
