import './App.css'
import UserDetails from "./components/UserDetails"
function App() {
 
  const cars = [
    {id: 1, brand: "Chevrolet", color: "Black", newCar: true, km: 0},
    {id: 2, brand: "Oroch", color: "Orange", newCar: false, km: 23452},
    {id: 3, brand: "Kia", color: "Whithe", newCar: false, km: 65323},
  ];

  const people = [
    {id:1, name: "Tawan", age: 20, job: "Programador" },
    {id:2, name: "Alves", age: 25, job: "Model" },
    {id:3, name: "Souza", age: 10, job: "Student" },
  ];

  return (
    <div className="App">
     <h1>Desafio 4</h1>
     {people.map ((person) => (
      <UserDetails
      key={person.id}
      name={person.name }
      age={person.age}
      job={person.job} />
  
     ))}

    </div>
  )
}

export default App
