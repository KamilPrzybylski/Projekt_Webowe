// LoginModal.test.tsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginModal from './LoginModal';
import Cookies from 'js-cookie';

jest.mock('js-cookie');

describe('LoginModal Component', () => {
  const handleLoginClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders login modal and handles open/close', () => {
    render(<LoginModal handleLoginClose={handleLoginClose} />);

    // Open modal
    fireEvent.click(screen.getByText('Login'));
    expect(screen.getByText('Login')).toBeInTheDocument();

    // Close modal
    fireEvent.click(screen.getByText('Cancel'));
    waitFor(() => expect(screen.queryByText('Login')).not.toBeInTheDocument());
  });

  test('handles login success', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ user: { id: 1, name: 'Test User' } }),
      })
    ) as jest.Mock;

    render(<LoginModal handleLoginClose={handleLoginClose} />);

    // Open modal
    fireEvent.click(screen.getByText('Login'));

    // Enter email and password
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });

    // Click login button
    fireEvent.click(screen.getByText('Login'));

    await waitFor(() => {
      expect(Cookies.set).toHaveBeenCalledWith('user', JSON.stringify({ id: 1, name: 'Test User' }));
      expect(handleLoginClose).toHaveBeenCalled();
      expect(screen.getByText('Login successful')).toBeInTheDocument();
    });
  });

  test('handles login failure', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    ) as jest.Mock;

    render(<LoginModal handleLoginClose={handleLoginClose} />);

    // Open modal
    fireEvent.click(screen.getByText('Login'));

    // Enter email and password
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });

    // Click login button
    fireEvent.click(screen.getByText('Login'));

    await waitFor(() => {
      expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
    });
  });

  test('handles snackbar close', () => {
    render(<LoginModal handleLoginClose={handleLoginClose} />);

    // Open modal and trigger snackbar
    fireEvent.click(screen.getByText('Login'));
    fireEvent.click(screen.getByText('Login')); // Trigger login attempt

    // Close snackbar
    fireEvent.click(screen.getByRole('button', { name: /close/i }));

    waitFor(() => expect(screen.queryByRole('alert')).not.toBeInTheDocument());
  });
});
