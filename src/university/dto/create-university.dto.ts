import { IsOptional, IsString, MaxLength } from "class-validator";

export class CreateUniversityDto {
  @IsString()
  @MaxLength(100)
  name: string;
  @IsString()
  @MaxLength(255)
  @IsOptional()
  description: string;
}
