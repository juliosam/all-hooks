import { useContext } from "react";
import { AppContext } from "../useContext";

const Login = () => {
  const {setUsername} = useContext(AppContext);
  return ( 
    <div>
      <input
        onChange={(event)=>{
        setUsername(event.target.value)}}
      />
    </div> );
}
export default Login;