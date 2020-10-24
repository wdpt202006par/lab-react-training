import React from 'react'

const langueGreetings = {
fr: 'Bonjour',
de: 'Hallo',
es: 'Hola',
en:'Hello'
}

let result = "";

function Greetings (props) {
    var arrayGreetings = Object.keys(langueGreetings);
    console.log(arrayGreetings);
    console.log(props.lang);
    arrayGreetings.forEach(el => {
        if (props.lang === el){
            result = langueGreetings[el] + " " + props.children + "";
            console.log(result)
        }
    })

    return(<div>
       <p>{result}</p>
    </div>)
}

export default Greetings