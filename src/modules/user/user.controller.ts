import { Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }




  @Get()
  async getUsers(@Req() req: Request) {
    console.log(req['user']);
    return 'Hello World@!'
  }

  
  @Post()
  async createUser() {
    return await this.userService.createUser();
  }
}
