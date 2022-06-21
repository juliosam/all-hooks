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
      <p style={{color: 'blue'}}>useRef</p>
      <h1>{title}</h1>
      <input type="text" placeholder="Ex..." ref={inputRef}/>
      <button onClick={handleClick}>change name</button>
      <hr/>
    </div>
   );
}
export default UseRef;