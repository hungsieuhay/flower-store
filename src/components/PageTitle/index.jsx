import React from "react";
import PropTypes from "prop-types";
import "./TitlePage.scss";
import { Link } from "react-router-dom";

TitlePage.propTypes = {
  data: PropTypes.array,
};

function TitlePage({ data = [] }) {
  return (
    <div className="title-page">
      <div>
        <Link to="/home">
          <span>Home</span>
        </Link>
        {data.map((title, index) => (
          <p key={index} className="title-page__location">
            <span>/</span>
            {title}
          </p>
        ))}
      </div>
      <h1>{data[0]}</h1>
    </div>
  );
}

export default TitlePage;
