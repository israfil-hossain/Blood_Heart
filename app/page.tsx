import CausesCategory from "@/components/homepage/causes-category";
import CharityPage from "@/components/homepage/charity-page";
import QuickDonation from "@/components/homepage/donation";
import FeaturedCampaigns from "@/components/homepage/feature-campaigns";
import { Footer } from "@/components/homepage/footer";
import HeroSlider from "@/components/homepage/hero-section/hero-slider";
import { Navbar } from "@/components/navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="background">
        <Navbar />
        <HeroSlider />
        <QuickDonation />
        <CausesCategory />
        <FeaturedCampaigns />
        <CharityPage/>
        <Footer />
      </div>
    </div>
  );
};

export default page;
