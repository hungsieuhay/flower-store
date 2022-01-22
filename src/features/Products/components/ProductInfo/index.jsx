import React from "react";
import PropTypes from "prop-types";

ProductInfo.propTypes = {
  product: PropTypes.object,
};

function ProductInfo({ product = {} }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <h4>{product.price}</h4>
      {product.types && <h5>Types: {product.types}</h5>}
      {product.occasion && <h5>Occasion: {product.occasion}</h5>}
    </div>
  );
}

export default ProductInfo;
