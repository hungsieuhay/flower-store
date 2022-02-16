import LocationOnIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.scss";

Header.propTypes = {
  headerLinkItem: PropTypes.array,
};

function Header({ headerLinkItem = [] }) {
  const [show, setShow] = useState(false);
  const [isActive, setActive] = useState(false);
  const location = useLocation();
  const path = location.pathname.substring(1);
  console.log("path: ", path);

  const handleClick = (e) => {
    console.log(e.target.innerHTML);
    if (path === e.target.innerHTML) {
      setActive(!isActive);
    }
  };
  return (
    <div className="grid-config">
      <div className="header">
        <div className="header__nav">
          <div className="header__nav-left">
            <LocationOnIcon style={{ fontSize: "14px" }} />
            <span>London</span>
          </div>
          <Link to="/home">CASSIOPEIA</Link>
          <div className="header__nav-action">
            {show && <input type="text" placeholder="Search" />}
            <SearchIcon
              style={{ fontSize: "32px", paddingRight: "20px" }}
              onClick={() => setShow(!show)}
            />
            <ShoppingCartIcon style={{ fontSize: "32px" }} />
          </div>
        </div>

        <ul className="nav__link ">
          {headerLinkItem.map((item) => (
            <li
              key={item.title}
              onClick={handleClick}
              className={isActive ? "active" : ""}
            >
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
