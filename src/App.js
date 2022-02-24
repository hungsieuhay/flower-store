import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import linkData from "./components/Header/LinkData/LinkData";
import Navigation from "./components/Navigation";
import HomePage from "./features/Products/pages/HomePage";
import Checkout from "./features/Products/pages/Checkout";
import AboutUs from "./features/Products/pages/AboutUs";
import Discount from "./features/Products/pages/Discount";
import Footer from "./components/Footer/Footer";
import SignInPage from "./features/Products/pages/SignInPage";

function App() {
  return (
    <div className="App">
      <Header headerLinkItem={linkData} />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/sign-in" component={SignInPage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/discounts" component={Discount} />
        <Navigation linkItem={linkData} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
