import { User } from "src/user/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'university' })
export class University {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: "varchar",
    length: 100,
    unique: true
  })
  name: string;

  @Column({
    type: "varchar",
    nullable: true
  })
  description: string;

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

  @OneToMany( () => User, user => user.university )
  users: User[]
}
