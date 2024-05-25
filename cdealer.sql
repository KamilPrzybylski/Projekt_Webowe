-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Maj 25, 2024 at 02:20 PM
-- Wersja serwera: 10.4.28-MariaDB
-- Wersja PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cdealer`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `cars`
--

CREATE TABLE `cars` (
  `carID` int(11) NOT NULL,
  `brand` varchar(200) NOT NULL,
  `model` varchar(255) NOT NULL,
  `photo` varchar(100) NOT NULL,
  `vin` char(17) NOT NULL,
  `driveType` char(3) NOT NULL,
  `mileage` int(11) NOT NULL DEFAULT 120000,
  `color` varchar(45) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `Engines_engineID` int(11) NOT NULL,
  `fuelID` int(11) NOT NULL,
  `categorieID` int(11) NOT NULL,
  `transactionID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`carID`, `brand`, `model`, `photo`, `vin`, `driveType`, `mileage`, `color`, `description`, `Engines_engineID`, `fuelID`, `categorieID`, `transactionID`) VALUES
(1, 'Toyota', 'Corolla', 'toyota.png', 'JTDKB20U803923878', 'FWD', 50000, 'Blue', 'Sprowadzony z Japonii, jedynie jeden właściciel, regularnie serwisowany.', 1, 1, 2, 1),
(2, 'Honda', 'Civic', 'honda.png', '1HGEJ6572WL036485', 'FWD', 60000, 'Silver', 'Samochód miejski, niskie spalanie, w pełni sprawny technicznie.', 2, 1, 2, 1),
(3, 'Volkswagen', 'Golf', 'volkswagen.png', 'WVWZZZ1HZSW364290', 'FWD', 75000, 'Black', 'Auto rodzinne, przegląd ważny do końca roku, bezwypadkowe.', 3, 2, 2, 1),
(4, 'Ford', 'Focus', 'ford.png', '1FADP3K21EL303859', 'FWD', 40000, 'Red', 'Samochód w idealnym stanie, regularnie serwisowany, pierwszy właściciel.', 4, 1, 2, 2),
(5, 'BMW', '3 Series', 'bmw.png', 'WBABD33476PL10949', 'RWD', 80000, 'White', 'Elegancki samochód, niski przebieg, bezwypadkowy, garażowany.', 5, 2, 3, 2),
(6, 'Mercedes-Benz', 'C-Class', 'mercedes.png', 'WDDGF4HB5CR220851', 'RWD', 90000, 'Black', 'Luksusowy samochód, pełne wyposażenie, regularnie serwisowany.', 6, 2, 3, 3),
(7, 'Audi', 'A4', 'audi.png', 'WAUZZZ8E54A014935', 'AWD', 70000, 'Silver', 'Auto dla wymagających, bogate wyposażenie, jedynie eksploatowane w mieście.', 7, 2, 3, 3),
(8, 'Toyota', 'RAV4', 'rav4.png', '2T3BF4DV8BW104287', 'AWD', 85000, 'Blue', 'SUV idealne na trasy, regularnie serwisowany, bezwypadkowy.', 1, 2, 1, 4),
(9, 'Nissan', 'Qashqai', 'nissan.png', 'SJNFAAJ10U2605196', 'FWD', 55000, 'Grey', 'Samochód rodzinny, duży bagażnik, niskie spalanie.', 2, 1, 1, 4),
(10, 'Hyundai', 'Tucson', 'hyundai.png', 'KM8J3CA47GU017510', 'AWD', 60000, 'White', 'Auto sprowadzone z USA, jedynie jeden właściciel.', 3, 2, 1, 5),
(11, 'Kia', 'Sportage', 'kia.png', 'KNDPC3A24B7059219', 'AWD', 65000, 'Black', 'SUV dla aktywnych, dużo miejsca w kabinie, serwisowany w autoryzowanym serwisie.', 4, 1, 1, 5),
(12, 'Renault', 'Clio', 'renault.png', 'VF1BR0R0521292548', 'FWD', 40000, 'Red', 'Samochód miejski, niski przebieg, idealny dla początkującego kierowcy.', 5, 1, 2, 6),
(13, 'Peugeot', '308', 'peugeot.png', 'VF3LB9HXCJS263301', 'FWD', 50000, 'Silver', 'Auto rodzinne, niskie spalanie, przegląd ważny do czerwca.', 5, 2, 2, 6),
(14, 'Opel', 'Astra', 'opel.png', 'W0LPF6E91E2034188', 'FWD', 70000, 'Blue', 'Samochód z polskiego salonu, regularnie serwisowany.', 2, 2, 2, 7),
(15, 'Skoda', 'Octavia', 'skoda.png', 'TMBBK21Z4B2164025', 'FWD', 80000, 'Black', 'Auto dla wymagających, bogate wyposażenie, pełna historia serwisowa.', 1, 1, 2, 7),
(16, 'Fiat', '500', 'fiat.png', '3C3CFFJH0DT219541', 'FWD', 30000, 'White', 'Samochód miejski, idealny na krótkie trasy, niskie koszty eksploatacji.', 2, 1, 2, 8),
(17, 'Mini', 'Cooper', 'mini.png', 'WMWMF310X0TG23403', 'FWD', 45000, 'Red', 'Auto dla miłośników kompaktowych aut, niskie spalanie, regularnie serwisowany.', 3, 1, 2, 5),
(18, 'Volvo', 'XC60', 'volvo.png', 'YV1612FH7E1183032', 'AWD', 55000, 'Silver', 'SUV dla rodziny, bogate wyposażenie, bezwypadkowy.', 4, 1, 1, 8),
(19, 'Mazda', 'CX-5', 'mazda.png', 'JM3KE4DY7D0125587', 'AWD', 70000, 'Blue', 'Samochód terenowy, duży prześwit, regularnie serwisowany.', 5, 1, 1, 2),
(20, 'Jeep', 'Wrangler', 'jeep.png', '1C4HJXDG0EW268842', '4WD', 80000, 'Green', 'Auto terenowe, idealne do jazdy w trudnych warunkach, pełne wyposażenie.', 6, 1, 1, 7);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `categories`
--

