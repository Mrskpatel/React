import React, { useState, useEffect } from 'react';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from './config';
import Home from './Home';


function Signin({ setShowLogin }) {
    const [value, setValue] = useState('');

    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then((data) => {
                setValue(data.user.email);
                localStorage.setItem("email", data.user.email);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        let userEmail = localStorage.getItem("email");
        if (userEmail) {
            setValue(userEmail);
        }
    }, []);

    return (
        <div className="signin-container">
            {value ? <Home setValue={setValue} /> : (
                <div className="auth-form">
                    <input type="email" placeholder="Enter Your Email" className="auth-input" />
                    <input type="password" placeholder="Enter Password" className="auth-input" />
                    <button className="auth-button">Sign In</button>
                    <div className="separator">or sign in with</div>
                    <button className="google-button" onClick={handleClick}>Sign in with Google</button>
                    <p>
                        Don't have an account? <span id='login-span' onClick={() => setShowLogin(false)}>Sign up</span>
                    </p>
                </div>
            )}
        </div>
    );
}

export default Signin;
