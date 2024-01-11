import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../../components';

export const Card = ({ cardData }) => {
    const { available_sizes, image_url, name, price, details, seller } = cardData;
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
            <CardImage src={image_url} alt={name} />
            <CardContent>
                <CardName>{name}</CardName>
                <PriceContainer>
                    {Array.isArray(available_sizes) && available_sizes.length === 0 && (
                          <SoldOutText>Sold Off</SoldOutText>
                    )}
                    <CardPrice>R$ {price}</CardPrice>
                </PriceContainer>
            </CardContent>
        </CardContainer>
        <Modal isOpen={modalOpen} description={details} seller={seller} onClose={closeModal} />
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
    height: 42px;
    margin: 8px 0;
    text-align: left;
`;
const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CardPrice = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: #06b600;
    text-align: right;
`;

const SoldOutText = styled.p`
    font-size: 12px;
    font-weight: bold;
    color: red;
    text-align: left;
`;