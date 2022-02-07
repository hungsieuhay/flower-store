import React, { useState } from "react";
import "./QuantityField.scss";
import PropTypes from "prop-types";

QuantityField.propTypes = {
  onSubmit: PropTypes.func,
};

function QuantityField({ onSubmit = null }) {
  const [value, setValue] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!onSubmit) return;
    const formValues = {
      value: value,
    };
    onSubmit(formValues);
  };
  return (
    <form className="quantity-field" onSubmit={handleSubmit}>
      <div>
        <div onClick={() => setValue(value ? 1 : value - 1)}>
          <img src="https://cassiopeia.store/svgs/minus-i.svg" alt="error" />
        </div>

        <input value={value} type="text" />
        <div onClick={() => setValue(value ? value + 1 : 1)}>
          <img src="https://cassiopeia.store/svgs/plus-i.svg" alt="error" />
        </div>
      </div>
      <button type="submit" onSubmit={handleSubmit}>
        Order now
      </button>
    </form>
  );
}

export default QuantityField;
