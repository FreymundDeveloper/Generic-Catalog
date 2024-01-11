import React, { useState } from 'react';
//import styled from 'styled-components';
import { ButtonApply, ContainerSidebar, TopicGeneral } from '../../components';

export const Sidebar = ({ initialContent, onContentChange }) => {
    const [content, setContent] = useState(initialContent);

    const handleApply = () => {
        const modifiedContent = content + 'A';

        setContent(modifiedContent);

        if (onContentChange) {
            onContentChange(modifiedContent);
        }
    };

    return (
        <ContainerSidebar>
            <TopicGeneral title="Type" options={['Camiseta', 'Regata', 'Calção', 'Acessório']}/>
            <TopicGeneral title="Available Sizes" options={['P', 'M', 'G', 'GG', 'XPP', '44', '39']}/>
            <TopicGeneral title="Seller" options={['Nike', 'Adidas', 'Puma', 'Jordan']}/>
            <TopicGeneral title="Sport" options={['Futebol', 'Basquete', 'Corrida']}/>
            <ButtonApply onClick={handleApply} />
        </ContainerSidebar>
    );
};