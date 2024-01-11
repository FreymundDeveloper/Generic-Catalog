import React from 'react';
import styled from 'styled-components';

export const ContainerDivider = ({ orientation }) => {
    return <StyledDivider orientation={orientation} />;
};

const StyledDivider = styled.div`
    height: ${({ orientation }) => (orientation === 'height' ? '30px' : '1px')};
    width: ${({ orientation }) => (orientation === 'width' ? '185px' : '1px')};
    background-color: white;
    border-radius: 12px;
`;