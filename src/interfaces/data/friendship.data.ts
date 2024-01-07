import { UUID } from 'crypto';
import { MainUserData } from './user.data';

export interface FriendshipData {
  id: UUID;
  firstFriend: MainUserData
  secondFriend: MainUserData
  createdAt: Date
}

export const FriendshipData = Symbol('FriendshipData')
