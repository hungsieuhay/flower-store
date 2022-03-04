import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as action from "../../../redux/users/userAction";
import "./ForgotPassword.scss";

ForgotPassword.propTypes = {};

function ForgotPassword(props) {
  const [state, setState] = useState({
    email: "",
  });
  const { email } = state;

  const [warning, setWarning] = useState("");

  const history = useHistory();
  const { currentUser } = useSelector((state) => state.user);
  const { isLogin } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.user);
  // console.log(error);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  useEffect(() => {
    // if (currentUser && isLogin) history.push("/home");
    if (error) setWarning(error);
  }, [currentUser, history, isLogin, error]);

  const handleResetPassword = async (e) => {
    // debugger;
    e.preventDefault();

    await dispatch(action.resetPasswordInitial(email));
    setState({ email: "" });
    alert("Email has been sent to you, Please check and verify");
    history.push("/login");
  };

  return (
    <div className="login">
      <div>
        <h2>Quên Mật Khẩu</h2>
      </div>
      <form onSubmit={handleResetPassword}>
        <h2>Quên Mật Khẩu</h2>
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
        <button type="submit">Verify Password</button>
        <div className="forgot__link">
          <Link to="/login">Go back</Link>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
