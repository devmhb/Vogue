import React from "react";
import { Link } from "react-router-dom";

const SecCard = ({ item }) => {
  return (
    <Link to={`/${item.title}`}>
      <div
        className="h-[60vh] lg:min-h-[90vh] sticky top-0 left-0 text-white flex items-end"
        style={{
          backgroundImage: `url(${item.url})`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          opacity: `.9`,
        }}
      >
        <div className="text-center flex flex-col gap-6">
          <h4 className="font-semibold">{item.subheading}</h4>
          <h1 className="text-xlarge font-bold leading-tight">{item.title}</h1>
          <p className="font-semibold">{item.author}</p>
          <p>{item.date}</p>
        </div>
      </div>
    </Link>
  );
};

export default SecCard;
