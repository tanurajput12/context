import { useState } from "react";
import Comp1 from "./comp1";
import { createContext } from "react";
const myContext=createContext();
const App=()=>{
  const [name,setName]=useState("welcome");
  return(
    <>
    <h1>Context:{name} </h1>
    <myContext.Provider value={{name}}>
      <Comp1/>
    </myContext.Provider>
    </>
  )
}
export default App;
export {myContext};
