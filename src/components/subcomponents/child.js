import { useEffect } from "react";

const Child = ({returnComment}) => {
  
  useEffect(()=>{
      console.log("FUNCTION WAS CANCELED");
    },[returnComment]);

    return ( 
        <div>
          {returnComment("PEDRO")}
        </div>
     );
}
 
export default Child;