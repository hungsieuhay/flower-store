import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import productsApi from "../../../api/productApi";
import TitlePage from "../../../components/PageTitle";
import Slider from "../../../components/Slider";
import "./Discount.scss";
// import "./AboutUs.scss";
import "./HomePage.scss";

function Discount(props) {
  const [items, setItems] = useState([]);

  const location = useLocation();
  const path = location.pathname.split("/");
  path.shift();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await productsApi.getAll();
        setItems(data.filter((data) => data.isPromotion === true));
      } catch (error) {
        console.log("Fetch data failed:", error);
      }
    })();
  }, []);
  return (
    <div className="grid-config">
      <div className="discount">
        <TitlePage data={path} />
        <p>Special Offer</p>
        <Slider data={items} />
        <p>Event</p>
        <div className="discount__gallery">
          <div className="discount__gallery-1">
            <img
              src="https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1200,q_auto/49153883_10156234250588277_759211318690447360_n.jpg_fsdolu.jpg"
              alt=""
            />
            <p>Merry Christmas</p>
            <div>
              <img
                src="https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/81186265_10157037095808277_5708839241006448640_n.jpg_w2p957.jpg"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/48367677_10156211834773277_3135315457381236736_n.jpg_p22k4w.jpg"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/76730117_10156963515298277_4845485651266633728_n.png_wqtjya.png"
                alt=""
              />
            </div>
          </div>
          <div className="discount__gallery-2">
            <img
              src="https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/47687127_10156201330158277_7041504890727694336_n.jpg_nlhh6d.jpg"
              alt=""
            />
          </div>
          <div className="discount__gallery-3">
            <img
              src="https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/31781897_10155755686363277_2831750321405952000_n.jpg_rzkgeb.jpg"
              alt=""
            />
            <p>Happy Mother's Day</p>
            <img
              src="https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/31899025_10155755691763277_2010388124407955456_n.jpg_yeh6hh.jpg"
              alt=""
            />
            <p>Have The Sweetest</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discount;
