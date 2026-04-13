const Process = () => {
  return (
    <section className="bg-white text-black py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* 🔥 Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            How My Realty Future Elevates Your Property Journey
          </h2>

          <p className="text-gray-800 max-w-2xl mx-auto">
            Because premium investments deserve precision, discretion, and strategy.
          </p>
        </div>

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-blue-600/10 transition duration-300">
            <h3 className="text-xl font-semibold mb-3">
               Strategic Consultation
            </h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              We begin with a private consultation to understand your objectives —
              lifestyle upgrade, wealth preservation, rental yield, capital
              appreciation, or global diversification.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-blue-600/10 transition duration-300">
            <h3 className="text-xl font-semibold mb-3">
               Curated Project Evaluation
            </h3>
            <ul className="text-gray-800 text-sm space-y-1">
              <li>• Developer credibility</li>
              <li>• Location growth trajectory</li>
              <li>• Infrastructure impact</li>
              <li>• Return potential</li>
              <li>• Legal clarity</li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-blue-600/10 transition duration-300">
            <h3 className="text-xl font-semibold mb-3">
               Comparative Intelligence
            </h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Transparent comparisons across projects — enabling you to evaluate
              advantages, pricing structures, and long-term positioning.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-blue-600/10 transition duration-300">
            <h3 className="text-xl font-semibold mb-3">
               Confidential & Discreet Guidance
            </h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Your investment plans remain private. Our advisory approach remains
              independent, unbiased, and client-first.
            </p>
          </div>

          {/* CARD 5 */}
          <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-blue-600/10 transition duration-300">
            <h3 className="text-xl font-semibold mb-3">
               Seamless Execution Support
            </h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              From site visits to documentation clarity, we ensure a smooth,
              structured, and stress-free experience.
            </p>
          </div>

          {/* BONUS CARD (Brand Statement) */}
          <div className="bg-gradient-to-br from-[#D4AF37]  to-purple-600 rounded-2xl p-6 flex items-center justify-center text-center">
            <p className="text-lg font-semibold">
              Because premium investments deserve premium guidance.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Process;