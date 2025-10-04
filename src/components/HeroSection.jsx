"use client";
import { useState, useEffect } from "react";
import { FaPlay, FaArrowRight, FaBuilding, FaCheckCircle, FaClock } from "react-icons/fa";
import { MdVerified, MdSecurity, MdAccountBalance, MdGavel } from "react-icons/md";
import { BiChart, BiHomeAlt, BiShield } from "react-icons/bi";
import ContactForm from "./ContactForm";

const RERAHeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [userClicked, setUserClicked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!userClicked) setShowVideo(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, [userClicked]);

  const handlePlayClick = () => {
    setUserClicked(true);
    setShowVideo(true);
  };

  return (
    <section className="relative w-full min-h-[100vh] bg-gradient-to-br f rom-amber-50 via-yellow-50/0 to-orange-50/30 overflow-hidden">
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

     

      <main className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center space-y-6 mt-10">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-full shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <MdGavel className="text-amber-700 text-lg" />
            <span className="text-amber-800 font-semibold text-sm">Free RERA consultation with complete compliance.</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              <span className="block">Expert RERA Registration</span>
              <span className="block bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
                & Compliance Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Navigate real estate regulations with India's most trusted RERA consultancy. 
              We ensure 100% compliance for your projects with transparent processes and guaranteed approvals.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setShowPopup(true)}
              className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-lg"
            >
              Get Free Consultation
            </button>
            
            <button className="bg-white hover:bg-gray-50 text-gray-800 font-semibold px-8 py-4 rounded-2xl border-2 border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              View Our Services
            </button>
          </div>

         
        </div>
      </main>

      {/* Contact Form Modal */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 bg-black/25 backdrop-blur-sm flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white p-8 rounded-3xl max-w-md w-full relative shadow-2xl border border-amber-100">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-amber-100 hover:bg-amber-200 rounded-full flex items-center justify-center text-amber-700 transition-colors"
              aria-label="Close"
            >
              ×
            </button>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MdAccountBalance className="text-amber-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get RERA Compliant Today</h3>
              <p className="text-gray-600">Free consultation for your real estate project</p>
            </div>
            
            <ContactForm />
          </div>
        </div>
      )}
    </section>
  );
};

export default RERAHeroSection;
