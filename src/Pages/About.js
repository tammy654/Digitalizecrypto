import HeadingTitle from "../Components/HeadingTitle";
import PageBanner from "../Components/PageBanner";
import bannerImage from "../img/about-banner-image.png";
import paymentImage from "../img/payment.png";
import coinImage from "../img/threed_logo.png";
import statImage from "../img/stat-image.png";
import referralImage from "../img/referral-image.png";
import levelsImage from "../img/levels-image.png";
import clockSvg from "../img/clock-outline.svg";

import { Helmet } from "react-helmet";
import { Outlet, Link } from "react-router-dom";
import {motion} from "framer-motion"
import { ScrollToTop } from '../scripts/all_scripts';

const content = {
  image: bannerImage,
  title: "Reliable Investment with Digitalizecrypto",
  text: "Invest confidently with DIGITALIZECRYPTO. Our secure platform and experienced team empower you to harness the potential of crypto for reliable returns.",
  imageWidth: "800px",
};

const steps = [
  "ROBOT TRADING WITHOUT WEEKENDS AND HOLIDAYS",
  "WITHDRAWAL 24/7",
  "BIG NUMBER OF PAYMENT SYSTEMS",
  "100% ANONYMOUS AND TRANSPARENCY OF THE WORK OF THE ROBOT",
];

