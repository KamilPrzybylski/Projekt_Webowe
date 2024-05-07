import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo-color.png';

export const HeaderContainer = styled.header`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-between;
     width: 100%;
     height: 50vh;
     padding: 0;
     margin: 0 auto;
     background-color: #f8f9fa;
`;

export const StyledLink = styled(Link)`
     color: #fff;
     text-decoration: none;
    font-size: 1.4em;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover{
        text-decoration: underline red;
        transition: text-decoration 0.5s linear;
        transition-duration: 0.5s;
        transition-timing-function: ease-in-out;
    }
    
    &:hover:after{
        
    }
    
`;

export const NavPackage = styled.div`
    width: 60vw;
    height: 100px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;

`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 15vh;
    background-color: #000;
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 85vh;
    background-color: #656565;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: inherit;
    background-position: center;
`;

export const MiniLogo = styled.img`
    margin-left: 5px;
     width: 350px;
     height: 100px;
`;
