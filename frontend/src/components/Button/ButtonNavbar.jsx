import React, { useState } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

export const ButtonNavbar = ({ children }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => { // Since the button does nothing, call an alert!
    setShowAlert(true);

    setTimeout(() => {
        setShowAlert(false);
    }, 1000);
  };

  return (
    <>
      <ButtonStyled onClick={handleButtonClick}>{children}</ButtonStyled>
      {showAlert && (
        <AlertMessage>
          Under Maintenance!
        </AlertMessage>
      )}
    </>
  );
};

const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.color.navbarColor};
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => darken(0.1, props.theme.color.navbarColor)};
  }
`;

const AlertMessage = styled.div`
  position: fixed;
  font-size: 14px;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => props.theme.color.checkboxColor};
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  z-index: 1000;
`;
