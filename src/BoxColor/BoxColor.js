import React from 'react';

const BoxColor = props => {
 let divStyle ={
     backgroundColor:`rgb(${props.r},${props.g},${props.b})`,
 };
    return (
        <div style={divStyle}>
            <p>Rgb({props.r} {props.g} {props.b})</p>
        </div>
    )
}

export default BoxColor;