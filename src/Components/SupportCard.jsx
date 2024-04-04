const SupportCard = ({ support }) => {
  return (
    <div className="border border-solid border-black rounded-lg flex flex-col gap-5 items-center justify-center text-center p-5">
      <img src={support.image} alt={support.title} className="w-[97px]" />
      <p className="font-bold">{support.title}</p>
      <p>{support.text}</p>
    </div>
  );
};

export default SupportCard;
