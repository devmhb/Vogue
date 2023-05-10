import React from "react";

const PriCard = ({ item }) => {
  return (
    <div className="pb-6">
      <div>
        <img src={item.url} alt="img" className="max-w-full h-auto" />
      </div>
      <h3 className="font-semibold mt-2">{item.subheading}</h3>
      <h2 className="text-large font-bold">{item.title}</h2>
      <h4 className="font-semibold text-small mt-2">{item.author}</h4>
      <p>{item.date}</p>
    </div>
  );
};

export default PriCard;
