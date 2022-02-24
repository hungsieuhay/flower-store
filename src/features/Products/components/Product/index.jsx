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
    <div className="product">
      <div className="product__thumbnail">
        <img src={product.imageUrl} alt={product.id} />
        <div className="product__action">
          <img src="https://cassiopeia.store/svgs/cart-btn.svg" alt="" />
          <img
            src="https://cassiopeia.store/svgs/view-btn.svg"
            alt=""
            onClick={handleClick}
          />
        </div>
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
