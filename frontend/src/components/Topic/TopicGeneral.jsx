import React, { useState } from 'react';
import styled from 'styled-components';
import { formatToItem  } from '../../utils/formattingUtils';
import { ContainerCheckbox } from '../../components';

export const TopicGeneral = ({ title, options, onSelectionChange }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const formattedTitle = formatToItem(title);

    const handleCheckboxChange = (option) => {
        const isSelected = selectedOptions.includes(option);
        const updatedOptions = isSelected ? selectedOptions.filter((item) => item !== option) : [...selectedOptions, option];

        setSelectedOptions(updatedOptions);

        if (onSelectionChange) {
            onSelectionChange({
                [formattedTitle]: updatedOptions,
            });
        }
    };

    return (
        <ContainerCheckbox title={title}>
            {options.map((option, index) => (
                <CheckboxLabel key={option}>
                    <CheckboxInput type="checkbox" value={option} checked={selectedOptions.includes(option)} onChange={() => handleCheckboxChange(option)} />
                    {option}
                </CheckboxLabel>
            ))}
        </ContainerCheckbox>
    );
};

const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-bottom: 1px;
    flex-basis: 50%;
    color: ${(props) => props.theme.color.checkboxColor};
`;

const CheckboxInput = styled.input`
    margin-right: 5px;
`;
