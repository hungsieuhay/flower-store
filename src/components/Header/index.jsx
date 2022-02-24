import LocationOnIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import productsApi from "../../api/productApi";
import SearchInput from "../SearchInput";
import SearchList from "../SearchList";
import "./Header.scss";

Header.propTypes = {
  headerLinkItem: PropTypes.array,
};

function Header({ headerLinkItem = [] }) {
  const [show, setShow] = useState(false);
  const [isActive, setActive] = useState(false);
  const location = useLocation();
  const path = location.pathname.substring(1);

  const [filter, setFilter] = useState({});
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        if (filter.title_like !== "") {
          const { data } = await productsApi.getAll();
          setItems(
            data.filter((item) =>
              item.name.toLowerCase().includes(filter.title_like.toLowerCase())
            )
          );
        } else {
          setItems([]);
        }
      } catch (error) {
        console.log("Fetch data failed:", error);
      }
    })();
  }, [filter]);

  console.log(items);

  const handleClick = (e) => {
    if (path === e.target.innerHTML) {
      setActive(!isActive);
      console.log(e.target.innerHTML);
    }
  };

  const handleSearchSubmit = (formValues) => {
    console.log("Form value:", formValues);
    setFilter({
      title_like: formValues.searchTerm,
    });
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
            {show && (
              <>
                <SearchInput
                  className="header__nav-action--search"
                  onSubmit={handleSearchSubmit}
                />
                <SearchList data={items} />
              </>
            )}
            <SearchIcon
              style={{ fontSize: "32px", paddingRight: "20px" }}
              onClick={() => setShow(!show)}
            />
            <Link to="/sign-in">Sign in</Link>
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
