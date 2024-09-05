import React, { useEffect, useReducer, useState } from 'react';

// function CelsiusInput(props) {
//   const { celsius, handleChangeCelsius } = props;

//   return (
//     <div>
//       <label>Celsius: </label>
//       <input
//         type="number"
//         value={celsius}
//         onChange={(e) => handleChangeCelsius(e.target.value)}
//       />
//     </div>
//   );
// }

// function FahrenheitInput(props) {
//   const { fahrenheit } = props;

//   return (
//     <div>
//       <label>Fahrenheit: </label>
//       <input type="text" value={fahrenheit} disabled />
//     </div>
//   );
// }

const defaultVal ={
  count:0,
  loading:false,
  name:'calculation'
}
const Increment ={
  type:"increment"
}
const Decrement ={
  type:"decrement"
}
const Reset ={
  type:"reset"
}
function TemperatureConverter() {
  const reducerFunction = (state, action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
      case "increment":
        return{
          ...state,
          count: state.count + 1,
          name: "increment"
        }
        case 'decrement':
          return{
            ...state,
            count: state.count -1,
            name:'decrement'
          }
          case 'reset':
            return{
              ...state,
              count:0,
              name : 'reset'
            }
            default: return state
    }
  }
  const [state, dispatch] = useReducer(reducerFunction, defaultVal)
  // const [celsius, setCelsius] = useState(0);
  // const [time,setTimer] = useState(null)
  // const [count,setCounter] = useState(0)

  // const handleChangeCelsius = (newCelsius) => {
  //   setCelsius(parseFloat(newCelsius));
  // };

  // const fahrenheit = (celsius * (9 / 5)) + 32;
  // useEffect(()=>{
  //   function updatedFunc(){
  //     const date = new Date()
  //   const newYear = new Date(date.getFullYear()+1,0,1)
  //   let remaining = newYear - date;
  //   setTimer(remaining)
  //   // setCounter(prev=> prev+1)
  //   }
  //   const clear = setInterval(updatedFunc,1000) 
  //   return ()=> clearInterval(clear)
  // },[])
  
  

// HOC
// const daimeter = (value)=>{
//   return value * value;
// }

// const area = (value) =>{
//   return Math.PI * value * value
// }
// const addintion

  // function actions(arr,add){
  //   let newArr = []
  //   for (let i of arr){
  //     newArr.push(add(i))
  //   }
  //   return newArr
  // }

  // const arrs = [1,2,4,5]  
// console.log(actions(arrs,daimeter))
// console.log(actions(arrs,area))

// HOC end

// Callback Hell

// function firstFunction(data,callback){
//   setTimeout(()=>{
//     console.log(`First function ${data}`)
//     callback(data + 1)
//   },1000)
// }
// function secondFunction(data,callback){
//   setTimeout(()=>{
//     console.log(`second function ${data}`)
//     callback(data + 1)
//   },1000)
// }

// function thirdFunction(data,callback){
//   setTimeout(()=>{
//     console.log(`Third function ${data}`)
//     callback(data + 1)
//   },1000)
// }

// firstFunction(0,handleSecondFunction)
// function handleSecondFunction(result1){
//     secondFunction(result1,handleThirdFunction)
// }
// function handleThirdFunction(result2){
//   thirdFunction(result2,(final)=>{
//     // console.log(`final function end ${result2}`)
//   })
// }
// firstFunction(0,(result1)=>{
//     secondFunction(result1,(result2)=>{
//         thirdFunction(result2,(result3)=>{
//           console.log(`final function end ${result3}`)
//         })
//     })
// })

// setTimeout(()=>{
// console.log("TIMER")
// },5000)
// function x(y){
//   console.log('x')
//   y();
// }
// x(function y(){
//   console.log('y')
// })



  
  return (
    <div>
      <h1>
      {state.count}
        {/* {time} */}
        </h1>
      <button 
      onClick={()=>dispatch(Increment)} 
      style={{padding:"5px",margin:"5px",borderRadius:"5px",outline:"none",fontSize:"16px"}}>
        
         Increment</button>
      <button 
      onClick={()=>dispatch(Decrement)} 
      style={{padding:"5px",margin:"5px",borderRadius:"5px",outline:"none",fontSize:"16px"}}
      >
      Decrement
      </button>
      <button
       onClick={()=>dispatch(Reset)} 
       style={{padding:"5px",margin:"5px",borderRadius:"5px",outline:"none",fontSize:"16px"}}
      >Reset</button>
      {/* <CelsiusInput celsius={celsius} handleChangeCelsius={handleChangeCelsius} />
      <FahrenheitInput fahrenheit={fahrenheit.toFixed(2)} /> */}
    </div>
  );
}

export default TemperatureConverter;