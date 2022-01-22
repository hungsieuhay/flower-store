import React from "react";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import "./Banner.scss";

function Banner(props) {
  return (
    <div className="banner">
      <h4>40% OFF</h4>
      <h5>Best deals this week. Fresh flowers, plants and gifts</h5>
      <div className="banner__btn">
        <span>Shop now</span>
        <TrendingFlatIcon style={{ fontSize: "20px" }} />
      </div>
    </div>
  );
}

export default Banner;
