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

export const adjustQty = (itemID, value) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
