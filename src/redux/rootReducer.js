import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});
export default rootReducer;
