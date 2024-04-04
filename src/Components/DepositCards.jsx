const DepositCards = ({ proposal }) => {
  return (
    <div className="p-5 sm:p-10 rounded-lg border border-solid border-[#23B7D9] flex flex-col gap-3 text-linear-blue font-bold">
      <div className="flex items-center gap-1 uppercase">
        <p className="text-5xl sm:text-[69px] font-bold">{proposal.starting}</p>
        <div className="flex flex-col">
          <p className="text-sm sm:text-[27px]">%</p>
          <p className="text-sm sm:text-[19px]">Starting</p>
        </div>
      </div>
      <p className="text-sm sm:text-[22px]">Daily</p>
      <p className="text-sm sm:text-[22px]">Deposit:</p>
      <p className="text-lg sm:text-[32px]">{proposal.deposit}</p>
      <p>{proposal.days} days</p>
    </div>
  );
};

export default DepositCards;
