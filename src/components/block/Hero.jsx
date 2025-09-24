import React from "react";
import Notebook from "../../assets/notebook.svg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Button from "../reusable/Button";
import Google from "../../assets/google.svg";
import Apple from "../../assets/appleLogo.svg";
import heroImage from "../../assets/heroImage.jpg";

const Hero = () => {
  return (
    <div className="min-h-[85vh]">
      <div className=" max-w-[1280px] h-full px-16 mx-auto flex justify-between  items-center pt-[122px] max-tablet:flex-col">
        <section className="max-w-[450px] max-tablet:flex max-tablet:flex-col max-tablet:items-center max-tablet:text-center max-tablet:max-w-[600px] max-tablet:mb-6">
          <main className="flex w-[350px] h-11 bg-blue-400 text-white items-center justify-center hover:bg-black rounded-full font-semibold mb-6 ">
            <img className="whine-image" src={Notebook} alt="" />
            <span>The2024PiggyVestSavingsReport</span>
            <MdOutlineKeyboardArrowRight />
          </main>
          <h1 className=" font-bold text-[42px] leading-12 mb-6">
            The Better Way to Save & Invest
          </h1>
          <p className=" text-lg mb-5">
            Piggyvest helps over 5 million customers achieve their financial
            goals by helping them save and invest with ease.
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
        <section className=" max-w-[600px]  flex justify-center">
          <img
            className=" w-[550px] max-w-max  mt-20 mx-auto animate-bounce max-sm:w-[350px] "
            style={{ animationDuration: "30s" }}
            src={heroImage}
            alt=""
          />
        </section>
      </div>
    </div>
  );
};

export default Hero;
