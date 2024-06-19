import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function PostingData() {
    const[post , setPost] = useState({
        title : "",
        body : ""
    })

    const handleChange=(event)=>{
        setPost({...post , [event.target.name] : [event.target.value]})
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        axios.post('http://localhost:8000/posts',post)
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Title : <input type="text" name="title" onChange={handleChange} value={post.title} />
        Post : <input type="text" name="body" onChange={handleChange} value={post.body} />
        <button>Submit</button>
        </form>  
    </div>
  )
}

export default PostingData