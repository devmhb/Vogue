import React from "react";
import { RxHamburgerMenu, RxPerson } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import Button from "./Button";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Icon from "./Icon";
import { Link } from "react-router-dom";

const HumburgerNav = ({ showItems, showNavItems }) => {
  return (
    <div className={`${!showItems ? "px-6" : ""} py-6 `}>
      <div className="flex justify-between ">
        <div className="cursor-pointer" onClick={showNavItems}>
          <div className="max-h-[4px]">
            {!showItems && <RxHamburgerMenu fontSize={"1.5rem"} />}
          </div>
        </div>
        {showItems && (
          <div className=" min-h-screen min-w-full py-4">
            <div className="pb-3 shadow">
              <div className=" flex flex-row px-6">
                <RxCross2
                  fontSize={"1.5rem"}
                  cursor={"pointer"}
                  onClick={showNavItems}
                />
                <img src="/images/logo.svg" alt="logo" className="mx-auto" />
              </div>
            </div>
            <ul className="border-b border-black px-5 py-6 font-semibold text-base flex flex-col gap-6 text-light_black  gap-4 ">
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
            <ul className="py-5 px-6 border-b-2 border-black flex flex-col gap-6 text-small font-extralight">
              <li>Search</li>
              <li>Sign in</li>
              <li>Subscribe</li>
              <li>Newsletter</li>
              <li>People and parties</li>
              <li>Miss vogue</li>
              <li>Mini vogue</li>
              <li>Vogue insider</li>
              <li>Vogue Retailer</li>
            </ul>
            <div className="flex items-center justify-center gap-5 mt-5 text-black">
              <Icon icon={<FaFacebookF />} />
              <Icon icon={<FaInstagram />} />
              <Icon icon={<FaTwitter />} />
              <Icon icon={<FaYoutube />} />
            </div>
          </div>
        )}
        <div className="mx-auto">
          <img src="/images/logo.svg" alt="" className="mx-auto" />
        </div>
        <div className="flex items-center gap-8">
          {!showItems && (
            <>
              <Link to="/subscribe">
                <Button text="SUBSCRIBE" />
              </Link>
              <div className="bg-[#E0E0E0] w-[1px] h-6"></div>
              <div className="hidden lg:block md:block">
                <Button text="SIGN IN" icon={<RxPerson />} />
              </div>
              <div className="lg:hidden md:hidden">
                <Button icon={<RxPerson />} />
              </div>
              <BsSearch cursor={"pointer"} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HumburgerNav;
