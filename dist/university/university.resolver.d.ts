import { UniversityService } from './university.service';
import { University } from './entities/university.entity';
import { CreateUniversityInput } from "./dto/create-university.input";
import { UpdateUniversityInput } from './dto/update-university.input';
export declare class UniversityResolver {
    private readonly universityService;
    constructor(universityService: UniversityService);
    findAll(): Promise<University[]>;
    findOne(id: string): Promise<University>;
    createUniversity(createUniversityInput: CreateUniversityInput): Promise<University>;
    updateUniversity(id: string, updateUniversityInput: UpdateUniversityInput): Promise<University>;
    removeUniversity(id: string): Promise<University>;
}
