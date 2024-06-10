import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import ProfileModal from './modalProfile';

describe('ProfileModal component', () => {
  const handleProfileCloseMock = jest.fn();

  test('opens profile dialog when profile menu item is clicked', async () => {
    render(<ProfileModal handleProfileClose={handleProfileCloseMock} />);

    const profileMenuItem = screen.getByText('Profile');
    fireEvent.click(profileMenuItem);

    expect(screen.getByTestId('email')).toBeInTheDocument();
    expect(screen.getByTestId('phone')).toBeInTheDocument();
    expect(screen.getByTestId('first')).toBeInTheDocument();
    expect(screen.getByTestId('last')).toBeInTheDocument();
    expect(screen.getByTestId('close')).toBeInTheDocument();
  });
});
