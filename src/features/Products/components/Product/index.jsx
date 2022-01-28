import React from "react";
import PropTypes from "prop-types";
import "./Product.scss";
import { useHistory } from "react-router-dom";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product = {} }) {
  const history = useHistory();
  // const location = useLocation();
  // const path = location.pathname.split("/");
  // const category = path[path.length - 1];

  const handleClick = () => {
    history.push(`${product.category}/${product.id}`);
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
