import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import productApi from "../../api/productApi";
import * as action from "../../redux/cart/cartAction";
import "./QuantityField.scss";

QuantityField.propTypes = {};

function QuantityField(props) {
  const [value, setValue] = useState(1);
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const {
    params: { productId },
  } = useRouteMatch();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.get(productId);
        setProduct(data);
      } catch (error) {
        console.log("Failed to fetch data", error);
      }
    })();
  }, [productId]);

  const handleSubmit = () => {
    dispatch(action.addToCart(product, value));
  };
  return (
    <form className="quantity-field">
      <div>
        <div onClick={() => setValue(value ? 1 : value - 1)}>
          <img src="https://cassiopeia.store/svgs/minus-i.svg" alt="error" />
        </div>

        <input value={value} type="text" />
        <div onClick={() => setValue(value ? value + 1 : 1)}>
          <img src="https://cassiopeia.store/svgs/plus-i.svg" alt="error" />
        </div>
      </div>
      <button>
        <div onClick={handleSubmit}>
          <Link to="/checkout">Order now</Link>
        </div>
      </button>
    </form>
  );
}

export default QuantityField;
