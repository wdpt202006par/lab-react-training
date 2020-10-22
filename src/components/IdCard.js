import React from 'react';

const IdCard = (props) => {
    return (
        <div>
            <p>Lastname: {props.lastName}</p>
            <p>Firstname: {props.firstName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Birth: {props.birth}</p>
            <img src={props.picture} alt=""/>
        </div>

    )
}

export default IdCard;