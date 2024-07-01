import React from 'react';
import { getAuth, linkWithCredential, EmailAuthProvider } from "firebase/auth";
import { auth , provider } from './Config';
import Home from './Home';
import { useState , useEffect } from 'react';

function Email() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div>Email</div>
  )
}

export default Email