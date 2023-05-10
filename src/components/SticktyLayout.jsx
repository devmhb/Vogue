import React from "react";
import Title from "./Title";
import PriCard from "./PriCard";
import SecCard from "./SecCard";

const SticktyLayout = ({ data }) => {
  return (
    <div>
      <div>
        <Title title={data.title} />
      </div>
      <div>
        <div>
          <SecCard item={data.item2} />
        </div>
        <div>
          {data.items.map((item) => (
            <PriCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SticktyLayout;
