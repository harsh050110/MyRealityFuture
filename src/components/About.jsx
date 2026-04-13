const About = () => {
  return (
    <section className="bg-white text-[#111827] py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* 🔥 TOP HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            About My Realty Future
          </h2>
          <p className="text-lg text-gray-400 tracking-wide">
            Advisory. Insight. Precision.
          </p>
        </div>

        {/* 🔥 GRID START */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* 📝 LEFT CONTENT */}
          <div>
            <p className="text-[#111827] leading-relaxed mb-6">
              Based in Noida, My Realty Future is a premium real estate advisory
              firm serving clients across India and international markets.
            </p>

            <p className="text-[#111827] leading-relaxed">
              Our philosophy is refined and client-centric — we believe property
              acquisition is not a transaction. It is a strategic decision shaping
              your financial and lifestyle future.
            </p>
          </div>

          {/* 🌍 RIGHT CARD */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">

            {/* INDIA */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-[#111827]">
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
                    className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-center hover:bg-[#D4AF37] transition"
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>

            {/* GLOBAL */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#111827]">
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
                    className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-center hover:bg-[#D4AF37] transition"
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 🔥 BOTTOM STATS GRID (VERY PREMIUM TOUCH) */}
        <div className="grid sm:grid-cols-3 gap-6 mt-20 text-center">

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-3xl font-semibold mb-2">9+</h4>
            <p className="text-[#111827] text-sm">Indian Cities Covered</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-3xl font-semibold mb-2">5+</h4>
            <p className="text-[#111827] text-sm">Global Markets</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-3xl font-semibold mb-2">100%</h4>
            <p className="text-[#111827] text-sm">Client-Centric Approach</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;