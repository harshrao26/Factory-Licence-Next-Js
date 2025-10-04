// components/RERAStepsAll.jsx
"use client";

import React from "react";
import { MdOutlineContactSupport, MdDescription, MdUploadFile, MdPayment, MdRepeat, MdPublishedWithChanges, MdOutlineSupportAgent } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";

/**
 * RERAStepsAll
 * - Shows all steps at once in a responsive layout
 * - Desktop: horizontal row with connectors
 * - Mobile: stacked with vertical connectors
 *
 * Usage:
 * import RERAStepsAll from "@/components/RERAStepsAll";
 * <RERAStepsAll />
 */

const STEPS = [
  {
    step: "Preliminary Consultation",
    description:
      "Lawfinity experts assess the eligibility and gather required information and documents.",
    Icon: MdOutlineContactSupport,
  },
  {
    step: "Document Preparation",
    description:
      "We prepare, verify and compile all documents necessary for filing the RERA application.",
    Icon: MdDescription,
  },
  {
    step: "Application Filing",
    description:
      "The complete application is submitted to the respective State RERA Authority through the online portal.",
    Icon: MdUploadFile,
  },
  {
    step: "Fee Payment",
    description:
      "Government fees are calculated and paid online as per project size and nature of applicant.",
    Icon: MdPayment,
  },
  {
    step: "Follow-up & Compliance Check",
    description:
      "Lawfinity coordinates with RERA officials for any clarifications or additional requirements.",
    Icon: MdRepeat,
  },
  {
    step: "Certificate Issuance",
    description:
      "On successful verification, the RERA Authority issues the registration certificate.",
    Icon: MdPublishedWithChanges,
  },
  {
    step: "Post-Registration Support",
    description:
      "Lawfinity assists with ongoing RERA compliance such as quarterly updates, extensions and revisions.",
    Icon: MdOutlineSupportAgent,
  },
];

export default function RERAStepsAll() {
  return (
    <section aria-label="Complete RERA process steps" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-semibold">Our 7-Step RERA Process</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Every stage handled end-to-end by Lawfinity — displayed here so you can see the full journey at a glance.
          </p>
        </div>

        {/* steps container */}
        <div className="relative space-y-12">
          {/* Horizontal layout on lg+, grid fallback on smaller screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STEPS.map((s, i) => {
              const Icon = s.Icon;
              const isLast = i === STEPS.length - 1;
              return (
                <div key={s.step} className="relative">
                  <article
                    className={`bg-white/95 backdrop-blur border border-gray-100 rounded-3xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
                    aria-labelledby={`step-${i + 1}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold shadow-md bg-gradient-to-br from-amber-500 to-yellow-400 ring-4 ring-amber-100`}>
                          <span className="text-lg">{i + 1}</span>
                        </div>
                        <div className="mt-2 w-12 h-12 rounded-full -ml-1 flex items-center justify-center bg-white border border-gray-100 shadow-sm hover:scale-105 transition-transform">
                          <Icon className="text-2xl text-amber-600" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 id={`step-${i + 1}`} className="text-lg font-semibold text-gray-900">{s.step}</h3>
                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.description}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="text-xs text-gray-400">{i === STEPS.length - 1 ? "Completed" : `Step ${i + 1} of ${STEPS.length}`}</div>
                          <div className="text-xs text-green-700 bg-green-100 px-3 py-1 rounded-full flex items-center gap-2">
                            <FiCheckCircle className="text-xs" />
                            <span>{i === STEPS.length - 1 ? "Ongoing Support" : "On track"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>

          {/* Mobile / tablet stacked / 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
            {STEPS.map((s, i) => {
              const Icon = s.Icon;
              const isLast = i === STEPS.length - 1;
              return (
                <div key={s.step} className="relative">
                  <article className="bg-white/95 backdrop-blur border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold bg-gradient-to-br from-amber-500 to-yellow-400 shadow ring-2 ring-amber-200">
                          {i + 1}
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="text-md font-semibold text-gray-900">{s.step}</h3>
                          <div className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded-full flex items-center gap-1">
                            <FiCheckCircle className="text-xs" />
                            <span>{isLast ? "Support" : "On track"}</span>
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">{s.description}</p>
                      </div>
                    </div>
                  </article>

                  {/* Vertical connector line (except last in list) */}
                  {!isLast && (
                    <div className="absolute left-6 top-full mt-2 w-px h-6 bg-gradient-to-b from-amber-300 to-yellow-300 opacity-60" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* footer note */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Lawfinity handles each stage end-to-end — documentation, payments, follow-ups and long-term compliance.
        </div>
      </div>
    </section>
  );
}
