import React from 'react';
import IdCard from './card/Idcard'
import Greetings from './greetings/Greetings'
import Random from './random/Random'
import BoxColor from './boxColor/BoxColor'
import CreditCard from './creditCard/CreditCard'
import Rating from './rate/rate'
import DriverCard from './driverCard/driverCard'
import LikeButton from './likeButton/LikeButton'
import ClickablePicture from './ClickablePicture'
import './App.css';


function App() {
  return (
    <div>
      <IdCard lastName='Doe'
        firstName='John'
        gender='male'
        height='178'
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"/>
      <IdCard lastName='Delores '
        firstName='Obrien'
        gender='female'
        height="172"
        birth="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"/>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="es">Juan</Greetings>
        <Greetings lang="en">John</Greetings>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222" />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" />
        <Rating rate='0' />
        <Rating rate='1.49' />
        <Rating rate='1.5' />
        <Rating rate='3' />
        <Rating rate='4' />
        <Rating rate='5' />
        <Rating rate='4.9' />
        <DriverCard
          name="Travis Kalanick"
          rating='4.2'
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
        }} />
        <DriverCard
          name="Dara Khosrowshahi"
          rating='4.9'
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
        }} />
        <LikeButton />
        <LikeButton />
        <ClickablePicture
          img='/img/persons/maxence.png'
          imgClicked='/img/persons/maxence-glasses.png'
        />
    </div>
  );
}

export default App;
