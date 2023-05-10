import React from "react";
import Title from "./Title";

const SingleFeature = ({ item }) => {
  return (
    <div className="py-12">
      <div className="mb-6">
        <Title title={item.secheading} />
      </div>
      <div className="max-w-full h-[30%]">
        <img src={item.url} alt="img" />
        <div className="mt-4">
          <h4 className="font-bold">{item.category}</h4>
          <h1 className="text-xlarge font-bold leading-10">{item.title}</h1>
          <p className="font-bold text-sm mt-3">{item.author}</p>
          <p>{item.date}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
