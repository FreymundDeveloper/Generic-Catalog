import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../Modal/Modal';

export const Card = ({ cardData }) => {
    const { imageUrl, name, price, description, seller } = cardData;
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

  return (
    <Container>
        <CardContainer onClick={openModal}>
            <CardImage src={imageUrl} alt={name} />
            <CardContent>
                <CardName>{name}</CardName>
                <CardPrice>R$ {price}</CardPrice>
            </CardContent>
        </CardContainer>
        <Modal isOpen={modalOpen} description={description} seller={seller} onClose={closeModal} />
    </Container>
  );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 200px;
  margin: 16px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.color.cardColor};
  cursor: pointer;
`;

const CardImage = styled.img`
  width: 180px;
  height: 150px;
  object-fit: cover;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 12px;
`;

const CardContent = styled.div`
  padding: 12px;
`;

const CardName = styled.h3`
  font-size: 16px;
  margin: 8px 0;
  text-align: left;
`;

const CardPrice = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #06b600;
  text-align: right;
`;