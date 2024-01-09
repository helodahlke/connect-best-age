
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class  Friendship {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: 'first_user', nullable: false })
    firstUser: User
  
    @Column({
      name: 'second_user',
      nullable: false,
    })
    secondUser: User
  
    @Column()
    beginning: Date;

    
  
}
