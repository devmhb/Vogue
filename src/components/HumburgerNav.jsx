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
        <div className="pl-[7rem]">
          <img src="/images/logo.svg" alt="" />
        </div>
        <div className="flex items-center gap-8">
          <Button text="SUBSCRIBE" />
          <div className="bg-[#E0E0E0] w-[1px] h-6"></div>
          <Button text="SIGN IN" icon={<RxPerson />} />
          <BsSearch cursor={"pointer"} />
        </div>
      </div>
    </div>
  );
};

export default HumburgerNav;
