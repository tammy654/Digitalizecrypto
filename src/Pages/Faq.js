import Accordion from "../Components/Accordion";

import bannerImage from "../img/faq-banner-image.png";
import { Helmet } from "react-helmet";
import { Outlet, Link } from "react-router-dom";
import {motion} from "framer-motion"
import { ScrollToTop } from '../scripts/all_scripts';

const faqs = [
  {
    question: "What is cryptocurrency?",
    answer:
      "Cryptocurrency is a digital form of money secured by cryptography. Unlike traditional currencies, it's not controlled by a central bank.",
  },
  {
    question: "How do I start investing in cryptocurrency?",
    answer:
      "You can invest in cryptocurrency by opening an account with a crypto exchange. DigitalizeCrypto offers a secure platform to buy and sell various cryptocurrencies.",
  },
  {
    question: "What are the different types of cryptocurrency?",
    answer:
      "Bitcoin is the most well-known cryptocurrency, but there are thousands of others, each with unique features and purposes. Explore different options on DigitalizeCrypto to find ones that suit your investment goals.",
  },
  {
    question: "What are the benefits of using DigitalizeCrypto?",
    answer:
      "DigitalizeCrypto provides a user-friendly platform for buying, selling, and managing your cryptocurrency portfolio. We offer competitive fees and prioritize security.",
  },
  {
    question: "Where can I learn more about cryptocurrency?",
    answer:
      "DigitalizeCrypto offers educational resources to help you understand the cryptocurrency market. You can also find a wealth of information online through reputable sources.",
  },
  {
    question: "What are some security risks to be aware of when investing in cryptocurrency?",
    answer:
      "Cryptocurrency exchanges and wallets can be targets for hackers. Be cautious of phishing scams and only use reputable platforms like DigitalizeCrypto.",
  },
  {
    question: "How can I diversify my cryptocurrency portfolio?",
    answer:
      "Don't put all your eggs in one basket. Invest in a variety of cryptocurrencies with different purposes to spread your risk. DigitalizeCrypto offers a wide range of options.",
  },
];

const Faq = () => {
  return (
    <motion.div 
    initial={{width: 0, opacity: 0}}
    animate={{width: "100%", opacity: 1}}
    exit={{ x: window.innerWidth, transition: {
    duration: 0.1, delay: 0}, opacity: 0}} > 
      <ScrollToTop />
        <Helmet>
            <meta charSet="utf-8" />
            <title>Faqs - Digitalizecrypto</title>
            <link rel="canonical" href="http://digitalizecrypto.com/faqs" />
        </Helmet>
    <section className="mb-52">
      <div class="homepage-section-fx"></div>
      <div>
        <div className="linear_bg">
          <div className="flex max-lg:flex-wrap-reverse px-3 md:px-28 py-16 justify-between max-lg:justify-center items-center">
            <div className="w-auto xl:w-[639px] text-white">
              <h1 className="text-4xl sm:text-[50px] font-bold uppercase leading-none">
                FREQUENTLY ASKED QUESTIONS (FAQ)
              </h1>
            </div>
            <div className="">
              <img src={bannerImage} alt="statistics" className={`w-[300px]`} />
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 md:px-[100px] py-[100px]">
        <div className="flex flex-col gap-10">
          {faqs.map((faq, index) => (
            <Accordion key={index} data={faq} />
          ))}
        </div>
      </div>
    </section>
    <Outlet />
  
  </motion.div>
  );
};

export default Faq;
