import {Link } from "react-router-dom";
export default function ExploreHomes() {

  return (
    <section className="bg-[#0F172A] py-20">
    <div className="max-w-[1400px] mx-auto px-6 py-20">

      <h2 className="text-4xl font-bold text-center mb-4 text-gray-50">
        Explore homes on MyRealityFuture
      </h2>

      <p className="text-center text-gray-400 mb-12">
        Take a deep dive and browse homes for sale.
      </p>

      {/* Horizontal Scroll Wrapper */}
      <div className="overflow-x-auto">

        <div className="grid grid-rows-2 grid-flow-col auto-cols-[280px] gap-6">

          {/* Large Card */}
          <div className="row-span-2 rounded-xl overflow-hidden relative">
            <img src="/img1.jpg" className="w-full h-full object-cover" />
            <h3 className="absolute top-4 left-4 text-white text-xl font-bold">
              Dubai, UAE,Qatar
            </h3>
              <Link
    to="/atlanta"
    className="absolute bottom-4 left-4 bg-white/90 text-black px-4 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-white transition"
  >
    View Homes →
  </Link>
          </div>

          {/* Review Card */}
          <div className="bg-gray-600 text-white rounded-xl p-6">
            <p className="font-semibold">MyRealityFuture User</p>
            <p className="mt-2 text-sm">
              I just moved to the neighborhood 2 years ago and love it!
            </p>
          </div>

          {/* Image Card */}
          <div className="rounded-xl overflow-hidden relative">
            <img src="/img2.jpg" className="w-full h-full object-cover" />
            <h3 className="absolute top-4 left-4 text-white text-xl font-bold">
              London, U.K
            </h3>
              <Link
    to="/Scottsdale"
    className="absolute bottom-4 left-4 bg-white/90 text-black px-4 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-white transition"
  >
    View Homes →
  </Link>
          </div>

          {/* Tall Card */}
          <div className="row-span-2 rounded-xl overflow-hidden relative">
            <img src="/img3.jpg" className="w-full h-full object-cover" />
            <h3 className="absolute top-4 left-4 text-white text-xl font-bold">
              Singapore
            </h3>
              <Link
    to="/oakland"
    className="absolute bottom-4 left-4 bg-white/90 text-black px-4 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-white transition"
  >
    View Homes →
  </Link>
          </div>

          {/* Bottom Cards */}
          <div className="rounded-xl overflow-hidden relative">
            <img src="/img4.jpg" className="w-full h-full object-cover" />
            <h3 className="absolute top-4 left-4 text-white text-xl font-bold">
              Shanghai
            </h3>
              <Link
    to="/austin"
    className="absolute bottom-4 left-4 bg-white/90 text-black px-4 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-white transition"
  >
    View Homes →
  </Link>
          </div>

          <div className="rounded-xl overflow-hidden relative">
            <img src="/img5.jpg" className="w-full h-full object-cover" />
            <h3 className="absolute top-4 left-4 text-white text-xl font-bold">
              Miami,FL
            </h3>
              <Link
    to="/boston"
    className="absolute bottom-4 left-4 bg-white/90 text-black px-4 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-white transition"
  >
    View Homes →
  </Link>
          </div>

          {/* More Cards */}
          <div className="rounded-xl overflow-hidden relative">
            <img src="/img6.jpg" className="w-full h-full object-cover" />
            <h3 className="absolute top-4 left-4 text-white text-xl font-bold">
              Beijing
            </h3>
              <Link
    to="/miami"
    className="absolute bottom-4 left-4 bg-white/90 text-black px-4 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-white transition"
  >
    View Homes →
  </Link>
          </div>

          <div className="bg-gray-700 text-white rounded-xl p-6">
            <p className="font-semibold">Brianne</p>
            <p className="mt-2 text-sm">
              A good mix of young adults and family friendly activities.
            </p>
          </div>

          <div className="row-span-2 rounded-xl overflow-hidden relative">
            <img src="/img7.jpg" className="w-full h-full object-cover" />
            <h3 className="absolute top-4 left-4 text-white text-xl font-bold">
              Lebanon
            </h3>
              <Link
    to="/denver"
    className="absolute bottom-4 left-4 bg-white/90 text-black px-4 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-white transition"
  >
    View Homes →
  </Link>
          </div>

          <div className="rounded-xl overflow-hidden relative">
            <img src="/img8.jpg" className="w-full h-full object-cover" />
            <h3 className="absolute top-4 left-4 text-white text-xl font-bold">
              Florida
            </h3>
              <Link
    to="/dallas"
    className="absolute bottom-4 left-4 bg-white/90 text-black px-4 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-white transition"
  >
    View Homes →
  </Link>
          </div>
                    <div className="bg-gray-700 text-white rounded-xl p-6">
            <p className="font-semibold">Brianne</p>
            <p className="mt-2 text-sm">
              A good mix of young adults and family friendly activities.
            </p>
          </div>

        </div>

      </div>
      </div>

    </section>
  );
}