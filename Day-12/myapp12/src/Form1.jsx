import React from 'react'
import { useState } from 'react'

function Form1() {
    const[formdata , setformdata] = useState({
        username : "",
        email : "",
        password : ""
    })

    function handleInput(e){
        const {name , value} = e.target

        setformdata({
            ...formdata,
            [name] : value
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(formdata);
    }

  return (
    <div>
        <center>
        <form onSubmit={handleSubmit}>
            <br /><br />
            <h1>Log in </h1>
            <input type="text" name="username" placeholder='Enter Username' value={formdata.username} onChange={handleInput} />
            <br /><br />
            <input type="text" name="email" placeholder='Enter Email' value={formdata.email} onChange={handleInput} />
            <br /><br />
            <input type="text" name="password" placeholder='Enter Password' value={formdata.password} onChange={handleInput} />
            <br /><br />
            <button type='submit'>Submit</button>
        </form>
        </center>
    </div>
  )
}

export default Form1