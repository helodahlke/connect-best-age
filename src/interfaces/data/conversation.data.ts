import { UUID } from 'crypto';
import { MainUserData } from './user.data';

export interface ConversationData {
  id: UUID;
  originUser: MainUserData
  destinedUser: MainUserData
  createdAt: Date
  sendedAt: Date
}

export const ConversationData = Symbol('ConversationData')
