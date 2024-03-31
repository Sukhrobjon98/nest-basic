import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Req, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { ParseIntPipe } from 'src/common/pipes/custom.pipe';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }




  
  @Get(':id')
  async getUsers(@Param('id', ParseIntPipe) id: number) {
    
    
    console.log(typeof id);
    
    if (typeof id !== 'number') {
      
      throw new Error('Invalid id');
    }
    
    return 'Hello World@!'
  }
  
  
  @Post()
  async createUser(@Body() body: any){
    console.log(body);
    
    return await this.userService.createUser();
  }
}
