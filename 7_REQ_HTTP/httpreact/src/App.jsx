import "./App.css";
import { useState, useEffect } from "react";
 import { useFetch } from "./hooks/useFetch"

const url = "http://localhost:3000/products";
// const url = "http://localhost:3001/products"; teste try catch error  

function App() {
  const [products, setProducts] = useState([]);
  //4 Custom Hook
  const {data: items, httpConfig, loading, error } = useFetch(url);
  

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  // 1 - resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   }
  //   fetchData();
  // }, []);

  // 2- Adição de Produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // // 3- Carregamento dinâmico
    // const addedProduct = await res.json();
    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    //5- Refatorando POST
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  // 8- Desafio 6
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  }
  
  
  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6-Loading */}
      {loading && <p>Carregando dados...</p> }
      {error && <p>{error}</p> } 
      {!error && <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}{" "}
           <button onClick={() =>handleRemove(product.id) }>Excluir</button>
          </li>
        ))}
      </ul>}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* 7- state de loading no post */}
           {loading && <input type="submit" disabled value="Aguarde" />} 
          {!loading && <input type="submit" value="Criar" />}

        </form>
      </div>
    </div>
  );
}

export default App;