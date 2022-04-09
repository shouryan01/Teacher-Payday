import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/signin' element={<SignIn />}></Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);