import React from "react";
import { useState } from "react";

function Loggin() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  function handleIn() {
    setisLoggedIn(true);
  }
  function handleOut() {
    setisLoggedIn(false);
  }

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Welcome To Our Website</h1>
          <button onClick={handleOut}>Log Out</button>
        </>
      ) : (
        <>
          <h1>Please LogIn :</h1>
          <button onClick={handleIn}>Log In</button>
        </>
      )}
    </div>
  );
}

export default Loggin;
