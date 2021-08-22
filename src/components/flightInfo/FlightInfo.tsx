
import React from 'react';
import './index.css';

//@ts-ignore
let Item = ({ item }) => (
  <div className="Item">
    <div className="Item-left">
        <h5>Rs. {item.price}</h5>
        <div>{item.flight_id}</div>
        <div className="Item-price">{item.origin_city_code}, {item.destination_city_code} </div>
        <div className="Item-description">Depart: {item.depart_time}</div>
        <div className="Item-description">Arrive: {item.return_time}</div>
    </div>
    
    <div className="Item-left">
        <h5>Rs. {item.price}</h5>
        <div>{item.flight_id}</div>
        <div className="Item-price">{item.origin_city_code}, {item.destination_city_code} </div>
        <div className="Item-description">Depart: {item.depart_time}</div>
        <div className="Item-description">Arrive: {item.return_time}</div>
    </div>

    <div className="Item-right">
      <div className="Item-image" >
      </div>
      <button className="Item-book" onClick={item.onClickHandler} type="submit">
        Book this flight
      </button>
    </div>
  </div>
)

//@ts-ignore
Item.onClickHandler =  (event) => {
  alert("Flight booked successfully :)")
  event.preventDefault();
}

export default Item;
