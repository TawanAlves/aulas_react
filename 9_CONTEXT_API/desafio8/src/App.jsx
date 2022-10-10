import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//components
import Navbar from './components/Navbar';

//pags
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';


function App() {
  

  return (
    <div className="App">
      <h1>Contex</h1>
      <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/about' element={<About /> } />
        <Route path='/products' element={<Products /> } />
      </Routes>
      </BrowserRouter>      
    </div>
  )
}

export default App
