import React from 'react';
import './IdCard.css';

const IdCard = (props) => {
  return (
    <div id="id-card">
      <img src={props.picture} alt="avatar" className="avatar"/>
      <div className="infos">
        <p><span>First Name:</span> {props.firstName}</p>
        <p><span>Last Name:</span> {props.lastName}</p>
        <p><span>Gender:</span> {props.gender}</p>
        <p><span>Height:</span> {props.height}</p>
        <p><span>Birth:</span> {props.birth.toDateString()}</p>
      </div>
    </div>
  )
}

export default IdCard;