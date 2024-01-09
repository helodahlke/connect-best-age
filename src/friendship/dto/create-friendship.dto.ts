import { User } from "src/user/entities/user.entity";

export class CreateFriendshipDto {
    firstUser: User
    secondUser: User
    beginning: Date;
}

