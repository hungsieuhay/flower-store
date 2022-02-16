import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import productsApi from "../../../api/productApi";
import Dropdown from "../../../components/Dropdown";
import TitlePage from "../../../components/PageTitle";
import ProductList from "../components/ProductList";
import "./HomePage.scss";
import queryString from "query-string";
import { useMemo } from "react";

ProductPage.propTypes = {};

function ProductPage(props) {
  const [items, setItems] = useState([]);
  // category
  const location = useLocation();
  const path = location.pathname.split("/");
  const category = path[path.length - 1];
  path.shift();
  // occasion
  const occasion = items.map((item) => item.occasion);
  const newOccasion = occasion.filter(
    (item, index) => occasion.indexOf(item) === index && item
  );

  // type
  const type = items.map((item) => item.types);
  const newType = type.filter(
    (item, index) => type.indexOf(item) === index && item
  );
  // filter
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.occasion || params.types || "all";
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await productsApi.getAll();
        setItems(data.filter((data) => data.category === category));

        const params = queryString.parse(location.search);
        setFilteredStatus(params.occasion || params.types || "all");
      } catch (error) {
        console.log("Fetch data failed:", error);
      }
    })();
  }, [category, location.search]);

  const renderedItems = useMemo(() => {
    return items.filter(
      (item) =>
        filteredStatus === "all" ||
        filteredStatus === item.occasion ||
        filteredStatus === item.types
    );
  }, [items, filteredStatus]);

  return (
    <div className="grid-config">
      <TitlePage data={path} />
      <Dropdown
        dataOccasion={newOccasion}
        dataType={newType}
        item={renderedItems}
      />
      <ProductList data={renderedItems} />
    </div>
  );
}

export default ProductPage;
