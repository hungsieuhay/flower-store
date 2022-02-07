import { actionTypes } from "../Contants/actionTypes";

export const setProduct = (product) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: product,
  };
};

export const selectedProduct = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};

export const removeProduct = (product) => {
  return {
    type: actionTypes.REMOVE_PRODUCTS,
    payload: product,
  };
};
