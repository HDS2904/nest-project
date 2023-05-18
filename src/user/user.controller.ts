import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UpdateUserByUniversityDto } from "./dto/update-userByUsnyversity.dto";

@Controller('user')
export class UserController {

  constructor( private readonly userService: UserService ) {}

  @Get()
  findAll() {
    try {
      return this.userService.getAll();
    } catch (error) {
      return new HttpException('Error getting data.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.userService.getById(id);
    } catch (error) {
      return new HttpException('Error getting data.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post()
  create(@Body() user: CreateUserDto) {
    try {
      return this.userService.postEntity(user);
    } catch (error) {
      return new HttpException('Failed to create.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: UpdateUserDto) {
    try {
      return this.userService.putById(id, user);
    } catch (error) {
      return new HttpException('Error editing.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put('university/:id')
  updateByUser(@Param('id') id: string, @Body() user: UpdateUserByUniversityDto) {
    try {
      return this.userService.putByUser(id, user);
    } catch (error) {
      return new HttpException('Error editing.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.userService.deleteById(id);
    } catch (error) {
      return new HttpException('Error deleting.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}