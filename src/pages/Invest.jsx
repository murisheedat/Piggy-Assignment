import React from "react";
import Button from "../components/reusable/Button";
import Apple from "../assets/appleLogo.svg";
import Google from "../assets/google.svg";
import Investor from "../assets/investimage.png";
import Buy from "../assets/investorimage.png";
import Explore from "../assets/explore.png";
import Avatar from "../assets/avatar.png";
import Simple from "../assets/simple.png";
import Series1 from "../assets/series1.jpg";
import Series2 from "../assets/series2.jpg";
import Series3 from "../assets/series3.jpg";
import Series4 from "../assets/series4.jpg";
import Series5 from "../assets/series5.jpg";
import Series6 from "../assets/series6.jpg";
import Fallback from "../assets/fallback.png";
import { FaApple } from "react-icons/fa";

const Invest = () => {
  const piggyCard = [
    {
      title: "CORPORATE DEBT SERIES XLVII",
      desc: "#5,000 ",
      text: "583 Investors",
      btnTitle: "Soldout",
      img: `${Series1}`,
    },
    {
      title: "CORPORATE DEBT SERIES XLVI",
      desc: "#5,000",
      text: "583 Investors",
      btnTitle: "Soldout",
      img: `${Series2}`,
    },
    {
      title: "CORPORATE DEBT SERIES XLVI",
      desc: "#5,000",
      text: "583 Investors",
      btnTitle: "Soldout",
      img: `${Series3}`,
    },
    {
      title: "CORPORATE DEBT SERIES XLIV",
      desc: "#5,000.",
      text: "583 Investors",
      btnTitle: "Soldout",
      img: `${Series4}`,
    },
    {
      title: "CORPORATE DEBT SERIES XLIV",
      desc: " #5,000.",
      btnTitle: "Soldout",
      text: "583 Investors",
      img: `${Series5}`,
    },
    {
      title: "CORPORATE DEBT SERIES XLIV",
      desc: "#5,000.",
      btnTitle: "Soldout",
      text: "583 Investors",
      img: `${Series6}`,
    },
  ];
  return (
    <div className=" bg-purple-700">
      <section className="max-w-[1280px]  px-16 mx-auto flex justify-between items-center pt-[122px] max-tablet:flex-col">
        <div className="gap-6">
          <h1 className="text-5xl font-bold text-white">Invest on the go</h1>
          <button className="rounded-full bg-white mt-4 px-3 py-2 text-purple-600">
            Up to 35% returns
          </button>
          <p className="mt-6 text-white text-[16px]">
            Invest securely and confidently on the go. <br /> Up to 35% returns,
            6-12 month duration
          </p>
          <main className="flex gap-3 mt-6">
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
        <div>
          <img className="h-[500px]" src={Investor} alt="" />
        </div>
      </section>
      <div className="bg-blue-50 text-center mb-44  ">
        <h1 className="text-5xl font-semibold ">
          Simple investments with great returns
        </h1>
        <p>Investments are made readily accessible to everyone</p>
        <section className="max-w-[1280px] flex justify-center items-center gap-9 mx-auto text-align mt-44 ">
          <div className="h-[540px] w-[370px] bg-white rounded-3xl">
            <h1 className="text-4xl font-bold text-purple-600 mt-6 ">
              Investments <br /> simplified
            </h1>
            <p>
              We work with leading licensed <br /> investment houses such as
              ARM, AIICO <br />
              and Stanbic.
            </p>
            <img
              className="h-[250px] relative top-20 left-7"
              src={Buy}
              alt=""
            />
          </div>
          <div className="h-[540px] w-[370px] bg-white  rounded-3xl">
            <h1 className="text-4xl font-bold text-purple-600 mt-6 ">
              Invest <br /> confidently
            </h1>
            <p>
              With minimum investments starting as low as <br /> N5,000,
              investment is no longer <br /> out of reach. Everyone is welcome
            </p>
            <img
              className="h-[250px] relative top-20 left-7"
              src={Explore}
              alt=""
            />
          </div>
          <div className="h-[540px] w-[370px] bg-white rounded-3xl">
            <h1 className="text-4xl font-bold text-purple-600 mt-6 ">
              Diversify your <br /> portfolio
            </h1>
            <p>
              Invest in various industries such as fixed <br /> income
              instruments, agriculture, <br /> transportation, etce
            </p>
            <img
              className="h-[250px] relative top-20 left-7"
              src={Avatar}
              alt=""
            />
          </div>
        </section>
        <section className="  ">
          <div className=" flex  mt-24">
            <div className="h-[445px] w-[876px] bg-purple-600 text-center align-center px-10 ">
              <h1 className="text-4xl font-bold text-white mt-10">
                We’ve made it easier for <br /> anyone to get started.
              </h1>
              <p className="text-white mt-6 px-5">
                Finally, you can access pre-vetted low-medium risk primary and{" "}
                <br />
                secondary investment opportunities easily with any amount you{" "}
                <br />
                have. No hidden fees/charges. Thorough due diligence and <br />
                pre-vetting on all investments are carried out for maximum{" "}
                <br />
                safety.
              </p>
            </div>
            <div>
              <img className="h-[445px]" src={Simple} alt="" />
            </div>
          </div>
        </section>
        <section className="grid grid-cols-3 gap-6 mt-20 mb-20 ml-12 mr-12 items-center justify-items-center">
          {piggyCard?.map((data, i) => (
            <main className="h-[300px] w-auto bg-white rounded-2xl">
              <img
                className="h-[110px] w-full rounded-t-2xl"
                src={data.img}
                alt=""
              />
              <h1 className="font-bold">{data.title}</h1>
              <p className="flex">
                {data.desc} {data.text}
              </p>
              <button className="mt-16  mr-36 p-4 bg-amber-50 rounded-full text-pink-600">
                {data.btnTitle}
              </button>
            </main>
          ))}
          ;
        </section>
        <div className="flex justify-between mx-36 mb-20">
          <img className="h-120" src={Fallback} alt="" />
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
    </div>
  );
};

export default Invest;
