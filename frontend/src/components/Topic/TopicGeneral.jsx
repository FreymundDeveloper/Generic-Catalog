import React, { useState } from 'react';
import styled from 'styled-components';

export const TopicGeneral = ({ title, options }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (option) => {
        const isSelected = selectedOptions.includes(option);

        if (isSelected) {
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    return (
        <TopicContainer>
            <p>{title}</p>
            <CheckboxList>
              {options.map((option, index) => (
                <CheckboxLabel key={option}>
                    <CheckboxInput type="checkbox" value={option} checked={selectedOptions.includes(option)} onChange={() => handleCheckboxChange(option)} />
                    {option}
                </CheckboxLabel>
              ))}
            </CheckboxList>
        </TopicContainer>
    );
};

const TopicContainer = styled.div`
  margin-bottom: 2px;

  p {
    margin-bottom: 1px;
    margin-left: 2px;
    font-size: 16px;
  }
`;

const CheckboxList = styled.ul`
  list-style-type: none;
  margin-top: 5px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 1px;
  flex-basis: 50%;
`;

const CheckboxInput = styled.input`
  margin-right: 5px;
`;
