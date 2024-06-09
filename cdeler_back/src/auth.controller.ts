import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly prisma: PrismaService) {}
  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    const user = await this.prisma.clients.findFirst({
      where: { email: email },
    });
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return {
      message: 'Login successful',
      user: {
        id: user.client_id,
        email: user.email,
        firstName: user.name,
        lastName: user.surname,
        phone: user.nr_tel,
      },
    };
  }

}