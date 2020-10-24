import React from 'react'; 

const BoxColor = (props) => {
  const r = props.r;
  const g = props.g;
  const b = props.b;
  const rgb = `rgb(${r},${g},${b})`;
  const hexa = '#'+('0'+r.toString(16)).slice(-2)+('0'+g.toString(16)).slice(-2)+('0'+b.toString(16)).slice(-2);  

  const divStyle = {
    backgroundColor: rgb,
    width:"200px",
    height: "100px",
    border: "solid 1px black",
    textAlign : "center",
  }

  return(
    <div style ={divStyle}>
      <div>{rgb}</div>
      <div>{hexa}</div>
    </div>
  );
}

export default BoxColor;