import {
  auth,
  facebookAuthProvider,
  googleAuthProvider,
} from "../../firebase/firebase";
import * as actionTypes from "./types";

// register
const registerStart = () => ({
  type: actionTypes.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: actionTypes.REGISTER_SUCCESS,
  payload: user,
});

const registerFail = (error) => ({
  type: actionTypes.REGISTER_FAIL,
  payload: error,
});

// login
const loginStart = () => ({
  type: actionTypes.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: user,
});

const loginFail = (error) => ({
  type: actionTypes.LOGIN_FAIL,
  payload: error,
});

// logout
const logoutStart = () => ({
  type: actionTypes.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: actionTypes.LOGOUT_SUCCESS,
});

const logoutFail = (error) => ({
  type: actionTypes.LOGOUT_FAIL,
  payload: error,
});

// google login
const googleSignInStart = () => ({
  type: actionTypes.GOOGLE_SIGN_IN_START,
});

const googleSignInSuccess = (user) => ({
  type: actionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

const googleSignInFail = (error) => ({
  type: actionTypes.GOOGLE_SIGN_IN_FAIL,
  payload: error,
});

// facebook
const facebookSignInStart = () => ({
  type: actionTypes.FACEBOOK_SIGN_IN_START,
});

const facebookSignInSuccess = (user) => ({
  type: actionTypes.FACEBOOK_SIGN_IN_SUCCESS,
  payload: user,
});

const facebookSignInFail = (error) => ({
  type: actionTypes.FACEBOOK_SIGN_IN_FAIL,
  payload: error,
});

// reset password
const resetPasswordStart = () => ({
  type: actionTypes.RESET_PASSWORD_START,
});
const resetPasswordSuccess = (email) => ({
  type: actionTypes.RESET_PASSWORD_SUCCESS,
  payload: email,
});
const resetPasswordFail = (error) => ({
  type: actionTypes.RESET_PASSWORD_FAIL,
  payload: error,
});

// function
export const registerInitial = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName,
        });
        dispatch(registerSuccess(user));
      })
      .catch((error) => dispatch(registerFail(error.message)));
  };
};

export const loginInitial = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
      })
      .catch((error) => dispatch(loginFail(error.message)));
  };
};

export const logoutInitial = () => {
  return function (dispatch) {
    dispatch(logoutStart());
    auth
      .signOut()
      .then((resp) => {
        dispatch(logoutSuccess());
      })
      .catch((error) => dispatch(logoutFail(error.message)));
  };
};

export const googleSignInInitial = () => {
  return function (dispatch) {
    dispatch(googleSignInStart());
    auth
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(googleSignInSuccess(user));
      })
      .catch((error) => dispatch(googleSignInFail(error.message)));
  };
};

export const facebookSignInInitial = () => {
  return function (dispatch) {
    dispatch(facebookSignInStart());
    auth
      .signInWithPopup(facebookAuthProvider.addScope("user_birthday, email"))
      .then(({ user }) => {
        dispatch(facebookSignInSuccess(user));
      })
      .catch((error) => dispatch(facebookSignInFail(error.message)));
  };
};

export const resetPasswordInitial = (email) => {
  return function (dispatch) {
    dispatch(resetPasswordStart());
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        dispatch(resetPasswordSuccess());
      })
      .catch((error) => dispatch(resetPasswordFail(error.message)));
  };
};
