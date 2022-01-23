import React from "react";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import "./Banner.scss";
import { Link } from "react-router-dom";

function Banner(props) {
  return (
    <div className="banner">
      <h4>40% OFF</h4>
      <h5>Best deals this week. Fresh flowers, plants and gifts</h5>
      <div className="banner__btn">
        <Link to="/flowers">
          <span>Shop now</span>
        </Link>
        <TrendingFlatIcon style={{ fontSize: "20px" }} />
      </div>
    </div>
  );
}

export default Banner;
