import "./headerstyles.style"
import logo from '../../png/logo1.png'
import colorLogo from "../../png/logo-no-background.png";
import {HeaderContainer, LogoContainer, MiniLogo, Nav, NavPackage, StyledLink} from "./headerstyles.style";
import DropdownMenu from "../dropDownMenu/index";
import React from "react";

const Header = () => {
    return (
        <HeaderContainer data-testid="header-container">
            <Nav>
                <StyledLink to="/">
                    <MiniLogo src={logo} />
                </StyledLink>
                <NavPackage data-testid="nav-package">
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