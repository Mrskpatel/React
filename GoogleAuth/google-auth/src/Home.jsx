import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from './config';

function Home({ setValue }) {
    const handleSignOut = () => {
        signOut(auth).then(() => {
            localStorage.removeItem("email");
            setValue('');
            console.log("Sign-out successful.");
        }).catch((error) => {
            console.error("An error happened during sign-out:", error);
        });
    };

    return (
        <div className="home-container">
            <h1>Welcome Home</h1>
            <button className="signout-button" onClick={handleSignOut}>Sign out</button>
            <form className="example-form">
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Home;
