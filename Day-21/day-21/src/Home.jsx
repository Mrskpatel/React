import React from 'react'
import { Link } from 'react-router-dom'

function Home({posts , deletPost}) {
    function handleDelete(id){
        deletPost(id)
    }
  return (
    <div>
        <h1>Welcome To Our App</h1>
        {
            posts.map((el)=>(
                <>
                    <h2>{el.title}</h2>
                    <p>{el.content}</p>
                    <button onClick={()=>handleDelete(el.id)}>Delete</button>
                    <Link to={(`/edit/:${el.id}`)}>
                    <button>Edit Blog</button>
                    </Link>
                    <br /><br /><br />
                </>
            ))
        }
        <Link to='/add'>Add Post</Link>
    </div>
  )
}

export default Home