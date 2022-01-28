import { makeStyles } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import PropTypes from "prop-types";
import React from "react";
import "./ProductInfo.scss";

ProductInfo.propTypes = {
  product: PropTypes.object,
};

const data = [
  { heading: "Bouquet content", detail: "No content yet" },
  { heading: "Includes", detail: "No content yet" },
  {
    heading: "Delivery and Pay policy",
    detail:
      "Each bouquet is unique and is prepared by an expert florist and our customer service team is at your service to ensure the best experience possible.",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    boxShadow: "none",
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
    padding: "8px 0",
  },
  detail: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
    padding: "0 0 16px",
    borderBottom: "1px solid #ccc",
  },
}));
function ProductInfo({ product = {} }) {
  const classes = useStyles();
  return (
    <div className="product-info">
      <h3>{product.name}</h3>
      <div className="product-info__price">
        <span>{product.price}</span>
      </div>
      {product.types && <h5>Types: {product.types}</h5>}
      {product.occasion && <h5>Occasion: {product.occasion}</h5>}

      <button>Order now</button>

      {data.map((item) => (
        <Accordion className={classes.root}>
          <AccordionSummary
            expandIcon={<AddIcon style={{ color: "#000" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.heading}
          >
            <Typography>{item.heading}</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.detail}>
            <Typography>{item.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default ProductInfo;
