import React from "react";
import mapImage from "./images/map.png";
import profile from "./images/profile.png";
import wishlist from "./images/wishlist.png";
import bag from "./images/shopping-bag.png";
import "./Header.scss";
function Header() {
  return (
      <div className="brand-header">
        <div className="headerLiftQuarter">
          <img
            src={mapImage}
            alt=""
            className="mapImage"
            height="20"
            width="20"
          />
          <h4> United States (US) | En</h4>
          <img
            src="https://hudabeauty.com/on/demandware.static/Sites-huda-us-Site/-/en_US/v1681630271837/images/svg-icons/icon-system-caret-down.svg"
            alt=""
            className="Arrow"
          />
        </div>
        <a href="" className="brand">
          <img
            src="https://hudabeauty.com/on/demandware.static/Sites-huda-us-Site/-/en_US/v1681630271837/images/svg-icons/logo-hudabeauty-black-pink.svg"
            alt=""
            className="brandImg"
          />
        </a>
        <div className="headerRightQuarter">
          <a href="" className="text">
            <h5>JOIN LOYALTY</h5>
          </a>
          <img
            src={profile}
            alt=""
            className="headerIcon"
            height="25"
            width="25"
          />
          <img
            src={wishlist}
            alt=""
            className="headerIcon"
            height="25"
            width="25"
          />
          <img src={bag} alt="" className="headerIconBag" height="25" width="25" />
        </div>
      </div>
  );
}

export default Header;
