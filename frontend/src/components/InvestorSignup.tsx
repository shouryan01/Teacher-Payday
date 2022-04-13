import React from 'react';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Space, Card, Button, Input } from 'antd';

function InvestorSignUp() {
    const [firstName, updateFirstName] = useState('');
    const [lastName, updateLastName] = useState('');
    const [email, updateEmail] = useState('');
    const [password, updatePassword] = useState('');
    const [privKey, updatePrivKey] = useState('');
    const [address, updateAddress] = useState('');
    const [signedUp, updateStatus] = useState(false);

    const validateEmail = (email: string) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    function createInvestor(){
        updateFirstName(firstName.replace(/\s+/g, ''));
        updateLastName(lastName.replace(/\s+/g, ''));
        updateEmail(email.replace(/\s+/g, ''));

        if(firstName.length == 0 || firstName.length > 20){
            alert('First name must be longer than 0 characters and less than 20.');
            return;
        }
        else if(lastName.length == 0 || lastName.length > 20){
            alert('Last name must be longer than 0 characters and less than 20.');
            return;
        }
        else if(email.length == 0 || !validateEmail(email)){
            alert('Email must be valid and longer than 0 characters.')
            return;
        }
        else if(password.replace(/\s+/g, '').length != password.length || password.replace(/\s+/g, '').length == 0 || password.length > 20){
            alert('Password must not have whitespace, must be longer than 0 characters, and must be less than 20.');
            return;
        }

        async function createUser(){
            let json = {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    password: password,
                    email: email,
                    private_key: privKey,
                    eth_wallet_address: address,  
                    type: 'investor'
                }) 
            }
            let res = await fetch('http://localhost:8000/create/user', json);
            let resJson = await res.json();
            console.log(resJson);
            if(resJson.message == 'success!'){
                updateStatus(true);
            }
            else{
                alert('An error occurred, please try again later.');
            }
        }
        createUser();
    }

    return (
        <div className="App">
            {!signedUp ? <div>
                <Space align="center">
                    <Card
                        hoverable
                        style={{
                        width: 400,
                        height: 550,
                        margin: "50px",
                        borderRadius: "20px",
                        overflow: "hidden"
                        }}
                    >   
                        <h1>Investor Sign Up</h1>
                        <Input type='text' placeholder='First Name' onChange={(e) => updateFirstName(e.target.value)} style={{margin:"7px"}}></Input>
                        <Input type='text' placeholder='Last Name' onChange={(e) => updateLastName(e.target.value)} style={{margin:"7px"}}></Input>
                        <Input type='email' placeholder='Email' onChange={(e) => updateEmail(e.target.value)} style={{margin:"7px"}}></Input>
                        <Input type='password' placeholder='Password' onChange={(e) => updatePassword(e.target.value)} style={{margin:"7px"}}></Input>

                        <Input type='password' placeholder='Private Key' onChange={(e) => updatePrivKey(e.target.value)} style={{margin:"7px"}}></Input>
                        <Input type='password' placeholder='Wallet Access' onChange={(e) => updateAddress(e.target.value)} style={{margin:"7px"}}></Input>

                       

                        <Button onClick={createInvestor} shape="round" type="primary" size="large" style={{margin:"7px"}}>Sign Up!</Button>
                        </Card>
                    </Space>
                {/* <input type='text' placeholder='First Name' onChange={(e) => updateFirstName(e.target.value)}></input>
                <input type='text' placeholder='Last Name' onChange={(e) => updateLastName(e.target.value)}></input>
                <input type='email' placeholder='Email' onChange={(e) => updateEmail(e.target.value)}></input>
                <input type='password' placeholder='Password' onChange={(e) => updatePassword(e.target.value)}></input>
                <input type='password' placeholder='Private Key' onChange={(e) => updatePrivKey(e.target.value)}></input>
                <input type='password' placeholder='Wallet Address' onChange={(e) => updateAddress(e.target.value)}></input>
                <button onClick={createInvestor}>Sign Up!</button> */}
            </div> : (
            
            <div>
                <h1>All Signed Up!</h1>
                <Link to='/login'>Sign In Now</Link>
            </div>
            )}
        </div>
    );
}

export default InvestorSignUp;