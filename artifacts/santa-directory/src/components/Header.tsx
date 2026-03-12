"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const hero = document.querySelector("[data-hero]");
      const threshold = hero ? hero.getBoundingClientRect().bottom : 60;
      setScrolled(threshold <= 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const transparent = isHome && !scrolled && !mobileOpen;

  const navLinks = [
    { href: "/santas", label: "Find a Santa" },
    { href: "/list-your-profile", label: "List Your Profile" },
    { href: "/locations", label: "Locations" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-white border-b border-gray-100 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span
              className={`text-2xl lg:text-3xl font-bold transition-colors duration-300 ${
                transparent ? "text-white" : "text-brand"
              }`}
            >
              Santa
            </span>
            <span
              className={`text-2xl lg:text-3xl font-bold transition-colors duration-300 ${
                transparent ? "text-white/90" : "text-charcoal"
              }`}
            >
              Directory
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  transparent
                    ? "text-white/80 hover:text-white"
                    : "text-charcoal-light hover:text-brand"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/santas"
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                transparent
                  ? "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                  : "bg-brand hover:bg-brand-dark text-white"
              }`}
            >
              Find a Santa
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors ${
              transparent ? "text-white" : "text-charcoal"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-charcoal hover:text-brand transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/santas"
                onClick={() => setMobileOpen(false)}
                className="block bg-brand text-white text-center px-5 py-3 rounded-lg font-semibold"
              >
                Find a Santa
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
