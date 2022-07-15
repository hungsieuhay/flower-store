import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../CartItem";
import "./CartList.scss";

CartList.propTypes = {
  data: PropTypes.array,
};

function CartList({ data = [] }) {
  const selector = useSelector((state) => state.cart);
  const cartTotal = selector.totalMoney;

  return (
    <div className="cart-list">
      {data.length === 0 && <span>Order total (0)</span>}
      {data.length > 0 && <span>Order total ({data.length})</span>}
      {data.map((cart) => (
        <div key={cart.item.id}>
          <CartItem cartItem={cart} />
        </div>
      ))}
      <div className="cart-list__shipping">
        <p>Shipping</p>
        <p>FREE</p>
      </div>
      <div className="cart-list__total">
        <p>Order total</p>
        <div>
          <span>$</span>
          <span>{cartTotal}</span>
        </div>
      </div>
    </div>
  );
}

export default CartList;
