import { useRef } from "react";
import Button from "./subcomponents/btn";

const UseImperative = () => {
    const ref = useRef(null)
  return ( 
    <div>
      <p style={{color: 'blue'}}>useImperative</p>
      <button
      onClick={()=>{ref.current.alterToggle()}}
      >Button From Parent</button>
      <Button ref={ref}/>   
      <hr/>
    </div>
   );
}
 
export default UseImperative;