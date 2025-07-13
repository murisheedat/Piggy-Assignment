import React from "react";
import { useState } from "react";
import Single from "../assets/single.png";
import { FaApple } from "react-icons/fa";
import Button from "../components/reusable/Button";
import Google from "../assets/google.svg";

const Faqs = () => {
  const faqData = [
    {
      title: "Statement of Account",
      content: "This shows your full account transaction history.",
    },
    {
      title: "HouseMoney",
      content:
        "A feature that allows you to save money for a specific purpose.",
    },
    {
      title: "Safelock Dollar",
      content: "Dollar-denominated savings locked for a fixed period.",
    },
    {
      title: "Next of Kin",
      content: "Details of the person to contact in emergencies.",
    },
    {
      title: "Accountability Partner",
      content: "Someone who helps you stay disciplined with your savings.",
    },
    {
      title: "What is PiggyVest",
      content: "PiggyVest is a savings and investment platform.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-16 py-10">
      <div className="items-center justify-center text-center">
        <h1 className=" text-4xl font-semibold mt-10">
          Frequently Asked Questions
        </h1>
        <input
          className="border-gray-400 border-2 rounded-lg w-full max-w-[600px] mx-auto mt-10 p-4"
          type="text"
          placeholder="Search for a question"
        />
      </div>
      <section className=" flex justify-between mt-10">
        <div className="h-full w-[300px] bg-white rounded-4xl mt-10">
          <ul className=" text-[16px] font-[400] p-4 text-gray-600 hover:">
            <li className="mb-6 p-4 border-solid-blue-500 border-2-500 bg-blue-500 rounded-2xl text-white font-bold">
              Statement of Account
            </li>
            <li className="mb-6 hover:p-4 hover:border-solid-blue-500 hover:border-2-gray-300 hover:bg-gray-300 hover:rounded-2xl hover:font-bold">
              HouseMoney
            </li>
            <li className="mb-6 hover:p-4 hover:border-solid-blue-500 hover:border-2-gray-300 hover:bg-gray-300 hover:rounded-2xl hover:font-bold">
              Safelock Dollar
            </li>
            <li className="mb-6 hover:p-4 hover:border-solid-blue-500 hover:border-2-gray-300 hover:bg-gray-300 hover:rounded-2xl hover:font-bold">
              Next of Kin
            </li>
            <li className="mb-6 hover:p-4 hover:border-solid-blue-500 hover:border-2-gray-300 hover:bg-gray-300 hover:rounded-2xl hover:font-bold">
              Accountability Partner
            </li>
            <li className="mb-6 hover:p-4 hover:border-solid-blue-500 hover:border-2-gray-300 hover:bg-gray-300 hover:rounded-2xl hover:font-bold">
              What is Piggyvest
            </li>
            <li className="mb-6 hover:p-4 hover:border-solid-blue-500 hover:border-2-gray-300 hover:bg-gray-300 hover:rounded-2xl hover:font-bold">
              Safety and Security
            </li>
            <li className="mb-6 hover:p-4 hover:border-solid-blue-500 hover:border-2-gray-300 hover:bg-gray-300 hover:rounded-2xl hover:font-bold">
              PiggyBank Saving
            </li>
            <li className="mb-6 hover:p-4 hover:border-solid-blue-500 hover:border-2-gray-300 hover:bg-gray-300 hover:rounded-2xl hover:font-bold">
              Investify
            </li>
            <li className="mb-6 hover:p-4 hover:border-solid-blue-500 hover:border-2-gray-300 hover:bg-gray-300 hover:rounded-2xl hover:font-bold">
              BVN
            </li>
            <li className="mb-6 hover:p-4 hover:border-solid-blue-500 hover:border-2-gray-300 hover:bg-gray-300 hover:rounded-2xl hover:font-bold">
              Safelock
            </li>
            <li className="mb-6 hover:p-4 hover:border-solid-blue-500 hover:border-2-gray-300 hover:bg-gray-300 hover:rounded-2xl hover:font-bold">
              TargetSaving
            </li>
            <li className="mb-6 hover:p-4 hover:border-solid-blue-500 hover:border-2-gray-300 hover:bg-gray-300 hover:rounded-2xl hover:font-bold">
              Interest
            </li>
            <li className="mb-6 hover:p-4 hover:border-solid-blue-500 hover:border-2-gray-300 hover:bg-gray-300 hover:rounded-2xl hover:font-bold">
              FlexNaira
            </li>
            <li className="mb-6 hover:p-4 hover:border-solid-blue-500 hover:border-2-gray-300 hover:bg-gray-300 hover:rounded-2xl hover:font-bold">
              FlexDollar
            </li>
            <li className="mb-6 hover:p-4 hover:border-solid-blue-500 hover:border-2-gray-300 hover:bg-gray-300 hover:rounded-2xl hover:font-bold">
              Withdrawals
            </li>
            <li className="mb-6 hover:p-4 hover:border-solid-blue-500 hover:border-2-gray-300 hover:bg-gray-300 hover:rounded-2xl hover:font-bold">
              PiggyPoints
            </li>
            <li className="mb-6 hover:p-4 hover:border-solid-blue-500 hover:border-2-gray-300 hover:bg-gray-300 hover:rounded-2xl hover:font-bold">
              ReferralsProgram(Stories)
            </li>
          </ul>
        </div>
        <div className="w-full max-w-3xl mx-auto p-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b py-3">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h3 className="text-lg font-medium text-gray-700">
                  {faq.title}
                </h3>
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </div>
              {openIndex === index && (
                <div className="mt-2 text-sm text-gray-500">{faq.content}</div>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="flex justify-center gap-9 items-center mt-10">
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

export default Faqs;
