import React from "react";
import './CreditCard.css';

const CreditCard = (props) => {
  const type = props.type;
  const number = props.number;
  const expirationMonth = props.expirationMonth;
  const expirationYear = props.expirationYear;
  const bank = props.bank;
  const owner = props.owner;
  const bgColor = props.bgColor;
  const color = props.color;



  return(
    <div className = "credit-card" style = {{
      backgroundColor: bgColor,
      color: color,
    }}>
      <div className = "logo">
        {props.type === "Visa" && <img src = "/img/visa.png"/>}
        {props.type === "Master Card" && <img src = "/img/master-card.svg"/>}
      </div>

      <div>.... .... .... {number.substr(-4)}</div>
      <div>Expires {("0"+expirationMonth).substr(-2)}/{("0"+expirationYear).substr(-2)}</div>
      <div>{bank}</div>
      <div>{owner}</div>

    </div>
  );
}

export default CreditCard;