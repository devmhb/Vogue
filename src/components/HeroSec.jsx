import React from "react";
import Title from "./Title";

const HeroSec = () => {
  return (
    <div className="pb-5">
      <Title
        title="THE BEST RED CARPET MOMENTS FROM THE 2023 MET GALA"
        center="text-center"
      />
      <div className="bg-black ">
        <video
          autoPlay
          muted
          className="h-[70vh] w-full"
          src="/The 10 best dressed from the Met Gala 2023 _ Bazaar UK.mp4"
        />
      </div>
    </div>
  );
};

export default HeroSec;
