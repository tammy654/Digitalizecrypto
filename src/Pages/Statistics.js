import HeadingTitle from "../Components/HeadingTitle";
import Table from "../Components/Table";

import bannerImage from "../img/stat-image.png";
import statImage from "../img/stat-image.png";

import { Helmet } from "react-helmet";
import { Outlet, Link } from "react-router-dom";
import {motion} from "framer-motion"
import { ScrollToTop } from '../scripts/all_scripts';

const depositData = [
  {
    name: "Alice Jones",
    amount: "$1,234.56",
    date: "08/04/2024",
  },
  {
    name: "Joe steve",
    amount: "$200.00",
    date: "10/02/2024",
  },
  {
    name: "Emily Wilson",
    amount: "$1,567.80",
    date: "11/04/2024",
  },
  {
    name: " Amanda Hernandez",
    amount: "$32.50",
    date: "14/04/2024",
  },
  {
    name: "Joe steve",
    amount: "$860",
    date: "14/02/2024",
  },
];

const paymentData = [
  {
    name: "Sarah J. Garcia",
    amount: "$78.90",
    date: "16/04/2024",
  },
  {
    name: "Charles Walker",
    amount: " $25.75",
    date: "16/04/2024",
  },
  {
    name: "Christopher Lee",
    amount: "$140",
    date: "19/04/2024",
  },
  {
    name: "Michael H. Brown",
    amount: "$100",
    date: "19/04/2024",
  },
  {
    name: "Whitaker B. Blanch",
    amount: "$215",
    date: "20/04/2024",
  },
];

const Statistics = () => {
  return (
    <motion.div 
    initial={{width: 0, opacity: 0}}
    animate={{width: "100%", opacity: 1}}
    exit={{ x: window.innerWidth, transition: {
    duration: 0.1, delay: 0}, opacity: 0}} > 
      <ScrollToTop />
        <Helmet>
            <meta charSet="utf-8" />
            <title>Statistics - Digitalizecrypto</title>
            <link rel="canonical" href="http://digitalizecrypto.com/statistics" />
        </Helmet>
    <div className="mb-52">
      <div class="homepage-section-fx"></div>
      <div>
        <div className="linear_bg">
          <div className="flex max-lg:flex-wrap-reverse px-3 md:px-28 py-16 justify-between max-lg:justify-center items-center">
            <div className="w-auto xl:w-[639px] text-white">
              <h1 className="text-4xl sm:text-[50px] font-bold uppercase leading-none">
                Statistics
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
          <HeadingTitle title="DIGITALIZECRYPTO STATS" />
        </div>

        <div className="flex items-center max-xl:justify-center max-xl:flex-wrap-reverse max-[1462px]:gap-10 justify-between py-5 px-3 md:px-[100px]">
          <div className="max-xl:w-[260px]">
            <img src={statImage} alt="digitialcrypto stat" />
          </div>

          <div>
            <p className="text-sm sm:text-xl max-md:text-justify">
              Here are online statistics of our company. Competent distribution
              of investments in the digitalizecrpyto robot allows you to maximize
              profits at all stages of the market. 
              <br></br><br></br>
              Gradual development is a
              guarantee of world recognition in the market. It is important for
              us to ensure the protection of our investors, as well as the
              stability and uninterrupted operation of the platform. The
              digitalizecrpyto robot is fully automated to operate without user
              intervention.
            </p>
          </div>
        </div>

        <div className="px-3 md:px-[100px] overflow-auto rm_scroll">
          <div className="flex gap-14 mt-8 w-[650px]">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-base gradient-text sm:text-3xl text-center">
                230
              </p>
              <p>Days in work</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-base gradient-text sm:text-3xl text-center">
                925
              </p>
              <p>Total Members</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-base gradient-text sm:text-3xl text-center">
                $6720.42
              </p>
              <p>Total Invested</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-base gradient-text sm:text-3xl text-center">
                $2140.05
              </p>
              <p>Total Paid</p>
            </div>
          </div>
        </div>

        <div className="px-3 md:px-[100px] mt-10">
          <div className="flex flex-col sm:flex-row gap-20">
            <Table title="Last deposit" data={depositData} />
            <Table title="Last payment" data={paymentData} />
          </div>
        </div>
      </div>
    </div>
    <Outlet />
  
  </motion.div>
  );
};

export default Statistics;
