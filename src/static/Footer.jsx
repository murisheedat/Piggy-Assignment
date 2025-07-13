import React from "react";
import Cabel from "../assets/cabel.png";
import Cncb from "../assets/Cncb.png";
import Crunch from "../assets/Crunch.png";
import Pymnt from "../assets/pymnt.svg";
import Fast from "../assets/fast.svg";
import Cio from "../assets/Cio.svg";
import Compliance from "../assets/compliance.avif";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoTiktok } from "react-icons/io5";
import { TbBrandYoutubeFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="max-w-[1280px] mx-auto px-16 py-10 items-center">
      <div className="tablet:flex-row tablet:justify-between mobile:flex-col ">
        <section>
          <div className="text-center text-4xl font-semibold mb-10">
            <h1>As featured in</h1>
            <div className="flex items-center justify-center gap-6  mt-6">
              <img className="h-8" src={Cabel} alt="Tech" />
              <img className="h-12" src={Cncb} alt="CNBC" />
              <img className="h-8" src={Crunch} alt="Crunch" />
              <img src={Pymnt} alt="PYMNTS" />
              <img src={Fast} alt="Fast Company" />
              <img src={Cio} alt="CIO" />
            </div>
          </div>
        </section>
        <section className="flex items-center justify-between px-16 mt-44 text-[14px] text-gray-600 ">
          <div>
            <img src="./logo.svg" alt="" />
            <img className="h-28" src={Compliance} alt="" />
          </div>
          <div>
            <ul>
              <li>
                <h3 className="font-semibold">Product</h3>{" "}
              </li>
              <li>Piggybank </li>
              <li>Invest </li>
              <li>Safelock</li>
              <li>Target Savings</li>
              <li>Flex Naira</li>
              <li>Flex Dollar</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <h3 className="font-semibold">Company </h3>
              </li>
              <li>About </li>
              <li>FAQs</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <h3 className="font-semibold">Legal</h3>
              </li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Services</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-4 mt-2">
              <FaFacebookF size={20} />
              <IoLogoInstagram size={20} />
              <IoLogoTwitter size={20} />
              <IoLogoTiktok size={20} />
              <TbBrandYoutubeFilled size={20} />
            </div>
            <div>
              <p>
                Tesmot House, 3 Abdulrahman Okene Close,
                <br /> Off Ligali Ayorinde St, Victoria Island, Lagos
              </p>
              <p>Contact@piggyvest.com</p>
              <p>+234 700 933 9333</p>
            </div>
          </div>
        </section>
        <section>
          <hr className=" border-gray-300 flex-grow mt-10" />
          <p className=" text-gray-400 mt-6 text-[10px]">
            Piggyvest (formerly piggybank.ng) is the leading online savings &
            investing platform in Nigeria. For over 9 years, our customers have{" "}
            <br />
            saved and invested billions of Naira that they would normally be
            tempted to spend
          </p>
          <p className="text-blue-600 mt-4 text-[10px] ">
            2016 - 2025 PiggyTech Global Limited - RC 1405222
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
