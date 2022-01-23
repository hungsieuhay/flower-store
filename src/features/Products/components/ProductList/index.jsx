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
    <Box>
      <Grid container>
        {product.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
      {total < data.length && (
        <button
          className="product-list__btn"
          onClick={() => setTotal(total + 4)}
        >
          See more
        </button>
      )}
    </Box>
  );
}

export default ProductList;
