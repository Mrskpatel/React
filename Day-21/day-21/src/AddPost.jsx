import React from 'react'
import { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'

function AddPost({addnewPost}) {
    const[title , setTitle] = useState('')
    const[content , setContent] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        addnewPost(title , content)
        navigate('/')
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Title : </h1>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} /> <br /><br /><br />

            <h1>Content : </h1>
            <textarea value={content} onChange={(e)=>setContent(e.target.value)} />
            <br /><br /><br />

            <button type='submit'>Add Post</button>
        </form>
        <br /><br /><br />
        <Link to='/'>Back To Home</Link>
    </div>
  )
}

export default AddPost