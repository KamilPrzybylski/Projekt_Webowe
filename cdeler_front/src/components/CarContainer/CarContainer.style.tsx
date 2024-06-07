import { Grid } from '@mui/material';
import styled from 'styled-components';

export const CarDetailsContainer = styled(Grid)`
  min-width: calc(80% / 3 - 20px);
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #333;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
`;

export const ImageContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const CarImage = styled.img`
  max-width: 100%;
  height: 190px;
  width: auto;
  border-radius: 10px;
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CarModel = styled.h2`
  color: #ff0000;
  margin: 10px 0;
`;

export const CarManufacturer = styled.h3`
  margin: 10px 0;
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
`;

export const DetailItem = styled.div`
background-color: #444;
padding: 10px;
border-radius: 5px;
text-align: center;
`;
