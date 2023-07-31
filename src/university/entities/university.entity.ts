import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
@Table
export class University extends Model {
  @Field(() => ID, { description: 'Identificador de la universidad.' })
  @PrimaryKey
  @Column
  id: string;

  @Field({ description: 'Nombre de la universidad.' })
  @Column
  name: string;

  @Field({ nullable: true, description: 'Descripcion de la universidad.' })
  @Column
  description: string;

  @Field({ description: 'Estado de la universidad.' })
  @Column
  status: boolean;

  @Field({ description: 'Fecha de creacion de la universidad.' })
  @Column
  createdAt: Date;

  @Field({ description: 'Fecha de edicion de la universidad.' })
  @Column
  updatedAt: Date;

  @HasMany(()=> User)
  users: User[]
}
