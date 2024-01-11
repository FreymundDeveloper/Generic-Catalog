import React from 'react';
import styled from 'styled-components';
import { Card } from '../../components';

export const ContainerCard = ({ contentFound }) => {
    return (
        <Container>
          {contentFound.map((cardData, index) => (
            <Card key={index} cardData={cardData} />
          ))}
        </Container>
    );
};

const Container = styled.div`
    margin-left: 220px;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 90px;
    justify-content: flex-start;
    align-items: flex-start;

    @media (max-width: 1230px) {
      margin-top: 120px;
    }
`;