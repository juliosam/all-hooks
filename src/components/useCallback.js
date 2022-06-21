import { useState, useCallback } from "react"
import Child from "./subcomponents/child"

const UseCallback = () => {
    const [toggle, setToggle]= useState(false)
    const [data, setData] = useState("Yo, please sub to the channel") 

  
    const returnComment = useCallback((name)=>{return data + name},[data])
  
    return ( 
      <div>
        <p style={{color: 'blue'}}>useCallback</p>
        <Child returnComment={returnComment}/>
        <button onClick={()=>{setToggle(!toggle)}}>{""}Toggle</button>
        {toggle && <h1>toggle</h1>}
        <hr/>
      </div>
     );
}
 
export default UseCallback;