import { Repository } from 'typeorm';
import { EducationFormEntity } from '../education-form.entity';
export declare class EducationFormService {
    private formRepository;
    constructor(formRepository: Repository<EducationFormEntity>);
    findAll(): Promise<EducationFormEntity[]>;
    findOne(id: number): Promise<EducationFormEntity>;
    create(form: EducationFormEntity): Promise<EducationFormEntity>;
    update(id: number, form: EducationFormEntity): Promise<void>;
    delete(id: number): Promise<void>;
}
