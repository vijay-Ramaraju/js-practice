import React from 'react'
import useCustomHook from './useCustomHook'

const Custom = () => {
    const [count,increament,decrement] = useCustomHook(1)
  return (
    <>
    <h1>{count}</h1>
    <button onClick={increament}>Increment</button>    
    <button onClick={decrement}>Decrement</button>
    </>

  )
}

export default Custom