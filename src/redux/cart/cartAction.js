import * as actionTypes from "./types";

export const addToCart = (item, qty) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      item: item,
      qty: qty,
    },
  };
};

export const removeFromCart = (item, qty) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      item: item,
      qty: qty,
    },
  };
};

export const increamentItems = (item, qty) => {
  return {
    type: actionTypes.INCREAMENT_ITEMS,
    payload: {
      item: item,
      qty: qty,
    },
  };
};

export const decrementItems = (item, qty) => {
  return {
    type: actionTypes.DECREAMENT_ITEMS,
    payload: {
      item: item,
      qty: qty,
    },
  };
};
