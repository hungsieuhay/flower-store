import React from "react";
import PropTypes from "prop-types";
import SearchItem from "../SearchItem";
import "./SearchList.scss";

SearchList.propTypes = {
  data: PropTypes.array,
};

function SearchList({ data = [] }) {
  return (
    <>
      {data.length > 0 && (
        <div className="search-list">
          {data.map((item, index) => (
            <SearchItem key={index} item={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default SearchList;
