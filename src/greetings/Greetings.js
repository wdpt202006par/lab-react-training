import React from 'react';



const Greetings = props => {
    let language ="";

    if (props.language === "de"){
       language ="Hallo"
    }else if(props.language === "en"){
        language ="Hello"
    }else if(props.language === "es"){
        language ="Hola"
    }else{
        language ="bonjour"
    }
    return (
        
        <div className ="greetings">
          <p> {language}{props.children}</p>

        </div>
    )
}

export default Greetings;