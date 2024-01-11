import React from 'react';
import styled from 'styled-components';

export const ContainerNavbar = ({ children }) => {
    return (
        <Container>{children}</Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1px;
    background-color: ${(props) => props.theme.color.navbarColor};
    color: white;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`;