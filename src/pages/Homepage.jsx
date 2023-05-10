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
        url: "",
        subheading: "CORONATION",
        title:
          "The Princess Of Wales’s Alexander McQueen Coronation Gown Features Subtle Nod To Her Wedding Dress",
        author: "BY EMILY CHAN",
        date: "6 May 2023",
      },
      {
        id: 2,
        url: "",
        subheading: "WELLBEING",
        title:
          "The Princess Of Wales’s Alexander McQueen Coronation Gown Features Subtle Nod To Her Wedding Dress",
        author: "BY EMILY CHAN",
        date: "6 May 2023",
      },
      {
        id: 3,
        url: "",
        subheading: "NEWS",
        title:
          "The Princess Of Wales’s Alexander McQueen Coronation Gown Features Subtle Nod To Her Wedding Dress",
        author: "BY EMILY CHAN",
        date: "6 May 2023",
      },
      {
        id: 4,
        url: "",
        subheading: "FASHION",
        title:
          "The Princess Of Wales’s Alexander McQueen Coronation Gown Features Subtle Nod To Her Wedding Dress",
        author: "BY EMILY CHAN",
        date: "6 May 2023",
      },
      {
        id: 5,
        url: "",
        subheading: "CELEBRITY STYLES",
        title:
          "The Princess Of Wales’s Alexander McQueen Coronation Gown Features Subtle Nod To Her Wedding Dress",
        author: "BY EMILY CHAN",
        date: "6 May 2023",
      },
      {
        id: 6,
        url: "",
        subheading: "CORONATION",
        title:
          "The Princess Of Wales’s Alexander McQueen Coronation Gown Features Subtle Nod To Her Wedding Dress",
        author: "BY EMILY CHAN",
        date: "6 May 2023",
      },
    ],
    item2: {
      subheading: "CORONATION",
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
        url: "",
        subheading: "FASHION",
        title:
          "For Brunch Or Errands, 10 Chic Outfit Ideas To Wear This Weekend",
        author: "BY EMILY CHAN",
        date: "6 May 2023",
      },
      {
        id: 2,
        url: "",
        subheading: "VOGUE SHOPS",
        title: "8 Under-The-Radar Fashion Brands That Do The Best Basics",
        author: "BY EMILY CHAN",
        date: "6 May 2023",
      },
      {
        id: 3,
        url: "",
        subheading: "FASHION TRENDS",
        title:
          "5 Ways To Wear Double Denim This Year, As Loved By Street-Stylers And Vogue Editors",
        author: "BY EMILY CHAN",
        date: "6 May 2023",
      },
      {
        id: 4,
        url: "",
        subheading: "CORONATION",
        title:
          "The Waistcoat Renaissance: The 2023 Way To Wear Kate Moss’s Favourite Staple",
        author: "BY EMILY CHAN",
        date: "6 May 2023",
      },
      {
        id: 5,
        url: "",
        subheading: "FASHION",
        title:
          "From Springtime Flats To Raey’s Colour-Pop Maxi – Here Are The New Arrivals We’re Loving Right Now",
        author: "BY EMILY CHAN",
        date: "6 May 2023",
      },
      {
        id: 6,
        url: "",
        subheading: "NEWS",
        title:
          "The Princess Of Wales’s Alexander McQueen Coronation Gown Features Subtle Nod To Her Wedding Dress",
        author: "BY EMILY CHAN",
        date: "6 May 2023",
      },
    ],
    item2: {
      url: "",
      subheading: "FASHION",
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
        url: "",
        category: "FASHION",
        title:
          "Official Portraits Reveal Kate’s Hidden Tribute To The Late Queen On Coronation Day",
        date: "6 May 2023",
      },
      {
        id: 2,
        url: "",
        category: "FASHION",
        title:
          "Official Portraits Reveal Kate’s Hidden Tribute To The Late Queen On Coronation Day",
        date: "6 May 2023",
      },
      {
        id: 3,
        url: "",
        category: "FASHION",
        title:
          "Official Portraits Reveal Kate’s Hidden Tribute To The Late Queen On Coronation Day",
        date: "6 May 2023",
      },
      {
        id: 4,
        url: "",
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
        url: "",
        category: "FASHION",
        title: "31 Of The Princess Of Wales’s Best Royal Rewears To Date",
        date: "6 May 2023",
      },
      {
        id: 2,
        url: "",
        category: "ROYALS",
        title: "Get Down To Business With These 44 Work Bags And Totes",
        date: "6 May 2023",
      },
      {
        id: 3,
        url: "",
        category: "CELEBRITY STYLE",
        title: "12 Vogue Editors On Their Ultimate White T-Shirts",
        date: "6 May 2023",
      },
      {
        id: 4,
        url: "",
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
        url: "",
        category: "NEWS",
        title:
          "Victoria’s Secret Announces Its “World Tour”. It’s Not Just Another Fashion Show",
        date: "6 May 2023",
      },
      {
        id: 2,
        url: "",
        category: "NEWS",
        title: "Rich Mom Energy, But Make It Royal",
        date: "6 May 2023",
      },
      {
        id: 3,
        url: "",
        category: "CELEBRITY STYLE",
        title:
          "Halle Bailey Perfects Under-The-Sea Style At The Premiere Of The Little Mermaid",
        date: "6 May 2023",
      },
      {
        id: 4,
        url: "",
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
        url: "",
        category: "CELEBRITY BEAUTY",
        title:
          "Milla Jovovich Proves The Feline Flick Is A Perennial Beauty Classic",
        date: "6 May 2023",
      },
      {
        id: 2,
        url: "",
        category: "NEWS",
        title:
          "As She Turns 58, Enjoy Linda Evangelista’s Greatest Beauty Moments",
        date: "6 May 2023",
      },
      {
        id: 3,
        url: "",
        category: "CELEBRITY STYLE",
        title:
          "Halle Bailey Perfects Under-The-Sea Style At The Premiere Of The Little Mermaid",
        date: "6 May 2023",
      },
      {
        id: 4,
        url: "",
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
        url: "",
        category: "FILM & TV",
        title: "11 Roles That Prove Cate Blanchett Is The Ultimate Chameleon",
        date: "6 May 2023",
      },
      {
        id: 2,
        url: "",
        category: "TV GUIDE",
        title:
          "Manolos, “MILF Lists” & The Return Of Aidan: What To Expect From And Just Like That Season 2",
        date: "6 May 2023",
      },
      {
        id: 3,
        url: "",
        category: "CELEBRITY STYLE",
        title: "And Just Like That… We’re Saying MILF Again?",
        date: "6 May 2023",
      },
      {
        id: 4,
        url: "",
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
        url: "",
        category: "WEDDING",
        title: "Inside Simone Biles And Jonathan Owens’ Wedding In Cabo",
        date: "6 May 2023",
      },
      {
        id: 2,
        url: "",
        category: "TV GUIDE",
        title:
          "Manolos, “MILF Lists” & The Return Of Aidan: What To Expect From And Just Like That Season 2",
        date: "6 May 2023",
      },
      {
        id: 3,
        url: "",
        category: "CELEBRITY STYLE",
        title: "And Just Like That… We’re Saying MILF Again?",
        date: "6 May 2023",
      },
      {
        id: 4,
        url: "",
        category: "WEDDING",
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
        url: "",
        category: "JEWELLERY",
        title:
          "Diadems Are Forever: Every Tiara At The Coronation Will Be Weighted With Meaning",
        date: "6 May 2023",
      },
      {
        id: 2,
        url: "",
        category: "TV GUIDE",
        title:
          "Manolos, “MILF Lists” & The Return Of Aidan: What To Expect From And Just Like That Season 2",
        date: "6 May 2023",
      },
      {
        id: 3,
        url: "",
        category: "CELEBRITY STYLE",
        title: "And Just Like That… We’re Saying MILF Again?",
        date: "6 May 2023",
      },
      {
        id: 4,
        url: "",
        category: "FASHION",
        title: "Where To Rent Your Own Tiara For A Regal Coronation Weekend",
        date: "6 May 2023",
      },
    ],
  };

  // Single content
  const tvContent = {
    secTitle: "TV",
    url: "",
    category: "TV",
    title:
      "From Gerri’s Evolution To What’s Really Going On With Shiv: Succession’s Costume Designer Answers All Our Burning Questions",
    author: "BY RADHIKA SETU",
    date: "7 May 2023",
  };
  const fashionContent = {
    secTitle: "FASHION",
    url: "",
    category: "FASHION",
    title: "How To Spot A Fake Handbag, According To The Experts",
    author: "By Emiliya",
    date: "3May 2023",
  };
  const royalsContent = {
    secTitle: "ROYALS",
    url: "",
    category: "ROYALS",
    title:
      "Sarah Harris On The Subtle Transformation Underway In Kate’s Queen-In-Waiting Wardrobe",
    author: "By Emiliya",
    date: "3May 2023",
  };
  const skincareContent = {
    secTitle: "SKINCARE",
    url: "",
    category: "SKINCARE",
    title:
      "How To Incorporate Glycolic Acid Into Your Skincare Regime, According To The Experts",
    author: "By Emiliya",
    date: "3May 2023",
  };
  const viewpointContetn = {
    secTitle: "VIEWPOINT",
    url: "",
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
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
