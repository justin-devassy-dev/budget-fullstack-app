import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
    constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
    ){}
//list all users
    findAll(){
         return this.userRepository.find();
    }

    async create(createdUserDto:CreateUserDto ){
        // destructure 
        const {email , password} = createdUserDto;
        //check if user exists
        const existingUser = await this.userRepository.findOne({where:{email},})
        if(existingUser){
            throw new BadRequestException('email already in use');
        }
        // hashing password
        const hashedPassword = await bcrypt.hash(password,10);

        // creation of new user instance
        const newUser = this.userRepository.create({
            email,
            password:hashedPassword,
        })
        // saving to db
        return this.userRepository.save(newUser);
    }




}
