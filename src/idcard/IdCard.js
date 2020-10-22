import React from 'react';
import './IdCard.css'

function IdCard (props) {
    // const {lastName, firstName, gender, height,birth,picture} = props;

    return (
        <div id='idcard'>
            
                <img src={props.picture} alt='photo'/>
            
            
            <div>
                <p><span>First name:</span> {props.firstName}</p>
                <p><span>Last name:</span> {props.lastName}</p>
                <p><span>Gender:</span> {props.gender}</p>
                <p><span>Height:</span> {props.height/100}m</p>
                <p><span>Birth:</span> {props.birth.toDateString()}</p>
            </div>
        </div>
    )
}

export default IdCard;