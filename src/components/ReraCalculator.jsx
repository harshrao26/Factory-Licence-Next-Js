"use client";
import React, { useState, useMemo } from "react";

// Basic fee rules
const DEFAULT_RATES = {
  residential: 10,
  commercial: 15,
  mixed: 12,
  layout: 8,
};

const stateRules = {
  Maharashtra: {
    minFee: 10000,
    typeRates: { residential: 12, commercial: 20 },
  },
  Goa: {
    special: (area) => {
      const fee = area * 10;
      return Math.max(50000, fee);
    },
  },
  Tamilnadu: {
    typeRates: { residential: 11, commercial: 18 },
  },
  "Andhra Pradesh": {
    typeRates: { residential: 10, commercial: 16 },
  },
};

function calculateFee(state, type, area) {
  const rule = stateRules[state] || {};
  area = Number(area) || 0;

  if (typeof rule.special === "function") {
    return rule.special(area, type);
  }

  const rate =
    (rule.typeRates && rule.typeRates[type]) ||
    DEFAULT_RATES[type] ||
    DEFAULT_RATES.residential;

  let fee = area * rate;
  if (rule.minFee) {
    fee = Math.max(fee, rule.minFee);
  }

  return Math.round(fee * 100) / 100;
}

const STATES = [
  "Maharashtra",
  "Goa",
  "Tamilnadu",
  "Andhra Pradesh",
  "Delhi",
  "Karnataka",
  "Gujarat",
  "Uttar Pradesh",
  "Rajasthan",
];

const TYPES = [
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "mixed", label: "Mixed Use" },
  { value: "layout", label: "Layout / Plotted" },
];

export default function ReraCalculator() {
  const [state, setState] = useState("Maharashtra");
  const [type, setType] = useState("residential");
  const [area, setArea] = useState("");

  const fee = useMemo(() => calculateFee(state, type, area), [state, type, area]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">RERA Fee Calculator</h2>

      <label className="block mb-3">
        <span className="text-sm font-medium">Select State</span>
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="mt-1 w-full border rounded p-2"
        >
          {STATES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>

      <label className="block mb-3">
        <span className="text-sm font-medium">Project Type</span>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="mt-1 w-full border rounded p-2"
        >
          {TYPES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </label>

      <label className="block mb-4">
        <span className="text-sm font-medium">Area (sq. mt.)</span>
        <input
          type="number"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          placeholder="Enter area"
          className="mt-1 w-full border rounded p-2"
        />
      </label>

      <div className="bg-gray-50 p-4 rounded">
        <p className="text-gray-600 text-sm">Calculated Fee</p>
        <p className="text-2xl font-semibold">₹ {fee.toLocaleString()}</p>
      </div>

      <p className="mt-4 text-xs text-gray-500">
        *Values are approximate. Verify with respective State RERA authority.
      </p>
    </div>
  );
}
