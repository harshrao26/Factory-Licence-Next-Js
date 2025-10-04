// components/HowWeHelpStrip.jsx
"use client";

import React from "react";
import { MdOutlineContactSupport } from "react-icons/md";
import { MdAccountBalance, MdCropSquare } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { RiGovernmentLine } from "react-icons/ri";
import { PiPresentationChart } from "react-icons/pi";

/**
 * HowWeHelpStrip
 * - Full width strip section with left-side intro and right-side stats
 * - Responsive: grid -> stacked on small screens
 * - Tailwind CSS only
 *
 * Usage:
 * import HowWeHelpStrip from "@/components/HowWeHelpStrip";
 * <HowWeHelpStrip />
 */

export default function HowWeHelpStrip() {
  const stats = [
    { label: "Project Registrations", value: "3,500", Icon: MdAccountBalance, tone: "amber" },
    { label: "Agent Registrations", value: "11,000", Icon: FiUsers, tone: "orange" },
    { label: "Units Registered", value: "1,05,000", Icon: IoHomeOutline, tone: "green" },
    { label: "Area Registered", value: "11 Cr Sq. Ft", Icon: MdCropSquare, tone: "blue" },
    { label: "Cities Covered", value: "120", Icon: RiGovernmentLine, tone: "violet" },
    { label: "Workshops", value: "75", Icon: PiPresentationChart, tone: "pink" },
  ];

  return (
    <section
      aria-labelledby="how-we-help-strip-heading"
      className="w-full bg-gradient-to-r from-amber-50/90 via-yellow-50/80 to-white/80 border-t border-b border-amber-100 py-12"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className=" ">
          {/* LEFT: Intro / CTA */}
          

          {/* RIGHT: Stats */}
          <div className="">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {stats.map((s, idx) => {
                const Icon = s.Icon;
                return (
                  <div
                    key={idx}
                    className="relative bg-white/95 border border-gray-100 rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
                    role="group"
                    aria-label={`${s.label}: ${s.value}`}
                  >
                    <div
                      className={`w-14 h-14 rounded-lg flex items-center justify-center shadow-md ${
                        idx % 6 === 0
                          ? "bg-gradient-to-br from-amber-500 to-yellow-400 text-white"
                          : idx % 6 === 1
                          ? "bg-gradient-to-br from-orange-500 to-amber-300 text-white"
                          : idx % 6 === 2
                          ? "bg-gradient-to-br from-green-500 to-emerald-400 text-white"
                          : idx % 6 === 3
                          ? "bg-gradient-to-br from-sky-500 to-indigo-400 text-white"
                          : idx % 6 === 4
                          ? "bg-gradient-to-br from-violet-500 to-fuchsia-400 text-white"
                          : "bg-gradient-to-br from-pink-500 to-rose-400 text-white"
                      }`}
                      aria-hidden
                    >
                      <Icon className="text-xl" />
                    </div>

                    <div className="flex-1">
                      <div className="text-2xl md:text-3xl font-bold text-gray-900 leading-none">
                        {s.value}
                      </div>
                      <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
                    </div>

                    <div className="hidden md:flex items-center ml-3 text-xs text-green-700 bg-green-100 px-3 py-1 rounded-full border border-green-200">
                      <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Verified</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* subtle footer note */}
        <div className="mt-6 text-sm text-gray-500 text-center lg:text-left max-w-4xl">
          Trusted by developers, agents and buyers — Lawfinity handles compliance and paperwork so you can focus on building.
        </div>
      </div>
    </section>
  );
}
