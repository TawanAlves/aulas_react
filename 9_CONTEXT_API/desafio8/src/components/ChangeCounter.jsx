// 3 - alterando contexto
import { useContext } from "react";
import { CounterContext, CounterContextProvider } from "../context/CounterContext";

const ChangeCounter = () => {
   const {counter, setCounter} = useContext(CounterContext)

  return (
    <div>
      <button onClick={() => setCounter(counter +1)}>Add Counter</button>
    </div>
  )
}

export default ChangeCounter