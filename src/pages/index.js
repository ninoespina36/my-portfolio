import React from "react";

import Layout from "../components/Layout";
import HomeSection from "../components/index/HomeSection";
import AboutSection from '../components/index/AboutSection';
import PortfolioSection from '../components/index/PortfolioSection';
import ContactSection from "../components/index/ContactSection";

export default function IndexPage(){
  return (
    <Layout>
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </Layout>
  )
}
