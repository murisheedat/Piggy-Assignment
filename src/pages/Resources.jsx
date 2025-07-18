import React from "react";
import Frame from "../assets/Frame.png";
import Wellness from "../assets/Wellness.png";
import Desktop from "../assets/Desktop.webp";
import { IoMdArrowRoundForward } from "react-icons/io";
import Blog from "../components/block/Blog";
const Resources = () => {
  return (
    <div className="">
      <div className="position: relative pt-28">
        <img src={Frame} alt="" />
        <div className="position: absolute bottom-7 left-120 text-center">
          <h2 className="">Which PiggyVest Feature are you?</h2>
          <a href="http://" className="text-blue-800 underline ">
            Click to take quiz
          </a>
        </div>
      </div>
      <div className="my-[50px] h- w-[100%]">
        <img src={Wellness} alt="" className="w-[100%]" />
      </div>
      <div className="max-w-[1200px] mx-auto flex justify-between items-start gap-10 p-6">
        <div className=" w-[600px] my-6">
          <h1 className="text-[42px] font-[400] w-[450px]">
            Introducing: Piggyvest Wellness Checks
          </h1>
          <p>Ifeoluwa Adekoya</p>
          <button className="self-start bg-blue-700 text-white py-[8px] px-[22px] rounded-[20px] my-7">
            Annoucements
          </button>
        </div>
        <div className="flex flex-col gap-5 w-[600px] items-start mt-[35px]">
          <h3 className="text-[21px] font-[500] text-blue-700">Most popular</h3>
          <div className="flex justify-between items-center gap-5 border-b-2 border-gray-100">
            <h4 className="text-[18px] font-[400] w-[350px]">
              Building Wealth in Your 20s: Practical Money-Saving Strategies for
              Young Nigerians
            </h4>
            <button className="self-end bg-blue-700 text-white py-[8px] px-[18px] rounded-[20px] my-7">
              Money Tips
            </button>
          </div>
          <div className="flex justify-between items-center gap-5 border-b-2 border-gray-100">
            <h1 className="text-[18px] font-[400] w-[350px]">
              My Money Mistake: My Family Lost Over ₦10 Million To A Ponzi
              Scheme
            </h1>
            <button className="self-end bg-pink-500 text-white py-[8px] px-[14px] rounded-[20px] my-7">
              My Money Mistake
            </button>
          </div>
          <div className="flex justify-between items-center gap-5">
            <h1 className="text-[18px] font-[400] w-[350px]">
              Women & Money: Ore Eni-Ibukun Is Prioritising Work-Rest Balance
            </h1>
            <button className="self-end bg-green-700 text-white py-[8px] px-[18px] rounded-[20px] my-7">
              Women & money
            </button>
          </div>
        </div>
      </div>

      <div className="w-[100%]  mx-auto p-6">
        <div className="flex items-center w-full gap-5">
          <h1 className="text-[40px] font-[600] mr-[30px]">Most Recent</h1>
          <hr className="w-150 border-t-2 border-gray-200" />
          <button className="border-1 rounded-[13px] border-gray-200 py-[13px] px-[80px] ">
            View all
          </button>
        </div>

        <div className="w-[100%] mx-auto bg-white rounded-lg pb-[20px]">
          <Blog />
        </div>
      </div>

      <div className="w-[100%] mx-auto gap-y-[30px] p-6">
        <div className="flex items-center w-full gap-5">
          <h1 className="text-[40px] font-[600] mr-[30px]">Money Tip</h1>
          <hr className="w-150 border-t-2 border-gray-200" />
          <button className="border-1 rounded-[13px] border-gray-200 py-[13px] px-[80px] ">
            View all
          </button>
        </div>

        <div className="w-[100%] mx-auto bg-white rounded-lg pb-[20px]">
          <Blog />
        </div>
      </div>

      <div className="w-[100%] mx-auto p-6">
        <div className="flex mb-[20px] items-center w-full gap-5">
          <h1 className="text-[40px] font-[600] mr-[30px]">How To</h1>
          <hr className="w-195 border-t-2 border-gray-200" />
          <button className="border-1 rounded-[13px] border-gray-200 py-[10px] px-[60px] ">
            View all
          </button>
        </div>

        <div className="w-[100%] mx-auto bg-white rounded-lg pb-[20px]">
          <Blog />
        </div>
      </div>

      <div className="w-[100%] mx-auto p-6">
        <div className="flex  items-center w-full gap-5">
          <h1 className="text-[40px] font-[600] mr-[30px]">Announcement</h1>
          <hr className="w-170 border-t-2 border-gray-200" />
          <button className="rounded-[13px] border-1 border-gray-200 py-[10px] px-[60px] ">
            View all
          </button>
        </div>

        <div className="w-[100%] mx-auto bg-white rounded-lg pb-[20px] mb-[380px]">
          <Blog />
        </div>
      </div>
      <div className="w-[100%]  mx-auto p-6 relative">
        <div className="w-[1220px] px-[80px] h-[400px] mx-auto p-6 absolute bottom-[-85px] gap-y-[20px] bg-[#E9F4FE] rounded-[20px] display flex flex-col justify-center items-center">
          <h3 className="text-[23px] font-[700]">MY MONEY MISTAKE</h3>
          <h1 className="text-[41px] leading-10 w-[1100] font-[500]">
            “I wasn’t even doing it for the money. I just didn’t want to lose
            the job. At this stage, my father was tired of me.”
          </h1>
          <h3 className="text-[23px] font-[700]">Adaora Nwodo</h3>
          <button className=" text-white bg-blue-700 px-5 py-2 rounded-[20px]">
            Money Tips
          </button>
        </div>
      </div>

      <div className="w-[100%] h-[850px] mx-auto p-6 text-white bg-black display flex flex-col justify-center items-center">
        <div className="flex items-center w-full gap-5">
          <h1 className="text-[40px] font-[600] mr-[30px]">My Money Mistake</h1>
          <hr className="w-150 border-t-2 border-gray-200" />
          <button className="border-1 rounded-[13px] border-gray-200 py-[10px] px-[60px] ">
            View all
          </button>
        </div>
        <div className="w-[100%] mx-auto  bg-black rounded-lg pb-[20px]">
          <Blog />
        </div>
      </div>

      <div className="w-full mx-auto p-6 bg-blue-700 text-white flex justify-between items-center gap-5 py-10">
        <h1 className="text-[45px] font-[600] py-[50px] w-[320px]">
          Subscribe to our newsletter..
        </h1>
        <div className="w-[550px]">
          <h2 className="flex justify-between items-center text-[27px] font-[400]">
            <span>Enter e-mail address</span>{" "}
            <span>
              <IoMdArrowRoundForward />
            </span>
          </h2>
          <hr className=" border-t-2 border-gray-100" />
          <p className="text-[10px]">
            By “submitting”, you agree to join the ‘Money Matters’ Newsletter.
          </p>
        </div>
      </div>
      <div className="w-[100%] mx-auto p-6">
        <div className=" w-full">
          <h1 className="text-[40px] font-[600]">Explore All</h1>
          <div className="flex gap-5 mt-[20px]">
            <button className="border-1 border-gray-200 rounded-[10px] cursor-pointer py-[8px] px-[35px] ">
              Money Tips
            </button>
            <button className="border-1 border-gray-200 rounded-[10px] cursor-pointer py-[8px] px-[35px] ">
              Finance
            </button>
            <button className=" border-1 border-gray-200 rounded-[10px] cursor-pointer py-[8px] px-[35px] ">
              App Guide
            </button>
          </div>
        </div>

        <div className="w-[100%] mx-auto bg-white rounded-lg pb-[20px] flex flex-col justify-center items-center">
          <Blog />
          <Blog />
          <button className="self-center my-[50px] border-1 border-gray-200 rounded-[10px] cursor-pointer py-[8px] px-[35px] ">
            Load More
          </button>
        </div>
      </div>
      <img src={Desktop} alt="" className="w-fit rounded-[10px]" />
      <div>
        <div className="w-full mx-auto p-6  text-black flex justify-between items-center gap-5 py-10">
          <h1 className="text-[45px] font-[600] w-[320px]">
            Subscribe to our newsletter..
          </h1>
          <div className="w-[550px]">
            <h2 className="flex justify-between items-center text-gray-400 text-[27px] font-[400]">
              <span>Enter e-mail address</span>{" "}
              <span>
                <IoMdArrowRoundForward />
              </span>
            </h2>
            <hr className="border-t-2 border-gray-300" />
            <p className="text-[10px]">
              By “submitting”, you agree to join the ‘Money Matters’ Newsletter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
