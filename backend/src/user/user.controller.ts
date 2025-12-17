import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
    constructor(private readonly userService:UserService){}

    //get /users
    @Get()
    findAll(){
        return this.userService.findAll(); 
        
    }
    @Post()
    create(@Body() createUserDto :CreateUserDto){
        return this.userService.create(createUserDto)
    }
}
