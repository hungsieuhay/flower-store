import React from "react";
import PropTypes from "prop-types";
import "./SearchItem.scss";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

SearchItem.propTypes = {
  item: PropTypes.object,
};

function SearchItem({ item = {} }) {
  const location = useLocation();
  const history = useHistory();
  const handleClick = () => {
    location.pathname = "/";
    history.push(`${item.category}/${item.id}`);
  };
  return (
    <div className="search-item" onClick={handleClick}>
      <img src={item.imageUrl} alt={item.name} />
      <div>
        <h5>{item.name}</h5>
        <p>{item.price}</p>
      </div>
    </div>
  );
}

export default SearchItem;
