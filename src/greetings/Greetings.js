import React from 'react';
import './Greetings.css'

function Greetings (props) {
    let greeting;
    switch (props.lang) {
        case 'de': greeting='Hallo';
        break;
        case 'fr': greeting='Bonjour';
        break;
        case 'es': greeting='Hola';
        break;
        case 'en': greeting='Hello';
        break;
        default: greeting='Hi';
    }
    return <p id='greetings'>{greeting} {props.children}</p>
}

export default Greetings;