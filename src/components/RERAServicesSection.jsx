"use client";
import { useState } from "react";
import { FaBuilding, FaUser, FaRedo, FaEnvelope } from "react-icons/fa";

const RERAServicesStrip = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* Main Horizontal Strip */}
      <section className="w-full bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 border-t border-b border-amber-200 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left Side - Title and Price */}
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  RERA Registration - Easy & Simple
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-gray-600">Starts at just</span>
                  <span className="text-2xl font-bold text-red-500">₹3999</span>
                </div>
              </div>
              
              {/* Vertical Divider Line */}
             </div>

           
            {/* Right Side - CTA Button */}
            <div className="flex items-center gap-4">
              {/* Vertical Divider Line */}
              <div className="hidden lg:block w-px h-16 bg-amber-300"></div>
              
              <button
                onClick={() => setShowPopup(true)}
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center gap-2"
              >
                <FaEnvelope className="text-sm" />
                <span>Get Started Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white p-8 rounded-3xl max-w-md w-full relative shadow-2xl">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 transition-colors"
              aria-label="Close"
            >
              ×
            </button>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your RERA Registration</h3>
              <p className="text-gray-600">Get expert assistance starting at just ₹3999</p>
            </div>
            
            {/* Simple Contact Form */}
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Service</option>
                  <option>Agent Registration</option>
                  <option>Project Registration</option>
                  <option>Agent Renewal</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default RERAServicesStrip;
