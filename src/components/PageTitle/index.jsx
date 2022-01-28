import React from "react";
import PropTypes from "prop-types";
import "./TitlePage.scss";
import { Link } from "react-router-dom";

TitlePage.propTypes = {
  data: PropTypes.string,
};

function TitlePage({ data = "" }) {
  return (
    <div className="title-page">
      <Link to="/home">
        <span>Home</span>
      </Link>
      <span className="title-page__space">/</span>
      <span className="title-page__location">{data}</span>
      {data.name && (
        <>
          <span className="title-page__space">/</span>
          <span>{data.name}</span>
        </>
      )}
      <h1>{data}</h1>
    </div>
  );
}

export default TitlePage;
