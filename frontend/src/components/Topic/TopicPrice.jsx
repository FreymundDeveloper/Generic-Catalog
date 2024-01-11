import React, { useState } from 'react';
import styled from 'styled-components';

export const TopicPrice = ({ title, maxValue, onValueChange }) => {
    const [sliderValue, setSliderValue] = useState(maxValue);

    const handleSliderChange = (event) => {
        const newValue = parseInt(event.target.value, 10);
        setSliderValue(newValue);

        if (onValueChange) {
            onValueChange(`price=${newValue}`);
        }
    };

    return (
        <SidebarTopicContainer>
            <TopicTitle>{title}</TopicTitle>
            <SliderContainer>
                <Slider type="range" min={50} max={maxValue} value={sliderValue} onChange={handleSliderChange} />
                <SliderValue>R$ {sliderValue}</SliderValue>
            </SliderContainer>
        </SidebarTopicContainer>
    );
};

const SidebarTopicContainer = styled.div`
    margin-bottom: 20px;
`;

const TopicTitle = styled.p`
    margin-bottom: 10px;
    font-size: 16px;
`;

const SliderContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Slider = styled.input`
    flex-grow: 1;
    max-width: 130px;
`;

const SliderValue = styled.span`
    margin-left: 5px;
    font-size: 12px;
    color: ${(props) => props.theme.color.checkboxColor};
`;
