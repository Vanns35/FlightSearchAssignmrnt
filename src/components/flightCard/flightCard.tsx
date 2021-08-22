import React from "react";
import Item from "../flightInfo/FlightInfo";
import "./index.css";

//@ts-ignore
function ItemPage({ items }) {
  let length = items.length;
  if (length > 0) {
    return (
      <ul className="ItemPage-items">
        {/* 
//@ts-ignore */}
        {items.map((item) => (
          <li key={item.id} className="ItemPage-item">
            <Item item={item}/>
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <ul className="ItemPage-items">
        <label>
          <h5>There are no flights available.</h5>
        </label>
      </ul>
    );
  }
}

export default ItemPage;
