import React from "react";
import PriCard from "./PriCard";

const RowLayout = ({ data }) => {
  return (
    <div>
      <div>
        {data.items.map((item) => (
          <PriCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default RowLayout;
