const Help = () => {
  return (
    <section className="relative py-28 px-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

      {/* soft gold background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[140px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-20 text-center text-black">
          See how My Reality Future can help
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* BUY */}
          <div className="group bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4AF37]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition" />

            <img
              src="https://cdn-icons-png.flaticon.com/512/609/609803.png"
              className="w-20 mx-auto mb-6 group-hover:scale-110 transition"
            />

            <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-[#D4AF37] transition">
              Buy a home
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Find a house you'll love from millions of listings.
            </p>

            <button className="bg-[#D4AF37] text-black px-8 py-3 rounded-xl font-medium hover:shadow-lg transition">
              Find a home
            </button>
          </div>

          {/* RENT */}
          <div className="group bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4AF37]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition" />

            <img
              src="https://cdn-icons-png.flaticon.com/512/69/69524.png"
              className="w-20 mx-auto mb-6 group-hover:scale-110 transition brightness-0"
            />

            <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-[#D4AF37] transition">
              Rent an apartment
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Easily find apartments with advanced filtering.
            </p>

            <button className="bg-[#D4AF37] text-black px-8 py-3 rounded-xl font-medium hover:shadow-lg transition">
              Find a rental
            </button>
          </div>

          {/* NEIGHBORHOODS */}
          <div className="group bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4AF37]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition" />

            <img
              src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
              className="w-20 mx-auto mb-6 group-hover:scale-110 transition brightness-0"
            />

            <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-[#D4AF37] transition">
              See neighborhoods
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Discover insights about communities.
            </p>

            <button className="bg-[#D4AF37] text-black px-8 py-3 rounded-xl font-medium hover:shadow-lg transition">
              Learn more
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Help;