import React, { useState } from 'react';
import styled from 'styled-components';
import { ButtonApply } from '../../components';

export const Sidebar = ({ initialContent, onContentChange }) => {
    const [content, setContent] = useState(initialContent);

    const handleApply = () => {
        const modifiedContent = content + 'A';

        setContent(modifiedContent);

        if (onContentChange) {
            onContentChange(modifiedContent);
        }
    };

    return (
        <ContainerSidebar>
            <SidebarWrapper>
                <SidebarContent>
                    <ButtonApply onClick={handleApply} />
                </SidebarContent>
            </SidebarWrapper>
        </ContainerSidebar>
    );
};

const ContainerSidebar = styled.div`
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
    padding: 20px;
    margin-top: 40px;
    text-align: left;
    color: white;
    flex-direction: column;
`;