import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu'


export const StyledMenu = styled.div`
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledMenuList = styled(Menu)`
  .MuiPaper-root {
    background-color: #222222 !important;
    width: 14rem;
    color: #fff;
  }
`;


export const StyledMenuIcon = styled(MenuIcon)`
  color: #fff;
  position: ablolute;
  font-size: 3rem !important;
`;

