import React from 'react';
import Rating from '../rate/rate'

const DriverCard = props => {
 
    return (

        <div style={{marginTop: '30px', height:'175px', width: '650px', color:'white', backgroundColor: "#195e83", display:'flex',  borderRadius:'20px', fontSize: '30px'}} className="driverCard">
            <div>
                <img style={{height: '120px', width:'120px',  borderRadius:'50%',margin: '20px auto' }} src={props.img}></img>
            </div>
            <div >
                <h3>{props.name}</h3>
                <Rating rate={props.rating} />
                <p>{props.car.model}  {props.car.licensePlate}</p>
            </div>
        </div>

    );
  };


  export default DriverCard;