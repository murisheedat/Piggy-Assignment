import React from "react";
import Auto from "../../assets/autoimage.png";
import FixedSavings from "../../assets/FixedSavings.png";
import Goal from "../../assets/Goal.avif";
import FlexNaira from "../../assets/FlexNaira.avif";
import Dollar from "../../assets/Dollar.avif";
import House from "../../assets/House.png";
import Arrow from "../../assets/arrowse.svg";

const Diverse = () => {
  const piggyCard = [
    {
      title: "Automated Savings",
      desc: "Build a dedicated savings faster on your terms, automatically or manually",
      btnTitle: "Piggybank",
      piggyHover: "#0F60D6",
      img: `${Auto}`,
      color: "#0F60D6",
    },
    {
      title: "Fixed Savings",
      desc: "Locked money away for a fixed duration without having access to it until maturity. it's like having a custom deposits fixed",
      btnTitle: "Fixed Savings",
      piggyHover: "#2295f2",
      img: `${FixedSavings}`,
      color: "#2295f2",
    },
    {
      title: "Goal-Oriented Savings",
      desc: "Reach all your savings goals faster. Save multiple goaks on your own with or without a group",
      btnTitle: "Targetsavings",
      piggyHover: "#39c277",
      img: `${Goal}`,
      color: "#39c277",
    },
    {
      title: "Flex Naira",
      desc: "Save, transfer, manage, organise, and withdraw your money at anytime.",
      btnTitle: "FlexNaira",
      piggyHover: "#E5489B",
      img: `${FlexNaira}`,
      color: "#E5489B",
    },
    {
      title: "Flex Dollar",
      desc: "save and grow your money in foreign currency such as Dollar.",
      btnTitle: "FlexDollar",
      piggyHover: "#0C1825",
      img: `${Dollar}`,
      color: "#0C1825",
    },
    {
      title: "House Money",
      desc: "Plan for your rents and household expenses",
      btnTitle: "House Money",
      piggyHover: "#FF783C",
      img: `${House}`,
      color: "#FF783C",
    },
  ];
  return (
    <div className=" my-20 flex flex-col items-center">
      <section className=" text-center">
        <h1 className=" font-bold text-5xl">Many ways to build your savings</h1>
        <p className=" text-2xl pt-6">
          Earn 12%-20% when you save with any of these Piggyvest plans.
        </p>
      </section>
      <section className=" flex justify-center max-w-[1200px] flex-wrap ">
        {piggyCard?.map((data, i) => (
          <main
            style={{ "--hover-bg": data.piggyHover }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = data.piggyHover;
              e.currentTarget.style.color = "#FFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "black";
              e.currentTarget.style.backgroundColor = "#fff";
            }}
            className=" bg-white h-[438px] w-[475px] m-9 p-5 group relative rounded-3xl"
            key={i}
          >
            <h1
              style={{ color: `${data.color}` }}
              className=" font-bold text-3xl group-hover:text-white"
            >
              {" "}
              {data.title}{" "}
            </h1>
            <img
              src={data.img}
              className="absolute bottom-0 right-8 h-[250px] hidden group-hover:block"
              alt=""
            />
            <p className="group-hover:text-white pt-4 text-[20px] font-normal">
              {data.desc}
            </p>
            <button className="group-hover:text-white pt-64 flex gap-3">
              <img src={Arrow} alt="" />
              {data.btnTitle}
            </button>
          </main>
        ))}
      </section>
    </div>
  );
};

export default Diverse;
