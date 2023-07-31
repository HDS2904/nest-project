import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsBoolean, IsOptional } from 'class-validator';
import { CreateUniversityInput } from './create-university.input';

@InputType()
export class UpdateUniversityInput extends PartialType(CreateUniversityInput) {
  @Field({ nullable: true, description: 'input estado de universidad' })
  @IsOptional()
  @IsBoolean()
  status?: boolean;
}
