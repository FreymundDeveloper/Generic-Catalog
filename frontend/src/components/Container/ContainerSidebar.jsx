import React from 'react';
import styled from 'styled-components';

export const ContainerSidebar = ({ children }) => {
    return (
        <Container>
            <SidebarWrapper>
                <SidebarContent>
                    {children}
                </SidebarContent>
            </SidebarWrapper>
        </Container>
    );
};

const Container= styled.div`
    display: flex;
    position: relative;
    margin-top: 10px;
`;

const SidebarWrapper = styled.div`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    background: ${(props) => props.theme.color.sidebarColor};
`;

const SidebarContent = styled.div`
    padding: 6px;
    margin-top: 35px;
    text-align: left;
    color: white;
    flex-direction: column;
`;