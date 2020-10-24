import React from 'react';

const BonColor = props => {
    const divStyle = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        height: '40px' ,
        width: '30%',
        border: 'solid'
      };
    return (

        <div style= {divStyle}>
              rgb({props.r},{props.g},{props.b})   
        </div>

    );
  };


  export default BonColor;