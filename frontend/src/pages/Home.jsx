import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../components';

export const Home = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <StyledContainer>
            <button onClick={openModal}>Abrir Modal</button>
            <Modal isOpen={modalOpen} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                seller="Adidased" onClose={closeModal} />
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    width: 100vh;
    margin: 0 auto;
    margin-top: 40px;

    @media (max-width: 548px) {
        max-width: 40vh;
    }
`;

export default Home;