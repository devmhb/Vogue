import React from "react";
import { RxHamburgerMenu, RxPerson } from "react-icons/rx";
import Button from "./Button";

const HumburgerNav = () => {
  return (
    <div>
      <div>
        <RxHamburgerMenu />
        <div>
          <img src="/images/logo.svg" alt="" />
        </div>
        <div>
          <Button text="SUBSCRIBE" />
          <Button text="SIGN IN" icon={<RxPerson />} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HumburgerNav;
