import React from "react";
import Navbar from "../components/Navbar";
import { BsSearch } from "react-icons/bs";
import SubscribeCard from "../components/SubscribeCard";
import Footer from "../components/Footer";
const Subscribe = () => {
  return (
    <div>
      <div>
        <Navbar logourl="/images/logo.svg" search={<BsSearch />} hidden />
        <div className="max-w-[90%] py-9 mx-auto">
          <div>
            <div className="lg:max-w-[60%] mx-auto flex flex-col lg:flex-row items-center gap-10">
              <img
                src="/images/download (1).jpg"
                alt="img"
                className="max-w-[40vh]"
              />
              <div className=" mt-6">
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
          </div>

          <div className="flex justify-evenly flex-wrap gap-6 items-center py-9">
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
