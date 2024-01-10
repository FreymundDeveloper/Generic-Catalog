import React, { useState } from 'react';
import styled from 'styled-components';
import { ContainerCard, Navbar, Sidebar } from '../components';

const objTest = [{
        imageUrl: "https://static.lojanba.com/produtos/camiseta-regata-nba-adidas-swingman-chicago-bulls-rose/68/D13-0209-068/D13-0209-068_zoom1.jpg?ts=1600856952",
        seller: "Adidased",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 399.99,
        name: "Regata do Chicago Bulls"
    },
    {
        imageUrl: "https://static.lojanba.com/produtos/camiseta-regata-nba-adidas-swingman-chicago-bulls-rose/68/D13-0209-068/D13-0209-068_zoom1.jpg?ts=1600856952",
        seller: "Adidased",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 399.99,
        name: "Regata do Chicago Bulls"
    }
]

export const Home = () => {
    const [sidebarFilter, setSidebarFilter] = useState("");

    const handleSidebarFilterChange = (filterContent) => {
        setSidebarFilter(filterContent);
        console.log(sidebarFilter) // <- Use one UseEffect
    };

    return (
        <StyledContainer>
            <Navbar />
            <ContentContainer>
                <SidebarContainer>
                    <Sidebar initialContent={sidebarFilter} onContentChange={handleSidebarFilterChange} />
                </SidebarContainer>
                <ContainerCard contentFound={objTest}/>
            </ContentContainer>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    margin: 0;
`;

const ContentContainer = styled.div`
    display: flex;
    position: relative;
    margin-top: 10px;
`;

const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
`;
