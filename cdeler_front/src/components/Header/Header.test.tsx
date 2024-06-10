import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './index';

describe('<Header />', () => {
  test('renders Header component', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByTestId('header-container')).toBeInTheDocument();

    expect(screen.getByAltText('logo')).toBeInTheDocument();

    const miniLogo = screen.getByAltText('logo');
    expect(miniLogo).toBeInTheDocument();
    expect(miniLogo).toHaveAttribute('src', '');

    expect(screen.getByTestId('nav-package')).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /About/i })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: /FAQ/i })).toHaveAttribute('href', '/faq');
    expect(screen.getByRole('link', { name: /Terms/i })).toHaveAttribute('href', '/terms');
  });
});
