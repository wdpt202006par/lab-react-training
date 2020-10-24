import React from 'react';
import './CreditCard.css';

function CreditCard (props) {

    let bgColor = props.bgColor;
    let color = props.color;

    let cardType;
        if (props.type === "Visa") {
            cardType = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/524px-Old_Visa_Logo.svg.png"
        } else {
            cardType = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
        }

    let numberCard = ["•","•","•","•"," ","•","•","•","•"," ","•","•","•","•"," "]
    let propsNumber = props.number.split("");
    propsNumber.splice(0,12);
    let concatNumber = numberCard.concat(propsNumber).join("");

    let expirationMonth;
    if (props.expirationMonth < 10) {
        expirationMonth = "0" + props.expirationMonth;
    } else {
        expirationMonth = props.expirationMonth
    }

    let expirationYear = props.expirationYear.toString().substr(2);

    return (
        <div id="creditCard" style={{backgroundColor:`${bgColor}`, color:`${color}`}}>
            <img src={cardType} alt="" />
            <p className="number">{concatNumber}</p>
            <p><span>Expires {expirationMonth}/{expirationYear}</span><span className="bank">{props.bank}</span></p>
            <p>{props.owner}</p>
        </div>
    );   
}


export default CreditCard;