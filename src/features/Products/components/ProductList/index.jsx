import React from "react";
import PropTypes from "prop-types";
import Product from "../Product";
import "./ProductList.scss";

ProductList.propTypes = {
  data: PropTypes.array,
};

function ProductList({ data = [] }) {
  return (
    <div className="product-list">
      {data.map((product) => (
        <ul key={product.id}>
          <li>
            <Product product={product} />
          </li>
        </ul>
      ))}
    </div>
  );
}

export default ProductList;
