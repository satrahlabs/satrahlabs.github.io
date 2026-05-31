"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,8,8,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <nav
        className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between"
        style={{ height: "64px" }}
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight hover:opacity-70 transition-opacity"
          style={{ color: "var(--text)", fontFamily: "'Lora', Georgia, serif" }}
        >
          satrahlabs
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="#products"
            className="text-sm tracking-wide transition-opacity hover:opacity-70"
            style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }}
          >
            Products
          </Link>
          <Link
            href="#about"
            className="text-sm tracking-wide transition-opacity hover:opacity-70"
            style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }}
          >
            About
          </Link>
          <a
            href="https://satrahlabs.github.io/bioage/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 hover:opacity-90"
            style={{
              background: "var(--accent)",
              color: "#000",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Try BioAge
          </a>
        </div>
      </nav>
    </header>
  );
}
