import React from "react";
import Title from "./Title";
import PriCard from "./PriCard";
import SecCard from "./SecCard";

const SticktyLayout = ({ data }) => {
  return (
    <div>
      <div className="py-6">
        <Title title={data.title} />
      </div>
      <div className="flex">
        <div className="basis-[50%] min-h-screen">
          <SecCard item={data.item2} />
        </div>
        <div className="basis-[50%] flex flex-wrap justify-evenly">
          {data.items.map((item) => (
            <div className="max-w-[15rem]">
              <PriCard item={item} key={item.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SticktyLayout;
