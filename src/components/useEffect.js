import { useEffect, useState } from "react";

const UseEffect = () => {

  const [data, setData]= useState("");

  const getter = async ()=>{
   const fetcher = await fetch('https://api.imgflip.com/get_memes');
   const json = await fetcher.json();
   setData(json.data.memes[Math.floor(Math.random()*100)].name)
   console.log("scrapi")
  }
  useEffect(()=>{getter()},[])
    return ( 
        <div>{data}</div>
     );
}
export default UseEffect;