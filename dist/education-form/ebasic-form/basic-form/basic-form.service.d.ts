import { Repository } from 'typeorm';
import { BasicFormEntity } from '../basic-form.entity';
export declare class BasicFormService {
    private formRepository;
    constructor(formRepository: Repository<BasicFormEntity>);
    findAll(): Promise<BasicFormEntity[]>;
    findOne(id: number): Promise<BasicFormEntity>;
    create(form: BasicFormEntity): Promise<BasicFormEntity>;
    update(id: number, form: BasicFormEntity): Promise<void>;
    delete(id: number): Promise<void>;
}
