import React from "react";
import { BsBullseye } from "react-icons/bs";
import Button from "../components/reusable/Button";
import Apple from "../assets/appleLogo.svg";
import Google from "../assets/google.svg";
import Targets from "../assets/TargetSavngs.png";
import target1 from "../assets/target1.png";
import target2 from "../assets/target2.png";
import target3 from "../assets/targethero.png";

const Target = () => {
  const piggyCard = [
    {
      title: "Your target(s), your rules",
      desc: "Customise the rules and duration of your target savings as you wish. From public mode, automated savings, to multiple targets, you’re in control.",
      color: "#10b259",
      img: `${target2}`,
    },
    {
      title: "Save with a group",
      desc: "Challenge yourself to meet your goals by saving towards a common goal with a group. No one has access to your funds but you.",
      color: "#10b259",
      img: `${target1}`,
    },
    {
      title: "Daily interest accrued",
      desc: "Earn 12% per annum to help you reach your goal faster. Think of it as a reward for meeting your target.",
      color: "#10b259",
    },
  ];
  return (
    <div>
      <div className="max-h-[100vh] bg-[#10b259] pt-20">
        <div className=" flex items-center max-w-[1200px] mx-auto h-full ">
          <div className="flex items-center justify-between w-full mt-[7.5%]">
            <div className="text-white w-[500px]">
              <h1 className="text-[50px] font-semibold tracking-tighter ">
                Target Savings
              </h1>
              <div className="flex items-center w-[220px] h-[40px] bg-[#ffffff] gap-2 rounded-full text-[#0c1825] justify-center mb-[20px]">
                <span>
                  <BsBullseye size={15} color="#10b259" />
                </span>
                <span className="font-normal text-emerald-400">
                  Goal-oriented Savings
                </span>
              </div>
              <p className="text-[20px] mb-[20px] leading-7">
                Reach all your unique savings goals individually, or as a group.
                Earn up to 12% p.a.
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
            </div>
          </div>

          <div className="w-[400px] ">
            <img src={Targets} alt="Targets" />
          </div>
        </div>
      </div>
      <div className="bg-[#f2f7f8] pt-20 pb-24">
        <div className="  flex flex-col items-center">
          <section className=" text-center">
            <h1 className=" font-bold text-5xl tracking-tighter">
              Save towards multiple goals
            </h1>
            <p className=" text-1xl text-[#4d5966] tracking-tighter">
              Target Savings helps you get there faster. You can even team up
              with others to reach a collective target.
            </p>
          </section>
          <section className=" flex justify-center max-w-[1200px] flex-wrap  gap-8 mt-[5%]">
            {piggyCard?.map((data, i) => (
              <main
                className=" bg-white h-[550px] w-[360px] pt-9 pl-6 pr-10 rounded-2xl flex flex-col justify-between"
                key={i}
              >
                <div>
                  <h1
                    style={{ color: `${data.color}` }}
                    className=" font-bold text-3xl w-[250px] mb-[20px]"
                  >
                    {data.title}
                  </h1>
                  <p className="text-[#4d5966] text-[15px]">{data.desc}</p>
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
        <div className="h-[455px] bg-[#10b259]">
          <div className="flex items-center  max-w-[1200px] mx-auto h-full justify-between">
            <div>
              <h1 className="font-semibold text-4xl tracking-tight text-white w-[510px] leading-12 mb-[20px]">
                Saving ‘just because’ is great, but saving for something special
                is a lot of fun.
              </h1>
              <p className="text-1xl text-[#ffff] tracking-tighter w-[350px]">
                Got a savings goal in mind? We’ll help you reach it! Saving for
                a new phone? Check. Dad’s surprise birthday? Check. A new car,
                special vacation? Check and check. Target Savings helps you
                reach all your savings goals easily and faster.
              </p>
            </div>
            <div className="w-[593px] h-full">
              <img src={target3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Target;
