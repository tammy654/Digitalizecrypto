import stepsImage from "../img/steps-img.png";
import stepsImage2 from "../img/steps.png";

const steps = [
  {
    title: "Registration",
    text: "Create your secure account in minutes. Enter your email, set a strong password, and verify for safe access to the exciting world of crypto.",
  },
  {
    title: "Choose investment plan",
    text: "We offer options for all. Browse our investment plans tailored to your goals, risk tolerance, and experience level. Find the perfect fit to start your crypto journey.",
  },
  {
    title: "Start earning",
    text: "Deposit funds easily using your preferred method and begin earning on your crypto. We make it simple to watch your investment grow through clear dashboards and real-time tracking.",
  },
];

const StartingSteps = () => {
  return (
    <section>
      <div className="px-5 sm:px-[100px]">
        <div className="headline flex justify-center gap-2 items-center px-[20px]">
          <div class="line"></div>
          <h1 className="uppercase gradient-text text-2xl font-bold text-center">
            3 steps to start
          </h1>
          <div class="line"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 mt-10 px-[20px]">
          <div className="w-full">
            <img
              src={stepsImage2}
              alt="the three steps for starting"
              className="w-[10/12]"
            />
          </div>

          <ol className="w-full list-decimal flex flex-col gap-5">
            {steps.map((step, index) => (
              
              <li key={index} className="text-primary-blue text-justify font-bold">
                <span className="uppercase font-bold">{step.title}:</span>{" "}
                <br></br>
                <span className="font-normal">{step.text}</span>
              </li>
              
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default StartingSteps;
