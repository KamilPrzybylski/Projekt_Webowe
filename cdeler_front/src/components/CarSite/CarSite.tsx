import React, { useEffect, useState } from 'react';
import { CarContainer, CarItem } from './CarSite.style.tsx';
import CarDetails from '../CarContainer/CarContainer.tsx';

interface Fuel {
  type: string;
}

interface Engines {
  power: number;
  Enginescol: Float32Array;
}

interface Categories {
  name: string;
}

interface Car {
  brand: string,
  model: string,
  photo: string,
  driveType: string,
  mileage: number,
  fuels: Fuel,
  engines: Engines,
  categories: Categories,
}

const CarSite: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('http://localhost:3000/cars');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCars(data);
        console.log("%j", data);
      } catch (error) {
        console.error('Failed to fetch cars:', error);
        setError('Failed to fetch cars');
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
      <CarContainer>
        {cars.map((car, index) => (
          <CarItem key={index}>
            <CarDetails
              image = {car.photo}
              model = {car.model}
              manufacturer = {car.brand}
              details = {`${ car.driveType };${car.mileage} km;${car.fuels.type};${car.engines.power} HP;${car.engines.Enginescol};${car.categories.name}`} 
            />
          </CarItem>
        ))}
      </CarContainer>
    );
  };
  
  export default CarSite;