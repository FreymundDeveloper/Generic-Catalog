import React from 'react';
import styled from 'styled-components';
import { ContainerNavbar, ButtonNavbar } from '../../components';

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
                <ButtonNavbar>About Us</ButtonNavbar>
                <Divider />
                <ButtonNavbar>Login</ButtonNavbar>
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

const Divider = styled.div`
    height: 30px;
    width: 1px;
    background-color: white;
    border-radius: 12px;
`;