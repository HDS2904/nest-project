import { IsString, IsNotEmpty, IsOptional, IsInt, IsPositive, MaxLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @MaxLength(50)
  name: string;
  @IsString()
  @MaxLength(50)
  @IsOptional()
  profession: string;
  @IsInt()
  @IsPositive()
  @IsOptional()
  age: number;
}