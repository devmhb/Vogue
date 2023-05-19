import React from "react";
import HumburgerNav from "../components/HumburgerNav";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { title } = useParams();
  return (
    <div>
      <div className="shadow min-h-[4rem] sticky top-0 left-0 bg-white">
        <HumburgerNav />
      </div>
      <Navbar />
      <div className="max-w-[90%] mx-auto py-8">
        <div className="flex flex-col lg:flex-row justify-between items-center border-b pb-20">
          <div className="basis-[40%]">
            <img
              src="/images/img3.avif"
              alt="img"
              className=" object-contain"
            />
          </div>

          <div className="basis-[60%] text-center">
            <p className="text-[17px] m-6">FASHION</p>
            <h1 className=" font-semibold text-6xl">{title}</h1>
            <p className="text-[17px] m-2">BY TISH WEINSTOCK</p>
            <p className="text-[17px] m-2">16 May 2023</p>
          </div>
        </div>

        <div>
          <p>Victor Boyko/Getty Images</p>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="basis-[60%]">
              <p>
                {" "}
                At 77, Dame Helen Mirren looks even more radiant than when she
                first appeared on the scene back in the ’80s. Most of which she
                puts down to confidence – the kind you can only get with age.
                “Your life as you get older gets fuller,” she says. “You get
                wiser, too, inevitably, because you know more stuff.” READ MORE
                The Most Flattering Haircuts For Women Over 60 BY TISH WEINSTOCK
                article image It is this confidence that will see her through
                her upcoming red carpet appearances at the 2023 Cannes Film
                Festival, where she’s attending with L’Oréal Paris. She attended
                the grand opening and premiere of Jeanne du Barry on the first
                night of the festival with striking blue hair that perfectly
                matched her blue power dress, and carried a fan with the
                #worthit in block capitals.
              </p>
              <img src="/images/download (3).jpg" alt="" />
              <p>
                At 77, Dame Helen Mirren looks even more radiant than when she
                first appeared on the scene back in the ’80s. Most of which she
                puts down to confidence – the kind you can only get with age.
                “Your life as you get older gets fuller,” she says. “You get
                wiser, too, inevitably, because you know more stuff.” READ MORE
                The Most Flat
              </p>
              <h1>
                . Most of which she puts down to confidence – the kind you can
                only get with age. “Your life as you{" "}
              </h1>
            </div>

            <div className="basis-[40%]">
              <div className="min-h-[70vh] sticky top-[15%] left-0">
                <div className="text-center">
                  <h1 className="text-3xl font-semibold py-4 border-t border-b mb-4">
                    Most Popular
                  </h1>
                </div>
                <video
                  autoPlay
                  muted
                  src="/The 10 best dressed from the Met Gala 2023 _ Bazaar UK.mp4"
                />
                <h1 className="text-3xl font-semibold py-4 border-t border-b mb-4">
                  Most Popular
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default PostDetails;
