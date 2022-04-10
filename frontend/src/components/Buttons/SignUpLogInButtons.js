import React from 'react';
import { Link } from 'react-router-dom';
import { BtnsContainer, SignUpBtn, LogInBtn } from '../Buttons/style';

export const SignUpLoginBtns = () => {
  return (
    <BtnsContainer>
      <Link to="/login">
        <LogInBtn>Log In</LogInBtn>
      </Link>
      <Link to="/signup">
        <SignUpBtn>Sign Up</SignUpBtn>
      </Link>
    </BtnsContainer>
  );
};