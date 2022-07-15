import React, { useState } from "react";

const data = [
  { title: "Under 10$" },
  { title: "$10 - $50" },
  { title: "$50 - $100" },
  { title: "Over $100" },
];

function SelectByPrice(props) {
  const [show, setShow] = useState(false);

  return (
    <div className="select">
      <div onClick={() => setShow(!show)}>
        <span>Price</span>
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

export default SelectByPrice;
