import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { University } from './entities/university.entity';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';

@Injectable()
export class UniversityService {
  constructor(
    @InjectRepository(University) private universityRepository: Repository<University>
  ) {}

  async getAll() {
    const result = await this.universityRepository.find({relations: { users: true }});
    return { message: 'User found.', data: result };
  }

  async getById(id: string) {
    const university = await this.universityRepository.findOneBy({id});
    if ( !university ) throw new HttpException('University not found', HttpStatus.NOT_FOUND);
    return { message: 'University found.', data: university };
  }

  async postEntity(university: CreateUniversityDto) {
    const tempUniversity = await this.universityRepository.findOneBy({name: university.name});
    if ( tempUniversity ) throw new HttpException('University already exists.', HttpStatus.CONFLICT);
    const newUniversity = this.universityRepository.create(university);
    await this.universityRepository.save(newUniversity);
    return { message: 'University created.'};
  }

  async putById(id: string, universityDto: UpdateUniversityDto) {
    const university = await this.universityRepository.findOneBy({id});
    if ( !university ) throw new HttpException('University not found', HttpStatus.NOT_FOUND);
    await this.universityRepository.update(id, {...universityDto, updateAt: new Date});
    return { message: 'Edited university.' };
  }

  async deleteById(id: string) {
    const university = await this.universityRepository.findOneBy({id});
    if ( !university ) throw new HttpException('University not found', HttpStatus.NOT_FOUND);
    await this.universityRepository.delete(id);
    return { message: 'University deleted.' };
  }

}
