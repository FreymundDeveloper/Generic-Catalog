import React from 'react';
import styled from 'styled-components';

export const ButtonApply = ({ onClick }) => {
    return (
        <Container>
            <Button onClick={onClick}>Apply</Button>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 2px;
`;

const Button = styled.button`
    background-color: ${(props) => props.theme.color.buttonColor};
    color: white;
    border: none;
    padding: 6px 10px;
    cursor: pointer;
    border-radius: 12px;
    font-size: 0.8rem;
`;
