import { Injectable } from '@nestjs/common';
import { CreateFriendshipDto } from './dto/create-friendship.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Friendship } from './entities/friendship.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FriendshipService {

  constructor(
    @InjectRepository(Friendship) private readonly friendshipRepository: Repository<Friendship>,
  ) {}
  
  create(createFriendshipDto: CreateFriendshipDto): Promise<Friendship> {
    const friendship: Friendship = new Friendship()
    friendship.firstUser = createFriendshipDto.firstUser;
    friendship.secondUser = createFriendshipDto.secondUser;
    friendship.beginning = createFriendshipDto.beginning;
    return this.friendshipRepository.save(friendship)
  }

  findOne(id: string): Promise<Friendship> {
    return this.friendshipRepository.findOneBy({
      id: id
    })
  } 
}
