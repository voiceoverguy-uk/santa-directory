"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/santas", label: "Find a Santa" },
    { href: "/list-your-profile", label: "List Your Profile" },
    { href: "/locations", label: "Locations" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl lg:text-3xl font-bold text-brand">
              Santa
            </span>
            <span className="text-2xl lg:text-3xl font-bold text-charcoal">
              Directory
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-charcoal-light hover:text-brand transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/santas"
              className="bg-brand hover:bg-brand-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Find a Santa
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-charcoal"
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
