import React from 'react'

const CarDetails = ({brand, km, color,newCar}) => {
  return (
    <div>
      <h2>Detalhes do carro:</h2>
      <ul>
         <li>Marca: {brand} </li>
         <li>KM: {km} </li>
         <li>Cor: {color} </li>
      </ul>
      {newCar && <h3 >Este carro é novo!</h3> }
    </div>
  )
}

export default CarDetails