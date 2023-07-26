import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { CreateUniversityInput } from './create-university.input';

@InputType()
export class UpdateUniversityInput extends PartialType(CreateUniversityInput) {
  @Field({ description: 'input status university' })
  @IsOptional()
  status: boolean;
}
