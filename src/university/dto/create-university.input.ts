import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateUniversityInput {
  @Field({ description: 'input Name university' })
  @IsString()
  @MaxLength(50)
  name: string;

  @Field({ nullable: true, description: 'input description university' })
  @IsString()
  @IsOptional()
  description: string;
}
