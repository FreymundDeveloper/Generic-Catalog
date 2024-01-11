import React, { useState } from 'react';
//import styled from 'styled-components';
import { ButtonApply, ContainerDivider, ContainerSidebar, TopicGeneral } from '../../components';

export const Sidebar = ({ initialContent, onContentChange }) => {
    const [content, setContent] = useState(initialContent);

    const handleApply = () => {
        const modifiedContent = content + 'A';

        setContent(modifiedContent);

        if (onContentChange) {
            onContentChange(modifiedContent);
        }
    };

    const handleSelectionChange = (selectedCheckboxes) => {
        console.log('Opções Selecionadas:', selectedCheckboxes);
    };

    return (
        <ContainerSidebar>
            <TopicGeneral title="Type" options={['Camiseta', 'Regata', 'Calção', 'Acessório']} onSelectionChange={handleSelectionChange} />
            <ContainerDivider orientation={"width"} />
            <TopicGeneral title="Available Sizes" options={['P', 'M', 'G', 'GG', 'XPP', '44', '39']} onSelectionChange={handleSelectionChange} />
            <ContainerDivider orientation={"width"} />
            <TopicGeneral title="Seller" options={['Nike', 'Adidas', 'Puma', 'Jordan']} onSelectionChange={handleSelectionChange} />
            <ContainerDivider orientation={"width"} />
            <TopicGeneral title="Sport" options={['Futebol', 'Basquete', 'Corrida']} onSelectionChange={handleSelectionChange} />
            <ContainerDivider orientation={"width"} />
            <ButtonApply onClick={handleApply} />
        </ContainerSidebar>
    );
};