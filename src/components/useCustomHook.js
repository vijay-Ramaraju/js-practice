import React, {useState, useEffect } from 'react'

const useCustomHook = (initail=0) => {
    const [count,setCount] = useState(initail)

    
        const increment = () => {
            setCount(prev => prev + 1)
        }
        const decrement = () =>{
            setCount(prev => prev - 1)
        }
    
        return [count ,increment,decrement]
    

  
}

export default useCustomHook