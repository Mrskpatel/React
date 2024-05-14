import React from 'react'
import { Link } from 'react-router-dom'

function Home({posts}) {
  return (
    <div>
        <h1>Welcome To Our App</h1>
        {
            posts.map((el)=>(
                <>
                    <h2>{el.title}</h2>
                    <p>{el.content}</p>
                </>
            ))
        }
        <Link to='/add'>Add Post</Link>
    </div>
  )
}

export default Home