import React from 'react';

const rating = props => {
  
    return(
        <div>
          {props.children.repeat(Math.ceil(props.children))}
        </div>
    )
}

export default rating;