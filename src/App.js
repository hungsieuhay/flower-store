import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import linkData from "./components/Header/LinkData/LinkData";
import Navigation from "./components/Navigation";
import CartFeature from "./features/Products/components/Cart/CartFeature";
import HomePage from "./features/Products/pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header headerLinkItem={linkData} />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/cart" component={CartFeature} />
        <Navigation linkItem={linkData} />
      </Switch>
    </div>
  );
}

export default App;
