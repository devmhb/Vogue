import React from "react";
import Navbar from "../components/Navbar";
import { BsSearch } from "react-icons/bs";
import SubscribeCard from "../components/SubscribeCard";
import Footer from "../components/Footer";
const Subscribe = () => {
  return (
    <div>
      <div>
        <Navbar logourl="/images/logo.svg" search={<BsSearch />} />
        <div className="max-w-[90%] mx-auto py-9">
          <div className="flex flex-row flex-wrap justify-center py-9">
            <div className="h-[185px] w-[254px]  relative mx-auto text-center mr-10">
              <div className="text-center basis-[40%]">
                <img
                  src="/images/download (1).jpg"
                  alt="img"
                  className="max-w-[150px] h-auto object-cover absolute top-0 left-0 rotate-[-12deg]"
                />
                <img
                  src="/images/download (2).jpg"
                  alt="img"
                  className="max-w-[150px] h-auto object-cover absolute top-0 left-0 rotate-[12deg]"
                />
                <img
                  src="/images/download.jpg"
                  alt="img"
                  className="max-w-[150px] h-auto object-cover absolute top-0 left-0 rotate-0"
                />
              </div>
            </div>
            <div className=" basis-[60%]">
              <h1 className="text-4xl pb-3 font-bold">
                Great Subscription Offers
              </h1>
              <p className="text-xl">
                Get your copy of VOGUE delivered FREE to your door before it
                hits the shops + INSTANT digital editions on Apple and Android
                devices! Alternatively, choose from one of our fantastic
                digital-only offers.
              </p>
            </div>
          </div>

          <div className=" flex justify-evenly py-9">
            <div>
              <SubscribeCard
                heading="Print + Digital"
                threeimg
                button
                secInfo="NEVER MISS AN ISSUE"
              />
            </div>
            <div>
              <SubscribeCard
                heading="Digital-Only"
                twoimg
                global
                secInfo="Subscribe from only £2.29 per month"
              />
            </div>
          </div>
        </div>

        <div className="bg-black">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
