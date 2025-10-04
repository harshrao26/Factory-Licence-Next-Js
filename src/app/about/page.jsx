"use client";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineContactSupport, MdAccountBalance, MdVerified } from "react-icons/md";
import { FiUsers, FiPhone, FiMail } from "react-icons/fi";
import StatsSection from "@/components/StatsSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";

// ABOUT PAGE - single-file React component (Next.js 15 app-router friendly)
// Save as: app/about/page.jsx OR components/AboutPage.jsx depending on your structure.

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Hero />
      <MissionValues />
      <StatsSection />
      
      <WhyChoose />
      <TestimonialCarousel />
      <CTA />
      <FooterMinimal />
    </main>
  );
}

/* ----------------------------
   HERO
   ---------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-amber-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <div className="inline-flex items-center gap-3 bg-amber-100/80 px-4 py-2 rounded-full border border-amber-200 w-max">
            <MdVerified className="text-amber-700 text-xl" />
            <span className="text-sm font-semibold text-amber-700">Trusted RERA Experts</span>
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold">Lawfinity — RERA filing & compliance, done right</h1>

          <p className="mt-4 text-lg text-slate-700 max-w-2xl">We help developers, promoters and real-estate stakeholders navigate RERA registration, escrow compliance, amendments and post-registration obligations — with audit-ready filing and fast turnarounds.</p>

          <div className="mt-6 flex gap-4 flex-wrap">
            <a href="#contact" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-3 rounded-2xl shadow">Get a free consult</a>
            <a href="#how-we-help" className="inline-flex items-center gap-2 border border-amber-200 bg-white hover:bg-amber-50 text-amber-700 font-semibold px-5 py-3 rounded-2xl">How we help</a>
          </div>

         
        </div>

        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1400&auto=format&fit=crop&s=" alt="team" className="w-full h-80 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold">Audit-ready filing</h3>
              <p className="mt-2 text-sm text-slate-600">We structure the application and documents so they pass regulator scrutiny and audits without repeated queries.</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="text-sm text-slate-500">Rated</div>
                <div className="text-amber-500 font-bold">4.9/5</div>
                <div className="text-sm text-slate-400">by clients (2024)</div>
              </div>
            </div>
          </div>

          {/* decorative shapes */}
          <div className="hidden md:block absolute -left-12 -bottom-12 w-40 h-40 bg-amber-200 rounded-full opacity-10 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}

