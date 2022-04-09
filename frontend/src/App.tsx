import React from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import './App.css';

// Components
import LandingPage from './components/LandingPage';
import LogIn from './components/LogIn';
import LogOut from './components/LogOut';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import NotFoundPage from './components/NotFoundPage';
import GraphsContainer from './components/Graphs/GraphsContainer'

// Ant css
import 'antd/dist/antd.min.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Dashboard />} >
          <Route path="graphs" element={<GraphsContainer />} />
        </Route>
        <Route path="/welcome" element={<LandingPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<LogOut />} />
        {/* <Route path="/dashboard" element={<PrivateRoute />} >
          <Route path="" element={<Dashboard />} />
        </Route> */}
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