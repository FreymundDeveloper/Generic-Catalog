import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { ContainerNavbar } from '../../components';

import LogoNav from '../../assets/imgs/logo.png'

export const Navbar = () => {
    const callReload = () => {
        window.location.reload();
    }

    return (
        <ContainerNavbar>
            <LeftSection onClick={callReload}>
                <Logo src={LogoNav} alt="Logo" />
            </LeftSection>
            <RightSection>
                <Button>About Us</Button>
                <Divider />
                <Button>Login</Button>
            </RightSection>
        </ContainerNavbar>
    );
};

const LeftSection = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    width: 100px;
    height: 50px;
    margin-left: 10px;
    cursor: pointer;
`;

const RightSection = styled.div`
    display: flex;
    margin-right: 10px;
    padding-right: 2px;
`;

const Button = styled.button`
    background-color: ${(props) => props.theme.color.navbarColor};
    color: white;
    border: none;
    padding: 8px 12px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => darken(0.1, props.theme.color.navbarColor)};
    }
`;

const Divider = styled.div`
    height: 30px;
    width: 1px;
    background-color: white;
    border-radius: 12px;
`;