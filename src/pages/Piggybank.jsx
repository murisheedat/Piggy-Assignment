import React from "react";
import Auto from "../assets/autoimage.png";
import Button from "../components/reusable/Button";
import Apple from "../assets/appleLogo.svg";
import Google from "../assets/google.svg";
import Piggybank1 from "../assets/piggybank1.png";
import Piggybank2 from "../assets/piggybank2.png";
import Piggybank3 from "../assets/piggybank3.png";
import Piggyhero from "../assets/piggyhero.png";
import Fall from "../assets/fallback.png";
import { FaApple } from "react-icons/fa";

const Piggybank = () => {
  return (
    <div className=" max-sm:items-center max-md:items-center max-lg:items-center max-xl:items-center ">
      <div className="flex justify-between items-center bg-[#0D60D8] px-[50px] pt-[160px]  max-md:flex-col max-md:gap-y-[50px]">
        <section className="max-w-[34em] max-md:w-[100%]">
          <h1 className="text-white font-bold text-[50px] py-2 max-md:text-center">
            Piggybank
          </h1>

          <main className="bg-white max-w-[180px] rounded-[20px] flex items-center  py-2.5 px-[12px] max-md:mx-auto ">
            <img src="" alt="" />
            <p className="text-[#2295F2] 9ext-[20px] py-0.5">
              Automated savings
            </p>
          </main>

          <p className="text-white text-[20px] leading-[32px] font-[400] py-4 max-md:text-center max-md:w-[100%]">
            Strict daily, weekly or monthly automatic savings. Earn up to 18%
            p.a.
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

        <section className="w-[500px] max-md:w-[80%] max-md:mx-auto">
          <img src={Auto} alt="" />
        </section>
      </div>
      <div className="px-[50px]  pb-[100px] bg-[#F2F7F8]">
        <section className="text-center py-[100px]">
          <h1 className="font-bold text-[55px] text-[#122231]">
            Save without thinking about it.
          </h1>
          <p className="text-[#3D4F60]">
            Enjoy automated savings, quick manual savings top up and competitive
            interest rates.
          </p>
        </section>

        <section className="flex gap-[50px] max-md:flex-col ">
          <main
            className="flex flex-col items-center w-[340px] pt-[30px]  px-[30px]  bg-white rounded-[15px] max-md:w-[90%] max-md:mx-auto
          max-md:pb-[100px]"
          >
            <div>
              <h1 className="text-[#0D60D8] font-bold text-[36px] leading-10 pb-5">
                Save automatically
              </h1>
              <p>
                Choose between automatic daily, weekly or monthly savings. Once
                you choose, our system does the rest for you. You’re in control,
                and can always change your settings anytime.
              </p>
            </div>

            <div>
              <img
                src={Piggybank1}
                alt=""
                className="max-w-[320px]  pt-[30px] max-md:w-[100%]"
              />
            </div>
          </main>

          <main className="flex flex-col justify-between items-center bg-white w-[420px] pt-[30px]  px-[30px]  rounded-[15px]  max-md:w-[90%] max-md:mx-auto">
            <div>
              <h1 className="text-[#0D60D8] font-bold text-[36px] leading-10 pb-5">
                Save on the go
              </h1>
              <p>
                Don’t fancy automatic savings? No problem, you can manually top
                up your Piggybank savings at anytime, anywhere.
              </p>
            </div>

            <div>
              <img
                src={Piggybank2}
                alt=""
                className="max-w-[390px] h-[225px] "
              />
            </div>
          </main>

          <main className="flex flex-col justify-between items-center gap-[80px] bg-white  w-[420px] pt-[30px]  px-[30px]  rounded-[15px] max-md:w-[90%] max-md:mx-auto">
            <div>
              <h1 className="text-[#0D60D8] font-bold text-[36px] leading-10 pb-5">
                Build discipline
              </h1>
              <p className="text-[#3D4F60] pb-3">
                With four free withdrawal days in the year, you are less tempted
                to spend your savings and meet your savings goals faster.
              </p>
            </div>

            <div>
              <img
                src={Piggybank3}
                alt=""
                className="max-w-[300px]  h-[250px]"
              />
            </div>
          </main>
        </section>
      </div>
      <div className="flex items-center justify-between pl-[50px] bg-[#0D60D8]  max-md:flex-col max-md:p-0 ">
        <section className="text-white max-w-[465px] max-md:w-[100%] max-md:p-[10px] max-md:mx-auto">
          <h1 className="font-bold text-[51px] leading-[64px] pb-2.5 ">
            Build your savings small small!
          </h1>

          <p className="leading-7 font-[400] text-[16px]">
            With Piggybank, you can save periodically, automatically or
            manually. You can also save as you go, on your own terms. You’re the
            boss of your savings, choose how you want to save.
          </p>
        </section>

        <section className="h-[460px] max-w-[600px] max-md:max-w-[100%] max-md:h-auto">
          <img className="max-md:w-[100%]" src={Piggyhero} alt="" />
        </section>
      </div>
      <div className="flex  justify-between mt-24 mx-36 mb-20 max-sm:flex-col max-sm:items-center">
        <img className="h-120 max-sm:h-[300px]" src={Fall}  alt="" />
        <section className="flex flex-col items-center py-52  ">
          <h1 className="font-bold text-3xl w-dvh max-sm:text-2xl max-sm:w-[400px] max-sm:text-center max-sm:mt-0 ">
            Join 5+ million people who save and invest with us
          </h1>
          <main className="flex gap-3 my-3 ml-20 max-sm:ml-0 max-sm:gap-5 max-sm:mt-5 max-sm:mb-0">
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

export default Piggybank;
