import React from 'react';
import './BoxColor.css';

function BoxColor (props) {
    let rgbCode = `rgb(${props.r},${props.g},${props.b})`;
    let rgbToHex = function (rgb) { 
        var hex = Number(rgb).toString(16);
        if (hex.length < 2) {
             hex = "0" + hex;
        }
        return hex;
    };
    let fullColorHex = function(r,g,b) {   
        var red = rgbToHex(r);
        var green = rgbToHex(g);
        var blue = rgbToHex(b);
        return red+green+blue;
    };
    let hexCode = '#'+fullColorHex(props.r,props.g,props.b)
    return (
        <div id= 'boxcolor' style={{backgroundColor:`${rgbCode}`}}>
            <p>{rgbCode}</p>
            <p>{hexCode}</p>
        </div>
    
    )
}

export default BoxColor;