import { User } from "src/user/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Message } from "../../message/entities/message.entity";

@Entity()
export class Conversation {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    users: User[]

    @Column()
    conversationBeginning: Date

    @OneToMany(() => Message, message => message.id)
    message: Message

}
