import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('favorite-action')
export class FavoriteActionEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ name: 'url', nullable: false })
  url: string

  @Column({ name: 'name', nullable: false })
  name: string

  fromData(){

  }
  toData(){}
}
