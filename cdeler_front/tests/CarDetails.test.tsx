// CarDetails.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CarDetails from './CarDetails';

describe('CarDetails Component', () => {
  const mockProps = {
    image: 'car-image.png',
    model: 'Model S',
    manufacturer: 'Tesla',
    details: 'Electric;Autopilot;Fast Charging',
  };

  test('should render car image', () => {
    render(<CarDetails {...mockProps} />);
    const carImage = screen.getByAltText('car photo');
    expect(carImage).toHaveAttribute('src', 'src/png/photos/car-image.png');
  });

  test('should render car model', () => {
    render(<CarDetails {...mockProps} />);
    const carModel = screen.getByText(mockProps.model);
    expect(carModel).toBeInTheDocument();
  });

  test('should render car manufacturer', () => {
    render(<CarDetails {...mockProps} />);
    const carManufacturer = screen.getByText(mockProps.manufacturer);
    expect(carManufacturer).toBeInTheDocument();
  });

  test('should render car details', () => {
    render(<CarDetails {...mockProps} />);
    const details = mockProps.details.split(';');
    details.forEach(detail => {
      expect(screen.getByText(detail)).toBeInTheDocument();
    });
  });
});
