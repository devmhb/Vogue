import React from "react";

const Button = ({ text, icon }) => {
  return (
    <div>
      <div className="flex flex-row items-center text-small font-semibold text-dark_gray tracking-wide cursor-pointer">
        {icon ? icon : ""}
        {text}
      </div>
    </div>
  );
};

export default Button;
