import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CarsController } from './cars.controller';
import { AuthController } from './auth.controller';

@Module({
  imports: [],
  controllers: [CarsController, AuthController],
  providers: [PrismaService],
})
export class AppModule {}