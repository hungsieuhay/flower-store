import React from "react";
import { useLocation } from "react-router-dom";
import TitlePage from "../../../components/PageTitle";
import "./AboutUs.scss";
import "./HomePage.scss";

function AboutUs(props) {
  const location = useLocation();
  const path = location.pathname.split("/");
  path.shift();
  return (
    <div className="grid-config">
      <TitlePage data={path} />
      <div className="about-us">
        <div className="about-us__content">
          <p style={{ margin: "0" }}>
            The best way to brighten the special day of a friend or loved one is
            with flowers. But what happens when that special someone is far
            away? With Cassiopeia it is possible to surprise someone with a
            lovely bouquet no matter where he or she is in the world.
          </p>
          <p style={{ marginTop: "20px" }}>
            With over 15 years of experience, we have covered many requests and
            are always receptive to all of your ideas, greeted with enthusiasm
            and our can-do attitude - if we aim to achieve something then we
            will!
          </p>
          <p style={{ marginTop: "20px" }}>
            Over the course of the last 15 years we have grown steadily thanks
            to the trust placed in us by our customers. Today, We are a leading
            company in the world for sending flowers. We are also able to
            speedily ship fresh flowers to more than 20 countries around the
            world.
          </p>
        </div>
        <div className="about-us__gallery">
          <div>
            <img
              style={{ width: "350px", height: "350px", objectFit: "cover" }}
              src="https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1080,q_auto/209579038_10158403515473277_8242365296733414865_n.jpg_ciobfk.jpg"
              alt=""
            />
            <div>
              <img
                style={{ width: "172px", height: "172px", objectFit: "cover" }}
                src="https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1080,q_auto/120344771_10157824946873277_470194270377792085_n.jpg_apstt8.jpg"
                alt=""
              />
              <img
                style={{ width: "172px", height: "172px", objectFit: "cover" }}
                src="https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1080,q_auto/253411461_10158621757453277_1867414621911677096_n.jpg_sr0t7j.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="about-us__gallery-right">
            <img
              style={{ width: "263px", height: "263px", objectFit: "cover" }}
              src="https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1080,q_auto/252351058_10158633590988277_7917329218506464257_n.jpg_scglja.jpg"
              alt=""
            />
            <img
              style={{ width: "263px", height: "263px", objectFit: "cover" }}
              src="https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1080,q_auto/233204646_10158472555758277_5728865856444065244_n.jpg_jrgmkv.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
