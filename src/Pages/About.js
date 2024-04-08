import HeadingTitle from "../Components/HeadingTitle";
import PageBanner from "../Components/PageBanner";
import bannerImage from "../img/about-banner-image.png";
import paymentImage from "../img/payment-img.png";
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
  text: "Digitalizecryoto sit amet consectetur. Diam metus lacus dui hac etiam metus amet. Sagittis diam duis tortor in. Id curabitur egestas donec mauris ipsum vitae l",
  imageWidth: "747px",
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
          <div className="flex flex-col gap-5 text-justify text-base sm:text-xl text-primary-blue">
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

      <div className="md:px-[100px]">
        <div className="linear_bg max-sm:px-3 md:rounded-xl max-xl:justify-center max-xl:flex-wrap max-[1462px]:gap-10 flex justify-between items-center p-10 text-white">
          <div className="flex flex-col gap-4">
            <div className="w-[312px] h-[312px] bg-primary-blue"></div>
            <p>DIGITALIZECRYOTO- UK LEGAL </p>
            <p>REGISTRATION Number: 123333333333</p>
            <p>
              Registration Name: <span>DIGITALIZECRYOTO</span>
            </p>
            <p>
              Registration Number: <span>1234567890</span>
            </p>
          </div>

          <div className="md:w-[611px]">
            <h1 className="text-2xl sm:text-[64px] leading-none font-bold text-center w-[383px] mx-auto">
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
          <HeadingTitle title="DIGITALIZECRYOTO STATS" />
        </div>

        <div className="flex items-center max-xl:justify-center max-xl:flex-wrap-reverse max-[1462px]:gap-10 justify-between py-5 px-3 md:px-[100px]">
          <div>
            <p className="text-xl max-md:text-justify">
              Here are online statistics of our company. Competent distribution
              of investments in the cryptoinvestrobot allows you to maximize
              profits at all stages of the market. Gradual development is a
              guarantee of world recognition in the market. It is important for
              us to ensure the protection of our investors, as well as the
              stability and uninterrupted operation of the platform. The
              cryptoinvest robot is fully automated to operate without user
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
          <div className="max-xl:w-[260px]">
            <img src={statImage} alt="digitialcrypto stat" />
          </div>
        </div>
      </div>

      <div className="my-12">
        <div className="flex justify-center">
          <HeadingTitle title="REFERRAL PROGRAM" />
        </div>

        <div className="flex items-center max-xl:justify-center max-xl:flex-wrap max-[1462px]:gap-10 justify-between py-5 px-3 md:px-[100px]">
          <div className="max-xl:w-[260px]">
            <img src={referralImage} alt="referral program" />
          </div>

          <div>
            <p className="text-xl max-md:text-justify">
              Lorem ipsum dolor sit amet consectetur. Diam metus lacus dui hac
              etiam metus amet. Sagittis diam duis tortor in. Id curabitur
              egestas donec mauris ipsum vitae lorem non semper. Quam urna felis
              massa nisl eget neque auctor sit. Volutpat fermentum arcu lorem
              tortor vitae morbi. Sit viverra aliquet Lorem ipsum dolor sit amet
              consectetur. Diam metus lacus dui hac etiam metus amet. Sagittis
              diam duis tortor in. Id curabitur egestas donec mauris ipsum vitae
              lorem non semper. Quam urna felis massa nisl eget neque auctor
              sit. Volutpat fermentum arcu lorem tortor vitae morbi. Sit viverra
              aliquet
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
            <p className="text-xl max-md:text-justify">
              Lorem ipsum dolor sit amet consectetur. Diam metus lacus dui hac
              etiam metus amet. Sagittis diam duis tortor in. Id curabitur
              egestas donec mauris ipsum vitae lorem non semper. Quam urna felis
              massa nisl eget neque auctor sit. Volutpat fermentum arcu lorem
              tortor vitae morbi. Sit viverra aliquet Lorem ipsum dolor sit amet
              consectetur. Diam metus lacus dui hac etiam metus amet. Sagittis
              diam duis tortor in. Id curabitur egestas donec mauris ipsum vitae
              lorem non semper. Quam urna felis massa nisl eget neque auctor
              sit. Volutpat fermentum arcu lorem tortor vitae morbi. Sit viverra
              aliquet
            </p>
          </div>

          <div className="max-xl:w-[260px]">
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
        <div className="px-3 md:px-[100px]">
          <div>
            <div className="flex justify-center">
              <HeadingTitle title="Payment systems" />
            </div>
            <div className="flex justify-center">
              <p className="text-center w-[430px]">
                Digitalizecryoto supports a big number of payment systems
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-col md:flex-row items-center gap-20">
            <p className="text-justify w-full">
              curabitur egestas donec mauris ipsum vitae lorem non semper. Quam
              urna felis massa nisl eget neque auctor sit. Volutpat fermentum
              arcu lorem tortor vitae morbi. Sit viverra aliquet curabitur
              egestas donec mauris ipsum vitae lorem non semper. Quam urna felis
              massa nisl eget neque auctor sit. Volutpat fermentum arcu lorem
              tortor vitae morbi. Sit viverra aliquet{" "}
            </p>
            <div className="w-full">
              <img src={paymentImage} alt="payments process" />
            </div>
          </div>

          <div className="flex justify-center">
            <button className="w-60 bg-primary-blue border border-solid border-primary-blue rounded-lg py-2 text-white hover:bg-transparent hover:text-primary-blue">
              Invest
            </button>
          </div>
        </div>
      </section>
    </section>
    <Outlet />
  
  </motion.div>
  );
};

export default About;
