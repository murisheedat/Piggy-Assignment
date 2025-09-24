import React from "react";
import Investment from "../../assets/InvestImage.avif";

const Invest = () => {
  return (
    <div>
      <section className="flex  flex-col items-center mb-16 mt-44">
        <h1 className="font-bold text-5xl text-gray-800 max-sm:text-2xl max-sm:text-center">
          Diverse ways to Invest
        </h1>
        <p className="text-2xl mt-4 text-gray-700 max-sm:w-[300px] max-sm:text-center">
          Grow your money and invest for your future confidently.
        </p>
      </section>

      <div className="relative bg-purple-700 flex mx-[250px] rounded-4xl max-sm:mx-4 mb-80">
        <main className="h-[450px] w-[1120px] flex flex-col ">
          <h1 className="font-bold text-3xl text-white px-12 py-12">
            Earn Up to 35% returns
          </h1>
          <p className="text-white w-[40%] px-12 text-[18px] max-sm:w-[300px] max-sm:text-[16px]">
            Invest securely and confidently on the go. Grow your money
            confidently by investing in pre-vetted investment opportunities.
          </p>
          <button className="text-white flex items-start my-30 mx-14 font-bold ">
            Learn about Investments
          </button>
          <section>
            <img
              className="h-93 absolute bottom-1 left-97 rounded-b-md max-sm:hidden" 
              src={Investment}
            />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Invest;
