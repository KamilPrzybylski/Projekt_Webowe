import * as React from "react";
import {StyledMenuIcon, StyledMenu, StyledMenuList} from './dropDownMenu.style';
import MenuItem from '@mui/material/MenuItem';
import Cookies from "js-cookie";
import LoginModal from "../Modals/modalLogin/modalLogin";
import { useNavigate } from 'react-router-dom';
import ProfileModal from "../Modals/modalProfile/modalProfile";

const DropdownMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | SVGSVGElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate(); 

    const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        Cookies.remove('user');
        handleClose();
    };

    const handleNavigateToCars = () => {
        handleClose();
        navigate('/cars');
    };

    return (
        <StyledMenu>
            <StyledMenuIcon 
                id="openMenu" 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                 />
            <StyledMenuList
                id = "basic-menu"
                anchorEl = { anchorEl }
                open = { open }
                onClose = { handleClose }
                MenuListProps = { {
                    'aria-labelledby': 'basic-button',
            }}
            >
                <ProfileModal handleProfileClose={handleClose} />
                <MenuItem onClick={handleNavigateToCars}>Cars</MenuItem>
                <LoginModal handleLoginClose={handleClose} />
                <MenuItem onClick = { handleLogout }>Logout</MenuItem>
            </StyledMenuList>
        </StyledMenu>
    );
};

export default DropdownMenu;