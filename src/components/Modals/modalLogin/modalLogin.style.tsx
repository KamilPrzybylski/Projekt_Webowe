import styled from 'styled-components';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

export const CustomDialog = styled(Dialog)`
  && {
    .MuiPaper-root {
      background-color: rgba(51, 51, 51, 0.8); /* Półprzezroczyste tło */
      border-radius: 8px;
      color: #fff;
    }
  }
`;

export const CustomDialogTitle = styled(DialogTitle)`
  && {
    color: #e53935;
  }
`;

export const CustomDialogContent = styled(DialogContent)`
  && {
    color: #fff;
  }
`;

export const StyledTextField = styled(TextField)`
  && {
    color: #fff;
    .MuiOutlinedInput-notchedOutline {
        border-color: #e53935;
    }
    .MuiInputLabel-root {
        color: #fff;
    }
  }
`;

export const CustomDialogActions = styled(DialogActions)`
  && {
    justify-content: center;
  }
`;

export const LoginButton = styled(Button)`
  && {
    color: #fff;
    border-color: #fff;
    &:hover {
      background-color: #e53935;
      border-color: #e53935;
    }
  }
`;

export const CancelButton = styled(Button)`
  && {
    color: #fff;
    border-color: #fff;
    margin-right: 10px;
    &:hover {
      background-color: #e53935;
      border-color: #e53935;
    }
  }
`;