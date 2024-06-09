import styled from "styled-components";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
  } from '@mui/material';

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const UserDetail = styled.p`
  margin: 0.32vh;
  border-bottom: 1px solid rgba(255, 255, 255, 0.8);
`;

export const CustomDialog = styled(Dialog)`
  .MuiPaper-root {
    background-color: rgba(51, 51, 51, 0.8);
    border-radius: 8px;
    color: #fff;
  }
`;

export const CustomDialogTitle = styled(DialogTitle)`
  background-color: #e53935;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1.7rem;
`;

export const CustomDialogAction = styled.div`
  color: white;
  width: 100%;
  height: 22.5px;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align items: center;
  
  & li {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    width: 80%;
    background-color: rgba(51, 51, 51, 0.8);
    box-shadow: inset 0px 0px 6px 2px rgba(2, 2, 2, 1);
  }
  
`

export const CustomDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 1px;
  line-height: 22px;
`;

export const CustomDialogActions = styled(DialogActions)`
  display: flex;
  justify-content: center;
`;

export const CancelButton = styled(Button)`
  color: #fff;
  background-color: #333;
  &:hover {
    background-color: #555;
  }
`;