import PropertyCard from "./PropertyCard";

export default function PropertyList({ properties }) {

  return (
    <div className="p-6 overflow-y-auto h-screen bg-gray-100">

      <h2 className="text-2xl font-semibold mb-4">
        Homes for Sale
      </h2>

      <div className="grid gap-4">

        {Array.isArray(properties) && properties.map((property) => (
  <PropertyCard
    key={property.id}
    property={property}
  />
))}

      </div>

    </div>
  );
}