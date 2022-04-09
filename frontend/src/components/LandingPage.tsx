import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="App">
        <Link to="/login">Login</Link>
        <br />
        <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default LandingPage;