import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getCars() {
    return this.prisma.cars.findMany();
  }
}
