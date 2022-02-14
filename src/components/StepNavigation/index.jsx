import React from "react";
import PropTypes from "prop-types";
import Step from "../Step";
import "./StepNavigation.scss";

StepNavigation.propTypes = {
  stepNavigation: PropTypes.array,
  currentStep: PropTypes.number,
  updateStep: PropTypes.func,
};

function StepNavigation({ stepNavigation = [] }) {
  return (
    <div className="step-navigation">
      {stepNavigation.map((item, index) => (
        <div key={index}>
          <Step step={item} />
        </div>
      ))}
    </div>
  );
}

export default StepNavigation;
