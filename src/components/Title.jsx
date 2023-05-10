import React from "react";

const Title = ({ title, center }) => {
  return (
    <div>
      <h1 className={`priheading ${center}`}>{title}</h1>
    </div>
  );
};

export default Title;
