import './App.css'
import UserDetails from "./components/UserDetails"
function App() {
 
  const cars = [
    {id: 1, brand: "Chevrolet", color: "Black", newCar: true, km: 0},
    {id: 2, brand: "Oroch", color: "Orange", newCar: false, km: 23452},
    {id: 3, brand: "Kia", color: "White", newCar: false, km: 65323},
  ];

  return (
    <div className="App">
     <h1>Desafio CSS 5</h1>

     {cars.map ((car) => (
      <UserDetails
      key={car.id}
      brand={car.brand }
      color={car.color}
      km={car.km} />
  
     ))}

    </div>
  )
}

export default App
