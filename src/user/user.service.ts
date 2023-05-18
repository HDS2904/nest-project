import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UpdateUserByUniversityDto } from "./dto/update-userByUsnyversity.dto";
import { UniversityService } from "src/university/university.service";

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private universiteService: UniversityService
  ) {}

  async getAll() {
    const result = await this.userRepository.find({relations: {university: true}});
    return { message: 'User found.', data: result };
  }

  async getById(id: string) {
    const user = await this.userRepository.findOneBy({id});
    if ( !user ) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return { message: 'User found.', data: user };
  }

  async postEntity(user: CreateUserDto) {
    const tempUser = await this.userRepository.findOneBy({name: user.name});
    if ( tempUser ) throw new HttpException('User already exists.', HttpStatus.CONFLICT);
    const newUser = this.userRepository.create(user);
    await this.userRepository.save(newUser);
    return { message: 'User created.'};
  }

  async putById(id: string, userDto: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({id});
    if ( !user ) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    await this.userRepository.update(id, {...userDto, updateAt: new Date});
    return { message: 'Edited user.' };
  }

  async deleteById(id: string) {
    const user = await this.userRepository.findOneBy({id});
    if ( !user ) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    await this.userRepository.delete(id);
    return { message: 'User deleted.' };
  }

  async putByUser(id: string, body: UpdateUserByUniversityDto) {
    const university = await this.universiteService.getById(body.universityId);
    if ( !university.data ) throw new HttpException('University not found', HttpStatus.NOT_FOUND);
    const user = await this.userRepository.findOneBy({id});
    if ( !user ) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    await this.userRepository.update(id, {university: university.data, updateAt: new Date});
    return { message: 'User registed in the university.' };
  }
}