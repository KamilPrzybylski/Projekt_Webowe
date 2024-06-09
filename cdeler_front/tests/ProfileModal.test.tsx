// ProfileModal.test.tsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProfileModal from './ProfileModal';
import Cookies from 'js-cookie';

jest.mock('js-cookie');

describe('ProfileModal Component', () => {
  const handleProfileClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders profile modal and handles open/close', () => {
    Cookies.get.mockReturnValue(JSON.stringify({ email: 'test@example.com', nr_tel: '123456789', name: 'John', surname: 'Doe' }));

    render(<ProfileModal handleProfileClose={handleProfileClose} />);

    // Open modal
    fireEvent.click(screen.getByText('Profile'));
    expect(screen.getByText('Profile')).toBeInTheDocument();

    // Close modal
    fireEvent.click(screen.getByText('Close'));
    waitFor(() => expect(screen.queryByText('Profile')).not.toBeInTheDocument());
  });

  test('displays user information from cookies', () => {
    Cookies.get.mockReturnValue(JSON.stringify({ email: 'test@example.com', nr_tel: '123456789', name: 'John', surname: 'Doe' }));

    render(<ProfileModal handleProfileClose={handleProfileClose} />);

    // Open modal
    fireEvent.click(screen.getByText('Profile'));

    expect(screen.getByText('Email: test@example.com')).toBeInTheDocument();
    expect(screen.getByText('Phone: 123456789')).toBeInTheDocument();
    expect(screen.getByText('First Name: John')).toBeInTheDocument();
    expect(screen.getByText('Last Name: Doe')).toBeInTheDocument();
  });

  test('displays initials in avatar', () => {
    Cookies.get.mockReturnValue(JSON.stringify({ email: 'test@example.com', nr_tel: '123456789', name: 'John', surname: 'Doe' }));

    render(<ProfileModal handleProfileClose={handleProfileClose} />);

    // Open modal
    fireEvent.click(screen.getByText('Profile'));

    const avatar = screen.getByText('J');
    expect(avatar).toBeInTheDocument();
  });

  test('calls handleProfileClose when modal is closed', () => {
    Cookies.get.mockReturnValue(JSON.stringify({ email: 'test@example.com', nr_tel: '123456789', name: 'John', surname: 'Doe' }));

    render(<ProfileModal handleProfileClose={handleProfileClose} />);

    // Open modal
    fireEvent.click(screen.getByText('Profile'));

    // Close modal
    fireEvent.click(screen.getByText('Close'));
    waitFor(() => {
      expect(handleProfileClose).toHaveBeenCalled();
    });
  });
});
