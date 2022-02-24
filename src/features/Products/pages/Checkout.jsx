import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import TitlePage from "../../../components/PageTitle";
import { useSelector } from "react-redux";
import CartList from "../../../components/CartList";
import "./Checkout.scss";
import StepNavigation from "../../../components/StepNavigation";
import CheckoutForm from "../../../components/CheckoutForm";

Checkout.propTypes = {};

function Checkout(props) {
  const labelStep = [
    { id: "1", name: "Contacts" },
    { id: "2", name: "Shipping" },
    { id: "3", name: "Payment" },
  ];

  const [step, setStep] = useState(1);

  const location = useLocation();
  const path = location.pathname.split("/");
  path.shift();

  const selector = useSelector((state) => state.cart);
  const cartData = selector.cartItems;

  return (
    <div className="checkout">
      <TitlePage data={path} />
      <div className="checkout_main">
        <div className="checkout-container">
          <StepNavigation stepNavigation={labelStep} currentStep={step} />
          <CheckoutForm />
        </div>
        <CartList data={cartData} />
      </div>
    </div>
  );
}

export default Checkout;
