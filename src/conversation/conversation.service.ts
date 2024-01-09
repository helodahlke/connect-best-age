import { Injectable } from '@nestjs/common';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { Conversation } from './entities/conversation.entity';
import { Message } from '../message/entities/message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { create } from 'domain';
import { CreateMessageDto } from '../message/dto/create-message.dto';

@Injectable()
export class ConversationService {

  constructor(
    @InjectRepository(Conversation) private readonly conversationRepository: Repository<Conversation>
  ) {}

  createConversation(createConversationDto: CreateConversationDto): Promise<Conversation> {
    const conversation = new Conversation()
    conversation.conversationBeginning = new Date()
    conversation.users = createConversationDto.users
    return this.conversationRepository.save(conversation)
  }

  returnAllConversation(){
    return this.conversationRepository.find()
  }

}
