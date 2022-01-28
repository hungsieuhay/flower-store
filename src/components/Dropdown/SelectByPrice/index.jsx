import React from "react";

const data = [
  { title: "Newest" },
  { title: "Oldest" },
  { title: "Low to high" },
  { title: "High to low" },
];

function SelectByPrice(props) {
  return (
    <div>
      <span>Sort by</span>
      <ul>
        {data.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SelectByPrice;
