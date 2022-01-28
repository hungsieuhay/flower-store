import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import productsApi from "../../../api/productApi";
import TitlePage from "../../../components/PageTitle";
import ProductInfo from "../components/ProductInfo";
import ProductThumbnail from "../components/ProductThumbnail";
import "./DetailPage.scss";

function DetailPage(props) {
  const [product, setProduct] = useState({});
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
  return (
    <div className="grid-config">
      <div className="detail-page">
        <ProductThumbnail product={product} />
        <ProductInfo product={product} />
      </div>
    </div>
  );
}

export default DetailPage;
