import React, { useState, useEffect } from 'react';
//import styled from 'styled-components';
import { ButtonApply, ContainerDivider, ContainerSidebar, TopicGeneral, TopicPrice } from '../../components';

export const Sidebar = ({ initialContent, onContentChange }) => {
    const [content, setContent] = useState(initialContent);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleApply = () => {
        if (onContentChange) {
            onContentChange(content);
        }
    };

    useEffect(() => {
        setContent(selectedOptions);
    }, [selectedOptions, setSelectedOptions]);

    const handleSelectionChange = (selectedCheckboxes) => {
        setSelectedOptions((prevSelectedOptions) => {
            const updatedOptions = {
                type: (prevSelectedOptions[0] === undefined ? [] : prevSelectedOptions[0]),
                availableSizes: (prevSelectedOptions[1] === undefined ? [] : prevSelectedOptions[1]),
                seller: (prevSelectedOptions[2] === undefined ? [] : prevSelectedOptions[2]),
                sport: (prevSelectedOptions[3] === undefined ? [] : prevSelectedOptions[3]),
                price: (prevSelectedOptions[4] === undefined ? "price=600" : prevSelectedOptions[4]),
            };
    
            Object.keys(selectedCheckboxes).forEach((key) => {
                updatedOptions[key] = selectedCheckboxes[key];
            });
    
            const updatedOptionsArray = Object.values(updatedOptions);
    
            if (updatedOptionsArray.length > 5) updatedOptionsArray.length = 5;
    
            return updatedOptionsArray;
        });
    };
    
    const handleMaxValueChange = (newValue) => {
        setSelectedOptions((prevSelectedOptions) => {
            const updatedOptionsArray = [
                (prevSelectedOptions[0] === undefined ? [] : prevSelectedOptions[0]),
                (prevSelectedOptions[1] === undefined ? [] : prevSelectedOptions[1]),
                (prevSelectedOptions[2] === undefined ? [] : prevSelectedOptions[2]),
                (prevSelectedOptions[3] === undefined ? [] : prevSelectedOptions[3]),
                newValue,
            ].slice(0, 5);
    
            return updatedOptionsArray;
        });
    };

    return (
        <ContainerSidebar>
            <TopicPrice title="Price" maxValue={600} onValueChange={handleMaxValueChange} />
            <ContainerDivider orientation={"width"} />
            <TopicGeneral title="Type" options={['Camiseta', 'Regata', 'Calção', 'Acessório']} onSelectionChange={(selectedCheckboxes) => handleSelectionChange(selectedCheckboxes)} />
            <ContainerDivider orientation={"width"} />
            <TopicGeneral title="Available Sizes" options={['P', 'M', 'G', 'GG', 'XPP', '44', '39']} onSelectionChange={(selectedCheckboxes) => handleSelectionChange(selectedCheckboxes)} />
            <ContainerDivider orientation={"width"} />
            <TopicGeneral title="Seller" options={['Nike', 'Adidas', 'Puma', 'Jordan']} onSelectionChange={(selectedCheckboxes) => handleSelectionChange(selectedCheckboxes)} />
            <ContainerDivider orientation={"width"} />
            <TopicGeneral title="Sport" options={['Futebol', 'Basquete', 'Corrida']} onSelectionChange={(selectedCheckboxes) => handleSelectionChange(selectedCheckboxes)} />
            <ContainerDivider orientation={"width"} />
            <ButtonApply onClick={handleApply} />
        </ContainerSidebar>
    );
};