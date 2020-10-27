import React from 'react';

const BoxColor = props => {
 let divStyle ={
     backgroundColor:`rgb(${props.r},${props.g},${props.b})`,
     height:150,
     width: 500,
 };
    return (
        <div className="box"style={divStyle}>
            <p>Rgb({props.r} {props.g} {props.b})</p>
        </div>
    )
}

export default BoxColor;