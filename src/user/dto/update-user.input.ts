import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsBoolean, IsOptional } from 'class-validator';
import { CreateUserInput } from './create-user.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput){
  @Field({ description: 'input estado del usuario.' })
  @IsBoolean()
  @IsOptional()
  status: boolean;
}