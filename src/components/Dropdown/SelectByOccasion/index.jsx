import PropTypes from "prop-types";
import queryString from "query-string";
import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import "./SelectByOccasion.scss";

SelectByOccasion.propTypes = {
  options: PropTypes.array,
};

function SelectByOccasion({ options = [] }) {
  const history = useHistory();
  const match = useRouteMatch();
  const handleCLick = (e) => {
    const queryParams = { occasion: `${e.target.innerHTML}` };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  return (
    <div className="select">
      <div>
        <span>Occasion</span>
        <img src="https://cassiopeia.store/svgs/dropdown-i.svg" alt="" />
      </div>
      <ul className="list-filter">
        {options.map((options, index) => (
          <li key={index} onClick={handleCLick}>
            {options}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectByOccasion;
