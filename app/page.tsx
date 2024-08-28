import CausesCategory from "@/components/homepage/causes-category";
import CharityPage from "@/components/homepage/charity-page";
import QuickDonation from "@/components/homepage/donation";
import FeaturedCampaigns from "@/components/homepage/feature-campaigns";
import HeroSlider from "@/components/homepage/hero-section/hero-slider";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="background">
        <HeroSlider />
        <QuickDonation />
        <CausesCategory />
        <FeaturedCampaigns />
        <CharityPage/>
      </div>
    </div>
  );
};

export default page;
