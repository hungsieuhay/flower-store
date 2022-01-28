import PropTypes from "prop-types";
import React, { useState } from "react";
import Product from "../../features/Products/components/Product";
import "./Slider.scss";

Silder.propTypes = {
  data: PropTypes.array,
};

function Silder({ data = [] }) {
  const [total, setTotal] = useState(4);
  const [current, setCurrent] = useState(0);

  const product = data.filter((data, index) => ({}));
  const handleNext = () => {
    setCurrent(current + 1);
    setTotal(total + 1);
  };
  console.log({ product });
  return (
    <>
      <div className="slider-btn">
        <button onClick={handleNext}>Next</button>
        <button>Prev</button>
      </div>
      <div className="slider">
        {product.map((product, index) => (
          <div key={index}>
            <Product product={product} />
          </div>
        ))}
        {/* {total < data.length && (
        <button
          className="product-list__btn"
          onClick={() => setTotal(total + 1)}
        >
          See more
        </button>
      )} */}
      </div>
    </>
  );
}

export default Silder;
