import * as React from "react";
import {StyledMenuIcon, StyledMenu, StyledMenuList} from './dropDownMenu.style.tsx';
import MenuItem from '@mui/material/MenuItem';
import LoginModal from "../Modals/modalLogin/modalLogin.tsx";

const DropdownMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <StyledMenu>
            <StyledMenuIcon 
                id="openMenu" 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick = { handleClick }
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
                <MenuItem onClick = { handleClose } >Profile</MenuItem>
                <MenuItem onClick = { handleClose } >My account</MenuItem>
                <LoginModal handleLoginClose={handleClose} />
                <MenuItem onClick = { handleClose }>Logout</MenuItem>
            </StyledMenuList>
        </StyledMenu>
    );
};

export default DropdownMenu;