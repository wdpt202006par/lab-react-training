import React from 'react';


const Rating = props => {
 
    return (

        <div className="Rate">
            {Math.round(props.rate)=== 0 && <p>☆ ☆ ☆ ☆ ☆</p>}
            {Math.round(props.rate)=== 1 && <p>★ ☆ ☆ ☆ ☆</p>}
            {Math.round(props.rate)=== 2 && <p>★ ★ ☆ ☆ ☆</p>}
            {Math.round(props.rate)=== 3 && <p>★ ★ ★ ☆ ☆</p>}
            {Math.round(props.rate)=== 4 && <p>★ ★ ★ ★ ☆</p>}
            {Math.round(props.rate)=== 5 && <p>★ ★ ★ ★ ★</p>}
        </div>

    );
  };


  export default Rating;