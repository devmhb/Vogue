import React from "react";
import Icon from "./Icon";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import { BiDownArrow } from "react-icons/bi";

const Footer = () => {
  const [showNavItems, setShowNavItems] = useState(false);
  const showItems = () => setShowNavItems(!showNavItems);
  return (
    <div className="max-w-[90%] mx-auto text-white flex flex-wrap justify-center gap-8 lg:gap-0 lg:justify-between py-8">
      <div className="basis-[50%] ">
        <div>
          <img
            src="/images/logo-reverse.svg"
            alt=""
            className="max-w-full w-32 h-auto"
          />
        </div>

        <div className="flex gap-5 mt-5">
          <Icon icon={<FaFacebookF />} />
          <Icon icon={<FaInstagram />} />
          <Icon icon={<FaTwitter />} />
          <Icon icon={<FaYoutube />} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  justify-between w-auto basis-[50%]">
        <div className="hidden lg:block">
          <ul className="flex flex-col gap-6">
            <h4 className="font-bold">MORE FROM VOGUE</h4>
            <li>FASHION</li>
            <li>BEAUTY</li>
            <li>ARTS & LIFESTYLE</li>
            <li>RUNWAY</li>
            <li>SHOPPING</li>
            <li>NEWS</li>
            <li>VIDEO</li>
            <li>VOGUE SHOP</li>
            <li>VOGUE CLUB</li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <ul className="flex flex-col gap-6">
            <h4 className="font-bold">CONDÉ NAST BRITAIN</h4>
            <li>CN TRAVELLER</li>
            <li>GLAMOUR</li>
            <li>GQ</li>
            <li>HOUSE & GARDEN</li>
            <li>JOHANSENS</li>
            <li>TATLER</li>
            <li>VANITY FAIR</li>
            <li>WIRED</li>
            <li>WORLD OF INTERIORS</li>
          </ul>
        </div>

        <div className="block lg:hidden">
          <h4 onClick={showItems} className="flex items-center">
            More from vogue{" "}
            <span>
              <BiDownArrow />
            </span>
          </h4>
          {showNavItems && (
            <ul>
              <li>FASHION</li>
              <li>BEAUTY</li>
              <li>ARTS & LIFESTYLE</li>
              <li>RUNWAY</li>
              <li>SHOPPING</li>
              <li>NEWS</li>
              <li>VIDEO</li>
              <li>VOGUE SHOP</li>
              <li>VOGUE CLUB</li>
            </ul>
          )}
        </div>
        <div className="block lg:hidden mt-6">
          <h4 onClick={showItems} className="flex items-center">
            CONDÉ NAST BRITAIN
            <span>
              <BiDownArrow />
            </span>
          </h4>
          {showNavItems && (
            <ul>
              <li>CN TRAVELLER</li>
              <li>GLAMOUR</li>
              <li>GQ</li>
              <li>HOUSE & GARDEN</li>
              <li>JOHANSENS</li>
              <li>TATLER</li>
              <li>VANITY FAIR</li>
              <li>WIRED</li>
              <li>WORLD OF INTERIORS</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
