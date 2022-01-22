import LocationOnIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PropTypes from "prop-types";
import React, { useState } from "react";
import "./Header.scss";

Header.propTypes = {
  headerLinkItem: PropTypes.array,
};

function Header({ headerLinkItem } = []) {
  const [show, setShow] = useState(false);

  return (
    <div className="grid-config">
      <div className="header">
        <div className="header__nav">
          <div className="header__nav-left">
            <LocationOnIcon style={{ fontSize: "14px" }} />
            <span>London</span>
          </div>
          <h3 style={{ fontSize: "24px" }}>CASSIOPEIA</h3>
          <div className="header__nav-action">
            {show && <input type="text" placeholder="Search" />}
            <SearchIcon
              style={{ fontSize: "32px", paddingRight: "20px" }}
              onClick={() => setShow(!show)}
            />
            <ShoppingCartIcon style={{ fontSize: "32px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
