import React from 'react';
import './Rating.css';

function Rating (props) {
    let rating;
    switch(Math.round(props.children)) {
        case 0: rating= ['☆','☆','☆','☆','☆'];
        break;
        case 1: rating= ['★','☆','☆','☆','☆'];
        break;
        case 2: rating= ['★','★','☆','☆','☆'];
        break;
        case 3: rating= ['★','★','★','☆','☆'];
        break;
        case 4: rating= ['★','★','★','★','☆'];
        break;
        case 5: rating= ['★','★','★','★','★'];
        break;
        default: rating= 'no rating';
    } 
    return (
        <div><p id = 'rating'>{rating}</p></div>
    )
}


export default Rating