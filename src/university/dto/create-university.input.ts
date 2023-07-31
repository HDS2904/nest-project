import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateUniversityInput {
  @Field({ description: 'input nombre de la universidad' })
  @IsString()
  @MaxLength(50)
  name: string;

  @Field({ nullable: true, description: 'input descriciond e la universidad' })
  @IsString()
  @MaxLength(250)
  @IsOptional()
  description?: string;
}
