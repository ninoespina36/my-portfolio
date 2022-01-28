import React from "react";

import IntroSection from "./home/IntroSection";
import SloganSection from "./home/SloganSection";
import ResponsiveSection from './home/ResponsiveSection';
import LibrariesSection from "./home/LibrariesSection";

export default function HomeSection(){
  return (
      <div className="overflow-hidden">
        <IntroSection />
        <ResponsiveSection />
        <LibrariesSection />
        <SloganSection />
      </div>
  )
}
