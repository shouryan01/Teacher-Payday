import styled from 'styled-components';

export const BtnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
  align-items: center;
`;

const Button = styled.button`
  background: none;
  font-weight: bold;
  border: none;
  font-size: 1.125rem;
  font-family: inherit;
  cursor: pointer;
  font-weight: bold;
  color: white;
`;

export const LogInBtn = styled(Button)`
  color: #eca72c;
`;

export const SignUpBtn = styled(Button)`
  /* border: 0.125rem solid #96c5f7; */
  border: 0.125rem solid #eca72c;
  /* border: 0.125rem solid white; */
  /* color: #eca72c; */
  /* border-radius: 1.5rem; */
  border-radius: 1.125rem;
  padding: 0.5rem 1.125rem 0.5rem 1.125rem;
`;