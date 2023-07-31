import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Table, Column, Model, PrimaryKey, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { University } from "src/university/entities/university.entity";

@Table
@ObjectType()
export class User extends Model{
  @Field(() => ID,{ description: 'Identificador del usuario.' })
  @PrimaryKey
  @Column
  id: string;

  @Field({ description: 'Nombre de Usuario.' })
  @Column
  name: string;

  @Field({nullable: true, description: 'Profesion del usuario.' })
  @Column
  profession: string;

  @Field({nullable: true, description: 'Edad del usuario.' })
  @Column
  age: number;

  @Field({ description: 'Id de la universidad asociada.' })
  @ForeignKey(() => University)
  @Column
  universityId: string;

  @Field({ description: 'Estado del usuario.' })
  @Column
  status: boolean;

  @Field({ description: 'Fecha de creación.' })
  @Column
  createdAt: Date;

  @Field({ description: 'Fecha de edición.' })
  @Column
  updatedAt: Date;

  @BelongsTo(() => University)
  university: University;
}