import React from 'react'

const Challenge = () => {
   var a = 12;
   var b = 290;
   var c = 0; 
   const handleAdd = () => {
     console.log(a + b)
   }
  return (

    <div>
    <h3>{a} + {b}</h3>
    <div><button onClick={handleAdd}> Clique para somar! </button></div>
    </div>
  )
}

export default Challenge