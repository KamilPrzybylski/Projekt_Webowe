import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../src/prisma.service';

describe('PrismaService', () => {
    let service: PrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PrismaService],
        }).compile();

        service = module.get<PrismaService>(PrismaService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('onModuleInit', () => {
        it('should call $connect', async () => {
            const connectSpy = jest.spyOn(service, '$connect').mockImplementation(async () => {});
            await service.onModuleInit();
            expect(connectSpy).toHaveBeenCalled();
        });
    });

    describe('onModuleDestroy', () => {
        it('should call $disconnect', async () => {
            const disconnectSpy = jest.spyOn(service, '$disconnect').mockImplementation(async () => {});
            await service.onModuleDestroy();
            expect(disconnectSpy).toHaveBeenCalled();
        });
    });
});
