import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getMe(id: number) {
    const username = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });

    return { username: username.username };
  }
}
