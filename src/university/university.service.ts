import { Inject, Injectable } from '@nestjs/common';
import { University } from './entities/university.entity';
import { CreateUniversityInput } from './dto/create-university.input';
import { UpdateUniversityInput } from './dto/update-university.input';
import { Repository } from 'sequelize-typescript';
import { v4 as uuid } from "uuid";

@Injectable()
export class UniversityService {

  constructor(
    @Inject('UNIVERSITY_REPOSITORY') private universityRepository: Repository<University>
  ) {}

  async findAll() {
    const result = await this.universityRepository.findAll();
    if (!result) return null;
    console.log('findAll: ', result);
    return result;
  }

  async findOne(id: string) {
    const result = await this.universityRepository.findByPk(id);
    if (!result) return null;
    console.log('findOne: ', result);
    return result;
  }

  async create(createUniversityInput: CreateUniversityInput) {
    const newUniversity = {
      ...createUniversityInput,
      id: uuid(),
      status: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    const result = await this.universityRepository.create(newUniversity);
    console.log('createee: ', result)
    return result;
  }

  async update(id: string, updateUniversityInput: UpdateUniversityInput) {
    const universityEdit = {
      ...updateUniversityInput,
      updateAt: new Date()
    };
    const result1 = await this.universityRepository.update(universityEdit,{
      where: {
        id: id
      }
    });
    if (!result1 || !result1[0]) return null;
    console.log('updateee: ', result1);
    const result2 = await this.universityRepository.findByPk(id);
    if (!result2) return null;
    console.log('findOne: ', result2);
    return result2;
  }

  async remove(id: string) {
    const result1 = await this.universityRepository.findByPk(id);
    if (!result1) return null;
    console.log('findOne: ', result1);
    const result2 = await this.universityRepository.destroy({
      where: {
        id
      }
    });
    console.log('deleteee: ', result2);
    if (!result2) return null;
    return result1;
  }
}
