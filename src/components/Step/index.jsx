import React from "react";
import PropTypes from "prop-types";
import "./Step.scss";

Step.propTypes = {
  step: PropTypes.object,
};

function Step({ step = {} }) {
  return (
    <div className="step">
      <div>
        <span className="step-number">{step.id}</span>
      </div>
      <span className="step-name">{step.name}</span>
    </div>
  );
}

export default Step;
