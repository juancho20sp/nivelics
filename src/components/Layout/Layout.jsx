import React from "react";
import "./Layout.css";

import { Header, Footer } from "../";

const Layout = (props) => {
  return (
    <div className="Layout__container">
      <Header></Header>

      {props.children}

      <Footer></Footer>
    </div>
  );
};

export default Layout;
