import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
  @Field(() => ID,{ description: 'Identificador del usuario.' })
  id: string;

  @Field({ description: 'Nombre de Usuario.' })
  name: string;

  @Field({ description: 'Profesion del usuario.' })
  profession: string;

  @Field({ description: 'Edad del usuario.' })
  age: number;

  @Field({ description: 'Estado del usuario.' })
  status: boolean;

  @Field({ description: 'Fecha de creación.' })
  createdAt: Date;

  @Field({ description: 'Fecha de edición.' })
  updatedAt: Date;
}