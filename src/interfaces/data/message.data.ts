import { UUID } from 'crypto';
import { MainUserData } from './user.data';

export interface MessageData {
  id: UUID;
  originUser: MainUserData
  destinedUser: MainUserData
  content: string
  createdAt: Date
  sendedAt: Date
}

export const MessageData = Symbol('MessageData')
