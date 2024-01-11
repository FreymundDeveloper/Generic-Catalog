import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

export const ButtonNavbar = ({ children, onClick }) => {
    return (
        <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
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
