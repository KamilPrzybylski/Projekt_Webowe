import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-between;
     width: 100%;
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
    height: 35vh;
    background-color: #656565;
    z-index: 1;

    & img {
        height: 80%;
        width: auto;
    }
`;

export const MiniLogo = styled.img`
    margin-left: 5px;
     width: auto;
     height: 100px;
`;
