import Navbar from "../components/Navbar";

export default function Sell() {
  return (
    <div className="bg-[#f5f5f5] text-gray-800">

      <Navbar />

      {/* 🔥 HERO SECTION */}
      <section className="relative h-[80vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/80 backdrop-blur-md p-10 max-w-2xl text-center shadow-xl">
            <h1 className="text-4xl font-serif mb-4">Sell With Us</h1>
            <p className="text-gray-600 leading-relaxed">
              In the luxury real estate market, a globally recognized brand matters.
              Connections matter. Experience, innovation, and results matter.
              And that is why the most astute property owners consistently turn to us.
            </p>
          </div>
        </div>
      </section>

      {/* 🔥 BRAND MATTERS SECTION */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg">

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            className="w-full h-full object-cover"
          />

          {/* Text */}
          <div className="flex flex-col justify-center p-10">
            <h2 className="text-3xl font-serif mb-4">Brand Matters</h2>
            <p className="text-gray-600 leading-relaxed">
              Through our affiliation with a globally recognized brand, we enhance
              the desirability of the properties we market and sell.
            </p>
          </div>
        </div>
      </section>

      {/* 🔥 CTA SECTION */}
      <section className="relative h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/80 backdrop-blur-md p-10 text-center shadow-xl">
            <h2 className="text-3xl font-serif mb-4">
              Find an Expert in Your Market
            </h2>
            <p className="text-gray-600 mb-6">
              Contact us to value your property or learn more.
            </p>

            <div className="flex gap-4 justify-center">
              <button className="bg-yellow-600 text-white px-6 py-2">
                Find Your Agent
              </button>
              <button className="bg-yellow-600 text-white px-6 py-2">
                Contact Office
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 NEWSLETTER */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-serif mb-6">
          Get luxury real estate updates in your inbox
        </h2>

        <div className="flex gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 border px-4 py-3 outline-none"
          />
          <button className="bg-yellow-600 text-white px-6">
            Subscribe
          </button>
        </div>
      </section>

    </div>
  );
}