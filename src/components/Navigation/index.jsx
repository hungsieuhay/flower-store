import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import ProductFeatures from "../../features/Products";

Navigation.propTypes = {
  linkItem: PropTypes.array,
};

function Navigation({ linkItem = [] }) {
  return (
    <div>
      {linkItem.map((item) => (
        <Route key={item.title} path={item.link} component={ProductFeatures} />
      ))}
    </div>
  );
}

export default Navigation;
