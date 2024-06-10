import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CarDetails from './CarContainer';

describe('CarDetails Component', () => {
    const mockProps = {
        image: 'car1.png',
        model: 'Model S',
        manufacturer: 'Tesla',
        details: 'Electric;Autopilot;Ludicrous Mode',
    };

    test('renders without crashing', () => {
        render(<CarDetails {...mockProps} />);
    });

    test('displays the correct image', () => {
        render(<CarDetails {...mockProps} />);
        const img = screen.getByAltText('car photo');
        expect(img).toHaveAttribute('src', 'src/png/photos/car1.png');
    });

    test('displays the correct model and manufacturer', () => {
        render(<CarDetails {...mockProps} />);
        expect(screen.getByText('Model S')).toBeInTheDocument();
        expect(screen.getByText('Tesla')).toBeInTheDocument();
    });

    test('displays the correct details', () => {
        render(<CarDetails {...mockProps} />);
        expect(screen.getByText('Electric')).toBeInTheDocument();
        expect(screen.getByText('Autopilot')).toBeInTheDocument();
        expect(screen.getByText('Ludicrous Mode')).toBeInTheDocument();
    });
});
