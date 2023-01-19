import React from "react";
import { GlobalStyle } from "../../styles/GlobalStyles";
import Header from "./Header";
import "../../index.css";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
