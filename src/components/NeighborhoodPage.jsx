import { useState } from "react"
import neighborhoods from "../data/neighborhoods"

export default function NeighborhoodPage() {
  return (
    <div className="font-sans text-[#1a1a1a] bg-white overflow-x-hidden">
      
      {/* ─── HERO SECTION ─── */}
      <section className="max-w-[1320px] mx-auto px-6 py-8 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left */}
        <div className="bg-black text-white p-12 flex items-center justify-center">
          <h1 className="font-serif text-center leading-tight text-[clamp(28px,3.5vw,42px)]">
            Explore the country's <br />
            most dynamic <br />
            communities.
          </h1>
        </div>

        {/* Right SVG */}
        <div className="hidden md:flex items-center justify-center p-5">
          <HeroSvg />
        </div>
      </section>

      {/* ─── GRID SECTION ─── */}
      <section className="max-w-[1320px] mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {neighborhoods.map((n) => (
            <NeighborhoodCard key={n.name} neighborhood={n} />
          ))}
        </div>
      </section>
    </div>
  )
}

{/* ─── CARD COMPONENT ─── */}
function NeighborhoodCard({ neighborhood }) {
  const { name, coords, img, wide, fallbackGradient } = neighborhood
  const [imgFailed, setImgFailed] = useState(false)

  const gradient =
    fallbackGradient || "linear-gradient(135deg,#2d3748,#4a5568)"

  return (
    <div
      className={`relative overflow-hidden cursor-pointer ${
        wide ? "md:col-span-2" : ""
      } aspect-[4/3]`}
    >
      {/* Image / Fallback */}
      {img && !imgFailed ? (
        <img
          src={img}
          alt={name}
          loading="lazy"
          onError={() => setImgFailed(true)}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{ background: gradient }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 hover:from-black/80 hover:via-black/40 transition-all" />

      {/* Content */}
      <div className="absolute bottom-0 w-full text-center text-white px-6 py-7">
        <h3 className="font-serif text-[clamp(16px,2vw,24px)] mb-2">
          {name}
        </h3>

        <div className="w-8 h-[1px] bg-white/70 mx-auto mb-2" />

        <div className="flex justify-center items-center gap-3 text-[10px] tracking-widest opacity-80">
          <span>{coords[0]}</span>
          <span className="w-[1px] h-[10px] bg-white/60" />
          <span>{coords[1]}</span>
        </div>
      </div>
    </div>
  )
}

{/* ─── HERO SVG ─── */}
function HeroSvg() {
  return (
    <svg
      className="w-full max-w-[420px] opacity-85"
      viewBox="0 0 460 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sun */}
      <circle cx="72" cy="44" r="22" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="72" y1="14" x2="72" y2="6" stroke="#1a1a1a" />
      <line x1="72" y1="82" x2="72" y2="74" stroke="#1a1a1a" />

      {/* Ground */}
      <line x1="20" y1="260" x2="440" y2="260" stroke="#1a1a1a" />

      {/* Simple Buildings */}
      <rect x="60" y="150" width="60" height="110" stroke="#1a1a1a" />
      <rect x="155" y="185" width="94" height="75" stroke="#1a1a1a" />
      <rect x="295" y="195" width="100" height="65" stroke="#1a1a1a" />
    </svg>
  )
}