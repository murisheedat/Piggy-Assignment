import React from "react";
import Button from "../components/reusable/Button";
import Story from "../assets/Stories.png";
import Single from "../assets/single.png";
import { FaApple } from "react-icons/fa";
import Google from "../assets/google.svg";

const Stories = () => {
  return (
    <div>
      <section className="max-w-[1280px] mx-auto px-16 py-10 flex justify-center items-center mt-20 gap-10">
        <div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Loved by our <br /> Customers
          </h1>
          <p className="text-[20px] text-gray-400 mb-6">
            Stories of happy savers who Piggyvest has helped or <br /> is
            helping save for what truly matters to them
          </p>
          <Button title="Addyourstory " bgColor="#122231" textColor="#fff" />
        </div>
        <div>
          <img className="h-[400px]" src={Story} alt="" />
        </div>
      </section>
      <section className="flex justify-center gap-9 items-center mt-30 mb-24">
        <div>
          <img src={Single} alt="" />
        </div>
        <div>
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
        </div>
      </section>
    </div>
  );
};

export default Stories;
