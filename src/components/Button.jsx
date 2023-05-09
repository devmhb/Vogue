import React from "react";

const Button = ({ text, icon }) => {
  return (
    <div>
      <div className="flex flex-row items-center">
        {icon ? icon : ""}
        {text}
      </div>
    </div>
  );
};

export default Button;
