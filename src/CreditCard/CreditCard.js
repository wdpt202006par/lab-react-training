import { findByLabelText } from '@testing-library/react';
import React from 'react';

const CreditCard = props => {
    let divStyle = {
        color:props.color,
        backgroundColor: props.bgColor,
        height: 200,
        width: 400,
        borderRadius:12,
    };

    return(
<div style={divStyle}>
            <p>{props.type}</p>
            <p>{props.number}</p>
            <p>Expire {props.expirationMonth}/{props.expirationYear} {props.bank} </p>
            <p>{props.owner}</p>
        </div>
    )
}

export default CreditCard;