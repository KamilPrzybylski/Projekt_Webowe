import { useEffect, useState } from 'react';
import "./headerstyles.style.tsx"
import logo from '../../png/logo1.png'
import colorLogo from "../../png/logo-no-background.png";
import {HeaderContainer, LogoContainer, MiniLogo, Nav, NavPackage, StyledLink} from "./headerstyles.style.tsx";
import DropdownMenu from "../dropDownMenu/index.tsx";

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

const Header = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCars = async () => {
          try {
            const response = await fetch('http://localhost:3000/cars');
            if (!response.ok) {
              throw new Error('Failed to fetch cars');
            }
            const data = await response.json();
            setCars(data);
          } catch (error) {
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
        <HeaderContainer>
            <Nav>
                <StyledLink to="/">
                    <MiniLogo src={logo} />
                </StyledLink>
                <NavPackage>
                    <StyledLink to="/about">About</StyledLink>
                    <StyledLink to="/faq">FAQ</StyledLink>
                    <StyledLink to="/terms">Terms</StyledLink>
                    <DropdownMenu />
                </NavPackage>
            </Nav>
            <LogoContainer title="logo" >
                <img src={colorLogo} alt={"logo"}/>
            </LogoContainer>
            <div>
                <h1>Cars</h1>
                <ul>
                    {cars.map(car => (
                    <li key={car.car_id}>
                        {car.brand} {car.model} - {car.mileage} miles
                    </li>
                    ))}
                </ul>
            </div>
        </HeaderContainer>

    );
};

export default Header;