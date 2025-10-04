// components/RERABenefitsGridV2.jsx
"use client";

import React from "react";
import {
  FiEye,
  FiUsers,
  FiCheck,
  FiAward
} from "react-icons/fi";
import { MdSecurity, MdAccountBalance, MdTimeline, MdVerified } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { PiHandshake } from "react-icons/pi";
import { IoShieldHalfSharp } from "react-icons/io5";
import { LuClock } from "react-icons/lu";

/**
 * Clean, modern RERA benefits grid (V2).
 * - Tailwind-only (no extra libs)
 * - Use the "benefits" array to edit content, colors, icons.
 * - Save as components/RERABenefitsGridV2.jsx and import into any page.
 */

const benefits = [
  {
    id: "transparency",
    title: "Complete Transparency",
    desc:
      "Official RERA records for approvals, timelines and financial disclosures allow you to verify every claim before you commit.",
    Icon: FiEye,
    colorFrom: "from-amber-50",
    colorTo: "to-amber-100",
    accent: "amber",
  },
  {
    id: "timely",
    title: "Timely Delivery Guarantee",
    desc:
      "Developers are accountable — legal remedies and interest payments protect buyers against delays.",
    Icon: LuClock,
    colorFrom: "from-orange-50",
    colorTo: "to-amber-50",
    accent: "orange",
  },
  {
    id: "escrow",
    title: "Financial Protection (Escrow)",
    desc:
      "70% of collected funds are ring-fenced for the project — preventing diversion and protecting buyers.",
    Icon: MdSecurity,
    colorFrom: "from-yellow-50",
    colorTo: "to-amber-50",
    accent: "yellow",
  },
  {
    id: "quality",
    title: "Quality Assurance",
    desc:
      "Five-year defect liability period with mandatory rectification keeps builders accountable for workmanship.",
    Icon: FiAward,
    colorFrom: "from-amber-50",
    colorTo: "to-orange-50",
    accent: "amber",
  },
  {
    id: "pricing",
    title: "Standardized Pricing",
    desc:
      "Carpet-area-based pricing removes ambiguous extra charges (no pay for lobbies or common areas).",
    Icon: RiMoneyDollarCircleLine,
    colorFrom: "from-green-50",
    colorTo: "to-emerald-50",
    accent: "green",
  },
  {
    id: "dispute",
    title: "Quick Dispute Resolution",
    desc:
      "Dedicated RERA tribunals speed grievance redressal, avoiding long court procedures.",
    Icon: MdAccountBalance,
    colorFrom: "from-blue-50",
    colorTo: "to-indigo-50",
    accent: "blue",
  },
];

function Stat({ Icon, title, subtitle }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-14 h-14 rounded-2xl bg-white/60 backdrop-blur-md flex items-center justify-center shadow-sm  ">
        <Icon className="text-4xl text-amber-600" />
      </div>
      <div className="text-xl font-bold text-gray-900">{title}</div>
      <div className="text-base text-gray-500">{subtitle}</div>
    </div>
  );
}

export default function RERABenefitsGridV2() {
  return (
    <section
      aria-label="RERA benefits section"
      className="relative overflow-hidden py-20 px-6 bg-gradient-to-b from-slate-50 to-white"
    >
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 opacity-10 blur-3xl transform -rotate-12" />
        <div className="absolute right-0 bottom-10 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-200 to-sky-200 opacity-8 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 bg-amber-50 border border-amber-100 px-4 py-2 rounded-full shadow-sm">
              <MdVerified className="text-amber-700" />
              <span className="text-sm font-semibold text-amber-700">
                RERA — Buyer & Developer Protection
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold">
              Why RERA Registration Matters
              <span className="block text-lg font-normal text-gray-600 mt-3">
                Transparency, financial safety, quality and faster dispute resolution — designed to protect every stakeholder.
              </span>
            </h1>

            <div className="flex flex-wrap gap-3 mt-4">
              <button className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-3 rounded-2xl shadow-lg transition">
                <MdAccountBalance /> Register Your Project
              </button>

              <button className="inline-flex items-center gap-2 border border-amber-200 bg-white hover:bg-amber-50 px-5 py-3 rounded-2xl transition text-amber-700">
                <FiUsers /> Free Consultation
              </button>
            </div>
          </div>

          {/* Hero visual / card */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
              <div className="grid grid-cols-2 gap-0">
                <div className="p-6">
                  <div className="text-sm text-gray-500">Featured benefit</div>
                  <h3 className="text-xl font-bold text-gray-900 mt-2">Escrow protection</h3>
                  <p className="text-gray-600 mt-3 text-sm">
                    Developers must deposit 70% of collected funds in escrow — safeguarding construction funding.
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2"><FiCheck className="text-green-500" /> Funds ring-fenced</li>
                    <li className="flex items-center gap-2"><FiCheck className="text-green-500" /> Verified project accounts</li>
                    <li className="flex items-center gap-2"><FiCheck className="text-green-500" /> Bank-certified statements</li>
                  </ul>
                </div>

                <div className="relative">
                  <div className="h-full w-full bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-6">
                    {/* subtle mock image block */}
                    <div className="w-full h-44 rounded-xl bg-[url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1400&auto=format&fit=crop&s=')] bg-cover bg-center shadow-inner border" />
                  </div>
                </div>
              </div>
            </div>

            {/* floating small stat */}
            <div className="absolute -bottom-6 right-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl border shadow-md w-56">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500">Max Advance</div>
                  <div className="text-lg font-bold text-gray-900">10%</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Dispute Resolution</div>
                  <div className="text-lg font-bold text-gray-900">6 months</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {benefits.map((b, idx) => {
            const Icon = b.Icon;
            return (
              <article
                key={b.id}
                className="group relative rounded-2xl p-6 bg-white/60 backdrop-blur-md border border-gray-100 hover:shadow-2xl transform transition hover:-translate-y-3 duration-400"
                aria-labelledby={`benefit-${b.id}`}
                role="article"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${b.colorFrom} ${b.colorTo} shadow`}
                      aria-hidden
                    >
                      <Icon className="text-2xl text-gray-900" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h4 id={`benefit-${b.id}`} className="text-lg font-semibold text-gray-900">
                      {b.title}
                    </h4>

                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {b.desc}
                    </p>

                     
                  </div>
                </div>

                {/* hover shine */}
                <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br from-transparent to-white/10 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
              </article>
            );
          })}
        </div>

        {/* STATS ROW */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/60 backdrop-blur-md border border-gray-100 rounded-3xl p-6">
            <Stat Icon={RiMoneyDollarCircleLine} title="10% Max Advance" subtitle="Payment Protection" />
            <Stat Icon={MdTimeline} title="6 Months" subtitle="Dispute Resolution" />
            <Stat Icon={IoShieldHalfSharp} title="5 Years" subtitle="Defect Liability" />
            <Stat Icon={PiHandshake} title="Verified Projects" subtitle="Trust & Transparency" />
          </div>
        </div>

        {/* CTA FOOTER */}
        <div className="rounded-3xl bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-100 p-8 shadow-md">
          <div className="md:flex md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900">Ready to register your project under RERA?</h3>
              <p className="text-gray-700 mt-2">Get full compliance support, documentation and faster approvals — increase buyer confidence.</p>
            </div>

            <form className="mt-4 md:mt-0 flex gap-3 items-center">
              
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-2xl transition"
              >
                Get Started
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
