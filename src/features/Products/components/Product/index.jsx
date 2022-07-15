import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Product.scss";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../../../redux/cart/cartAction";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product = {} }) {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const [check, setCheck] = useState(false);
  // console.log(check);

  const handleClick = () => {
    location.pathname = "/";
    history.push(`${product.category}/${product.id}`);
  };

  const handleAddToCart = (id) => {
    const itemInCart = cartItems.find((item) => item.item.id === id);
    if (!itemInCart) {
      setCheck(true);
      dispatch(action.addToCart(product, 1));
    }
  };

  return (
    <div className="product">
      <div className="product__thumbnail">
        <img src={product.imageUrl} alt={product.id} />
        <div className="product__action ">
          <img
            src="https://cassiopeia.store/svgs/cart-btn.svg"
            alt=""
            onClick={() => handleAddToCart(product.id)}
          />
          {check && (
            <div>
              <img src="https://cassiopeia.store/svgs/check-solid.svg" alt="" />
            </div>
          )}
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
