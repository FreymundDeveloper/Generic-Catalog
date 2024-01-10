import React from 'react';
import styled from 'styled-components';
import { Card, Navbar } from '../components';

const objTest = {
    imageUrl: "https://static.lojanba.com/produtos/camiseta-regata-nba-adidas-swingman-chicago-bulls-rose/68/D13-0209-068/D13-0209-068_zoom1.jpg?ts=1600856952",
    seller: "Adidased",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 399.99,
    name: "Regata do Chicago Bulls"
}

export const Home = () => {

    return (
        <StyledContainer>
            <Navbar />
            <Card cardData={objTest}></Card>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vh;
    height: 100vh;
    margin: 0;

    @media (max-width: 548px) {
        max-width: 40vh;
    }
`;

export default Home;