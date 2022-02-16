import React from "react";

const data = [
  { title: "Under 10$" },
  { title: "$10 - $50" },
  { title: "$50 - $100" },
  { title: "Over $100" },
];

function SelectByPrice(props) {
  return (
    <div className="select">
      <div>
        <span>Price</span>
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

export default SelectByPrice;
