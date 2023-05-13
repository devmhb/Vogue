import React from "react";

const SubscribeCard = ({
  heading,
  threeimg,
  twoimg,
  button,
  global,
  secInfo,
}) => {
  return (
    <div className=" bg-[#f4f4f4] text-black py-2 ">
      <div>
        <h1 className="text-3xl font-semibold px-10 py-2 text-center">
          {heading}
        </h1>
        <div className="px-10 py-2">
          {threeimg && (
            <div className="flex">
              <img
                src="/images/download.jpg"
                alt="img"
                className="max-w-[100px] h-auto object-cover"
              />
              <img
                src="/images/download (3).jpg"
                alt="img"
                className="max-w-[120px] h-[120px] object-cover mt-auto ml-2"
              />
              <img
                src="/images/download (4).jpg"
                alt="img"
                className="max-w-[40px] h-[60px] object-cover mt-auto"
              />
            </div>
          )}
          {twoimg && (
            <div className="flex ">
              <img
                src="/images/download (3).jpg"
                alt="img"
                className="max-w-[60px] h-[120px] object-cover mt-auto ml-2"
              />
              <img
                src="/images/download (4).jpg"
                alt="img"
                className="max-w-[40px] h-[60px] object-cover mt-auto"
              />
            </div>
          )}
        </div>

        <div className="px-10 py-2">
          <ul>
            <li className="text-2xl leading-relaxed list-disc">
              Special International Offer: Save up to 53%{" "}
            </li>
            <li className="text-2xl leading-relaxed list-disc">
              FREE worldwide delivery to your door
            </li>
            <li className="text-2xl leading-relaxed list-disc">
              FREE instant access to the digital edition
            </li>
            <li className="text-2xl leading-relaxed list-disc">
              Cancel anytime
            </li>
          </ul>
        </div>

        <div className="bg-[#EAEAEA] text-[#959695] text-center py-1">
          {secInfo}
        </div>

        <div className="px-10 py-2"></div>
      </div>
    </div>
  );
};

export default SubscribeCard;
