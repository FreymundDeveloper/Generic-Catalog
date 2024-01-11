import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ContainerCard, Navbar, Sidebar } from '../components';
import { queryParamsBuilder } from '../utils/formattingUtils'

export const Home = () => {
    const [sidebarFilter, setSidebarFilter] = useState("");
    const [objTest, setObjTest] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then(response => {
                setObjTest(response.data);
            })
            .catch(error => {
                console.error('Error to found data:', error);
            });
    }, []);

    useEffect(() => {
        console.log(sidebarFilter)
    }, [sidebarFilter]);

    const handleSidebarFilterChange = (filterContent) => {
        setSidebarFilter(queryParamsBuilder(filterContent));
    };

    return (
        <StyledContainer>
            <Navbar />
            <ContentContainer>
                <Sidebar initialContent={sidebarFilter} onContentChange={handleSidebarFilterChange} />
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
