import React from "react";
import Title from "./Title";
import PriCard from "./PriCard";

const RowLayout = ({ data }) => {
  return (
    <div className="py-6">
      <Title title={data.title} />
      <div className="flex flex-wrap justify-between py-6">
        {data.items.map((item) => (
          <div className="lg:max-w-[15rem] w-full" key={item.id}>
            <div className="">
              <PriCard item={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RowLayout;
