import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import ProductFeatures from "./features/Products";
import ContactFeatures from "./features/ContactData";
// import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/products" component={ProductFeatures} />
        <Route path="/contacts" component={ContactFeatures} />
      </Switch>
    </div>
  );
}

export default App;
