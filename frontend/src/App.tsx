import React from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import './App.css';

// Components
import LandingPage from './components/LandingPage';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import NotFoundPage from './components/NotFoundPage';

// Ant css
import 'antd/dist/antd.min.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<PrivateRoute />} >
          <Route path="" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;


function PrivateRoute() {
  const authenticated = true
  return authenticated ? <Outlet /> : <Navigate to="/login" />;
}