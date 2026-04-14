import React from "react";
import { motion } from "framer-motion";

export default function RealtyGPTUI() {
  return (
    <div className="bg-[#0B0F1A] text-white font-sans overflow-hidden">

      {/* HERO */}
      <section className="min-h-screen grid md:grid-cols-2 items-center px-6 md:px-16 gap-10">
        {/* LEFT */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Your Personal Real Estate Advisor — <span className="text-yellow-500">AI-Powered</span>
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Get instant clarity on where to invest, what to buy, and how to decide — across India & global markets.
          </p>

          <div className="flex gap-4 mt-6">
            <motion.button whileHover={{ scale: 1.05 }} className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold shadow-md">
              Start Chat Now
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} className="border border-gray-500 px-6 py-3 rounded-lg hover:border-yellow-500 transition">
              Try Demo Questions
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT CHAT MOCKUP */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="bg-gray-900 p-6 rounded-2xl shadow-2xl">
          <div className="space-y-4">
            <div className="bg-gray-800 p-3 rounded-lg w-fit">Where should I invest ₹1 Cr?</div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="bg-yellow-500 text-black p-3 rounded-lg shadow-md">
              Based on your budget, here are 3 high-growth options in NCR...
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* TRUST BAR */}
      <section className="flex flex-wrap justify-center gap-6 py-6 border-t border-b border-gray-800 text-gray-400 text-sm">
        <span>✔ Trusted Advisory Platform</span>
        <span>✔ Serving India & Global Clients</span>
        <span>✔ Data-Driven Property Guidance</span>
      </section>

      {/* FEATURES */}
      <section className="p-12">
        <h2 className="text-3xl text-center mb-10">Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Smart Recommendations",
            "Investment Insights",
            "Global Market Access",
            "Property Comparison",
            "Instant Answers",
            "Advisor Support",
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 215, 0, 0.3)" }} className="bg-gray-900 p-6 rounded-xl transition">
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* DEMO INPUT */}
      <section className="p-12 bg-gray-900 text-center">
        <h2 className="text-3xl mb-6">Ask Your First Question</h2>

        <div className="max-w-xl mx-auto flex gap-2">
          <input className="flex-1 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition" placeholder="Type your question..." />
          <button className="bg-yellow-500 text-black px-4 rounded-lg shadow-md hover:shadow-lg transition">Ask</button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {["Best investment under ₹1 Cr", "Gurgaon vs Noida", "Dubai ROI", "Rental hotspots"].map((q, i) => (
            <span key={i} className="bg-gray-800 px-4 py-2 rounded-full text-sm hover:bg-yellow-500 hover:text-black cursor-pointer transition">{q}</span>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="p-12">
        <h2 className="text-3xl text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {["Ask", "AI Understands", "Recommendations", "Advisor"].map((step, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(255, 215, 0, 0.3)" }} className="bg-gray-900 p-6 rounded-xl transition">
              {step}
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="p-16 text-center">
        <h2 className="text-3xl font-bold">Ready to Make Smarter Property Decisions?</h2>
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg shadow-lg hover:shadow-yellow-500/50 transition">Start Chat</button>
          <button className="border border-gray-500 px-6 py-3 rounded-lg hover:border-yellow-500 transition">Talk to Advisor</button>
        </div>
      </section>
    </div>
  );
}