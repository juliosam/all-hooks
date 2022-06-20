import { useReducer } from "react";

  const UseReducer = () => {
      
    const reducer=(state,action)=>{
      switch (action.type) {
        case "INCREMENT":
        return{count:state.count + 1, showText:state.showText};
        case "toggleShowtext":
        return{count:state.count , showText:!state.showText};     
        default:
        return state  }}
    const[state, dispatch] = useReducer(reducer, {count:0, showText:true}) 
  return (                                                                                                                                               
    <div className="use-reducer">
      <h1>{state.count}</h1>
      <button
      onClick={()=>{
        dispatch({type:"INCREMENT"})
        dispatch({type:"toggleShowtext"})        
      }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          }
      >Click here
      </button>
      {state.showText && <p>This is a text</p>}  
    </div>
   );
}
export default UseReducer;