import React from "react";
import Flex from "../assets/flexNaira.avif";
import Button from "../components/reusable/Button";
import Apple from "../assets/appleLogo.svg";
import Google from "../assets/google.svg";
import Flex1 from "../assets/flex1.png";
import Flex2 from "../assets/flex2.png";
import Flex3 from "../assets/flex3.png";
import Flexhero from "../assets/flexhero.png";
import Fall from "../assets/fallback.png";
import { FaApple } from "react-icons/fa";

const FlexNaira = () => {
  return (
    <div>
      <div className="max-md:w-[100%] ">
        <div>
          <div className="flex justify-between items-center bg-[#EA4FA2] px-[50px] pt-[160px] max-md:flex-col max-md:px-[20px] max-md:gap-y-[50px]">
            <section className="max-w-[34em] max-md:max-w-[100%]  ">
              <h1 className="text-white font-bold text-[50px] py-2 max-md:text-center">
                Flex Naira
              </h1>

              <main className="bg-white max-w-[180px] rounded-[20px] flex justify-center items-center  py-2.5 px-[12px] max-md:mx-auto max-md:max-w-[70%] ">
                <img src="" alt="" />
                <p className="text-[#2295F2] 9ext-[20px] py-0.5">
                  Flexible Savings
                </p>
              </main>

              <p className="text-white text-[20px] leading-[32px] font-[400] py-4 max-md:text-center">
                Flexible savings for life's emergencies. Free transfers and
                withdrawals. Earn up to 12% p.a.
              </p>

              <main className="flex gap-3 ">
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
              </main>
            </section>

            <section className="w-[500px] max-md:w-[70%] max-md:mx-auto">
              <img src={Flex} alt="" />
            </section>
          </div>
        </div>
      </div>
      <div className="px-[50px]  pb-[100px] bg-[#F2F7F8] ">
        <section className="text-center py-[100px]">
          <h1 className="font-bold text-[55px] text-[#122231] max-md:text-[30px]">
            Be better prepared for emergencies.
          </h1>
          <p className="text-[#3D4F60]">
            Building an emergency fund helps hedge against life’s risks and can
            help reduce frivolous spending.
          </p>
        </section>

        <section className="flex gap-[50px] max-md:flex-col max-md:w-[100%] ">
          <main
            className="flex flex-col items-center w-[420px]  px-[30px] gap-[150px] bg-white rounded-[15px]  
            max-md:w-[100%] max-md:pt-[50px] max-md:gap-y-[50px]"
          >
            <div className="max-w-[300px]">
              <h1 className="text-[#EA4FA2] font-bold text-[36px] leading-10 pb-5 max-md:text-center">
                Free transfers and withdrawals
              </h1>
              <p className="text-center">
                Withdraw or transfer anytime you need to.
              </p>
            </div>

            <div>
              <img
                src={Flex1}
                alt=""
                className="max-w-[390px] h-[225px] max-md:w-[100%]"
              />
            </div>
          </main>

          <main
            className="flex flex-col justify-between items-center bg-white w-[420px]   px-[30px]  rounded-[15px] 
            max-md:w-[100%] max-md:pt-[50px] max-md:gap-y-[50px]"
          >
            <div>
              <h1 className="text-[#EA4FA2] font-bold text-[36px] leading-10 pb-5 max-md:text-center">
                Manage your money
              </h1>
              <p className="max-md:text-center">
                Organise, separate, name and categorise your emergency funds
                with Labels in Flex Naira.
              </p>
            </div>

            <div>
              <img
                src={Flex2}
                alt=""
                className="max-w-[390px] h-[225px] max-md:w-[100%]"
              />
            </div>
          </main>

          <main
            className="flex flex-col justify-between items-center  bg-white  w-[420px] pt-[30px]  px-[30px]  rounded-[15px] 
            max-md:w-[100%] max-md:gap-y-[50px] max-md:flex-col"
          >
            <div className="max-md:w-[100%] ">
              <h1 className="text-[#EA4FA2] font-bold text-[36px] leading-10 pb-5 max-md:text-center ">
                Earn interest
              </h1>
              <p className="text-[#3D4F60] pb-3 max-md:text-center">
                We believe that every money you have saved should be earning you
                interests, even if it's an emergency fund.
              </p>
            </div>

            <div className="max-md:w-[100%]">
              <img
                src={Flex3}
                alt=""
                className="max-w-[390px]  h-[225px] max-md:w-[100%]"
              />
            </div>
          </main>
        </section>
      </div>
      <div className="flex items-center justify-between pl-[50px] bg-[#EA4FA2] max-md:flex-col max-md:pl-0 max-md:pb-0 max-md:gap-y-[40px]">
        <section className="text-white max-w-[450px] max-md:p-[5px] max-md:w-[90%] max-md:mx-auto">
          <h1 className="font-bold text-[51px] leading-[64px] pb-2.5 max-md:text-[30px] max-md:text-center max-md:leading-[40px]">
            Stay prepared for life's emergencies
          </h1>
          <p className="leading-7 font-[400] text-[16px] max-md:text-center">
            Give your emergency funds a boost! We know that emergencies can
            happen anytime. Building an emergency fund in Flex Naira helps you
            to stay ahead, so you can avoid borrowing or extra financial burden
            when there is a crisis. Best of all, you earn interests.
          </p>
        </section>

        <section className="h-[460px] max-w-[600px] max-md:h-auto max-md:w-[90%] max-md:mx-auto">
          <img
            src={Flexhero}
            alt="Stay Prepared"
            className="h-full w-full object-contain"
          />
        </section>
      </div>
      <div className="flex justify-between mt-24 mx-36 mb-20">
        <img className="h-120" src={Fall} alt="" />
        <section className="flex flex-col items-center py-52">
          <h1 className="font-bold text-3xl w-dvh">
            Join 5+ million people who save and invest with us
          </h1>
          <main className="flex gap-3 my-3 ml-20">
            <Button
              title="Get on iPhone"
              borderColor="grey"
              textColor="black"
              iconTitle={<FaApple />}
            />
            <Button
              title="Get on Android"
              borderColor="grey"
              textColor="black"
              image={Google}
            />
          </main>
        </section>
      </div>
    </div>
  );
};

export default FlexNaira;
