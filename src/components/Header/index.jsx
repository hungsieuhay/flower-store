import LocationOnIcon from "@material-ui/icons/LocationOn";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import productsApi from "../../api/productApi";
import SearchInput from "../SearchInput";
import SearchList from "../SearchList";
import "./Header.scss";
import * as action from "../../redux/users/userAction";

Header.propTypes = {
  headerLinkItem: PropTypes.array,
};

function Header({ headerLinkItem = [] }) {
  const [show, setShow] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [isActive, setActive] = useState(false);
  const location = useLocation();
  const path = location.pathname.substring(1);

  const [filter, setFilter] = useState({});
  const [items, setItems] = useState([]);

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        if (filter.title_like !== "" && filter.title_like.length >= 4) {
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

  const handleClick = (e) => {
    if (path === e.target.innerHTML) {
      setActive(!isActive);
      console.log(e.target.innerHTML);
    }
  };

  const handleSearchSubmit = (formValues) => {
    setFilter({
      title_like: formValues.searchTerm,
    });
  };

  const handleLogout = () => {
    if (currentUser) {
      dispatch(action.logoutInitial());
      alert("Đăng xuất thành công");
    }
  };

  return (
    <div className="full-width">
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
            <img
              src="https://cassiopeia.store/svgs/search.svg"
              alt=""
              onClick={() => setShow(!show)}
            />
            <img src="https://cassiopeia.store/svgs/cart.svg" alt="" />
            <div style={{ width: "50%" }}>
              {currentUser ? (
                <img
                  src={currentUser.photoURL}
                  alt=""
                  onClick={() => setShowInfo(!showInfo)}
                />
              ) : (
                <Link to="/login">LOGIN</Link>
              )}
              {showInfo && (
                <ul className="user-info" onClick={() => setShowInfo(false)}>
                  <li>Hello, {currentUser.displayName}</li>
                  <li onClick={handleLogout}>Log out</li>
                </ul>
              )}
            </div>
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
