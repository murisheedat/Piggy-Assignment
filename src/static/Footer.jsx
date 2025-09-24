import React from "react";
import Cabel from "../assets/cabel.png";
import Cncb from "../assets/Cncb.png";
import Crunch from "../assets/Crunch.png";
import Pymnt from "../assets/pymnt.svg";
import Fast from "../assets/fast.svg";
import Cio from "../assets/Cio.svg";
import Compliance from "../assets/compliance.avif";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram, IoLogoTwitter, IoLogoTiktok } from "react-icons/io5";
import { TbBrandYoutubeFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="max-w-[1280px] mx-auto px-6 md:px-2 py-10">
      {/* Featured in */}
      <section className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl font-semibold">As featured in</h1>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
          <img className="h-8" src={Cabel} alt="Tech" />
          <img className="h-12" src={Cncb} alt="CNBC" />
          <img className="h-8" src={Crunch} alt="Crunch" />
          <img className="h-6 md:h-8" src={Pymnt} alt="PYMNTS" />
          <img className="h-6 md:h-8" src={Fast} alt="Fast Company" />
          <img className="h-6 md:h-8" src={Cio} alt="CIO" />
        </div>
      </section>

      {/* Main footer content */}
      <section className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-20 mt-10 text-sm text-gray-600">
        {/* Logo + Compliance */}
        <div className="flex flex-col items-center md:items-start">
          <img className="mb-4 w-28" src="./logo.svg" alt="Piggyvest Logo" />
          <img className="h-20 md:h-28" src={Compliance} alt="Compliance" />
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold mb-2">Product</h3>
          <ul className="space-y-1">
            <li>Piggybank</li>
            <li>Invest</li>
            <li>Safelock</li>
            <li>Target Savings</li>
            <li>Flex Naira</li>
            <li>Flex Dollar</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1">
            <li>About</li>
            <li>FAQs</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-1">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Services</li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start gap-4 mb-4">
            <FaFacebookF size={20} />
            <IoLogoInstagram size={20} />
            <IoLogoTwitter size={20} />
            <IoLogoTiktok size={20} />
            <TbBrandYoutubeFilled size={20} />
          </div>
          <p>
            Tesmot House, 3 Abdulrahman Okene Close,
            <br /> Off Ligali Ayorinde St, Victoria Island, Lagos
          </p>
          <p className="mt-2">Contact@piggyvest.com</p>
          <p>+234 700 933 9333</p>
        </div>
      </section>

      {/* Bottom */}
      <section className="mt-10 text-center">
        <hr className="border-gray-300 mb-6" />
        <p className="text-gray-400 text-xs md:text-sm">
          Piggyvest (formerly piggybank.ng) is the leading online savings &
          investing platform in Nigeria. For over 9 years, our customers have
          saved and invested billions of Naira that they would normally be
          tempted to spend.
        </p>
        <p className="text-blue-600 mt-4 text-xs md:text-sm">
          2016 - 2025 PiggyTech Global Limited - RC 1405222
        </p>
      </section>
    </footer>
  );
};

export default Footer;
