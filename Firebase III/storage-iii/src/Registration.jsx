import React, { useEffect } from 'react'
import { useState } from 'react'
import { ref, set , onValue } from "firebase/database";
import { database } from './Firbase';

function Registration() {
    const [users, setUsers] = useState([]);
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

    useEffect(()=>{
        const userRef = ref(database,'users')
        onValue(userRef , (snapShot)=>{
          const data = snapShot.val()
    
          if(data){
            const userlist= Object.keys(data).map((key)=>({
              name:key,
              ...data[key]
            }))
            setUsers(userlist)
          }
          else{
            setUsers([])
          }
        })
      },[])

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
        <h2>Registered Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Registration