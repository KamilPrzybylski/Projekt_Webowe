import { ContactContainer, Title, InfoContainer, InfoItem, IconWrapper, Form, StyledTextField, StyledButton, MapContainer, FormMapContainer } from './contactPageContent.style';
import { Phone, Email, LocationOn } from '@mui/icons-material';
import { texts } from '../../../assets/Dict/texts';

const { contact } = texts;

const ContactContent = () => {
    //const randomLat = 52.23 + (Math.random() - 0.5) * 0.05;
    //const randomLng = 21.01 + (Math.random() - 0.5) * 0.05;
    const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyB73sC43sjG8wlPiLOVuxfSyrA7GeNnPKA&q=Nałęczowska+10,Warszawa&zoom=15`;
  

    return (
      <ContactContainer>
        <Title>{contact.title}</Title>
        <InfoContainer>
          <InfoItem>
            <IconWrapper>
              <Phone />
            </IconWrapper>
            <span>{contact.tel}</span>
          </InfoItem>
          <InfoItem>
            <IconWrapper>
              <Email />
            </IconWrapper>
            <span>{contact.eMail}</span>
          </InfoItem>
          <InfoItem>
            <IconWrapper>
              <LocationOn />
            </IconWrapper>
            <span>{contact.location}</span>
          </InfoItem>
        </InfoContainer>
        <FormMapContainer>
          <Form>
            <StyledTextField label="Imię" variant="outlined" fullWidth />
            <StyledTextField label="Email" variant="outlined" fullWidth />
            <StyledTextField label="Wiadomość" variant="outlined" fullWidth multiline rows={4} />
            <StyledButton type="submit" variant="contained">Wyślij</StyledButton>
          </Form>
          <MapContainer>
            <iframe
              title="Google Maps"
              src={mapSrc}
              allowFullScreen
            ></iframe>
          </MapContainer>
        </FormMapContainer>
      </ContactContainer>
    );
  };
  
  export default ContactContent;