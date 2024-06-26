import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="app-container">
      {showLogin ? (
        <Signin setShowLogin={setShowLogin} />
      ) : (
        <Signup setShowLogin={setShowLogin} />
      )}
    </div>
  );
}

export default App;
