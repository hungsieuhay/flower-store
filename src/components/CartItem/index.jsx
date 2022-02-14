import React from "react";
import PropTypes from "prop-types";
import "./CartItem.scss";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import * as action from "../../redux/cart/cartAction";

CartItem.propTypes = {
  cartItem: PropTypes.object,
};

function CartItem({ cartItem = {} }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(action.removeFromCart(cartItem.item, cartItem.qty));
  };
  return (
    <div className="cart-item">
      <div className="cart-item__thumbnail">
        <img src={cartItem.item.imageUrl} alt="" />
      </div>
      <div className="cart-item__content">
        <p>{cartItem.item.name}</p>
        <div>
          <span
            style={{
              marginRight: "16px",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            Quantity: {cartItem.qty}
          </span>
          <span style={{ color: "red" }}>$</span>
          <span style={{ color: "red" }}>{cartItem.item.price}</span>
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
