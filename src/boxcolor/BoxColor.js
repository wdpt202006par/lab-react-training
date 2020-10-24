import React from 'react';
import './BoxColor.css';

const BoxColor = (props) => {
  const background = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
  };
  const hex = "#" + ((1 << 24) + (props.r << 16) + (props.g << 8) + props.b).toString(16).slice(1);
  return (
    <div id="boxcolor" style={background}>
      <p>rgb({props.r}, {props.g}, {props.b})</p>
      <p>{hex}</p>
    </div>
  )
}

export default BoxColor;