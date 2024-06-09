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
  margin: 5px 0;
`;

export const CustomDialog = styled(Dialog)`
  .MuiPaper-root {
    background-color: rgba(51, 51, 51, 0.8);
    color: #fff;
  }
`;

export const CustomDialogTitle = styled(DialogTitle)`
  background-color: #ff0000;
  color: #fff;
`;

export const CustomDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
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