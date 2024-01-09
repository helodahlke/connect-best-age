import { User } from "src/user/entities/user.entity"
import { Message } from "../../message/entities/message.entity"

export class CreateConversationDto {
    id: string
    users: User[]
    conversationBeginning: Date
    message: Message
}
