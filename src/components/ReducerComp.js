import { useReducer } from "react";

const defaultVals = {
  count: 0,
  name: "calculation",
};
const Increment = {
  type: "increament",
};
const Decrement = {
  type: "decrement",
};
const Reset = {
  type:'reset'
}
const ReducerComp = () => {
  const reducerFucntion = (state,action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case "increament":
  
        return {
          ...state,
          count: state.count < 10 ? state.count + 1: state.count,
          name: "increament",
        };
        case 'decrement':
          return{
            ...state,
            count : state.count - 1

          }
          case 'reset':
            return{
              ...state,
              count: 0
            }
            default :
            return state
            
    }
  };

  const [state, dispatch] = useReducer(reducerFucntion, defaultVals);

  
  return (
    <>
    <div style={{}}>
      <h1>{state.count}</h1>
      <button style={{margin:"5px",padding:"10px",border:"1px solid #dfdfdf",borderRadius:"10px"}} 
      onClick={()=> dispatch(Increment)}>Increment</button>
      <button
      style={{margin:"5px",padding:"10px",border:"1px solid #dfdfdf",borderRadius:"10px"}} 
      onClick={ () => dispatch(Reset)}>Reset</button>
      <button
      style={{margin:"5px",padding:"10px",border:"1px solid #dfdfdf",borderRadius:"10px"}} 
      onClick={()=> dispatch(Decrement)}>Decrement</button>
    </div>
    </>
  );
};
export default ReducerComp;
