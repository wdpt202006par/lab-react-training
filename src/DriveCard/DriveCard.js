import React from 'react'


const DriveCard = props => {
    let divStyle = {
        backgroundColor: '#6c5ce7',
        color: '#ffffff',
        marginTop: 10
    }
    let stars;
  if(props.rating <= 0.5 ) {
    stars = '☆☆☆☆☆'
  }else if(props.rating >= 0.5 && props.rating < 1.5 ) {
    stars = '★☆☆☆☆'
  }else if(props.rating >= 1.5 && props.rating< 2 ) {
    stars = '★★☆☆☆'
  }else if(props.rating >= 1 && props.rating <= 3.5) {
    stars = '★★★☆☆'
  }else if(props.rating >= 3.5 && props.rating <= 4.5) {
    stars = '★★★★☆'
  }else if(props.rating > 4.5) {
    stars = '★★★★★'
  }
    return(
        <div style = {divStyle}>
            <img src={props.img}></img>
            {props.name}<br/>
            {stars}<br/>
            {props.car.model} - {props.car.licensePlate}
        </div>
    )
}

export default DriveCard;