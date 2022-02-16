import React, { useEffect, useState } from "react";
import { useLocation, useRouteMatch } from "react-router-dom";
import productsApi from "../../../api/productApi";
import TitlePage from "../../../components/PageTitle";
import Slider from "../../../components/Slider";
import ProductInfo from "../components/ProductInfo";
import ProductThumbnail from "../components/ProductThumbnail";
import "./DetailPage.scss";

function DetailPage(props) {
  const [product, setProduct] = useState({});
  const [items, setItems] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/");
  path.shift();
  const category = path[0];

  const {
    params: { productId },
  } = useRouteMatch();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await productsApi.get(productId);
        setProduct(data);
      } catch (error) {
        console.log("Failed to fetch data", error);
      }
    })();
  }, [productId]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await productsApi.getAll();
        setItems(data.filter((item) => item.category === category));
      } catch (error) {
        console.log("Fetch data failed:", error);
      }
    })();
  }, [category]);

  return (
    <div className="grid-config">
      <TitlePage data={path} />
      <div className="detail-page">
        <ProductThumbnail product={product} />
        <ProductInfo product={product} />
      </div>
      <Slider data={items} />
    </div>
  );
}

export default DetailPage;
