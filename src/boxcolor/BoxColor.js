import React from 'react'


function BoxColor (props) {
    const divStyle = {
        backgroundColor: "rgb(" + props.r + "," + props.g + "," + props.b + ")",
        width:"200px",
        height:"4em"
    }
 return (
     <div style={divStyle}>
             {divStyle.backgroundColor}
     </div>
 )
}

export default BoxColor;