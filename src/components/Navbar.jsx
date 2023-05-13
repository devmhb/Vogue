import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ logourl, search }) => {
  return (
    <div
      className={`px-6 py-4 flex  ${
        logourl ? " justify-between" : "justify-center"
      } shadow-md mb-4`}
    >
      {logourl && (
        <Link to="/">
          <img src={logourl} alt="logo" />
        </Link>
      )}
      <ul className="font-semibold text-xsmall text-light_black tracking-wide flex gap-4 ">
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
      {search && <p>{search}</p>}
    </div>
  );
};

export default Navbar;
