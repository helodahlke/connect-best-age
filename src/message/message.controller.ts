import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  create(@Body() createMessageDto: CreateMessageDto) {
    return this.messageService.sendMessage(createMessageDto)
  }

  @Get()
  findMessageByConversation(@Param('conversationId') conversationId: string) {
    return this.messageService.returnMessage(conversationId)
  }
}
