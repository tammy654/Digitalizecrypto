import DepositCards from "../Components/DepositCards";
import GeneralCommission from "../Components/GeneralCommission";
import HeadingTitle from "../Components/HeadingTitle";
import PageBanner from "../Components/PageBanner";
import StartingSteps from "../Components/StartingSteps";
import Traders from "../Components/Traders";
import bannerImage from "../img/investment-banner-image.png";
import coinImage from "../img/investment-coin.png";
import supportImage from "../img/support.png";
import supportImage2 from "../img/support2.png";
import supportImage3 from "../img/support3.png";

import { Helmet } from "react-helmet";
import { Outlet, Link } from "react-router-dom";
import {motion} from "framer-motion"
import { ScrollToTop } from '../scripts/all_scripts';

const supports = [
  {
    image: supportImage,
    title: "UNIQUE TRADING BOT",
    text: "Digitalizecrypto team of professionals has created a unique trading robot that makes profit at any stage of the market: rise or fall",
  },
  {
    image: supportImage2,
    title: "STABLE AND AUTOMATED INVESTMENT",
    text: "The robot is not human-related. And that is why all investments are reliable and completely safe. Not hewlps to analyze trends and track performance to stay ahead of the game.",
  },
  {
    image: supportImage,
    title: "Multiple Payment Options",
    text: "Buy and sell crypto conveniently with a variety of options. This includes bank transfers, credit/debit cards. More options mean a wider audience and a faster transaction process.",
  },
  {
    image: supportImage3,
    title: "THE EXPERTS WILL DO EVERYTHING FOR YOU",
    text: "The highly professional Digitalizecrypto team controls all the processes of the trading robot around the clock. After investing, you will observe the growth of your capital in real time",
  },
  {
    image: supportImage,
    title: "24/7 Support",
    text: "Never get stuck with reliable customer support. Get help via live chat, email ticketing, or a comprehensive FAQ section. Fast and friendly assistance builds trust and keeps you on track.",
  },
  {
    image: supportImage,
    title: "Secure Login and Trading",
    text: "Strong safeguards like multi-factor authentication and encryption protect your account and transactions. Secure storage of user data and private keys is a must.",
  },
];

const content = {
  image: bannerImage,
  title: "Reliable Investment with Digitalizecrypto",
  text: " Unique features for investors: diversification from traditional markets, potential for high returns, and decentralized control. ",
  imageWidth: "747px",
};

const proposals = [
  {
    starting: 1.8,
    deposit: "$1000-$5000",
    days: 7,
  },
  {
    starting: 1.8,
    deposit: "$1000-$5000",
    days: 7,
  },
  {
    starting: 1.8,
    deposit: "$1000-$5000",
    days: 7,
  },
  {
    starting: 1.8,
    deposit: "$1000-$5000",
    days: 7,
  },
  {
    starting: 1.8,
    deposit: "$1000-$5000",
    days: 7,
  },
  {
    starting: 1.8,
    deposit: "$1000-$5000",
    days: 7,
  },
];

const Investment = () => {
  return (
    <motion.div 
    initial={{width: 0, opacity: 0}}
    animate={{width: "100%", opacity: 1}}
    exit={{ x: window.innerWidth, transition: {
    duration: 0.1, delay: 0}, opacity: 0}} > 
      <ScrollToTop />
        <Helmet>
            <meta charSet="utf-8" />
            <title>Investments - Digitalizecrypto</title>
            <link rel="canonical" href="http://digitalizecrypto.com/investments" />
        </Helmet>
    <section className="text-base sm:text-xl mb-52">
      <div class="homepage-section-fx"></div>
      <div>
        <PageBanner content={content} />
      </div>

      <div className="flex items-center max-xl:justify-center max-xl:flex-wrap-reverse max-[1462px]:gap-10 justify-between py-16 px-3 md:px-[100px]">
        <div className="w-[360px] xl:ml-20">
          <img src={coinImage} alt="coin" />
        </div>
        <div className="w-full sm:w-[806px]">
          <HeadingTitle title="DIGITALIZECRYPTO MARKETING PLAN"  />
          <div className="flex flex-col text-justify text-base sm:text-xl text-primary-blue">
            <p>
            Digitalizecryoto developers have created a unique cryptocurrency robot. It predicts the value of Bitcoin while generating daily profit on trades. 
            The Digitalizecryoto robot is able to benefit at any stage of the market: both growth and decline.{" "}
            </p><br></br>

            <p>
            Digitalizecryoto CFO has developed a unique marketing plan for the platform to function fully.
            The Investors of our company have an excellent opportunity to receive financial benefits on stable terms. You can also use the profitability calculator.
            It will calculate the exact return on your investment.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="homepage-section-two p-3 sm:p-[100px]">
        <div className="sub px-[20px]">
          <div className="headline flex justify-center gap-2 items-center">
            <div class="line"></div>
            <h1 className="uppercase text-2xl gradient-text font-bold text-center">
              Investment Proposals
            </h1>
            <div class="line"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {proposals.map((proposal, index) => (
              <div key={index}>
                <DepositCards proposal={proposal} />
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
      <div className="py-10">
        <GeneralCommission />
      </div>

      <div>
        <StartingSteps />
      </div>

      <div className="py-10">
        <Traders supports={supports} />
      </div>
    </section>
    <Outlet />
  
  </motion.div>
  );
};

export default Investment;
