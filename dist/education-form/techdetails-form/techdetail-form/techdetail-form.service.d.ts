import { Repository } from 'typeorm';
import { TechdetailsFormEntity } from '../techdetail.entity';
export declare class TechdetailFormService {
    private formRepository;
    constructor(formRepository: Repository<TechdetailsFormEntity>);
    findAll(): Promise<TechdetailsFormEntity[]>;
    findOne(id: number): Promise<TechdetailsFormEntity>;
    create(form: TechdetailsFormEntity): Promise<TechdetailsFormEntity>;
    update(id: number, form: TechdetailsFormEntity): Promise<void>;
    delete(id: number): Promise<void>;
}
