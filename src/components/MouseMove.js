import { useRef } from 'react'
import Circle from './Circle'

const MouseMove = () => {
    const circleRef = useRef(null )

    const handleMouseMove = (e) =>{
       const circle = circleRef.current
      //  console.log(circleRef)
      // if(circle){
      setTimeout(()=>{
        circle.style.left = `${e.clientX}px`
        circle.style.top  = `${e.clientY}px`
        
      },50) 
    // }
    
  }
  
  return (
    
    <div onMouseMove={handleMouseMove}>
        <div style={{height:'100vh'}}>
        <Circle ref ={circleRef} />
        </div>

    </div>
  )
}

export default MouseMove