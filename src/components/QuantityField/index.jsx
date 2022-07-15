import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import productApi from "../../api/productApi";
import * as action from "../../redux/cart/cartAction";
import "./QuantityField.scss";

QuantityField.propTypes = {};

function QuantityField(props) {
  const [check, setCheck] = useState(false);
  const [value, setValue] = useState(1);
  const [product, setProduct] = useState({});
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const {
    params: { productId },
  } = useRouteMatch();

  // const handleAddToCart = (id) => {
  //   const itemInCart = cartItems.find((item) => item.item.id === id);
  //   if (!itemInCart) {
  //     setCheck(true);
  //     dispatch(action.addToCart(product, 1));
  //   }
  // };

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
        <div onClick={() => setValue(value ? value - 1 : 1)}>
          <img src="https://cassiopeia.store/svgs/minus-i.svg" alt="error" />
        </div>

        <input value={value} type="text" />
        <div onClick={() => setValue(value ? value + 1 : 1)}>
          <img src="https://cassiopeia.store/svgs/plus-i.svg" alt="error" />
        </div>
      </div>
      <div className="quantity-field__action">
        <button>
          <div onClick={handleSubmit}>
            <Link to="/checkout">Order now</Link>
          </div>
        </button>
        <div>
          <img
            src="https://cassiopeia.store/svgs/cart-btn-square.svg"
            alt=""
            // onClick={() => handleAddToCart(productId)}
          />
          {check && (
            <div>
              <img src="https://cassiopeia.store/svgs/check-solid.svg" alt="" />
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

export default QuantityField;
