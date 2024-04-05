import DepositCards from "../Components/DepositCards";

import supportImage from "../img/support.png";
import paymentImage from "../img/payment-img.png";
import testimonialImage from "../img/testimonial-img.png";
import GeneralCommission from "../Components/GeneralCommission";
import StartingSteps from "../Components/StartingSteps";
import Traders from "../Components/Traders";

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

const testimonials = [
  {
    image: testimonialImage,
    text: "Digitalizecryoto sit amet consectetur. Diam metus lacus dui hac etiam metus ",
  },
  {
    image: testimonialImage,
    text: "Digitalizecryoto sit amet consectetur. Diam metus lacus dui hac etiam metus ",
  },
  {
    image: testimonialImage,
    text: "Digitalizecryoto sit amet consectetur. Diam metus lacus dui hac etiam metus ",
  },
  {
    image: testimonialImage,
    text: "Digitalizecryoto sit amet consectetur. Diam metus lacus dui hac etiam metus ",
  },
  {
    image: testimonialImage,
    text: "Digitalizecryoto sit amet consectetur. Diam metus lacus dui hac etiam metus ",
  },
  {
    image: testimonialImage,
    text: "Digitalizecryoto sit amet consectetur. Diam metus lacus dui hac etiam metus ",
  },
];
function Home() {
  return (
    <>
      <div class="homepage-section-fx"></div>
      <div class="homepage-hero-section flex items-center">
        <div className="write-up w-[639px] px-5 md:pl-[100px] flex flex-col gap-10">
          <h1 className="heading">SAFE INVESTMENT WITH DIGITALIZE CRYPTO</h1>
          <p className="uppercase text-3xl">
            <span className="marker bg-white p-1 font-semibold rounded-lg">
              {" "}
              get
            </span>{" "}
            a lifetime on investments.
          </p>
          <button className="btn3">Open Deposit</button>
        </div>
      </div>
      <div className="homepage-section-fx two"></div>
      <div className="homepage-section-one md:px-[100px]">
        <div className="sub flex flex-col md:flex-row gap-10 md:gap-20 py-14 px-3 md:rounded-2xl md:px-20 lg:gap-28 items-center">
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
        <div className="sub">
          <div className="headline flex justify-center gap-2 items-center px-3">
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

      <div>
        <GeneralCommission />
      </div>

      <div className="homepage-section-two ">
        <div className="sub">
          <div className="headline flex justify-center gap-2 items-center px-3">
            <div class="line"></div>
            <h1 className="uppercase text-2xl font-bold text-center">
              Live Testimonials
            </h1>
            <div class="line"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-3 sm:px-[100px]">
            {testimonials.map((testimonial, index) => (
              <div className="bg-primary-blue rounded-lg flex flex-col gap-5 items-center justify-center px-3 py-10">
                <div className="flex justify-center ">
                  <img
                    src={testimonial.image}
                    alt="testimonial"
                    className="w-[293px] h-[213px]"
                  />
                </div>
                <p className="text-center text-white">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>

      <section>
        <div>
          <p className="uppercase font-bold text-center">Bitcoin Price</p>
          <div className="headline flex justify-center gap-2 items-center px-3">
            <div class="line"></div>
            <h1 className="uppercase text-2xl text-center font-bold">
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
            <div className="headline flex justify-center gap-2 items-center">
              <div class="line"></div>
              <h1 className="uppercase text-2xl font-bold text-center">
                Payment systems
              </h1>
              <div class="line"></div>
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
    </>
  );
}

export default Home;
