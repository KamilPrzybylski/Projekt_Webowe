// CarSite.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CarSite from './CarSite';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('http://localhost:3000/cars', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          brand: 'Tesla',
          model: 'Model S',
          photo: 'model-s.png',
          driveType: 'Electric',
          mileage: 10000,
          fuels: { type: 'Electric' },
          engines: { power: 670, Enginescol: new Float32Array([1.1, 2.2, 3.3]) },
          categories: { name: 'Sedan' },
        },
        {
          brand: 'BMW',
          model: 'i8',
          photo: 'i8.png',
          driveType: 'Hybrid',
          mileage: 15000,
          fuels: { type: 'Hybrid' },
          engines: { power: 369, Enginescol: new Float32Array([4.4, 5.5, 6.6]) },
          categories: { name: 'Sport' },
        },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('CarSite Component', () => {
  test('renders loading state initially', () => {
    render(<CarSite />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders car data after fetching', async () => {
    render(<CarSite />);

    await waitFor(() => expect(screen.getByText('Tesla')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Model S')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Electric')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('10000 km')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Electric')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('670 HP')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('1.1,2.2,3.3')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Sedan')).toBeInTheDocument());

    await waitFor(() => expect(screen.getByText('BMW')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('i8')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Hybrid')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('15000 km')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Hybrid')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('369 HP')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('4.4,5.5,6.6')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Sport')).toBeInTheDocument());
  });

  test('renders error state on fetch failure', async () => {
    server.use(
      rest.get('http://localhost:3000/cars', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    render(<CarSite />);

    await waitFor(() => expect(screen.getByText('Failed to fetch cars')).toBeInTheDocument());
  });
});
