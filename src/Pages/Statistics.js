import HeadingTitle from "../Components/HeadingTitle";
import Table from "../Components/Table";

import bannerImage from "../img/stat-image.png";
import statImage from "../img/stat-image.png";

const depositData = [
  {
    name: "Joe steve",
    amount: "$1000",
    date: "02/02/2024",
  },
  {
    name: "Joe steve",
    amount: "$1000",
    date: "02/02/2024",
  },
  {
    name: "Joe steve",
    amount: "$1000",
    date: "02/02/2024",
  },
  {
    name: "Joe steve",
    amount: "$1000",
    date: "02/02/2024",
  },
  {
    name: "Joe steve",
    amount: "$1000",
    date: "02/02/2024",
  },
];

const paymentData = [
  {
    name: "Joe steve",
    amount: "$1000",
    date: "02/02/2024",
  },
  {
    name: "Joe steve",
    amount: "$1000",
    date: "02/02/2024",
  },
  {
    name: "Joe steve",
    amount: "$1000",
    date: "02/02/2024",
  },
  {
    name: "Joe steve",
    amount: "$1000",
    date: "02/02/2024",
  },
  {
    name: "Joe steve",
    amount: "$1000",
    date: "02/02/2024",
  },
];

const Statistics = () => {
  return (
    <div className="mb-52">
      <div class="homepage-section-fx"></div>
      <div>
        <div className="linear_bg">
          <div className="flex max-lg:flex-wrap-reverse px-3 md:px-28 py-16 justify-between max-lg:justify-center items-center">
            <div className="w-auto xl:w-[639px] text-white">
              <h1 className="text-4xl sm:text-[50px] font-bold uppercase leading-none">
                statistics
              </h1>
            </div>
            <div className="">
              <img src={bannerImage} alt="statistics" className={`w-[300px]`} />
            </div>
          </div>
        </div>
      </div>

      <div className="my-12">
        <div className="flex justify-center">
          <HeadingTitle title="DIGITALIZECRYOTO STATS" />
        </div>

        <div className="flex items-center max-xl:justify-center max-xl:flex-wrap-reverse max-[1462px]:gap-10 justify-between py-5 px-3 md:px-[100px]">
          <div className="max-xl:w-[260px]">
            <img src={statImage} alt="digitialcrypto stat" />
          </div>

          <div>
            <p className="text-sm sm:text-xl max-md:text-justify">
              Here are online statistics of our company. Competent distribution
              of investments in the cryptoinvestrobot allows you to maximize
              profits at all stages of the market. Gradual development is a
              guarantee of world recognition in the market. It is important for
              us to ensure the protection of our investors, as well as the
              stability and uninterrupted operation of the platform. The
              cryptoinvest robot is fully automated to operate without user
              intervention.
            </p>
          </div>
        </div>

        <div className="px-3 md:px-[100px] overflow-auto rm_scroll">
          <div className="flex gap-14 mt-8 w-[550px]">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-base sm:text-3xl text-center">
                3 000
              </p>
              <p>Days in work</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-base sm:text-3xl text-center">
                3 000
              </p>
              <p>Total Members</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-base sm:text-3xl text-center">
                3 000
              </p>
              <p>Total Invested</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-base sm:text-3xl text-center">
                3 000
              </p>
              <p>Total Paid</p>
            </div>
          </div>
        </div>

        <div className="px-3 md:px-[100px] mt-10">
          <div className="flex flex-col sm:flex-row gap-5">
            <Table title="last deposit" data={depositData} />
            <Table title="last payment" data={paymentData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
