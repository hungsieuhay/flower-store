import React from "react";
import "./Advertisment.scss";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";

function Advertisment(props) {
  const advData = [
    {
      id: 1,
      title: "Nice litter gifts",
      description: "for loved ones",
      imgUrl:
        "https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_640,q_auto/cass23_gfwimt.png",
    },
    {
      id: 2,
      title: "Plants",
      description: "for home comfort",
      imgUrl:
        "https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_640,q_auto/cass31_esdbjz.png",
    },
  ];
  return (
    <ul className="advertisment">
      {advData.map((adv) => (
        <li key={adv.id} className="advertisment__item">
          <div
            style={{
              backgroundImage: `url(${adv.imgUrl}) `,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              minHeight: "220px",
            }}
          >
            <h4>{adv.title}</h4>
            <p>{adv.description}</p>
            <div>
              <span>View now</span>
              <TrendingFlatIcon style={{ fontSize: "20px" }} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Advertisment;
