import React from "react";
import Button from "../components/reusable/Button";
import Apple from "../assets/appleLogo.svg";
import Google from "../assets/google.svg";
import Dollar from "../assets/Dollar.avif";
import { FaDollarSign } from "react-icons/fa";
import Dollar1 from "../assets/Dollar1.png";
import Dollar2 from "../assets/Dollar2.png";
import Dollar3 from "../assets/Dollar3.png";
import Dollarhero from "../assets/Dollarhero.png";

const FlexDollar = () => {
  const flexCard = [
    {
      title: "Diversify your savings",
      desc: "Having different types of savings and investments helps you reach your goals faster, and can protect you against risk and volatility.",
      color: "#000000",
      img: `${Dollar1}`,
    },
    {
      title: "Withdraw anytime",
      desc: "You can withdraw at anytime.",
      color: "#000000",
      img: `${Dollar1}`,
    },
    {
      title: "Earn interest",
      desc: "Earn up to 7% p/a paid monthly.",
      color: "#000000",
      img: `${Dollar3}`,
    },
  ];
  return (
    <div>
      <div className=" bg-[#0c1825] pt-[100px] overflow-hidden max-md:h-[max-content]">
        <div className=" flex items-center max-w-[1200px] mx-auto h-full ">
          <div className="flex items-center justify-between w-full mt-[7.5%] max-md:flex-col max-md:mx-auto max-md:text-center ">
            <div className="text-white w-[500px] flex flex-col">
              <h1 className="text-[50px] font-semibold tracking-tighter ">
                Flex Dollar
              </h1>
              <div className="flex items-center w-[150px] h-[40px] bg-[#ffffff] gap-1 rounded-full text-[#0c1825] justify-center mb-[20px] max-md:mx-auto">
                <span>
                  <FaDollarSign size={25} />
                </span>
                <span className="font-normal">Dollar Savings</span>
              </div>
              <p className="text-[20px] mb-[20px] leading-7 max-md:mb-[60px]">
                Save and grow your money in foreign currencies such as Dollars.
              </p>
              <div className="flex gap-2 max-md:justify-center max-md:mb-[60px]">
                <Button
                  image={Apple}
                  bgColor="#122231"
                  textColor="#fff"
                  title="Get on iPhone"
                  imageClass="w-6 h-6"
                />
                <Button
                  image={Google}
                  bgColor="#122231"
                  textColor="#fff"
                  title="Get on Android"
                />
              </div>
            </div>

            <div className="w-[400px] ">
              <img src={Dollar} alt="flexDollar" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f7f8] pt-20 pb-24">
        <div className="  flex flex-col items-center">
          <section className=" text-center">
            <h1 className=" font-bold text-5xl tracking-tight mb-[10px] max-md:text-[43px] max-md:mb-[30px]">
              Preserve and grow your money
            </h1>
            <p className=" text-[16px] text-[#4d5966] tracking-tighter max-md:text-[18px] max-md:mb-[30px]">
              Target Savings helps you get there faster. You can even team up
              with others to reach a collective target.
            </p>
          </section>
          <section className=" flex justify-center max-w-[1200px] flex-wrap  gap-8 mt-[5%]">
            {flexCard?.map((data, i) => (
              <main
                className=" bg-white h-[550px] w-[360px] pt-9 pl-6 pr-10 rounded-2xl flex flex-col justify-between max-md:pr-6"
                key={i}
              >
                <div>
                  <h1
                    style={{ color: `${data.color}` }}
                    className=" font-bold text-3xl w-[250px] mb-[20px] max-md:text-center max-md:text-[38px] max-md:w-[300px]"
                  >
                    {data.title}
                  </h1>
                  <p className="text-[#4d5966] text-[16px]">{data.desc}</p>
                </div>
                <div>
                  <img src={data.img} alt="" />
                </div>
              </main>
            ))}
          </section>
        </div>
      </div>
      <div className="bg-[#f2f7f8]">
        <div className=" bg-[#0c1825]">
          <div className="flex items-center max-w-[1200px] mx-auto h-full overflow-hidden justify-between max-md:flex-col max-md:pt-[10%] max-md:text-center max-md:px-0">
            <div className="max-md:mb-[10%]">
              <h1 className="font-semibold text-6xl tracking-tighter max-w-[450px] text-white leading-18 mb-[20px] max-md:text-5xl max-md:leading-15">
                Preserve the value of your money
              </h1>
              <p className="text-[17px] text-[#ffff] tracking-tighter max-w-[430px]">
                One of the key elements in wealth management is preserving (and
                growing) the value of your savings. In simple terms, this means
                not losing value on your savings. Saving in foreign currencies
                like Dollars helps to hedge against that.
              </p>
            </div>
            <div className="w-[593px] h-full items-end max-md:w-full">
              <img src={Dollarhero} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexDollar;
