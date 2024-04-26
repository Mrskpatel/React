import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Img from './background.jpg';

function App() {
  return (
    <div className="App">
      <Counter Back={Img}/>
      
    </div>
  );
}

export default App;
