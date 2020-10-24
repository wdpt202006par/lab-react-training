import React from 'react';

const Greetings = (props) => {

const langs = {
  en : "Hello",
  de : "Hallo", 
  es : "Hola", 
  fr : "Bonjour"
}

  return (
    <div>
      {langs[props.lang]} {props.children}
    </div>
  );
}



export default Greetings;