const About = () => {
  return (
    <motion.div 
    initial={{width: 0, opacity: 0}}
    animate={{width: "100%", opacity: 1}}
    exit={{ x: window.innerWidth, transition: {
    duration: 0.1, delay: 0}, opacity: 0}} > 
      <ScrollToTop />
        <Helmet>
            <meta charSet="utf-8" />
            <title>About - Digitalizecrypto</title>
            <link rel="canonical" href="http://digitalizecrypto.com/about" />
        </Helmet>
    <section>
      <div class="homepage-section-fx"></div>
      <div>
        <PageBanner content={content} />
      </div>

      <div className="flex items-center max-xl:justify-center max-xl:flex-wrap-reverse max-[1462px]:gap-10 justify-between py-16 px-3 md:px-[100px]">
        <div className="w-[360px] xl:ml-20">
          <img src={coinImage} alt="coin" />
        </div>
        <div className="w-full sm:w-[806px]">
          <HeadingTitle title="Get Life Income" />
          <div className="flex flex-col gap-5 text-justify text-base sm:text-l text-primary-blue">
            <p>
            Imagine a future where your crypto holdings generate a steady stream of income, potentially lasting a lifetime. 
            Our innovative "Get Life Income" feature allows you to unlock the potential of your crypto assets and turn them into an ongoing source of financial security.
            <br></br> <br></br>
            Here's how it works:{" "}
            </p>
            <ul className="list-decimal px-[20px] ">
            <li className="font-bold">
              <span className="uppercase font-bold">Invest in Eligible Assets:</span> <br></br>
              <span className="font-normal">
                Choose from a selection of carefully curated cryptocurrencies with strong earning potential. 
                We prioritize stability and long-term growth prospects.{" "}
              </span>
             
            </li><br></br>

            <li className="font-bold">
              <span className="uppercase font-bold">Select Your Income Stream:</span> <br></br>
              <span className="font-normal">
                Decide on a payout schedule that aligns with your needs. 
                Opt for monthly disbursements or choose a strategy that reinvests a portion for compounded growth.{" "}
              </span>
             
            </li><br></br>

            <li className="font-bold">
              <span className="uppercase font-bold">Relax and Earn:</span> <br></br>
              <span className="font-normal">
                Our secure platform handles the heavy lifting. 
                Your crypto is automatically staked or lent out in secure DeFi (Decentralized Finance) protocols, 
                generating returns without the need for active trading.{" "}
                
              </span>
         
            </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="md:px-[100px]">
        <div className="linear_bg max-sm:px-3 md:rounded-xl max-xl:justify-center max-xl:flex-wrap max-[1462px]:gap-10 flex justify-between items-center p-10 text-white">
          <div className="flex flex-col gap-4">
            <div className="w-[312px] h-[312px] bg-primary-blue"></div>
            <p>DIGITALIZECRYPTO- UK LEGAL </p>
            <p>REGISTRATION Number: 123333333333</p>
            <p>
              Registration Name: <span>DIGITALIZECRYPTO</span>
            </p>
            <p>
              Registration Number: <span>1234567890</span>
            </p>
          </div>

          <div className="md:w-[611px]">
            <h1 className="text-xl sm:text-[64px] leading-none font-bold text-center w-[383px] mx-auto">
              OFFICIALLY REGISTERED COMPANY
            </h1>
            <p className="text-center">
              The unique development of our company has an official legal
              registration. You can check this information by clicking on the
              registration number.
            </p>
          </div>
        </div>
      </div>

      <div className="my-12">
        <div className="flex justify-center">
          <HeadingTitle title="DIGITALIZECRYPTO STATS" />
        </div>

        <div className="flex items-center max-xl:justify-center max-xl:flex-wrap-reverse max-[1462px]:gap-10 justify-between py-5 px-3 md:px-[100px]">
          <div>
            <p className="text-l max-md:text-justify">
              Here are online statistics of our company. Competent distribution
              of investments in the digitalizecrpto robot allows you to maximize
              profits at all stages of the market. Gradual development is a
              guarantee of world recognition in the market. It is important for
              us to ensure the protection of our investors, as well as the
              stability and uninterrupted operation of the platform. The
              digitalizecrpto  robot is fully automated to operate without user
              intervention.
              
            </p>

            <div className="flex gap-14 mt-8">
              <div className="flex flex-col gap-3">
                <p className="font-bold text-base sm:text-3xl">3 000</p>
                <p>Total Members</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold text-base sm:text-3xl">3 000</p>
                <p>Total Members</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold text-base sm:text-3xl">3 000</p>
                <p>Total Members</p>
              </div>
            </div>
          </div>
          <div className="max-xl:w-[160px]">
            <img src={statImage} alt="digitialcrypto stat" />
          </div>
        </div>
      </div>

      <div className="my-12">
        <div className="flex justify-center">
          <HeadingTitle title="REFERRAL PROGRAM" />
        </div>

        <div className="flex items-center max-xl:justify-center max-xl:flex-wrap max-[1462px]:gap-10 justify-between py-5 px-3 md:px-[100px]">
          <div className="max-xl:w-[160px]">
            <img src={referralImage} alt="referral program" />
          </div>

          <div>
            <p className="text-l max-md:text-justify">
              Spread the word and get rewarded! Our Referral Program lets you earn cryptocurrency for introducing your 
              friends and family to our platform. 
              <br></br>
              It's simple:
            </p>
            <ul className="list-decimal px-[20px]">
                  <li className="font-bold">
                    <span className="uppercase font-bold">Share Your Unique Link</span> <br></br>
                    <span className="font-normal">
                    Generate your personalized referral link and share it with anyone interested in crypto.{" "}                   
                    </span>         
                  </li>
                  <li className="font-bold">
                    <span className="uppercase font-bold">They Sign Up and Invest</span> <br></br>
                    <span className="font-normal">
                    When someone uses your link to create an account and invest, you both earn rewards.{" "}                   
                    </span>         
                  </li>
                  <li className="font-bold">
                    <span className="uppercase font-bold">Everyone Wins</span> <br></br>
                    <span className="font-normal">
                    Help your network discover a secure platform while earning additional crypto for your own investments.{" "}                   
                    </span>         
                  </li>
              </ul>
              <p className="text-l max-md:text-justify">
                It's a win-win! Promote a platform you trust and get rewarded for it.
                The more you refer, the more you earn.
                Join our Referral Program and start building your crypto network today!
            </p>
          </div>
        </div>
      </div>

      <div className="my-12">
        <div className="flex justify-center">
          <HeadingTitle title="4 LEVELS OF REFERRAL PROGRAM" />
        </div>

        <div className="flex items-center max-xl:justify-center max-xl:flex-wrap max-[1462px]:gap-10 justify-between py-5 px-3 md:px-[100px]">
          <div>
            <p className="text-l text-justify w-full">
            Get extra profit when people in your structure invite new investors to the company
            </p>
          </div>

          <div className="max-xl:w-[160px]">
            <img src={levelsImage} alt="levels for referral program" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:gap-11 items-center md:items-start justify-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="md:w-[172px] flex flex-col justify-start text-center"
            >
              <img
                src={clockSvg}
                alt="step clock"
                className="w-12 h-12 mx-auto"
              />
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="mb-52">
        <div className="px-3 sm:px-[100px]">
          <div>
            <div className="headline flex justify-center gap-2 items-center px-[20px]">
              <div class="line"></div>
              <h1 className="uppercase text-2xl   font-bold text-center">
                Payment systems
              </h1>
              <div class="line"></div>
            </div>
            <div className="flex justify-center px-[20px]">
              <p className="text-center w-[430px] font-bold uppercase">
                Digitalizecrypto supports a big number of payment systems
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-col md:flex-row items-center gap-20 px-[20px]">
            <p className="text-justify w-full">
            Multiple Payment Options: We offer a variety of secure and convenient ways to fund your crypto investments. Choose the option that best suits you:
            <br></br><br></br>
           
              <li>Traditional Methods: Link your bank account for seamless transfers or use your credit/debit card for a quick start (availability may vary).</li>
              <li>E-wallets: Integrate your favorite e-wallet for a familiar and fast funding experience.</li>
              <li>Crypto Deposits: Transfer existing cryptocurrency holdings from your own wallet directly to your investment account.</li>
              <li>Simplified Process: Our secure payment gateway ensures a smooth experience. Follow clear on-screen instructions and complete your deposit in just a few clicks.</li>
              
            
            <br></br>Real-time Updates: Once your deposit is confirmed, the funds will be instantly reflected in your account balance, allowing you to start investing right away.{" "}
            </p>
            <div className="w-full">
              <img src={paymentImage} alt="payments process" />
            </div>
          </div>

          <div className="flex justify-center">
            <Link to="/register">
              <button className="w-60 linear_bg border border-solid border-primary-blue rounded-lg py-2 text-white hover:bg-transparent hover:text-primary-blue">
                <p>Invest</p>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </section>
    <Outlet />
  
  </motion.div>
  );
};

export default About;
