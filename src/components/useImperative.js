import { useRef } from "react";
import Button from "./subcomponents/btn";

const UseImperative = () => {
    const ref = useRef(null)
  return ( 
    <div>
      <button
      onClick={()=>{ref.current.alterToggle()}}
      >Button From Parent</button>
      <Button ref={ref}/>   
    </div>
   );
}
 
export default UseImperative;