import React from 'react'

const Child = (props) => {
    const {onClick} = props
    console.log("Child Component")
  return (
    <div>
        <button style={{padding:"10px", border:"1px solid #000",
            borderRadius:"5px",fontSize:"18px", backgroundColor:"transparent"}} onClick={onClick}> 
            Onclick
        </button>
    </div>
  )
}

export default React.memo(Child);