import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class University {
  @Field(() => ID,{ description: 'Index University.' })
  id: string;

  @Field({ description: 'name University.' })
  name: string;

  @Field({ nullable: true, description: 'description University.' })
  description: string;

  @Field({ nullable: true, description: 'status University.' })
  status: boolean;

  @Field({ description: 'status University.' })
  createdAt: Date;

  @Field({ description: 'status University.' })
  updatedAt: Date;
}
