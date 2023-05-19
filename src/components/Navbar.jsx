import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ logourl, search, hidden }) => {
  return (
    <div
      className={`px-6 py-4 flex  ${
        logourl ? " justify-between" : "justify-center"
      } shadow-md mb-4 `}
    >
      {logourl && (
        <Link to="/">
          <img src={logourl} alt="logo" />
        </Link>
      )}
      <ul
        className={`hidden font-semibold text-xsmall text-light_black tracking-wide lg:flex gap-4 md:hidden`}
      >
        <Link to="/category/fashion">
          <li>FASHION</li>
        </Link>
        <Link to="/category/arts">
          <li>ARTS & LIFESTYLE</li>
        </Link>
        <Link to="/category/runway">
          <li>RUNWAY</li>
        </Link>
        <Link to="/category/shopping">
          <li>SHOPPING</li>
        </Link>
        <Link to="/category/news">
          <li>NEWS</li>
        </Link>
        <Link to="/category/video">
          <li>VIDEO</li>
        </Link>
        <Link to="/category/shop">
          <li>VOGUE SHOP</li>
        </Link>
        <Link to="/category/club">
          <li>VOGUE CLUB</li>
        </Link>
      </ul>
      {search && <p>{search}</p>}
    </div>
  );
};

export default Navbar;
