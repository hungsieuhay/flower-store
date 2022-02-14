import React from "react";
import "./CheckoutForm.scss";

function CheckoutForm(props) {
  return (
    <div className="checkout-form">
      <p>Fill in your information</p>
      <div className="checkout-form__input">
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Phone number" />
      </div>
      <div className="checkout-form__radio">
        <span>Gender: </span>
        <input type="radio" id="male" value="Male" />
        Male
        <input type="radio" id="female" value="Female" />
        Female
      </div>
    </div>
  );
}

export default CheckoutForm;
