import React, { useState } from "react";
import "./SelectByCategory.scss";

const data = [
  { title: "Newest" },
  { title: "Oldest" },
  { title: "Low to high" },
  { title: "High to low" },
];

function SelectByCategory(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="select">
      <div onClick={() => setShow(!show)}>
        <span>Sort by</span>
        <img src="https://cassiopeia.store/svgs/dropdown-i.svg" alt="" />
      </div>
      {show && (
        <ul className="list-filter">
          {data.map((item) => (
            <li key={item.title} onClick={() => setShow(false)}>
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SelectByCategory;
