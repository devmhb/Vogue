import React from "react";
import { Link } from "react-router-dom";

const PriCard = ({ item }) => {
  return (
    <Link to={`/${item.title}`}>
      <div className="pb-6 flex justify-between gap-6 min-w-full lg:block">
        <div className="basis-[50%]">
          <img src={item.url} alt="img" className="max-w-full h-auto" />
        </div>
        <div className="basis-[50%]">
          <h3 className="font-semibold mt-2">{item.subheading}</h3>
          <h2 className="text-large font-bold">{item.title}</h2>
          <h4 className="font-semibold text-small mt-2">{item.author}</h4>
          <p>{item.date}</p>
        </div>
      </div>
    </Link>
  );
};

export default PriCard;
