import './App.css';

import City from "./assets/city.jpg";
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import CondicionalRender from './components/CondicionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';


function App() {
  const name = "Cirilo";
  const [userName] = useState("Valeria");

  const cars = [
    {id: 1, brand: "Chevrolet", color: "Black", newCar: true, km: 0},
    {id: 2, brand: "Oroch", color: "Orange", newCar: false, km: 23452},
    {id: 3, brand: "Kia", color: "Whithe", newCar: false, km: 65323},
  ];

  function showMessage(){
    console.log ("Evento do componente pai!")
  }

  const [ message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
     <h1>Avançando em React</h1>
     {/* imagem em public */}
     <div>
        <img src="/img1.jpg" alt="Paisagem" />
     </div>
     {/* Imagem em assests */}
     <div>
      <img src={City} alt=" Imagem da cidade" />
     </div>
     <ManageData/>
     <ListRender/>
     <CondicionalRender/>
     {/* props */}
     <ShowUserName name="Tawan" />
     <ShowUserName name={name} />
     <ShowUserName name={userName} />
     {/* destructuring */}

     <CarDetails brand="VW" km={100000} color="Black"  newCar={false} /> 
     <CarDetails brand="Ferrari" km={0} color="Red" newCar={true}  /> 
     <CarDetails brand="Fiat" km={43500} color="White"  newCar={false} /> 

     {/* loop em arays de objetos */}
     {cars.map  ((car) => (
      <CarDetails 
      key={car.id}
      brand={car.brand} 
      color={car.color} 
      km={car.km} 
      newCar={car.newCar} 
      />
     ))}

      {/* Fragment */}
      <Fragment propFragment="Teste" />

      {/* Children */}
      <Container myValue="Testing" >
        <p>Este é o conteúdo</p>
      </Container>
      <Container myValue="Testing 2" >
        <h5>Testando Container</h5>
      </Container>

      {/* Executar Função */}
      <ExecuteFunction myFunction={showMessage} />

      {/* State Lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />

    </div>
  )
}

export default App
