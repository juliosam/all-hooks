import { useState, createContext } from "react";
import Login from "./subcomponents/Login";
import User from "./subcomponents/User";

export const AppContext = createContext(null)

const UseContext = () => {
  const [username, setUsername] = useState("");
    return ( 
      <AppContext.Provider value={{username, setUsername}}>
        <Login />  
        <User />
      </AppContext.Provider>
    );
} 
export default UseContext;