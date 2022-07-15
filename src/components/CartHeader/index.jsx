import React from "react";
import { useSelector } from "react-redux";
import CartHeaderList from "../CartHeaderList";
import "./CartHeader.scss";

function CartHeader(props) {
  const selector = useSelector((state) => state.cart);
  const cartData = selector.cartItems;
  const totalMoney = selector.totalMoney;
  return (
    <div className="cart-header">
      <h3>Your cart</h3>
      <CartHeaderList data={cartData} />

      <p>Remove all</p>
      <form>
        <input type="text" placeholder="Add promocode" />
        <button>Apply</button>
      </form>
      <div className="cart-header__shipping">
        <p>Shipping</p>
        <strong>FREE</strong>
      </div>
      <div className="cart-header__code">
        <p>Promocode</p>
        <strong>
          <span>-$</span>10.00
        </strong>
      </div>
      <div className="cart-header__total">
        <p>Order total</p>
        <strong>{totalMoney}</strong>
      </div>
      <div className="cart-header__btn">
        <span>Checkout</span>
        <img src="https://cassiopeia.store/svgs/line-right-arrow.svg" alt="" />
      </div>
    </div>
  );
}

export default CartHeader;
