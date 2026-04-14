const Process = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white text-black py-28 px-6 overflow-hidden">

      {/* soft luxury glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#D4AF37]/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* 🔥 Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-5">
            How My Realty Future Elevates Your Property Journey
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Because premium investments deserve precision, discretion, and strategy.
          </p>

          <div className="mt-6 w-24 h-[2px] bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              title: "Strategic Consultation",
              desc: "We begin with a private consultation to understand your objectives — lifestyle upgrade, wealth preservation, rental yield, capital appreciation, or global diversification."
            },
            {
              title: "Curated Project Evaluation",
              list: [
                "Developer credibility",
                "Location growth trajectory",
                "Infrastructure impact",
                "Return potential",
                "Legal clarity"
              ]
            },
            {
              title: "Comparative Intelligence",
              desc: "Transparent comparisons across projects — enabling you to evaluate advantages, pricing structures, and long-term positioning."
            },
            {
              title: "Confidential & Discreet Guidance",
              desc: "Your investment plans remain private. Our advisory approach remains independent, unbiased, and client-first."
            },
            {
              title: "Seamless Execution Support",
              desc: "From site visits to documentation clarity, we ensure a smooth, structured, and stress-free experience."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="group relative bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >

              {/* gold hover glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#D4AF37]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition" />

              <h3 className="text-xl font-semibold mb-4 group-hover:text-[#D4AF37] transition">
                {item.title}
              </h3>

              {item.desc && (
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              )}

              {item.list && (
                <ul className="text-gray-600 text-sm space-y-2">
                  {item.list.map((l, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#D4AF37]">•</span> {l}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* BONUS CARD (Brand Statement) */}
          <div className="relative bg-gradient-to-br from-[#D4AF37] to-yellow-600 rounded-2xl p-8 flex items-center justify-center text-center shadow-xl overflow-hidden">

            {/* subtle shine */}
            <div className="absolute inset-0 bg-white/10 opacity-20" />

            <p className="text-lg font-semibold text-black relative z-10">
              Because premium investments deserve premium guidance.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Process;