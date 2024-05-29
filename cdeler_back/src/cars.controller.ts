import { Controller, Get, Param } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getCars() {
    return this.prisma.cars.findMany();
  }

  @Get('/used')
  async findUsed() {
    return this.prisma.cars.findMany({
      where: {
        mileage: {
          gt: 5
        }
      }
    });
  }

  @Get('/new')
  async findNew() {
    return this.prisma.cars.findMany({
      where: {
        mileage: {
          lte: 5
        }
      }
    });
  }

  @Get(':id')
  async findOne(@Param() params: any) {
    const id = Number(params.id)
    return this.prisma.cars.findUnique({
      where: {
        car_id: id
      }
    });
  }
}
