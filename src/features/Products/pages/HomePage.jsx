import React, { useEffect, useState } from "react";
import productsApi from "../../../api/productApi";
import Advertisment from "../../../components/Advertisment";
import Banner from "../../../components/Banner";
import Slider from "../../../components/Slider";
import "./HomePage.scss";

HomePage.propTypes = {};

function HomePage(props) {
  const [itemsFlower, setItemsFlower] = useState([]);
  const [itemsPlant, setItemsPlants] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await productsApi.getAll();
        setItemsFlower(data.filter((item) => item.category === "flowers"));
      } catch (error) {
        console.log("Fetch data failed:", error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await productsApi.getAll();
        setItemsPlants(data.filter((item) => item.category === "plants"));
      } catch (error) {
        console.log("Fetch data failed:", error);
      }
    })();
  }, []);

  return (
    <div className="grid-config">
      <Banner />
      <Advertisment />
      <h3>New</h3>
      <Slider data={itemsFlower} />
      <h3>Relevant</h3>
      <Slider data={itemsPlant} />
    </div>
  );
}

export default HomePage;
