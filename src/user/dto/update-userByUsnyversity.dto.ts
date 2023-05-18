import { IsString } from "class-validator";

export class UpdateUserByUniversityDto {
  @IsString()
  universityId: string;
}
