import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import * as action from "../../../redux/users/userAction";
import "./LoginPage.scss";

LoginPage.propTypes = {};

function LoginPage(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;

  const [warning, setWarning] = useState("");

  const history = useHistory();
  const { currentUser } = useSelector((state) => state.user);
  const { isLogin } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.user);
  console.log(error);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  useEffect(() => {
    if (currentUser && isLogin) history.push("/home");
    if (error) setWarning(error);
  }, [currentUser, history, isLogin, error]);

  const handleLogin = async (e) => {
    // debugger;
    e.preventDefault();

    await dispatch(action.loginInitial(email, password));
    setState({ password: "", email: "" });
  };
  const handleGoogleLogin = async () => {
    await dispatch(action.googleSignInInitial());
  };
  const handleFacebookLogin = async () => {
    await dispatch(action.facebookSignInInitial());
  };

  return (
    <div className="login">
      <div>
        <h2>Đăng Nhập</h2>
      </div>
      <form onSubmit={handleLogin}>
        <h2>Đăng Nhập</h2>
        {warning && <span>{warning}</span>}
        <input
          type="email"
          id="email"
          placeholder="Email address"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
        <button type="submit">Sign In</button>
        <div className="login__link">
          <Link to="/register">Don't have an account. Register here</Link>
          <Link to="/forgot-password">Forgot password</Link>
        </div>
        <div className="login__space" style={{ textAlign: "center" }}>
          <div className="login__space-left"></div>
          <span>or</span>
          <div className="login__space-right"></div>
        </div>
        <ul>
          <li onClick={handleGoogleLogin}>
            <img
              src="https://accounts.fullstack.edu.vn/assets/images/signin/google-18px.svg"
              alt=""
            />
            Sign in with Google
          </li>
          <li onClick={handleFacebookLogin}>
            <img
              src="https://accounts.fullstack.edu.vn/assets/images/signin/facebook-18px.svg"
              alt=""
            />
            Sign in with Facebook
          </li>
        </ul>
      </form>
    </div>
  );
}

export default LoginPage;
