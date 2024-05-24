import "./headerstyles.style.tsx"
import logo from '../../png/logo1.png'
import colorLogo from "../../png/logo-no-background.png";
import {HeaderContainer, LogoContainer, MiniLogo, Nav, NavPackage, StyledLink} from "./headerstyles.style.tsx";
import DropdownMenu from "../dropDownMenu";

const Header = () => {
    return (
        <HeaderContainer>
            <Nav>
                <MiniLogo src={logo} />
                <NavPackage>
                    <StyledLink to="/about">About</StyledLink>
                    <StyledLink to="/faq">FAQ</StyledLink>
                    <StyledLink to="/terms">Terms</StyledLink>
                    <DropdownMenu />
                </NavPackage>
            </Nav>
            <LogoContainer title="logo" >
                <img src={colorLogo} alt={"logo"}/>
            </LogoContainer>
        </HeaderContainer>

    );
};

export default Header;