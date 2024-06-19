import React from 'react'
import { useState } from 'react'

function Form() {
    const[formdata , setformdata] = useState({
        username : "",
        email : "",
        password : ""
    })
    const[errors , setErrors] = useState({})

    function handleInput(e){
        const{name , value} = e.target
        
        setformdata({
            ...formdata,
            [name] : value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formdata);

        let errors = validate(formdata)
        if(Object.keys(errors).length === 0){
            alert("Submited")
        } else{
            setErrors(errors)
        }

        function validate(values){
            let errors = {}
            let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

            if(!values.username){
                errors.username = "Username Is Required"
            }

            if(!regex.test(values.email)){
                errors.email = "Email Is Required"
            }

            if(!values.password){
                errors.password = "Password Is Required"
            } else if(values.password.length < 8){
                errors.password = "Minimum 8 Characters Are Required"
            }
            return errors
        }
    }
  return (
    <div>
        <center>
        <form onSubmit={handleSubmit}> <br />
        {/* <label>Enter Username :</label> */}
        <input type="text" name="username" placeholder='Enter Username' value={formdata.username} onChange={handleInput} />
        <br /><span style={{color : "red"}}>{errors.username}</span>
        
        {/* <label>Enter Email :</label> */}
        <input type="text" name="email" placeholder='Enter Email' value={formdata.email} onChange={handleInput} />
        <br /><span style={{color : "red"}}>{errors.email}</span>
        
        {/* <label>Enter Password :</label> */}
        <input type="text" name="password" placeholder='Enter Password' value={formdata.password} onChange={handleInput} />
        <br /><span style={{color : "red"}}>{errors.password}</span>
        <br />
        <button type='submit'>Submit</button>
    </form>
        </center>
    </div>
  )
}

export default Form