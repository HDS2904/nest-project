import { Inject, Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { Repository } from "sequelize-typescript";
import { v4 as uuid } from "uuid";

@Injectable()
export class UserService {

  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>
  ) { }

  async findAll() {
    const result = await this.userRepository.findAll();
    console.log('getAll: ', result)
    return result;
  }

  async findOne(id: string) {
    const result = await this.userRepository.findByPk(id);
    if (!result) return null;
    console.log('findAll: ', result)
    return result;
  }

  async create(createUserInput: CreateUserInput) {
    const newUser = {
      ...createUserInput,
      id: uuid(),
      status: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    const result = await this.userRepository.create(newUser);
    console.log('createee: ', result)
    return result;
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    const userEdit = {
      ...updateUserInput,
      updateAt: new Date()
    };
    const result1 = await this.userRepository.update(userEdit,{
      where: {
        id: id
      }
    });
    if (!result1 || !result1[0]) return null;
    console.log('updateee: ', result1);
    const result2 = await this.userRepository.findByPk(id);
    if (!result2) return null;
    console.log('findOne: ', result2);
    return result2;
  }

  async remove(id: string) {
    const result1 = await this.userRepository.findByPk(id);
    if (!result1) return null;
    console.log('findOne: ', result1);
    const result2 = await this.userRepository.destroy({
      where: {
        id
      }
    });
    console.log('deleteee: ', result2);
    if (!result2) return null;
    return result1;
  }
}