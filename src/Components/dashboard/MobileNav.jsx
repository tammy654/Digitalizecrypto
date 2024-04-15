const MobileNav = () => {
  return (
    <div className="absolute z-50 -bottom-16 right-0 shadow-lg bg-white p-5">
      <div className="flex items-center gap-3">
        <button className="border border-solid border-primary-blue rounded-lg py-2 px-3 linear_bg text-white">
          Fund your Account
        </button>
        <button className="border border-solid border-primary-blue rounded-lg py-2 px-3">
          Withdraw Funds
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
