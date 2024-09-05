import React from 'react'
import useFetchCustom from './hooks/useFetchCustom'

const JsonObj = () => {
    const {data,loading} = useFetchCustom()
  
    if (loading){
        return(
            <div>
                <p>Loading...</p>
            </div>
        )
    }
    return (
    <div>
        
        <ul>
           {data.map((user) =>(
            <li style={{listStyleType:"none"}}>{user.firstname}</li>
           ))}
        </ul>
    </div>
  )
}

export default JsonObj
