import DepositCards from "../Components/DepositCards";
import supportImage from "../img/support.png";
import supportImage2 from "../img/support2.png";
import supportImage3 from "../img/support3.png";
import paymentImage from "../img/payment.png";
import testimonialImage1 from "../img/testimonial-img.png";
import testimonialImage2 from "../img/testimonial-img-2.png";
import testimonialImage3 from "../img/testimonial-img-3.png";
import testimonialImage4 from "../img/testimonial-img-4.png";
import testimonialImage5 from "../img/testimonial-img-5.png";
import testimonialImage6 from "../img/testimonial-img-6.png";
import GeneralCommission from "../Components/GeneralCommission";
import StartingSteps from "../Components/StartingSteps";
import Traders from "../Components/Traders";

import { Helmet } from "react-helmet";
import { Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ScrollToTop } from "../scripts/all_scripts";

const proposals = [
  {
    starting: 1.8,
    deposit: "$200-$500",
    days: 7,
  },
  {
    starting: 3,
    deposit: "$1000-$3000",
    days: 7,
  },
  {
    starting: 2.0,
    deposit: "$500-$2000",
    days: 14,
  },
  {
    starting: 5,
    deposit: "$1000-$3000",
    days: 30,
  },
  {
    starting: 10,
    deposit: "$2000-$10000",
    days: 30,
  },
  {
    starting: 20,
    deposit: "$10000-Above",
    days: 30,
  },
];

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

const testimonials = [
  {
    image: testimonialImage1,
    text: "DigitalizeCrypto has been a game-changer for me. Their platform is easy to use and their educational resources helped me understand the crypto market before I invested a dime. Now, I'm seeing real returns",
  },
  {
    image: testimonialImage2,
    text: "I was skeptical about crypto at first, but DigitalizeCrypto convinced me to give it a try. Their customer support is fantastic and they're always there to answer my questions. I feel confident about my crypto investments now.",
  },
  {
    image: testimonialImage3,
    text: "DigitalizeCrypto is the perfect platform for beginners like me. They offer a variety of investment options, so I can find something that fits my risk tolerance. Plus, their fees are very reasonable",
  },
  {
    image: testimonialImage4,
    text: "I've been using DigitalizeCrypto for a while now and I'm really impressed. Their platform is constantly evolving and they're always adding new features. I highly recommend them to anyone who's interested in investing in crypto.",
  },
  {
    image: testimonialImage5,
    text: "DigitalizeCrypto has made it easy for me to diversify my portfolio and get exposure to the crypto market. Their security features are top-notch and I never have to worry about my investments being safe.",
  },
  {
    image: testimonialImage6,
    text: "Thanks to DigitalizeCrypto, I'm finally in control of my financial future. They've given me the tools and knowledge I need to make smart investment decisions. I can't recommend them enough! ",
  },
];
function Home() {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{
        x: window.innerWidth,
        transition: {
          duration: 0.1,
          delay: 0,
        },
        opacity: 0,
      }}
    >
      <ScrollToTop />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Digitalizecrypto</title>
        <link rel="canonical" href="http://digitalizecrypto.com/home" />
      </Helmet>
      <div class="homepage-section-fx"></div>
      <div class="homepage-hero-section flex items-center">
        <div className="write-up w-[639px] px-5 md:pl-[100px] flex flex-col gap-10">
          <h1 className="heading">SAFE INVESTMENT WITH DIGITALIZE CRYPTO</h1>
          <p className="uppercase text-3xl sm:text-2xl">
            <span className="marker-w p-1 font-semibold rounded-lg"> get</span>{" "}
            a lifetime on investments.
          </p>
          <button className="btn3">
            <Link to="/register" className="hover:text-primary-blue">
              Open Account
            </Link>
          </button>
        </div>
      </div>
      <div className="homepage-section-fx two"></div>
      <div className="homepage-section-one md:px-[100px] sm:px-[50px]">
        <div className="sub flex flex-col md:flex-row gap-10 md:gap-20 py-14 px-[20px] md:rounded-2xl md:px-20 lg:gap-28 items-center">
          <div className="left flex justify-center md:justify-end">
            <img
              src={require("../img/threed_logo.png")}
              className="w-[300px]"
              alt="bitcoin"
            />
          </div>
          <div className="write-up right">
            <h1 className="sub-heading">ABOUT US</h1>
            <p className="details">
              At Digitalizecrypto, we believe the future is digital, and finance
              is no exception. We're a passionate team, dedicated to making
              cryptocurrency accessible and empowering for everyone. Whether
              you're a seasoned investor or just starting your crypto journey,
              we offer a secure and user-friendly platform to buy, sell, and
              trade digital assets. We're committed to providing top-notch
              customer support and educational resources to help you navigate
              the exciting world of crypto. Join us and unlock the potential of
              digital finance with Digitalizecrypto.
            </p>
            <button className="btn4">Read More</button>
          </div>
        </div>
      </div>
      <div className="homepage-section-two p-3 sm:p-[100px]">
        <div className="sub px-[20px]">
          <div className=" flex justify-center gap-2 items-center px-3">
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
      <div>
        <GeneralCommission />
      </div>
      <div className="homepage-section-two ">
        <div className="sub px-[20px]">
          <div className="flex justify-center gap-2 items-center px-5">
            <div class="line"></div>
            <h1 className="uppercase gradient-text text-2xl font-bold text-center">
              Live Testimonials
            </h1>
            <div class="line"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5 sm:px-[100px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="linear_bg rounded-lg flex flex-col gap-5 items-center justify-center px-5 py-10"
              >
                <div className="flex justify-center ">
                  <img
                    src={testimonial.image}
                    alt="testimonial"
                    className="w-[293px] h-[213px]"
                  />
                </div>
                <p className="text-center text-white px-[20px]">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>

      <section>
        <div>
          <p className="uppercase font-bold text-center gradient-text">
            Bitcoin Price
          </p>
          <div className="headline flex justify-center gap-2 items-center px-3">
            <div class="line"></div>
            <h1 className="uppercase text-2xl text-center gradient-text font-bold">
              Market Analysis
            </h1>
            <div class="line"></div>
          </div>

          <div>{/* For the market analysis table */}</div>
        </div>
      </section>

      <div>
        <Traders supports={supports} />
      </div>

      <div className="py-10">
        <StartingSteps />
      </div>

      <section className="mb-52">
        <div className="px-3 sm:px-[100px]">
          <div>
            <div className="headline flex justify-center gap-2 items-center px-[20px]">
              <div class="line"></div>
              <h1 className="uppercase text-2xl  gradient-text font-bold text-center">
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
      <Outlet />
    </motion.div>
  );
}

export default Home;
