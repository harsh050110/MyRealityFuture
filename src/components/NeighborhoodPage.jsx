import { useState } from "react"
import neighborhoods from "../data/neighborhoods"

export default function NeighborhoodPage() {
  return (
    <div className="font-sans text-[#1a1a1a] bg-[#0F172A] overflow-x-hidden">

      {/* ─── HERO SECTION ─── */}
      <section className="max-w-[1320px] mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">

        <div className="bg-teal-200 text-gray-700 p-12 rounded-xl flex items-center justify-center shadow-lg">
          <h1 className="font-serif text-center leading-tight text-[clamp(28px,3.5vw,42px)]">
            Explore the country's <br />
            most dynamic <br />
            communities.
          </h1>
        </div>

        <div className="hidden md:flex items-center justify-center p-5">
          <HeroSvg />
        </div>
      </section>

      {/* ─── GRID SECTION ─── */}
      <section className="max-w-[1320px] mx-auto px-6 pb-24">

        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-serif text-white">
            Explore Top Neighborhoods
          </h2>

          <span className="text-gray-400 text-sm">
            Curated locations for smart investments
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {neighborhoods.map((n) => (
            <NeighborhoodCard key={n.name} neighborhood={n} />
          ))}
        </div>

      </section>

      {/* ─── LOCATIONS SECTION ─── */}
      <section className="max-w-[1320px] mx-auto px-6 py-20 text-white">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-serif mb-3">
            Locations We Work In
          </h2>
          <p className="text-gray-400">
            Strategic Markets. Proven Growth. Global Opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">🇮🇳 Delhi</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>• East Delhi – Stable demand</li>
              <li>• West Delhi – Rental absorption</li>
              <li>• South Delhi – Luxury market</li>
              <li>• North Delhi – Redevelopment</li>
              <li>• Dwarka – Airport growth</li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">🇮🇳 Haryana</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>• Gurugram – Corporate hub</li>
              <li>• New Gurugram – Growth zone</li>
              <li>• Dwarka Expressway – High ROI</li>
              <li>• Faridabad – Affordable</li>
              <li>• Sonipat – Future growth</li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">🇮🇳 Other India</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>• Dholera – Smart city</li>
              <li>• Mumbai – Financial hub</li>
              <li>• Pune – IT growth</li>
              <li>• Goa – Rental income</li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:col-span-2 lg:col-span-3">
            <h3 className="text-xl font-semibold mb-4">🌍 International</h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-300">
              <div>• Dubai – High yield</div>
              <div>• Singapore – Stable</div>
              <div>• London – Safe investment</div>
              <div>• Miami – Growth</div>
              <div>• Hong Kong – Premium</div>
              <div>• Qatar – Emerging</div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── INDIA VS INTERNATIONAL ─── */}
      <section className="bg-[#020617] py-20 px-6 text-white">

        <div className="max-w-[1200px] mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-3">
              India vs International Real Estate
            </h2>
            <p className="text-gray-400">
              Two Markets. Two Strategies. One Smart Decision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">🇮🇳 India</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• High appreciation</li>
                <li>• Infrastructure growth</li>
                <li>• Flexible investment</li>
                <li>• Strong demand</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">🌍 International</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Diversification</li>
                <li>• Currency hedge</li>
                <li>• Stable yield</li>
                <li>• Regulated markets</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ─── ADVISORY SECTION ─── */}
      <section className="max-w-[900px] mx-auto text-center py-20 px-6 text-white">

        <h2 className="text-3xl font-serif mb-6">
          How We Help You Decide
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-300">
          <div className="bg-white/5 p-4 rounded-lg">Risk Appetite</div>
          <div className="bg-white/5 p-4 rounded-lg">Investment Horizon</div>
          <div className="bg-white/5 p-4 rounded-lg">Capital Allocation</div>
          <div className="bg-white/5 p-4 rounded-lg">Rental vs Appreciation</div>
          <div className="bg-white/5 p-4 rounded-lg">Lifestyle Goals</div>
          <div className="bg-white/5 p-4 rounded-lg">Currency Diversification</div>
        </div>

        <p className="mt-10 text-gray-400 italic">
          The right investment is not about location. It is about alignment with your future.
        </p>

      </section>

    </div>
  )
}

/* ─── CARD ─── */
function NeighborhoodCard({ neighborhood }) {
  const { name, coords, img, wide, fallbackGradient } = neighborhood
  const [imgFailed, setImgFailed] = useState(false)

  const gradient =
    fallbackGradient || "linear-gradient(135deg,#2d3748,#4a5568)"

  return (
    <div className={`group relative overflow-hidden cursor-pointer rounded-xl ${wide ? "md:col-span-2" : ""} aspect-[4/3]`}>

      {img && !imgFailed ? (
        <img
          src={img}
          alt={name}
          loading="lazy"
          onError={() => setImgFailed(true)}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />
      ) : (
        <div className="absolute inset-0" style={{ background: gradient }} />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute bottom-0 w-full text-center text-white px-6 py-6">
        <h3 className="font-serif text-lg">{name}</h3>

        <div className="w-8 h-[1px] bg-white/70 mx-auto my-2" />

        <div className="text-xs opacity-80">
          {coords[0]} | {coords[1]}
        </div>
      </div>
    </div>
  )
}

/* ─── SVG ─── */
function HeroSvg() {
  return (
    <svg className="w-full max-w-[420px]" viewBox="0 0 460 320">
      <circle cx="72" cy="44" r="22" stroke="white" strokeWidth="1.5" /> <line x1="72" y1="14" x2="72" y2="6" stroke="white" /> <line x1="72" y1="82" x2="72" y2="74" stroke="white" /> <line x1="20" y1="260" x2="440" y2="260" stroke="white" /> <rect x="60" y="150" width="60" height="110" stroke="white" /> <rect x="155" y="185" width="94" height="75" stroke="white" /> <rect x="295" y="195" width="100" height="65" stroke="white" /> </svg>
  )
}