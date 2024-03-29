import React from 'react';
import styled from 'styled-components';
import { ContainerNavbar, ButtonNavbar, ContainerDivider } from '../../components';

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
                <ContainerDivider orientation={"height"} />
                <ButtonNavbar>Contact</ButtonNavbar>
                <ContainerDivider orientation={"height"} />
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
    filter: brightness(1) saturate(100%) hue-rotate(200deg);
`;

const RightSection = styled.div`
    display: flex;
    margin-right: 10px;
    padding-right: 2px;
`;