import React from 'react';
import Rating from "./Rating";

const DriverCard = (props) => {

  return(
    <div>
      <div>{props.name}</div>
      <img src={props.img} alt=""/>
      <Rating>{props.rating}</Rating>
      <div>{props.car.model}</div>
      <div>{props.car.licensePlate}</div>
    </div>
  );
}

export default DriverCard;