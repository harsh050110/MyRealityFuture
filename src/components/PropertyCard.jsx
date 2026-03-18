export default function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded shadow-md overflow-hidden">

      <img
  src={property.image}
  alt={property.title}
  className="w-full h-40 object-cover"
/>

      <div className="p-4">

        <h3 className="font-semibold text-lg">
          {property.price}
        </h3>

        <p className="text-gray-600 text-sm">
          {property.address}
        </p>

      </div>

    </div>
  );
}