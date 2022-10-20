import React, {createContext} from "react";

//4- importação de components
import FirstComponent from "./components/FirstComponent";

//5- desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

//6- useState
import State from "./components/State";

// 10 utilizando contexto
import Context from "./components/Context";

//8-TextOrNull
type textOrNull = string | null

type fixed = "Isso" | "Ou" | "Aquilo"

//9 context
interface IAppContext{
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  //1- variáveis
  const name: string = "Tawan";
  const age: number = 45;
  const isWorking: boolean = true;

  //2-funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  //8- type
  const myText: textOrNull = "Tem texto aqui"
  let mySecondText: textOrNull = null

  // mySecondText = "Bora bil"

  const testandoFixed: fixed = "Isso"

  //9- context
  const contextValue: IAppContext = {
    language :"JavaScript",
    framework: "Express",
    projects: 5,
  }

  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name} </h2>
      <p>idade: {age}</p>
      {isWorking && <p>Está traballhando</p>}
      <h3> {userGreeting(name)} </h3>
      <FirstComponent />
      <SecondComponent name="Segundo" />
      <Destructuring
        title="Primeiro post"
        content="Alguma coisa"
        commentsQty={10}
        tags={["ts", "js"]}
        category={Category.TS}
      />
      <Destructuring
        title="Segundo post"
        content="Outra coisa"
        commentsQty={5}
        tags={["python"]}
        category={Category.P}
      />
      <State />
        {myText && <p>Tex texto na variávrel</p> }
        {mySecondText && <p>Tex texto na variávrel</p> }
        <Context />
    </div>
    </AppContext.Provider>
  );
}

export default App;
