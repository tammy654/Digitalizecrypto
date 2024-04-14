import bitcoinLogo from "../img/logos_bitcoin.png";
import BitCard from "../Components/dashboard/BitCard";
import PlainCard from "../Components/dashboard/PlainCard";

const bitCardItems = [
  {
    name: "Bitcoin",
    icon: bitcoinLogo,
    amount: "$40,000.0",
    interest: "+2.3%",
  },
  {
    name: "Bitcoin",
    icon: bitcoinLogo,
    amount: "$40,000.0",
    interest: "+2.3%",
  },
  {
    name: "Bitcoin",
    icon: bitcoinLogo,
    amount: "$40,000.0",
    interest: "+2.3%",
  },
  {
    name: "Bitcoin",
    icon: bitcoinLogo,
    amount: "$40,000.0",
    interest: "+2.3%",
  },
  {
    name: "Bitcoin",
    icon: bitcoinLogo,
    amount: "$40,000.0",
    interest: "+2.3%",
  },
];

const cardItems = [
  {
    amount: "$0.00",
    name: "Account Balance",
    bg: "ab_bg",
  },
  {
    amount: "$0.00",
    name: "Total Profit",
    bg: "tp_bg",
  },
  {
    amount: "$0.00",
    name: "Total Referral Bonus",
    bg: "trb_bg",
  },
  {
    amount: "$0.00",
    name: "Total Bonus",
    bg: "tb_bg",
  },
  {
    amount: "$0.00",
    name: "Total Investment plans",
    bg: "tip_bg",
  },
  {
    amount: "$0.00",
    name: "Total Deposit",
    bg: "td_bg",
  },
  {
    amount: "0",
    name: "Total Active Investments plans",
    bg: "taip_bg",
  },
  {
    amount: "$0.00",
    name: "Total Withdrawals",
    bg: "tw_bg",
  },
];

const DashboardHome = () => {
  return (
    <div className="p-5 w-full">
      <p className="text-xl md:text-2xl font-bold">
        Hello John, Welcome Onboard
      </p>
      <div className="px-5 py-3 max-w-full overflow-hidden">
        <div className="flex gap-5 w-full py-2 pr-20 xl:px-2 overflow-auto">
          {bitCardItems.map((item, index) => (
            <BitCard key={index} item={item} />
          ))}
        </div>
      </div>

      <div className="px-5 pr-20 py-3 max-w-full">
        <div className="grid w-full grid-cols-2 lg:grid-cols-3 gap-3">
          {cardItems.map((item, index) => (
            <PlainCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
