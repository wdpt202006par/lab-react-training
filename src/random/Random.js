import React from 'react'

function Random(props) {

    let min = props.min;
    let max = props.max;

    let randNum = Math.floor(Math.random() * max) + min


    return (
        <div>
            Random number from {min} to {max} = {randNum}
        </div>
    )
}

export default Random