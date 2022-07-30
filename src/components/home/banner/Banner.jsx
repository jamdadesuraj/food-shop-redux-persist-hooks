import React from "react";
import Logo from "../../common/logo/Logo";
import "./banner.css";
import banner from "./banner.png";
const Banner = ({ handleScrollMenu }) => {
  return (
    <>
      <header>
        <div className="header-content">
          <Logo />
          <div className="content-main">
            <h1>A genuine fine-dining experience awaits</h1>
            <p>
              Come for a drink, stay for a meal. Great food and great company.
              Nothing brings people together like good food.
            </p>
            <button onClick={handleScrollMenu}>
              view Menu <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <img src={banner} alt="banner-img" className="header-img" />
      </header>
    </>
  );
};

export default Banner;
