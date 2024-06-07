import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { bootstrap } from '../src/main';

jest.mock('@nestjs/core', () => ({
    NestFactory: {
        create: jest.fn(),
    },
}));

describe('Bootstrap', () => {
    let mockApp;

    beforeAll(() => {
        mockApp = {
            enableCors: jest.fn(),
            listen: jest.fn().mockResolvedValue(undefined),
        };
        (NestFactory.create as jest.Mock).mockResolvedValue(mockApp);
    });

    it('should create the app and enable CORS', async () => {
        await bootstrap();
        expect(NestFactory.create).toHaveBeenCalledWith(AppModule);
        expect(mockApp.enableCors).toHaveBeenCalled();
    });

    it('should listen on port 3000', async () => {
        await bootstrap();
        expect(mockApp.listen).toHaveBeenCalledWith(3000);
    });
});
