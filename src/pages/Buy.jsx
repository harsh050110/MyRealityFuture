import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import NewDelhi from "../assets/New Delhi.jpg";
import Haryana from "../assets/haryana.jpg";
import Gujarat from "../assets/Gujarat.jpg";
import Mumbai from "../assets/Mumbai.jpeg";
import Pune from "../assets/Pune.jpg";
import Goa from "../assets/goa.jpg";

const properties = [
  {
    id: "skyline",
    name: "Skyline Residency",
    location: "Gurugram",
    price: "₹85L",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: "ocean",
    name: "Ocean Pearl Villas",
    location: "Goa",
    price: "₹2.5Cr",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
  },
  {
    id: "downtown",
    name: "Downtown Heights",
    location: "Dubai",
    price: "₹1.2Cr",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
];

export default function RealEstateUI() {
  return (
    <div className="bg-[#0b0b0b] text-white font-[Playfair_Display]">

      {/* 🔝 NAVBAR */}
      <div className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="tracking-widest text-lg">REALTY</h1>
          <div className="flex gap-6 text-sm">
            <a href="#">Home</a>
            <a href="#">Properties</a>
            <a href="#">Locations</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>

      {/* 🎥 HERO */}
      <section className="h-screen relative flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl mb-6 leading-tight"
          >
            Find Your Dream Property
          </motion.h1>

          <p className="max-w-xl mx-auto text-lg text-gray-300">
            Curated. Verified. High ROI properties across India & Global markets.
          </p>
        </div>
      </section>

      {/* 🏙 FEATURED */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl text-center mb-16">Featured Properties</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative h-[420px] rounded-2xl overflow-hidden group"
            >
              <img
                src={item.img}
                className="absolute w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl">{item.name}</h3>
                <p className="text-gray-300">{item.location}</p>
                <p className="text-yellow-400 font-semibold mt-1">
                  {item.price}
                </p>

                <div className="flex gap-3 mt-4">
                  <Link to={`/property/${item.id}`}>
                    <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full text-sm">
                      View Details
                    </button>
                  </Link>

                  <button className="border border-white/40 px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
                    Price
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🧱 PROPERTY INFO STRUCTURE */}
<section className="max-w-6xl mx-auto px-6 py-20">
  <h2 className="text-4xl text-center mb-12">What You Get in Every Property</h2>

  <div className="grid md:grid-cols-2 gap-8 text-gray-300">

    <div className="bg-white/5 p-6 rounded-xl">
      <h3 className="text-xl mb-3 text-yellow-400">Property Details</h3>
      <ul className="space-y-2">
        <li>• Developer Name</li>
        <li>• Property Type</li>
        <li>• Configuration (1/2/3 BHK)</li>
        <li>• Area (Sqft)</li>
        <li>• Possession Status</li>
        <li>• RERA Approved</li>
      </ul>
    </div>

    <div className="bg-white/5 p-6 rounded-xl">
      <h3 className="text-xl mb-3 text-yellow-400">Why These Properties</h3>
      <ul className="space-y-2">
        <li>✔ Verified Developers</li>
        <li>✔ High ROI Potential</li>
        <li>✔ Prime Locations</li>
        <li>✔ Legal Clarity</li>
        <li>✔ Investment Friendly</li>
      </ul>
    </div>

  </div>
</section>

      {/* 🧱 PROPERTY TYPES */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-4xl text-center mb-12">Property Types</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {["Residential", "Commercial", "Plots", "Luxury"].map((type, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl text-center hover:border-yellow-400 transition"
            >
              {type}
            </motion.div>
          ))}
        </div>
      </section>
      {/* 🧭 PROPERTY TYPES DETAILED */}
<section className="max-w-7xl mx-auto px-6 pb-24">
  <h2 className="text-4xl text-center mb-12">Explore by Property Type</h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    {[
      {
        title: "Residential",
        desc: "Apartments, Villas, Builder Floors, Penthouses",
      },
      {
        title: "Commercial",
        desc: "Office Spaces, Shops, Showrooms, Business Parks",
      },
      {
        title: "Land & Plots",
        desc: "Residential Plots, Township Projects, Land Banks",
      },
      {
        title: "Luxury",
        desc: "Golf-facing homes, branded residences, sky villas",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-yellow-400 transition"
      >
        <h3 className="text-xl mb-2">{item.title}</h3>
        <p className="text-gray-400 text-sm">{item.desc}</p>
      </div>
    ))}
  </div>
</section>

      {/* 📍 LOCATIONS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-4xl mb-4">Find the Neighborhood For You</h2>
        <p className="text-gray-400 mb-12">
          The neighborhoods best suited to your lifestyle.
        </p>

        {(() => {
          const locations = [
            { title: "New Delhi", image: NewDelhi },
            { title: "Haryana", image: Haryana },
            { title: "Gujarat", image: Gujarat },
            { title: "Mumbai", image: Mumbai },
            { title: "Pune", image: Pune },
            { title: "Goa", image: Goa },
          ];

          return (
            <div className="grid md:grid-cols-3 gap-6">
              {locations.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative h-64 rounded-2xl overflow-hidden group"
                >
                  <img
                    src={item.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition flex items-end p-6">
                    <h3 className="text-2xl">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          );
        })()}
      </section>
      {/* 🛠 HOW WE HELP */}
<section className="bg-white/5 py-20">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl text-center mb-12">How We Help You Choose</h2>

    <div className="grid md:grid-cols-5 gap-6 text-center text-gray-300">

      {[
        "Requirement Understanding",
        "Smart Shortlisting",
        "Project Comparison",
        "ROI & Price Clarity",
        "End-to-End Support",
      ].map((step, i) => (
        <div key={i} className="p-4">
          <div className="text-yellow-400 text-2xl mb-2">0{i + 1}</div>
          <p>{step}</p>
        </div>
      ))}

    </div>
  </div>
</section>
{/* 🏆 WHY US */}
<section className="max-w-6xl mx-auto px-6 py-20">
  <h2 className="text-4xl text-center mb-12">Why Buy Through Us</h2>

  <div className="grid md:grid-cols-3 gap-6 text-gray-300">

    {[
      "Curated & Verified Listings",
      "Trusted Developer Network",
      "Transparent Pricing",
      "Advisory Approach",
      "Global & Multi-city Reach",
      "No Pressure Selling",
    ].map((item, i) => (
      <div key={i} className="bg-white/5 p-6 rounded-xl">
        ✔ {item}
      </div>
    ))}

  </div>
</section>

      {/* 📩 FORM */}
      <section className="bg-white/5 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl text-center mb-10">
            Get Personalized Suggestions
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input className="p-4 bg-white/10 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Full Name" />
            <input className="p-4 bg-white/10 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Phone" />
            <input className="p-4 bg-white/10 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Location" />
            <input className="p-4 bg-white/10 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Budget" />
          </div>

          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-10 py-4 rounded-full hover:scale-105 transition">
              Recommend Properties
            </button>
          </div>
        </div>
      </section>
      {/* ⚡ QUICK CONNECT */}
<section className="text-center pb-20">
  <h2 className="text-3xl mb-6">Quick Connect</h2>

  <p className="text-gray-400 mb-4">📞 +91-9650304018</p>

  <a
    href="https://api.whatsapp.com/send/?phone=919650304018"
    className="bg-green-500 px-6 py-3 rounded-full hover:scale-105 transition"
  >
    Chat on WhatsApp
  </a>
</section>


    </div>
  );
}