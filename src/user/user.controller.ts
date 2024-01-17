import { Body, Controller, Get, Put, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { UserDto } from './dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getInformation(@Res() res: Response) {
    return this.userService.getInformation(res);
  }

  @Put()
  updateInfo(@Body() info: UserDto, @Res() res: Response) {
    return this.userService.updateInfo(info, res);
  }

  @Put('/up')
  levelUp(@Res() res: Response) {
    return this.userService.levelUp(res);
  }
}
