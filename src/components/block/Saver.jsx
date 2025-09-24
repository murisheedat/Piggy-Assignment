import React from "react";
import Fallback from "../../assets/fallback.png";
import { FaApple } from "react-icons/fa";
import Button from "../reusable/Button";
import Google from "../../assets/google.svg";

const Saver = () => {
  return (
    <div>
      <section className="flex flex-col items-center my-20">
        <h1 className="font-bold text-5xl max-sm:text-xl max-sm:w-[300px] ">Meet Our Saver of the Month</h1>
        <p className="text-2xl w-3xl text-center  max-sm:w-[350px] max-sm:text-[16px]">
          Every month, we shine a spotlight on one saver, asking them about
          their savings culture and how Piggyvest has helped them.
        </p>
        <iframe
          className="w-[700px] h-[500px] my-20 rounded-2xl max-sm:w-[350px] max-sm:h-[250px] max-sm:mb-10"
          src="https://www.youtube.com/embed/2EnGMGxKuII?autoplay=1&amp;mute=1"
        ></iframe>
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
  );
};

export default Saver;
