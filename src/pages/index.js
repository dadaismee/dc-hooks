import React from "react";
import "../index.css";

import HeroSection from "../sections/HeroSection";
import { GlobalStyle } from "../styles/GlobalStyles";

const Index = () => {
  return (
    <div>
      <GlobalStyle />
      <HeroSection />
    </div>
  );
};

export default Index;
