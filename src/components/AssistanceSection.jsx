// components/HowWeHelpSection.jsx
"use client";

import React from "react";
import { MdOutlineContactSupport, MdDescription, MdUploadFile, MdOutlineSupportAgent, MdAnalytics } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FiShield } from "react-icons/fi";

/**
 * HowWeHelpSection
 * - Clean, responsive "How we help" section
 * - Tailwind-only styles (no extra deps)
 * - Accessible, keyboard friendly buttons and semantic markup
 *
 * Usage:
 * import HowWeHelpSection from "@/components/HowWeHelpSection";
 * <HowWeHelpSection />
 */

const HELP_ITEMS = [
  {
    id: "consult",
    title: "Preliminary Consultation",
    desc: "Expert evaluation of eligibility and required documents — we map out the fastest route to registration.",
    Icon: MdOutlineContactSupport,
    tone: "amber",
  },
  {
    id: "docs",
    title: "Document Preparation",
    desc: "Accurate document compilation, verification, and formatting for error-free submission.",
    Icon: MdDescription,
    tone: "yellow",
  },
  {
    id: "filing",
    title: "Application Filing",
    desc: "We prepare and file your application on the official state RERA portal and track its progress.",
    Icon: MdUploadFile,
    tone: "orange",
  },
  {
    id: "fees",
    title: "Fee Calculation & Optimization",
    desc: "Transparent computation of government fees and optimization guidance to avoid unnecessary charges.",
    Icon: RiMoneyDollarCircleLine,
    tone: "green",
  },
  {
    id: "followup",
    title: "Follow-up & Compliance",
    desc: "Active coordination with RERA officials — we handle queries, responses, and compliance requests.",
    Icon: MdOutlineSupportAgent,
    tone: "blue",
  },
  {
    id: "support",
    title: "Post-Registration Support",
    desc: "Quarterly updates, extensions, and help with amendments — ongoing compliance made easy.",
    Icon: FiShield,
    tone: "violet",
  },
];

export default function HowWeHelpSection() {
  return (
    <section aria-labelledby="how-we-help-heading" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols- gap-8 items-start mb-10">
          <div>
            <p className="inline-flex items-center gap-3 rounded-full px-3 py-1 bg-amber-50 text-amber-700 text-sm font-semibold border border-amber-100 shadow-sm">
              <MdAnalytics className="text-lg" />
              How We Help
            </p>
            <h2 id="how-we-help-heading" className="mt-6 text-4xl md:text-5xl font-semibold">
              End-to-end RERA services that keep your project compliant and on schedule
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl">
              From initial consultation to post-registration compliance, Lawfinity offers an efficient, audit-ready service that removes friction and protects stakeholders.
            </p>

          
          </div>

        
        </div>

        {/* Feature grid (all items visible) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HELP_ITEMS.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <article
                key={item.id}
                className="group relative bg-white/90 backdrop-blur-md border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition transform hover:-translate-y-2"
                aria-labelledby={`help-${item.id}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center shadow-md bg-gradient-to-br ${
                      // nice color mapping
                      idx % 6 === 0
                        ? "from-amber-500 to-yellow-400"
                        : idx % 6 === 1
                        ? "from-amber-400 to-amber-200"
                        : idx % 6 === 2
                        ? "from-orange-400 to-amber-300"
                        : idx % 6 === 3
                        ? "from-green-500 to-emerald-400"
                        : idx % 6 === 4
                        ? "from-blue-500 to-sky-400"
                        : "from-violet-500 to-fuchsia-400"
                    }`}
                    aria-hidden
                  >
                    <Icon className="text-white text-2xl" />
                  </div>

                  <div className="flex-1">
                    <h4 id={`help-${item.id}`} className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <a
                        className="text-amber-600 font-medium text-sm inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                      >
                        Learn more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>

                      <div className="text-xs text-green-700 bg-green-100 px-3 py-1 rounded-full border border-green-200 hidden sm:flex items-center gap-2">
                        <FiShield className="text-xs" />
                        Trusted
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Want a custom compliance plan for your project?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg transition"
            >
              Book a Free Strategy Call
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 border border-amber-200 bg-white hover:bg-amber-50 text-amber-700 font-semibold px-6 py-3 rounded-2xl transition"
            >
              Request Proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
