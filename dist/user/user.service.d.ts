import { User } from "./entities/user.entity";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { Repository } from "sequelize-typescript";
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    create(createUserInput: CreateUserInput): Promise<User>;
    update(id: string, updateUserInput: UpdateUserInput): Promise<User>;
    remove(id: string): Promise<User>;
}
