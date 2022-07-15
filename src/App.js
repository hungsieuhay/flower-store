import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import linkData from "./components/Header/LinkData/LinkData";
import Navigation from "./components/Navigation";
import AboutUs from "./features/Products/pages/AboutUs";
import Checkout from "./features/Products/pages/Checkout";
import Discount from "./features/Products/pages/Discount";
import ForgotPassword from "./features/Products/pages/ForgotPassword";
import HomePage from "./features/Products/pages/HomePage";
import LoginPage from "./features/Products/pages/LoginPage";
import RegisterPage from "./features/Products/pages/RegisterPage";

function App() {
  return (
    <div className="App">
      <Header headerLinkItem={linkData} />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/discounts" component={Discount} />
        <Navigation linkItem={linkData} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
