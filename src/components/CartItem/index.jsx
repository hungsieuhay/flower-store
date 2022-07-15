import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import * as action from "../../redux/cart/cartAction";
import "./CartItem.scss";

CartItem.propTypes = {
  cartItem: PropTypes.object,
};

function CartItem({ cartItem = {} }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(action.removeFromCart(cartItem.item, cartItem.qty));
  };
  const increamentQuantity = () => {
    dispatch(action.increamentItems(cartItem.item, cartItem.qty));
  };
  const decreamentQuantity = () => {
    dispatch(action.decrementItems(cartItem.item, cartItem.qty));
  };
  return (
    <div className="cart-item">
      <div className="cart-item__thumbnail">
        <img src={cartItem.item.imageUrl} alt="" />
      </div>
      <div className="cart-item__content">
        <p>{cartItem.item.name}</p>
        <div className="cart-item__quantity">
          <div onClick={decreamentQuantity}>
            <img src="https://cassiopeia.store/svgs/minus-i.svg" alt="error" />
          </div>
          <input value={cartItem.qty} type="text" />
          <div onClick={increamentQuantity}>
            <img src="https://cassiopeia.store/svgs/plus-i.svg " alt="error" />
          </div>
          <span style={{ color: "red", marginLeft: "10px" }}>$</span>
          <span style={{ color: "red" }}>
            {cartItem.item.price * cartItem.qty}
          </span>
        </div>
      </div>
      <div className="cart-item__action">
        <div>
          <span>$</span>
          <span>{cartItem.item.price}</span>
        </div>
        <img
          src="https://cassiopeia.store/svgs/delete-i.svg"
          alt="delete"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
}

export default CartItem;
