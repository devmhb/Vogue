import React from "react";
import Icon from "./Icon";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      <div>
        <div>
          <img src="/images/logo-reverse.svg" alt="" />
        </div>
        <div>
          <Icon icon={<FaFacebookF />} />
          <Icon icon={<FaInstagram />} />
          <Icon icon={<FaTwitter />} />
          <Icon icon={<FaYoutube />} />
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Footer;