CREATE TABLE `categories` (
  `categorieID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categorieID`, `name`, `description`) VALUES
(1, 'Sedan', 'Kategoria obejmująca samochody osobowe z zamkniętym nadwoziem.'),
(2, 'SUV', 'Samochody terenowe z dużą przestrzenią wewnątrz.'),
(3, 'Hatchback', 'Małe samochody z tylną klapą.'),
(4, 'Kombi', 'Samochody z dużą przestrzenią bagażową.'),
(5, 'Coupe', 'Sportowe samochody z dwoma drzwiami.'),
(6, 'Minivan', 'Rodzinne samochody z dużą ilością miejsc siedzących.'),
(7, 'Kabriolet', 'Samochody z otwieranym dachem.'),
(8, 'Pick-up', 'Samochody z otwartą przestrzenią za kabiną.');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `clients`
--

CREATE TABLE `clients` (
  `clientID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `surname` varchar(150) NOT NULL,
  `email` varchar(255) NOT NULL,
  `nr_tel` varchar(20) NOT NULL,
  `transactionID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `employees`
--

CREATE TABLE `employees` (
  `employeeID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `surname` varchar(150) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_nr` varchar(20) NOT NULL,
  `positionID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `engines`
--

CREATE TABLE `engines` (
  `engineID` int(11) NOT NULL,
  `fuelConsumption` float NOT NULL,
  `power` int(11) NOT NULL,
  `Enginescol` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `engines`
--

INSERT INTO `engines` (`engineID`, `fuelConsumption`, `power`, `Enginescol`) VALUES
(1, 12, 220, 6),
(2, 6, 130, 4),
(3, 10, 90, 4),
(4, 12, 190, 5),
(5, 18, 350, 6),
(6, 14, 280, 6),
(7, 20, 400, 8);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `fuels`
--

CREATE TABLE `fuels` (
  `fuelID` int(11) NOT NULL,
  `type` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fuels`
--

INSERT INTO `fuels` (`fuelID`, `type`) VALUES
(1, 'diesel'),
(2, 'benzyna'),
(3, 'gaz');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `positions`
--

CREATE TABLE `positions` (
  `positionID` int(11) NOT NULL,
  `name` varchar(60) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `transactions`
--

CREATE TABLE `transactions` (
  `transactionID` int(11) NOT NULL,
  `transactionDate` date NOT NULL,
  `transactionValue` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`transactionID`, `transactionDate`, `transactionValue`) VALUES
(1, '2024-05-12', 7800),
(2, '2024-05-13', 7800),
(3, '2024-05-14', 7800),
(4, '2024-05-15', 7800),
(5, '2024-05-15', 7800),
(6, '2024-05-16', 7800),
(7, '2024-05-17', 7800),
(8, '2024-05-18', 7800),
(9, '2024-05-18', 7800);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`carID`),
  ADD KEY `fk_Cars_Engines` (`Engines_engineID`),
  ADD KEY `fk_Cars_Fuels1` (`fuelID`),
  ADD KEY `fk_Cars_Categories1` (`categorieID`),
  ADD KEY `fk_Cars_Transactions1` (`transactionID`);

--
-- Indeksy dla tabeli `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categorieID`);

--
-- Indeksy dla tabeli `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`clientID`),
  ADD KEY `fk_Clients_Transactions1` (`transactionID`);

--
-- Indeksy dla tabeli `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`employeeID`),
  ADD KEY `fk_Employees_Positions1` (`positionID`);

--
-- Indeksy dla tabeli `engines`
--
ALTER TABLE `engines`
  ADD PRIMARY KEY (`engineID`);

--
-- Indeksy dla tabeli `fuels`
--
ALTER TABLE `fuels`
  ADD PRIMARY KEY (`fuelID`);

--
-- Indeksy dla tabeli `positions`
--
ALTER TABLE `positions`
  ADD PRIMARY KEY (`positionID`);

--
-- Indeksy dla tabeli `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`transactionID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `carID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categorieID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `clientID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `employeeID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `engines`
--
ALTER TABLE `engines`
  MODIFY `engineID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `fuels`
--
ALTER TABLE `fuels`
  MODIFY `fuelID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `positions`
--
ALTER TABLE `positions`
  MODIFY `positionID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `transactionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cars`
--
ALTER TABLE `cars`
  ADD CONSTRAINT `fk_Cars_Categories1` FOREIGN KEY (`categorieID`) REFERENCES `categories` (`categorieID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Cars_Engines` FOREIGN KEY (`Engines_engineID`) REFERENCES `engines` (`engineID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Cars_Fuels1` FOREIGN KEY (`fuelID`) REFERENCES `fuels` (`fuelID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Cars_Transactions1` FOREIGN KEY (`transactionID`) REFERENCES `transactions` (`transactionID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `clients`
--
ALTER TABLE `clients`
  ADD CONSTRAINT `fk_Clients_Transactions1` FOREIGN KEY (`transactionID`) REFERENCES `transactions` (`transactionID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `fk_Employees_Positions1` FOREIGN KEY (`positionID`) REFERENCES `positions` (`positionID`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
