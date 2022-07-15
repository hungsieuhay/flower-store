import * as actionTypes from "./types";

const initialState = {
  cartItems: [],
  totalMoney: 0,
};

const cartReducer = (state = initialState, action) => {
  // let newState = JSON.parse(JSON.stringify(state))
  //   const saveDataLocalStorage = () => {
  //       localStorage.setItem('cartItem', JSON.stringify(newState));
  //   }
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      if (state.cartItems.length === 0) {
        const newItems = {
          item: action.payload.item,
          qty: action.payload.qty,
        };
        return {
          ...state,
          cartItems: [newItems],
          totalMoney: parseInt(action.payload.item.price) * action.payload.qty,
        };
      } else {
        // debugger;

        const itemId = action.payload.item.id;
        const itemInCart = state.cartItems.find(
          (item) => item.item.id === itemId
        );
        console.log(itemInCart);
        if (itemInCart) {
          itemInCart.qty += action.payload.qty;
          return {
            ...state,
            totalMoney:
              parseInt(state.totalMoney) +
              parseInt(action.payload.item.price) * action.payload.qty,
          };
        } else {
          const newItems = {
            item: action.payload.item,
            qty: action.payload.qty,
          };
          return {
            ...state,
            cartItems: [...state.cartItems, newItems],
            totalMoney:
              parseInt(state.totalMoney) +
              parseInt(action.payload.item.price) * action.payload.qty,
          };
        }
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.item !== action.payload.item
        ),
        totalMoney:
          parseInt(state.totalMoney) -
          parseInt(action.payload.item.price) * action.payload.qty,
      };
    case actionTypes.INCREAMENT_ITEMS: {
      const itemId = action.payload.item.id;
      const itemInCart = state.cartItems.find(
        (item) => item.item.id === itemId
      );
      itemInCart.qty = action.payload.qty + 1;
      return {
        ...state,
        totalMoney:
          parseInt(state.totalMoney) + parseInt(action.payload.item.price),
      };
    }
    case actionTypes.DECREAMENT_ITEMS: {
      const itemId = action.payload.item.id;
      const itemInCart = state.cartItems.find(
        (item) => item.item.id === itemId
      );
      itemInCart.qty = action.payload.qty - 1;
      return {
        ...state,
        totalMoney:
          parseInt(state.totalMoney) - parseInt(action.payload.item.price),
      };
    }

    default:
      return state;
  }
  // saveDataLocalStorage();
  // return newState;
};

export default cartReducer;
