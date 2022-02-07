import { actionTypes } from "../Contants/actionTypes";

const initialState = {
  products: [
    {
      id: 1,
      name: "Hung",
      category: "Students",
    },
  ],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
