import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User()
    user.name = createUserDto.name;
    user.description = createUserDto.description;
    user.password = createUserDto.password;
    return this.userRepository.save(user)
  }

  findAllUser(): Promise<User[]> {
    return this.userRepository.find()
  }

 
}
