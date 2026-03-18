import PropertyCard from "../components/PropertyCard";
import PropertyList from "../components/PropertyList";
import MapView from "../components/MapView";
import properties from "../data/properties";

const Buy = () => {
  return (
    <div className="flex h-screen">

      {/* LEFT SIDE */}
      <div className="w-1/2 overflow-y-scroll p-6 bg-[#0F172A]">
        <h1 className="text-2xl font-bold mb-4 text-white">Available Properties</h1>

        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 h-screen sticky top-0">
        <MapView properties={properties} />
      </div>

    </div>
  );
};

export default Buy;