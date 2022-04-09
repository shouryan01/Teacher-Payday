import React from 'react';
import { useEffect, useState } from 'react'


function SignUp() {
  const [firstName, updateFirstName] = useState('');
//   useEffect(() => {
//     async function get(){
//       let res = await fetch('http://localhost:8000/api/investmentusers/');
//       let json = await res.json();
//       console.log(json)
//     }
//     get()
//   }, []);

  function handleClick(){
    // async function post(){
    //   const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ firstName: firstName })
    //   };
    //   let res = await fetch('http://localhost:8000/create/investmentuser', requestOptions);
    //   let json = await res.json();
    //   console.log(json);
    // }
    // post();
  }

  return (
    <div className="App">
      <input type="text" onChange={(e) => updateFirstName(e.target.value)} />
      <button onClick={handleClick}>Sign Up</button>
    </div>
  );
}

export default SignUp;