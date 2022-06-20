import { useState } from "react"

const UseState = () => {
  const [state, setState] = useState(0)
  const [inputValue, setInputValue] = useState("Julio")
  const handleClick = ()=>{ setState(state+1)}
  const spanFiller = (event)=>{setInputValue(event.target.value)}

  return ( 
    <div className="use-state">
      <h1>Homie!</h1>
      <p>{state}</p>
      <button onClick={handleClick}>+</button><br/>
      <input onChange={spanFiller}/>{inputValue}
    </div>
   );
}
 
export default UseState;