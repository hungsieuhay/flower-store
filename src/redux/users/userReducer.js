import * as actionTypes from "./types";

const initialState = {
  loading: false,
  currentUser: null,
  isLogin: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  // start
  switch (action.type) {
    case actionTypes.REGISTER_START:
    case actionTypes.LOGIN_START:
    case actionTypes.LOGOUT_START:
    case actionTypes.GOOGLE_SIGN_IN_START:
    case actionTypes.FACEBOOK_SIGN_IN_START:
    case actionTypes.RESET_PASSWORD_START:
      return {
        ...state,
        loading: true,
      };
    // success
    case actionTypes.REGISTER_SUCCESS:
    case actionTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogin: false,
        currentUser: action.payload,
      };
    case actionTypes.LOGIN_SUCCESS:
    case actionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case actionTypes.FACEBOOK_SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogin: true,
        currentUser: action.payload,
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        isLogin: false,
      };
    // fail
    case actionTypes.REGISTER_FAIL:
    case actionTypes.LOGIN_FAIL:
    case actionTypes.LOGOUT_FAIL:
    case actionTypes.GOOGLE_SIGN_IN_FAIL:
    case actionTypes.FACEBOOK_SIGN_IN_FAIL:
    case actionTypes.RESET_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
