import { Model } from 'sequelize-typescript';
import { University } from "src/university/entities/university.entity";
export declare class User extends Model {
    id: string;
    name: string;
    profession: string;
    age: number;
    universityId: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
    university: University;
}
