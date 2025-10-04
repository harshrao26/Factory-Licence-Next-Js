// components/Header.jsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiSearch, FiChevronDown, FiPhone } from "react-icons/fi";
import { MdAccountBalance } from "react-icons/md";

/**
 * Header
 * - Next.js 15 App Router compatible (JSX)
 * - Tailwind CSS required
 * - Drop into any page/layout (e.g., app/layout.jsx)
 *
 * Notes:
 * - Replace logo block with your SVG if available
 * - Nav structure is easy to extend
 */

const SERVICES = [
  { title: "Project Registration", href: "/services/rera-registration" },
  { title: "Agent Registration", href: "/services/agent-registration" },
  { title: "Compliance & Escrow", href: "/services/compliance" },
  { title: "Amendments & Extensions", href: "/services/amendments" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);

  // close dropdowns on outside click / esc
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
        setSearchOpen(false);
      }
    }
    function onDoc(e) {
      // if click outside search input when open -> close
      if (searchOpen && searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onDoc);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onDoc);
    };
  }, [searchOpen]);

  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur bg-white/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo */}
            <div className="flex items-center gap-4">
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-400 flex items-center justify-center text-slate-900 font-bold shadow">
                  LF
                </div>
                <div className="hidden sm:flex flex-col leading-tight">
                  <span className="font-bold text-sm text-slate-900">Lawfinity</span>
                  <span className="text-xs text-slate-500 -mt-0.5">RERA compliance experts</span>
                </div>
              </Link>
            </div>

            {/* Center: Nav (desktop) */}
            <nav className="hidden lg:flex lg:items-center lg:gap-6">
              <Link href="/" className="text-sm text-slate-700 hover:text-slate-900 px-2 py-1 rounded-md">Home</Link>
              <Link href="/about" className="text-sm text-slate-700 hover:text-slate-900 px-2 py-1 rounded-md">About Us</Link>
              <Link href="/contact" className="text-sm text-slate-700 hover:text-slate-900 px-2 py-1 rounded-md">Contact Us</Link>

             
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
              {/* Search */}
               

              {/* Phone quick link */}
              <a href="tel:+911234567890" className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm bg-white/80 border border-white/10 shadow-sm hover:shadow md:flex">
                <FiPhone className="text-amber-600" />
                <span className="text-xs text-slate-800">+91 12 3456 7890</span>
              </a>

              {/* Primary CTA */}
              <Link href="/get-started" className="hidden md:inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-2xl font-semibold shadow">
                <MdAccountBalance /> Register Project
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(true)}
                className="inline-flex lg:hidden items-center justify-center p-2 rounded-md hover:bg-gray-50 text-slate-700"
                aria-label="Open menu"
              >
                <FiMenu />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-transform ${mobileOpen ? "translate-x-0" : "translate-x-full"} `} aria-hidden={!mobileOpen}>
        <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)}></div>
        <aside className="relative z-50 w-[92vw] max-w-sm h-full bg-white shadow-2xl p-6 overflow-auto">
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="inline-flex items-center gap-3" onClick={() => setMobileOpen(false)}>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-400 flex items-center justify-center text-slate-900 font-bold">LF</div>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-slate-900">Lawfinity</span>
                <span className="text-xs text-slate-500 -mt-0.5">RERA experts</span>
              </div>
            </Link>

            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2 rounded-md hover:bg-gray-100">
              <FiX />
            </button>
          </div>

          <nav className="space-y-3">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-md text-slate-700 hover:bg-amber-50">Home</Link>

            <div>
              <button
                onClick={() => setServicesOpen((s) => !s)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-slate-700 hover:bg-amber-50"
                aria-expanded={servicesOpen}
              >
                Services <FiChevronDown />
              </button>
              {servicesOpen && (
                <div className="mt-2 space-y-1 pl-4">
                  {SERVICES.map((s) => (
                    <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="block text-sm text-slate-700 px-3 py-2 rounded-md hover:bg-amber-50">
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

             
            <div className="mt-4 border-t border-gray-100 pt-4">
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block w-full text-center bg-amber-600 text-white px-4 py-2 rounded-2xl font-semibold mb-3">Get Started</Link>
              <a href="tel:+911234567890" className="block text-center px-4 py-2 rounded-md border border-gray-100">+91 12 3456 7890</a>
            </div>

            <div className="mt-6 text-sm text-slate-500">
              <div>Lawfinity India Pvt Ltd</div>
              <div className="mt-1">Delhi, India</div>
            </div>
          </nav>
        </aside>
      </div>
    </header>
  );
}
