import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ContainerCard, ContainerHome, Navbar, Sidebar } from '../components';
import { queryParamsBuilder } from '../utils/formattingUtils'

export const Home = () => {
    const [sidebarFilter, setSidebarFilter] = useState("");
    const [objTest, setObjTest] = useState([]);

    useEffect(() => {
        let apiUrl = 'http://localhost:3001/products';
    
        if (sidebarFilter !== "") {
            apiUrl += sidebarFilter;
        }
    
        axios.get(apiUrl)
            .then(response => {
                setObjTest(response.data);
            })
            .catch(error => {
                console.error('Error to found data:', error);
            });
    }, [sidebarFilter]);
    

    const handleSidebarFilterChange = (filterContent, name) => {
        setSidebarFilter(queryParamsBuilder(filterContent, name));
    };

    return (
        <ContainerHome>
            <Navbar />
            <ContentContainer>
                <Sidebar initialContent={sidebarFilter} onContentChange={handleSidebarFilterChange} />
                <ContainerCard contentFound={objTest}/>
            </ContentContainer>
        </ContainerHome>
    );
};

const ContentContainer = styled.div`
    display: flex;
    position: relative;
    margin-top: 10px;
`;