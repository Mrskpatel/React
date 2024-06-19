import React from 'react'
import { useState } from 'react'

export default function Controlled() {
    const[inputValue , setinputeValue] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        alert(`${inputValue}`)
    }
  return (
    <div>
        <center> <br /><br /><br /><br /><br /><br /><br /><br />
        <form action="" onSubmit={handleSubmit}>
            <input type="text" value={inputValue} placeholder='Enter Your Name' onChange={(e)=>setinputeValue(e.target.value)} /> <br />
            <button  type='submit'>Submit</button>
        </form>
        </center>
    </div>
  )
}
