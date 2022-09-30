import { useState } from 'react';
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {
  const n=15;
  const [name] = useState("Tawan");
  const redTitle = true;
  const redTitle2 = false;
 
  return (
    <div className="App">
      {/* css Global */}
     <h1>REACT CSS</h1>

     {/* css de componente */}
     <MyComponent />
     <p>Parágrafo do app.jsx</p>

     {/* inline CSS */}
     <p style={{color:"green", padding: "25px", backgroundColor: "magenta"}} >
      Elemento estilizado de forma inline
     </p>
     {/* CSS Inline Dinâmico */}
     <h2 style={n < 10 ? ({color:"purple"}) : ({color:"pink"})} >CSS Dinâmico</h2>
     <h2 style={n > 10 ? ({color:"purple"}) : ({color:"pink"})} >CSS Dinâmico</h2>
     <h2 style={name === "Tawan" ? ({color:"green", backgroundColor:"#000"}) : (null)} >Teste Nome</h2>
     <h2 style={name === "a" ? ({color:"green", backgroundColor:"#000"}) : (null)} >Teste Nome</h2>

     {/* Classe dinâmica */}
     <h2 className={redTitle ? ("red-title"):("title")}>Este 
     título terá classe dinâmica</h2>
     <h2 className={redTitle2 ? ("red-title"):("title")}>Este título terá classe dinâmica</h2>

     {/* CSS Modules */}
     <Title />
     <h2 >Teste modules</h2>

    </div>
  )
}

export default App
