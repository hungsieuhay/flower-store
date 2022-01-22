import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import productApi from "../../../api/productApi";
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import ProductList from "../components/ProductList";
import Advertisment from "../../../components/Advertisment";
import Banner from "../../../components/Banner";
import "./HomePage.scss";

HomePage.propTypes = {};

function HomePage(props) {
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const [items, setItems] = useState([]);
  const [filterCategory, setFilterCategory] = useState(() => {
    const params = queryString.parse(location.search);
    console.log(params);
    return params.category || "all";
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getAll();
        setItems(data);
        const params = queryString.parse(location.search);
        setFilterCategory(params.category || "all");
      } catch (error) {
        console.log("Fetch data failed:", error);
      }
    })();
  }, [location.search]);

  const handleAllProduct = () => {
    // setFilterCategory("flower");
    const queryParams = { category: "all" };
    history.push({
      pathname: match.url,
      search: queryString.stringify(queryParams),
    });
  };
  const handleCategoryFlowers = () => {
    // setFilterCategory("flower");
    const queryParams = { category: "flower" };
    history.push({
      pathname: match.url,
      search: queryString.stringify(queryParams),
    });
  };
  const handleCategoryPlants = () => {
    // setFilterCategory("plant");
    const queryParams = { category: "plant" };
    history.push({
      pathname: match.url,
      search: queryString.stringify(queryParams),
    });
  };
  const handleCategoryGifts = () => {
    // setFilterCategory("gifts");
    const queryParams = { category: "gift" };
    history.push({
      pathname: match.url,
      search: queryString.stringify(queryParams),
    });
  };

  const renderedCategory = items.filter(
    (item) => filterCategory === "all" || filterCategory === item.category
  );
  return (
    <div className="grid-config">
      <ul className="nav__link">
        <li onClick={handleAllProduct}>All Product</li>
        <li onClick={handleCategoryFlowers}>Flowers</li>
        <li onClick={handleCategoryPlants}>Plants</li>
        <li onClick={handleCategoryGifts}>Gifts</li>
        <li>About Us</li>
      </ul>
      <Banner />
      <Advertisment />
      <ProductList data={renderedCategory} />
    </div>
  );
}

export default HomePage;
