import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <h1>Tarefa 1</h1>
     <p>Essa é a primeira aplicação com React do curso: React do 0 a Maestria.</p>
    </div>
  )
}

export default App
