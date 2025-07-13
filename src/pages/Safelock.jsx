import React from "react";
import Fixed from "../assets/FixedSavings.png";
import Button from "../components/reusable/Button";
import Apple from "../assets/appleLogo.svg";
import Google from "../assets/google.svg";
import Safelock1 from "../assets/safelock1.png";
import Safelock2 from "../assets/safelock2.png";
import Safelock3 from "../assets/safelock 3.png";
import Safe from "../assets/safe4.png";
import { FaApple } from "react-icons/fa";
import Fall from "../assets/fallback.png";

const Safelock = () => {
  return (
    <div>
      <div className="max-md:w-[100%]">
        <div
          className="flex justify-between items-center bg-[#2295F2] px-[50px] pt-[160px] max-md:flex-col  
  max-md:gap-y-[50px]"
        >
          <section className="max-w-[34em] max-md:max-w-[100%] max-md:mx-auto  max-md:flex max-md:flex-col max-md:items-center">
            <h1 className="text-white font-bold text-[50px] py-2">Safelock</h1>

            <main className="bg-white max-w-[180px] rounded-[20px] flex justify-center items-center  py-2.5 px-[12px] max-md:w-[70%] ">
              <img src="" alt="" />
              <p className="text-[#2295F2] 9ext-[20px] py-0.5 text-center">
                Fixed Savings
              </p>
            </main>

            <p className="text-white text-[20px] leading-[32px] font-[400] py-4 max-md:text-center ">
              Lock funds away for a fixed period of time to avoid spending
              temptation. Earn up to 20% p.a. paid upfront.
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
            <img src={Fixed} alt="" />
          </section>
        </div>
      </div>
      <div className="px-[50px]  pb-[100px] bg-[#F2F7F8]">
        <section className="text-center py-[100px]">
          <h1 className="font-bold text-[55px] text-[#122231] max-md:text-[35px]">
            Stay disciplined and avoid temptation.
          </h1>
          <p className="text-[#3D4F60]">
            Lock funds to avoid temptations. Earn your interest upfront and paid
            instantly.
          </p>
        </section>

        <section className="flex gap-[50px] max-md:flex-col ">
          <main
            className="flex flex-col items-center w-[340px] pt-[30px]  px-[30px]  bg-white rounded-[15px] justify-between
           max-md:gap-y-[80px]  max-md:w-[90%] max-md:mx-auto"
          >
            <div>
              <h1 className="text-[#2295F2] font-bold text-[36px] leading-10 pb-5">
                You’re in control
              </h1>
              <p>
                You can lock for as little as 10 days or as much as 365 days.
              </p>
            </div>

            <div>
              <img src={Safelock1} alt="" className="max-w-[470px] h-[270px]" />
            </div>
          </main>

          <main
            className="flex flex-col justify-between items-center bg-white w-[420px] pt-[30px]  px-[30px]  rounded-[15px]  
          max-md:w-[90%] max-md:mx-auto   max-md:gap-y-[80px]"
          >
            <div>
              <h1 className="text-[#2295F2] font-bold text-[36px] leading-10 pb-5">
                Save on the go
              </h1>
              <p>
                Don’t fancy automatic savings? No problem, you can manually top
                up your Piggybank savings at anytime, anywhere.
              </p>
            </div>

            <div>
              <img
                src={Safelock2}
                alt=""
                className="max-w-[390px] h-[225px] "
              />
            </div>
          </main>

          <main
            className="flex flex-col justify-between items-center gap-[80px] bg-white  w-[420px] pt-[30px]  px-[30px]  rounded-[15px] 
           max-md:w-[90%] max-md:mx-auto "
          >
            <div>
              <h1 className="text-[#2295F2] font-bold text-[36px] leading-10 pb-5">
                Earn interest upfront
              </h1>
              <p className="text-[#3D4F60] pb-3">Earn interest upfront</p>
            </div>

            <div>
              <img
                src={Safelock3}
                alt=""
                className="max-w-[400px]  h-[450px] pb-[10px]"
              />
            </div>
          </main>
        </section>
      </div>
      <div className="flex items-center justify-between pl-[50px] bg-[#2295F2]  max-md:flex-col max-md:pl-0">
        <section className="text-white max-w-[450px] max-md:py-[50px]">
          <h1 className="font-bold text-[51px] leading-[64px] pb-2.5 max-md:text-center max-md:text-[40px]">
            Avoid temptations & lock your money.
          </h1>

          <p className="leading-7 font-[400] text-[16px] max-md:text-center">
            Safelock allows you to set money aside for a fixed period of time
            without having access to it until maturity. It’s like having your
            own custom fixed deposit.
          </p>
        </section>

        <section className="h-[460px] max-w-[600px] max-md:h-auto">
          <img src={Safe} alt="" />
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

export default Safelock;
