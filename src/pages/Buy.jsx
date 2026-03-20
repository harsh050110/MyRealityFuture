import PropertyCard from "../components/PropertyCard";
import MapView from "../components/MapView";
import properties from "../data/properties";

const Buy = () => {
  return (
    <div>

      {/* TOP SECTION (Cards + Map) */}
      <div className="flex h-screen">

        {/* LEFT SIDE */}
        <div className="w-1/2 overflow-y-auto p-6 bg-[#0F172A]">

          <h1 className="text-2xl font-bold text-white mb-4">
            Available Properties
          </h1>

          <div className="grid grid-cols-2 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 h-screen sticky top-0">
          <MapView properties={properties} />
        </div>

      </div>

      {/* BOTTOM SECTION (Table) */}
      <section className="bg-[#0F172A] py-20">

        <div className="max-w-[900px] mx-auto text-center">

          <h2 className="text-4xl font-bold mb-8 text-gray-300">
            Quick Comparison Guide
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full border border-gray-400 text-center text-gray-300">

              <thead>
                <tr className="bg-yellow-200 text-black">
                  <th className="border p-3">Type</th>
                  <th className="border p-3">Risk Level</th>
                  <th className="border p-3">ROI Potential</th>
                  <th className="border p-3">Best For</th>
                </tr>
              </thead>

              <tbody>

                {[
                  ["Residential", "Moderate", "Moderate", "End-use & rental"],
                  ["Commercial", "Moderate–High", "High", "Rental investors"],
                  ["Industrial", "Moderate", "Stable", "Long leases"],
                  ["Land", "High", "Very High (long-term)", "Long-term investors"],
                  ["Luxury", "Moderate", "High", "HNI & lifestyle"],
                  ["International", "Market-based", "High", "Diversified investors"],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-black">
                    {row.map((cell, j) => (
                      <td key={j} className="border p-3">{cell}</td>
                    ))}
                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Buy;