import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LogIn() {
  const navigate = useNavigate();

  const { loginWithRedirect } = useAuth0();
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');

  const validateEmail = (email: string) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  function login(){
    updateEmail(email.replace(/\s+/g, ''));
    if(!validateEmail(email) || email.length == 0){
      alert('Email must be valid and longer than 0 characters.')
      return;
    }
    else if(password.replace(/\s+/g, '').length != password.length || password.replace(/\s+/g, '').length == 0 || password.length > 20){
      alert('Password must not have whitespace, must be longer than 0 characters, and must be less than 20.');
      return;
    }
    async function validateUser(){
      let json = {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password: password,
            email: email
        }) 
      }
      let res = await fetch('http://localhost:8000/verify', json);
      let resJson = await res.json();
      if(!resJson.exists) {
        alert('Email and password combo do not exists in database.');
        return;
      }
      else alert('Logged in! Navigating to dashboard.');

      if(resJson.type == 'investor'){
        navigate('/');
      }
      else{

      }
    }
    validateUser();
  }

  return (
  <div>
    <h1>Login with Auth0</h1>
    <button onClick={() => loginWithRedirect()}>Log In</button>
    <h1>Or with Email and Password</h1>
    <input type="email" onChange={(e) => updateEmail(e.target.value)} />
    <input type="password" onChange={(e) => updatePassword(e.target.value)} />
    <button onClick={login}>Login</button>
  </div>
  );
}

export default LogIn;