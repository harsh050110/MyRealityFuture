import React from "react";
import { motion } from "framer-motion";


export default function RentPropertyUI() {
  return (
    <div className="bg-black text-white font-sans overflow-hidden">

      {/* HERO */}
      <section className="h-screen relative flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1501183638710-841dd1904471"
          className="absolute w-full h-full object-cover opacity-40"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-5xl font-bold mb-4">
            Find the Right Rental — With Clarity
          </h1>
          <p className="text-gray-300 text-lg">
            Curated rental options based on your lifestyle, business needs, and budget.
          </p>
        </motion.div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="p-12 bg-white">
        <h2 className="text-3xl font-semibold mb-10 text-center text-black">
          Who Is This For
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Working Professionals",
            "Families",
            "Business Owners",
            "Expats & Corporates",
            "Luxury Seekers",
            "Relocating Clients",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-r from-[#D4AF37] to-gray-900 p-6 rounded-xl text-center text-black"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* RENTAL TYPES */}
      <section className="p-12 bg-white">
        <h2 className="text-3xl font-semibold mb-10 text-center text-black">
          Rental Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["Residential Rentals", "Commercial Rentals", "Luxury Rentals"].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-[#D4AF37] to-gray-900 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold">{item}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="p-12 bg-white">
        <h2 className="text-3xl font-semibold mb-10 text-center text-black">
          How Our Rental Advisory Works
        </h2>

        <div className="grid md:grid-cols-6 gap-4">
          {[
            "Understanding",
            "Research",
            "Shortlisting",
            "Visits",
            "Negotiation",
            "Documentation",
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-gradient-to-r from-[#D4AF37] to-gray-900 p-6 rounded-xl text-center border border-gray-700"
            >
              <p className="font-semibold">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="p-12 bg-white">
        <h2 className="text-3xl font-semibold mb-8 text-center text-black">
          Find Your Rental
        </h2>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <input className="p-3 rounded bg-[#e8e6de]" placeholder="Full Name" />
          <input className="p-3 rounded bg-[#e8e6de]" placeholder="Phone Number" />
          <input className="p-3 rounded bg-[#e8e6de]" placeholder="City / Location" />
          <input className="p-3 rounded bg-[#e8e6de]" placeholder="Property Type" />
          <input className="p-3 rounded bg-[#e8e6de]" placeholder="Budget" />
          <input className="p-3 rounded bg-[#e8e6de]" placeholder="Furnishing" />
          <input className="p-3 rounded bg-[#e8e6de]" placeholder="Move-in Timeline" />
          <textarea className="p-3 rounded bg-[#e8e6de] col-span-2" placeholder="Additional Requirements" />
        </div>

        <div className="text-center mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D4AF37] text-black px-8 py-3 rounded-lg font-semibold"
          >
            Find My Rental
          </motion.button>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="p-16 text-center bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-black"
        >
          The Right Rental Isn’t About More Options — It’s About the Right Fit.
        </motion.h2>
        <p className="text-gray-800 mt-4">
          We simplify the rental process so you move with clarity and confidence.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="p-6 text-center text-black bg-white">
        <p>📞 +91-9650304018 | 🌐 myrealtyfuture.com</p>
      </footer>
    </div>
  );
}
