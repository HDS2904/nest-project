import { University } from "src/university/entities/university.entity";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user' })
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: "varchar",
    length: 50,
    unique: true
  })
  name: string;

  @Column({
    type: "varchar",
    length: 50,
    nullable: true
  })
  profession: string;

  @Column({
    type:"integer",
    nullable: true
  })
  age: number;

  @Column({
    type: "boolean",
    default: true,
    nullable: true
  })
  status: boolean;

  @Column({
    type: "datetime",
    default: () => 'CURRENT_TIMESTAMP'
  })
  createAt: Date;

  @Column({
    type: "datetime",
    default: () => 'CURRENT_TIMESTAMP'
  })
  updateAt: Date;

  @ManyToOne( () => University, university => university.users )
  university: University;
}