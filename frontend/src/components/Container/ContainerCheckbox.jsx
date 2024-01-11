import React from 'react';
import styled from 'styled-components';

export const ContainerCheckbox = ({ title, children }) => {

    return (
        <TopicContainer>
            <p>{title}</p>
            <CheckboxList>{children}</CheckboxList>
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