import React, { useState } from 'react';
import styled from 'styled-components';

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
        <SidebarWrapper>
            <SidebarContent>
                <ApplyContainer>
                    <ApplyButton onClick={handleApply}>Apply</ApplyButton>
                </ApplyContainer>
            </SidebarContent>
        </SidebarWrapper>
    );
};

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

const ApplyContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 2px;
`;

const ApplyButton = styled.button`
    background-color: ${(props) => props.theme.color.buttonColor};
    color: white;
    border: none;
    padding: 6px 10px;
    cursor: pointer;
    border-radius: 12px;
    font-size: 0.8rem;
`;
