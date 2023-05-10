import React from "react";
import HumburgerNav from "../components/HumburgerNav";
import Navbar from "../components/Navbar";
import HeroSec from "../components/HeroSec";
import SticktyLayout from "../components/SticktyLayout";
import RowLayout from "../components/RowLayout";
import SingleFeature from "../components/SingleFeature";
import Footer from "../components/Footer";

const Homepage = () => {
  const storiesData = {
    title: "TOP STORIES",
    items: [
      {
        id: 1,
        url: "/images/img.avif",
        subheading: "CORONATION",
        title: "The Princess Of Wales’s Alexander McQueen Coronation Gown",
        author: "BY EMILY CHAN",
        date: "6 May 2023",
      },
      {
        id: 2,
        url: "/images/img2.avif",
        subheading: "WELLBEING",
        title: "The Princess Of Wales’s Alexander McQueen Coronation Gown",
        author: "BY EMILY CHAN",
        date: "6 May 2023",
      },
      {
        id: 3,
        url: "/images/img3.avif",
        subheading: "NEWS",
        title: "The Princess Of Wales’s Alexander McQueen Coronation Gown",
        author: "BY EMILY CHAN",
        date: "6 May 2023",
      },
      {
        id: 4,
        url: "/images/img4.avif",
        subheading: "FASHION",
        title: "The Princess Of Wales’s Alexander McQueen Coronation Gown",
        author: "BY EMILY CHAN",
        date: "6 May 2023",
      },
      {
        id: 5,
        url: "/images/img5.avif",
        subheading: "CELEBRITY STYLES",
        title: "The Princess Of Wales’s Alexander McQueen Coronation Gown",
        author: "BY EMILY CHAN",
        date: "6 May 2023",
      },
      {
        id: 6,
        url: "/images/img6.avif",
        subheading: "CORONATION",
        title: "The Princess Of Wales’s Alexander McQueen Coronation Gown",
        author: "BY EMILY CHAN",
        date: "6 May 2023",
      },
    ],
    item2: {
      url: "/images/img1.avif",
      subheading: "CORONATION",
      author: "BY EMILY CHAN",
      title:
        "Edward Enninful & Vanessa Kingori Hosted A Post-Coronation High Tea In Celebration Of The Historic Service’s Brightest Lights",
      date: "6 May 2023",
    },
  };
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
        url: "/images/img8.avif",
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
    item2: {
      url: "/images/img3.avif",
      subheading: "FASHION",
      author: "AFRIDI",
      title:
        "Vogue Verdict: I Tried On Everything From Mugler x H&M And Here’s What I’d Recommend",
      date: "6 May 2023",
    },
  };
  // row
  const coronationData = {
    title: "CORONATION",
    items: [
      {
        id: 1,
        url: "/images/img2.avif",
        category: "FASHION",
        title:
          "Official Portraits Reveal Kate’s Hidden Tribute To The Late Queen On Coronation Day",
        date: "6 May 2023",
      },
      {
        id: 2,
        url: "/images/img6.avif",
        category: "ARTS",
        title:
          "Official Portraits Reveal Kate’s Hidden Tribute To The Late Queen On Coronation Day",
        date: "6 May 2023",
      },
      {
        id: 3,
        url: "/images/img7.avif",
        category: "NEWS",
        title:
          "Official Portraits Reveal Kate’s Hidden Tribute To The Late Queen On Coronation Day",
        date: "6 May 2023",
      },
      {
        id: 4,
        url: "/images/img5.avif",
        category: "FASHION",
        title:
          "Official Portraits Reveal Kate’s Hidden Tribute To The Late Queen On Coronation Day",
        date: "6 May 2023",
      },
    ],
  };
  const fashionData = {
    title: "FASHION",
    items: [
      {
        id: 1,
        url: "/images/img5.avif",
        category: "FASHION",
        title: "31 Of The Princess Of Wales’s Best Royal Rewears To Date",
        date: "6 May 2023",
      },
      {
        id: 2,
        url: "/images/img3.avif",
        category: "ROYALS",
        title: "Get Down To Business With These 44 Work Bags And Totes",
        date: "6 May 2023",
      },
      {
        id: 3,
        url: "/images/img2.avif",
        category: "CELEBRITY STYLE",
        title: "12 Vogue Editors On Their Ultimate White T-Shirts",
        date: "6 May 2023",
      },
      {
        id: 4,
        url: "/images/img4.avif",
        category: "VOGUE SHOPS",
        title: "Rihanna, Kendall And Co Love This Date Night Look",
        date: "6 May 2023",
      },
    ],
  };
  const newsData = {
    title: "NEWS",
    items: [
      {
        id: 1,
        url: "/images/img7.avif",
        category: "NEWS",
        title:
          "Victoria’s Secret Announces Its “World Tour”. It’s Not Just Another Fashion Show",
        date: "6 May 2023",
      },
      {
        id: 2,
        url: "/images/img4.avif",
        category: "NEWS",
        title: "Rich Mom Energy, But Make It Royal",
        date: "6 May 2023",
      },
      {
        id: 3,
        url: "/images/img5.avif",
        category: "CELEBRITY STYLE",
        title:
          "Halle Bailey Perfects Under-The-Sea Style At The Premiere Of The Little Mermaid",
        date: "6 May 2023",
      },
      {
        id: 4,
        url: "/images/img6.avif",
        category: "VOGUE SHOPS",
        title: "Rihanna, Kendall And Co Love This Date Night Look",
        date: "6 May 2023",
      },
    ],
  };
  const beautyData = {
    title: "BEAUTY",
    items: [
      {
        id: 1,
        url: "/images/img7.avif",
        category: "NEWS",
        title:
          "Victoria’s Secret Announces Its “World Tour”. It’s Not Just Another Fashion Show",
        date: "6 May 2023",
      },
      {
        id: 2,
        url: "/images/img4.avif",
        category: "NEWS",
        title: "Rich Mom Energy, But Make It Royal",
        date: "6 May 2023",
      },
      {
        id: 3,
        url: "/images/img5.avif",
        category: "CELEBRITY STYLE",
        title:
          "Halle Bailey Perfects Under-The-Sea Style At The Premiere Of The Little Mermaid",
        date: "6 May 2023",
      },
      {
        id: 4,
        url: "/images/img6.avif",
        category: "VOGUE SHOPS",
        title: "Rihanna, Kendall And Co Love This Date Night Look",
        date: "6 May 2023",
      },
    ],
  };
  const artslifestylesData = {
    title: "ARTS & LIFESTYLES",
    items: [
      {
        id: 1,
        url: "/images/img7.avif",
        category: "NEWS",
        title:
          "Victoria’s Secret Announces Its “World Tour”. It’s Not Just Another Fashion Show",
        date: "6 May 2023",
      },
      {
        id: 2,
        url: "/images/img4.avif",
        category: "NEWS",
        title: "Rich Mom Energy, But Make It Royal",
        date: "6 May 2023",
      },
      {
        id: 3,
        url: "/images/img5.avif",
        category: "CELEBRITY STYLE",
        title:
          "Halle Bailey Perfects Under-The-Sea Style At The Premiere Of The Little Mermaid",
        date: "6 May 2023",
      },
      {
        id: 4,
        url: "/images/img6.avif",
        category: "VOGUE SHOPS",
        title: "Rihanna, Kendall And Co Love This Date Night Look",
        date: "6 May 2023",
      },
    ],
  };
  const weddingData = {
    title: "WEDDING",
    items: [
      {
        id: 1,
        url: "/images/img7.avif",
        category: "NEWS",
        title:
          "Victoria’s Secret Announces Its “World Tour”. It’s Not Just Another Fashion Show",
        date: "6 May 2023",
      },
      {
        id: 2,
        url: "/images/img4.avif",
        category: "NEWS",
        title: "Rich Mom Energy, But Make It Royal",
        date: "6 May 2023",
      },
      {
        id: 3,
        url: "/images/img5.avif",
        category: "CELEBRITY STYLE",
        title:
          "Halle Bailey Perfects Under-The-Sea Style At The Premiere Of The Little Mermaid",
        date: "6 May 2023",
      },
      {
        id: 4,
        url: "/images/img6.avif",
        category: "VOGUE SHOPS",
        title: "Rihanna, Kendall And Co Love This Date Night Look",
        date: "6 May 2023",
      },
    ],
  };
  const jewelleryData = {
    title: "JEWELLERY",
    items: [
      {
        id: 1,
        url: "/images/img7.avif",
        category: "NEWS",
        title:
          "Victoria’s Secret Announces Its “World Tour”. It’s Not Just Another Fashion Show",
        date: "6 May 2023",
      },
      {
        id: 2,
        url: "/images/img4.avif",
        category: "NEWS",
        title: "Rich Mom Energy, But Make It Royal",
        date: "6 May 2023",
      },
      {
        id: 3,
        url: "/images/img5.avif",
        category: "CELEBRITY STYLE",
        title:
          "Halle Bailey Perfects Under-The-Sea Style At The Premiere Of The Little Mermaid",
        date: "6 May 2023",
      },
      {
        id: 4,
        url: "/images/img6.avif",
        category: "VOGUE SHOPS",
        title: "Rihanna, Kendall And Co Love This Date Night Look",
        date: "6 May 2023",
      },
    ],
  };

  // Single content
  const tvContent = {
    secheading: "TV",
    url: "/images/single1.jpg",
    category: "TV",
    title:
      "From Gerri’s Evolution To What’s Really Going On With Shiv: Succession’s Costume Designer Answers All Our Burning Questions",
    author: "BY RADHIKA SETU",
    date: "7 May 2023",
  };
  const fashionContent = {
    secheading: "FASHION",
    url: "/images/single2.jpg",
    category: "FASHION",
    title: "How To Spot A Fake Handbag, According To The Experts",
    author: "By Emiliya",
    date: "3May 2023",
  };
  const royalsContent = {
    secheading: "ROYALS",
    url: "/images/single3.jpg",
    category: "ROYALS",
    title:
      "Sarah Harris On The Subtle Transformation Underway In Kate’s Queen-In-Waiting Wardrobe",
    author: "By Emiliya",
    date: "3May 2023",
  };
  const skincareContent = {
    secheading: "SKINCARE",
    url: "/images/single4.jpg",
    category: "SKINCARE",
    title:
      "How To Incorporate Glycolic Acid Into Your Skincare Regime, According To The Experts",
    author: "By Emiliya",
    date: "3May 2023",
  };
  const viewpointContetn = {
    secheading: "VIEWPOINT",
    url: "/images/single5.jpg",
    category: "VIEWPOINT",
    title: "Is Having A Signature Style Overrated?",
    author: "By Emiliya",
    date: "3May 2023",
  };

  return (
    <div>
      <div className="border-b">
        <HumburgerNav />
      </div>
      <Navbar />
      <HeroSec />
      <div className="max-w-[90%] mx-auto">
        <SticktyLayout data={storiesData} />
        <RowLayout data={coronationData} />
        <SingleFeature item={tvContent} />
        <RowLayout data={fashionData} />
        <SingleFeature item={fashionContent} />
        <RowLayout data={newsData} />
        <SticktyLayout data={shoppingData} />
        <RowLayout data={beautyData} />
        <SingleFeature item={royalsContent} />
        <RowLayout data={artslifestylesData} />
        <SingleFeature item={skincareContent} />
        <RowLayout data={weddingData} />
        <SingleFeature item={viewpointContetn} />
        <RowLayout data={jewelleryData} />
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
