import React, { useState } from 'react';
import { MenuItem } from '@mui/material';
import { StyledTextField, CustomDialog, CustomDialogTitle, CustomDialogContent, CustomDialogActions, LoginButton, CancelButton } from './modalLogin.style';

interface Props {
    handleLoginClose: () => void;
  }

const LoginModal: React.FC<Props> = ({ handleLoginClose }) => { 
    const [open, setOpen] = useState(false);
  
    const handleLoginOpen = () => {
      setOpen(true);
    };
  
    const handleLoginCloseModal = () => { 
      setOpen(false);
      handleLoginClose();
    };
  
    const handleLogin = () => {
      // logika logowania, wysłanie danych do db
      handleLoginCloseModal(); // Zamknięcie okna modalnego po zalogowaniu
    };
  
    return (
      <>
        <MenuItem onClick={handleLoginOpen}>Login</MenuItem>
        <CustomDialog open={open} onClose={handleLoginCloseModal}>
          <CustomDialogTitle>Login</CustomDialogTitle>
          <CustomDialogContent>
            <StyledTextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <StyledTextField
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </CustomDialogContent>
          <CustomDialogActions>
            <CancelButton onClick={handleLoginCloseModal}>Cancel</CancelButton> {/* Poprawiamy nazwę funkcji */}
            <LoginButton onClick={handleLogin}>Login</LoginButton>
          </CustomDialogActions>
        </CustomDialog>
      </>
    );
  };
  
  export default LoginModal;