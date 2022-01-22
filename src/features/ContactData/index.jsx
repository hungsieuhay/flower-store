import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import HomePage from "./pages/HomePage";

function ContactFeatures(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.url} component={HomePage} exact />
      </Switch>
    </div>
  );
}

export default ContactFeatures;
