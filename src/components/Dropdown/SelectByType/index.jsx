import PropTypes from "prop-types";
import queryString from "query-string";
import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import "./SelectByType.scss";

SelectByType.propTypes = {
  options: PropTypes.array,
};

function SelectByType({ options = [] }) {
  const history = useHistory();
  const match = useRouteMatch();
  const handleCLick = (e) => {
    const queryParams = { types: `${e.target.innerHTML}` };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  return (
    <div>
      {options.length > 0 && (
        <div className="select">
          <div>
            <span>Type</span>
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
      )}
    </div>
  );
}

export default SelectByType;
