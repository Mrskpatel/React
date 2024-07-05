import React from 'react'
import { useState } from 'react'
import { ref, set } from "firebase/database";
import { database } from './Firbase';

function Registration() {
    const [name, setName] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState({ name: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        let hasError = false;

        if (name.trim() === '') {
            setError(prev => ({ ...prev, name: 'User name is required' }));
            hasError = true;
        } else {
            setError(prev => ({ ...prev, name: '' }));
        }

        if (password.trim() === '') {
            setError(prev => ({ ...prev, password: 'Password is required' }));
            hasError = true;
        } else {
            setError(prev => ({ ...prev, password: '' }));
        }

        if (!hasError) {
            const newUserRef = ref(database, `users/${name}`);
            set(newUserRef, { name, password });
            setName('');
            setpassword('');
        }
    };

  return (
    <div>
        <h1>Registration From</h1>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="name">User Name</label> 
            <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your user name" /> 
            {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Enter your password" /> 
            {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Registration