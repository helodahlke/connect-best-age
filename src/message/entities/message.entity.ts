import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Conversation } from "../../conversation/entities/conversation.entity";
import { User } from "src/user/entities/user.entity";

@Entity()
export class Message {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => Conversation, conversation => conversation.id)
    conversation: string

    @Column()
    content: string

    @Column()
    sendingTime: Date

    @Column()
    sender: User

    @Column()
    receiver: User
}