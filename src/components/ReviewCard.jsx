const ReviewCard = ({ name, location, text }) => {
  return (
    <div className="h-[500px] bg-black text-white rounded-3xl p-6 flex flex-col justify-center">
      <h4 className="font-semibold">{name}</h4>
      <span className="text-sm opacity-70 mb-3">{location}</span>
      <p>{text}</p>
    </div>
  );
};

export default ReviewCard;