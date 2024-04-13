import stepsImage from "../img/steps-img.png";

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

const StartingSteps = () => {
  return (
    <section>
      <div className="pl-7 pr-5 sm:px-[100px]">
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
  );
};

export default StartingSteps;
