import React from 'react'
import { useState } from 'react'

function Todo() {
    const[inputValue , setInputeValue] = useState('')
    const[todos , setTodos] = useState([])

    localStorage.setItem("tooo",JSON.stringify(todos))

    function addTask(){
        let newTodos = {
            text : inputValue
        }
        setTodos([...todos , newTodos])
        setInputeValue('')
    }
  return (
    <center>
        <div id='Todo'><br />
        <b>TODO LIST</b> <br />
        <input type="text" placeholder='Enter your Task : ' value={inputValue} onChange={(e)=>setInputeValue(e.target.value)} />
        <button onClick={addTask}>Add Task</button> <br /><br />
        {
            todos.map((el,i)=>(
                <p key={i}>{el.text}</p>
            ))
        }
    </div>
    </center>
  )
}

export default Todo