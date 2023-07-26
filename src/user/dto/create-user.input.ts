import { Field, InputType } from "@nestjs/graphql";
import { IsString, IsOptional, IsInt, IsPositive, MaxLength } from "class-validator";

@InputType()
export class CreateUserInput {
  @Field({ description: 'input nombre del usuario.' })
  @IsString()
  @MaxLength(50)
  name: string;

  @Field({ description: 'input profesión del usuario' })
  @IsString()
  @MaxLength(50)
  @IsOptional()
  profession: string;

  @Field({ description: 'input edad del usuario.' })
  @IsInt()
  @IsPositive()
  @IsOptional()
  age: number;
}