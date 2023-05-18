import { Controller, Get, Post, Body, Put, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UniversityService } from './university.service';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';

@Controller('university')
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}

  @Get()
  findAll() {
    try {
      return this.universityService.getAll();
    } catch (error) {
      return new HttpException('Error getting data.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.universityService.getById(id);
    } catch (error) {
      return new HttpException('Error getting data.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post()
  create(@Body() university: CreateUniversityDto) {
    try {
      return this.universityService.postEntity(university);
    } catch (error) {
      return new HttpException('Failed to create.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() university: UpdateUniversityDto) {
    try {
      return this.universityService.putById(id, university);
    } catch (error) {
      return new HttpException('Error editing.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.universityService.deleteById(id);
    } catch (error) {
      return new HttpException('Error deleting.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
