import DepositCards from "../Components/DepositCards";
import SupportCard from "../Components/SupportCard";

import supportImage from "../img/support.png";
import stepsImage from "../img/steps-img.png";
import paymentImage from "../img/payment-img.png";
import testimonialImage from "../img/testimonial-img.png";

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

const steps = [
  {
    title: "registration",
    text: "curabitur egestas donec mauris ipsum vitae lorem non semper. Quam urna felis massa nisl eget neque auctor sit. Volutpat fermentum arcu lorem tortor vitae morbi. Sit viverra aliquet",
  },
  {
    title: "choose investment plan",
    text: "curabitur egestas donec mauris ipsum vitae lorem non semper. Quam urna felis massa nisl eget neque auctor sit. Volutpat fermentum arcu lorem tortor vitae morbi. Sit viverra aliquet",
  },
  {
    title: "start earning",
    text: "curabitur egestas donec mauris ipsum vitae lorem non semper. Quam urna felis massa nisl eget neque auctor sit. Volutpat fermentum arcu lorem tortor vitae morbi. Sit viverra aliquet",
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
          <p className="details">
            Digitalizecryoto sit amet consectetur. Diam metus lacus dui hac
            etiam metus amet. Sagittis diam duis tortor in. Id curabitur egestas
            donec mauris ipsum vitae l
          </p>
          <button className="btn3">Open Deposit</button>
        </div>
      </div>
      <div className="homepage-section-fx two"></div>
      <div className="homepage-section-one sm:px-[100px]">
        <div className="sub flex flex-col md:flex-row gap-10 md:gap-20 py-14 px-3 md:rounded-2xl md:px-20 lg:gap-10 items-center">
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
              Lorem ipsum dolor sit amet consectetur. Diam metus lacus dui hac
              etiam metus amet. Sagittis diam duis tortor in. Id curabitur
              egestas donec mauris ipsum vitae lorem non semper. Quam urna felis
              massa nisl eget neque auctor sit. Volutpat fermentum arcu lorem
              tortor vitae morbi. Sit viverra aliquet
            </p>
            <button className="btn4">Read More</button>
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
      <div className="homepage-section-three md:p-[100px]">
        <div className="sub md:rounded-xl">
          <div className="write-up tab p-3 sm:p-10">
            <h1 className="sub-heading">GENERAL COMMISION</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur. Diam metus lacus dui hac
              etiam metus amet. Sagittis diam duis tortor in. Id curabitur
              egestas donec mauris ipsum vitae lorem non semper. Quam urna felis
              massa nisl eget neque auctor sit. Volutpat fermentum arcu lorem
              tortor vitae morbi. Sit viverra aliquet
              <br></br>
              <br></br>
              <br></br>
              <li className="text-justify">
                COMPANY COMMISSION: curabitur egestas donec mauris ipsum vitae
                lorem non semper. Quam urna felis massa nisl eget neque auctor
                sit. Volutpat fermentum arcu lorem tortor vitae morbi. Sit
                viverra aliquet
              </li>
              <li className="text-justify">
                ADMINISTRATIVE COMMISION: curabitur egestas donec mauris ipsum
                vitae lorem non semper. Quam urna felis massa nisl eget neque
                auctor sit. Volutpat fermentum arcu lorem tortor vitae morbi.
                Sit viverra aliquet
              </li>
            </p>
          </div>
        </div>
        <div className="w-full my-5 max-md:px-3">
          <div className="border border-solid border-black rounded-lg p-5 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="plan">Choose plan</label>
              <select
                id="plan"
                className="w-full border border-solid border-black rounded-lg p-3"
              >
                <option value="">Select</option>
                <option value="plan1">Plan 1</option>
                <option value="plan2">Plan 2</option>
                <option value="plan3">Plan 3</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="amount">Enter amount</label>
              <input
                type="number"
                id="amount"
                placeholder="0.0"
                className="w-full border border-solid border-black rounded-lg p-3"
              />
            </div>
          </div>
          <div className="flex justify-center items-center my-5">
            <button className="border border-solid border-black duration-300 hover:bg-primary-blue hover:text-white  rounded-lg w-60 p-1">
              Calculate profit
            </button>
          </div>

          <div className="flex gap-5 p-5">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="net">Net Profit</label>
              <input
                type="text"
                className="w-full p-2 border border-solid border-black rounded-lg"
                placeholder="Select"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="net">Gross Profit</label>
              <input
                type="text"
                className="w-full p-2 border border-solid border-black rounded-lg"
                placeholder="Select"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="homepage-section-two">
        <div className="sub">
          <div className="headline px-3">
            <div class="line"></div>
            <h1 className="sub-heading">Live Testimonials</h1>
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

      <section>
        <div>
          <div className="headline flex justify-center gap-2 items-center px-3">
            <div class="line"></div>
            <h1 className="uppercase text-2xl font-bold text-center">
              Best CryptoInvest Traders
            </h1>
            <div class="line"></div>
          </div>
          <div className="flex justify-center">
            <p className="w-[230px] linear_color text-lg text-center">
              Digitalizecryoto employees ensure that every investor in our
              company can earn money
            </p>
          </div>

          <div className="px-3 sm:px-[100px] my-5">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {supports.map((support, index) => (
                <div>
                  <SupportCard support={support} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <button className="px-10 py-2 rounded-lg duration-300 text-white bg-primary-blue border border-solid border-primary-blue hover:bg-transparent hover:text-primary-blue">
              Invest with us and get stable income
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="py-10 px-5 sm:px-[100px]">
          <div className="headline flex justify-center gap-2 items-center">
            <div class="line"></div>
            <h1 className="uppercase text-2xl font-bold text-center">
              3 steps to start
            </h1>
            <div class="line"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-20 mt-10">
            <div className="w-full">
              <img
                src={stepsImage}
                alt="the three steps for starting"
                className="w-[568px]"
              />
            </div>

            <ol className="w-full list-decimal flex flex-col gap-5">
              {steps.map((step, index) => (
                <li key={index} className="text-primary-blue text-justify">
                  <span className="uppercase font-bold">{step.title}:</span>{" "}
                  {step.text}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section>
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
