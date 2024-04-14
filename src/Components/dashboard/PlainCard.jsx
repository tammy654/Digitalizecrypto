const PlainCard = ({ item }) => {
  return (
    <div className="shadow-lg w-full rounded-lg p-4">
      <div className="flex gap-4 items-center">
        <div
          className={`w-12 h-12 flex justify-center items-center ${item.bg}`}
        >
          <p className="text-white">$</p>
        </div>
        <div className="text-center text-base xl:text-2xl">
          <p className="font-bold">{item.amount}</p>
          <p>{item.name}</p>
        </div>
      </div>
    </div>
  );
};

export default PlainCard;
