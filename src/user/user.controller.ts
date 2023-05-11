import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller('user')
export class UserController {

  constructor( private readonly userService: UserService ) {}

  @Get()
  findAll() {
    return this.userService.getAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.getById(id);
  }

  @Post()
  create(@Body() user: CreateUserDto) {
    return this.userService.postEntity(user);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.userService.putById(id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.deleteById(id);
  }
}