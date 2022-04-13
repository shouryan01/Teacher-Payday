import React from 'react';
import { HeaderCont } from './style';
import Navbar from '../Navbar/Navbar';
import { SignUpLoginBtns } from '../Buttons/SignUpLogInButtons';

export default function Header() {
  return (
    <HeaderCont>
      <div className="app-name">Ed|xCHANGE</div>
      <Navbar />
      <SignUpLoginBtns />
    </HeaderCont>
  );
}