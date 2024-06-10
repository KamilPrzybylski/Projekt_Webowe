import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CarSite from './CarSite';
import fetchMock from 'jest-fetch-mock';

describe('CarSite Component', () => {
    beforeEach(() => {
      fetchMock.resetMocks();
    });
  
    it('displays loading message while fetching cars', async () => {
      fetchMock.mockOnce(() => {
        throw new Error('Failed to fetch');
      });
  
      render(<CarSite />);
  
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  
    it('displays cars when successfully fetched', async () => {
        const mockData = [
            {
              brand: 'Toyota',
              model: 'Camry',
              photo: 'camry.jpg',
              driveType: 'AWD',
              mileage: 10000,
              fuels: { type: 'Petrol' },
              engines: { power: 200, Enginescol: new Float32Array([1.8, 2.0, 2.5]) },
              categories: { name: 'Sedan' }
            },
            {
              brand: 'Honda',
              model: 'Civic',
              photo: 'civic.jpg',
              driveType: 'FWD',
              mileage: 8000,
              fuels: { type: 'Petrol' },
              engines: { power: 180, Enginescol: new Float32Array([1.6, 1.8]) },
              categories: { name: 'Hatchback' }
            }
      ];
  
      fetchMock.mockResponseOnce(JSON.stringify(mockData));
  
      render(<CarSite />);
    });
  });
