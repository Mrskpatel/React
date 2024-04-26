import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Background from './Background';
import Case from './Case';
import Fixed from './Fixed';

function App() {
  return (
    <div className="App">
      <Header/>
      <Background/>
      <Case/>
      <Fixed/> 
    </div>
  );
}

export default App;
