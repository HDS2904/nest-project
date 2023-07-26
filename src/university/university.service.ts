import { Injectable } from '@nestjs/common';
import { University } from './entities/university.entity';
import { CreateUniversityInput } from './dto/create-university.input';
import { UpdateUniversityInput } from './dto/update-university.input';

@Injectable()
export class UniversityService {

  university: University[] = [
    {
      id: '1231',
      name: 'UNMSM',
      description: 'decana de america.',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]

  findAll() {
    return this.university;
  }

  findOne(id: string) {
    const index = this.university.findIndex(u => u.id === id);
    if ( index === -1 ) return null
    return this.university[index];
  }

  create(createUniversityInput: CreateUniversityInput) {
    const id = `${Math.max(...this.university.map( i => parseInt(i.id)), 0) + 1}`;
    const newUniversity = {
      ...createUniversityInput,
      id,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.university.push(newUniversity);
    return newUniversity;
  }

  update(id: string, updateUniversityInput: UpdateUniversityInput) {
    const index = this.university.findIndex(u => u.id === id);
    if ( index === -1 ) return null
    const universityEdit = {
      ...this.university[index],
      ...updateUniversityInput,
      updateAt: new Date()
    };
    this.university.splice(index, 1, universityEdit);
    return universityEdit;
  }

  remove(id: string) {
    const index = this.university.findIndex(u => u.id === id);
    if ( index === -1 ) return null
    const university = this.university.splice(index, 1);
    return university[0];
  }
}
