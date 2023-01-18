import React from "react";
import Layout from "../components/layout/Layout";

import HeroSection from "../sections/HeroSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
    </Layout>
  );
};

export default Index;
export const Head = () => <title>Design+Code</title>;
