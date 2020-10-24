import React from 'react';
import './App.css';
import IdCard from './IdCard';
import Greetings from './Greetings';



function App() {
  return (
    <div className="App">
      
        <IdCard picture="https://randomuser.me/api/portraits/men/44.jpg" firstName ="John" lastName="Doe" gender="male" height="1.78m" birth="Tue Jul 15 1992"/>
        <IdCard picture="https://randomuser.me/api/portraits/women/44.jpg" firstName ="Obrien" lastName="Dolored" gender="female" height="1.72m" birth="Tue May 12 1993"/>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
    </div>
  );
}

export default App;
