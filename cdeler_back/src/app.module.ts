import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CarsController } from './cars.controller';

@Module({
  imports: [],
  controllers: [CarsController],
  providers: [PrismaService],
})
export class AppModule {}