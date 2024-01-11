import React, { useState } from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { darken } from 'polished';

export const InputSearch = ({ onSelectionChange, onClick }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);

        onSelectionChange(`name=${value}`);
    };

    const handleSearchButtonClick = (event) => {
        event.preventDefault();
        onClick(); 
    };

    return (
        <InputContainer>
            <InputSearchStyle type="text" placeholder="Search..." value={searchValue} onChange={handleInputChange} />
            <ButtonSearch onClick={handleSearchButtonClick}>
                <FiSearch size={20} color='#FFF'/>
            </ButtonSearch>
        </InputContainer>
    );
};

const InputSearchStyle = styled.input`
    flex: 1;
    padding: 8px;
    font-size: 14px;
    border-radius: 6px 0px 0px 6px;
    max-width: 120px;
    background-color: ${(props) => props.theme.color.sidebarColor};
`;

const ButtonSearch = styled.button`
    background-color: ${(props) => props.theme.color.sidebarColor};
    border-radius: 0px 6px 6px 0px;
    margin-left: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
        background-color: ${(props) => darken(0.1, props.theme.color.sidebarColor)};
    }
`;

const InputContainer = styled.form`
    margin-top: 34px;
    margin-bottom: 15px;
    display: flex;
    border-radius: 12px;
`;
