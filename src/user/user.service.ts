import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {

  users: User[] = [
    {
      id: '1',
      name: "jonathan",
      profession: 'developer',
      age: 30,
      status: true
    },
    {
      id: '2',
      name: "emilia",
      profession: 'doctor',
      age: 28,
      status: true
    },
  ] 

  getAll() {
    return this.users;
  }

  getById(id: string) {
    const user = this.users.find(user => user.id === id);
    if (!user) return { message: 'Usuario no encontrado.' }
    return { message: 'Usuario encontrado.', data: user };
  }

  postEntity(user: CreateUserDto) {
    const id = `${Math.max(...this.users.map( i => parseInt(i.id)), 0) + 1}`;
    this.users.push({...user, id, status: true})
    return { message: 'Usuario creado.'};
  }

  putById(id: string, userDto: UpdateUserDto) {
    const index = this.users.findIndex( u => u.id === id);
    if (index === -1) return { message: 'Usuario no encontrado.' }
    this.users.splice( index, 1, { ...this.users[index], ...userDto}  );
    return { message: 'Usuario editado.' };
  }

  deleteById(id: string) {
    const index = this.users.findIndex( u => u.id === id);
    if (index === -1) return { message: 'Usuario no encontrado.' }
    this.users.splice(index,1);
    return { message: 'Usuario eliminado.' };
  }
}