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
import StudentProfiles from './components/Graphs/StudentProfiles'
import StudentSignUp from './components/StudentSignUp'
import InvestorSignUp from './components/InvestorSignup'

// import Stocks from './components/Graphs/Stocks'
// Ant css
import 'antd/dist/antd.min.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Dashboard />} >
          <Route path="graphs" element={<StudentProfiles />} />
          {/* <Route path="stocks" element={<Stocks />} /> */}
        </Route>
        <Route path="/welcome" element={<LandingPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/studentsignup" element={<StudentSignUp />} />
        <Route path="/investorsignup" element={<InvestorSignUp />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/dashboard/" element={<Dashboard />} >
          <Route path="graphs" element={<StudentProfiles />} />
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