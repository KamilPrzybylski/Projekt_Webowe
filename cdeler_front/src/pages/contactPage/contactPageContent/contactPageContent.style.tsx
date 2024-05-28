import styled from 'styled-components';
import { Container, TextField, Button } from '@mui/material'
//import { Container } from '../../aboutPage/aboutPageContent/AboutPageContainer.style'

export const ContactContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 40px;
  border-radius: 8px;
`;

export const Title = styled.h1`
  color: #e53935;
  margin-bottom: 20px;
  text-align: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const IconWrapper = styled.div`
  margin-right: 10px;
  color: #e53935;
`;

export const FormMapContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`;

export const StyledTextField = styled(TextField)`
  && {
    margin: 10px 0;
    .MuiInputBase-root {
      color: #fff;
    }
    .MuiOutlinedInput-notchedOutline {
      border-color: #e53935;
    }
    .MuiInputLabel-root {
      color: #e53935;
    }
  }
`;

export const StyledButton = styled(Button)`
  && {
    background-color: #e53935;
    color: #fff;
    margin-top: 20px;

    &:hover {
      background-color: #d32f2f;
    }
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin-left: 20px;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 8px;
  }
`;