import { Repository } from 'typeorm';
import { UserBasicFormEntity } from '../userbasic-form.entity';
export declare class BasicFormService {
    private formRepository;
    constructor(formRepository: Repository<UserBasicFormEntity>);
    findAll(): Promise<UserBasicFormEntity[]>;
    findOne(id: number): Promise<UserBasicFormEntity>;
    create(form: UserBasicFormEntity): Promise<UserBasicFormEntity>;
    update(id: number, form: UserBasicFormEntity): Promise<void>;
    delete(id: number): Promise<void>;
}
