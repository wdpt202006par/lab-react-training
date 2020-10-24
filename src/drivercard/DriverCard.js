import React from 'react';
import './DriverCard.css';
import Rating from '../rating/Rating'

function DriverCard (props) {


    return (
        <div id="driverCard">
            <img src={props.img} alt=""/>
            <div>
                <p className="name">{props.name}</p>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    );
}

export default DriverCard;