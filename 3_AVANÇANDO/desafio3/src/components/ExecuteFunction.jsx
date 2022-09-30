import React from 'react'

const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
      <button onClick={myFunction} >Clique para Função!</button>
    </div>
  )
}

export default ExecuteFunction