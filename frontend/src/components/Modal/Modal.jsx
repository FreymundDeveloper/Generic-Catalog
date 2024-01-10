import React from 'react';
import styled from 'styled-components';

export const Modal = ({ isOpen, description, seller, onClose }) => {
    return (
        <ModalWrapper isOpen={isOpen}>
            <ModalContent>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                <SellerTitle>Seller: {seller}</SellerTitle>
                <AboutContent>About the product:</AboutContent>
                <Description>{description}</Description>
            </ModalContent>
        </ModalWrapper>
    );
};

const ModalWrapper = styled.div`
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
    background: ${(props) => props.theme.color.modalColor};
    width: 50%;
    max-width: 400px;
    padding: 20px;
    position: relative; /* Adicionado para posicionar o botão dentro do ModalContent */
    border-radius: 12px;
`;

const CloseButton = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: white;
`;

const SellerTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: white;
    text-align: left;
`;

const AboutContent = styled.h5`
    font-size: 1rem;
    margin-bottom: 10px;
    margin-top: 10px;
    color: white;
    text-align: left;
`;

const Description = styled.p`
    color: white;
    font-size: 1rem;
    margin-top: 10px;
`;
