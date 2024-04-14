import SupportCard from "./SupportCard";

const Traders = ({ supports }) => {
  return (
    <section>
      <div className="px-[20px]">
        <div className="headline flex justify-center gap-2 items-center px-3">
          <div class="line"></div>
          <h1 className="uppercase text-2xl gradient-text font-bold text-center">
            Best CryptoInvest Traders
          </h1>
          <div class="line"></div>
        </div>
        <div className="flex justify-center">
          <p className="w-[530px] gradient-text text-lg text-center">
            The best cryptocurrency developers works in our company. They have a
            wealth of experience and understanding of the crypto market behind
            them. They brought Digitalizecrypto to the world level of
            development.
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
          <button className="btn px-10 py-2 rounded-lg duration-300 text-white bg-primary-blue border border-solid border-primary-blue hover:bg-transparent hover:text-primary-blue">
            Invest with us and get stable income
          </button>
        </div>
      </div>
    </section>
  );
};

export default Traders;
