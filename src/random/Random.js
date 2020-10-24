import React from 'react';
import './Random.css';

const Random = (props) => {
  let random = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
  return (
    <div id="random">
      <p>Random value between {props.min} and {props.max} =&gt; {random}</p>
    </div>
  )
}

export default Random;