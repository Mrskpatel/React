import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Product({ addnewPost }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const[image,setimage]=useState(null)
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        addnewPost(title, content,image)
        navigate('/')
    }

    function handlechange(e){
        setimage(e.target.files[0])
    }

    return (
        <center>
            <div className="add-post-container">
                <h2 id='menu-add'>ADD MENU</h2>
                <form onSubmit={handleSubmit}>
                    <input value={title} placeholder='Name : ' onChange={(e) => setTitle(e.target.value)} /> 

                    <input value={content} placeholder='Product : ' onChange={(e) => setContent(e.target.value)}/> 

                    <input type="file" placeholder='Photo : ' onChange={handlechange} id='file'/>

                    <button type='submit'>Add Product</button><br/><br/><br/>
                </form>

                <Link to="/" id='link'>Back To Product page</Link>
            </div>
        </center>
    )
}

export default Product