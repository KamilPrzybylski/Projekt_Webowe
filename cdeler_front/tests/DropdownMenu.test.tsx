// DropdownMenu.test.tsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

jest.mock('../Modals/modalLogin/modalLogin.tsx', () => () => <div>Login Modal</div>);
jest.mock('../Modals/modalProfile/modalProfile.tsx', () => () => <div>Profile Modal</div>);

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('DropdownMenu Component', () => {
  test('renders menu icon and opens/closes menu on click', () => {
    render(
      <MemoryRouter>
        <DropdownMenu />
      </MemoryRouter>
    );

    const menuIcon = screen.getByLabelText(/openMenu/i);
    expect(menuIcon).toBeInTheDocument();

    fireEvent.click(menuIcon);
    expect(screen.getByRole('menu')).toBeInTheDocument();

    fireEvent.click(document);
    waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
  });

  test('navigates to /cars when Cars menu item is clicked', () => {
    render(
      <MemoryRouter>
        <DropdownMenu />
      </MemoryRouter>
    );

    const menuIcon = screen.getByLabelText(/openMenu/i);
    fireEvent.click(menuIcon);

    const carsMenuItem = screen.getByText('Cars');
    fireEvent.click(carsMenuItem);

    expect(mockNavigate).toHaveBeenCalledWith('/cars');
  });

  test('renders Profile and Login modals', () => {
    render(
      <MemoryRouter>
        <DropdownMenu />
      </MemoryRouter>
    );

    const menuIcon = screen.getByLabelText(/openMenu/i);
    fireEvent.click(menuIcon);

    expect(screen.getByText('Profile Modal')).toBeInTheDocument();
    expect(screen.getByText('Login Modal')).toBeInTheDocument();
  });

  test('closes menu when Logout is clicked', () => {
    render(
      <MemoryRouter>
        <DropdownMenu />
      </MemoryRouter>
    );

    const menuIcon = screen.getByLabelText(/openMenu/i);
    fireEvent.click(menuIcon);

    const logoutMenuItem = screen.getByText('Logout');
    fireEvent.click(logoutMenuItem);

    waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
  });
});
