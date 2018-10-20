import React from "react";
import { translate } from "react-i18next";
import "./Home.css";

const Home = () => {
  const image = require("./home.jpg");
  return (
    <div id="home" style={{ backgroundImage: `url(${image})` }}>
    </div>
  );
}
export default translate()(Home);