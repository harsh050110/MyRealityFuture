import PropertyCard from "../components/PropertyCard";
import PropertyList from "../components/PropertyList";
import MapView from "../components/MapView";
import rentProperties from "../data/rentProperties";

const Rent = () => {
  return (
    <div className="flex h-screen">

      {/* LEFT SIDE */}
      <div className="w-1/2 overflow-y-scroll p-6 bg-[#0F172A]">

        <h1 className="text-2xl font-bold text-white mb-4">
          Rental Properties
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rentProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 h-screen sticky top-0">
        <MapView properties={rentProperties} />
      </div>

    </div>
  );
};

export default Rent;