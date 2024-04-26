import React from 'react'
import { useState } from 'react'

function Counter(props) {
    const[count,setCount] = useState(0);
    function increment(){
        setCount(count + 1)
    }
    function decrement(){
        if(count == 0){
            setCount(0)
        }
        else{
            setCount(count - 1)
        }
    }
    function reset(){
        setCount(0)
    }
  return (
    <div>
       <center>
        <h1>Do You Like Image ?</h1>
       <img src={props.Back}></img>
        <h1>Like : {count}</h1>
        <button onClick={increment}>Like</button>
        <button onClick={decrement}>Unlike</button>
        <button onClick={reset}>Reset</button>
       </center>
    </div>
  )
}

export default Counter