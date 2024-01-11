import React, { useState } from 'react';
//import styled from 'styled-components';
import { ButtonApply, ContainerSidebar } from '../../components';

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
            <ButtonApply onClick={handleApply} />
        </ContainerSidebar>
    );
};