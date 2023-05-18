import React from "react";

const Title = ({ title, center, space, lg }) => {
  return (
    <div>
      <h1 className={`priheading ${center} ${space} ${lg}`}>{title}</h1>
    </div>
  );
};

export default Title;
