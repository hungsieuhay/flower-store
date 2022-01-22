import React from "react";
import PropTypes from "prop-types";

ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

function ProductThumbnail({ product = {} }) {
  return (
    <div>
      <img src={product.imageUrl} alt={product.name} />
    </div>
  );
}

export default ProductThumbnail;
