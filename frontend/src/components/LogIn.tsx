import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import { Space, Card, Button, Input } from 'antd';

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
      
      localStorage.setItem('type', resJson.type);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('created_at', JSON.stringify(resJson.created_at));
      localStorage.setItem('eth_wallet_address', JSON.stringify(resJson.eth_wallet_address));
      localStorage.setItem('private_key', JSON.stringify(resJson.private_key));
      localStorage.setItem('description', JSON.stringify(resJson.description));

      localStorage.setItem('first_name', JSON.stringify(resJson.first_name));
      localStorage.setItem('last_name', JSON.stringify(resJson.last_name));


      navigate('/stocks');
    }
    validateUser();
  }

  return (
  <div>
    
    <Space align="center">
      <Card
        hoverable
        style={{
          width: 400,
          height: 500,
          margin: "50px",
          borderRadius: "20px",
          overflow: "hidden"
        }}
      >
        <h1>Login</h1>
        {/* <br /><br /><br /><br /><br /><br /><br /><br /> */}
        <Button onClick={() => loginWithRedirect()} shape="round" type="primary" size="large">Log In With Auth0</Button>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <h1>Django Login</h1>
        <Input type="email" onChange={(e) => updateEmail(e.target.value)} style={{margin:"7px"}}></Input>
        <Input type="password" onChange={(e) => updatePassword(e.target.value)} style={{margin:"7px"}}></Input>
        {/* <input type="email" onChange={(e) => updateEmail(e.target.value)} /> */}
        {/* <input type="password" onChange={(e) => updatePassword(e.target.value)} /> */}
        <Button onClick={login} shape="round" type="primary" size="large" style={{margin:"7px"}}>Login</Button>
        </Card>
      </Space>
    
  </div>
  );
}

export default LogIn;