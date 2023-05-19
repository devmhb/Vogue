import React from "react";
import PriCard from "../components/PriCard";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Footer from "../components/Footer";
import HumburgerNav from "../components/HumburgerNav";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { name } = useParams();
  console.log(name);
  const shoppingData = {
    title: "SHOPPING",
    items: [
      {
        id: 1,
        url: "/images/img2.avif",
        subheading: "FASHION",
        title:
          "For Brunch Or Errands, 10 Chic Outfit Ideas To Wear This Weekend",
        author: "BY EMILY CHAN",
        date: "6 May 2023",
      },
      {
        id: 2,
        url: "/images/img3.avif",
        subheading: "VOGUE SHOPS",
        title: "8 Under-The-Radar Fashion Brands That Do The Best Basics",
        author: "BY EMILY CHAN",
        date: "6 May 2023",
      },
      {
        id: 3,
        url: "/images/img7.avif",
        subheading: "FASHION TRENDS",
        title:
          "5 Ways To Wear Double Denim This Year, As Loved By Street-Stylers And Vogue Editors",
        author: "BY EMILY CHAN",
        date: "6 May 2023",
      },
      {
        id: 4,
        url: "/images/img6.avif",
        subheading: "CORONATION",
        title:
          "The Waistcoat Renaissance: The 2023 Way To Wear Kate Moss’s Favourite Staple",
        author: "BY EMILY CHAN",
        date: "6 May 2023",
      },
      {
        id: 5,
        url: "/images/img5.avif",
        subheading: "FASHION",
        title:
          "From Springtime Flats To Raey’s Colour-Pop Maxi – Here Are The New Arrivals We’re Loving Right Now",
        author: "BY EMILY CHAN",
        date: "6 May 2023",
      },
      {
        id: 6,
        url: "/images/img4.avif",
        subheading: "NEWS",
        title: "The Princess Of Wales’s Alexander McQueen Coronation Gown",
        author: "BY EMILY CHAN",
        date: "6 May 2023",
      },
    ],
  };
  return (
    <div>
      <div className="shadow bg-white">
        <HumburgerNav />
      </div>

      <Navbar />
      <div className="max-w-[90%] mx-auto">
        <div>
          <Title
            title={name}
            center="text-center"
            space="py-10"
            lg="text-6xl"
          />
          <div className="flex flex-row mt-8">
            <div className="basis-[70%] flex flex-row flex-wrap justify-between">
              {shoppingData.items.map((item) => (
                <div className="flex justify-between">
                  <div className="lg:max-w-[15rem] w-full" key={item.id}>
                    <PriCard item={item} />
                  </div>
                </div>
              ))}
            </div>
            <div>hi</div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default CategoryPage;
