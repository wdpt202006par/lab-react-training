import React from 'react';

const Random = (props) => {
  const min = props.min;
  const max = props.max;
  let returnNumber = Math.floor(Math.random() * (max - min) + min);

  return(
    <div>
      Random value between {props.min} and {props.max} is {returnNumber}
    </div>
  )
}

export default Random;