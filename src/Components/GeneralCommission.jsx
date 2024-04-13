const GeneralCommission = () => {
  return (
    <div className="homepage-section-three md:px-[100px]">
      <div className="sub md:rounded-xl">
        <div className="write-up tab p-5 sm:p-10">
          <h1 className="sub-heading">GENERAL COMMISION</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur. Diam metus lacus dui hac
            etiam metus amet. Sagittis diam duis tortor in. Id curabitur egestas
            donec mauris ipsum vitae lorem non semper. Quam urna felis massa
            nisl eget neque auctor sit. Volutpat fermentum arcu lorem tortor
            vitae morbi. Sit viverra aliquet
            <br></br>
            <br></br>
            <br></br>
            <li className="text-justify">
              COMPANY COMMISSION: curabitur egestas donec mauris ipsum vitae
              lorem non semper. Quam urna felis massa nisl eget neque auctor
              sit. Volutpat fermentum arcu lorem tortor vitae morbi. Sit viverra
              aliquet
            </li>
            <li className="text-justify">
              ADMINISTRATIVE COMMISION: curabitur egestas donec mauris ipsum
              vitae lorem non semper. Quam urna felis massa nisl eget neque
              auctor sit. Volutpat fermentum arcu lorem tortor vitae morbi. Sit
              viverra aliquet
            </li>
          </p>
        </div>
      </div>
      <div className="w-full my-5 max-md:px-5">
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
  );
};

export default GeneralCommission;
