import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
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
  
    @Column()
    createdAt: Date;
  
}
