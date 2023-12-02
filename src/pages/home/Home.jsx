import React from "react";
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import WhatsGoingSection from "./WhatsGoingSection";

export default function Home({ navOpen }) {
  return (
    <div>
      <HeroSection navOpen={navOpen} />
      <InfoSection />
      <WhatsGoingSection />
    </div>
  );
}
