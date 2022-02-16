import React from "react";
import SelectByCategory from "./SelectByCategory";
import SelectByPrice from "./SelectByPrice";
import "./Dropdown.scss";
import PropTypes from "prop-types";
import SelectByOccasion from "./SelectByOccasion";
import SelectByType from "./SelectByType";

Dropdown.propTypes = {
  dataOccasion: PropTypes.array,
  dataType: PropTypes.array,

  item: PropTypes.array,
};

function Dropdown({ dataOccasion = [], dataType = [], item = [] }) {
  return (
    <div className="drop-down">
      <div>
        <SelectByCategory />
        <SelectByPrice />
        <SelectByOccasion options={dataOccasion} />
        <SelectByType options={dataType} />
      </div>
      <span>{item.length} items</span>
    </div>
  );
}

export default Dropdown;
