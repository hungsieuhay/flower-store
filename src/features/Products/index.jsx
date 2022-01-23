import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import ProductPage from "./pages/ProductPage";

function ProductFeatures(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.url} component={ProductPage} exact />
        <Route path={`${match.url}/:productId`} component={DetailPage} />
      </Switch>
    </div>
  );
}

export default ProductFeatures;
