import { University } from './entities/university.entity';
import { CreateUniversityInput } from './dto/create-university.input';
import { UpdateUniversityInput } from './dto/update-university.input';
import { Repository } from 'sequelize-typescript';
export declare class UniversityService {
    private universityRepository;
    constructor(universityRepository: Repository<University>);
    findAll(): Promise<University[]>;
    findOne(id: string): Promise<University>;
    create(createUniversityInput: CreateUniversityInput): Promise<University>;
    update(id: string, updateUniversityInput: UpdateUniversityInput): Promise<University>;
    remove(id: string): Promise<University>;
}
