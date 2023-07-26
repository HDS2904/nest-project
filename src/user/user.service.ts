import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";

@Injectable()
export class UserService {

  users: User[] = [
    {
      id: '1',
      name: "jonathan",
      profession: 'developer',
      age: 30,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2',
      name: "emilia",
      profession: 'doctor',
      age: 28,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) return null;
    return this.users[index];
  }

  create(createUserInput: CreateUserInput) {
    const id = `${Math.max(...this.users.map( i => parseInt(i.id)), 0) + 1}`;
    const newUser = {
      ...createUserInput,
      id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    const index = this.users.findIndex( u => u.id === id);
    if (index === -1) return null;
    const userEdit = {
      ...this.users[index],
      ...updateUserInput,
      updateAt: new Date()
    };
    this.users.splice(index, 1, userEdit);
    return userEdit;
  }

  remove(id: string) {
    const index = this.users.findIndex( u => u.id === id);
    if (index === -1) return null;
    const user = this.users.splice(index, 1);
    return user[0];
  }
}