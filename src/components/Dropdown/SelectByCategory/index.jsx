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
      <span>Sort by</span>
      <ul>
        {data.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SelectByCategory;
