import { Test, TestingModule } from '@nestjs/testing';
import { UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../src/prisma.service';
import { AuthController } from '../src/auth.controller';

describe('AuthController', () => {
    let controller: AuthController;
    let prismaService: PrismaService;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        controllers: [AuthController],
        providers: [PrismaService],
      }).compile();
  
      controller = module.get<AuthController>(AuthController);
      prismaService = module.get<PrismaService>(PrismaService);
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });
  
    describe('login', () => {
      it('should throw UnauthorizedException if user does not exist', async () => {
        const body = { email: 'nonexisting@example.com', password: 'password' };
        jest.spyOn(prismaService.clients, 'findFirst').mockResolvedValue(null);
  
        await expect(controller.login(body)).rejects.toThrow(UnauthorizedException);
      });
  
      it('should throw UnauthorizedException if password is incorrect', async () => {
        const body = { email: 'existing@example.com', password: 'incorrectpassword' };
        const mockUser = {
          client_id: 1,
          name: 'John',
          surname: 'Doe',
          email: 'existing@example.com',
          password: 'correctpassword',
          nr_tel: '123456789',
          transaction_id: 1, // Dodane pole transaction_id zgodnie z oczekiwaniami
        };
        jest.spyOn(prismaService.clients, 'findFirst').mockResolvedValue(mockUser);
  
        await expect(controller.login(body)).rejects.toThrow(UnauthorizedException);
      });
  
      it('should return message and user object if login is successful', async () => {
        const body = { email: 'existing@example.com', password: 'correctpassword' };
        const mockUser = {
          client_id: 1,
          name: 'John',
          surname: 'Doe',
          email: 'existing@example.com',
          password: 'correctpassword',
          nr_tel: '123456789',
          transaction_id: 1, // Dodane pole transaction_id zgodnie z oczekiwaniami
        };
        jest.spyOn(prismaService.clients, 'findFirst').mockResolvedValue(mockUser);
  
        const result = await controller.login(body);
  
        expect(result).toEqual({
          message: 'Login successful',
          user: {
            id: mockUser.client_id,
            email: mockUser.email,
            firstName: mockUser.name,
            lastName: mockUser.surname,
            phone: mockUser.nr_tel,
          },
        });
      });
    });
  });