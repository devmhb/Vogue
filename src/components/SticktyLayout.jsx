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
      <div className="flex flex-col lg:flex-row">
        <div className="">
          <SecCard item={data.item2} />
        </div>
        <div className="flex flex-wrap justify-evenly">
          {data.items.map((item) => (
            <div className="lg:max-w-[15rem] w-100% mt-5">
              <PriCard item={item} key={item.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SticktyLayout;
