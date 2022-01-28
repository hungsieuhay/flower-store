import React from "react";
import PropTypes from "prop-types";
import "./ProductThumbnail.scss";

ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

function ProductThumbnail({ product = {} }) {
  return (
    <div className="product-thumbnail">
      <img src={product.imageUrl} alt={product.name} />
      <ul>
        <li>
          <img src="https://cassiopeia.store/svgs/free-i.svg" alt="" />
          <span>Benefits description</span>
        </li>
        <li>
          <img src="https://cassiopeia.store/svgs/star-i.svg" alt="" />
          <span>Always fresh flowers</span>
        </li>
        <li>
          <img src="https://cassiopeia.store/svgs/camera-i.svg" alt="" />
          <span>Take photo of bouquet</span>
        </li>
      </ul>
    </div>
  );
}

export default ProductThumbnail;
