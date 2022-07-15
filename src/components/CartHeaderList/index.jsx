import PropTypes from "prop-types";
import React from "react";
import CartItem from "../CartItem";

CartHeaderList.propTypes = {
  data: PropTypes.array,
};

function CartHeaderList({ data = [] }) {
  return (
    <div>
      {data.map((cart) => (
        <div key={cart.item.id}>
          <CartItem cartItem={cart} />
        </div>
      ))}
    </div>
  );
}

export default CartHeaderList;
