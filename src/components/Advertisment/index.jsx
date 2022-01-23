import React from "react";
import { Link } from "react-router-dom";
import "./Advertisment.scss";

function Advertisment(props) {
  const advData = [
    {
      id: 1,
      title: "Nice litter gifts",
      description: "for loved ones",
      imgUrl:
        "https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_640,q_auto/cass23_gfwimt.png",
      link: "/gifts",
    },
    {
      id: 2,
      title: "Plants",
      description: "for home comfort",
      imgUrl:
        "https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_640,q_auto/cass31_esdbjz.png",
      link: "/plants",
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
              <Link to={adv.link}>
                <span>View now</span>
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Advertisment;
