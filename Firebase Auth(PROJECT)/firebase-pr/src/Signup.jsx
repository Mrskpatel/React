import React, { useState } from 'react';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from './config';


function Signup({ setShowLogin }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleGoogleSignup = () => {
        signInWithPopup(auth, provider)
            .then((data) => {
                console.log(data.user.email);
                localStorage.setItem("email", data.user.email);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="signup-container">
            <h2>Create Your Account</h2>
            <p>Create an account so you can manage your personal finances</p>
            <div className="signup-form">
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="signup-input"
                />
                <input
                    type="text"
                    placeholder="Enter Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="signup-input"
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="signup-input"
                /> <br />
                <button className="signup-button">Sign Up</button>
                <p>Sign Up With</p>
                <div className="social-buttons">
                    <button className="social-button facebook">F</button>
                    <button className="social-button google" onClick={handleGoogleSignup}>G</button>
                    <button className="social-button apple">A</button>
                </div>
                <p>
                    Already have an account? <span id='login-span' onClick={() => setShowLogin(true)}>Login</span>
                </p>
            </div>
        </div>
    );
}

export default Signup;
