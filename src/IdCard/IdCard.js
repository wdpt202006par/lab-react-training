import React from 'react';


const Idcard = props => {
    return ( 
        <div className ="id">
  lastName={props.lastName}<br/>
  firstName={props.firstName}<br/>
  gender={props.gender}<br/>
  height={props.height}<br/>
  birth={props.birth}<br/>
  picture <img src={props.picture}></img><br/>
        </div>  
    )
}

export default Idcard;