import React from 'react';

const IdCard = props => {
    return (

        <div className="card">
            <div >
                <figure > 
                    <img className="card-image" src={props.picture}></img>
                </figure>
            </div>  
            <div className="media-content">
                <p className="title is-4">First name:{props.firstName}</p>
                <p className="title is-4">Last name:{props.lastName}</p>
                <p className="title is-4">Gender:{props.gender}</p>
                <p className="title is-4">Height:{props.height}</p>
                <p className="title is-4">Birth:{props.birth}</p>
            </div>      
        </div>

    );
  };


  export default IdCard;