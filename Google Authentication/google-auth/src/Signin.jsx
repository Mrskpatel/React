import React, { useEffect, useState } from 'react';
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from './Config';
import Home from './Home';
import { FcGoogle } from "react-icons/fc";

function Signin() {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user);
        localStorage.setItem("email", data.user.email);
        console.log(data.user)
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      });
  };

  const handleEmailPasswordSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      });
  };

  const handleSignOut = () => {
    setValue("");
    localStorage.removeItem("email");
  };

  useEffect(() => {
    let useremail = localStorage.getItem("email");
    if (useremail) {
      setValue(useremail);
    }
  }, []);

  console.log(value.displayName)

  return (
    <div >
      {value ? (
       <>
          <Home onSignOut={handleSignOut} ans={value.displayName} pic={value.photoURL} em={value.email}/>
         
       </>
     
      ) : (
        <div className='signin-container'>
        
          <form  className='signin-form' onSubmit={handleEmailPasswordSignIn}>
            <div>
          <h1>Sign In</h1>

              <label>Email:</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div>
              <label>Password:</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <button onClick={handleSignIn}> <FcGoogle className='gicon'/> &nbsp;&nbsp; Sign in with Google</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Signin;