function StatMini({ label, value }) {
  return (
    <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 text-center">
      <div className="text-xl font-extrabold">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}

/* ----------------------------
   MISSION + VALUES
   ---------------------------- */
function MissionValues() {
  const values = [
    { title: 'Transparency', desc: 'Clear fees, verified documents and open communication.' },
    { title: 'Accountability', desc: 'We own deliverables and timelines; your project matters.' },
    { title: 'Compliance-first', desc: 'Every filing is audit-ready and bank-verified where required.' },
    { title: 'Client-first', desc: 'Single point of contact with proactive updates.' },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
             <h2 className="mt-3 text-4xl md:text-5xl font-semibold">Make RERA simple, compliant and trustworthy</h2>
            <p className="mt-4 text-slate-700 max-w-xl">We strip away regulatory friction so developers and buyers can transact with confidence. Our team blends legal expertise, process engineering and cloud-first workflows to deliver reliable RERA outcomes.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div key={i} className="p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <h4 className="font-semibold">{v.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow">
              <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop&s=" alt="process" className="w-full h-96 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------
   STATS STRIP (dark variant)
   ---------------------------- */
function StatsStrip() {
  const stats = [
    { label: 'Project Registrations', value: 3500 },
    { label: 'Agent Registrations', value: 11000 },
    { label: 'Units Registered', value: 105000 },
    { label: 'Area Registered (Cr sq.ft)', value: 11 },
    { label: 'Cities Covered', value: 120 },
    { label: 'Workshops', value: 75 },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-[#0b1220] via-[#071032] to-[#071638] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-extrabold">Our Reach</h3>
            <p className="mt-2 text-slate-200 max-w-md">We operate across major metros and emerging markets — delivering compliance at scale.</p>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="p-4 bg-white/6 rounded-2xl border border-white/6">
                  <div className="text-2xl md:text-3xl font-extrabold">{formatNumber(s.value)}</div>
                  <div className="text-sm text-slate-300 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function formatNumber(n) {
  if (n >= 100000) return n.toLocaleString('en-IN');
  return n;
}

/* ----------------------------
   TEAM + TIMELINE
   ---------------------------- */
function TeamAndTimeline() {
  const team = [
    { name: 'Ankit Sharma', role: 'Head - Legal', bio: '10+ years in real estate regulation', img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop&s=' },
    { name: 'Sudhanshu Verma', role: 'Operations Lead', bio: 'Manages filings, banks and escrow coordination', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop&s=' },
    { name: 'Neha Kapoor', role: 'Client Success', bio: 'Single point of contact for clients', img: 'https://images.unsplash.com/photo-1545996124-1b8a5e9a7a8b?q=80&w=800&auto=format&fit=crop&s=' },
  ];

  const timeline = [
    { year: '2018', event: 'Company founded - advisory & small filings' },
    { year: '2019', event: 'First 500 projects completed' },
    { year: '2021', event: 'Escrow-verification services launched' },
    { year: '2023', event: 'Expanded to 6 offices across India' },
    { year: '2025', event: 'Reached 100k units registered milestone' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-extrabold">Our Team</h3>
            <p className="mt-2 text-slate-600">Experienced legal professionals, compliance specialists and operations staff — all dedicated to RERA processes.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {team.map((t, i) => (
                <div key={i} className="flex items-start gap-4 bg-slate-50 p-4 rounded-2xl border border-gray-100">
                  <img src={t.img} alt={t.name} className="w-16 h-16 rounded-lg object-cover" />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                    <div className="text-sm text-gray-600 mt-1">{t.bio}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold">Our Journey</h3>
            <p className="mt-2 text-slate-600">Milestones that shaped Lawfinity's growth and capabilities.</p>

            <ol className="mt-6 space-y-4">
              {timeline.map((t, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center border border-amber-100 font-semibold">{t.year}</div>
                  <div>
                    <div className="font-medium">{t.event}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------
   WHY CHOOSE (features)
   ---------------------------- */
function WhyChoose() {
  const items = [
    { title: 'Escrow-friendly filings', desc: 'Bank-ready statements, complete with audit trails.' },
    { title: 'Regulator liaison', desc: 'We coordinate responses and reduce query cycles.' },
    { title: 'Fixed-fee estimates', desc: 'Transparent pricing and no surprise charges.' },
    { title: 'Post-registration support', desc: 'Quarterly updates, amendments and renewals handled.' },
  ];

  return (
    <section id="how-we-help" className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-4xl md:text-5xl font-semibold">Why clients choose Lawfinity</h3>
          <p className="mt-2 text-slate-700 max-w-2xl mx-auto">A predictable, professional process that reduces time-to-registration and keeps records audit-ready.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 font-bold">{i + 1}</div>
              <h4 className="mt-4 font-semibold">{it.title}</h4>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------
   CTA
   ---------------------------- */
function CTA() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-r from-amber-50 to-white p-8 border border-amber-100 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Ready to register your project?</h3>
            <p className="mt-2 text-slate-700">Book a free strategy call and get a tailored compliance plan in 48 hours.</p>
          </div>

          <div className="flex gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-2xl">Book Strategy Call</a>
            <a href="/contact" className="inline-flex items-center gap-2 border border-amber-200 bg-white hover:bg-amber-50 text-amber-700 font-semibold px-6 py-3 rounded-2xl">Contact Sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------
   FOOTER (minimal)
   ---------------------------- */
function FooterMinimal() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="inline-flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-400 flex items-center justify-center text-slate-900 font-bold">LF</div>
            <div>
              <div className="font-semibold">Lawfinity</div>
              <div className="text-xs text-slate-300">RERA filing & compliance experts</div>
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-400 max-w-sm">We manage filings, escrow compliance and long-term regulatory upkeep so you can focus on delivery.</p>
        </div>

        <div>
          <h4 className="font-semibold">Offices</h4>
          <ul className="mt-3 text-sm text-slate-400 space-y-2">
            <li>Noida • +91 99107 74687</li>
            <li>Gurugram • +91 93111 17064</li>
            <li>Delhi • +91 95400 34687</li>
            <li>Lucknow • +91 99107 74687</li>
            <li>Patna • +91 72338 11034</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <div className="mt-3 text-sm text-slate-400">
            <div className="flex items-center gap-2"><FiPhone /> <a href="tel:+919910774687" className="hover:text-white">+91 99107 74687</a></div>
            <div className="flex items-center gap-2 mt-2"><FiMail /> <a href="mailto:hello@lawfinity.example" className="hover:text-white">hello@lawfinity.example</a></div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-slate-500 text-xs">© {new Date().getFullYear()} Lawfinity India Pvt Ltd — All rights reserved.</div>
    </footer>
  );
}

/* ----------------------------
   Small reusable helpers
   ---------------------------- */

// Note: If you want counters or more interactivity, move them into client components and wire to APIs.

