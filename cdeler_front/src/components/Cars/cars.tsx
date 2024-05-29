import React, { useEffect, useState } from 'react';

interface Car {
    car_id: number,
    brand: string,
    model: string,
    photo: string,
    vin: string,
    driveType: string,
    mileage: number,
    color: string,
    description: string,
    Engines_engine_id: number,
    fuel_id: number,
    categorie_id: number,
    transaction_id: number,
}

const CarsComponent: React.FC = () => {
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
    <div>
        <h1>Cars</h1>
        <ul>
            {cars.map(car => (
            <li key={car.car_id}>
                <img src={`src/png/photos/${car.photo}`} alt='car photo'/>
                <p>{car.brand} {car.model} - {car.mileage} miles</p>
            </li>
            ))}
        </ul>
    </div>
  );
};

export default CarsComponent;
