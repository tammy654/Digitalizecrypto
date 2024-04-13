import SupportCard from "./SupportCard";

const Traders = ({ supports }) => {
  return (
    <section>
      <div>
        <div className="headline flex justify-center gap-2 items-center px-3">
          <div class="line"></div>
          <h1 className="uppercase text-2xl gradient-text font-bold text-center">
            Best CryptoInvest Traders
          </h1>
          <div class="line"></div>
        </div>
        <div className="flex justify-center">
          <p className="w-[230px] gradient-text text-lg text-center">
            Digitalizecryoto employees ensure that every investor in our company
            can earn money
          </p>
        </div>

        <div className="px-5 sm:px-[100px] my-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {supports.map((support, index) => (
              <div key={index}>
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
  );
};

export default Traders;
