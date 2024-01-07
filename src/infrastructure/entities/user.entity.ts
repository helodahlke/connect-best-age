

// favoriteAction: FavoriteAction;
// }

import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    PrimaryGeneratedColumn,

  } from 'typeorm'
import { FriendshipData } from '../../interfaces/data/friendship.data'
import { FavoriteAction } from '../../interfaces/data/favorite-action.data'
import { FavoriteActionEntity } from './favorite-action.entity'

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ name: 'name', nullable: false })
  name: string

  @Column({
    name: 'description',
    nullable: true,
  })
  description: string

  @Column()
  password: string;

//   @OneToMany(() => FriendshipData, friend => friend.firstFriend)
//   @JoinColumn({ name: 'friend_id' })
//   firstFriend: FriendshipData[]

//   @OneToMany(() => FriendshipData, friend => friend.secondFriend)
//   @JoinColumn({ name: 'friend_id' })
//   secondFriend: Friends[]

  @Column({
    name: 'profilePicture',
    nullable: false,
  })
  profilePicture: Blob

  @OneToMany("favorite-action", "id", { cascade: false})
  @JoinColumn({ name: 'favorite-action-id' })
  favoriteAction?: FavoriteAction[]


  fromData() {}

  toData() { }
}