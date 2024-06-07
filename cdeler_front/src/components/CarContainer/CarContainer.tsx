import React from 'react';
import { CarModel, CarManufacturer, DetailsGrid, DetailItem, InfoContainer, CarImage, ImageContainer, CarDetailsContainer } from './CarContainer.style.tsx';

interface CarDetailsProps {
  image: string;
  model: string;
  manufacturer: string;
  details: string;
}

const CarDetails: React.FC<CarDetailsProps> = ({ image, model, manufacturer, details }) => {

    const detales = details.split(';');
    console.log(detales);

    return (
      <CarDetailsContainer>
        <ImageContainer>
          <CarImage src = { `src/png/photos/${image}`} alt='car photo' />
        </ImageContainer>
        <InfoContainer>
          <CarModel>{model}</CarModel>
          <CarManufacturer>{manufacturer}</CarManufacturer>
          <DetailsGrid>
            {detales.map((detail, index) => (
              <DetailItem key = { index } > { detail } </DetailItem>
            ))}
          </DetailsGrid>
        </InfoContainer>
      </CarDetailsContainer>
    );
  };

export default CarDetails;