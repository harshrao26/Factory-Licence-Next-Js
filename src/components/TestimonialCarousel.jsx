// components/TestimonialsCarousel.jsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

/**
 * TestimonialsCarousel
 * - Responsive multi-card carousel: 1 (sm) / 2 (md) / 3 (lg+) visible
 * - Auto-rotate with pause-on-hover, keyboard navigation (← / →)
 * - Accessible: aria labels, roles, focusable controls
 *
 * Usage:
 * import TestimonialsCarousel from "@/components/TestimonialsCarousel";
 * <TestimonialsCarousel />
 */

const TESTIMONIALS = [
  {
    quote:
      "Lawfinity made the whole RERA registration simple and pain-free. Documents, follow-ups and the final certificate — everything handled end-to-end.",
    name: "Amit S.",
    role: "Founder — BlueBrick Developers",
    avatar: null,
    rating: 5,
  },
  {
    quote:
      "Excellent support and quick turnaround. Their team understands the portal quirks and gets approvals faster than others we've used.",
    name: "Neha K.",
    role: "Project Manager — Zenith Builders",
    avatar: null,
    rating: 5,
  },
  {
    quote:
      "Transparent fees, clear communication and audit-ready filings. We recommend Lawfinity to every partner.",
    name: "Rohit D.",
    role: "CFO — Skyline Realty",
    avatar: null,
    rating: 5,
  },
  {
    quote:
      "They helped us with amendments and extensions without fuss. Professional and result-oriented.",
    name: "Priya M.",
    role: "Legal Head — UrbanEdge",
    avatar: null,
    rating: 5,
  },
  {
    quote:
      "Great attention to detail — monthly compliance reports are clean and easy to share with auditors.",
    name: "Sandeep R.",
    role: "Operations — BuildHaus",
    avatar: null,
    rating: 4,
  },
];

function T({ name, src, className = "" }) {
  if (src) {
    return <img src={src} alt={name} className={`w-12 h-12 rounded-full object-cover ${className}`} />;
  }
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div
      className={`w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-400 text-white flex items-center justify-center font-semibold ${className}`}
      aria-hidden
    >
      {initials}
    </div>
  );
}

export default function TestimonialsCarousel() {
  const containerRef = useRef(null);
  const autoRef = useRef(null);
  const [index, setIndex] = useState(0); // page index (0..max)
  const [visible, setVisible] = useState(3);
  const total = TESTIMONIALS.length;
  const pages = Math.max(1, Math.ceil(total / visible));

  // update visible based on width
  useEffect(() => {
    function updateVisible() {
      const w = window.innerWidth;
      if (w < 640) setVisible(1);
      else if (w < 1024) setVisible(2);
      else setVisible(3);
    }
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  // recompute pages when visible changes and clamp index
  useEffect(() => {
    const newPages = Math.max(1, Math.ceil(total / visible));
    if (index >= newPages) setIndex(newPages - 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, total]);

  // autoplay
  useEffect(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setIndex((i) => {
        const p = Math.max(1, Math.ceil(total / visible));
        return (i + 1) % p;
      });
    }, 4500);
    return () => clearInterval(autoRef.current);
  }, [visible, total]);

  // pause on hover
  function handleMouseEnter() {
    clearInterval(autoRef.current);
  }
  function handleMouseLeave() {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setIndex((i) => {
        const p = Math.max(1, Math.ceil(total / visible));
        return (i + 1) % p;
      });
    }, 4500);
  }

  // keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, total]);

  const maxPage = Math.max(0, Math.ceil(total / visible) - 1);

  const prev = () => setIndex((i) => (i <= 0 ? maxPage : i - 1));
  const next = () => setIndex((i) => (i >= maxPage ? 0 : i + 1));
  const goTo = (p) => setIndex(p);

  // calculate transform
  const cardWidthPercent = 100 / visible;
  const translatePercent = -(index * 100);

  return (
    <section aria-labelledby="testimonials-heading" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-semibold">
              What our clients say
            </h2>
            <p className="mt-2 text-gray-600 max-w-xl">
              Real experiences from developers, legal teams and builders who used our RERA services.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonials"
              className="p-2 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonials"
              className="p-2 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative overflow-hidden"
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonials carousel"
        >
          {/* track */}
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(.2,.9,.2,1)]"
            style={{
              width: `${(total * cardWidthPercent)}%`,
              transform: `translateX(${translatePercent}%)`,
            }}
          >
            {TESTIMONIALS.map((t, idx) => {
              // compute flex-basis (width) per card
              return (
                <article
                  key={idx}
                  className="p-6"
                  style={{ flex: `0 0 ${cardWidthPercent}%`, maxWidth: `${cardWidthPercent}%` }}
                >
                  <div className="h-full bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 flex flex-col">
                    {/* Quote */}
                    <blockquote className="text-gray-800 italic text-sm flex-1">
                      “{t.quote}”
                    </blockquote>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar name={t.name} src={t.avatar} />
                        <div>
                          <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                          <div className="text-xs text-gray-500">{t.role}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1" aria-hidden>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FiStar key={i} className={`text-sm ${i < t.rating ? "text-amber-500" : "text-gray-200"}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* dots */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {Array.from({ length: Math.max(1, Math.ceil(total / visible)) }).map((_, p) => (
              <button
                key={p}
                onClick={() => goTo(p)}
                className={`w-3 h-3 rounded-full transition ${p === index ? "bg-amber-600 scale-110" : "bg-gray-300"}`}
                aria-label={`Go to testimonials page ${p + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Avatar helper (placed below so it's part of same file)
function Avatar({ name, src }) {
  if (src) {
    return <img src={src} alt={name} className="w-12 h-12 rounded-full object-cover" />;
  }
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-400 text-white flex items-center justify-center font-semibold">
      {initials}
    </div>
  );
}
