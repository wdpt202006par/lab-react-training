import React from 'react';
import './Greetings.css';

const Greetings = (props) => {
  let greeting;
  if (props.lang === 'de') {
    greeting = 'Hallo';
  } else if (props.lang === 'fr') {
    greeting = 'Bonjour';
  }
  return (
    <div id="greetings">
      <p>{greeting} {props.children}</p>
    </div>
  )
}

export default Greetings;