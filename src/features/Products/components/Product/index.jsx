import React from "react";
import PropTypes from "prop-types";
import "./Product.scss";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product = {} }) {
  const history = useHistory();
  const location = useLocation();

  const handleClick = () => {
    location.pathname = "/";
    history.push(`${product.category}/${product.id}`);
  };

  return (
    <div className="product" onClick={handleClick}>
      <div className="product__thumbnail">
        <img src={product.imageUrl} alt={product.id} />
      </div>
      <h3>{product.name}</h3>
      <div className="product__price">
        <div>
          <span>$</span>
          <span>{product.price}</span>
        </div>
        {product.isPromotion && (
          <div style={{ color: "#82828b", textDecoration: "line-through" }}>
            <span>$</span>
            <span>{product.originalPrice}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
