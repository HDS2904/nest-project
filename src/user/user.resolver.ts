import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserService } from "./user.service";
import { User } from "./entities/user.entity";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";

@Resolver(() => User)
export class UserResolver {

  constructor( private readonly userService: UserService ) {}

  @Query(() => [User], { name: 'Users', description: 'Devuelve una lista de usuarios.' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { nullable: true, name: 'UserById', description: 'Retorna un usuario según el id consultado.' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User, { name: 'CreateUser', description: 'permite la creación de un usuario.' })
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Mutation(() => User, { name: 'UpdateUser', description: 'Permite la mutación de usuario por id' })
  update(@Args('id', { type: () => ID}) id: string, @Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(id, updateUserInput);
  }

  @Mutation(() => User, { nullable: true, name: 'removeUser', description: 'Permite eliminar un usuario por id.' })
  remove(@Args('id', { type: () => ID }) id: string) {
    return this.userService.remove(id);
  }
}