import React from 'react';

const Greetings = props => {

    if (props.lang === 'de') {
        return <div className="card">Hallo {props.children}</div>
    } 
    else if (props.lang === 'en') {
        return <div className="card">Hello {props.children}</div>
    } 
    if (props.lang === 'es') {
        return <div className="card">Hola {props.children}</div>
    } 
    if (props.lang === 'fr') {
        return <div className="card">Bonjour {props.children}</div>
    } 

  };


  export default Greetings;