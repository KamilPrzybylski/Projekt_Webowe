import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-between;
     width: 100%;
     height: auto;
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
    height: auto;
    background-color: #000;
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    background-color: #656565;
    z-index: 1;

    & img {
        margin: 20px;
        height: auto;
        width: 33%;
    }
`;

export const MiniLogo = styled.img`
    padding: 15px;
    width: 90%;
    height: auto;
`;
