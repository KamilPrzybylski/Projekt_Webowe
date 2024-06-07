import { Test, TestingModule } from '@nestjs/testing';
import { CarsController } from '../src/cars.controller';
import { PrismaService } from '../src/prisma.service';

describe('CarsController', () => {
    let carsController: CarsController;
    let prismaService: PrismaService;

    const mockPrismaService = {
        cars: {
            findMany: jest.fn(),
            findUnique: jest.fn(),
        },
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CarsController],
            providers: [
                {
                    provide: PrismaService,
                    useValue: mockPrismaService,
                },
            ],
        }).compile();

        carsController = module.get<CarsController>(CarsController);
        prismaService = module.get<PrismaService>(PrismaService);
    });

    it('should be defined', () => {
        expect(carsController).toBeDefined();
    });

    describe('findUsed', () => {
        it('should return used cars', async () => {
            const result = [{ id: 1, mileage: 10 }];
            mockPrismaService.cars.findMany.mockResolvedValue(result);

            expect(await carsController.findUsed()).toBe(result);
            expect(mockPrismaService.cars.findMany).toHaveBeenCalledWith({
                where: {
                    mileage: {
                        gt: 5,
                    },
                },
            });
        });
    });

    describe('findNew', () => {
        it('should return new cars', async () => {
            const result = [{ id: 2, mileage: 5 }];
            mockPrismaService.cars.findMany.mockResolvedValue(result);

            expect(await carsController.findNew()).toBe(result);
            expect(mockPrismaService.cars.findMany).toHaveBeenCalledWith({
                where: {
                    mileage: {
                        lte: 5,
                    },
                },
            });
        });
    });

    describe('findOne', () => {
        it('should return a single car by id', async () => {
            const result = { id: 3, mileage: 8 };
            mockPrismaService.cars.findUnique.mockResolvedValue(result);

            expect(await carsController.findOne({ id: 3 })).toBe(result);
            expect(mockPrismaService.cars.findUnique).toHaveBeenCalledWith({
                where: {
                    car_id: 3,
                },
            });
        });
    });

    describe('findCars', () => {
        it('should return all cars with selected fields', async () => {
            const result = [
                {
                    brand: 'Toyota',
                    model: 'Corolla',
                    mileage: 10,
                    driveType: 'FWD',
                    photo: 'url/to/photo',
                    fuels: [{ type: 'Petrol' }],
                    engines: [{ power: 120, Enginescol: '1.6L' }],
                    categories: [{ name: 'Sedan' }],
                },
            ];
            mockPrismaService.cars.findMany.mockResolvedValue(result);

            expect(await carsController.findCars()).toBe(result);
            expect(mockPrismaService.cars.findMany).toHaveBeenCalledWith({
                select: {
                    brand: true,
                    model: true,
                    mileage: true,
                    driveType: true,
                    photo: true,
                    fuels: {
                        select: {
                            type: true,
                        },
                    },
                    engines: {
                        select: {
                            power: true,
                            Enginescol: true,
                        },
                    },
                    categories: {
                        select: {
                            name: true,
                        },
                    },
                },
            });
        });
    });
});
