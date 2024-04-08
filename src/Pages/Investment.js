import DepositCards from "../Components/DepositCards";
import GeneralCommission from "../Components/GeneralCommission";
import HeadingTitle from "../Components/HeadingTitle";
import PageBanner from "../Components/PageBanner";
import StartingSteps from "../Components/StartingSteps";
import Traders from "../Components/Traders";
import bannerImage from "../img/investment-banner-image.png";
import coinImage from "../img/investment-coin.png";
import supportImage from "../img/support.png";

import { Helmet } from "react-helmet";
import { Outlet, Link } from "react-router-dom";
import {motion} from "framer-motion"
import { ScrollToTop } from '../scripts/all_scripts';

const supports = [
  {
    image: supportImage,
    title: "24/7 Support",
    text: "Lorem ipsum dolor sit amet consectetur. Diam metus lacus dui hac etiam metus amet. Sagittis diam duis tortor in. Id curabitur egestas donec mauris ipsum vitae lorem non semper. Quam urna felis massa",
  },
  {
    image: supportImage,
    title: "24/7 Support",
    text: "Lorem ipsum dolor sit amet consectetur. Diam metus lacus dui hac etiam metus amet. Sagittis diam duis tortor in. Id curabitur egestas donec mauris ipsum vitae lorem non semper. Quam urna felis massa",
  },
  {
    image: supportImage,
    title: "24/7 Support",
    text: "Lorem ipsum dolor sit amet consectetur. Diam metus lacus dui hac etiam metus amet. Sagittis diam duis tortor in. Id curabitur egestas donec mauris ipsum vitae lorem non semper. Quam urna felis massa",
  },
  {
    image: supportImage,
    title: "24/7 Support",
    text: "Lorem ipsum dolor sit amet consectetur. Diam metus lacus dui hac etiam metus amet. Sagittis diam duis tortor in. Id curabitur egestas donec mauris ipsum vitae lorem non semper. Quam urna felis massa",
  },
  {
    image: supportImage,
    title: "24/7 Support",
    text: "Lorem ipsum dolor sit amet consectetur. Diam metus lacus dui hac etiam metus amet. Sagittis diam duis tortor in. Id curabitur egestas donec mauris ipsum vitae lorem non semper. Quam urna felis massa",
  },
  {
    image: supportImage,
    title: "24/7 Support",
    text: "Lorem ipsum dolor sit amet consectetur. Diam metus lacus dui hac etiam metus amet. Sagittis diam duis tortor in. Id curabitur egestas donec mauris ipsum vitae lorem non semper. Quam urna felis massa",
  },
];

const content = {
  image: bannerImage,
  title: "Reliable Investment with Digitalizecrypto",
  text: "Digitalizecryoto sit amet consectetur. Diam metus lacus dui hac etiam metus amet. Sagittis diam duis tortor in. Id curabitur egestas donec mauris ipsum vitae l",
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
            <title>investments - Digitalizecrypto</title>
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
          <HeadingTitle title="DIGITALIZECRYOTO MARKETING PLAN" />
          <div className="flex flex-col text-justify text-base sm:text-xl text-primary-blue">
            <p>
              Lorem ipsum dolor sit amet consectetur. Diam metus lacus dui hac
              etiam metus amet. Sagittis diam duis tortor in. Id curabitur
              egestas donec mauris ipsum vitae lorem non semper. Quam urna felis
              massa nisl eget neque auctor sit. Volutpat fermentum arcu lorem
              tortor vitae morbi. Sit viverra aliquet{" "}
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur. Diam metus lacus dui hac
              etiam metus amet. Sagittis diam duis tortor in. Id curabitur
              egestas donec mauris ipsum vitae lorem non semper. Quam urna felis
              massa nisl eget neque auctor sit. Volutpat fermentum arcu lorem
              tortor vitae morbi. Sit viverra aliquet{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="homepage-section-two p-3 sm:p-[100px]">
        <div className="sub">
          <div className="headline flex justify-center gap-2 items-center">
            <div class="line"></div>
            <h1 className="uppercase text-2xl font-bold text-center">
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
