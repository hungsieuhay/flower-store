import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as action from "../../../redux/users/userAction";
import "./RegisterPage.scss";

RegisterPage.propTypes = {};

function RegisterPage(props) {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, passwordConfirm } = state;

  const [warning, setWarning] = useState("");

  const history = useHistory();
  const { currentUser } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) history.push("/login");
    if (error) setWarning(error);
  }, [currentUser, history, error]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleRegister = async (e) => {
    // debugger;
    e.preventDefault();
    if (password !== passwordConfirm) {
      return setWarning("Passwords do not match");
    }

    await dispatch(action.registerInitial(email, password, displayName));
    setState({
      displayName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    });
  };
  return (
    <div className="register">
      <div>
        <h2>Đăng Ký</h2>
      </div>
      <form onSubmit={handleRegister}>
        <h2>Đăng Ký</h2>
        {warning && <span>{warning}</span>}
        <input
          type="text"
          id="displayName"
          placeholder="Full Name"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          required
        />
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
        <input
          type="password"
          id="passwordConfirm"
          placeholder="Password Confirm"
          onChange={handleChange}
          name="passwordConfirm"
          value={passwordConfirm}
          required
        />
        <button type="submit">Register</button>

        <div className="register__link">
          <Link to="/login">Already have an account. Login here</Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
