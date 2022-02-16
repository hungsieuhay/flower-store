import React from "react";
import PropTypes from "prop-types";
import Product from "../Product";
import "./ProductList.scss";
import { Box, Grid } from "@material-ui/core";
import { useState } from "react";

ProductList.propTypes = {
  data: PropTypes.array,
};

function ProductList({ data = [] }) {
  const [total, setTotal] = useState(4);
  const product = data.filter((data, index) => index < total);
  return (
    <div>
      <div className="product-list">
        {product.map((product, index) => (
          <div key={index}>
            <Product product={product} />
          </div>
        ))}
      </div>
      {total < data.length && (
        <button
          className="product-list__btn"
          onClick={() => setTotal(total + 4)}
        >
          See more
        </button>
      )}
    </div>
  );
}

export default ProductList;
