const BitCard = ({ item }) => {
  return (
    <div className="text-center min-w-48 rounded-xl border border-solid border-primary-blue py-5 flex flex-col justify-center items-center gap-3">
      <div className="flex gap-2 items-center">
        <img src={item.icon} alt={item.name} />
        <p>{item.name}</p>
      </div>
      <p>{item.amount}</p>
      <div className="py-1 px-2 flex justify-center items-center rounded-lg bg-[#2FD614]">
        <p className="text-white text-sm">{item.interest}</p>
      </div>
    </div>
  );
};

export default BitCard;
