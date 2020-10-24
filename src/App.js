import React from 'react';
import logo from './logo.svg';
import './App.css';

function IdCard(props){
  return (
    <div class="idCard">
      <div>
        <img src={props.picture} alt="p"></img>
      </div>
      <div>
        <p>First name:{props.firstName}</p>
        <p>Last name:{props.lastName}</p>
        <p>Gender:{props.gender}</p>
        <p>Height:{props.height}</p>
        <p>Birth:{props.birth}</p>
      </div>
    </div>)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <IdCard picture="https://randomuser.me/api/portraits/men/44.jpg" firstName ="John" lastName="Doe" gender="male" height="1.78m" birth="Tue Jul 15 1992"/>
        <IdCard picture="https://randomuser.me/api/portraits/women/44.jpg" firstName ="Obrien" lastName="Dolored" gender="female" height="1.72m" birth="Tue May 12 1993"/>
      </header>
    </div>
  );
}

export default App;
