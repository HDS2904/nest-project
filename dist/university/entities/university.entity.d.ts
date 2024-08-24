import { Model } from 'sequelize-typescript';
import { User } from 'src/user/entities/user.entity';
export declare class University extends Model {
    id: string;
    name: string;
    description: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
    users: User[];
}
