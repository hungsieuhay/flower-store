import React, { useEffect, useState } from "react";
import productApi from "../../../api/productApi";
import Advertisment from "../../../components/Advertisment";
import Banner from "../../../components/Banner";
import ProductList from "../components/ProductList";
import "./HomePage.scss";

HomePage.propTypes = {};

function HomePage(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getAll();
        setItems(data);
      } catch (error) {
        console.log("Fetch data failed:", error);
      }
    })();
  }, []);

  return (
    <div className="grid-config">
      <Banner />
      <Advertisment />
      <ProductList data={items} />
    </div>
  );
}

export default HomePage;
