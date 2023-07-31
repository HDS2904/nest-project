import { Args, ID, Mutation, Query, Resolver} from '@nestjs/graphql';
import { UniversityService } from './university.service';
import { University } from './entities/university.entity';
import { CreateUniversityInput } from "./dto/create-university.input";
import { UpdateUniversityInput } from './dto/update-university.input';

@Resolver(() => University)
export class UniversityResolver {
  constructor(private readonly universityService: UniversityService) {}

  @Query(() => [University], { name: 'Universities', description: 'Devuelve una lista de universidades.' })
  findAll() {
    return this.universityService.findAll();
  }

  @Query(() => University, { nullable: true, name: 'UniversityById', description: 'Retorna una universidad según el id consultado.' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.universityService.findOne(id);
  }

  @Mutation(() => University, { name: 'CreateUniversity', description: 'permite la creación de una universidad.' })
  createUniversity(@Args('createUniversityInput') createUniversityInput: CreateUniversityInput) {
    return this.universityService.create(createUniversityInput);
  }

  @Mutation(() => University, { name: 'UpdateUniversity', description: 'Permite la mutación de univerdidad por id' })
  updateUniversity(@Args('id', { type: () => ID}) id: string, @Args('updateUniversityInput') updateUniversityInput: UpdateUniversityInput) {
    return this.universityService.update(id, updateUniversityInput);
  }

  @Mutation(() => University, { nullable: true, name: 'removeUniversity', description: 'Permite eliminar una universidad por id.' })
  removeUniversity(@Args('id', { type: () => ID }) id: string) {
    return this.universityService.remove(id);
  }
}
