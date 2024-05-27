import "./Footer.style.tsx";
import miniLogo from "../../png/logo-white.png";
import { FooterContainer, Side, ImgSide } from "./Footer.style.tsx";
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
      <FooterContainer>
        <Side>
          <ul>
            <li><Link to="/users">Lista użytkowników</Link></li>
            <li><Link to="/sitemap">Mapa strony</Link></li>
            <li><Link to="/reservations">Rezerwacje</Link></li>
            <li><Link to="/schedule">Terminarz</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
            <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">API</a></li>
          </ul>
        </Side>
        <ImgSide>
          <img src={miniLogo} alt="Logo-white-version" />
          <p>&copy; 2024 CDealer.<br/>Wszelkie prawa zastrzeżone.</p>
        </ImgSide>
        <Side>
          <p>Autorzy: </p>
          <p>Wojciech Weiss</p>
          <p>Jakub Wierzejewski</p>
          <p>Kamil Przybylski</p>
        </Side>
      </FooterContainer>
    );
  };
  
  export default Footer;