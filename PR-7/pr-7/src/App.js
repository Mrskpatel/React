import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
import ShowUser from './ShowUser';
import AddUser from './AddUser';
import EditUser from './EditUser';

function App() {
    
  const[posts,setPosts]=useState([])


  function addpost(name,emp_id,phone,emp_add,dep)
  {
      let newpost={
        id:new Date().getTime(),
        name:name,
        emp_id:emp_id,
        phone:phone,
        emp_add:emp_add,
        dep:dep
      }
      setPosts([...posts,newpost])
  }

  // console.log(posts)

  function delpost(id)
  {
    setPosts(posts.filter((el)=>(
     el.id !==id
    )))
  }

  function editpost(id,name,emp_id,phone,emp_add,dep)
  {
    let updatepost=posts.map((post)=>(
      post.id===id ? {...post,name:name,emp_id:emp_id,phone:phone,emp_add:emp_add,dep:dep}    : post

    ))
    setPosts(updatepost)
  }
 
  return (

    <Router>
     <div className="App">

      <Routes>

        <Route path='/' element={<ShowUser posts={posts} delpost={delpost}/>}></Route>
        <Route path='/add' element={<AddUser addpost={addpost}/>}></Route>
        <Route path='/edit/:id' element={<EditUser editpost={editpost} posts={posts}/>}></Route>
        
      </Routes>
     
     </div>
    </Router>
   
  );
}

export default App;
