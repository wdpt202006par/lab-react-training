import React from "react"; 

const Rating = (props) => {
  // enregistrer le children en version arrondir 
  const integer = Math.round(props.children);
  const stars = {
    0 : "☆☆☆☆☆",
    1 : "★☆☆☆☆", 
    2 : "★★☆☆☆",
    3 : "★★★☆☆",
    4 : "★★★★☆",
    5 : "★★★★★"

  }

  return(
    <div>
      {stars[integer]}
    </div>
  );
}

export default Rating;