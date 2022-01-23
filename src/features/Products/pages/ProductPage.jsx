import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import productsApi from "../../../api/productApi";
import TitlePage from "../../../components/PageTitle";
import ProductList from "../components/ProductList";
import "./HomePage.scss";

ProductPage.propTypes = {};

function ProductPage(props) {
  const [items, setItems] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/");
  const category = path[path.length - 1];

  useEffect(() => {
    (async () => {
      try {
        const { data } = await productsApi.getAll();
        setItems(data.filter((data) => data.category === category));
      } catch (error) {
        console.log("Fetch data failed:", error);
      }
    })();
  }, [category]);

  return (
    <div className="grid-config">
      <TitlePage data={category} />
      <ProductList data={items} />
    </div>
  );
}

export default ProductPage;
