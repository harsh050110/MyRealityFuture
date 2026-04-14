const About = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-white to-gray-50 text-[#111827] py-28 px-6 overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* 🔥 TOP HEADING */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-4">
            About My Realty Future
          </h2>
          <p className="text-lg text-gray-500 tracking-[0.3em] uppercase">
            Advisory. Insight. Precision.
          </p>

          <div className="mt-6 w-24 h-[2px] bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        {/* 🔥 GRID START */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* 📝 LEFT CONTENT */}
          <div className="space-y-6">
            <p className="text-[#111827] leading-relaxed text-lg">
              Based in Noida, My Realty Future is a premium real estate advisory
              firm serving clients across India and international markets.
            </p>

            <p className="text-[#111827] leading-relaxed text-lg">
              Our philosophy is refined and client-centric — we believe property
              acquisition is not a transaction. It is a strategic decision shaping
              your financial and lifestyle future.
            </p>

            {/* subtle highlight card */}
            <div className="mt-8 p-6 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
              <p className="text-sm text-gray-600">
                We focus on clarity, not clutter — guiding investors with precision-driven insights.
              </p>
            </div>
          </div>

          {/* 🌍 RIGHT CARD */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition relative overflow-hidden">

            {/* gold glow accent */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D4AF37]/20 blur-3xl rounded-full" />

            {/* INDIA */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
                🇮🇳 India Presence
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Delhi",
                  "Gurugram",
                  "Noida",
                  "Greater Noida",
                  "YEIDA",
                  "Dholera",
                  "Mumbai",
                  "Goa",
                  "Pune",
                ].map((city, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm text-center
                    hover:bg-[#D4AF37] hover:text-black hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>

            {/* GLOBAL */}
            <div>
              <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
                🌎 Global Markets
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Dubai",
                  "Miami",
                  "Singapore",
                  "UAE",
                  "Florida",
                ].map((city, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm text-center
                    hover:bg-[#D4AF37] hover:text-black hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 🔥 BOTTOM STATS GRID */}
        <div className="grid sm:grid-cols-3 gap-8 mt-24 text-center">

          {[
            { num: "9+", label: "Indian Cities Covered" },
            { num: "5+", label: "Global Markets" },
            { num: "100%", label: "Client-Centric Approach" },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h4 className="text-4xl font-semibold text-[#D4AF37] mb-2 group-hover:scale-110 transition">
                {item.num}
              </h4>
              <p className="text-gray-600 text-sm tracking-wide">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default About;