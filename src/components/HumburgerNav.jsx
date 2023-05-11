import React from "react";
import { RxHamburgerMenu, RxPerson } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import Button from "./Button";

const HumburgerNav = () => {
  return (
    <div className="px-6 py-4 ">
      <div className="flex justify-between ">
        <div>
          <RxHamburgerMenu fontSize={"1.5rem"} cursor={"pointer"} />
        </div>
        <div className="lg:pl-[7rem]">
          <img src="/images/logo.svg" alt="" className="mx-auto" />
        </div>
        <div className="flex items-center gap-8">
          <Button text="SUBSCRIBE" />
          <div className="bg-[#E0E0E0] w-[1px] h-6"></div>
          <div className="hidden lg:block md:block">
            <Button text="SIGN IN" icon={<RxPerson />} />
          </div>
          <div className="lg:hidden md:hidden">
            <Button icon={<RxPerson />} />
          </div>
          <BsSearch cursor={"pointer"} />
        </div>
      </div>
    </div>
  );
};

export default HumburgerNav;
