import React from 'react';


function IdCard(props){
    return (
      <div className="box">
        <div>
          <img src={props.picture} alt="p"></img>
        </div>
        <div>
          <p>First name:{props.firstName}</p>
          <p>Last name:{props.lastName}</p>
          <p>Gender:{props.gender}</p>
          <p>Height:{props.height}</p>
          <p>Birth:{props.birth}</p>
        </div>
      </div>)
  }

  export default IdCard;