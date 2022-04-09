import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <nav>
        <p>Teacher PayDay</p>
        <Link to='/signup'>Sign Up</Link>
      </nav>
    </div>
  );
}

export default App;
