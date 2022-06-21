import { useEffect, useMemo, useState } from "react";

const UseMemo = () => {
  const [toggle, setToggle]= useState(false)
  const [data, setData] = useState(null) 
  useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/comments/")
      .then((res)=>res.json())
      .then((data)=>setData(data))
  },[])

  const findLongestName = (comments) =>{
      if (!comments) return null;
      let longestName = "";
      for (let i = 0; i < comments.length; i++){
          let currentName = comments[i].name;
          if(currentName.length > longestName.length){
              longestName = currentName;
          }
      }
      console.log(comments[0])
      console.log("this was computed")
      return longestName
  }

  const getLongestName = useMemo(()=>findLongestName(data),[data])

  return ( 
    <div>
      <p style={{color: 'blue'}}>useMemo</p>
      <h1>{getLongestName}</h1>
      <button onClick={()=>{setToggle(!toggle)}}>{""}Toggle</button>
      {toggle && <h1>toggle</h1>}
      <hr/>
    </div>
   );
}
 
export default UseMemo;