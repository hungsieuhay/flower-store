import React from "react";
import "./SelectByCategory.scss";

const data = [
  { title: "Newest" },
  { title: "Oldest" },
  { title: "Low to high" },
  { title: "High to low" },
];

function SelectByCategory(props) {
  return (
    <div className="select">
      <div>
        <span>Sort by</span>
        <img src="https://cassiopeia.store/svgs/dropdown-i.svg" alt="" />
      </div>
      <ul className="list-filter">
        {data.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SelectByCategory;
