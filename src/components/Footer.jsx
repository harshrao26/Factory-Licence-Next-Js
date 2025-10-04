// components/Footer.jsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiChevronRight,
} from "react-icons/fi";

/**
 * Footer
 * - Tailwind-only styles (drop into any Next.js 15 app-router page)
 * - Accessible, responsive, and includes a working newsletter UI (client-side)
 *
 * Usage:
 * import Footer from "@/components/Footer";
 * <Footer />
 */

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const year = new Date().getFullYear();

  function validateEmail(e) {
    return /\S+@\S+\.\S+/.test(e);
  }

  async function handleSubscribe(e) {
    e.preventDefault();
    if (!validateEmail(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");

    // Simulate a subscribe request (replace with real API)
    try {
      await new Promise((res) => setTimeout(res, 800));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand + short */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-400 flex items-center justify-center text-slate-900 font-bold shadow">
                LF
              </div>
              <div>
                <div className="font-extrabold text-lg">Lawfinity</div>
                <div className="text-xs text-slate-300">RERA filing & compliance experts</div>
              </div>
            </Link>

            <p className="text-sm text-slate-300 max-w-sm">
              We handle end-to-end RERA compliance — filings, escrow checks, amendments and post-registration support so you can focus on building.
            </p>

            <div className="flex items-center gap-3">
              <a href="#" aria-label="Lawfinity LinkedIn" className="p-2 rounded-md bg-white/5 hover:bg-white/8 transition">
                <FiLinkedin />
              </a>
              <a href="#" aria-label="Lawfinity Twitter" className="p-2 rounded-md bg-white/5 hover:bg-white/8 transition">
                <FiTwitter />
              </a>
              <a href="#" aria-label="Lawfinity Instagram" className="p-2 rounded-md bg-white/5 hover:bg-white/8 transition">
                <FiInstagram />
              </a>
              <a href="#" aria-label="Lawfinity Facebook" className="p-2 rounded-md bg-white/5 hover:bg-white/8 transition">
                <FiFacebook />
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/services/rera-registration" className="flex items-center gap-2 hover:text-white">
                  <FiChevronRight /> RERA Project Registration
                </Link>
              </li>
              <li>
                <Link href="/services/agent-registration" className="flex items-center gap-2 hover:text-white">
                  <FiChevronRight /> Agent & Promoter Registration
                </Link>
              </li>
              <li>
                <Link href="/services/compliance" className="flex items-center gap-2 hover:text-white">
                  <FiChevronRight /> Compliance & Escrow Audit
                </Link>
              </li>
              <li>
                <Link href="/services/amendments" className="flex items-center gap-2 hover:text-white">
                  <FiChevronRight /> Amendments & Extensions
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/blog" className="flex items-center gap-2 hover:text-white">
                  <FiChevronRight /> Blog & Guides
                </Link>
              </li>
              <li>
                <Link href="/faq" className="flex items-center gap-2 hover:text-white">
                  <FiChevronRight /> FAQ
                </Link>
              </li>
              <li>
                <Link href="/docs/checklist.pdf" className="flex items-center gap-2 hover:text-white">
                  <FiChevronRight /> Filing Checklist (PDF)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center gap-2 hover:text-white">
                  <FiChevronRight /> Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Get in touch</h4>

            <ul className="text-sm text-slate-300 space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-amber-400"><FiMapPin /></span>
                <div>
                  <div className="text-sm">Lawfinity India Pvt Ltd</div>
                  <div className="text-xs text-slate-400">Delhi, India</div>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <FiPhone className="text-amber-400" />
                <a className="text-sm hover:text-white" href="tel:+911234567890">+91 12 3456 7890</a>
              </li>

              <li className="flex items-center gap-3">
                <FiMail className="text-amber-400" />
                <a className="text-sm hover:text-white" href="mailto:hello@lawfinity.example">hello@lawfinity.example</a>
              </li>
            </ul>

            <form onSubmit={handleSubscribe} className="mt-2">
              <label htmlFor="newsletter" className="sr-only">Subscribe to newsletter</label>
              <div className="flex gap-2">
                <input
                  id="newsletter"
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (status !== "idle") setStatus("idle"); }}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/6 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 disabled:opacity-60"
                >
                  {status === "loading" ? "Joining..." : "Subscribe"}
                </button>
              </div>

              <div role="status" aria-live="polite" className="mt-3 min-h-[1.25rem] text-sm">
                {status === "error" && <span className="text-rose-400">Please enter a valid email address.</span>}
                {status === "success" && <span className="text-emerald-300">Thanks — you’re subscribed! (demo)</span>}
              </div>

              <p className="text-xs text-slate-500 mt-3">We only send essential updates. No spam. Unsubscribe anytime.</p>
            </form>
          </div>
        </div>

        {/* bottom line */}
        <div className="mt-12 border-t border-white/6 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-400">&copy; {year} Lawfinity India Pvt Ltd. All rights reserved.</div>

          <div className="flex items-center gap-4 text-sm text-slate-400">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <span className="hidden md:inline">•</span>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <span className="hidden md:inline">•</span>
            <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
