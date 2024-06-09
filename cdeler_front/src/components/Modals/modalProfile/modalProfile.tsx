import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import {CustomDialog, CustomDialogTitle, CustomDialogContent, CustomDialogActions, UserInfo, UserDetail, CancelButton, CustomDialogAction} from './modalProfile.style.tsx';
import { Avatar, MenuItem } from '@mui/material';
import LoginModal from '../modalLogin/modalLogin.tsx';

interface Props {
    handleProfileClose: () => void;
  }

  const ProfileModal: React.FC<Props> = ({ handleProfileClose }) => {
    const [open, setOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('user') ? true : false);
    const [user, setUser] = useState<{ email: string; nr_tel: string; name: string; surname: string; }>({
      email: '',
      nr_tel: '',
      name: '',
      surname: '',
    });
  
    useEffect(() => {
      const userData = Cookies.get('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }, []);
  
    const handleProfileOpen = () => {
      setOpen(true);
    };

    const handleLoginClose = () => {
      setIsLoggedIn(true);
    };

    const handleLogout = () => {
      Cookies.remove('user');
      setIsLoggedIn(false);
    };
  
    const handleProfileCloseModal = () => {
      setOpen(false);
      handleProfileClose();
    };
  
    return (
      <>
        <MenuItem onClick={handleProfileOpen}>Profile</MenuItem>
        <CustomDialog open={open} onClose={handleProfileCloseModal}>
          <CustomDialogTitle>
            Profile 
            {user?.email ? (
                <Avatar sx={{ bgcolor: '#595959', width: 56, height: 56 }} >
                  {user.email.charAt(0).toUpperCase()}
                </Avatar>
              ) : (
                <Avatar sx={{ bgcolor: '#595959', width: 56, height: 56 }}>?</Avatar>
              )}
          </CustomDialogTitle>
          <CustomDialogContent>
            <UserInfo>
              <UserDetail>Email: {user?.email || 'N/A'}</UserDetail>
              <UserDetail>Phone Number: {user?.phone || 'N/A'}</UserDetail>
              <UserDetail>First Name: {user?.firstName || 'N/A'}</UserDetail>
              <UserDetail>Last Name: {user?.lastName || 'N/A'}</UserDetail>
            </UserInfo>
          </CustomDialogContent>
          <CustomDialogAction>
            {isLoggedIn ? (
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                ) : (
                    <LoginModal handleLoginClose={handleLoginClose} />
                )}
          </CustomDialogAction>
          <CustomDialogActions>
            <CancelButton onClick={handleProfileCloseModal}>Close</CancelButton>
          </CustomDialogActions>
        </CustomDialog>
      </>
    );
  };
  
  export default ProfileModal;