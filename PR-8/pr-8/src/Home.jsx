import React from 'react';
import { Link } from 'react-router-dom';


function Home({ posts , deletPost }) { 
    function handleDelet(id){
        deletPost(id)
      }
      
        return (
          <center>
            <div>
            <h1 className='suphed'>Welcome To our Shop</h1>
            {
              posts.map((el) => (
                <div key={el.id} id='box'> 
                  <h2 id='head'>Title : {el.title}</h2>
                  <h2 id='para'>Content : {el.content}</h2>
                  <img src={URL.createObjectURL(el.image)} alt="post" id='img' style={{height : '100px', width : '100px'}}/>
      
                  <br/><br/>
                
                  <button onClick={()=>handleDelet(el.id)} id='btndel'>Delete</button>
      
                  <Link to={`/edit/${el.id}`}>
                    <button id='edit'>Edit</button>
                  </Link>
                </div>
              ))
            }
            <Link to="/add" id='link'>ADD MENU </Link>
          </div>
          </center>
        );
}

export default Home