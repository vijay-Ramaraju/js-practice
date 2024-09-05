import React,{useState} from "react";
import Child from './Child'

function Parent() {
  const [count, setCount] = useState(0);

  const handleFunciton = React.useCallback(()=>{
    setCount(old => old + 1)
  },[])


//   const handleFunciton = () =>{
//     setCount(old => old + 1)
//   }
  console.log("Parent Component")
  
  return (
    <>
      <h1>{count}</h1>
      <Child onClick={handleFunciton} />
    </>
  );
}

export default Parent;
