import React from "react";
import PropTypes from "prop-types";
import "./Product.scss";
import { useHistory } from "react-router-dom";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product = {} }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`products/${product.id}`);
  };

  return (
    <div className="product" onClick={handleClick}>
      <div className="product__thumbnail">
        <img src={product.imageUrl} alt={product.id} />
      </div>
      <h3>{product.name}</h3>
      <h5>{product.price}</h5>
    </div>
  );
}

export default Product;
