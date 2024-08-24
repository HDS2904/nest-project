import { UserService } from "./user.service";
import { User } from "./entities/user.entity";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    create(createUserInput: CreateUserInput): Promise<User>;
    update(id: string, updateUserInput: UpdateUserInput): Promise<User>;
    remove(id: string): Promise<User>;
}
