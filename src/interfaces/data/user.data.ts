import { UUID } from 'crypto'
import { FriendshipData } from './friendship.data'
import { FavoriteAction } from './favorite-action.data';

export interface MainUserData {
  id: UUID;
  name: string;
  description: string;
  friends: FriendshipData;
  profilePicture: Blob;
  favoriteAction: FavoriteAction;
  createdAt: Date;
}


export const MainUserData = Symbol('MainUserData')
