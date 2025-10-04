"use client";
import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { MdOutlineSupportAgent } from "react-icons/md";

// CONTACT PAGE - Next.js 15 app-router ready
// Save as: app/contact/page.jsx

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Hero />
      {/* <ContactOptions /> */}
      <OfficesGrid />
      <HeadquartersSection />
      {/* <ContactForm /> */}
    </main>
  );
}

/* ----------------------------
   HERO
   ---------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-yellow-50 py-20">
      {/* Decorative gradient blur circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-tr from-amber-300 via-yellow-200 to-yellow-100 rounded-full filter blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-bl from-yellow-300 via-amber-200 to-amber-100 rounded-full filter blur-3xl opacity-40 translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold">Contact Lawfinity</h1>
        <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
          Whether you’re a developer, agent, or buyer — we’re here to help with
          RERA filings, compliance, and support. Reach us anytime.
        </p>
      </div>
    </section>
  );
}

/* ----------------------------
   CONTACT OPTIONS (quick links)
   ---------------------------- */
function ContactOptions() {
  const items = [
    {
      icon: <FiPhone className="text-xl" />,
      title: "Call Us",
      desc: "+91 99107 74687",
      href: "tel:+919910774687",
    },
    {
      icon: <FiMail className="text-xl" />,
      title: "Email",
      desc: "hello@lawfinity.example",
      href: "mailto:hello@lawfinity.example",
    },
    {
      icon: <MdOutlineSupportAgent className="text-xl" />,
      title: "Support Hours",
      desc: "Mon-Sat, 9:30 AM - 6:30 PM",
      href: "#",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-white to-slate-50">
      <div className="max-w-5xl mx-auto px-6 grid sm:grid-cols-3 gap-6">
        {items.map((i, idx) => (
          <a
            key={idx}
            href={i.href}
            className="flex flex-col items-center gap-4 rounded-3xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-yellow-100 text-amber-600 ring-4 ring-amber-50 rounded-2xl flex items-center justify-center">
              {i.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{i.title}</h3>
            <p className="text-slate-600 text-sm">{i.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------
   OFFICES GRID
   ---------------------------- */
function OfficesGrid() {
  const offices = [
    {
      city: "Noida",
      phone: "+91 99107 74687",
      address:
        "Coco County, Plot No. GH-03 C, Sector-10, Greater Noida West, Uttar Pradesh 201309",
    },
    {
      city: "Gurugram",
      phone: "+91 93111 17064",
      address: "GLS Avenue 51, Sector 92, Gurgaon 122505",
    },
    {
      city: "Delhi",
      phone: "+91 95400 34687",
      address:
        "T-10, Plot No. -7, 3rd Floor, Pankaj Plaza, Pocket-7, Sector-12, Dwarka, New Delhi - 110078",
    },
    {
      city: "Lucknow",
      phone: "+91 99107 74687",
      address:
        "2nd Floor, JSV Hyundai Building CP-53, near Engineering College Chauraha, near CNG Petrol Pump, Lucknow, Uttar Pradesh 226021",
    },
    {
      city: "Patna",
      phone: "+91 72338 11034",
      address:
        "Shanti Garden apartment, Block A, 4th Floor, Flat no 401, Shaubhagya Sharma Path, Chitrasen Nagar, Near Maruti Suzuki service centre, Rupaspur - 800014",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold mb-12">Our Offices</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offices.map((o, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 border border-gray-100 bg-gradient-to-br from-white to-slate-50 shadow hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-amber-100 text-amber-600 mb-4">
                <FiMapPin />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{o.city} Office</h3>
              <p className="mt-2 text-sm text-gray-600">{o.address}</p>
              <a
                href={`tel:${o.phone.replace(/ /g, "")}`}
                className="mt-4 inline-flex items-center gap-2 text-sm px-4 py-2 rounded-xl bg-amber-600 text-white hover:bg-amber-700"
              >
                <FiPhone /> {o.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------
   CONTACT FORM
   ---------------------------- */
function ContactForm() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1000);
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Send us a message</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-100 rounded-3xl shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="text-sm text-slate-600">Full Name</label>
            <input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-200 focus:outline-none text-sm" required />
          </div>
          <div>
            <label className="text-sm text-slate-600">Email</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-200 focus:outline-none text-sm" required />
          </div>
          <div>
            <label className="text-sm text-slate-600">Phone</label>
            <input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-200 focus:outline-none text-sm" required />
          </div>
          <div>
            <label className="text-sm text-slate-600">Company (optional)</label>
            <input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-200 focus:outline-none text-sm" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-slate-600">Message</label>
            <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-200 focus:outline-none text-sm h-40" required />
          </div>

          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white font-semibold px-6 py-3 rounded-2xl shadow hover:from-amber-700 hover:to-yellow-600 transition disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Submit"}
            </button>
          </div>

          {status === "success" && (
            <div className="md:col-span-2 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl text-sm">
              Message sent successfully. We’ll be in touch soon!
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

/* ----------------------------
   FAQ STRIP (mini)
   ---------------------------- */
function FAQStrip() {
  return (
    <section className="py-12 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Have questions?</h2>
        <p className="mt-2 text-slate-300">Check our FAQ section for detailed guidance on RERA filings and compliance.</p>
        <a
          href="/faq"
          className="mt-4 inline-block px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-2xl shadow"
        >
          View FAQs
        </a>
      </div>
    </section>
  );
}

/* ----------------------------
   FOOTER (minimal)
   ---------------------------- */
function FooterMinimal() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-700 py-6 text-sm">
      <div className="max-w-7xl mx-auto px-6 text-center">
        © {new Date().getFullYear()} Lawfinity India Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}



// components/HeadquartersSection.jsx
 
 
  function HeadquartersSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* Map iframe */}
        <div className="rounded-3xl shadow-xl border border-gray-200 overflow-hidden w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.298824895376!2d77.04086441098124!3d28.590810875586193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b52f4553e01%3A0x721ecdfa948756e8!2sLawfinity%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1759228512679!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Office details */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            Our Headquarters
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-xl">
            Visit our main office in Dwarka, New Delhi. This is where our core
            compliance, legal, and support teams are based to ensure every RERA
            filing is smooth and audit-ready.
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex gap-4 items-start p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="p-3 rounded-lg bg-amber-100 text-amber-700">
                <FiMapPin />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Address</h3>
                <p className="text-sm text-gray-600 mt-1">
                  T-10, Plot No. -7, 3rd Floor, Pankaj Plaza, Pocket-7, Sector-12,
                  Dwarka, New Delhi - 110078
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="p-3 rounded-lg bg-amber-100 text-amber-700">
                <FiPhone />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <a
                  href="tel:+919910774687"
                  className="text-sm text-amber-700 hover:underline"
                >
                  +91 99107 74687
                </a>
              </div>
            </div>
          </div>

          <div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=T-10,+Plot+No.+-7,+3rd+Floor,+Pankaj+Plaza,+Pocket-7,+Sector-12,+Dwarka,+New+Delhi+-+110078"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-semibold shadow"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
