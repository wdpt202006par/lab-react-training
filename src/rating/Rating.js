import React from 'react';

const Rating = props => {
  let stars;
  if(props.children <= 0.5 ) {
    stars = '☆☆☆☆☆'
  }else if(props.children >= 0.5 && props.children < 1.5 ) {
    stars = '★☆☆☆☆'
  }else if(props.children >= 1.5 && props.children < 2 ) {
    stars = '★★☆☆☆'
  }else if(props.children >= 1 && props.children <= 3.5) {
    stars = '★★★☆☆'
  }else if(props.children >= 3.5 && props.children <= 4.5) {
    stars = '★★★★☆'
  }else if(props.children > 4.5) {
    stars = '★★★★★'
  }
  
    return(
        <div>
           {(Math.round(props.children))} : {stars}
        </div>
    )
}

export default Rating;