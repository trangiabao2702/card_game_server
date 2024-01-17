import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Response } from 'express';
import { UserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getInformation(res: Response) {
    const result = await this.prisma.game.findFirst({
      where: {
        id: 1,
      },
    });

    return res.status(HttpStatus.OK).send(result);
  }

  async updateInfo(newInfo: UserDto, res: Response) {
    if (newInfo.cards != null) {
      await this.prisma.game.update({
        where: {
          id: 1,
        },
        data: {
          cards: newInfo.cards,
        },
      });
    }
    if (newInfo.deck != null) {
      await this.prisma.game.update({
        where: {
          id: 1,
        },
        data: {
          deck: newInfo.deck,
        },
      });
    }

    return res.status(HttpStatus.OK).send('Success');
  }

  async levelUp(res: Response) {
    const currentUser = await this.prisma.game.findFirst({
      where: {
        id: 1,
      },
    });

    if (currentUser.experience + 1 >= 3) {
      await this.prisma.game.update({
        where: {
          id: 1,
        },
        data: {
          experience: 0,
          level: currentUser.level + 1,
        },
      });
    } else {
      await this.prisma.game.update({
        where: {
          id: 1,
        },
        data: {
          experience: currentUser.experience + 1,
        },
      });
    }

    const newUser = await this.prisma.game.findFirst({
      where: {
        id: 1,
      },
    });

    return res.status(HttpStatus.OK).send(newUser);
  }
}
