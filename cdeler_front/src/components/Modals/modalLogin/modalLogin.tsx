import React, { useState } from 'react';
import { MenuItem, Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Cookies from 'js-cookie';
import { StyledTextField, CustomDialog, CustomDialogTitle, CustomDialogContent, CustomDialogActions, LoginButton, CancelButton } from './modalLogin.style';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface Props {
    handleLoginClose: () => void;
  }

const LoginModal: React.FC<Props> = ({ handleLoginClose }) => { 
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('user') ? true : false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  
    const handleLoginOpen = () => {
      setOpen(true);
      setSnackbarOpen(true);
    };
  
    const handleLoginCloseModal = () => { 
      setOpen(false);
      handleLoginClose();
    };
  
    const handleLogin = async () => {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        document.cookie = `user=${JSON.stringify(data.user)}; path=/`;
        Cookies.set('user', JSON.stringify(data.user));
        setSnackbarMessage('Login successful');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
        console.log("działa gówno!!!");
        handleLoginCloseModal();
      } else {
        setSnackbarMessage('Invalid credentials');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      }
    };

    const handleSnackbarClose = () => {
      setSnackbarOpen(false);
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <StyledTextField
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </CustomDialogContent>
          <CustomDialogActions>
            <CancelButton onClick={handleLoginCloseModal}>Cancel</CancelButton> {/* Poprawiamy nazwę funkcji */}
            <LoginButton onClick={handleLogin}>Login</LoginButton>
          </CustomDialogActions>
        </CustomDialog>
        {isLoggedIn ? (
          <>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
              <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
                {snackbarMessage}
              </Alert>
            </Snackbar>
          </>
          ) : (
            <Snackbar open={snackbarOpen} autoHideDuration={500} onClose={handleSnackbarClose}>
              <Alert onClose={handleSnackbarClose} severity= "info" >
                Good luck!
              </Alert>
            </Snackbar>
          )}
      </>
    );
  };
  
  export default LoginModal;