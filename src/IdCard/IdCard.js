import React from 'react';


const Idcard = props => {
    return ( 
        <div>
<IdCard
  lastName={props.lastName}
  firstName={props.firstName}
  gender={props.gender}
  height={props.height}
  birth={props.birth}
  picture={props.picture}
/>
        </div>
        
    )
}

export default Idcard;