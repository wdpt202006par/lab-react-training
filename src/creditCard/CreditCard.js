import React from 'react';

const CreditCard = props => {
    const divStyle = {
        color: `${props.color}`,
        backgroundColor: `${props.bgColor}`,
        height: '150px' ,
        width: '250px',
        borderRadius: '5px'
      };
    
    return (

        <div style= {divStyle} className="CCard">
            {props.type=== 'Visa' && <img src="/img/visa.png"></img>}
            {props.type=== 'Master Card' && <img src="/img/master-card.svg"></img>}   
            <br></br>
            <div>
                <h2>.... .... .... {props.number.substr(-4)}</h2>
                <h3>Expires {props.expirationMonth}/{props.expirationYear}     {props.bank}</h3>
                <h3>{props.owner}</h3>
            </div>
        </div>

    );
  };


  export default CreditCard;