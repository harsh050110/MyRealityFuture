const CityCard = ({ title, image }) => {
  return (
    <div className="relative h-[240px] rounded-3xl overflow-hidden">
      
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
        
        <h3 className="text-white text-xl font-bold mb-2">
          {title}
        </h3>

        <button className="bg-white text-gray-800 px-5 py-2 rounded-full text-sm w-fit">
          View Homes →
        </button>

      </div>

    </div>
  );
};

export default CityCard;