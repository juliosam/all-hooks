import { useRef, useState } from "react";

const UseRef = () => {

  const inputRef = useRef(null)
  const [title, setTitle] = useState("Pedro")
  
  const handleClick = ()=>{
    setTitle(inputRef.current.value)
    inputRef.current.value = ""
  }

  return ( 
    <div>
      <h1>{title}</h1>
      <input type="text" placeholder="Ex..." ref={inputRef}/>
      <button onClick={handleClick}>change name</button>
    </div>
   );
}
export default UseRef;