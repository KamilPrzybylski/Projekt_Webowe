import "./headerstyles.style.tsx"
import logo from '../../../public/logo1.png'
import {HeaderContainer, LogoContainer, MiniLogo, Nav, NavPackage, StyledLink} from "./headerstyles.style.tsx";

const Header = () => {
    return (
        <HeaderContainer>
            <Nav>
                <MiniLogo src={logo} />
                <NavPackage>
                    <StyledLink to="/home">Strona 1</StyledLink>
                    <StyledLink to="/about">Strona 2</StyledLink>
                    <StyledLink to="/catalog">Strona 3</StyledLink>
                </NavPackage>
            </Nav>
            <LogoContainer />
        </HeaderContainer>

    );
};

export default Header;