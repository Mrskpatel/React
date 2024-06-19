import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './Home';
import AddPost from './AddPost';
import EditPost from './EditPost';
 
function App() {
  const[posts , setPosts] = useState([])

  function addnewPost(title,content){
    let newPost ={
      id : new Date().getTime(),
      title : title,
      content : content
    }
    setPosts([...posts , newPost])
    
  }

  function deletPost(id){
    setPosts(posts.filter((el)=>{

    }))
  }
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path='/' element={<Home posts={posts} deletPost={deletPost} />}></Route>
        <Route path='/add' element={<AddPost addnewPost={addnewPost} />}></Route>
        <Route path='/edit/:id' element={<EditPost/>}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;