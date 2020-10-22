import React from 'react';
import './Random.css'

function Random (props) {
    let result = Math.floor(Math.random() *(props.max-props.min)+props.min);
    return <p id='random'>Random value between {props.min} and {props.max} =&#62; {result}</p>
}

export default Random;