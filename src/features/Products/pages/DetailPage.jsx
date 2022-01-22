import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import productsApi from "../../../api/productApi";
import ProductInfo from "../components/ProductInfo";
import ProductThumbnail from "../components/ProductThumbnail";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    marginTop: "64px",
  },

  left: {
    width: "400px",
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },

  right: {
    padding: theme.spacing(1.5),
    flex: "1 1 0",
  },
  progress: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1,
  },
}));

function DetailPage(props) {
  const classes = useStyles;
  const [product, setProduct] = useState({});
  const {
    params: { productId },
  } = useRouteMatch();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await productsApi.get(productId);
        setProduct(data);
        console.log(data);
      } catch (error) {
        console.log("Failed to fetch data", error);
      }
    })();
  }, [productId]);
  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Grid container>
          <Grid item>
            <ProductThumbnail product={product} className={classes.left} />
          </Grid>
          <Grid item>
            <ProductInfo product={product} className={classes.right} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default DetailPage;
