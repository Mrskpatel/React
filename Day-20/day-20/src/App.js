import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './Home';
import AddPost from './AddPost';
 
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
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path='/' element={<Home posts={posts} />}></Route>
        <Route path='/add' element={<AddPost addnewPost={addnewPost} />}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;