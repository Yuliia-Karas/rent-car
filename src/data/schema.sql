--     "id": "id",
--     "img": "defaultImg",
--     "make":"brand",
--     "model":"car model",
--     "year": "year of issue",
--     "rentalPrice": "price per hour",
--     "address": "address of rental company",
--     "rentalCompany":"name of rental company",
--     "type": "premium classic econom",
--     "mileage": "mileage",
--     "functionalities":"mehanic auto gybryd gas electro"

create table car_catalog (
	id integer primary key autoincrement,
	img varchar(255),
	make varchar(255) not null,
	model varchar(255) not null,
	year unsign smallint not null,
	rental_price unsign int not null,
	address varchar(255) not null,
	rental_company varchar(255) not null,
	type varchar(50) not null,
	mileage unsign int not null,
	functionalities varchar(255) not null
);

insert into car_catalog (img, make, model, year, rental_price, address, rental_compmany, type, mileage, functionalities) values ('', '', '', 1, 1, '', '', '', 1, '');

INSERT INTO car_catalog (img, make, model, year, rental_price, address, rental_company, type, mileage, functionalities)
VALUES
('https://rental.ua/content/rent/cars/307/toyota-corolla-e16-e17-272x160-93f2.jpg', 'Toyota', 'Corolla', 2020, 150, '123 Main St', 'Rent-A-Car Co.', 'Sedan', 20000, 'Air Conditioning, GPS'),
('https://rental.ua/content/rent/cars/167/hyundai-accent-4-at-272x160-9f90.jpg', 'Hundai', 'Accent', 2019, 140, '456 Oak St', 'DriveAway Rentals', 'Sedan', 18000, 'Bluetooth, Cruise Control'),
('https://rental.ua/content/rent/cars/309/Ford%20Fiesta-272x160-1e96.png', 'Ford', 'Fiesta', 2021, 180, '789 Pine St', 'CityRide Rentals', 'SUV', 25000, 'Backup Camera, All-Wheel Drive'),
('https://rental.ua/content/rent/cars/361/chevrolet-spark-272x160-43fb.png', 'Chevrolet', 'Spark', 2018, 130, '101 Elm St', 'MetroRent', 'Sedan', 22000, 'Keyless Entry, USB Ports'),
('https://rental.ua/content/rent/cars/333/volkswagen-jetta-6-272x160-7735.png', 'Volkswagen', 'Jetta', 2022, 200, '202 Cedar St', 'UrbanDrive', 'SUV', 15000, 'Collision Warning, Sunroof'),
('https://rental.ua/content/rent/cars/445/X5_21_G05-223x160-2438.jpg', 'BMW', 'X5', 2017, 220, '303 Maple St', 'LuxuryRent', 'Luxury Sedan', 30000, 'Leather Seats, Navigation System'),
('https://rental.ua/content/rent/cars/446/hyundai_elantra_VII-272x160-8019.png', 'Hyundai', 'Elantra', 2020, 160, '404 Birch St', 'Sunset Rentals', 'SUV', 18000, 'Lane Departure Warning, Apple CarPlay'),
('https://rental.ua/content/rent/cars/433/2020-06-08%2011.48.46-272x160-b268.jpg', 'Volkswagen', 'Jetta', 2019, 140, '505 Fir St', 'GreenWheels', 'Sedan', 20000, 'Fuel Efficient, Android Auto'),
('https://rental.ua/content/rent/cars/448/Mercedes_GLE_300-272x160-5357.png', 'Mercedes-Benz', 'GLC', 2021, 250, '606 Spruce St', 'EliteRent', 'Luxury SUV', 22000, 'Heated Seats, Adaptive Cruise Control'),
('https://rental.ua/content/rent/cars/418/Suzuki_Vitara_NEW-224x160-6afe.png', 'Suzuki', 'Vitara', 2016, 120, '707 Pine St', 'EasyDrive', 'Compact', 28000, 'Spacious Interior, Eco-Friendly');

