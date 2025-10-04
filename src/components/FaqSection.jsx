// components/FAQSection.jsx
"use client";

import React, { useMemo, useState } from "react";
import { FiSearch, FiMinus, FiPlus, FiChevronDown, FiChevronUp } from "react-icons/fi";

/**
 * FAQSection
 * - Searchable, category-filterable FAQ with accessible accordion items
 * - Tailwind CSS only
 *
 * Usage:
 * import FAQSection from "@/components/FAQSection";
 * <FAQSection />
 */

const FAQS = [
  {
    id: 1,
    q: "What is RERA and who needs to register?",
    a: "RERA (Real Estate Regulatory Authority) is an Indian law to protect home buyers and promote transparency. Developers and promoters of real estate projects that meet the state-prescribed thresholds (eg. minimum number of units or minimum area) must register the project with the respective State RERA before advertising or selling.",
    category: "Basics",
  },
  {
    id: 2,
    q: "How long does RERA project registration take?",
    a: "Processing time varies by state; typically 15–45 working days if documents and fees are in order. Complex projects or queries from the authority may extend timelines. We proactively track filings to minimize delays.",
    category: "Process",
  },
  {
    id: 3,
    q: "What documents are required for filing?",
    a: "Common documents include: sanctioned plans, land title documents, conveyance deed, layout plans, project brochure, contractor agreements, audited bank statement for escrow, and identity proofs of promoters. Exact lists vary by state — we prepare a checklist tailored to your project.",
    category: "Documents",
  },
  {
    id: 4,
    q: "How are government fees calculated?",
    a: "Fees depend on the state, project type and area (or built-up area in some states). Several states use per-sq.m rates and/or slab tables; some states have minimum fees (e.g., Maharashtra). We calculate the exact government fee for your project before filing.",
    category: "Fees",
  },
  {
    id: 5,
    q: "What is the escrow requirement?",
    a: "RERA typically requires promoters to deposit a specified percentage (commonly 70%) of collected funds in a designated escrow account that can only be used for that project's construction and land costs. This prevents fund diversion and protects buyers.",
    category: "Protections",
  },
  {
    id: 6,
    q: "Can buyers file complaints under RERA?",
    a: "Yes. Buyers can file grievances with the State RERA office or tribunal for issues like delay, misrepresentation, or structural defects. RERA provides for dispute resolution mechanisms with timelines shorter than usual civil courts.",
    category: "Protections",
  },
  {
    id: 7,
    q: "What happens if a developer delays the project?",
    a: "RERA allows buyers to claim compensation for delayed possession; authorities may order developers to refund amounts with interest, or pay penalties. Exact remedies and interest rates are state-specific.",
    category: "Protections",
  },
  {
    id: 8,
    q: "Do I need a lawyer to file RERA?",
    a: "You don’t strictly need a lawyer but professional help is highly recommended: filings require accurate documents, correct calculation of fees, escrow compliance and follow-ups. Using an experienced consultant reduces rejections and shortens timelines.",
    category: "Process",
  },
  {
    id: 9,
    q: "How long is the defect liability period?",
    a: "Most states enforce a defect liability period (commonly 5 years) during which the developer must rectify structural defects at no additional cost. Exact duration and liabilities may vary by state and contract terms.",
    category: "Protections",
  },
  {
    id: 10,
    q: "Can registrations be amended later?",
    a: "Yes. If project details change (e.g., revised plans, delay extensions, additional phases), promoters must update the registration via amendment filings. These may incur additional fees and require supporting documents.",
    category: "Process",
  },
  {
    id: 11,
    q: "Will RERA protect my advance payment?",
    a: "RERA’s escrow rules and regulation of advance payments (caps in some states) are designed to protect buyer funds. However, protection depends on correct escrow compliance and timely audits — which is why certified filings and bank statements matter.",
    category: "Fees",
  },
  {
    id: 12,
    q: "How do I verify an existing project?",
    a: "Each State RERA maintains an online registry. You can verify project registration number, promoter details, and documents on the state RERA portal. We can also perform a verification and provide a compliance snapshot.",
    category: "Basics",
  },
  {
    id: 13,
    q: "What if my application gets queried or rejected?",
    a: "Rejections/queries are commonly due to missing documents, mismatched plan versions, or fee miscalculations. We manage replies to queries, compile missing documents, and re-submit corrected applications to reduce back-and-forth.",
    category: "Process",
  },
];

const CATEGORIES = ["All", ...Array.from(new Set(FAQS.map((f) => f.category)))];

export default function FAQSection() {
  const [query, setQuery] = useState("");
  const [activeIds, setActiveIds] = useState(() => new Set([FAQS[0].id])); // initially open first
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQS.filter((f) => {
      const inCategory = category === "All" ? true : f.category === category;
      if (!inCategory) return false;
      if (!q) return true;
      return (f.q + " " + f.a).toLowerCase().includes(q);
    });
  }, [query, category]);

  function toggle(id) {
    setActiveIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function expandAll() {
    setActiveIds(new Set(filtered.map((f) => f.id)));
  }

  function collapseAll() {
    setActiveIds(new Set());
  }

  return (
    <section aria-labelledby="faq-heading" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-semibold">Frequently Asked Questions</h2>
          <p className="mt-2 text-gray-600">Answers to common questions about RERA registration, fees, process and post-registration support.</p>
        </div>

        

        {/* FAQ list */}
        <div className="space-y-4">
          {filtered.length === 0 && (
            <div className="text-center py-12 text-gray-500 bg-white rounded-lg border border-gray-100">No FAQs match your search. Try different keywords.</div>
          )}

          {filtered.map((f) => {
            const open = activeIds.has(f.id);
            return (
              <div key={f.id} className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggle(f.id)}
                  className="w-full text-left px-5 py-4 flex items-start justify-between gap-4 focus:outline-none"
                  aria-expanded={open}
                  aria-controls={`faq-${f.id}`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                     
                      <h3 className="text-md font-semibold text-gray-900">{f.q}</h3>
                    </div>
                   </div>

                  <div className="flex-shrink-0 ml-4 text-amber-600">
                    {open ? <FiChevronUp aria-hidden /> : <FiChevronDown aria-hidden />}
                  </div>
                </button>

                <div
                  id={`faq-${f.id}`}
                  role="region"
                  aria-hidden={!open}
                  className={`px-5 transition-[max-height,opacity,padding] duration-300 ease-in-out ${open ? "py-4 max-h-96 opacity-100" : "py-0 max-h-0 opacity-0"}`}
                >
                  <div className="text-sm text-gray-700 leading-relaxed">
                    {f.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}
