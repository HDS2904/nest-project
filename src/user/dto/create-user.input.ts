import { Field, InputType } from "@nestjs/graphql";
import { IsString, IsOptional, IsInt, IsPositive, MaxLength } from "class-validator";

@InputType()
export class CreateUserInput {
  @Field({ description: 'input nombre del usuario.' })
  @IsString()
  @MaxLength(50)
  name: string;

  @Field({ nullable: true, description: 'input profesión del usuario' })
  @IsString()
  @MaxLength(50)
  @IsOptional()
  profession?: string;

  @Field({ nullable: true, description: 'input edad del usuario.' })
  @IsInt()
  @IsPositive()
  @IsOptional()
  age?: number;

  @Field({ description: 'input id de la universidad asociada.' })
  @IsString()
  universityId: string;
}