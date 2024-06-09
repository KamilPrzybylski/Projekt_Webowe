import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import {CustomDialog, CustomDialogTitle, CustomDialogContent, CustomDialogActions, UserInfo, UserDetail, CancelButton} from './modalProfile.style.tsx';
import { Avatar, MenuItem } from '@mui/material';

interface Props {
    handleProfileClose: () => void;
  }

  const ProfileModal: React.FC<Props> = ({ handleProfileClose }) => {
    const [open, setOpen] = useState(false);
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
  
    const handleProfileCloseModal = () => {
      setOpen(false);
      handleProfileClose();
    };
  
    return (
      <>
        <MenuItem onClick={handleProfileOpen}>Profile</MenuItem>
        <CustomDialog open={open} onClose={handleProfileCloseModal}>
          <CustomDialogTitle>Profile</CustomDialogTitle>
          <CustomDialogContent>
              {user?.email ? (
                <Avatar sx={{ bgcolor: '#ff0000', width: 56, height: 56 }} >
                  {user.email.charAt(0).toUpperCase()}
                </Avatar>
              ) : (
                <Avatar sx={{ bgcolor: '#ff0000', width: 56, height: 56 }}>?</Avatar>
              )}
            <UserInfo>
              <UserDetail>Email: {user?.email || 'N/A'}</UserDetail>
              <UserDetail>Phone Number: {user?.phone || 'N/A'}</UserDetail>
              <UserDetail>First Name: {user?.firstName || 'N/A'}</UserDetail>
              <UserDetail>Last Name: {user?.lastName || 'N/A'}</UserDetail>
            </UserInfo>
          </CustomDialogContent>
          <CustomDialogActions>
            <CancelButton onClick={handleProfileCloseModal}>Close</CancelButton>
          </CustomDialogActions>
        </CustomDialog>
      </>
    );
  };
  
  export default ProfileModal;