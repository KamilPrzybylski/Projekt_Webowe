import styled from "styled-components";
import { Container } from '@mui/material';

export const FAQContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  background-color: rgba(51, 51, 51, 0.8); /* Półprzezroczyste tło */
  color: #fff;
  padding: 40px;
  border-radius: 8px;
  max-width: 1200px;
  margin: 40px auto; /* Wyśrodkowanie kontenera */
`;

export const Title = styled.h1`
  color: #e53935;
  margin-bottom: 20px;
`;

export const FAQItem = styled.div`
  width: 90%;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #e53935;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.5); /* Półprzezroczyste tło dla każdego FAQ */
`;

export const Question = styled.h2`
  color: #e53935;
  margin-bottom: 10px;
`;

export const Answer = styled.p`
  margin: 0;
`;