import React from 'react'
import { useState } from 'react'

function Comp(props) {
    const [count,setCount]=useState(0)

    function increment(){
        setCount(count + 1)
    }

    function Decrement(){
        if(count == 0){
            setCount(0)
        }else{
            setCount(count - 1)
        }
    }

    function reset(){
        setCount(0)
    }

  return (
  
      <div>
            <img src={props.Image}/>
        <h1>Likes : {count}</h1>
        <button onClick={increment} id='left'>Like</button>
        <button onClick={Decrement}>Deslike</button>
        <button onClick={reset}>Reset</button>
        
    </div>
    
   
  )
}

export default Comp